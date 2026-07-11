(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const fu="modulepreload",pu=function(r){return"/ellipse/"+r},$a={},rh=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(t.map(l=>{if(l=pu(l),l in $a)return;$a[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":fu,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((u,f)=>{h.addEventListener("load",u),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="160",mu=0,Ka=1,gu=2,oh=1,_u=2,Pn=3,_n=0,Vt=1,Ht=2,ii=0,Ci=1,Nn=2,Za=3,Ja=4,xu=5,wi=100,vu=101,yu=102,Qa=103,el=104,Mu=200,Su=201,bu=202,Tu=203,aa=204,la=205,Eu=206,wu=207,Au=208,Ru=209,Cu=210,Lu=211,Pu=212,Iu=213,Du=214,Uu=0,Nu=1,Fu=2,qr=3,Ou=4,ku=5,Hu=6,Bu=7,Ta=0,zu=1,Gu=2,si=0,Wu=1,Vu=2,Xu=3,ah=4,qu=5,Yu=6,tl="attached",ju="detached",lh=300,ms=301,gs=302,ca=303,ha=304,to=306,Yt=1e3,qt=1001,Yr=1002,Lt=1003,ua=1004,Gr=1005,Xt=1006,ch=1007,Di=1008,ri=1009,$u=1010,Ku=1011,Ea=1012,hh=1013,ti=1014,Dn=1015,Vs=1016,uh=1017,dh=1018,Li=1020,Zu=1021,Jt=1023,Ju=1024,Qu=1025,Pi=1026,_s=1027,ed=1028,fh=1029,td=1030,ph=1031,mh=1033,fo=33776,po=33777,mo=33778,go=33779,nl=35840,il=35841,sl=35842,rl=35843,gh=36196,ol=37492,al=37496,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,_l=37817,xl=37818,vl=37819,yl=37820,Ml=37821,_o=36492,Sl=36494,bl=36495,nd=36283,Tl=36284,El=36285,wl=36286,Xs=2300,xs=2301,xo=2302,Al=2400,Rl=2401,Cl=2402,id=2500,sd=0,_h=1,da=2,xh=3e3,Ii=3001,rd=3200,od=3201,wa=0,ad=1,sn="",$e="srgb",ft="srgb-linear",Aa="display-p3",no="display-p3-linear",jr="linear",ot="srgb",$r="rec709",Kr="p3",Bi=7680,Ll=519,ld=512,cd=513,hd=514,vh=515,ud=516,dd=517,fd=518,pd=519,fa=35044,Pl="300 es",pa=1035,Un=2e3,Zr=2001;class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Il=1234567;const ds=Math.PI/180,vs=180/Math.PI;function fn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Ot(r,e,t){return Math.max(e,Math.min(t,r))}function Ra(r,e){return(r%e+e)%e}function md(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function gd(r,e,t){return r!==e?(t-r)/(e-r):0}function zs(r,e,t){return(1-t)*r+t*e}function _d(r,e,t,n){return zs(r,e,1-Math.exp(-t*n))}function xd(r,e=1){return e-Math.abs(Ra(r,e*2)-e)}function vd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function yd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Md(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Sd(r,e){return r+Math.random()*(e-r)}function bd(r){return r*(.5-Math.random())}function Td(r){r!==void 0&&(Il=r);let e=Il+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ed(r){return r*ds}function wd(r){return r*vs}function ma(r){return(r&r-1)===0&&r!==0}function Ad(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Jr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rd(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),d=o((e+n)/2),h=s((e-n)/2),u=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*d,l*h,l*u,a*c);break;case"YZY":r.set(l*u,a*d,l*h,a*c);break;case"ZXZ":r.set(l*h,l*u,a*d,a*c);break;case"XZX":r.set(a*d,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*d,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Cd={DEG2RAD:ds,RAD2DEG:vs,generateUUID:fn,clamp:Ot,euclideanModulo:Ra,mapLinear:md,inverseLerp:gd,lerp:zs,damp:_d,pingpong:xd,smoothstep:vd,smootherstep:yd,randInt:Md,randFloat:Sd,randFloatSpread:bd,seededRandom:Td,degToRad:Ed,radToDeg:wd,isPowerOfTwo:ma,ceilPowerOfTwo:Ad,floorPowerOfTwo:Jr,setQuaternionFromProperEuler:Rd,normalize:tt,denormalize:gn};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,i,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],v=i[4],S=i[7],E=i[2],A=i[5],R=i[8];return s[0]=o*_+a*x+l*E,s[3]=o*m+a*v+l*A,s[6]=o*p+a*S+l*R,s[1]=c*_+d*x+h*E,s[4]=c*m+d*v+h*A,s[7]=c*p+d*S+h*R,s[2]=u*_+f*x+g*E,s[5]=u*m+f*v+g*A,s[8]=u*p+f*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*s,f=c*s-o*l,g=t*h+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-d*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(d*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new Xe;function yh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ld(){const r=qs("canvas");return r.style.display="block",r}const Dl={};function Gs(r){r in Dl||(Dl[r]=!0,console.warn(r))}const Ul=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nl=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tr={[ft]:{transfer:jr,primaries:$r,toReference:r=>r,fromReference:r=>r},[$e]:{transfer:ot,primaries:$r,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[no]:{transfer:jr,primaries:Kr,toReference:r=>r.applyMatrix3(Nl),fromReference:r=>r.applyMatrix3(Ul)},[Aa]:{transfer:ot,primaries:Kr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Nl),fromReference:r=>r.applyMatrix3(Ul).convertLinearToSRGB()}},Pd=new Set([ft,no]),Ze={enabled:!0,_workingColorSpace:ft,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Pd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=tr[e].toReference,i=tr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return tr[r].primaries},getTransfer:function(r){return r===sn?jr:tr[r].transfer}};function fs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zi;class Mh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=qs("canvas")),zi.width=e.width,zi.height=e.height;const n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=fs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fs(t[n]/255)*255):t[n]=fs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Id=0;class Sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=fn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Mo(i[o].image)):s.push(Mo(i[o]))}else s=Mo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Mo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Mh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dd=0;class Mt extends Ts{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=qt,i=qt,s=Xt,o=Di,a=Jt,l=ri,c=Mt.DEFAULT_ANISOTROPY,d=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=fn(),this.name="",this.source=new Sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ii?$e:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yt:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yt:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$e?Ii:xh}set encoding(e){Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ii?$e:sn}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=lh;Mt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(f+1)/2,E=(p+1)/2,A=(d+u)/4,R=(h+_)/4,k=(g+m)/4;return v>S&&v>E?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=R/n):S>E?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=k/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=R/s,i=k/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(u-d)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ud extends Ts{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Gs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ii?$e:sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Ud{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bh extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nd extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==u||c!==f||d!==g){let m=1-a;const p=l*u+c*f+d*g+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,p*x);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const S=a*x;if(l=l*m+u*S,c=c*m+f*S,d=d*m+g*S,h=h*m+_*S,m===1-a){const E=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=E,c*=E,d*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+d*h+l*f-c*u,e[t+1]=l*g+d*u+c*h-a*f,e[t+2]=c*g+d*f+a*u-l*h,e[t+3]=d*g-a*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"YZX":this._x=u*d*h+c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h-u*f*g;break;case"XZY":this._x=u*d*h-c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+a+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-s*l,this._y=i*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-s*h,this.z=i+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new C,Fl=new rn;class ln{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),ir.subVectors(this.max,Ls),Gi.subVectors(e.a,Ls),Wi.subVectors(e.b,Ls),Vi.subVectors(e.c,Ls),Bn.subVectors(Wi,Gi),zn.subVectors(Vi,Wi),ui.subVectors(Gi,Vi);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ui.z,ui.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ui.z,0,-ui.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ui.y,ui.x,0];return!bo(t,Gi,Wi,Vi,ir)||(t=[1,0,0,0,1,0,0,0,1],!bo(t,Gi,Wi,Vi,ir))?!1:(sr.crossVectors(Bn,zn),t=[sr.x,sr.y,sr.z],bo(t,Gi,Wi,Vi,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new C,new C,new C,new C,new C,new C,new C,new C],cn=new C,nr=new ln,Gi=new C,Wi=new C,Vi=new C,Bn=new C,zn=new C,ui=new C,Ls=new C,ir=new C,sr=new C,di=new C;function bo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){di.fromArray(r,s);const a=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),d=n.dot(di);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Fd=new ln,Ps=new C,To=new C;class vn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const t=Ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(To)),this.expandByPoint(Ps.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new C,Eo=new C,rr=new C,Gn=new C,wo=new C,or=new C,Ao=new C;class io{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Eo.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Eo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(rr),a=Gn.dot(this.direction),l=-Gn.dot(rr),c=Gn.lengthSq(),d=Math.abs(1-o*o);let h,u,f,g;if(d>0)if(h=o*l-a,u=o*a-l,g=s*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,f=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Eo).addScaledVector(rr,u),f}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,i,s){wo.subVectors(t,e),or.subVectors(n,e),Ao.crossVectors(wo,or);let o=this.direction.dot(Ao),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,e);const l=a*this.direction.dot(or.crossVectors(Gn,or));if(l<0)return null;const c=a*this.direction.dot(wo.cross(Gn));if(c<0||l+c>o)return null;const d=-a*Gn.dot(Ao);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,s,o,a,l,c,d,h,u,f,g,_,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,d,h,u,f,g,_,m)}set(e,t,n,i,s,o,a,l,c,d,h,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Xi.setFromMatrixColumn(e,0).length(),s=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*d,f=o*h,g=a*d,_=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,f=l*h,g=c*d,_=c*h;t[0]=u+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,f=l*h,g=c*d,_=c*h;t[0]=u-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,f=o*h,g=a*d,_=a*h;t[0]=l*d,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*h,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=_-u*h,t[8]=g*h+f,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*h+g,t[10]=u-_*h}else if(e.order==="XZY"){const u=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+_,t[5]=o*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Od,e,kd)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Wn.crossVectors(n,$t),Wn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Wn.crossVectors(n,$t)),Wn.normalize(),ar.crossVectors($t,Wn),i[0]=Wn.x,i[4]=ar.x,i[8]=$t.x,i[1]=Wn.y,i[5]=ar.y,i[9]=$t.y,i[2]=Wn.z,i[6]=ar.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],v=n[7],S=n[11],E=n[15],A=i[0],R=i[4],k=i[8],y=i[12],w=i[1],I=i[5],D=i[9],$=i[13],P=i[2],F=i[6],W=i[10],J=i[14],j=i[3],Q=i[7],ee=i[11],ae=i[15];return s[0]=o*A+a*w+l*P+c*j,s[4]=o*R+a*I+l*F+c*Q,s[8]=o*k+a*D+l*W+c*ee,s[12]=o*y+a*$+l*J+c*ae,s[1]=d*A+h*w+u*P+f*j,s[5]=d*R+h*I+u*F+f*Q,s[9]=d*k+h*D+u*W+f*ee,s[13]=d*y+h*$+u*J+f*ae,s[2]=g*A+_*w+m*P+p*j,s[6]=g*R+_*I+m*F+p*Q,s[10]=g*k+_*D+m*W+p*ee,s[14]=g*y+_*$+m*J+p*ae,s[3]=x*A+v*w+S*P+E*j,s[7]=x*R+v*I+S*F+E*Q,s[11]=x*k+v*D+S*W+E*ee,s[15]=x*y+v*$+S*J+E*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*a*u+n*c*u+i*a*f-n*l*f)+_*(+t*l*f-t*c*u+s*o*u-i*o*f+i*c*d-s*l*d)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*d-n*c*d)+p*(-i*a*d-t*l*h+t*a*u+i*o*h-n*o*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=h*m*c-_*u*c+_*l*f-a*m*f-h*l*p+a*u*p,v=g*u*c-d*m*c-g*l*f+o*m*f+d*l*p-o*u*p,S=d*_*c-g*h*c+g*a*f-o*_*f-d*a*p+o*h*p,E=g*h*l-d*_*l-g*a*u+o*_*u+d*a*m-o*h*m,A=t*x+n*v+i*S+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=x*R,e[1]=(_*u*s-h*m*s-_*i*f+n*m*f+h*i*p-n*u*p)*R,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*R,e[3]=(h*l*s-a*u*s-h*i*c+n*u*c+a*i*f-n*l*f)*R,e[4]=v*R,e[5]=(d*m*s-g*u*s+g*i*f-t*m*f-d*i*p+t*u*p)*R,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*R,e[7]=(o*u*s-d*l*s+d*i*c-t*u*c-o*i*f+t*l*f)*R,e[8]=S*R,e[9]=(g*h*s-d*_*s-g*n*f+t*_*f+d*n*p-t*h*p)*R,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*R,e[11]=(d*a*s-o*h*s-d*n*c+t*h*c+o*n*f-t*a*f)*R,e[12]=E*R,e[13]=(d*_*i-g*h*i+g*n*u-t*_*u-d*n*m+t*h*m)*R,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*h*i-d*a*i+d*n*l-t*h*l-o*n*u+t*a*u)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,h=a+a,u=s*c,f=s*d,g=s*h,_=o*d,m=o*h,p=a*h,x=l*c,v=l*d,S=l*h,E=n.x,A=n.y,R=n.z;return i[0]=(1-(_+p))*E,i[1]=(f+S)*E,i[2]=(g-v)*E,i[3]=0,i[4]=(f-S)*A,i[5]=(1-(u+p))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(g+v)*R,i[9]=(m-x)*R,i[10]=(1-(u+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Xi.set(i[0],i[1],i[2]).length();const o=Xi.set(i[4],i[5],i[6]).length(),a=Xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const c=1/s,d=1/o,h=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=d,hn.elements[5]*=d,hn.elements[6]*=d,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Un){const l=this.elements,c=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(a===Un)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Zr)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Un){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(o-s),u=(t+e)*c,f=(n+i)*d;let g,_;if(a===Un)g=(o+s)*h,_=-2*h;else if(a===Zr)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xi=new C,hn=new ze,Od=new C(0,0,0),kd=new C(1,1,1),Wn=new C,ar=new C,$t=new C,Ol=new ze,kl=new rn;class so{constructor(e=0,t=0,n=0,i=so.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ol,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}so.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hd=0;const Hl=new C,qi=new rn,wn=new ze,lr=new C,Is=new C,Bd=new C,zd=new rn,Bl=new C(1,0,0),zl=new C(0,1,0),Gl=new C(0,0,1),Gd={type:"added"},Wd={type:"removed"};class at extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new C,t=new so,n=new rn,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Xe}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Gl,e)}translateOnAxis(e,t){return Hl.copy(e).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Is,lr,this.up):wn.lookAt(lr,Is,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),qi.setFromRotationMatrix(wn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,zd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DEFAULT_UP=new C(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new C,An=new C,Ro=new C,Rn=new C,Yi=new C,ji=new C,Wl=new C,Co=new C,Lo=new C,Po=new C;let cr=!1;class Zt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){un.subVectors(i,t),An.subVectors(n,t),Ro.subVectors(e,t);const o=un.dot(un),a=un.dot(An),l=un.dot(Ro),c=An.dot(An),d=An.dot(Ro),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(c*l-a*d)*u,g=(o*d-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,n,i,s,o,a,l){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),An.subVectors(e,t),un.cross(An).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),An.subVectors(this.a,this.b),un.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),Zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Yi.subVectors(i,n),ji.subVectors(s,n),Co.subVectors(e,n);const l=Yi.dot(Co),c=ji.dot(Co);if(l<=0&&c<=0)return t.copy(n);Lo.subVectors(e,i);const d=Yi.dot(Lo),h=ji.dot(Lo);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Yi,o);Po.subVectors(e,s);const f=Yi.dot(Po),g=ji.dot(Po);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ji,a);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return Wl.subVectors(s,i),a=(h-d)/(h-d+(f-g)),t.copy(i).addScaledVector(Wl,a);const p=1/(m+_+u);return o=_*p,a=u*p,t.copy(n).addScaledVector(Yi,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Io(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Ra(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Io(o,s,e+1/3),this.g=Io(o,s,e),this.b=Io(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){const n=Eh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return Ze.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Ot(Nt.r*255,0,255))*65536+Math.round(Ot(Nt.g*255,0,255))*256+Math.round(Ot(Nt.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,s=Nt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=$e){Ze.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(hr);const n=zs(Vn.h,hr.h,t),i=zs(Vn.s,hr.s,t),s=zs(Vn.l,hr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Te;Te.NAMES=Eh;let Vd=0;class an extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=Ci,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class It extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new C,ur=new Le;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fa&&(e.usage=this.usage),e}}class wh extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ah extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xd=0;const tn=new ze,Do=new at,$i=new C,Kt=new ln,Ds=new ln,Ct=new C;class wt extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?Ah:wh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(Kt.min,Ds.min),Kt.expandByPoint(Ct),Ct.addVectors(Kt.max,Ds.max),Kt.expandByPoint(Ct)):(Kt.expandByPoint(Ds.min),Kt.expandByPoint(Ds.max))}Kt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ct.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(e,c),Ct.add($i)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<a;w++)c[w]=new C,d[w]=new C;const h=new C,u=new C,f=new C,g=new Le,_=new Le,m=new Le,p=new C,x=new C;function v(w,I,D){h.fromArray(i,w*3),u.fromArray(i,I*3),f.fromArray(i,D*3),g.fromArray(o,w*2),_.fromArray(o,I*2),m.fromArray(o,D*2),u.sub(h),f.sub(h),_.sub(g),m.sub(g);const $=1/(_.x*m.y-m.x*_.y);isFinite($)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar($),x.copy(f).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar($),c[w].add(p),c[I].add(p),c[D].add(p),d[w].add(x),d[I].add(x),d[D].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let w=0,I=S.length;w<I;++w){const D=S[w],$=D.start,P=D.count;for(let F=$,W=$+P;F<W;F+=3)v(n[F+0],n[F+1],n[F+2])}const E=new C,A=new C,R=new C,k=new C;function y(w){R.fromArray(s,w*3),k.copy(R);const I=c[w];E.copy(I),E.sub(R.multiplyScalar(R.dot(I))).normalize(),A.crossVectors(k,I);const $=A.dot(d[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=$}for(let w=0,I=S.length;w<I;++w){const D=S[w],$=D.start,P=D.count;for(let F=$,W=$+P;F<W;F+=3)y(n[F+0]),y(n[F+1]),y(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,s=new C,o=new C,a=new C,l=new C,c=new C,d=new C,h=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*d;for(let p=0;p<d;p++)u[g++]=c[f++]}return new St(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new ze,fi=new io,dr=new vn,Xl=new C,Ki=new C,Zi=new C,Ji=new C,Uo=new C,fr=new C,pr=new Le,mr=new Le,gr=new Le,ql=new C,Yl=new C,jl=new C,_r=new C,xr=new C;class ge extends at{constructor(e=new wt,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){fr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Uo.fromBufferAttribute(h,e),o?fr.addScaledVector(Uo,d):fr.addScaledVector(Uo.sub(t),d))}t.add(fr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(dr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(dr,Xl)===null||fi.origin.distanceToSquared(Xl)>(e.far-e.near)**2))&&(Vl.copy(s).invert(),fi.copy(e.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,E=v;S<E;S+=3){const A=a.getX(S),R=a.getX(S+1),k=a.getX(S+2);i=vr(this,p,e,n,c,d,h,A,R,k),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);i=vr(this,o,e,n,c,d,h,x,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,E=v;S<E;S+=3){const A=S,R=S+1,k=S+2;i=vr(this,p,e,n,c,d,h,A,R,k),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,S=m+2;i=vr(this,o,e,n,c,d,h,x,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function qd(r,e,t,n,i,s,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===_n,a),l===null)return null;xr.copy(a),xr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(xr);return c<t.near||c>t.far?null:{distance:c,point:xr.clone(),object:r}}function vr(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ki),r.getVertexPosition(l,Zi),r.getVertexPosition(c,Ji);const d=qd(r,e,t,n,Ki,Zi,Ji,_r);if(d){i&&(pr.fromBufferAttribute(i,a),mr.fromBufferAttribute(i,l),gr.fromBufferAttribute(i,c),d.uv=Zt.getInterpolation(_r,Ki,Zi,Ji,pr,mr,gr,new Le)),s&&(pr.fromBufferAttribute(s,a),mr.fromBufferAttribute(s,l),gr.fromBufferAttribute(s,c),d.uv1=Zt.getInterpolation(_r,Ki,Zi,Ji,pr,mr,gr,new Le),d.uv2=d.uv1),o&&(ql.fromBufferAttribute(o,a),Yl.fromBufferAttribute(o,l),jl.fromBufferAttribute(o,c),d.normal=Zt.getInterpolation(_r,Ki,Zi,Ji,ql,Yl,jl,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new C,materialIndex:0};Zt.getNormal(Ki,Zi,Ji,h.normal),d.face=h}return d}class Oi extends wt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(h,2));function g(_,m,p,x,v,S,E,A,R,k,y){const w=S/R,I=E/k,D=S/2,$=E/2,P=A/2,F=R+1,W=k+1;let J=0,j=0;const Q=new C;for(let ee=0;ee<W;ee++){const ae=ee*I-$;for(let ie=0;ie<F;ie++){const G=ie*w-D;Q[_]=G*x,Q[m]=ae*v,Q[p]=P,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=A>0?1:-1,d.push(Q.x,Q.y,Q.z),h.push(ie/R),h.push(1-ee/k),J+=1}}for(let ee=0;ee<k;ee++)for(let ae=0;ae<R;ae++){const ie=u+ae+F*ee,G=u+ae+F*(ee+1),K=u+(ae+1)+F*(ee+1),q=u+(ae+1)+F*ee;l.push(ie,G,q),l.push(G,K,q),j+=6}a.addGroup(f,j,y),f+=j,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(r){const e={};for(let t=0;t<r.length;t++){const n=ys(r[t]);for(const i in n)e[i]=n[i]}return e}function Yd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Rh(r){return r.getRenderTarget()===null?r.outputColorSpace:Ze.workingColorSpace}const jd={clone:ys,merge:Wt};var $d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=Yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ch extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends Ch{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ds*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,es=1;class Zd extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(Qi,es,e,t);i.layers=this.layers,this.add(i);const s=new kt(Qi,es,e,t);s.layers=this.layers,this.add(s);const o=new kt(Qi,es,e,t);o.layers=this.layers,this.add(o);const a=new kt(Qi,es,e,t);a.layers=this.layers,this.add(a);const l=new kt(Qi,es,e,t);l.layers=this.layers,this.add(l);const c=new kt(Qi,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lh extends Mt{constructor(e,t,n,i,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,n,i,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jd extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Gs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ii?$e:sn),this.texture=new Lh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oi(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:ii});s.uniforms.tEquirect.value=t;const o=new ge(i,s),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Xt),new Zd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const No=new C,Qd=new C,ef=new Xe;class Ti{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=No.subVectors(n,t).cross(Qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(No),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ef.getNormalMatrix(e),i=this.coplanarPoint(No).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new vn,yr=new C;class Ca{constructor(e=new Ti,t=new Ti,n=new Ti,i=new Ti,s=new Ti,o=new Ti){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,u-c,m-f,S-p).normalize(),n[1].setComponents(l+s,u+c,m+f,S+p).normalize(),n[2].setComponents(l+o,u+d,m+g,S+x).normalize(),n[3].setComponents(l-o,u-d,m-g,S-x).normalize(),n[4].setComponents(l-a,u-h,m-_,S-v).normalize(),t===Un)n[5].setComponents(l+a,u+h,m+_,S+v).normalize();else if(t===Zr)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(yr.x=i.normal.x>0?e.max.x:e.min.x,yr.y=i.normal.y>0?e.max.y:e.min.y,yr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ph(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function tf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const h=c.array,u=c.usage,f=h.byteLength,g=r.createBuffer();r.bindBuffer(d,g),r.bufferData(d,h,u),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,d,h){const u=d.array,f=d._updateRange,g=d.updateRanges;if(r.bindBuffer(h,c),f.count===-1&&g.length===0&&r.bufferSubData(h,0,u),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?r.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):r.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(r.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class La extends wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=e/a,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const x=p*u-o;for(let v=0;v<c;v++){const S=v*h-s;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,S=x+c*(p+1),E=x+1+c*(p+1),A=x+1+c*p;f.push(v,S,A),f.push(S,E,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}var nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sf=`#ifdef USE_ALPHAHASH
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
#endif`,rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
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
#endif`,hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uf=`#ifdef USE_BATCHING
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
#endif`,df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gf=`#ifdef USE_IRIDESCENCE
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
#endif`,_f=`#ifdef USE_BUMPMAP
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wf=`#define PI 3.141592653589793
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
} // validated`,Af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rf=`vec3 transformedNormal = objectNormal;
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
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,If=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uf=`
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
}`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
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
}`,Xf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
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
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tp=`PhysicalMaterial material;
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
#endif`,np=`struct PhysicalMaterial {
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
}`,ip=`
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fp=`#if defined( USE_POINTS_UV )
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
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
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
#endif`,vp=`#ifdef USE_MORPHTARGETS
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
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
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
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zp=`float getShadowMask() {
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
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,im=`uniform sampler2D t2D;
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`#include <common>
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
}`,cm=`#if DEPTH_PACKING == 3200
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
}`,hm=`#define DISTANCE
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
}`,um=`#define DISTANCE
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`uniform float scale;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 diffuse;
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
}`,xm=`#define LAMBERT
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
}`,vm=`#define LAMBERT
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
}`,ym=`#define MATCAP
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
}`,Mm=`#define MATCAP
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
}`,Sm=`#define NORMAL
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
}`,bm=`#define NORMAL
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
}`,Tm=`#define PHONG
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
}`,Em=`#define PHONG
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
}`,wm=`#define STANDARD
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
}`,Am=`#define STANDARD
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
}`,Rm=`#define TOON
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
}`,Cm=`#define TOON
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
}`,Lm=`uniform float size;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Dm=`uniform vec3 color;
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
}`,Um=`uniform float rotation;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:nf,alphahash_pars_fragment:sf,alphamap_fragment:rf,alphamap_pars_fragment:of,alphatest_fragment:af,alphatest_pars_fragment:lf,aomap_fragment:cf,aomap_pars_fragment:hf,batching_pars_vertex:uf,batching_vertex:df,begin_vertex:ff,beginnormal_vertex:pf,bsdfs:mf,iridescence_fragment:gf,bumpmap_pars_fragment:_f,clipping_planes_fragment:xf,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:yf,clipping_planes_vertex:Mf,color_fragment:Sf,color_pars_fragment:bf,color_pars_vertex:Tf,color_vertex:Ef,common:wf,cube_uv_reflection_fragment:Af,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Cf,displacementmap_vertex:Lf,emissivemap_fragment:Pf,emissivemap_pars_fragment:If,colorspace_fragment:Df,colorspace_pars_fragment:Uf,envmap_fragment:Nf,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Of,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Kf,envmap_vertex:Hf,fog_vertex:Bf,fog_pars_vertex:zf,fog_fragment:Gf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Vf,lightmap_fragment:Xf,lightmap_pars_fragment:qf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:jf,lights_pars_begin:$f,lights_toon_fragment:Zf,lights_toon_pars_fragment:Jf,lights_phong_fragment:Qf,lights_phong_pars_fragment:ep,lights_physical_fragment:tp,lights_physical_pars_fragment:np,lights_fragment_begin:ip,lights_fragment_maps:sp,lights_fragment_end:rp,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:ap,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:cp,map_fragment:hp,map_pars_fragment:up,map_particle_fragment:dp,map_particle_pars_fragment:fp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:mp,morphcolor_vertex:gp,morphnormal_vertex:_p,morphtarget_pars_vertex:xp,morphtarget_vertex:vp,normal_fragment_begin:yp,normal_fragment_maps:Mp,normal_pars_fragment:Sp,normal_pars_vertex:bp,normal_vertex:Tp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Cp,opaque_fragment:Lp,packing:Pp,premultiplied_alpha_fragment:Ip,project_vertex:Dp,dithering_fragment:Up,dithering_pars_fragment:Np,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Bp,shadowmask_pars_fragment:zp,skinbase_vertex:Gp,skinning_pars_vertex:Wp,skinning_vertex:Vp,skinnormal_vertex:Xp,specularmap_fragment:qp,specularmap_pars_fragment:Yp,tonemapping_fragment:jp,tonemapping_pars_fragment:$p,transmission_fragment:Kp,transmission_pars_fragment:Zp,uv_pars_fragment:Jp,uv_pars_vertex:Qp,uv_vertex:em,worldpos_vertex:tm,background_vert:nm,background_frag:im,backgroundCube_vert:sm,backgroundCube_frag:rm,cube_vert:om,cube_frag:am,depth_vert:lm,depth_frag:cm,distanceRGBA_vert:hm,distanceRGBA_frag:um,equirect_vert:dm,equirect_frag:fm,linedashed_vert:pm,linedashed_frag:mm,meshbasic_vert:gm,meshbasic_frag:_m,meshlambert_vert:xm,meshlambert_frag:vm,meshmatcap_vert:ym,meshmatcap_frag:Mm,meshnormal_vert:Sm,meshnormal_frag:bm,meshphong_vert:Tm,meshphong_frag:Em,meshphysical_vert:wm,meshphysical_frag:Am,meshtoon_vert:Rm,meshtoon_frag:Cm,points_vert:Lm,points_frag:Pm,shadow_vert:Im,shadow_frag:Dm,sprite_vert:Um,sprite_frag:Nm},ue={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},mn={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Te(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Te(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};mn.physical={uniforms:Wt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Mr={r:0,b:0,g:0};function Fm(r,e,t,n,i,s,o){const a=new Te(0);let l=s===!0?0:1,c,d,h=null,u=0,f=null;function g(m,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===to)?(d===void 0&&(d=new ge(new Oi(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ys(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=Ze.getTransfer(v.colorSpace)!==ot,(h!==v||u!==v.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,h=v,u=v.version,f=r.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ge(new La(2,2),new xn({name:"BackgroundMaterial",uniforms:ys(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Mr,Rh(r)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Om(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,d=!1;function h(P,F,W,J,j){let Q=!1;if(o){const ee=_(J,W,F);c!==ee&&(c=ee,f(c.object)),Q=p(P,J,W,j),Q&&x(P,J,W,j)}else{const ee=F.wireframe===!0;(c.geometry!==J.id||c.program!==W.id||c.wireframe!==ee)&&(c.geometry=J.id,c.program=W.id,c.wireframe=ee,Q=!0)}j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(Q||d)&&(d=!1,k(P,F,W,J),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,F,W){const J=W.wireframe===!0;let j=a[P.id];j===void 0&&(j={},a[P.id]=j);let Q=j[F.id];Q===void 0&&(Q={},j[F.id]=Q);let ee=Q[J];return ee===void 0&&(ee=m(u()),Q[J]=ee),ee}function m(P){const F=[],W=[],J=[];for(let j=0;j<i;j++)F[j]=0,W[j]=0,J[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:J,object:P,attributes:{},index:null}}function p(P,F,W,J){const j=c.attributes,Q=F.attributes;let ee=0;const ae=W.getAttributes();for(const ie in ae)if(ae[ie].location>=0){const K=j[ie];let q=Q[ie];if(q===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),K===void 0||K.attribute!==q||q&&K.data!==q.data)return!0;ee++}return c.attributesNum!==ee||c.index!==J}function x(P,F,W,J){const j={},Q=F.attributes;let ee=0;const ae=W.getAttributes();for(const ie in ae)if(ae[ie].location>=0){let K=Q[ie];K===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const q={};q.attribute=K,K&&K.data&&(q.data=K.data),j[ie]=q,ee++}c.attributes=j,c.attributesNum=ee,c.index=J}function v(){const P=c.newAttributes;for(let F=0,W=P.length;F<W;F++)P[F]=0}function S(P){E(P,0)}function E(P,F){const W=c.newAttributes,J=c.enabledAttributes,j=c.attributeDivisors;W[P]=1,J[P]===0&&(r.enableVertexAttribArray(P),J[P]=1),j[P]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),j[P]=F)}function A(){const P=c.newAttributes,F=c.enabledAttributes;for(let W=0,J=F.length;W<J;W++)F[W]!==P[W]&&(r.disableVertexAttribArray(W),F[W]=0)}function R(P,F,W,J,j,Q,ee){ee===!0?r.vertexAttribIPointer(P,F,W,j,Q):r.vertexAttribPointer(P,F,W,J,j,Q)}function k(P,F,W,J){if(n.isWebGL2===!1&&(P.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=J.attributes,Q=W.getAttributes(),ee=F.defaultAttributeValues;for(const ae in Q){const ie=Q[ae];if(ie.location>=0){let G=j[ae];if(G===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const K=G.normalized,q=G.itemSize,Z=t.get(G);if(Z===void 0)continue;const O=Z.buffer,le=Z.type,se=Z.bytesPerElement,X=n.isWebGL2===!0&&(le===r.INT||le===r.UNSIGNED_INT||G.gpuType===hh);if(G.isInterleavedBufferAttribute){const Ae=G.data,U=Ae.stride,Ge=G.offset;if(Ae.isInstancedInterleavedBuffer){for(let ve=0;ve<ie.locationSize;ve++)E(ie.location+ve,Ae.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let ve=0;ve<ie.locationSize;ve++)S(ie.location+ve);r.bindBuffer(r.ARRAY_BUFFER,O);for(let ve=0;ve<ie.locationSize;ve++)R(ie.location+ve,q/ie.locationSize,le,K,U*se,(Ge+q/ie.locationSize*ve)*se,X)}else{if(G.isInstancedBufferAttribute){for(let Ae=0;Ae<ie.locationSize;Ae++)E(ie.location+Ae,G.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ae=0;Ae<ie.locationSize;Ae++)S(ie.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,O);for(let Ae=0;Ae<ie.locationSize;Ae++)R(ie.location+Ae,q/ie.locationSize,le,K,q*se,q/ie.locationSize*Ae*se,X)}}else if(ee!==void 0){const K=ee[ae];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(ie.location,K);break;case 3:r.vertexAttrib3fv(ie.location,K);break;case 4:r.vertexAttrib4fv(ie.location,K);break;default:r.vertexAttrib1fv(ie.location,K)}}}}A()}function y(){D();for(const P in a){const F=a[P];for(const W in F){const J=F[W];for(const j in J)g(J[j].object),delete J[j];delete F[W]}delete a[P]}}function w(P){if(a[P.id]===void 0)return;const F=a[P.id];for(const W in F){const J=F[W];for(const j in J)g(J[j].object),delete J[j];delete F[W]}delete a[P.id]}function I(P){for(const F in a){const W=a[F];if(W[P.id]===void 0)continue;const J=W[P.id];for(const j in J)g(J[j].object),delete J[j];delete W[P.id]}}function D(){$(),d=!0,c!==l&&(c=l,f(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:D,resetDefaultState:$,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:S,disableUnusedAttributes:A}}function km(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}function a(d,h){r.drawArrays(s,d,h),t.update(h,s,1)}function l(d,h,u){if(u===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,d,h,u),t.update(h,s,u)}function c(d,h,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(d[g],h[g]);else{f.multiDrawArraysWEBGL(s,d,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Hm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,S=o||e.has("OES_texture_float"),E=v&&S,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:A}}function Bm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ti,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?d(null):c();else{const x=s?0:n,v=x*4;let S=p.clippingState||null;l.value=S,S=d(g,u,v,f);for(let E=0;E!==v;++E)S[E]=t[E];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=f;v!==_;++v,S+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zm(r){let e=new WeakMap;function t(o,a){return a===ca?o.mapping=ms:a===ha&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ca||a===ha)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jd(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Pa extends Ch{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hs=4,$l=[.125,.215,.35,.446,.526,.582],Ai=20,Fo=new Pa,Kl=new Te;let Oo=null,ko=0,Ho=0;const Ei=(1+Math.sqrt(5))/2,ts=1/Ei,Zl=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ei,ts),new C(0,Ei,-ts),new C(ts,0,Ei),new C(-ts,0,Ei),new C(Ei,ts,0),new C(-Ei,ts,0)];class Jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Oo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oo,ko,Ho),e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Vs,format:Jt,colorSpace:ft,depthBuffer:!1},i=Ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(s)),this._blurMaterial=Wm(s,e,t)}return i}_compileMaterial(e){const t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,n,i){const a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Kl),d.toneMapping=si,d.autoClear=!1;const f=new It({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new ge(new Oi,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Kl),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Sr(i,x*v,p>2?v:0,v,v),d.setRenderTarget(i),_&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ms||e.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Zl[(i-1)%Zl.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ge(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),_=s/g,m=isFinite(s)?1+Math.floor(d*_):Ai;m>Ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const p=[];let x=0;for(let R=0;R<Ai;++R){const k=R/_,y=Math.exp(-k*k/2);p.push(y),R===0?x+=y:R<m&&(x+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const S=this._sizeLods[i],E=3*S*(i>v-hs?i-v+hs:0),A=4*(this._cubeSize-S);Sr(t,E,A,3*S,2*S),l.setRenderTarget(t),l.render(h,Fo)}}function Gm(r){const e=[],t=[],n=[];let i=r;const s=r-hs+1+$l.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-hs?l=$l[o-r+hs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),v=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,k=A>2?0:-1,y=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];x.set(y,_*g*A),v.set(u,m*g*A);const w=[A,A,A,A,A,A];S.set(w,p*g*A)}const E=new wt;E.setAttribute("position",new St(x,_)),E.setAttribute("uv",new St(v,m)),E.setAttribute("faceIndex",new St(S,p)),e.push(E),i>hs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ql(r,e,t){const n=new Ui(r,e,t);return n.texture.mapping=to,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Wm(r,e,t){const n=new Float32Array(Ai),i=new C(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ec(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function tc(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ia(){return`

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
	`}function Vm(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ca||l===ha,d=l===ms||l===gs;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Jl(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&i(h)){t===null&&(t=new Jl(r));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qm(r,e,t,n){const i={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(h){const u=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,S=x.length;v<S;v+=3){const E=x[v+0],A=x[v+1],R=x[v+2];u.push(E,A,A,R,R,E)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const E=v+0,A=v+1,R=v+2;u.push(E,A,A,R,R,E)}}else return;const m=new(yh(u)?Ah:wh)(u,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Ym(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function d(f,g){r.drawElements(s,g,a,f*l),t.update(g,s,1)}function h(f,g,_){if(_===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*l,_),t.update(g,s,_)}function u(f,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=u}function jm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $m(r,e){return r[0]-e[0]}function Km(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Zm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(d);if(m===void 0||m.count!==_){let F=function(){$.dispose(),s.delete(d),d.removeEventListener("dispose",F)};var f=F;m!==void 0&&m.texture.dispose();const v=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let y=0;v===!0&&(y=1),S===!0&&(y=2),E===!0&&(y=3);let w=d.attributes.position.count*y,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const D=new Float32Array(w*I*4*_),$=new bh(D,w,I,_);$.type=Dn,$.needsUpdate=!0;const P=y*4;for(let W=0;W<_;W++){const J=A[W],j=R[W],Q=k[W],ee=w*I*4*W;for(let ae=0;ae<J.count;ae++){const ie=ae*P;v===!0&&(o.fromBufferAttribute(J,ae),D[ee+ie+0]=o.x,D[ee+ie+1]=o.y,D[ee+ie+2]=o.z,D[ee+ie+3]=0),S===!0&&(o.fromBufferAttribute(j,ae),D[ee+ie+4]=o.x,D[ee+ie+5]=o.y,D[ee+ie+6]=o.z,D[ee+ie+7]=0),E===!0&&(o.fromBufferAttribute(Q,ae),D[ee+ie+8]=o.x,D[ee+ie+9]=o.y,D[ee+ie+10]=o.z,D[ee+ie+11]=Q.itemSize===4?o.w:1)}}m={count:_,texture:$,size:new Le(w,I)},s.set(d,m),d.addEventListener("dispose",F)}let p=0;for(let v=0;v<u.length;v++)p+=u[v];const x=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let _=n[d.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[d.id]=_}for(let S=0;S<g;S++){const E=_[S];E[0]=S,E[1]=u[S]}_.sort(Km);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort($m);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const E=a[S],A=E[0],R=E[1];A!==Number.MAX_SAFE_INTEGER&&R?(m&&d.getAttribute("morphTarget"+S)!==m[A]&&d.setAttribute("morphTarget"+S,m[A]),p&&d.getAttribute("morphNormal"+S)!==p[A]&&d.setAttribute("morphNormal"+S,p[A]),i[S]=R,x+=R):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),p&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),i[S]=0)}const v=d.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Jm(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ih extends Mt{constructor(e,t,n,i,s,o,a,l,c,d){if(d=d!==void 0?d:Pi,d!==Pi&&d!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Pi&&(n=ti),n===void 0&&d===_s&&(n=Li),super(null,i,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dh=new Mt,Uh=new Ih(1,1);Uh.compareFunction=vh;const Nh=new bh,Fh=new Nd,Oh=new Lh,nc=[],ic=[],sc=new Float32Array(16),rc=new Float32Array(9),oc=new Float32Array(4);function Es(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=nc[i];if(s===void 0&&(s=new Float32Array(i),nc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Et(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ro(r,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Qm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function e0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2fv(this.addr,e),Et(t,e)}}function t0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;r.uniform3fv(this.addr,e),Et(t,e)}}function n0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4fv(this.addr,e),Et(t,e)}}function i0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;oc.set(n),r.uniformMatrix2fv(this.addr,!1,oc),Et(t,n)}}function s0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;rc.set(n),r.uniformMatrix3fv(this.addr,!1,rc),Et(t,n)}}function r0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;sc.set(n),r.uniformMatrix4fv(this.addr,!1,sc),Et(t,n)}}function o0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function a0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2iv(this.addr,e),Et(t,e)}}function l0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3iv(this.addr,e),Et(t,e)}}function c0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4iv(this.addr,e),Et(t,e)}}function h0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function u0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2uiv(this.addr,e),Et(t,e)}}function d0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3uiv(this.addr,e),Et(t,e)}}function f0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4uiv(this.addr,e),Et(t,e)}}function p0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Uh:Dh;t.setTexture2D(e||s,i)}function m0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fh,i)}function g0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Oh,i)}function _0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Nh,i)}function x0(r){switch(r){case 5126:return Qm;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}function v0(r,e){r.uniform1fv(this.addr,e)}function y0(r,e){const t=Es(e,this.size,2);r.uniform2fv(this.addr,t)}function M0(r,e){const t=Es(e,this.size,3);r.uniform3fv(this.addr,t)}function S0(r,e){const t=Es(e,this.size,4);r.uniform4fv(this.addr,t)}function b0(r,e){const t=Es(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function T0(r,e){const t=Es(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function E0(r,e){const t=Es(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function w0(r,e){r.uniform1iv(this.addr,e)}function A0(r,e){r.uniform2iv(this.addr,e)}function R0(r,e){r.uniform3iv(this.addr,e)}function C0(r,e){r.uniform4iv(this.addr,e)}function L0(r,e){r.uniform1uiv(this.addr,e)}function P0(r,e){r.uniform2uiv(this.addr,e)}function I0(r,e){r.uniform3uiv(this.addr,e)}function D0(r,e){r.uniform4uiv(this.addr,e)}function U0(r,e,t){const n=this.cache,i=e.length,s=ro(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Dh,s[o])}function N0(r,e,t){const n=this.cache,i=e.length,s=ro(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Fh,s[o])}function F0(r,e,t){const n=this.cache,i=e.length,s=ro(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Oh,s[o])}function O0(r,e,t){const n=this.cache,i=e.length,s=ro(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Nh,s[o])}function k0(r){switch(r){case 5126:return v0;case 35664:return y0;case 35665:return M0;case 35666:return S0;case 35674:return b0;case 35675:return T0;case 35676:return E0;case 5124:case 35670:return w0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return L0;case 36294:return P0;case 36295:return I0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}class H0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=x0(t.type)}}class B0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k0(t.type)}}class z0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function ac(r,e){r.seq.push(e),r.map[e.id]=e}function G0(r,e,t){const n=r.name,i=n.length;for(Bo.lastIndex=0;;){const s=Bo.exec(n),o=Bo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ac(t,c===void 0?new H0(a,r,e):new B0(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new z0(a),ac(t,h)),t=h}}}class Wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);G0(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function lc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const W0=37297;let V0=0;function X0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function q0(r){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(r);let n;switch(e===t?n="":e===Kr&&t===$r?n="LinearDisplayP3ToLinearSRGB":e===$r&&t===Kr&&(n="LinearSRGBToLinearDisplayP3"),r){case ft:case no:return[n,"LinearTransferOETF"];case $e:case Aa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function cc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+X0(r.getShaderSource(e),o)}else return i}function Y0(r,e){const t=q0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function j0(r,e){let t;switch(e){case Wu:t="Linear";break;case Vu:t="Reinhard";break;case Xu:t="OptimizedCineon";break;case ah:t="ACESFilmic";break;case Yu:t="AgX";break;case qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function K0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(us).join(`
`)}function Z0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function us(r){return r!==""}function hc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(r){return r.replace(Q0,tg)}const eg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tg(r,e){let t=ke[e];if(t===void 0){const n=eg.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ga(t)}const ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(r){return r.replace(ng,ig)}function ig(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function fc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function rg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case to:e="ENVMAP_TYPE_CUBE_UV";break}return e}function og(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function ag(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ta:e="ENVMAP_BLENDING_MULTIPLY";break;case zu:e="ENVMAP_BLENDING_MIX";break;case Gu:e="ENVMAP_BLENDING_ADD";break}return e}function lg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=sg(t),c=rg(t),d=og(t),h=ag(t),u=lg(t),f=t.isWebGL2?"":$0(t),g=K0(t),_=Z0(s),m=i.createProgram();let p,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(us).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(us).join(`
`),x.length>0&&(x+=`
`)):(p=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),x=[f,fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?ke.tonemapping_pars_fragment:"",t.toneMapping!==si?j0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Y0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),o=ga(o),o=hc(o,t),o=uc(o,t),a=ga(a),a=hc(a,t),a=uc(a,t),o=dc(o),a=dc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+p+o,E=v+x+a,A=lc(i,i.VERTEX_SHADER,S),R=lc(i,i.FRAGMENT_SHADER,E);i.attachShader(m,A),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function k(D){if(r.debug.checkShaderErrors){const $=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(R).trim();let W=!0,J=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,A,R);else{const j=cc(i,A,"vertex"),Q=cc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+j+`
`+Q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(P===""||F==="")&&(J=!1);J&&(D.diagnostics={runnable:W,programLog:$,vertexShader:{log:P,prefix:p},fragmentShader:{log:F,prefix:x}})}i.deleteShader(A),i.deleteShader(R),y=new Wr(i,m),w=J0(i,m)}let y;this.getUniforms=function(){return y===void 0&&k(this),y};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(m,W0)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}let hg=0;class ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dg(e),t.set(e,n)),n}}class dg{constructor(e){this.id=hg++,this.code=e,this.usedTimes=0}}function fg(r,e,t,n,i,s,o){const a=new Th,l=new ug,c=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,w,I,D,$){const P=D.fog,F=$.geometry,W=y.isMeshStandardMaterial?D.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),j=J&&J.mapping===to?J.image.height:null,Q=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ae=ee!==void 0?ee.length:0;let ie=0;F.morphAttributes.position!==void 0&&(ie=1),F.morphAttributes.normal!==void 0&&(ie=2),F.morphAttributes.color!==void 0&&(ie=3);let G,K,q,Z;if(Q){const Bt=mn[Q];G=Bt.vertexShader,K=Bt.fragmentShader}else G=y.vertexShader,K=y.fragmentShader,l.update(y),q=l.getVertexShaderID(y),Z=l.getFragmentShaderID(y);const O=r.getRenderTarget(),le=$.isInstancedMesh===!0,se=$.isBatchedMesh===!0,X=!!y.map,Ae=!!y.matcap,U=!!J,Ge=!!y.aoMap,ve=!!y.lightMap,fe=!!y.bumpMap,de=!!y.normalMap,qe=!!y.displacementMap,Me=!!y.emissiveMap,T=!!y.metalnessMap,M=!!y.roughnessMap,H=y.anisotropy>0,re=y.clearcoat>0,te=y.iridescence>0,Y=y.sheen>0,oe=y.transmission>0,ce=H&&!!y.anisotropyMap,_e=re&&!!y.clearcoatMap,Se=re&&!!y.clearcoatNormalMap,Ie=re&&!!y.clearcoatRoughnessMap,ne=te&&!!y.iridescenceMap,et=te&&!!y.iridescenceThicknessMap,Ye=Y&&!!y.sheenColorMap,De=Y&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,ye=!!y.specularColorMap,Oe=!!y.specularIntensityMap,Je=oe&&!!y.transmissionMap,pt=oe&&!!y.thicknessMap,We=!!y.gradientMap,he=!!y.alphaMap,L=y.alphaTest>0,pe=!!y.alphaHash,me=!!y.extensions,Ce=!!F.attributes.uv1,we=!!F.attributes.uv2,it=!!F.attributes.uv3;let st=si;return y.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(st=r.toneMapping),{isWebGL2:d,shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:K,defines:y.defines,customVertexShaderID:q,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:se,instancing:le,instancingColor:le&&$.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:O===null?r.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ft,map:X,matcap:Ae,envMap:U,envMapMode:U&&J.mapping,envMapCubeUVHeight:j,aoMap:Ge,lightMap:ve,bumpMap:fe,normalMap:de,displacementMap:u&&qe,emissiveMap:Me,normalMapObjectSpace:de&&y.normalMapType===ad,normalMapTangentSpace:de&&y.normalMapType===wa,metalnessMap:T,roughnessMap:M,anisotropy:H,anisotropyMap:ce,clearcoat:re,clearcoatMap:_e,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ie,iridescence:te,iridescenceMap:ne,iridescenceThicknessMap:et,sheen:Y,sheenColorMap:Ye,sheenRoughnessMap:De,specularMap:Ee,specularColorMap:ye,specularIntensityMap:Oe,transmission:oe,transmissionMap:Je,thicknessMap:pt,gradientMap:We,opaque:y.transparent===!1&&y.blending===Ci,alphaMap:he,alphaTest:L,alphaHash:pe,combine:y.combine,mapUv:X&&_(y.map.channel),aoMapUv:Ge&&_(y.aoMap.channel),lightMapUv:ve&&_(y.lightMap.channel),bumpMapUv:fe&&_(y.bumpMap.channel),normalMapUv:de&&_(y.normalMap.channel),displacementMapUv:qe&&_(y.displacementMap.channel),emissiveMapUv:Me&&_(y.emissiveMap.channel),metalnessMapUv:T&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:ce&&_(y.anisotropyMap.channel),clearcoatMapUv:_e&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(y.sheenRoughnessMap.channel),specularMapUv:Ee&&_(y.specularMap.channel),specularColorMapUv:ye&&_(y.specularColorMap.channel),specularIntensityMapUv:Oe&&_(y.specularIntensityMap.channel),transmissionMapUv:Je&&_(y.transmissionMap.channel),thicknessMapUv:pt&&_(y.thicknessMap.channel),alphaMapUv:he&&_(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(de||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:we,vertexUv3s:it,pointsUvs:$.isPoints===!0&&!!F.attributes.uv&&(X||he),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,useLegacyLights:r._useLegacyLights,decodeVideoTexture:X&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ht,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:me&&y.extensions.derivatives===!0,extensionFragDepth:me&&y.extensions.fragDepth===!0,extensionDrawBuffers:me&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)w.push(I),w.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(w,y),v(w,y),w.push(r.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){const w=g[y.type];let I;if(w){const D=mn[w];I=jd.clone(D.uniforms)}else I=y.uniforms;return I}function E(y,w){let I;for(let D=0,$=c.length;D<$;D++){const P=c[D];if(P.cacheKey===w){I=P,++I.usedTimes;break}}return I===void 0&&(I=new cg(r,w,y,s),c.push(I)),I}function A(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:k}}function pg(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function mg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function pc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function mc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,u,f,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,u,f,g,_,m){const p=o(h,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,u,f,g,_,m){const p=o(h,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,u){t.length>1&&t.sort(h||mg),n.length>1&&n.sort(u||pc),i.length>1&&i.sort(u||pc)}function d(){for(let h=e,u=r.length;h<u;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:d,sort:c}}function gg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new mc,r.set(n,[o])):i>=s.length?(o=new mc,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function _g(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Te};break;case"SpotLight":t={position:new C,direction:new C,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function xg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vg=0;function yg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Mg(r,e){const t=new _g,n=xg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new C);const s=new C,o=new ze,a=new ze;function l(d,h){let u=0,f=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,m=0,p=0,x=0,v=0,S=0,E=0,A=0,R=0,k=0,y=0;d.sort(yg);const w=h===!0?Math.PI:1;for(let D=0,$=d.length;D<$;D++){const P=d[D],F=P.color,W=P.intensity,J=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*W*w,f+=F.g*W*w,g+=F.b*W*w;else if(P.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(P.sh.coefficients[Q],W);y++}else if(P.isDirectionalLight){const Q=t.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const ee=P.shadow,ae=n.get(P);ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize=ee.mapSize,i.directionalShadow[_]=ae,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=P.shadow.matrix,S++}i.directional[_]=Q,_++}else if(P.isSpotLight){const Q=t.get(P);Q.position.setFromMatrixPosition(P.matrixWorld),Q.color.copy(F).multiplyScalar(W*w),Q.distance=J,Q.coneCos=Math.cos(P.angle),Q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Q.decay=P.decay,i.spot[p]=Q;const ee=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,ee.updateMatrices(P),P.castShadow&&k++),i.spotLightMatrix[p]=ee.matrix,P.castShadow){const ae=n.get(P);ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize=ee.mapSize,i.spotShadow[p]=ae,i.spotShadowMap[p]=j,A++}p++}else if(P.isRectAreaLight){const Q=t.get(P);Q.color.copy(F).multiplyScalar(W),Q.halfWidth.set(P.width*.5,0,0),Q.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=Q,x++}else if(P.isPointLight){const Q=t.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*w),Q.distance=P.distance,Q.decay=P.decay,P.castShadow){const ee=P.shadow,ae=n.get(P);ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize=ee.mapSize,ae.shadowCameraNear=ee.camera.near,ae.shadowCameraFar=ee.camera.far,i.pointShadow[m]=ae,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=P.shadow.matrix,E++}i.point[m]=Q,m++}else if(P.isHemisphereLight){const Q=t.get(P);Q.skyColor.copy(P.color).multiplyScalar(W*w),Q.groundColor.copy(P.groundColor).multiplyScalar(W*w),i.hemi[v]=Q,v++}}x>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==_||I.pointLength!==m||I.spotLength!==p||I.rectAreaLength!==x||I.hemiLength!==v||I.numDirectionalShadows!==S||I.numPointShadows!==E||I.numSpotShadows!==A||I.numSpotMaps!==R||I.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+R-k,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=y,I.directionalLength=_,I.pointLength=m,I.spotLength=p,I.rectAreaLength=x,I.hemiLength=v,I.numDirectionalShadows=S,I.numPointShadows=E,I.numSpotShadows=A,I.numSpotMaps=R,I.numLightProbes=y,i.version=vg++)}function c(d,h){let u=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let x=0,v=d.length;x<v;x++){const S=d[x];if(S.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(S.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function gc(r,e){const t=new Mg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Sg(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new gc(r,e),t.set(s,[l])):o>=a.length?(l=new gc(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class bg extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tg extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
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
}`;function Ag(r,e,t){let n=new Ca;const i=new Le,s=new Le,o=new nt,a=new bg({depthPacking:od}),l=new Tg,c={},d=t.maxTextureSize,h={[_n]:Vt,[Vt]:_n,[Ht]:Ht},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Eg,fragmentShader:wg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ge(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh;let p=this.type;this.render=function(A,R,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=r.getRenderTarget(),w=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),D=r.state;D.setBlending(ii),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const $=p!==Pn&&this.type===Pn,P=p===Pn&&this.type!==Pn;for(let F=0,W=A.length;F<W;F++){const J=A[F],j=J.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const Q=j.getFrameExtents();if(i.multiply(Q),s.copy(j.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/Q.x),i.x=s.x*Q.x,j.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/Q.y),i.y=s.y*Q.y,j.mapSize.y=s.y)),j.map===null||$===!0||P===!0){const ae=this.type!==Pn?{minFilter:Lt,magFilter:Lt}:{};j.map!==null&&j.map.dispose(),j.map=new Ui(i.x,i.y,ae),j.map.texture.name=J.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const ee=j.getViewportCount();for(let ae=0;ae<ee;ae++){const ie=j.getViewport(ae);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),D.viewport(o),j.updateMatrices(J,ae),n=j.getFrustum(),S(R,k,j.camera,J,this.type)}j.isPointLightShadow!==!0&&this.type===Pn&&x(j,k),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,w,I)};function x(A,R){const k=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ui(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(R,null,k,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(R,null,k,f,_,null)}function v(A,R,k,y){let w=null;const I=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)w=I;else if(w=k.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const D=w.uuid,$=R.uuid;let P=c[D];P===void 0&&(P={},c[D]=P);let F=P[$];F===void 0&&(F=w.clone(),P[$]=F,R.addEventListener("dispose",E)),w=F}if(w.visible=R.visible,w.wireframe=R.wireframe,y===Pn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:h[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const D=r.properties.get(w);D.light=k}return w}function S(A,R,k,y,w){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);const $=e.update(A),P=A.material;if(Array.isArray(P)){const F=$.groups;for(let W=0,J=F.length;W<J;W++){const j=F[W],Q=P[j.materialIndex];if(Q&&Q.visible){const ee=v(A,Q,y,w);A.onBeforeShadow(r,A,R,k,$,ee,j),r.renderBufferDirect(k,null,$,ee,A,j),A.onAfterShadow(r,A,R,k,$,ee,j)}}}else if(P.visible){const F=v(A,P,y,w);A.onBeforeShadow(r,A,R,k,$,F,null),r.renderBufferDirect(k,null,$,F,A,null),A.onAfterShadow(r,A,R,k,$,F,null)}}const D=A.children;for(let $=0,P=D.length;$<P;$++)S(D[$],R,k,y,w)}function E(A){A.target.removeEventListener("dispose",E);for(const k in c){const y=c[k],w=A.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function Rg(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const pe=new nt;let me=null;const Ce=new nt(0,0,0,0);return{setMask:function(we){me!==we&&!L&&(r.colorMask(we,we,we,we),me=we)},setLocked:function(we){L=we},setClear:function(we,it,st,At,Bt){Bt===!0&&(we*=At,it*=At,st*=At),pe.set(we,it,st,At),Ce.equals(pe)===!1&&(r.clearColor(we,it,st,At),Ce.copy(pe))},reset:function(){L=!1,me=null,Ce.set(-1,0,0,0)}}}function s(){let L=!1,pe=null,me=null,Ce=null;return{setTest:function(we){we?se(r.DEPTH_TEST):X(r.DEPTH_TEST)},setMask:function(we){pe!==we&&!L&&(r.depthMask(we),pe=we)},setFunc:function(we){if(me!==we){switch(we){case Uu:r.depthFunc(r.NEVER);break;case Nu:r.depthFunc(r.ALWAYS);break;case Fu:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case Ou:r.depthFunc(r.EQUAL);break;case ku:r.depthFunc(r.GEQUAL);break;case Hu:r.depthFunc(r.GREATER);break;case Bu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=we}},setLocked:function(we){L=we},setClear:function(we){Ce!==we&&(r.clearDepth(we),Ce=we)},reset:function(){L=!1,pe=null,me=null,Ce=null}}}function o(){let L=!1,pe=null,me=null,Ce=null,we=null,it=null,st=null,At=null,Bt=null;return{setTest:function(rt){L||(rt?se(r.STENCIL_TEST):X(r.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!L&&(r.stencilMask(rt),pe=rt)},setFunc:function(rt,zt,pn){(me!==rt||Ce!==zt||we!==pn)&&(r.stencilFunc(rt,zt,pn),me=rt,Ce=zt,we=pn)},setOp:function(rt,zt,pn){(it!==rt||st!==zt||At!==pn)&&(r.stencilOp(rt,zt,pn),it=rt,st=zt,At=pn)},setLocked:function(rt){L=rt},setClear:function(rt){Bt!==rt&&(r.clearStencil(rt),Bt=rt)},reset:function(){L=!1,pe=null,me=null,Ce=null,we=null,it=null,st=null,At=null,Bt=null}}}const a=new i,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let u={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,S=null,E=null,A=null,R=null,k=null,y=new Te(0,0,0),w=0,I=!1,D=null,$=null,P=null,F=null,W=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Q=0;const ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),j=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),j=Q>=2);let ae=null,ie={};const G=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),q=new nt().fromArray(G),Z=new nt().fromArray(K);function O(L,pe,me,Ce){const we=new Uint8Array(4),it=r.createTexture();r.bindTexture(L,it),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<me;st++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(pe,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(pe+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return it}const le={};le[r.TEXTURE_2D]=O(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=O(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(le[r.TEXTURE_2D_ARRAY]=O(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=O(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),se(r.DEPTH_TEST),l.setFunc(qr),Me(!1),T(Ka),se(r.CULL_FACE),de(ii);function se(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function X(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Ae(L,pe){return f[L]!==pe?(r.bindFramebuffer(L,pe),f[L]=pe,n&&(L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=pe),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=pe)),!0):!1}function U(L,pe){let me=_,Ce=!1;if(L)if(me=g.get(pe),me===void 0&&(me=[],g.set(pe,me)),L.isWebGLMultipleRenderTargets){const we=L.texture;if(me.length!==we.length||me[0]!==r.COLOR_ATTACHMENT0){for(let it=0,st=we.length;it<st;it++)me[it]=r.COLOR_ATTACHMENT0+it;me.length=we.length,Ce=!0}}else me[0]!==r.COLOR_ATTACHMENT0&&(me[0]=r.COLOR_ATTACHMENT0,Ce=!0);else me[0]!==r.BACK&&(me[0]=r.BACK,Ce=!0);Ce&&(t.isWebGL2?r.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Ge(L){return m!==L?(r.useProgram(L),m=L,!0):!1}const ve={[wi]:r.FUNC_ADD,[vu]:r.FUNC_SUBTRACT,[yu]:r.FUNC_REVERSE_SUBTRACT};if(n)ve[Qa]=r.MIN,ve[el]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ve[Qa]=L.MIN_EXT,ve[el]=L.MAX_EXT)}const fe={[Mu]:r.ZERO,[Su]:r.ONE,[bu]:r.SRC_COLOR,[aa]:r.SRC_ALPHA,[Cu]:r.SRC_ALPHA_SATURATE,[Au]:r.DST_COLOR,[Eu]:r.DST_ALPHA,[Tu]:r.ONE_MINUS_SRC_COLOR,[la]:r.ONE_MINUS_SRC_ALPHA,[Ru]:r.ONE_MINUS_DST_COLOR,[wu]:r.ONE_MINUS_DST_ALPHA,[Lu]:r.CONSTANT_COLOR,[Pu]:r.ONE_MINUS_CONSTANT_COLOR,[Iu]:r.CONSTANT_ALPHA,[Du]:r.ONE_MINUS_CONSTANT_ALPHA};function de(L,pe,me,Ce,we,it,st,At,Bt,rt){if(L===ii){p===!0&&(X(r.BLEND),p=!1);return}if(p===!1&&(se(r.BLEND),p=!0),L!==xu){if(L!==x||rt!==I){if((v!==wi||A!==wi)&&(r.blendEquation(r.FUNC_ADD),v=wi,A=wi),rt)switch(L){case Ci:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nn:r.blendFunc(r.ONE,r.ONE);break;case Za:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ja:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ci:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Za:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ja:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,E=null,R=null,k=null,y.set(0,0,0),w=0,x=L,I=rt}return}we=we||pe,it=it||me,st=st||Ce,(pe!==v||we!==A)&&(r.blendEquationSeparate(ve[pe],ve[we]),v=pe,A=we),(me!==S||Ce!==E||it!==R||st!==k)&&(r.blendFuncSeparate(fe[me],fe[Ce],fe[it],fe[st]),S=me,E=Ce,R=it,k=st),(At.equals(y)===!1||Bt!==w)&&(r.blendColor(At.r,At.g,At.b,Bt),y.copy(At),w=Bt),x=L,I=!1}function qe(L,pe){L.side===Ht?X(r.CULL_FACE):se(r.CULL_FACE);let me=L.side===Vt;pe&&(me=!me),Me(me),L.blending===Ci&&L.transparent===!1?de(ii):de(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ce=L.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),H(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):X(r.SAMPLE_ALPHA_TO_COVERAGE)}function Me(L){D!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),D=L)}function T(L){L!==mu?(se(r.CULL_FACE),L!==$&&(L===Ka?r.cullFace(r.BACK):L===gu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):X(r.CULL_FACE),$=L}function M(L){L!==P&&(j&&r.lineWidth(L),P=L)}function H(L,pe,me){L?(se(r.POLYGON_OFFSET_FILL),(F!==pe||W!==me)&&(r.polygonOffset(pe,me),F=pe,W=me)):X(r.POLYGON_OFFSET_FILL)}function re(L){L?se(r.SCISSOR_TEST):X(r.SCISSOR_TEST)}function te(L){L===void 0&&(L=r.TEXTURE0+J-1),ae!==L&&(r.activeTexture(L),ae=L)}function Y(L,pe,me){me===void 0&&(ae===null?me=r.TEXTURE0+J-1:me=ae);let Ce=ie[me];Ce===void 0&&(Ce={type:void 0,texture:void 0},ie[me]=Ce),(Ce.type!==L||Ce.texture!==pe)&&(ae!==me&&(r.activeTexture(me),ae=me),r.bindTexture(L,pe||le[L]),Ce.type=L,Ce.texture=pe)}function oe(){const L=ie[ae];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ye(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(L){q.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function Je(L){Z.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function pt(L,pe){let me=h.get(pe);me===void 0&&(me=new WeakMap,h.set(pe,me));let Ce=me.get(L);Ce===void 0&&(Ce=r.getUniformBlockIndex(pe,L.name),me.set(L,Ce))}function We(L,pe){const Ce=h.get(pe).get(L);d.get(pe)!==Ce&&(r.uniformBlockBinding(pe,Ce,L.__bindingPointIndex),d.set(pe,Ce))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ae=null,ie={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,S=null,E=null,A=null,R=null,k=null,y=new Te(0,0,0),w=0,I=!1,D=null,$=null,P=null,F=null,W=null,q.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:se,disable:X,bindFramebuffer:Ae,drawBuffers:U,useProgram:Ge,setBlending:de,setMaterial:qe,setFlipSided:Me,setCullFace:T,setLineWidth:M,setPolygonOffset:H,setScissorTest:re,activeTexture:te,bindTexture:Y,unbindTexture:oe,compressedTexImage2D:ce,compressedTexImage3D:_e,texImage2D:Ee,texImage3D:ye,updateUBOMapping:pt,uniformBlockBinding:We,texStorage2D:Ye,texStorage3D:De,texSubImage2D:Se,texSubImage3D:Ie,compressedTexSubImage2D:ne,compressedTexSubImage3D:et,scissor:Oe,viewport:Je,reset:he}}function Cg(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):qs("canvas")}function _(T,M,H,re){let te=1;if((T.width>re||T.height>re)&&(te=re/Math.max(T.width,T.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const Y=M?Jr:Math.floor,oe=Y(te*T.width),ce=Y(te*T.height);h===void 0&&(h=g(oe,ce));const _e=H?g(oe,ce):h;return _e.width=oe,_e.height=ce,_e.getContext("2d").drawImage(T,0,0,oe,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+oe+"x"+ce+")."),_e}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return ma(T.width)&&ma(T.height)}function p(T){return a?!1:T.wrapS!==qt||T.wrapT!==qt||T.minFilter!==Lt&&T.minFilter!==Xt}function x(T,M){return T.generateMipmaps&&M&&T.minFilter!==Lt&&T.minFilter!==Xt}function v(T){r.generateMipmap(T)}function S(T,M,H,re,te=!1){if(a===!1)return M;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=M;if(M===r.RED&&(H===r.FLOAT&&(Y=r.R32F),H===r.HALF_FLOAT&&(Y=r.R16F),H===r.UNSIGNED_BYTE&&(Y=r.R8)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(Y=r.R8UI),H===r.UNSIGNED_SHORT&&(Y=r.R16UI),H===r.UNSIGNED_INT&&(Y=r.R32UI),H===r.BYTE&&(Y=r.R8I),H===r.SHORT&&(Y=r.R16I),H===r.INT&&(Y=r.R32I)),M===r.RG&&(H===r.FLOAT&&(Y=r.RG32F),H===r.HALF_FLOAT&&(Y=r.RG16F),H===r.UNSIGNED_BYTE&&(Y=r.RG8)),M===r.RGBA){const oe=te?jr:Ze.getTransfer(re);H===r.FLOAT&&(Y=r.RGBA32F),H===r.HALF_FLOAT&&(Y=r.RGBA16F),H===r.UNSIGNED_BYTE&&(Y=oe===ot?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(T,M,H){return x(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==Lt&&T.minFilter!==Xt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){return T===Lt||T===ua||T===Gr?r.NEAREST:r.LINEAR}function R(T){const M=T.target;M.removeEventListener("dispose",R),y(M),M.isVideoTexture&&d.delete(M)}function k(T){const M=T.target;M.removeEventListener("dispose",k),I(M)}function y(T){const M=n.get(T);if(M.__webglInit===void 0)return;const H=T.source,re=u.get(H);if(re){const te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(T),Object.keys(re).length===0&&u.delete(H)}n.remove(T)}function w(T){const M=n.get(T);r.deleteTexture(M.__webglTexture);const H=T.source,re=u.get(H);delete re[M.__cacheKey],o.memory.textures--}function I(T){const M=T.texture,H=n.get(T),re=n.get(M);if(re.__webglTexture!==void 0&&(r.deleteTexture(re.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(H.__webglFramebuffer[te]))for(let Y=0;Y<H.__webglFramebuffer[te].length;Y++)r.deleteFramebuffer(H.__webglFramebuffer[te][Y]);else r.deleteFramebuffer(H.__webglFramebuffer[te]);H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[te])}else{if(Array.isArray(H.__webglFramebuffer))for(let te=0;te<H.__webglFramebuffer.length;te++)r.deleteFramebuffer(H.__webglFramebuffer[te]);else r.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let te=0,Y=M.length;te<Y;te++){const oe=n.get(M[te]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(M[te])}n.remove(M),n.remove(T)}let D=0;function $(){D=0}function P(){const T=D;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),D+=1,T}function F(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function W(T,M){const H=n.get(T);if(T.isVideoTexture&&qe(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const re=T.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,T,M);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function J(T,M){const H=n.get(T);if(T.version>0&&H.__version!==T.version){q(H,T,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function j(T,M){const H=n.get(T);if(T.version>0&&H.__version!==T.version){q(H,T,M);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function Q(T,M){const H=n.get(T);if(T.version>0&&H.__version!==T.version){Z(H,T,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}const ee={[Yt]:r.REPEAT,[qt]:r.CLAMP_TO_EDGE,[Yr]:r.MIRRORED_REPEAT},ae={[Lt]:r.NEAREST,[ua]:r.NEAREST_MIPMAP_NEAREST,[Gr]:r.NEAREST_MIPMAP_LINEAR,[Xt]:r.LINEAR,[ch]:r.LINEAR_MIPMAP_NEAREST,[Di]:r.LINEAR_MIPMAP_LINEAR},ie={[ld]:r.NEVER,[pd]:r.ALWAYS,[cd]:r.LESS,[vh]:r.LEQUAL,[hd]:r.EQUAL,[fd]:r.GEQUAL,[ud]:r.GREATER,[dd]:r.NOTEQUAL};function G(T,M,H){if(H?(r.texParameteri(T,r.TEXTURE_WRAP_S,ee[M.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,ee[M.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,ee[M.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,ae[M.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,ae[M.minFilter])):(r.texParameteri(T,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(T,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==qt||M.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,r.TEXTURE_MAG_FILTER,A(M.magFilter)),r.texParameteri(T,r.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Lt&&M.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Lt||M.minFilter!==Gr&&M.minFilter!==Di||M.type===Dn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Vs&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(T,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function K(T,M){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R));const re=M.source;let te=u.get(re);te===void 0&&(te={},u.set(re,te));const Y=F(M);if(Y!==T.__cacheKey){te[Y]===void 0&&(te[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[Y].usedTimes++;const oe=te[T.__cacheKey];oe!==void 0&&(te[T.__cacheKey].usedTimes--,oe.usedTimes===0&&w(M)),T.__cacheKey=Y,T.__webglTexture=te[Y].texture}return H}function q(T,M,H){let re=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=r.TEXTURE_3D);const te=K(T,M),Y=M.source;t.bindTexture(re,T.__webglTexture,r.TEXTURE0+H);const oe=n.get(Y);if(Y.version!==oe.__version||te===!0){t.activeTexture(r.TEXTURE0+H);const ce=Ze.getPrimaries(Ze.workingColorSpace),_e=M.colorSpace===sn?null:Ze.getPrimaries(M.colorSpace),Se=M.colorSpace===sn||ce===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ie=p(M)&&m(M.image)===!1;let ne=_(M.image,Ie,!1,i.maxTextureSize);ne=Me(M,ne);const et=m(ne)||a,Ye=s.convert(M.format,M.colorSpace);let De=s.convert(M.type),Ee=S(M.internalFormat,Ye,De,M.colorSpace,M.isVideoTexture);G(re,M,et);let ye;const Oe=M.mipmaps,Je=a&&M.isVideoTexture!==!0&&Ee!==gh,pt=oe.__version===void 0||te===!0,We=E(M,ne,et);if(M.isDepthTexture)Ee=r.DEPTH_COMPONENT,a?M.type===Dn?Ee=r.DEPTH_COMPONENT32F:M.type===ti?Ee=r.DEPTH_COMPONENT24:M.type===Li?Ee=r.DEPTH24_STENCIL8:Ee=r.DEPTH_COMPONENT16:M.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Pi&&Ee===r.DEPTH_COMPONENT&&M.type!==Ea&&M.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ti,De=s.convert(M.type)),M.format===_s&&Ee===r.DEPTH_COMPONENT&&(Ee=r.DEPTH_STENCIL,M.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Li,De=s.convert(M.type))),pt&&(Je?t.texStorage2D(r.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Ee,ne.width,ne.height,0,Ye,De,null));else if(M.isDataTexture)if(Oe.length>0&&et){Je&&pt&&t.texStorage2D(r.TEXTURE_2D,We,Ee,Oe[0].width,Oe[0].height);for(let he=0,L=Oe.length;he<L;he++)ye=Oe[he],Je?t.texSubImage2D(r.TEXTURE_2D,he,0,0,ye.width,ye.height,Ye,De,ye.data):t.texImage2D(r.TEXTURE_2D,he,Ee,ye.width,ye.height,0,Ye,De,ye.data);M.generateMipmaps=!1}else Je?(pt&&t.texStorage2D(r.TEXTURE_2D,We,Ee,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,Ye,De,ne.data)):t.texImage2D(r.TEXTURE_2D,0,Ee,ne.width,ne.height,0,Ye,De,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,We,Ee,Oe[0].width,Oe[0].height,ne.depth);for(let he=0,L=Oe.length;he<L;he++)ye=Oe[he],M.format!==Jt?Ye!==null?Je?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,ye.width,ye.height,ne.depth,Ye,ye.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,Ee,ye.width,ye.height,ne.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,ye.width,ye.height,ne.depth,Ye,De,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,he,Ee,ye.width,ye.height,ne.depth,0,Ye,De,ye.data)}else{Je&&pt&&t.texStorage2D(r.TEXTURE_2D,We,Ee,Oe[0].width,Oe[0].height);for(let he=0,L=Oe.length;he<L;he++)ye=Oe[he],M.format!==Jt?Ye!==null?Je?t.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,ye.width,ye.height,Ye,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,he,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(r.TEXTURE_2D,he,0,0,ye.width,ye.height,Ye,De,ye.data):t.texImage2D(r.TEXTURE_2D,he,Ee,ye.width,ye.height,0,Ye,De,ye.data)}else if(M.isDataArrayTexture)Je?(pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,We,Ee,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ye,De,ne.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,Ye,De,ne.data);else if(M.isData3DTexture)Je?(pt&&t.texStorage3D(r.TEXTURE_3D,We,Ee,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ye,De,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,Ye,De,ne.data);else if(M.isFramebufferTexture){if(pt)if(Je)t.texStorage2D(r.TEXTURE_2D,We,Ee,ne.width,ne.height);else{let he=ne.width,L=ne.height;for(let pe=0;pe<We;pe++)t.texImage2D(r.TEXTURE_2D,pe,Ee,he,L,0,Ye,De,null),he>>=1,L>>=1}}else if(Oe.length>0&&et){Je&&pt&&t.texStorage2D(r.TEXTURE_2D,We,Ee,Oe[0].width,Oe[0].height);for(let he=0,L=Oe.length;he<L;he++)ye=Oe[he],Je?t.texSubImage2D(r.TEXTURE_2D,he,0,0,Ye,De,ye):t.texImage2D(r.TEXTURE_2D,he,Ee,Ye,De,ye);M.generateMipmaps=!1}else Je?(pt&&t.texStorage2D(r.TEXTURE_2D,We,Ee,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ye,De,ne)):t.texImage2D(r.TEXTURE_2D,0,Ee,Ye,De,ne);x(M,et)&&v(re),oe.__version=Y.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Z(T,M,H){if(M.image.length!==6)return;const re=K(T,M),te=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+H);const Y=n.get(te);if(te.version!==Y.__version||re===!0){t.activeTexture(r.TEXTURE0+H);const oe=Ze.getPrimaries(Ze.workingColorSpace),ce=M.colorSpace===sn?null:Ze.getPrimaries(M.colorSpace),_e=M.colorSpace===sn||oe===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Se=M.isCompressedTexture||M.image[0].isCompressedTexture,Ie=M.image[0]&&M.image[0].isDataTexture,ne=[];for(let he=0;he<6;he++)!Se&&!Ie?ne[he]=_(M.image[he],!1,!0,i.maxCubemapSize):ne[he]=Ie?M.image[he].image:M.image[he],ne[he]=Me(M,ne[he]);const et=ne[0],Ye=m(et)||a,De=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),ye=S(M.internalFormat,De,Ee,M.colorSpace),Oe=a&&M.isVideoTexture!==!0,Je=Y.__version===void 0||re===!0;let pt=E(M,et,Ye);G(r.TEXTURE_CUBE_MAP,M,Ye);let We;if(Se){Oe&&Je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pt,ye,et.width,et.height);for(let he=0;he<6;he++){We=ne[he].mipmaps;for(let L=0;L<We.length;L++){const pe=We[L];M.format!==Jt?De!==null?Oe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,pe.width,pe.height,De,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,pe.width,pe.height,De,Ee,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,ye,pe.width,pe.height,0,De,Ee,pe.data)}}}else{We=M.mipmaps,Oe&&Je&&(We.length>0&&pt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,pt,ye,ne[0].width,ne[0].height));for(let he=0;he<6;he++)if(Ie){Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ne[he].width,ne[he].height,De,Ee,ne[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ye,ne[he].width,ne[he].height,0,De,Ee,ne[he].data);for(let L=0;L<We.length;L++){const me=We[L].image[he].image;Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,me.width,me.height,De,Ee,me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,ye,me.width,me.height,0,De,Ee,me.data)}}else{Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,De,Ee,ne[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ye,De,Ee,ne[he]);for(let L=0;L<We.length;L++){const pe=We[L];Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,De,Ee,pe.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,ye,De,Ee,pe.image[he])}}}x(M,Ye)&&v(r.TEXTURE_CUBE_MAP),Y.__version=te.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function O(T,M,H,re,te,Y){const oe=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),_e=S(H.internalFormat,oe,ce,H.colorSpace);if(!n.get(M).__hasExternalTextures){const Ie=Math.max(1,M.width>>Y),ne=Math.max(1,M.height>>Y);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,Y,_e,Ie,ne,M.depth,0,oe,ce,null):t.texImage2D(te,Y,_e,Ie,ne,0,oe,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),de(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,te,n.get(H).__webglTexture,0,fe(M)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,te,n.get(H).__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function le(T,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let re=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(H||de(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===Dn?re=r.DEPTH_COMPONENT32F:te.type===ti&&(re=r.DEPTH_COMPONENT24));const Y=fe(M);de(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Y,re,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,re,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,re,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const re=fe(M);H&&de(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,M.width,M.height):de(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<re.length;te++){const Y=re[te],oe=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),_e=S(Y.internalFormat,oe,ce,Y.colorSpace),Se=fe(M);H&&de(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,_e,M.width,M.height):de(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,_e,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,_e,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function se(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const re=n.get(M.depthTexture).__webglTexture,te=fe(M);if(M.depthTexture.format===Pi)de(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0);else if(M.depthTexture.format===_s)de(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function X(T){const M=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");se(M.__webglFramebuffer,T)}else if(H){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=r.createRenderbuffer(),le(M.__webglDepthbuffer[re],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),le(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(T,M,H){const re=n.get(T);M!==void 0&&O(re.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&X(T)}function U(T){const M=T.texture,H=n.get(T),re=n.get(M);T.addEventListener("dispose",k),T.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=M.version,o.memory.textures++);const te=T.isWebGLCubeRenderTarget===!0,Y=T.isWebGLMultipleRenderTargets===!0,oe=m(T)||a;if(te){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let _e=0;_e<M.mipmaps.length;_e++)H.__webglFramebuffer[ce][_e]=r.createFramebuffer()}else H.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)H.__webglFramebuffer[ce]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Y)if(i.drawBuffers){const ce=T.texture;for(let _e=0,Se=ce.length;_e<Se;_e++){const Ie=n.get(ce[_e]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&de(T)===!1){const ce=Y?M:[M];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _e=0;_e<ce.length;_e++){const Se=ce[_e];H.__webglColorRenderbuffer[_e]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[_e]);const Ie=s.convert(Se.format,Se.colorSpace),ne=s.convert(Se.type),et=S(Se.internalFormat,Ie,ne,Se.colorSpace,T.isXRRenderTarget===!0),Ye=fe(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,et,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,H.__webglColorRenderbuffer[_e])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),le(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),G(r.TEXTURE_CUBE_MAP,M,oe);for(let ce=0;ce<6;ce++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)O(H.__webglFramebuffer[ce][_e],T,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else O(H.__webglFramebuffer[ce],T,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);x(M,oe)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){const ce=T.texture;for(let _e=0,Se=ce.length;_e<Se;_e++){const Ie=ce[_e],ne=n.get(Ie);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),G(r.TEXTURE_2D,Ie,oe),O(H.__webglFramebuffer,T,Ie,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,0),x(Ie,oe)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ce=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,re.__webglTexture),G(ce,M,oe),a&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)O(H.__webglFramebuffer[_e],T,M,r.COLOR_ATTACHMENT0,ce,_e);else O(H.__webglFramebuffer,T,M,r.COLOR_ATTACHMENT0,ce,0);x(M,oe)&&v(ce),t.unbindTexture()}T.depthBuffer&&X(T)}function Ge(T){const M=m(T)||a,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0,te=H.length;re<te;re++){const Y=H[re];if(x(Y,M)){const oe=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ce=n.get(Y).__webglTexture;t.bindTexture(oe,ce),v(oe),t.unbindTexture()}}}function ve(T){if(a&&T.samples>0&&de(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,re=T.height;let te=r.COLOR_BUFFER_BIT;const Y=[],oe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=n.get(T),_e=T.isWebGLMultipleRenderTargets===!0;if(_e)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){Y.push(r.COLOR_ATTACHMENT0+Se),T.depthBuffer&&Y.push(oe);const Ie=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ie===!1&&(T.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),_e&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]),Ie===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[oe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[oe])),_e){const ne=n.get(M[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,H,re,0,0,H,re,te,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Y)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_e)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]);const Ie=n.get(M[Se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,Ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function fe(T){return Math.min(i.maxSamples,T.samples)}function de(T){const M=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function qe(T){const M=o.render.frame;d.get(T)!==M&&(d.set(T,M),T.update())}function Me(T,M){const H=T.colorSpace,re=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===pa||H!==ft&&H!==sn&&(Ze.getTransfer(H)===ot?a===!1?e.has("EXT_sRGB")===!0&&re===Jt?(T.format=pa,T.minFilter=Xt,T.generateMipmaps=!1):M=Mh.sRGBToLinear(M):(re!==Jt||te!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=P,this.resetTextureUnits=$,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=j,this.setTextureCube=Q,this.rebindTextures=Ae,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=O,this.useMultisampledRTT=de}function Lg(r,e,t){const n=t.isWebGL2;function i(s,o=sn){let a;const l=Ze.getTransfer(o);if(s===ri)return r.UNSIGNED_BYTE;if(s===uh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===dh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$u)return r.BYTE;if(s===Ku)return r.SHORT;if(s===Ea)return r.UNSIGNED_SHORT;if(s===hh)return r.INT;if(s===ti)return r.UNSIGNED_INT;if(s===Dn)return r.FLOAT;if(s===Vs)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Zu)return r.ALPHA;if(s===Jt)return r.RGBA;if(s===Ju)return r.LUMINANCE;if(s===Qu)return r.LUMINANCE_ALPHA;if(s===Pi)return r.DEPTH_COMPONENT;if(s===_s)return r.DEPTH_STENCIL;if(s===pa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ed)return r.RED;if(s===fh)return r.RED_INTEGER;if(s===td)return r.RG;if(s===ph)return r.RG_INTEGER;if(s===mh)return r.RGBA_INTEGER;if(s===fo||s===po||s===mo||s===go)if(l===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===po)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===go)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nl||s===il||s===sl||s===rl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===nl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===il)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ol||s===al)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ol)return l===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===al)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ll||s===cl||s===hl||s===ul||s===dl||s===fl||s===pl||s===ml||s===gl||s===_l||s===xl||s===vl||s===yl||s===Ml)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ll)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ul)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ml)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_l)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yl)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ml)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_o||s===Sl||s===bl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===_o)return l===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===nd||s===Tl||s===El||s===wl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===_o)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Tl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===El)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Li?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Pg extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class on extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ig={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Dg extends Ts{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const x=[],v=[],S=new Le;let E=null;const A=new kt;A.layers.enable(1),A.viewport=new nt;const R=new kt;R.layers.enable(2),R.viewport=new nt;const k=[A,R],y=new Pg;y.layers.enable(1),y.layers.enable(2);let w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=x[G];return K===void 0&&(K=new zo,x[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=x[G];return K===void 0&&(K=new zo,x[G]=K),K.getGripSpace()},this.getHand=function(G){let K=x[G];return K===void 0&&(K=new zo,x[G]=K),K.getHandSpace()};function D(G){const K=v.indexOf(G.inputSource);if(K===-1)return;const q=x[K];q!==void 0&&(q.update(G.inputSource,G.frame,c||o),q.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",P);for(let G=0;G<x.length;G++){const K=v[G];K!==null&&(v[G]=null,x[G].disconnect(K))}w=null,I=null,e.setRenderTarget(m),f=null,u=null,h=null,i=null,p=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",$),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Ui(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,q=null,Z=null;_.depth&&(Z=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?_s:Pi,q=_.stencil?Li:ti);const O={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(O),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Ui(u.textureWidth,u.textureHeight,{format:Jt,type:ri,depthTexture:new Ih(u.textureWidth,u.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const le=e.properties.get(p);le.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(G){for(let K=0;K<G.removed.length;K++){const q=G.removed[K],Z=v.indexOf(q);Z>=0&&(v[Z]=null,x[Z].disconnect(q))}for(let K=0;K<G.added.length;K++){const q=G.added[K];let Z=v.indexOf(q);if(Z===-1){for(let le=0;le<x.length;le++)if(le>=v.length){v.push(q),Z=le;break}else if(v[le]===null){v[le]=q,Z=le;break}if(Z===-1)break}const O=x[Z];O&&O.connect(q)}}const F=new C,W=new C;function J(G,K,q){F.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(q.matrixWorld);const Z=F.distanceTo(W),O=K.projectionMatrix.elements,le=q.projectionMatrix.elements,se=O[14]/(O[10]-1),X=O[14]/(O[10]+1),Ae=(O[9]+1)/O[5],U=(O[9]-1)/O[5],Ge=(O[8]-1)/O[0],ve=(le[8]+1)/le[0],fe=se*Ge,de=se*ve,qe=Z/(-Ge+ve),Me=qe*-Ge;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Me),G.translateZ(qe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const T=se+qe,M=X+qe,H=fe-Me,re=de+(Z-Me),te=Ae*X/M*T,Y=U*X/M*T;G.projectionMatrix.makePerspective(H,re,te,Y,T,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function j(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;y.near=R.near=A.near=G.near,y.far=R.far=A.far=G.far,(w!==y.near||I!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,I=y.far);const K=G.parent,q=y.cameras;j(y,K);for(let Z=0;Z<q.length;Z++)j(q[Z],K);q.length===2?J(y,A,R):y.projectionMatrix.copy(A.projectionMatrix),Q(G,y,K)};function Q(G,K,q){q===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(q.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=vs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let ee=null;function ae(G,K){if(d=K.getViewerPose(c||o),g=K,d!==null){const q=d.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Z=!1;q.length!==y.cameras.length&&(y.cameras.length=0,Z=!0);for(let O=0;O<q.length;O++){const le=q[O];let se=null;if(f!==null)se=f.getViewport(le);else{const Ae=h.getViewSubImage(u,le);se=Ae.viewport,O===0&&(e.setRenderTargetTextures(p,Ae.colorTexture,u.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(p))}let X=k[O];X===void 0&&(X=new kt,X.layers.enable(O),X.viewport=new nt,k[O]=X),X.matrix.fromArray(le.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(le.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(se.x,se.y,se.width,se.height),O===0&&(y.matrix.copy(X.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Z===!0&&y.cameras.push(X)}}for(let q=0;q<x.length;q++){const Z=v[q],O=x[q];Z!==null&&O!==void 0&&O.update(Z,K,c||o)}ee&&ee(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const ie=new Ph;ie.setAnimationLoop(ae),this.setAnimationLoop=function(G){ee=G},this.dispose=function(){}}}function Ug(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Rh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ng(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=i[x.id];S===void 0&&(g(x),S=d(x),i[x.id]=S,x.addEventListener("dispose",m));const E=v.program;n.updateUBOMapping(x,E);const A=e.render.frame;s[x.id]!==A&&(u(x),s[x.id]=A)}function d(x){const v=h();x.__bindingPointIndex=v;const S=r.createBuffer(),E=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const v=i[x.id],S=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,R=S.length;A<R;A++){const k=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,w=k.length;y<w;y++){const I=k[y];if(f(I,A,y,E)===!0){const D=I.__offset,$=Array.isArray(I.value)?I.value:[I.value];let P=0;for(let F=0;F<$.length;F++){const W=$[F],J=_(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,D+P,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,P),P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,S,E){const A=x.value,R=v+"_"+S;if(E[R]===void 0)return typeof A=="number"||typeof A=="boolean"?E[R]=A:E[R]=A.clone(),!0;{const k=E[R];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return E[R]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function g(x){const v=x.uniforms;let S=0;const E=16;for(let R=0,k=v.length;R<k;R++){const y=Array.isArray(v[R])?v[R]:[v[R]];for(let w=0,I=y.length;w<I;w++){const D=y[w],$=Array.isArray(D.value)?D.value:[D.value];for(let P=0,F=$.length;P<F;P++){const W=$[P],J=_(W),j=S%E;j!==0&&E-j<J.boundary&&(S+=E-j),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=J.storage}}}const A=S%E;return A>0&&(S+=E-A),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class kh{constructor(e={}){const{canvas:t=Ld(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=si,this.toneMappingExposure=1;const v=this;let S=!1,E=0,A=0,R=null,k=-1,y=null;const w=new nt,I=new nt;let D=null;const $=new Te(0);let P=0,F=t.width,W=t.height,J=1,j=null,Q=null;const ee=new nt(0,0,F,W),ae=new nt(0,0,F,W);let ie=!1;const G=new Ca;let K=!1,q=!1,Z=null;const O=new ze,le=new Le,se=new C,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return R===null?J:1}let U=n;function Ge(b,N){for(let z=0;z<b.length;z++){const V=b[z],B=t.getContext(V,N);if(B!==null)return B}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",pe,!1),U===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),U=Ge(N,b),U===null)throw Ge(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,fe,de,qe,Me,T,M,H,re,te,Y,oe,ce,_e,Se,Ie,ne,et,Ye,De,Ee,ye,Oe,Je;function pt(){ve=new Xm(U),fe=new Hm(U,ve,e),ve.init(fe),ye=new Lg(U,ve,fe),de=new Rg(U,ve,fe),qe=new jm(U),Me=new pg,T=new Cg(U,ve,de,Me,fe,ye,qe),M=new zm(v),H=new Vm(v),re=new tf(U,fe),Oe=new Om(U,ve,re,fe),te=new qm(U,re,qe,Oe),Y=new Jm(U,te,re,qe),Ye=new Zm(U,fe,T),Ie=new Bm(Me),oe=new fg(v,M,H,ve,fe,Oe,Ie),ce=new Ug(v,Me),_e=new gg,Se=new Sg(ve,fe),et=new Fm(v,M,H,de,Y,u,l),ne=new Ag(v,Y,fe),Je=new Ng(U,qe,fe,de),De=new km(U,ve,qe,fe),Ee=new Ym(U,ve,qe,fe),qe.programs=oe.programs,v.capabilities=fe,v.extensions=ve,v.properties=Me,v.renderLists=_e,v.shadowMap=ne,v.state=de,v.info=qe}pt();const We=new Dg(v,U);this.xr=We,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(F,W,!1))},this.getSize=function(b){return b.set(F,W)},this.setSize=function(b,N,z=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,W=N,t.width=Math.floor(b*J),t.height=Math.floor(N*J),z===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(F*J,W*J).floor()},this.setDrawingBufferSize=function(b,N,z){F=b,W=N,J=z,t.width=Math.floor(b*z),t.height=Math.floor(N*z),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(ee)},this.setViewport=function(b,N,z,V){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,N,z,V),de.viewport(w.copy(ee).multiplyScalar(J).floor())},this.getScissor=function(b){return b.copy(ae)},this.setScissor=function(b,N,z,V){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,N,z,V),de.scissor(I.copy(ae).multiplyScalar(J).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){de.setScissorTest(ie=b)},this.setOpaqueSort=function(b){j=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(b=!0,N=!0,z=!0){let V=0;if(b){let B=!1;if(R!==null){const xe=R.texture.format;B=xe===mh||xe===ph||xe===fh}if(B){const xe=R.texture.type,be=xe===ri||xe===ti||xe===Ea||xe===Li||xe===uh||xe===dh,Re=et.getClearColor(),Pe=et.getClearAlpha(),He=Re.r,Ue=Re.g,Fe=Re.b;be?(f[0]=He,f[1]=Ue,f[2]=Fe,f[3]=Pe,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=He,g[1]=Ue,g[2]=Fe,g[3]=Pe,U.clearBufferiv(U.COLOR,0,g))}else V|=U.COLOR_BUFFER_BIT}N&&(V|=U.DEPTH_BUFFER_BIT),z&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),Se.dispose(),Me.dispose(),M.dispose(),H.dispose(),Y.dispose(),Oe.dispose(),Je.dispose(),oe.dispose(),We.dispose(),We.removeEventListener("sessionstart",Bt),We.removeEventListener("sessionend",rt),Z&&(Z.dispose(),Z=null),zt.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=qe.autoReset,N=ne.enabled,z=ne.autoUpdate,V=ne.needsUpdate,B=ne.type;pt(),qe.autoReset=b,ne.enabled=N,ne.autoUpdate=z,ne.needsUpdate=V,ne.type=B}function pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function me(b){const N=b.target;N.removeEventListener("dispose",me),Ce(N)}function Ce(b){we(b),Me.remove(b)}function we(b){const N=Me.get(b).programs;N!==void 0&&(N.forEach(function(z){oe.releaseProgram(z)}),b.isShaderMaterial&&oe.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,z,V,B,xe){N===null&&(N=X);const be=B.isMesh&&B.matrixWorld.determinant()<0,Re=cu(b,N,z,V,B);de.setMaterial(V,be);let Pe=z.index,He=1;if(V.wireframe===!0){if(Pe=te.getWireframeAttribute(z),Pe===void 0)return;He=2}const Ue=z.drawRange,Fe=z.attributes.position;let _t=Ue.start*He,jt=(Ue.start+Ue.count)*He;xe!==null&&(_t=Math.max(_t,xe.start*He),jt=Math.min(jt,(xe.start+xe.count)*He)),Pe!==null?(_t=Math.max(_t,0),jt=Math.min(jt,Pe.count)):Fe!=null&&(_t=Math.max(_t,0),jt=Math.min(jt,Fe.count));const Rt=jt-_t;if(Rt<0||Rt===1/0)return;Oe.setup(B,V,Re,z,Pe);let bn,ut=De;if(Pe!==null&&(bn=re.get(Pe),ut=Ee,ut.setIndex(bn)),B.isMesh)V.wireframe===!0?(de.setLineWidth(V.wireframeLinewidth*Ae()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(B.isLine){let Ve=V.linewidth;Ve===void 0&&(Ve=1),de.setLineWidth(Ve*Ae()),B.isLineSegments?ut.setMode(U.LINES):B.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else B.isPoints?ut.setMode(U.POINTS):B.isSprite&&ut.setMode(U.TRIANGLES);if(B.isBatchedMesh)ut.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ut.renderInstances(_t,Rt,B.count);else if(z.isInstancedBufferGeometry){const Ve=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,lo=Math.min(z.instanceCount,Ve);ut.renderInstances(_t,Rt,lo)}else ut.render(_t,Rt)};function it(b,N,z){b.transparent===!0&&b.side===Ht&&b.forceSinglePass===!1?(b.side=Vt,b.needsUpdate=!0,er(b,N,z),b.side=_n,b.needsUpdate=!0,er(b,N,z),b.side=Ht):er(b,N,z)}this.compile=function(b,N,z=null){z===null&&(z=b),m=Se.get(z),m.init(),x.push(m),z.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==z&&b.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights);const V=new Set;return b.traverse(function(B){const xe=B.material;if(xe)if(Array.isArray(xe))for(let be=0;be<xe.length;be++){const Re=xe[be];it(Re,z,B),V.add(Re)}else it(xe,z,B),V.add(xe)}),x.pop(),m=null,V},this.compileAsync=function(b,N,z=null){const V=this.compile(b,N,z);return new Promise(B=>{function xe(){if(V.forEach(function(be){Me.get(be).currentProgram.isReady()&&V.delete(be)}),V.size===0){B(b);return}setTimeout(xe,10)}ve.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let st=null;function At(b){st&&st(b)}function Bt(){zt.stop()}function rt(){zt.start()}const zt=new Ph;zt.setAnimationLoop(At),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(b){st=b,We.setAnimationLoop(b),b===null?zt.stop():zt.start()},We.addEventListener("sessionstart",Bt),We.addEventListener("sessionend",rt),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(N),N=We.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,R),m=Se.get(b,x.length),m.init(),x.push(m),O.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(O),q=this.localClippingEnabled,K=Ie.init(this.clippingPlanes,q),_=_e.get(b,p.length),_.init(),p.push(_),pn(b,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,Q),this.info.render.frame++,K===!0&&Ie.beginShadows();const z=m.state.shadowsArray;if(ne.render(z,b,N),K===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(_,b),m.setupLights(v._useLegacyLights),N.isArrayCamera){const V=N.cameras;for(let B=0,xe=V.length;B<xe;B++){const be=V[B];Wa(_,b,be,be.viewport)}}else Wa(_,b,N);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,N),Oe.resetDefaultState(),k=-1,y=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function pn(b,N,z,V){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){V&&se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(O);const be=Y.update(b),Re=b.material;Re.visible&&_.push(b,be,Re,z,se.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){const be=Y.update(b),Re=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),se.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),se.copy(be.boundingSphere.center)),se.applyMatrix4(b.matrixWorld).applyMatrix4(O)),Array.isArray(Re)){const Pe=be.groups;for(let He=0,Ue=Pe.length;He<Ue;He++){const Fe=Pe[He],_t=Re[Fe.materialIndex];_t&&_t.visible&&_.push(b,be,_t,z,se.z,Fe)}}else Re.visible&&_.push(b,be,Re,z,se.z,null)}}const xe=b.children;for(let be=0,Re=xe.length;be<Re;be++)pn(xe[be],N,z,V)}function Wa(b,N,z,V){const B=b.opaque,xe=b.transmissive,be=b.transparent;m.setupLightsView(z),K===!0&&Ie.setGlobalState(v.clippingPlanes,z),xe.length>0&&lu(B,xe,N,z),V&&de.viewport(w.copy(V)),B.length>0&&Qs(B,N,z),xe.length>0&&Qs(xe,N,z),be.length>0&&Qs(be,N,z),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function lu(b,N,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const xe=fe.isWebGL2;Z===null&&(Z=new Ui(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Vs:ri,minFilter:Di,samples:xe?4:0})),v.getDrawingBufferSize(le),xe?Z.setSize(le.x,le.y):Z.setSize(Jr(le.x),Jr(le.y));const be=v.getRenderTarget();v.setRenderTarget(Z),v.getClearColor($),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Re=v.toneMapping;v.toneMapping=si,Qs(b,z,V),T.updateMultisampleRenderTarget(Z),T.updateRenderTargetMipmap(Z);let Pe=!1;for(let He=0,Ue=N.length;He<Ue;He++){const Fe=N[He],_t=Fe.object,jt=Fe.geometry,Rt=Fe.material,bn=Fe.group;if(Rt.side===Ht&&_t.layers.test(V.layers)){const ut=Rt.side;Rt.side=Vt,Rt.needsUpdate=!0,Va(_t,z,V,jt,Rt,bn),Rt.side=ut,Rt.needsUpdate=!0,Pe=!0}}Pe===!0&&(T.updateMultisampleRenderTarget(Z),T.updateRenderTargetMipmap(Z)),v.setRenderTarget(be),v.setClearColor($,P),v.toneMapping=Re}function Qs(b,N,z){const V=N.isScene===!0?N.overrideMaterial:null;for(let B=0,xe=b.length;B<xe;B++){const be=b[B],Re=be.object,Pe=be.geometry,He=V===null?be.material:V,Ue=be.group;Re.layers.test(z.layers)&&Va(Re,N,z,Pe,He,Ue)}}function Va(b,N,z,V,B,xe){b.onBeforeRender(v,N,z,V,B,xe),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(v,N,z,V,b,xe),B.transparent===!0&&B.side===Ht&&B.forceSinglePass===!1?(B.side=Vt,B.needsUpdate=!0,v.renderBufferDirect(z,N,V,B,b,xe),B.side=_n,B.needsUpdate=!0,v.renderBufferDirect(z,N,V,B,b,xe),B.side=Ht):v.renderBufferDirect(z,N,V,B,b,xe),b.onAfterRender(v,N,z,V,B,xe)}function er(b,N,z){N.isScene!==!0&&(N=X);const V=Me.get(b),B=m.state.lights,xe=m.state.shadowsArray,be=B.state.version,Re=oe.getParameters(b,B.state,xe,N,z),Pe=oe.getProgramCacheKey(Re);let He=V.programs;V.environment=b.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(b.isMeshStandardMaterial?H:M).get(b.envMap||V.environment),He===void 0&&(b.addEventListener("dispose",me),He=new Map,V.programs=He);let Ue=He.get(Pe);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===be)return qa(b,Re),Ue}else Re.uniforms=oe.getUniforms(b),b.onBuild(z,Re,v),b.onBeforeCompile(Re,v),Ue=oe.acquireProgram(Re,Pe),He.set(Pe,Ue),V.uniforms=Re.uniforms;const Fe=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=Ie.uniform),qa(b,Re),V.needsLights=uu(b),V.lightsStateVersion=be,V.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Ue,V.uniformsList=null,Ue}function Xa(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Wr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function qa(b,N){const z=Me.get(b);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function cu(b,N,z,V,B){N.isScene!==!0&&(N=X),T.resetTextureUnits();const xe=N.fog,be=V.isMeshStandardMaterial?N.environment:null,Re=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ft,Pe=(V.isMeshStandardMaterial?H:M).get(V.envMap||be),He=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!z.morphAttributes.position,_t=!!z.morphAttributes.normal,jt=!!z.morphAttributes.color;let Rt=si;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Rt=v.toneMapping);const bn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ut=bn!==void 0?bn.length:0,Ve=Me.get(V),lo=m.state.lights;if(K===!0&&(q===!0||b!==y)){const en=b===y&&V.id===k;Ie.setState(V,b,en)}let mt=!1;V.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==lo.state.version||Ve.outputColorSpace!==Re||B.isBatchedMesh&&Ve.batching===!1||!B.isBatchedMesh&&Ve.batching===!0||B.isInstancedMesh&&Ve.instancing===!1||!B.isInstancedMesh&&Ve.instancing===!0||B.isSkinnedMesh&&Ve.skinning===!1||!B.isSkinnedMesh&&Ve.skinning===!0||B.isInstancedMesh&&Ve.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ve.instancingColor===!1&&B.instanceColor!==null||Ve.envMap!==Pe||V.fog===!0&&Ve.fog!==xe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ie.numPlanes||Ve.numIntersection!==Ie.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Ue||Ve.morphTargets!==Fe||Ve.morphNormals!==_t||Ve.morphColors!==jt||Ve.toneMapping!==Rt||fe.isWebGL2===!0&&Ve.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,Ve.__version=V.version);let ci=Ve.currentProgram;mt===!0&&(ci=er(V,N,B));let Ya=!1,Cs=!1,co=!1;const Dt=ci.getUniforms(),hi=Ve.uniforms;if(de.useProgram(ci.program)&&(Ya=!0,Cs=!0,co=!0),V.id!==k&&(k=V.id,Cs=!0),Ya||y!==b){Dt.setValue(U,"projectionMatrix",b.projectionMatrix),Dt.setValue(U,"viewMatrix",b.matrixWorldInverse);const en=Dt.map.cameraPosition;en!==void 0&&en.setValue(U,se.setFromMatrixPosition(b.matrixWorld)),fe.logarithmicDepthBuffer&&Dt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Dt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Cs=!0,co=!0)}if(B.isSkinnedMesh){Dt.setOptional(U,B,"bindMatrix"),Dt.setOptional(U,B,"bindMatrixInverse");const en=B.skeleton;en&&(fe.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Dt.setValue(U,"boneTexture",en.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Dt.setOptional(U,B,"batchingTexture"),Dt.setValue(U,"batchingTexture",B._matricesTexture,T));const ho=z.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0&&fe.isWebGL2===!0)&&Ye.update(B,z,ci),(Cs||Ve.receiveShadow!==B.receiveShadow)&&(Ve.receiveShadow=B.receiveShadow,Dt.setValue(U,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(hi.envMap.value=Pe,hi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Cs&&(Dt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&hu(hi,co),xe&&V.fog===!0&&ce.refreshFogUniforms(hi,xe),ce.refreshMaterialUniforms(hi,V,J,W,Z),Wr.upload(U,Xa(Ve),hi,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Wr.upload(U,Xa(Ve),hi,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Dt.setValue(U,"center",B.center),Dt.setValue(U,"modelViewMatrix",B.modelViewMatrix),Dt.setValue(U,"normalMatrix",B.normalMatrix),Dt.setValue(U,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const en=V.uniformsGroups;for(let uo=0,du=en.length;uo<du;uo++)if(fe.isWebGL2){const ja=en[uo];Je.update(ja,ci),Je.bind(ja,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function hu(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function uu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,N,z){Me.get(b.texture).__webglTexture=N,Me.get(b.depthTexture).__webglTexture=z;const V=Me.get(b);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,N){const z=Me.get(b);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,z=0){R=b,E=N,A=z;let V=!0,B=null,xe=!1,be=!1;if(b){const Pe=Me.get(b);Pe.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(U.FRAMEBUFFER,null),V=!1):Pe.__webglFramebuffer===void 0?T.setupRenderTarget(b):Pe.__hasExternalTextures&&T.rebindTextures(b,Me.get(b.texture).__webglTexture,Me.get(b.depthTexture).__webglTexture);const He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const Ue=Me.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?B=Ue[N][z]:B=Ue[N],xe=!0):fe.isWebGL2&&b.samples>0&&T.useMultisampledRTT(b)===!1?B=Me.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?B=Ue[z]:B=Ue,w.copy(b.viewport),I.copy(b.scissor),D=b.scissorTest}else w.copy(ee).multiplyScalar(J).floor(),I.copy(ae).multiplyScalar(J).floor(),D=ie;if(de.bindFramebuffer(U.FRAMEBUFFER,B)&&fe.drawBuffers&&V&&de.drawBuffers(b,B),de.viewport(w),de.scissor(I),de.setScissorTest(D),xe){const Pe=Me.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pe.__webglTexture,z)}else if(be){const Pe=Me.get(b.texture),He=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.__webglTexture,z||0,He)}k=-1},this.readRenderTargetPixels=function(b,N,z,V,B,xe,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){de.bindFramebuffer(U.FRAMEBUFFER,Re);try{const Pe=b.texture,He=Pe.format,Ue=Pe.type;if(He!==Jt&&ye.convert(He)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===Vs&&(ve.has("EXT_color_buffer_half_float")||fe.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ue!==ri&&ye.convert(Ue)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Dn&&(fe.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-V&&z>=0&&z<=b.height-B&&U.readPixels(N,z,V,B,ye.convert(He),ye.convert(Ue),xe)}finally{const Pe=R!==null?Me.get(R).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(b,N,z=0){const V=Math.pow(2,-z),B=Math.floor(N.image.width*V),xe=Math.floor(N.image.height*V);T.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,b.x,b.y,B,xe),de.unbindTexture()},this.copyTextureToTexture=function(b,N,z,V=0){const B=N.image.width,xe=N.image.height,be=ye.convert(z.format),Re=ye.convert(z.type);T.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,b.x,b.y,B,xe,be,Re,N.image.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,be,N.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,V,b.x,b.y,be,Re,N.image),V===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(b,N,z,V,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=b.max.x-b.min.x+1,be=b.max.y-b.min.y+1,Re=b.max.z-b.min.z+1,Pe=ye.convert(V.format),He=ye.convert(V.type);let Ue;if(V.isData3DTexture)T.setTexture3D(V,0),Ue=U.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)T.setTexture2DArray(V,0),Ue=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Fe=U.getParameter(U.UNPACK_ROW_LENGTH),_t=U.getParameter(U.UNPACK_IMAGE_HEIGHT),jt=U.getParameter(U.UNPACK_SKIP_PIXELS),Rt=U.getParameter(U.UNPACK_SKIP_ROWS),bn=U.getParameter(U.UNPACK_SKIP_IMAGES),ut=z.isCompressedTexture?z.mipmaps[B]:z.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,b.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,b.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,b.min.z),z.isDataTexture||z.isData3DTexture?U.texSubImage3D(Ue,B,N.x,N.y,N.z,xe,be,Re,Pe,He,ut.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ue,B,N.x,N.y,N.z,xe,be,Re,Pe,ut.data)):U.texSubImage3D(Ue,B,N.x,N.y,N.z,xe,be,Re,Pe,He,ut),U.pixelStorei(U.UNPACK_ROW_LENGTH,Fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t),U.pixelStorei(U.UNPACK_SKIP_PIXELS,jt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,bn),B===0&&V.generateMipmaps&&U.generateMipmap(Ue),de.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),de.unbindTexture()},this.resetState=function(){E=0,A=0,R=null,de.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Aa?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===no?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$e?Ii:xh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ii?$e:ft}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Fg extends kh{}Fg.prototype.isWebGL1Renderer=!0;class Hh extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Bh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new C;class Ys{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ys(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Da extends an{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ns;const Us=new C,is=new C,ss=new C,rs=new Le,Ns=new Le,zh=new ze,br=new C,Fs=new C,Tr=new C,_c=new Le,Go=new Le,xc=new Le;class Gh extends at{constructor(e=new Da){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bh(t,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new Ys(n,3,0,!1)),ns.setAttribute("uv",new Ys(n,2,3,!1))}this.geometry=ns,this.material=e,this.center=new Le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),zh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Er(br.set(-.5,-.5,0),ss,o,is,i,s),Er(Fs.set(.5,-.5,0),ss,o,is,i,s),Er(Tr.set(.5,.5,0),ss,o,is,i,s),_c.set(0,0),Go.set(1,0),xc.set(1,1);let a=e.ray.intersectTriangle(br,Fs,Tr,!1,Us);if(a===null&&(Er(Fs.set(-.5,.5,0),ss,o,is,i,s),Go.set(0,1),a=e.ray.intersectTriangle(br,Tr,Fs,!1,Us),a===null))return;const l=e.ray.origin.distanceTo(Us);l<e.near||l>e.far||t.push({distance:l,point:Us.clone(),uv:Zt.getInterpolation(Us,br,Fs,Tr,_c,Go,xc,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Er(r,e,t,n,i,s){rs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Ns.x=s*rs.x-i*rs.y,Ns.y=i*rs.x+s*rs.y):Ns.copy(rs),r.copy(e),r.x+=Ns.x,r.y+=Ns.y,r.applyMatrix4(zh)}const vc=new C,yc=new nt,Mc=new nt,Og=new C,Sc=new ze,wr=new C,Wo=new vn,bc=new ze,Vo=new io;class kg extends ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tl,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wr),this.boundingBox.expandByPoint(wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wr),this.boundingSphere.expandByPoint(wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(i),e.ray.intersectsSphere(Wo)!==!1&&(bc.copy(i).invert(),Vo.copy(e.ray).applyMatrix4(bc),!(this.boundingBox!==null&&Vo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ju?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;yc.fromBufferAttribute(i.attributes.skinIndex,e),Mc.fromBufferAttribute(i.attributes.skinWeight,e),vc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Mc.getComponent(s);if(o!==0){const a=yc.getComponent(s);Sc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Og.copy(vc).applyMatrix4(Sc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Wh extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vh extends Mt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Lt,d=Lt,h,u){super(null,o,a,l,c,d,i,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=new ze,Hg=new ze;class Ua{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Hg;Tc.multiplyMatrices(a,t[s]),Tc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ua(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vh(t,e,e,Jt,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Wh),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class _a extends St{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new ze,Ec=new ze,Ar=[],wc=new ln,Bg=new ze,Os=new ge,ks=new vn;class zg extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _a(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Bg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),wc.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(wc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),ks.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),e.ray.intersectsSphere(ks)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,os),Ec.multiplyMatrices(n,os),Os.matrixWorld=Ec,Os.raycast(e,Ar);for(let o=0,a=Ar.length;o<a;o++){const l=Ar[o];l.instanceId=s,l.object=this,t.push(l)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _a(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Na extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ac=new C,Rc=new C,Cc=new ze,Xo=new io,Rr=new vn;class Fa extends at{constructor(e=new wt,t=new Na){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ac.fromBufferAttribute(t,i-1),Rc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ac.distanceTo(Rc);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=s,e.ray.intersectsSphere(Rr)===!1)return;Cc.copy(i).invert(),Xo.copy(e.ray).applyMatrix4(Cc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,d=new C,h=new C,u=new C,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=p,S=x-1;v<S;v+=f){const E=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(m,E),d.fromBufferAttribute(m,A),Xo.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(u);k<e.near||k>e.far||t.push({distance:k,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=p,S=x-1;v<S;v+=f){if(c.fromBufferAttribute(m,v),d.fromBufferAttribute(m,v+1),Xo.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(u);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Lc=new C,Pc=new C;class Xh extends Fa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Lc.fromBufferAttribute(t,i),Pc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Lc.distanceTo(Pc);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gg extends Fa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class oo extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ic=new ze,xa=new io,Cr=new vn,Lr=new C;class Oa extends at{constructor(e=new wt,t=new oo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=s,e.ray.intersectsSphere(Cr)===!1)return;Ic.copy(i).invert(),xa.copy(e.ray).applyMatrix4(Ic);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);Lr.fromBufferAttribute(h,m),Dc(Lr,m,l,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=u,_=f;g<_;g++)Lr.fromBufferAttribute(h,g),Dc(Lr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Dc(r,e,t,n,i,s,o){const a=xa.distanceSqToPoint(r);if(a<t){const l=new C;xa.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class dn extends Mt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ao extends wt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new C,d=new Le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ct extends wt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],h=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function x(){const S=new C,E=new C;let A=0;const R=(t-e)/n;for(let k=0;k<=s;k++){const y=[],w=k/s,I=w*(t-e)+e;for(let D=0;D<=i;D++){const $=D/i,P=$*l+a,F=Math.sin(P),W=Math.cos(P);E.x=I*F,E.y=-w*n+m,E.z=I*W,h.push(E.x,E.y,E.z),S.set(F,R,W).normalize(),u.push(S.x,S.y,S.z),f.push($,1-w),y.push(g++)}_.push(y)}for(let k=0;k<i;k++)for(let y=0;y<s;y++){const w=_[y][k],I=_[y+1][k],D=_[y+1][k+1],$=_[y][k+1];d.push(w,I,$),d.push(I,D,$),A+=6}c.addGroup(p,A,0),p+=A}function v(S){const E=g,A=new Le,R=new C;let k=0;const y=S===!0?e:t,w=S===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,m*w,0),u.push(0,w,0),f.push(.5,.5),g++;const I=g;for(let D=0;D<=i;D++){const P=D/i*l+a,F=Math.cos(P),W=Math.sin(P);R.x=y*W,R.y=m*w,R.z=y*F,h.push(R.x,R.y,R.z),u.push(0,w,0),A.x=F*.5+.5,A.y=W*.5*w+.5,f.push(A.x,A.y),g++}for(let D=0;D<i;D++){const $=E+D,P=I+D;S===!0?d.push(P,P+1,$):d.push(P+1,P,$),k+=3}c.addGroup(p,k,S===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ct(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Pr=new C,Ir=new C,qo=new C,Dr=new Zt;class Wg extends wt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(ds*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Dr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Dr.getNormal(qo),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const v=(x+1)%3,S=h[x],E=h[v],A=Dr[d[x]],R=Dr[d[v]],k=`${S}_${E}`,y=`${E}_${S}`;y in u&&u[y]?(qo.dot(u[y].normal)<=s&&(f.push(A.x,A.y,A.z),f.push(R.x,R.y,R.z)),u[y]=null):k in u||(u[k]={index0:c[x],index1:c[v],normal:qo.clone()})}}for(const g in u)if(u[g]){const{index0:_,index1:m}=u[g];Pr.fromBufferAttribute(a,_),Ir.fromBufferAttribute(a,m),f.push(Pr.x,Pr.y,Pr.z),f.push(Ir.x,Ir.y,Ir.z)}this.setAttribute("position",new lt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ni extends wt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],d=[];let h=e;const u=(t-e)/i,f=new C,g=new Le;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,v=x,S=x+n+1,E=x+n+2,A=x+1;a.push(v,S,A),a.push(S,E,A)}}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ht extends wt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new C,u=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let E=0;E<=t;E++){const A=E/t;h.x=-e*Math.cos(i+A*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+A*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),m.push(A+S,1-v),x.push(c++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=d[p][x+1],S=d[p][x],E=d[p+1][x],A=d[p+1][x+1];(p!==0||o>0)&&f.push(v,S,A),(p!==n-1||l<Math.PI)&&f.push(S,E,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qr extends wt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],d=new C,h=new C,u=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gt extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Vg extends an{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ur(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Xg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function qg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Uc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function qh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ks{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Yg extends Ks{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rl:s=e,a=2*t-n;break;case Cl:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rl:o=e,l=2*n-t;break;case Cl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,x=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,S=f*m-f*_;for(let E=0;E!==a;++E)s[E]=p*o[d+E]+x*o[c+E]+v*o[l+E]+S*o[h+E];return s}}class jg extends Ks{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==a;++u)s[u]=o[c+u]*h+o[l+u]*d;return s}}class $g extends Ks{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ur(t,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ur(e.times,Array),values:Ur(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $g(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case xs:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return xs;case this.InterpolantFactoryMethodSmooth:return xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Xg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,u=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=xs;class ws extends yn{}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Xs;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Yh extends yn{}Yh.prototype.ValueTypeName="color";class Ms extends yn{}Ms.prototype.ValueTypeName="number";class Kg extends Ks{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let d=c+a;c!==d;c+=4)rn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Fi extends yn{InterpolantFactoryMethodLinear(e){return new Kg(this.times,this.values,this.getValueSize(),e)}}Fi.prototype.ValueTypeName="quaternion";Fi.prototype.DefaultInterpolation=xs;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends yn{}As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Xs;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends yn{}Ss.prototype.ValueTypeName="vector";class Zg{constructor(e,t=-1,n,i=id){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Qg(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(yn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=qg(l);l=Uc(l,1,d),c=Uc(c,1,d),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(s);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,g,_){if(f.length!==0){const m=[],p=[];qh(f,m,p,g),m.length!==0&&_.push(new h(u,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==u[g].morphTargets.length;++x){const v=u[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Ms(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Ss,f+".position",u,"pos",i),n(Fi,f+".quaternion",u,"rot",i),n(Ss,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Yh;case"quaternion":return Fi;case"bool":case"boolean":return ws;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Qg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jg(r.type);if(r.times===void 0){const t=[],n=[];qh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ni={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class e_{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,s===!1&&i.onStart!==void 0&&i.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const t_=new e_;class Rs{constructor(e){this.manager=e!==void 0?e:t_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class n_ extends Error{constructor(e,t){super(e),this.response=t}}class jh extends Rs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ni.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:i});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Cn[e],h=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:v,value:S})=>{if(v)p.close();else{_+=S.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,R=d.length;A<R;A++){const k=d[A];k.onProgress&&k.onProgress(E)}p.enqueue(S),x()}})}}});return new Response(m)}else throw new n_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ni.add(e,c);const d=Cn[e];delete Cn[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=Cn[e];if(d===void 0)throw this.manager.itemError(e),c;delete Cn[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class i_ extends Rs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ni.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=qs("img");function l(){d(),ni.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){d(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Mn extends Rs{constructor(e){super(e)}load(e,t,n,i){const s=new Mt,o=new i_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Zs extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class $h extends Zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Yo=new ze,Nc=new C,Fc=new C;class ka{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),Yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class s_ extends ka{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class r_ extends Zs{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new s_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Oc=new ze,Hs=new C,jo=new C;class o_ extends ka{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hs),jo.copy(n.position),jo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jo),n.updateMatrixWorld(),i.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc)}}class a_ extends Zs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new o_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class l_ extends ka{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class js extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new l_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kh extends Zs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ws{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class c_ extends Rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ni.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ni.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ni.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ni.add(e,l),s.manager.itemStart(e)}}class h_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kc(){return(typeof performance>"u"?Date:performance).now()}const Ha="\\[\\]\\.:\\/",u_=new RegExp("["+Ha+"]","g"),Ba="[^"+Ha+"]",d_="[^"+Ha.replace("\\.","")+"]",f_=/((?:WC+[\/:])*)/.source.replace("WC",Ba),p_=/(WCOD+)?/.source.replace("WCOD",d_),m_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ba),g_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ba),__=new RegExp("^"+f_+p_+m_+g_+"$"),x_=["material","materials","bones","map"];class v_{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u_,"")}static parseTrackName(e){const t=__.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);x_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=v_;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);class y_{domElement;three;constructor(){this.three=new kh({antialias:!0,powerPreference:"high-performance"}),this.domElement=this.three.domElement,this.three.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.three.setClearColor(17,1),this.three.toneMapping=ah,this.three.toneMappingExposure=1.5}setSize(e,t){this.three.setSize(e,t)}dispose(){this.three.dispose()}}const M_=`
varying vec2 vUv;
varying vec3 vPos;
void main() {
  vUv = uv;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,S_=`
precision highp float;

uniform float uTime;

varying vec2 vUv;
varying vec3 vPos;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float starShape(vec2 uv, float size) {
  float d = length(uv);
  float core = 1.0 - smoothstep(0.0, size * 0.3, d);
  float glow = 1.0 - smoothstep(0.0, size, d);
  return max(core, glow * 0.4);
}

void main() {
  vec3 dir = normalize(vPos);
  float height = dir.y * 0.5 + 0.5;

  // Deep space background with subtle nebula colors
  vec3 top = vec3(0.005, 0.01, 0.03);
  vec3 bottom = vec3(0.0, 0.0, 0.01);
  vec3 bg = mix(bottom, top, smoothstep(0.0, 1.0, height));

  // Nebula bands
  float nebula1 = sin(dir.y * 12.0 + dir.x * 8.0 + uTime * 0.005) * 0.5 + 0.5;
  float nebula2 = sin(dir.z * 10.0 - dir.x * 6.0 + uTime * 0.003) * 0.5 + 0.5;
  vec3 nebulaColor = vec3(0.15, 0.02, 0.08) * nebula1 * 0.15 +
                     vec3(0.02, 0.05, 0.12) * nebula2 * 0.1;
  bg += nebulaColor;

  // Stars — two layers for dense + bright
  vec3 starColor = vec3(0.0);
  for (int layer = 0; layer < 2; layer++) {
    float res = layer == 0 ? 120.0 : 40.0;
    vec2 grid = floor(vUv * res);
    vec2 offset = fract(vUv * res);
    float seed = hash(grid + float(layer) * 31.7);

    vec2 starPos = vec2(
      hash(grid + 0.1 + float(layer) * 13.3),
      hash(grid + 0.3 + float(layer) * 7.7)
    );

    float brightness = hash(grid + 5.7 + float(layer) * 3.1);
    float size = layer == 0
      ? 0.008 + brightness * 0.015
      : 0.02 + brightness * 0.06;

    float twinkle = 0.7 + 0.3 * sin(uTime * (1.5 + seed * 4.0) + seed * 6.28);
    vec2 d = offset - starPos;
    float starVal = starShape(d, size);
    float starOut = starVal * brightness * twinkle;

    if (layer == 0) starOut *= 1.5;

    // Star colors
    vec3 col = vec3(1.0);
    float colorRoll = hash(grid * 1.3 + float(layer) * 17.1);
    if (colorRoll > 0.92) col = vec3(0.6, 0.75, 1.0);  // blue
    if (colorRoll > 0.97) col = vec3(1.0, 0.85, 0.5);  // warm
    if (colorRoll > 0.99) col = vec3(1.0, 0.5, 0.3);   // red giant

    // Bright stars get a cross flare
    float flare = 0.0;
    if (brightness > 0.85 && layer == 1) {
      vec2 a = abs(d);
      float cross = exp(-a.x * 40.0) + exp(-a.y * 40.0);
      flare = cross * 0.3 * brightness * twinkle;
    }

    starColor += col * (starOut * 3.0 + flare);
  }

  vec3 finalColor = bg + starColor;

  gl_FragColor = vec4(finalColor, 1.0);
}
`;class b_{mesh;constructor(){const e=new ht(1e3,64,48);e.scale(-1,1,1);const t=new xn({vertexShader:M_,fragmentShader:S_,uniforms:{uTime:{value:0}},side:Vt,depthWrite:!1});this.mesh=new ge(e,t)}update(e){const t=this.mesh.material;t.uniforms?.uTime&&(t.uniforms.uTime.value+=e)}getMesh(){return this.mesh}}class T_{scene;camera;clock=new h_;frames=0;lastFpsUpdate=0;fps=0;stars;constructor(){this.scene=new Hh,this.scene.background=new Te(0),this.stars=new b_,this.scene.add(this.stars.getMesh()),this.scene.add(new Kh(4473958,.2)),this.scene.add(new $h(4487082,2241348,.35)),this.camera=new kt(60,window.innerWidth/window.innerHeight,.001,5e7),this.camera.position.set(0,0,10),this.camera.lookAt(0,0,0)}update(e){const t=this.clock.getElapsedTime();this.frames++,t-this.lastFpsUpdate>=1&&(this.fps=this.frames/(t-this.lastFpsUpdate),this.frames=0,this.lastFpsUpdate=t),this.stars.getMesh().position.copy(this.camera.position),this.stars.update(e)}getFps(){return this.fps}}class E_{root;helpOverlay=null;onPlay;onVab;onSettings;constructor(e,t,n){this.onPlay=e,this.onVab=t,this.onSettings=n,this.root=document.createElement("div"),this.root.className="panel",this.root.style.cssText=`
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
    `,this.root.appendChild(i);const s=(o,a,l)=>{const c=document.createElement("button");return c.className=`btn btn--${a}`,c.textContent=o,c.style.cssText="margin: 6px; min-width: 220px; padding: 12px 24px; font-size: 14px;",c.addEventListener("click",l),c};this.root.appendChild(s("FLIGHT","primary",this.onPlay)),this.root.appendChild(s("VEHICLE ASSEMBLY","secondary",this.onVab)),this.root.appendChild(s("SETTINGS","ghost",this.onSettings)),this.root.appendChild(s("HELP","ghost",()=>this.toggleHelp()))}toggleHelp(){if(this.helpOverlay){this.helpOverlay.remove(),this.helpOverlay=null;return}const e=document.createElement("div");e.style.cssText=`
      position:fixed;inset:0;z-index:300;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:rgba(6,8,20,0.92);
    `,e.innerHTML=`
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
    `,e.querySelector("#help-close").addEventListener("click",()=>{e.remove(),this.helpOverlay=null}),document.body.appendChild(e),this.helpOverlay=e}mount(e=document.body){e.appendChild(this.root)}unmount(){this.root.remove(),this.helpOverlay?.remove()}}const Zh=[{id:"capsule_mk1",name:"MK-1 Capsule",kind:"capsule",size:"M",mass:1200,crewCapacity:1,hasParachute:!0,dragCoeff:.5},{id:"tank_s_lfo",name:"Fuel Tank S (LFO)",kind:"tank",size:"S",mass:200,fuelCapacity:4500,fuelType:"LFO",dragCoeff:.4},{id:"tank_m_lfo",name:"Fuel Tank M (LFO)",kind:"tank",size:"M",mass:600,fuelCapacity:45e3,fuelType:"LFO",dragCoeff:.4},{id:"tank_l_lfo",name:"Fuel Tank L (LFO)",kind:"tank",size:"L",mass:1200,fuelCapacity:9e4,fuelType:"LFO",dragCoeff:.4},{id:"tank_xl_lfo",name:"Fuel Tank XL (LFO)",kind:"tank",size:"XL",mass:2500,fuelCapacity:225e3,fuelType:"LFO",dragCoeff:.4},{id:"engine_ant",name:'"Ant" Engine',kind:"engine",size:"S",mass:50,thrust:1500,isp:350,fuelType:"LFO"},{id:"engine_vector",name:'"Vector" Engine',kind:"engine",size:"M",mass:400,thrust:800,isp:340,fuelType:"LFO"},{id:"engine_mastodon",name:'"Mastodon" Engine',kind:"engine",size:"L",mass:1200,thrust:2e3,isp:330,fuelType:"LFO"},{id:"engine_mammoth",name:'"Mammoth" Engine',kind:"engine",size:"XL",mass:3e3,thrust:5e3,isp:310,fuelType:"LFO"},{id:"parachute_mk16",name:"Mk-16 Parachute",kind:"parachute",size:"M",mass:30,dragCoeff:5},{id:"legs_landini",name:'"Landini" Landing Legs',kind:"legs",size:"S",mass:80,dragCoeff:.1},{id:"heatshield_s",name:"Heat Shield S (Ablative)",kind:"heatshield",size:"S",mass:50,heatCapacity:5e4,dragCoeff:1.2},{id:"heatshield_m",name:"Heat Shield M (Ablative)",kind:"heatshield",size:"M",mass:150,heatCapacity:15e4,dragCoeff:1.2},{id:"heatshield_l",name:"Heat Shield L (Ablative)",kind:"heatshield",size:"L",mass:400,heatCapacity:4e5,dragCoeff:1.2},{id:"decoupler_1",name:"TD-1 Decoupler",kind:"decoupler",size:"M",mass:100,dragCoeff:.3},{id:"agena_target",name:"Agena Target Vehicle",kind:"gltf",size:"M",mass:1500,dragCoeff:.3,gltfUrl:"/models/agena.glb",gltfScale:.0015},{id:"apollo_soyuz",name:"Apollo Soyuz",kind:"gltf",size:"L",mass:5e3,dragCoeff:.3,gltfUrl:"/models/apollo_soyuz.glb",gltfScale:.0015},{id:"saturn_v",name:"Saturn V",kind:"gltf",size:"XL",mass:3e6,dragCoeff:.3,gltfUrl:"/models/saturn_v.glb",gltfScale:.0015},{id:"ares_1",name:"Ares I",kind:"gltf",size:"XL",mass:2e6,dragCoeff:.3,gltfUrl:"/models/ares_1.glb",gltfScale:.0015},{id:"apollo_lunar_module",name:"Apollo Lunar Module",kind:"gltf",size:"L",mass:15e3,dragCoeff:.3,gltfUrl:"/models/apollo_lunar_module.glb",gltfScale:.002},{id:"atlas_6",name:"Atlas 6 (Friendship 7)",kind:"gltf",size:"L",mass:12e4,dragCoeff:.3,gltfUrl:"/models/atlas_6.glb",gltfScale:.0015},{id:"atlas_9",name:"Atlas 9 (Faith 7)",kind:"gltf",size:"L",mass:12e4,dragCoeff:.3,gltfUrl:"/models/atlas_9.glb",gltfScale:.0015},{id:"crawler",name:"Crawler Transporter",kind:"gltf",size:"XL",mass:27e5,dragCoeff:.3,gltfUrl:"/models/crawler.glb",gltfScale:.001}];function Vr(r){return Zh.find(e=>e.id===r)}function Hc(r,e){if(e===sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===da||e===_h){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===da)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class w_ extends Rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new P_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new z_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new U_(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new V_(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ws.extractUrlBase(e);o=Ws.resolveURL(c,this.path)}else o=Ws.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new jh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(d){t(d),s.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Jh){try{o[je.KHR_BINARY_GLTF]=new X_(e)}catch(h){i&&i(h);return}s=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const h=s.extensionsUsed[d],u=s.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:o[h]=new C_;break;case je.KHR_DRACO_MESH_COMPRESSION:o[h]=new q_(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[h]=new Y_;break;case je.KHR_MESH_QUANTIZATION:o[h]=new j_;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function A_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class R_{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const d=new Te(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],ft);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new js(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new a_(d),c.distance=h;break;case"spot":c=new r_(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class C_{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return It}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ft),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,$e))}return Promise.all(i)}}class L_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class P_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(a,a)}return Promise.all(s)}}class I_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class D_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ft)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,$e)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class U_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class N_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],ft),Promise.all(s)}}class F_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class O_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],ft),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,$e)),Promise.all(s)}}class k_{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class H_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class B_{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class z_{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class G_{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class W_{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(d*h);return o.decodeGltfBuffer(new Uint8Array(f),d,h,u,i.mode,i.filter),f})})}else return null}}class V_{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==nn.TRIANGLES&&c.mode!==nn.TRIANGLE_STRIP&&c.mode!==nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,f=[];for(const g of h){const _=new ze,m=new C,p=new rn,x=new C(1,1,1),v=new zg(g.geometry,g.material,u);for(let S=0;S<u;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&x.fromBufferAttribute(l.SCALE,S),v.setMatrixAt(S,_.compose(m,p,x));for(const S in l)if(S==="_COLOR_0"){const E=l[S];v.instanceColor=new _a(E.array,E.itemSize,E.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);at.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const Jh="glTF",Bs=12,Bc={JSON:1313821514,BIN:5130562};class X_{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Bs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Bs,s=new DataView(e,Bs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Bc.JSON){const c=new Uint8Array(e,Bs+o,a);this.content=n.decode(c)}else if(l===Bc.BIN){const c=Bs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class q_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const h=va[d]||d.toLowerCase();a[h]=o[d]}for(const d in e.attributes){const h=va[d]||d.toLowerCase();if(o[d]!==void 0){const u=n.accessors[e.attributes[d]],f=ps[u.componentType];c[h]=f.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,ft,u)})})}}class Y_{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class j_{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Qh extends Ks{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=i-t,h=(n-t)/d,u=h*h,f=u*h,g=e*c,_=g-c,m=-2*f+3*u,p=f-u,x=1-m,v=p-u+h;for(let S=0;S!==a;S++){const E=o[_+S+a],A=o[_+S+l]*d,R=o[g+S+a],k=o[g+S]*d;s[S]=x*E+v*A+m*R+p*k}return s}}const $_=new rn;class K_ extends Qh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return $_.fromArray(s).normalize().toArray(s),s}}const nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zc={9728:Lt,9729:Xt,9984:ua,9985:ch,9986:Gr,9987:Di},Gc={33071:qt,33648:Yr,10497:Yt},$o={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},va={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Z_={CUBICSPLINE:void 0,LINEAR:xs,STEP:Xs},Ko={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function J_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new gt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_n})),r.DefaultMaterial}function mi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ei(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Q_(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,d=e.length;c<d;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(u)}if(s){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],h=c[1],u=c[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function ex(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tx(r){let e;const t=r.extensions&&r.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zo(t.attributes):e=r.indices+":"+Zo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Zo(r.targets[n]);return e}function Zo(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ya(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const ix=new ze;class sx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new A_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Mn(this.options.manager):this.textureLoader=new c_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return mi(s,a,i),ei(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())s(d,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ws.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=$o[i.type],a=ps[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new St(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=$o[i.type],c=ps[i.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(u/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(x);v||(_=new c(a,p*f,i.count*f/d),v=new Bh(_,f/d),t.cache.add(x,v)),m=new Ys(v,l,u%f/d,g)}else a===null?_=new c(i.count*l):_=new c(a,u,i.count*l),m=new St(_,l,g);if(i.sparse!==void 0){const p=$o.SCALAR,x=ps[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,E=new x(o[1],v,i.sparse.count*p),A=new c(o[2],S,i.sparse.count*l);a!==null&&(m=new St(m.array.slice(),m.itemSize,m.normalized));for(let R=0,k=E.length;R<k;R++){const y=E[R];if(m.setX(y,A[R*l]),l>=2&&m.setY(y,A[R*l+1]),l>=3&&m.setZ(y,A[R*l+2]),l>=4&&m.setW(y,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(s.samplers||{})[o.sampler]||{};return d.magFilter=zc[u.magFilter]||Xt,d.minFilter=zc[u.minFilter]||Di,d.wrapS=Gc[u.wrapS]||Yt,d.wrapT=Gc[u.wrapT]||Yt,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const u=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Mt(_);m.needsUpdate=!0,u(m)}),t.load(Ws.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||nx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new oo,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Na,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const h=i[je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],ft),a.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,$e)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ht);const d=s.alphaMode||Ko.OPAQUE;if(d===Ko.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Ko.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==It&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Le(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==It&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==It){const h=s.emissiveFactor;a.emissive=new Te().setRGB(h[0],h[1],h[2],ft)}return s.emissiveTexture!==void 0&&o!==It&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,$e)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),ei(h,s),t.associations.set(h,{materials:e}),s.extensions&&mi(i,h,s),h})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Wc(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=tx(c),h=i[d];if(h)o.push(h.promise);else{let u;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=Wc(new wt,c,t),i[d]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?J_(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let f=0,g=d.length;f<g;f++){const _=d[f],m=o[f];let p;const x=c[f];if(m.mode===nn.TRIANGLES||m.mode===nn.TRIANGLE_STRIP||m.mode===nn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new kg(_,x):new ge(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===nn.TRIANGLE_STRIP?p.geometry=Hc(p.geometry,_h):m.mode===nn.TRIANGLE_FAN&&(p.geometry=Hc(p.geometry,da));else if(m.mode===nn.LINES)p=new Xh(_,x);else if(m.mode===nn.LINE_STRIP)p=new Fa(_,x);else if(m.mode===nn.LINE_LOOP)p=new Gg(_,x);else if(m.mode===nn.POINTS)p=new Oa(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ex(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ei(p,s),m.extensions&&mi(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&mi(i,h[0],s),h[0];const u=new on;s.extensions&&mi(i,u,s),t.associations.set(u,{meshes:e});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Cd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Pa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const h=o[c];if(h){a.push(h);const u=new ze;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ua(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),d.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let x=0,v=u.length;x<v;x++){const S=u[x],E=f[x],A=g[x],R=_[x],k=m[x];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const y=n._createAnimationTracks(S,E,A,R,k);if(y)for(let w=0;w<y.length;w++)p.push(y[w])}return new Zg(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,d=a.length;c<d;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,ix)});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(s.isBone===!0?d=new Wh:c.length>1?d=new on:c.length===1?d=c[0]:d=new at,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(s.name&&(d.userData.name=s.name,d.name=o),ei(d,s),s.extensions&&mi(n,d,s),s.matrix!==void 0){const h=new ze;h.fromArray(s.matrix),d.applyMatrix4(h)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new on;n.name&&(s.name=i.createUniqueName(n.name)),ei(s,n),n.extensions&&mi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,h=l.length;d<h;d++)s.add(l[d]);const c=d=>{const h=new Map;for(const[u,f]of i.associations)(u instanceof an||u instanceof Mt)&&h.set(u,f);return d.traverse(u=>{const f=i.associations.get(u);f!=null&&h.set(u,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Xn[s.path]===Xn.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(Xn[s.path]){case Xn.weights:c=Ms;break;case Xn.rotation:c=Fi;break;case Xn.position:case Xn.scale:c=Ss;break;default:switch(n.itemSize){case 1:c=Ms;break;case 2:case 3:default:c=Ss;break}break}const d=i.interpolation!==void 0?Z_[i.interpolation]:xs,h=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const g=new c(l[u]+"."+Xn[s.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ya(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Fi?K_:Qh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rx(r,e,t){const n=e.attributes,i=new ln;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const d=ya(ps[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new C,l=new C;for(let c=0,d=s.length;c<d;c++){const h=s[c];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=ya(ps[u.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new vn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Wc(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=va[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ze.workingColorSpace!==ft&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),ei(r,e),rx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Q_(r,e.targets,t):r})}const $s=66743e-15,On=1e-9,kn=562500,Vc=1/60,ox=9.80665,ax=11944e22,Ke=.05,Ma=5;function Sn(r){return("/ellipse/"+r.replace(/^\//,"")).replace(/\/\//g,"/")}function Ne(r,e){const t=document.createElement("canvas");t.width=r,t.height=e;const n=t.getContext("2d");return[t,n]}function lx(r){let e=r|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const cx=[{lat:.7,lon:-1.8,radiusLat:.5,radiusLon:.8,color:"#4a7c3f"},{lat:-.4,lon:-1.3,radiusLat:.6,radiusLon:.35,color:"#5a8c4a"},{lat:.85,lon:.4,radiusLat:.25,radiusLon:.3,color:"#6a9c5a"},{lat:.1,lon:.6,radiusLat:.55,radiusLon:.4,color:"#8a7c3f"},{lat:.7,lon:1.6,radiusLat:.55,radiusLon:1,color:"#6a8c4a"},{lat:-.6,lon:2.4,radiusLat:.25,radiusLon:.3,color:"#9a8c5a"},{lat:1.1,lon:-.9,radiusLat:.2,radiusLon:.2,color:"#8aac7a"}];function hx(r,e=2){const t=r.width,n=r.height,o=r.getContext("2d").getImageData(0,0,t,n).data,[a,l]=Ne(t,n),c=l.createImageData(t,n),d=c.data,h=(f,g)=>(Math.max(0,Math.min(n-1,g))*t+Math.max(0,Math.min(t-1,f)))*4;for(let f=0;f<n;f++)for(let g=0;g<t;g++){const _=o[h(g-1,f-1)]/255,m=o[h(g,f-1)]/255,p=o[h(g+1,f-1)]/255,x=o[h(g-1,f)]/255,v=o[h(g+1,f)]/255,S=o[h(g-1,f+1)]/255,E=o[h(g,f+1)]/255,A=o[h(g+1,f+1)]/255,R=p+2*v+A-(_+2*x+S),k=S+2*E+A-(_+2*m+p),y=R*e,w=k*e,I=Math.sqrt(y*y+w*w+1),D=(f*t+g)*4;d[D]=Math.round((y/I*.5+.5)*255),d[D+1]=Math.round((w/I*.5+.5)*255),d[D+2]=Math.round(1/I*255),d[D+3]=255}l.putImageData(c,0,0);const u=new dn(a);return u.wrapS=u.wrapT=Yt,u.anisotropy=4,u}function ai(r,e,t,n,i){const s=new dn(r);s.wrapS=s.wrapT=Yt,s.colorSpace=$e,s.anisotropy=4;let o;e&&(o=hx(e,2));let a;t&&(a=new dn(t),a.wrapS=a.wrapT=Yt,a.anisotropy=4);let l;n&&(l=new dn(n),l.wrapS=l.wrapT=Yt,l.anisotropy=4);let c;return i&&(c=new dn(i),c.wrapS=c.wrapT=Yt,c.anisotropy=4),{color:s,normal:o,roughness:a,metalness:l,ao:c}}function ki(r){let e=r|0;return()=>(e=e*1664525+1013904223>>>0,e/4294967295)}function li(r,e,t,n=.02){const i=r.getImageData(0,0,e,t),s=i.data;for(let o=0;o<s.length;o+=4){const a=(Math.random()-.5)*2*n*255;s[o]=Math.min(255,Math.max(0,s[o]+a)),s[o+1]=Math.min(255,Math.max(0,s[o+1]+a)),s[o+2]=Math.min(255,Math.max(0,s[o+2]+a))}r.putImageData(i,0,0)}function ux(){const[t,n]=Ne(512,256);n.fillStyle="#1a3d6b",n.fillRect(0,0,512,256);for(const s of cx){n.fillStyle=s.color,n.beginPath();const o=(s.lon+Math.PI)/(2*Math.PI)*512,a=(Math.PI/2-s.lat)/Math.PI*256,l=s.radiusLon/(2*Math.PI)*512,c=s.radiusLat/Math.PI*256;n.ellipse(o,a,l,c,0,0,Math.PI*2),n.fill();const d=lx(s.lat*1e3+s.lon*100);for(let h=0;h<40;h++){const u=(d()-.5)*l*1.5,f=(d()-.5)*c*1.5,g=o+u,_=a+f;(u/l)**2+(f/c)**2<1&&(n.fillStyle=d()>.5?"#3a6c2f":"#7aac5a",n.beginPath(),n.arc(g,_,2+d()*3,0,Math.PI*2),n.fill())}}n.fillStyle="#d0e8f0",n.fillRect(0,0,512,256*.06),n.fillRect(0,256*.94,512,256*.06);const i=new dn(t);return i.wrapS=i.wrapT=Yt,i.colorSpace=$e,i}function dx(r="M"){const[n,i]=Ne(2048,2048),[s,o]=Ne(2048,2048),[a,l]=Ne(2048,2048),[c,d]=Ne(2048,2048),[h,u]=Ne(2048,2048),f=ki(r.charCodeAt(0)*1e3+42),g=r==="S",_=r==="L"||r==="XL";i.fillStyle="#ecece8",i.fillRect(0,0,2048,2048);const m=i.createLinearGradient(0,0,0,2048);m&&(m.addColorStop(0,"rgba(0,0,0,0.04)"),m.addColorStop(.5,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(0,0,0,0.03)"),i.fillStyle=m,i.fillRect(0,0,2048,2048));const x=2048/(g?6:_?16:10);i.strokeStyle="#d0d0ca",i.lineWidth=3;for(let E=x;E<2048;E+=x)i.beginPath(),i.moveTo(0,E),i.lineTo(2048,E),i.stroke(),i.strokeStyle="rgba(255,255,255,0.12)",i.lineWidth=1.5,i.beginPath(),i.moveTo(0,E-1.5),i.lineTo(2048,E-1.5),i.stroke(),i.strokeStyle="#d0d0ca",i.lineWidth=3;const v=g?12:_?28:18;i.strokeStyle="rgba(90,90,100,0.06)",i.lineWidth=2;for(let E=1;E<v;E++){const A=E/v*2048;i.beginPath(),i.moveTo(A,0),i.lineTo(A,2048),i.stroke()}i.fillStyle="#c8c8c2";for(let E=x;E<2048;E+=x)for(let A=40;A<2008;A+=80)i.beginPath(),i.arc(A,E,5,0,Math.PI*2),i.fill(),i.strokeStyle="#b0b0aa",i.lineWidth=1,i.stroke();const S=g?4:_?14:8;for(let E=0;E<S;E++){const A=f()*2048*.85+153.6,R=f()*2048*.75+2048*.1,k=50+f()*180,y=40+f()*120;i.fillStyle=`rgb(${200+f()*30}, ${160+f()*20}, ${100+f()*20})`,i.globalAlpha=.7+f()*.25,i.fillRect(A,R,k,y),i.fillStyle=`rgb(${180+f()*20}, ${140+f()*20}, ${80+f()*20})`;for(let w=0;w<20;w++)i.beginPath(),i.arc(A+f()*k,R+f()*y,2+f()*5,0,Math.PI*2),i.fill();i.globalAlpha=1}i.fillStyle="#6a6a70",i.fillRect(0,0,2048,2048*.015),i.fillRect(0,2048*.985,2048,2048*.015),i.strokeStyle="rgba(90,90,100,0.35)",i.lineWidth=4,i.beginPath(),i.moveTo(2048*.5,0),i.lineTo(2048*.5,2048),i.stroke(),o.fillStyle="#808080",o.fillRect(0,0,2048,2048),o.strokeStyle="#b8b8b8",o.lineWidth=10;for(let E=x;E<2048;E+=x)o.beginPath(),o.moveTo(0,E),o.lineTo(2048,E),o.stroke();o.strokeStyle="#989898",o.lineWidth=4;for(let E=1;E<v;E++){const A=E/v*2048;o.beginPath(),o.moveTo(A,0),o.lineTo(A,2048),o.stroke()}o.fillStyle="#d0d0d0";for(let E=x;E<2048;E+=x)for(let A=40;A<2008;A+=80)o.beginPath(),o.arc(A,E,6,0,Math.PI*2),o.fill();l.fillStyle="#a0a0a0",l.fillRect(0,0,2048,2048),l.strokeStyle="#d0d0d0",l.lineWidth=12;for(let E=x;E<2048;E+=x)l.beginPath(),l.moveTo(0,E),l.lineTo(2048,E),l.stroke();for(let E=0;E<S;E++){const A=f()*2048*.85+153.6,R=f()*2048*.75+2048*.1,k=50+f()*180,y=40+f()*120;l.fillStyle="#e0e0e0",l.fillRect(A,R,k,y)}l.fillStyle="#606060",l.fillRect(0,0,2048,2048*.015),l.fillRect(0,2048*.985,2048,2048*.015),d.fillStyle="#080808",d.fillRect(0,0,2048,2048),d.fillStyle="#d0d0d0",d.fillRect(0,0,2048,2048*.015),d.fillRect(0,2048*.985,2048,2048*.015),d.fillStyle="#707070",d.fillRect(2048*.49,0,2048*.02,2048),u.fillStyle="#ffffff",u.fillRect(0,0,2048,2048),u.strokeStyle="#808080",u.lineWidth=14;for(let E=x;E<2048;E+=x)u.beginPath(),u.moveTo(0,E),u.lineTo(2048,E),u.stroke();u.strokeStyle="#b0b0b0",u.lineWidth=8;for(let E=1;E<v;E++){const A=E/v*2048;u.beginPath(),u.moveTo(A,0),u.lineTo(A,2048),u.stroke()}return li(i,2048,2048,.012),ai(n,s,a,c,h)}function fx(){const[t,n]=Ne(2048,2048),[i,s]=Ne(2048,2048),[o,a]=Ne(2048,2048),[l,c]=Ne(2048,2048),[d,h]=Ne(2048,2048),u=ki(12345);n.fillStyle="#f5f5ee",n.fillRect(0,0,2048,2048*.78);const f=n.createLinearGradient(0,0,0,2048*.78);f&&(f.addColorStop(0,"rgba(20,20,25,0.05)"),f.addColorStop(.5,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(20,20,25,0.03)"),n.fillStyle=f,n.fillRect(0,0,2048,2048*.78)),n.strokeStyle="rgba(180,180,180,0.15)",n.lineWidth=2;for(let _=2048*.08;_<2048*.75;_+=2048*.07)n.beginPath(),n.moveTo(0,_),n.lineTo(2048,_),n.stroke();n.fillStyle="#2a2a2e",n.fillRect(0,2048*.78,2048,2048*.22);for(let _=0;_<1500;_++){const m=u()*2048,p=2048*.78+u()*2048*.22,x=1+u()*4,v=25+u()*45;n.fillStyle=`rgb(${v},${v},${v+3})`,n.beginPath(),n.arc(m,p,x,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(10,10,12,0.35)",n.lineWidth=1+u()*2;for(let _=0;_<50;_++){const m=u()*2048,p=2048*.78+u()*2048*.18,x=30+u()*120;n.beginPath(),n.moveTo(m,p),n.lineTo(m+(u()-.5)*40,p+x),n.stroke()}n.fillStyle="#5a5a60",n.fillRect(0,2048*.77,2048,2048*.015),n.fillStyle="#8a8a90",n.fillRect(0,2048*.775,2048,2048*.005),n.fillStyle="#003366",n.fillRect(0,2048*.2,2048,2048*.035),n.fillStyle="#b31b1b",n.fillRect(0,2048*.245,2048,2048*.025),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(0,2048*.27,2048,2048*.003);const g=[[2048*.28,2048*.12],[2048*.55,2048*.14]];for(const[_,m]of g)n.fillStyle="#0a0a15",n.beginPath(),n.ellipse(_,m,2048*.04,2048*.03,0,0,Math.PI*2),n.fill(),n.strokeStyle="#9a9a9e",n.lineWidth=5,n.beginPath(),n.ellipse(_,m,2048*.045,2048*.035,0,0,Math.PI*2),n.stroke(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.beginPath(),n.ellipse(_,m,2048*.05,2048*.04,0,0,Math.PI*2),n.stroke();n.fillStyle="#3a3a3e";for(let _=0;_<4;_++){const m=_/4*Math.PI*2,p=2048*.5+Math.cos(m)*2048*.38,x=2048*.35+Math.sin(m)*2048*.05;n.beginPath(),n.arc(p,x,14,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.stroke()}n.fillStyle="#e0e0d8",n.fillRect(0,0,2048,2048*.04),n.strokeStyle="#a0a0a0",n.lineWidth=2,n.beginPath(),n.moveTo(0,2048*.04),n.lineTo(2048,2048*.04),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,2048,2048),s.strokeStyle="#a8a8a8",s.lineWidth=5;for(let _=2048*.08;_<2048*.75;_+=2048*.07)s.beginPath(),s.moveTo(0,_),s.lineTo(2048,_),s.stroke();s.strokeStyle="#585858",s.lineWidth=3;for(let _=0;_<2048;_+=48)s.beginPath(),s.moveTo(_,2048*.78),s.lineTo(_,2048),s.stroke();for(let _=2048*.8;_<2048;_+=48)s.beginPath(),s.moveTo(0,_),s.lineTo(2048,_),s.stroke();s.strokeStyle="#c0c0c0",s.lineWidth=8,s.beginPath(),s.moveTo(0,2048*.775),s.lineTo(2048,2048*.775),s.stroke();for(const[_,m]of g)s.strokeStyle="#d0d0d0",s.lineWidth=10,s.beginPath(),s.ellipse(_,m,2048*.05,2048*.04,0,0,Math.PI*2),s.stroke();a.fillStyle="#808080",a.fillRect(0,0,2048,2048*.78),a.fillStyle="#e0e0e0",a.fillRect(0,2048*.78,2048,2048*.22),a.fillStyle="#484848",a.fillRect(0,2048*.77,2048,2048*.015);for(const[_,m]of g)a.fillStyle="#181818",a.beginPath(),a.ellipse(_,m,2048*.045,2048*.035,0,0,Math.PI*2),a.fill();c.fillStyle="#080808",c.fillRect(0,0,2048,2048),c.fillStyle="#d0d0d0",c.fillRect(0,2048*.77,2048,2048*.015),c.fillRect(0,0,2048,2048*.04);for(const[_,m]of g)c.fillStyle="#b0b0b0",c.beginPath(),c.ellipse(_,m,2048*.05,2048*.04,0,0,Math.PI*2),c.fill();for(let _=0;_<4;_++){const m=_/4*Math.PI*2,p=2048*.5+Math.cos(m)*2048*.38,x=2048*.35+Math.sin(m)*2048*.05;c.beginPath(),c.arc(p,x,16,0,Math.PI*2),c.fill()}h.fillStyle="#ffffff",h.fillRect(0,0,2048,2048),h.strokeStyle="#808080",h.lineWidth=10;for(let _=2048*.08;_<2048*.75;_+=2048*.07)h.beginPath(),h.moveTo(0,_),h.lineTo(2048,_),h.stroke();h.strokeStyle="#606060",h.lineWidth=6;for(let _=0;_<2048;_+=48)h.beginPath(),h.moveTo(_,2048*.78),h.lineTo(_,2048),h.stroke();for(let _=2048*.8;_<2048;_+=48)h.beginPath(),h.moveTo(0,_),h.lineTo(2048,_),h.stroke();h.strokeStyle="#909090",h.lineWidth=12,h.beginPath(),h.moveTo(0,2048*.775),h.lineTo(2048,2048*.775),h.stroke();for(const[_,m]of g)h.strokeStyle="#707070",h.lineWidth=14,h.beginPath(),h.ellipse(_,m,2048*.05,2048*.04,0,0,Math.PI*2),h.stroke();return li(n,2048,2048,.018),ai(t,i,o,l,d)}function px(){const[t,n]=Ne(1024,1024),[i,s]=Ne(1024,1024),[o,a]=Ne(1024,1024),[l,c]=Ne(1024,1024),[d,h]=Ne(1024,1024),u=ki(54321);n.fillStyle="#3a3a40",n.fillRect(0,0,1024,1024*.35);for(let g=0;g<200;g++){const _=u()*1024,m=u()*1024*.35,p=5+u()*30;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(_,m),n.lineTo(_,m+p),n.stroke()}n.fillStyle="#4a4a50",n.fillRect(0,1024*.35,1024,1024*.06),n.fillStyle="#2a2a2e";for(let g=16;g<1024;g+=32)n.beginPath(),n.arc(g,1024*.38,5,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=1,n.stroke();for(let g=1024*.41;g<1024*.95;g++){const _=(g-419.84)/552.96,m=Math.round(180+40*(1-_)),p=Math.round(100+20*(1-_)),x=Math.round(40+10*(1-_));n.fillStyle=`rgb(${m}, ${p}, ${x})`,n.fillRect(0,g,1024,1)}n.strokeStyle="rgba(120,70,30,0.4)",n.lineWidth=1;for(let g=8;g<1024;g+=16)n.beginPath(),n.moveTo(g,1024*.41),n.lineTo(g,1024*.95),n.stroke();const f=n.createLinearGradient(0,1024*.85,0,1024);f&&(f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(.5,"rgba(0,0,0,0.3)"),f.addColorStop(1,"rgba(0,0,0,0.6)"),n.fillStyle=f,n.fillRect(0,1024*.85,1024,1024*.15)),n.fillStyle="#5a5a60",n.fillRect(0,1024*.95,1024,1024*.025),n.fillStyle="#7a7a80",n.fillRect(0,1024*.975,1024,1024*.025),n.fillStyle="#4a4a50";for(let g=0;g<4;g++){const _=g/4*Math.PI*2+Math.PI/4,m=1024*.5+Math.cos(_)*1024*.42,p=1024*.25+Math.sin(_)*1024*.05;n.fillRect(m-15,p-15,30,30),n.strokeStyle="#6a6a70",n.lineWidth=2,n.strokeRect(m-15,p-15,30,30)}s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let g=0;g<1024;g+=4)s.beginPath(),s.moveTo(g,0),s.lineTo(g,1024*.35),s.stroke();s.fillStyle="#c0c0c0";for(let g=16;g<1024;g+=32)s.beginPath(),s.arc(g,1024*.38,5,0,Math.PI*2),s.fill();s.strokeStyle="#606060",s.lineWidth=3;for(let g=8;g<1024;g+=16)s.beginPath(),s.moveTo(g,1024*.41),s.lineTo(g,1024*.95),s.stroke();s.strokeStyle="#a0a0a0",s.lineWidth=6,s.beginPath(),s.moveTo(0,1024*.41),s.lineTo(1024,1024*.41),s.stroke(),s.beginPath(),s.moveTo(0,1024*.95),s.lineTo(1024,1024*.95),s.stroke(),a.fillStyle="#505050",a.fillRect(0,0,1024,1024*.35),a.fillStyle="#606060",a.fillRect(0,1024*.35,1024,1024*.06),a.fillStyle="#808080",a.fillRect(0,1024*.41,1024,1024*.54),a.fillStyle="#b0b0b0",a.fillRect(0,1024*.85,1024,1024*.15),a.fillStyle="#404040",a.fillRect(0,1024*.95,1024,1024*.05),c.fillStyle="#e0e0e0",c.fillRect(0,0,1024,1024),c.fillStyle="#808080",c.fillRect(0,1024*.85,1024,1024*.15),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=12,h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.beginPath(),h.moveTo(0,1024*.41),h.lineTo(1024,1024*.41),h.stroke(),h.strokeStyle="#808080",h.lineWidth=4;for(let g=8;g<1024;g+=16)h.beginPath(),h.moveTo(g,1024*.41),h.lineTo(g,1024*.95),h.stroke();return h.strokeStyle="#707070",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.95),h.lineTo(1024,1024*.95),h.stroke(),li(n,1024,1024,.01),ai(t,i,o,l,d)}function mx(){const[t,n]=Ne(1024,1024),[i,s]=Ne(1024,1024),[o,a]=Ne(1024,1024),[l,c]=Ne(1024,1024),[d,h]=Ne(1024,1024),u=ki(11111);n.fillStyle="#3a3d30",n.fillRect(0,0,1024,1024);for(let f=0;f<100;f++){const g=u()*1024,_=u()*1024,m=10+u()*50;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(g,_),n.lineTo(g,_+m),n.stroke()}n.fillStyle="#8a8a8e";for(let f=50;f<1024;f+=200)n.fillRect(0,f,1024,15),n.fillStyle="#6a6a6e",n.fillRect(0,f+15,1024,2),n.fillStyle="#8a8a8e";n.fillStyle="#2a2d22",n.fillRect(0,1024*.85,1024,1024*.15),n.strokeStyle="#4a4d42",n.lineWidth=1;for(let f=0;f<1024;f+=32)n.beginPath(),n.moveTo(f,1024*.85),n.lineTo(f,1024),n.stroke();for(let f=1024*.85;f<1024;f+=32)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();n.fillStyle="#222";for(let f=0;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);n.fillStyle="#ffcc00";for(let f=20;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=2;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024*.85),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=6;for(let f=50;f<1024;f+=200)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();s.strokeStyle="#606060",s.lineWidth=3;for(let f=0;f<1024;f+=32)s.beginPath(),s.moveTo(f,1024*.85),s.lineTo(f,1024),s.stroke();for(let f=1024*.85;f<1024;f+=32)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#707070",a.fillRect(0,0,1024,1024*.85),a.fillStyle="#909090";for(let f=50;f<1024;f+=200)a.fillRect(0,f,1024,17);a.fillStyle="#b0b0b0",a.fillRect(0,1024*.85,1024,1024*.15),c.fillStyle="#303030",c.fillRect(0,0,1024,1024),c.fillStyle="#e0e0e0";for(let f=50;f<1024;f+=200)c.fillRect(0,f,1024,17);c.fillStyle="#a0a0a0",c.fillRect(0,1024*.85,1024,1024*.15),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#808080",h.lineWidth=8;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024*.85),h.stroke();h.strokeStyle="#909090",h.lineWidth=10;for(let f=50;f<1024;f+=200)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return li(n,1024,1024,.02),ai(t,i,o,l,d)}function gx(){const[t,n]=Ne(1024,1024),[i,s]=Ne(1024,1024),[o,a]=Ne(1024,1024),[l,c]=Ne(1024,1024),[d,h]=Ne(1024,1024),u=ki(22222);n.fillStyle="#4a4a4e",n.fillRect(0,0,1024,1024);for(let f=0;f<150;f++){const g=u()*1024,_=u()*1024,m=5+u()*30;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(g,_),n.lineTo(g,_+m),n.stroke()}n.fillStyle="#7a7a7e",n.fillRect(0,1024*.35,1024,1024*.3),n.fillStyle="#3a3a3e";for(let f=24;f<1024;f+=48)n.beginPath(),n.arc(f,1024*.5,6,0,Math.PI*2),n.fill(),n.strokeStyle="#6a6a6e",n.lineWidth=1,n.stroke();n.fillStyle="#cc3300";for(let f=0;f<8;f++){const g=f/8*Math.PI*2,_=1024*.5+Math.cos(g)*1024*.35,m=1024*.5+Math.sin(g)*1024*.35;n.beginPath(),n.arc(_,m,8,0,Math.PI*2),n.fill()}n.fillStyle="#5a5a5e",n.fillRect(0,0,1024,1024*.08),n.fillRect(0,1024*.92,1024,1024*.08),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#b0b0b0",s.lineWidth=10,s.beginPath(),s.moveTo(0,1024*.35),s.lineTo(1024,1024*.35),s.stroke(),s.beginPath(),s.moveTo(0,1024*.65),s.lineTo(1024,1024*.65),s.stroke(),s.fillStyle="#c0c0c0";for(let f=24;f<1024;f+=48)s.beginPath(),s.arc(f,1024*.5,6,0,Math.PI*2),s.fill();return s.strokeStyle="#a0a0a0",s.lineWidth=8,s.beginPath(),s.moveTo(0,1024*.08),s.lineTo(1024,1024*.08),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#404040",a.fillRect(0,1024*.35,1024,1024*.3),a.fillStyle="#505050",a.fillRect(0,0,1024,1024*.08),a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#d0d0d0",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#707070",h.lineWidth=12,h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.beginPath(),h.moveTo(0,1024*.65),h.lineTo(1024,1024*.65),h.stroke(),h.strokeStyle="#808080",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.08),h.lineTo(1024,1024*.08),h.stroke(),h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),li(n,1024,1024,.015),ai(t,i,o,l,d)}function _x(){const[t,n]=Ne(1024,1024),[i,s]=Ne(1024,1024),[o,a]=Ne(1024,1024),[l,c]=Ne(1024,1024),[d,h]=Ne(1024,1024),u=ki(33333);n.fillStyle="#1a1a1c",n.fillRect(0,0,1024,1024);for(let f=0;f<3e3;f++){const g=u()*1024,_=u()*1024,m=1+u()*4,p=20+u()*50,x=u()*20-10;n.fillStyle=`rgb(${p+x},${p},${p-x})`,n.beginPath(),n.arc(g,_,m,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(40,20,10,0.3)",n.lineWidth=1+u()*2;for(let f=0;f<80;f++){const g=u()*1024,_=u()*1024*.3,m=50+u()*200;n.beginPath(),n.moveTo(g,_),n.lineTo(g+(u()-.5)*40,_+m),n.stroke()}n.strokeStyle="#0a0a0c",n.lineWidth=2;for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(f,0),n.lineTo(f,1024),n.stroke();for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();s.fillStyle="#808080",s.fillRect(0,0,1024,1024);for(let f=0;f<500;f++){const g=u()*1024,_=u()*1024,m=2+u()*5;s.fillStyle=`rgb(${128+u()*30},${128+u()*30},${128+u()*30})`,s.beginPath(),s.arc(g,_,m,0,Math.PI*2),s.fill()}s.strokeStyle="#404040",s.lineWidth=6;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024),s.stroke();for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#f0f0f0",a.fillRect(0,0,1024,1024),a.fillStyle="#ffffff",a.strokeStyle="#ffffff",a.lineWidth=8;for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f,1024),a.stroke();for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(0,f),a.lineTo(1024,f),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#303030",h.lineWidth=10;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024),h.stroke();for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return li(n,1024,1024,.03),ai(t,i,o,l,d)}function Js(){const[t,n]=Ne(1024,1024),[i,s]=Ne(1024,1024),[o,a]=Ne(1024,1024),[l,c]=Ne(1024,1024),[d,h]=Ne(1024,1024),u=ki(44444),f=n.createLinearGradient(0,0,0,1024);f&&(f.addColorStop(0,"#d4a843"),f.addColorStop(.3,"#c8963a"),f.addColorStop(.5,"#b8862a"),f.addColorStop(.7,"#c8963a"),f.addColorStop(1,"#d4a843"),n.fillStyle=f,n.fillRect(0,0,1024,1024));for(let g=0;g<200;g++){const _=u()*1024,m=u()*1024,p=20+u()*80,x=10+u()*40;n.fillStyle=`rgba(255,255,255,${.03+u()*.05})`,n.fillRect(_,m,p,x),n.fillStyle=`rgba(0,0,0,${.02+u()*.03})`,n.fillRect(_+p*.5,m+x*.5,p*.5,x*.5)}n.strokeStyle="rgba(180,140,40,0.3)",n.lineWidth=1;for(let g=0;g<1024;g+=40)n.beginPath(),n.moveTo(0,g),n.lineTo(1024,g),n.stroke();s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#a0a0a0",s.lineWidth=1;for(let g=0;g<300;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,x=10+u()*50;s.beginPath(),s.moveTo(_,m),s.lineTo(_+Math.cos(p)*x,m+Math.sin(p)*x),s.stroke()}s.strokeStyle="#909090",s.lineWidth=2;for(let g=0;g<1024;g+=40)s.beginPath(),s.moveTo(0,g),s.lineTo(1024,g),s.stroke();a.fillStyle="#707070",a.fillRect(0,0,1024,1024),a.fillStyle="#909090";for(let g=0;g<200;g++){const _=u()*1024,m=u()*1024,p=20+u()*80,x=10+u()*40;a.fillRect(_,m,p,x)}c.fillStyle="#f0f0f0",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#808080",h.lineWidth=3;for(let g=0;g<300;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,x=10+u()*50;h.beginPath(),h.moveTo(_,m),h.lineTo(_+Math.cos(p)*x,m+Math.sin(p)*x),h.stroke()}return li(n,1024,1024,.01),ai(t,i,o,l,d)}function eu(){const[t,n]=Ne(1024,1024),[i,s]=Ne(1024,1024),[o,a]=Ne(1024,1024),[l,c]=Ne(1024,1024),[d,h]=Ne(1024,1024);n.fillStyle="#f5f5f0",n.fillRect(0,0,1024,1024),n.strokeStyle="rgba(200,200,190,0.15)",n.lineWidth=1;for(let u=0;u<1024;u+=4)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();n.strokeStyle="rgba(200,200,190,0.1)";for(let u=0;u<1024;u+=4)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.strokeStyle="rgba(160,160,150,0.3)",n.lineWidth=2;for(let u=0;u<1024;u+=32)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();for(let u=0;u<1024;u+=32)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.strokeStyle="rgba(120,120,110,0.4)",n.lineWidth=1,n.setLineDash([8,16]);for(let u=16;u<1024;u+=64)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();for(let u=16;u<1024;u+=64)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.setLineDash([]),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let u=0;u<1024;u+=8)s.beginPath(),s.moveTo(u,0),s.lineTo(u,1024),s.stroke();for(let u=0;u<1024;u+=8)s.beginPath(),s.moveTo(0,u),s.lineTo(1024,u),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=4;for(let u=0;u<1024;u+=32)s.beginPath(),s.moveTo(u,0),s.lineTo(u,1024),s.stroke();for(let u=0;u<1024;u+=32)s.beginPath(),s.moveTo(0,u),s.lineTo(1024,u),s.stroke();a.fillStyle="#c0c0c0",a.fillRect(0,0,1024,1024),a.fillStyle="#e0e0e0",a.strokeStyle="#e0e0e0",a.lineWidth=6;for(let u=0;u<1024;u+=32)a.beginPath(),a.moveTo(u,0),a.lineTo(u,1024),a.stroke();for(let u=0;u<1024;u+=32)a.beginPath(),a.moveTo(0,u),a.lineTo(1024,u),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#a0a0a0",h.lineWidth=6;for(let u=0;u<1024;u+=32)h.beginPath(),h.moveTo(u,0),h.lineTo(u,1024),h.stroke();for(let u=0;u<1024;u+=32)h.beginPath(),h.moveTo(0,u),h.lineTo(1024,u),h.stroke();return li(n,1024,1024,.02),ai(t,i,o,l,d)}const xx={S:{radius:.5*Ke,height:.7*Ke},M:{radius:.7*Ke,height:1.1*Ke},L:{radius:1*Ke,height:1.6*Ke},XL:{radius:1.4*Ke,height:2.2*Ke}},Ft=Math.PI,xt=64,tu=new w_,oi=new Map;async function vx(r,e=1){const t=Sn(r);if(oi.has(t))return oi.get(t).clone();const i=(await tu.loadAsync(t)).scene;return console.log("=== GLTF Model Loaded:",r,"==="),i.traverse(s=>{if(s instanceof ge&&(console.log("Mesh:",s.name,"geometry:",s.geometry.type),s.material)){const o=Array.isArray(s.material)?s.material:[s.material];for(const a of o)console.log("  Material:",a.type,"color:",a.color?.getHexString(),"map:",!!a.map)}}),i.traverse(s=>{if(s instanceof ge)if(s.castShadow=!0,s.receiveShadow=!0,s.material){const o=Array.isArray(s.material)?s.material:[s.material];for(const a of o)if(a instanceof gt)a.roughness=Math.max(.1,a.roughness??.5),a.metalness=Math.max(0,a.metalness??0),a.needsUpdate=!0;else if(a instanceof It||a instanceof Vg){const l=new gt({color:a.color??16777215,map:a.map,normalMap:a.normalMap,roughnessMap:a.roughnessMap,metalnessMap:a.metalnessMap,aoMap:a.aoMap,roughness:.5,metalness:.1});s.material=l}}else s.material=new gt({color:13421772,roughness:.5,metalness:.1})}),oi.set(t,i),i.clone()}const Jo=new Map;function Qt(r,e){return Jo.has(r)||Jo.set(r,e()),Jo.get(r)}function bt(r,e={}){const t={map:r.color,normalMap:r.normal,roughnessMap:r.roughness,metalnessMap:r.metalness,roughness:1,metalness:1,...e};return r.ao&&(t.aoMap=r.ao,t.aoMapIntensity=1),r.emissive&&(t.emissiveMap=r.emissive),new gt(t)}function dt(r,e=1){const t=r.attributes.position;if(!t)return;let n=r.attributes.uv;n||(n=new St(new Float32Array(t.count*2),2));for(let i=0;i<t.count;i++){const s=t.getX(i),o=t.getY(i),a=t.getZ(i),c=(Math.atan2(s,a)+Math.PI)/(2*Math.PI),d=(o+1)*.5*e;n.setXY(i,c,d)}r.setAttribute("uv",n),n.needsUpdate=!0,r.attributes.uv2||r.setAttribute("uv2",n.clone())}function nu(r){const e=new on;e.name=r.id;const t=xx[r.size];switch(r.kind){case"capsule":yx(e,t,r.id);break;case"tank":Mx(e,t,r.size);break;case"engine":Sx(e,t,r.size);break;case"parachute":bx(e,t);break;case"legs":Tx(e,t);break;case"decoupler":Ex(e,t);break;case"heatshield":wx(e,t);break;case"gltf":{if(r.gltfUrl&&oi.has(r.gltfUrl)){const n=r.gltfScale??1,i=oi.get(r.gltfUrl).clone();i.scale.setScalar(n);const s=new ln().setFromObject(i),o=new C;s.getCenter(o),i.position.sub(o);const a=[],l=[];i.traverse(c=>{if(c instanceof ge){const d=c.name.toLowerCase(),u=d.includes("engine")||d.includes("nozzle")||d.includes("thruster")||d.includes("motor")||d.includes("combustion")||c.position.y<-.1;if(c.material=new gt({color:u?6710886:13421772,roughness:u?.3:.4,metalness:u?.8:.1,emissive:0,emissiveIntensity:0}),u){const f=new ln().setFromObject(c),g=new C;f.getCenter(g);const _=g.clone().sub(i.position);a.push(_),l.push(c)}c.castShadow=!0,c.receiveShadow=!0}}),i.userData.nozzlePoints=a,i.userData.engineMeshes=l,e.add(i)}break}}return e}function yx(r,e,t){const n=e.radius,i=e.height,s=t.includes("mk1"),o=Qt(`capsule_${s?"mk1":"mk2"}`,fx),a=bt(o),l=Qt("gold",Js),c=bt(l),d=new ct(n,n,i*.6,xt);dt(d);const h=new ge(d,a);h.position.y=i*.05,r.add(h);const u=new ht(n,xt,xt,0,Ft*2,0,Ft/2);dt(u,.5);const f=new ge(u,a);f.position.y=i*.35,r.add(f);const g=new ge(new ht(n*.08,12,8),c);g.position.y=i*.35+n*.5,r.add(g);const _=s?14500932:30673,m=new gt({color:_,roughness:.6,metalness:.1}),p=new ge(new ct(n*1.04,n*1.04,i*.05,xt),m);p.position.y=i*.05,r.add(p);const x=new ge(new ct(n*1.04,n*1.04,i*.03,xt),m);x.position.y=-i*.15,r.add(x);const v=new ge(new ct(n*1.3,n*.95,i*.15,xt),c);v.position.y=-i*.3-i*.075,r.add(v);const S=bt(o,{color:1726856,roughness:.1,metalness:.8,transparent:!0,opacity:.3}),E=new ge(new ao(n*.2,16),S);E.position.set(n+.001,i*.18,0),E.rotation.y=-Ft/2,r.add(E);const A=new It({color:3381759,transparent:!0,opacity:.6}),R=new ge(new Ni(n*.2,n*.24,16),A);R.position.set(n+.001,i*.18,0),R.rotation.y=-Ft/2,r.add(R)}function Mx(r,e,t){const n=e.radius,i=e.height,s=Qt(`tank_${t}`,()=>dx(t)),o=bt(s),a=Qt("gold",Js),l=bt(a),c=new ct(n,n,i,xt);dt(c);const d=new ge(c,o);r.add(d);const h=i*.03,u=new ct(n*1.03,n*1.03,h,xt);dt(u);const f=new ge(u,l);f.position.y=i/2-h/2,r.add(f);const g=new ge(u,l);g.position.y=-i/2+h/2,r.add(g);for(let p=0;p<3;p++){const x=new Qr(n*1.01,h*1.5,6,xt);dt(x);const v=new ge(x,l);v.position.y=-i/2+i*.2*(p+1),v.rotation.x=Ft/2,r.add(v)}const _=new Qr(n*1.02,h*1.2,6,xt);dt(_);const m=new ge(_,l);m.position.y=0,m.rotation.x=Ft/2,r.add(m)}function Sx(r,e,t){const n=e.radius,i=e.height,s=Qt(`engine_${t}`,px),o=bt(s),a=Qt("gold",Js),l=bt(a),c=new ct(n*1.4,n*.6,i*.25,xt);dt(c);const d=new ge(c,o);d.position.y=i*.35,r.add(d);const h=new ct(n*.6,n*.5,i*.06,xt);dt(h);const u=new ge(h,l);u.position.y=i*.12,r.add(u);const f=new ct(n*.5,n*.85,i*.4,xt);dt(f,1.5);const g=new ge(f,o);g.position.y=-i*.12,r.add(g);const _=bt(s,{color:1712682,roughness:.7,metalness:.5}),m=new ct(n*.35,n*.7,i*.38,xt);dt(m,1.5);const p=new ge(m,_);p.position.y=-i*.12,r.add(p);const x=new ct(n*.88,n*.88,i*.03,xt);dt(x);const v=new ge(x,l);v.position.y=-i*.12-i*.2-i*.015,r.add(v);const S=new It({color:16746496,transparent:!0,opacity:.4}),E=new ge(new Ni(0,n*.3,xt),S);E.position.y=-i*.12-i*.2-i*.02,E.rotation.x=-Ft/2,r.add(E)}function bx(r,e){const t=e.radius,n=e.height,i=Qt("fabric",eu),s=Qt("gold",Js),o=bt(s),a=bt(i,{color:8952234,roughness:.5,metalness:.1}),l=new ct(t*.35,t*.35,n*.18,12);dt(l);const c=new ge(l,a);c.position.y=n*.55,r.add(c);const d=bt(i,{color:6978186,roughness:.4,metalness:.2}),h=new ct(t*.37,t*.37,n*.03,12);dt(h);const u=new ge(h,d);u.position.y=n*.55+n*.09,r.add(u);const f=new ct(t*.37,t*.37,n*.02,12);dt(f);const g=new ge(f,o);g.position.y=n*.55-n*.09,r.add(g)}function Sa(r){const e=new on,t=r.radius,n=r.height,i=24,s=Qt("fabric",eu),o=bt(s,{side:Ht,transparent:!0,opacity:.95}),a=new ht(t*1.8,i,i,0,Ft*2,0,Ft*.5);dt(a,.5);const l=new ge(a,o);l.position.y=n*.3,l.rotation.x=Ft,e.add(l);const c=bt(s,{color:14500932,side:Ht,transparent:!0,opacity:.9});for(let h=0;h<6;h++){const u=h/6*Ft*2,f=new Oi(t*.03,n*.7,t*.015),g=new ge(f,c);g.position.set(Math.cos(u)*t*.9,n*.4,Math.sin(u)*t*.9),g.rotation.x=Ft,g.lookAt(0,n*.8,0),e.add(g)}const d=bt(s,{color:6978186,roughness:.5,metalness:.4});for(let h=0;h<4;h++){const u=h/4*Ft*2+Ft/4;for(let f=0;f<3;f++){const g=new ct(.006,.006,n*.15,4);dt(g);const _=new ge(g,d),m=u+(f-1)*.3;_.position.set(Math.cos(m)*t*1.5,n*.15-n*.06*f,Math.sin(m)*t*1.5),e.add(_)}}return e}function Tx(r,e){const t=e.radius,n=e.height,i=Qt("legs",mx),s=bt(i),o=bt(i,{color:2764066,roughness:.8,metalness:.2});for(let a=0;a<4;a++){const l=a/4*Ft*2+Ft/4,c=new ct(.01,.007,n*.35,6);dt(c);const d=new ge(c,s),h=Math.cos(l)*t*.65,u=Math.sin(l)*t*.65;d.position.set(h,-n/2-n*.175,u),d.rotation.z=Math.cos(l)*.3,d.rotation.x=Math.sin(l)*.3,r.add(d);const f=new ct(.02,.025,.008,6);dt(f);const g=new ge(f,o);g.position.set(Math.cos(l)*t*.95,-n/2-n*.35,Math.sin(l)*t*.95),r.add(g)}}function Ex(r,e){const t=e.radius,n=e.height,i=Qt("decoupler",gx),s=bt(i),o=Qt("gold",Js),a=bt(o),l=new ct(t*1.05,t*.92,n*.12,xt);dt(l);const c=new ge(l,s);r.add(c);const d=new ct(t*1.08,t*1.08,n*.04,xt);dt(d);const h=new ge(d,a);h.position.y=n*.06,r.add(h);const u=new ct(t*.92,t*.92,n*.04,xt);dt(u);const f=new ge(u,s);f.position.y=-n*.06,r.add(f)}function wx(r,e){const t=e.radius,n=e.height,i=Qt("heatshield",_x),s=bt(i),o=new ct(t*1.2,t*.8,n*.2,xt,1,!0);dt(o,.5);const a=new ge(o,s);a.position.y=-n*.1,r.add(a);const l=new ct(t*.8,t*.8,n*.08,xt);dt(l);const c=new ge(l,s);c.position.y=-n*.2,r.add(c)}const iu=Object.freeze(Object.defineProperty({__proto__:null,buildDeployedParachute:Sa,buildPartMesh:nu,gltfCache:oi,gltfLoader:tu,loadGLTF:vx},Symbol.toStringTag,{value:"Module"}));class eo{roots=[];addRoot(e){this.roots.push(e)}totalFuelCapacity(){let e=0;const t=n=>{n.part.fuelCapacity&&(e+=n.part.fuelCapacity),n.children.forEach(t)};return this.roots.forEach(t),e}totalMass(){let e=0;const t=n=>{e+=n.part.mass,n.children.forEach(t)};return this.roots.forEach(t),e}totalMassWithFuel(){let e=0;const t=n=>{e+=n.part.mass,n.part.fuelCapacity&&(e+=n.part.fuelCapacity),n.children.forEach(t)};return this.roots.forEach(t),e}centerOfMass(){let e=0,t=0,n=0,i=0;const s=o=>{const a=o.part.mass;e+=a,t+=o.position[0]*a,n+=o.position[1]*a,i+=o.position[2]*a,o.children.forEach(s)};return this.roots.forEach(s),e===0?[0,0,0]:[t/e,n/e,i/e]}toMesh(){const e=new on,t=(i,s)=>{const o=nu(i.part);o.position.set(i.position[0],i.position[1],i.position[2]),o.rotation.y=i.rotation,s.add(o),i.children.forEach(a=>t(a,o))};this.roots.forEach(i=>t(i,e));const n=this.centerOfMass();for(const i of e.children)i.position.x-=n[0],i.position.y-=n[1],i.position.z-=n[2];return e}}const Ax={S:.6*Ke,M:1*Ke,L:1.4*Ke,XL:2*Ke};function Xr(r,e,t){const n=Vr(e);if(!n)return t;const i=Ax[n.size]||.6*Ke;return r.addRoot({part:n,position:[0,t+i/2,0],rotation:0,children:[]}),t+i}const Rx={tiny:{tank:"tank_s_lfo",engine:"engine_ant"},small:{tank:"tank_m_lfo",engine:"engine_vector"},medium:{tank:"tank_l_lfo",engine:"engine_mastodon"},large:{tank:"tank_xl_lfo",engine:"engine_mammoth"}};function Xc(r,e,t,n=[]){const i=Rx[t];if(!i)return e;for(const s of[i.tank,i.engine,...n])e=Xr(r,s,e);return e}function Cx(r){const e=r.toLowerCase(),t=/sun|солн|heliocentric/.test(e),n=/mars|марс/.test(e),i=/venus|венер/.test(e),s=/mercury|меркур/.test(e),o=/moon|лун/.test(e),a=/orbit|орбит|station|станц|satellite|спутник/.test(e),l=/suborbit|суборбит|test|тест|hop|прыж/.test(e),c=/land|сади|посад|touchdown/.test(e)&&!/flyby|пролет/.test(e),d=/return|back|верн|обратн|round.?trip|there\s+and\s+back/.test(e)||o&&c||n&&c,h=d||/parachute|парашют|chute/.test(e)||!c,u=c||/legs|ноги|landing\s+gear/.test(e);let f=1,g="small";return l?(f=1,g="tiny"):a?(f=1,g="small"):o?(f=d?2:1,g="medium"):n||i?(f=d?3:2,g="large"):s?(f=2,g="medium"):t?(f=3,g="large"):/big|large|тяже|больш|huge|super|giant/.test(e)?(f=2,g="large"):/small|tiny|легк|малень/.test(e)?(f=1,g="tiny"):/safe|50%|half/.test(e)?(f=2,g="medium",f=2):(f=1,g="small"),/heavy|super|giant|тяжел/.test(e)&&g!=="large"&&(g=g==="tiny"?"small":"large"),/safe|50%|half\s+fuel/.test(e)&&(f=2,g="large"),{stages:f,stageSize:g,needsParachute:h,needsLegs:u,needsReturn:d}}function Lx(r){const e=new eo;let t=0;const n=r.stageSize,i=r.needsReturn?Math.max(1,r.stages-1):r.stages;for(let s=0;s<i;s++){const o=s===0?n:n==="large"&&s>0?"medium":n,a=[];s===0&&r.needsLegs&&a.push("legs_landini"),t=Xc(e,t,o,a)}return r.needsReturn&&r.stages>1&&(t=Xr(e,"decoupler_1",t),t=Xc(e,t,n==="large"?"small":"tiny")),t=Xr(e,"capsule_mk1",t),r.needsParachute&&(t=Xr(e,"parachute_mk16",t)),e}function Px(r){const e=Cx(r);return Lx(e)}const Qo={S:.8*Ke,M:1.2*Ke,L:1.8*Ke,XL:2.5*Ke};class Ix{scene;camera;assembly;rocketGroup;rootEl;partListEl;currentRocketEl;onLaunch;stackHeight=0;addedPartNames=[];constructor(e){this.onLaunch=e,this.scene=new Hh,this.scene.background=new Te(658714),this.scene.add(new Kh(4473958,.5));const t=new js(16777215,3);t.position.set(2,4,3),this.scene.add(t);const n=new js(8947916,1);n.position.set(-2,1,-1),this.scene.add(n);const i=new $h(8947916,4473958,.8);this.scene.add(i),this.camera=new kt(50,window.innerWidth/window.innerHeight,.01,1e3);const s=Ke*15;this.camera.position.set(0,s*.3,s*3),this.camera.lookAt(0,Ke,0);const o=Ke*4,a=new ge(new Oi(o,.02*Ke,o),new gt({color:1843264,roughness:.9}));a.position.y=-Ke*.3,this.scene.add(a),this.assembly=new eo,this.rocketGroup=new on,this.scene.add(this.rocketGroup),this.rootEl=document.createElement("div"),this.rootEl.style.cssText="position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;",this.rootEl.innerHTML=`
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
    `,this.partListEl=this.rootEl.querySelector("#vab-parts"),this.currentRocketEl=this.rootEl.querySelector("#vab-current"),this.buildPartList(),this.buildPresets(),this.updateCurrentList(),this.rootEl.querySelector("#vab-launch").addEventListener("click",()=>{this.assembly.roots.length>0&&this.onLaunch(this.assembly)}),this.rootEl.querySelector("#vab-remove").addEventListener("click",()=>this.removeLast()),this.rootEl.querySelector("#vab-clear").addEventListener("click",()=>this.clearAll())}buildPresets(){const e=[{label:"🚀 Suborbital",desc:"suborbital test",color:"#6688aa"},{label:"🛸 Earth Orbit",desc:"earth orbit",color:"#4488FF"},{label:"🌙 Moon Landing",desc:"land on moon",color:"#88AACC"},{label:"🌙 Moon Return",desc:"land on moon and return",color:"#EACD9E"},{label:"🌙+🛡️ Moon Safe",desc:"safe moon landing and return with 50% fuel",color:"#66DD88"},{label:"🔴 Mars",desc:"mars mission",color:"#d4733a"},{label:"☀️ Solar Orbit",desc:"orbit around the sun",color:"#ffdd44"},{label:"🪐 Heavy Lifter",desc:"heavy interplanetary",color:"#CC88AA"}],t=this.rootEl.querySelector("#vab-presets");for(const n of e){const i=document.createElement("button");i.textContent=n.label,i.title=n.desc,i.style.cssText=`flex:1;min-width:80px;padding:5px 6px;background:rgba(244,245,242,0.06);color:${n.color};border:1px solid rgba(244,245,242,0.1);border-radius:3px;font-size:9px;cursor:pointer;pointer-events:auto;text-align:center;white-space:nowrap;`,i.addEventListener("mouseenter",()=>{i.style.background="rgba(244,245,242,0.12)"}),i.addEventListener("mouseleave",()=>{i.style.background="rgba(244,245,242,0.06)"}),i.addEventListener("click",()=>{this.clearAll(),this.assembly=Px(n.desc),this.refreshMesh(),this.syncPartsFromAssembly()}),t.appendChild(i)}}buildPartList(){for(const e of Zh){const t=document.createElement("button"),n=e.size?` [${e.size}]`:"";let i="";e.kind==="tank"&&e.fuelCapacity&&(i=` — ${(e.fuelCapacity/1e3).toFixed(0)}t`),e.kind==="engine"&&e.thrust&&(i=` — ${e.thrust}kN`),t.textContent=e.name+n+i,t.title=`${e.kind} — mass: ${e.mass}kg${e.fuelCapacity?", fuel: "+e.fuelCapacity+"kg":""}${e.thrust?", thrust: "+e.thrust+"kN":""}`,t.style.cssText="display:block;width:100%;padding:6px 8px;background:transparent;color:#F4F5F2;border:none;border-radius:3px;font-size:11px;text-align:left;cursor:pointer;margin-bottom:2px;",t.addEventListener("mouseenter",()=>{t.style.background="rgba(234,205,158,0.1)"}),t.addEventListener("mouseleave",()=>{t.style.background="transparent"}),t.addEventListener("click",()=>this.addPart(e)),this.partListEl.appendChild(t)}}addPart(e){const t=Qo[e.size]||.6*Ke,n=this.stackHeight+t/2;this.assembly.addRoot({part:e,position:[0,n,0],rotation:0,children:[]}),this.stackHeight+=t,this.addedPartNames.push(e.name),this.refreshMesh(),this.updateCurrentList()}removeLast(){if(this.assembly.roots.length===0)return;const e=this.assembly.roots.pop(),t=Qo[e.part.size]||.6*Ke;this.stackHeight-=t,this.addedPartNames.pop(),this.refreshMesh(),this.updateCurrentList()}clearAll(){this.assembly=new eo,this.stackHeight=0,this.addedPartNames=[],this.refreshMesh(),this.updateCurrentList()}updateCurrentList(){if(this.addedPartNames.length===0){this.currentRocketEl.innerHTML='<div style="color:rgba(244,245,242,0.3);font-size:10px;font-style:italic;">No parts — click from list below</div>';return}this.currentRocketEl.innerHTML='<div style="color:rgba(244,245,242,0.4);font-size:9px;letter-spacing:0.05em;margin-bottom:4px;">CURRENT ROCKET (top to bottom):</div>'+[...this.addedPartNames].reverse().map((e,t)=>`<div style="color:#F4F5F2;font-size:10px;padding:1px 0;${t===0?"color:#EACD9E;":""}">${t===0?"▲ ":""}${e}</div>`).join("")}async refreshMesh(){for(;this.rocketGroup.children.length>0;){const e=this.rocketGroup.children[0];e&&this.rocketGroup.remove(e)}if(this.assembly.roots.length>0){if(this.assembly.roots.some(n=>n.part.kind==="gltf"&&n.part.gltfUrl&&!oi.has(n.part.gltfUrl))){const{loadGLTF:n}=await rh(async()=>{const{loadGLTF:i}=await Promise.resolve().then(()=>iu);return{loadGLTF:i}},void 0);for(const i of this.assembly.roots)i.part.kind==="gltf"&&i.part.gltfUrl&&!oi.has(i.part.gltfUrl)&&await n(i.part.gltfUrl,i.part.gltfScale??1)}const t=this.assembly.toMesh();t.traverse(n=>{n instanceof ge&&(n.visible=!0,n.material.transparent=!1,n.material.opacity=1,n.material.depthWrite=!0,n.material.depthTest=!0)}),this.rocketGroup.add(t)}}syncPartsFromAssembly(){this.addedPartNames=[],this.stackHeight=0;const e=(t,n)=>{for(const i of t){this.addedPartNames.push(i.part.name);const s=Qo[i.part.size]||.6*Ke;this.stackHeight+=s,e(i.children)}};e(this.assembly.roots),this.updateCurrentList()}mount(){document.body.appendChild(this.rootEl)}unmount(){this.rootEl.remove()}}class za{name;mass;position;velocity;constructor(e,t,n,i){this.name=e,this.mass=t,this.position=[...n],this.velocity=[...i]}applyForce(e,t){const n=e[0]/this.mass,i=e[1]/this.mass,s=e[2]/this.mass;this.velocity[0]+=n*t,this.velocity[1]+=i*t,this.velocity[2]+=s*t,this.position[0]+=this.velocity[0]*t,this.position[1]+=this.velocity[1]*t,this.position[2]+=this.velocity[2]*t}kineticEnergy(){const e=this.velocity[0]**2+this.velocity[1]**2+this.velocity[2]**2;return .5*this.mass*e}}class Dx{rocket;system;position;velocity;throttle=0;constructor(e,t,n,i){this.rocket=e,this.system=t,this.position=[...n],this.velocity=[...i]}consumeFuel(e,t){this.rocket.consumeFuel(e,t)}}const as=On*kn,qc=1,Yc=100,jc=4;class Ux{camera;dist=2.5;targetDist=2.5;azimuth=0;polar=Math.PI/2;isDragging=!1;prevMouse={x:0,y:0};canvas=null;smoothPos=new C;smoothUp=new C(0,1,0);initialized=!1;constructor(e){this.camera=e}initialiseAt(e,t,n){const i=e.position[0]*as,s=e.position[1]*as,o=e.position[2]*as,a=new C(i,s,o),l=this.targetDist*Math.sin(this.polar)*Math.cos(this.azimuth),c=this.targetDist*Math.cos(this.polar),d=this.targetDist*Math.sin(this.polar)*Math.sin(this.azimuth),h=new C(i+l,s+c,o+d);this.camera.position.copy(h),this.camera.up.copy(n||new C(0,1,0)),this.camera.lookAt(a)}setAzimuth(e){this.azimuth=e}zoom(e){this.targetDist*=e,this.targetDist=Math.max(qc,Math.min(Yc,this.targetDist))}enableOrbit(e){this.canvas=e,e.addEventListener("mousedown",t=>{t.button===0&&(this.isDragging=!0,this.prevMouse={x:t.clientX,y:t.clientY})}),window.addEventListener("mousemove",t=>{if(!this.isDragging)return;const n=t.clientX-this.prevMouse.x,i=t.clientY-this.prevMouse.y;this.azimuth-=n*.005,this.polar=Math.max(.05,Math.min(Math.PI-.05,this.polar+i*.005)),this.prevMouse={x:t.clientX,y:t.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),e.addEventListener("wheel",t=>{t.preventDefault(),this.targetDist*=t.deltaY>0?1.1:.9,this.targetDist=Math.max(qc,Math.min(Yc,this.targetDist))},{passive:!1})}follow(e,t,n,i=!1){const s=e.position[0]*as,o=e.position[1]*as,a=e.position[2]*as,l=new C(s,o,a);this.dist+=(this.targetDist-this.dist)*Math.min(1,jc*t);const c=this.dist*Math.sin(this.polar)*Math.cos(this.azimuth),d=this.dist*Math.cos(this.polar),h=this.dist*Math.sin(this.polar)*Math.sin(this.azimuth),u=new C(s+c,o+d,a+h),f=n?n.clone():new C(0,1,0);if(this.initialized||(this.smoothPos.copy(u),this.smoothUp.copy(f),this.initialized=!0),i)this.smoothPos.copy(u),this.smoothUp.copy(f);else{const g=Math.min(1,jc*t);this.smoothPos.lerp(u,g),this.smoothUp.lerp(f,g).normalize()}this.camera.position.copy(this.smoothPos),this.camera.up.copy(this.smoothUp),this.camera.lookAt(l)}}class Nx{container;active=!1;keys=new Set;stagePressed=!1;pauseToggle=!1;visible=!1;constructor(){this.container=document.createElement("div"),this.container.style.cssText=`
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 100;
      display: none; pointer-events: none;
      height: 200px; padding: 8px;
    `,document.body.appendChild(this.container),this.buildUI()}buildUI(){const e=this.container,t=document.createElement("div");t.style.cssText=`
      position: absolute; bottom: 20px; left: 20px; width: 140px; height: 140px;
      background: rgba(255,255,255,0.08); border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.15); pointer-events: auto;
      touch-action: none;
    `;const n=document.createElement("div");n.style.cssText=`
      position: absolute; top: 50%; left: 50%; width: 50px; height: 50px;
      background: rgba(255,255,255,0.2); border-radius: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid rgba(255,255,255,0.3);
    `,t.appendChild(n);let i=null;const s={x:0,y:0},o={x:0,y:0},a=(I,D)=>{const $=t.getBoundingClientRect();s.x=$.left+$.width/2,s.y=$.top+$.height/2,o.x=I,o.y=D,this.updateStick(n,s,o)},l=(I,D)=>{o.x=I,o.y=D,this.updateStick(n,s,o);const $=(I-s.x)/60,P=(D-s.y)/60,F=Math.max(-1,Math.min(1,$)),W=Math.max(-1,Math.min(1,P));W>.3?(this.keys.add("touch-up"),this.keys.delete("touch-down")):W<-.3?(this.keys.add("touch-down"),this.keys.delete("touch-up")):(this.keys.delete("touch-up"),this.keys.delete("touch-down")),F>.3?(this.keys.add("touch-right"),this.keys.delete("touch-left")):F<-.3?(this.keys.add("touch-left"),this.keys.delete("touch-right")):(this.keys.delete("touch-left"),this.keys.delete("touch-right"))},c=()=>{i=null,n.style.transform="translate(-50%, -50%)",this.keys.delete("touch-up"),this.keys.delete("touch-down"),this.keys.delete("touch-left"),this.keys.delete("touch-right")};t.addEventListener("touchstart",I=>{if(I.preventDefault(),i!==null)return;const D=I.changedTouches[0];i=D.identifier,a(D.clientX,D.clientY)},{passive:!1}),t.addEventListener("touchmove",I=>{I.preventDefault();for(let D=0;D<I.changedTouches.length;D++)I.changedTouches[D].identifier===i&&l(I.changedTouches[D].clientX,I.changedTouches[D].clientY)},{passive:!1}),t.addEventListener("touchend",I=>{for(let D=0;D<I.changedTouches.length;D++)I.changedTouches[D].identifier===i&&c()}),t.addEventListener("touchcancel",c),e.appendChild(t);const d=document.createElement("div");d.style.cssText=`
      position: absolute; bottom: 20px; right: 20px; display: flex;
      flex-direction: column; gap: 8px; align-items: flex-end;
    `;const h=(I,D=70,$=50)=>{const P=document.createElement("div");P.style.cssText="pointer-events: auto; position: relative;";const F=document.createElement("button");return F.textContent=I,F.style.cssText=`
        width: ${D}px; height: ${$}px; border-radius: 12px;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        color: white; font: 600 14px/1 monospace; cursor: pointer;
        touch-action: none; user-select: none;
      `,P.appendChild(F),[F,P]},[u,f]=h("THR+",70,44),[g,_]=h("THR-",70,44),[m,p]=h("STAGE",70,44),[x,v]=h("R-",60,44),[S,E]=h("R+",60,44),A=(I,D)=>{this.keys.add(I),D.style.background="rgba(255,255,255,0.3)"},R=(I,D)=>{this.keys.delete(I),D.style.background="rgba(255,255,255,0.1)"},k=(I,D)=>{I.addEventListener("touchstart",$=>{$.preventDefault(),A(D,I)},{passive:!1}),I.addEventListener("touchend",$=>{$.preventDefault(),R(D,I)},{passive:!1}),I.addEventListener("touchcancel",()=>R(D,I)),I.addEventListener("mousedown",()=>A(D,I)),I.addEventListener("mouseup",()=>R(D,I)),I.addEventListener("mouseleave",()=>R(D,I))};k(u,"w"),k(g,"s"),k(x,"a"),k(S,"d"),m.addEventListener("touchstart",I=>{I.preventDefault(),this.stagePressed=!0},{passive:!1}),m.addEventListener("mousedown",()=>{this.stagePressed=!0});const y=document.createElement("div");y.style.cssText="display:flex; gap:8px;",y.appendChild(f),y.appendChild(p),d.appendChild(y);const w=document.createElement("div");w.style.cssText="display:flex; gap:8px;",w.appendChild(_),w.appendChild(v),w.appendChild(E),d.appendChild(w),e.appendChild(d)}updateStick(e,t,n){const i=n.x-t.x,s=n.y-t.y,o=60,a=Math.sqrt(i*i+s*s),l=Math.min(a,o),c=Math.atan2(s,i),d=Math.cos(c)*l,h=Math.sin(c)*l;e.style.transform=`translate(calc(-50% + ${d}px), calc(-50% + ${h}px))`}show(){this.visible||(this.visible=!0,this.container.style.display="block")}hide(){this.visible=!1,this.container.style.display="none"}isVisible(){return this.visible}getPitch(){let e=0;return this.keys.has("touch-up")&&(e=1),this.keys.has("touch-down")&&(e=-1),e}getYaw(){let e=0;return this.keys.has("touch-right")&&(e=1),this.keys.has("touch-left")&&(e=-1),e}getRoll(){let e=0;return this.keys.has("a")&&(e=1),this.keys.has("d")&&(e=-1),e}getThrottleUp(){return this.keys.has("w")}getThrottleDown(){return this.keys.has("s")}getStageRequested(){const e=this.stagePressed;return this.stagePressed=!1,e}dispose(){document.body.removeChild(this.container)}}class Fx{keys=new Set;stagePressed=!1;pauseToggle=!1;state;touch=null;constructor(e){this.state=e,window.addEventListener("keydown",t=>{t.repeat||(this.keys.add(t.key.toLowerCase()),t.key===" "&&(this.stagePressed=!0),t.key==="Escape"&&(this.pauseToggle=!0),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(t.key.toLowerCase())&&t.preventDefault())}),window.addEventListener("keyup",t=>{this.keys.delete(t.key.toLowerCase())})}enableTouch(){this.touch||(this.touch=new Nx),this.touch.show()}disableTouch(){this.touch&&this.touch.hide()}update(e){const t=this.touch?.getThrottleUp()||this.keys.has("w"),n=this.touch?.getThrottleDown()||this.keys.has("s");t&&(this.state.throttle=Math.min(1,this.state.throttle+e*.5)),n&&(this.state.throttle=Math.max(0,this.state.throttle-e*.5))}getPitch(){let e=0;return(this.keys.has("arrowup")||this.touch?.getPitch()===1)&&(e=1),(this.keys.has("arrowdown")||this.touch?.getPitch()===-1)&&(e=-1),e}getYaw(){let e=0;return(this.keys.has("arrowleft")||this.touch?.getYaw()===1)&&(e=1),(this.keys.has("arrowright")||this.touch?.getYaw()===-1)&&(e=-1),e}getRoll(){let e=0;return(this.keys.has("a")||this.touch?.getRoll()===1)&&(e=1),(this.keys.has("d")||this.touch?.getRoll()===-1)&&(e=-1),e}getZoomIn(){return this.keys.has("z")}getZoomOut(){return this.keys.has("x")}getStageRequested(){const e=this.stagePressed||!!this.touch?.getStageRequested();return this.stagePressed=!1,e}consumePauseToggle(){const e=this.pauseToggle;return this.pauseToggle=!1,e}dispose(){this.touch?.dispose(),this.touch=null}}class Ox{root;speedVal;speedUnit;altVal;altUnit;angleVal;fuelFill;fuelPct;throtFill;throtPct;heatFill;heatPct;pauseOverlay;navballCanvas;navballCtx;onAction=null;constructor(){this.root=document.createElement("div"),this.root.className="hud-panel",this.root.style.cssText="position:fixed;top:16px;left:16px;z-index:100;min-width:180px;",this.pauseOverlay=document.createElement("div"),this.pauseOverlay.style.cssText="position:fixed;inset:0;z-index:500;background:rgba(6,8,20,0.85);display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:12px;",this.pauseOverlay.innerHTML=`
      <div style="width:280px;display:flex;flex-direction:column;gap:8px;align-items:center;">
        <button class="btn btn--primary pause-btn" data-action="resume" style="width:100%;padding:14px;font-size:16px;text-align:center;">▶ RESUME</button>
        <button class="btn btn--secondary pause-btn" data-action="menu" style="width:100%;padding:14px;font-size:16px;text-align:center;">MENU</button>
        <button class="btn btn--danger pause-btn" data-action="restart" style="width:100%;padding:14px;font-size:16px;text-align:center;">🔄 RESTART</button>
      </div>
    `,document.body.appendChild(this.pauseOverlay),this.pauseOverlay.querySelectorAll(".pause-btn").forEach(e=>{e.addEventListener("click",t=>{this.onAction&&this.onAction(t.target.dataset.action)})})}mount(e=document.body){this.root.innerHTML=`
      <div class="hud-row"><span class="hud-label">Velocity</span><span class="hud-value"><span class="speed-val">0</span> <span class="speed-unit" style="font-size:11px;color:var(--text-muted);">m/s</span></span></div>
      <div class="hud-row"><span class="hud-label">Altitude</span><span class="hud-value"><span class="alt-val">0</span> <span class="alt-unit" style="font-size:11px;color:var(--text-muted);">m</span></span></div>
      <div class="hud-row"><span class="hud-label">Angle</span><span class="hud-value"><span class="angle-val">0</span><span style="font-size:11px;color:var(--text-muted);">°</span></span></div>
      <div class="hud-row"><span class="hud-label">Warp</span><span class="hud-value"><span class="warp-val" style="color:var(--accent-gold);">x1</span></span></div>
      <div class="separator"></div>
      <div style="display:flex;flex-direction:column;gap:var(--space-1);">
        <div class="hud-row"><span class="hud-label">Fuel</span><span class="text-data-sm fuel-pct">0%</span></div>
        <div class="data-bar"><span class="data-bar__track"><span class="data-bar__fill data-bar__fill--fuel fuel-fill" style="width:0%;"></span></span></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-1);">
        <div class="hud-row"><span class="hud-label">Heat</span><span class="text-data-sm heat-pct">0%</span></div>
        <div class="data-bar"><span class="data-bar__track"><span class="data-bar__fill data-bar__fill--heat heat-fill" style="width:0%;background:#44FF44;"></span></span></div>
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
      <div class="btn-bar">
        <button class="btn btn--action" data-action="stage">STAGE</button>
        <button class="btn btn--action" data-action="parachute">CHUTE</button>
        <button class="btn btn--action" data-action="map">MAP</button>
      </div>
      <div style="color:rgba(244,245,242,0.35);font-size:9px;letter-spacing:0.05em;">W/S Throttle | ↑↓ Pitch | ←→ Yaw | Space Stage | Esc Pause</div>
    `,e.appendChild(this.root),this.speedVal=this.root.querySelector(".speed-val"),this.speedUnit=this.root.querySelector(".speed-unit"),this.altVal=this.root.querySelector(".alt-val"),this.altUnit=this.root.querySelector(".alt-unit"),this.angleVal=this.root.querySelector(".angle-val"),this.fuelFill=this.root.querySelector(".fuel-fill"),this.fuelPct=this.root.querySelector(".fuel-pct"),this.throtFill=this.root.querySelector(".throt-fill"),this.throtPct=this.root.querySelector(".throt-pct"),this.heatFill=this.root.querySelector(".heat-fill"),this.heatPct=this.root.querySelector(".heat-pct"),this.heatFill=this.root.querySelector(".heat-fill"),this.heatPct=this.root.querySelector(".heat-pct"),this.root.addEventListener("click",i=>{const s=i.target.closest("[data-action]");s&&this.onAction&&this.onAction(s.dataset.action)});const t=document.createElement("div");t.className="navball-container",t.style.cssText="position:fixed;bottom:20px;right:20px;z-index:100;";const n=document.createElement("canvas");n.width=160,n.height=160,n.style.cssText="width:160px;height:160px;border-radius:80px;opacity:0.85;",t.appendChild(n),e.appendChild(t),this.navballCanvas=n,this.navballCtx=n.getContext("2d")}setWarpLabel(e){const t=this.root.querySelector(".warp-val");t&&(t.textContent=e)}setPaused(e){this.pauseOverlay.style.display=e?"flex":"none";const t=this.root.querySelector(".warp-val");t&&(t.style.opacity=e?"0.5":"1")}setNavballData(e,t,n){const i=this.navballCtx,s=160,o=160,a=80,l=80,c=75;i.clearRect(0,0,s,o),i.beginPath(),i.arc(a,l,c+2,0,Math.PI*2),i.fillStyle="#0a0a1a",i.fill();const h=(n[0]*e[0]+n[1]*e[1]+n[2]*e[2])*c;i.save(),i.beginPath(),i.arc(a,l,c,0,Math.PI*2),i.clip(),i.fillStyle="#2244aa",i.fillRect(a-c,l-c-h,c*2,c+h),i.fillStyle="#885522",i.fillRect(a-c,l-h,c*2,c+h);for(let v=-80;v<=80;v+=10){const S=l-Math.sin(v*Math.PI/180)*c;i.beginPath();const E=v===0?30:v%20===0?22:14;i.moveTo(a-E,S),i.lineTo(a+E,S),i.strokeStyle=v===0?"#FFCC44":"rgba(255,255,255,0.3)",i.lineWidth=v===0?1.5:.7,i.stroke(),v%20===0&&(i.fillStyle="rgba(255,255,255,0.5)",i.font="8px sans-serif",i.fillText(`${Math.abs(v)}`,a+E+3,S+3))}i.beginPath(),i.moveTo(a-c,l-h),i.lineTo(a+c,l-h),i.strokeStyle="#ffffff",i.lineWidth=1.5,i.stroke();const u=v=>{const S=Math.sqrt(v[0]**2+v[1]**2+v[2]**2)||1,E=v[0]/S,A=v[1]/S,R=v[2]/S,k=E*e[0]+A*e[1]+R*e[2],y=E-e[0]*k,w=A-e[1]*k,I=Math.sqrt(y*y+w*w)||1;return{x:a+y/I*c*.78,y:l-w/I*c*.78,inFront:k>0}},f=u(t);f.inFront&&(i.beginPath(),i.arc(f.x,f.y,6,0,Math.PI*2),i.fillStyle="#44FF44",i.fill(),i.beginPath(),i.arc(f.x,f.y,9,0,Math.PI*2),i.strokeStyle="#44FF44",i.lineWidth=2,i.stroke(),i.fillStyle="#44FF44",i.font="bold 8px sans-serif",i.fillText("P",f.x+8,f.y+3));const g=[-t[0],-t[1],-t[2]],_=u(g);_.inFront&&(i.beginPath(),i.arc(_.x,_.y,6,0,Math.PI*2),i.fillStyle="rgba(68,255,68,0.6)",i.fill(),i.beginPath(),i.arc(_.x,_.y,9,0,Math.PI*2),i.strokeStyle="#44FF44",i.lineWidth=1.5,i.stroke(),i.beginPath(),i.moveTo(_.x-5,_.y-5),i.lineTo(_.x+5,_.y+5),i.moveTo(_.x+5,_.y-5),i.lineTo(_.x-5,_.y+5),i.strokeStyle="#44FF44",i.lineWidth=1.5,i.stroke());const m=u(n);m.inFront&&(i.beginPath(),i.moveTo(m.x,m.y-8),i.lineTo(m.x-6,m.y+4),i.lineTo(m.x+6,m.y+4),i.closePath(),i.fillStyle="#4488FF",i.fill());const p=[-n[0],-n[1],-n[2]],x=u(p);x.inFront&&(i.beginPath(),i.moveTo(x.x,x.y+8),i.lineTo(x.x-6,x.y-4),i.lineTo(x.x+6,x.y-4),i.closePath(),i.fillStyle="#4488FF",i.fill()),i.beginPath(),i.arc(a,l,5,0,Math.PI*2),i.fillStyle="#FFAA44",i.fill(),i.restore(),i.beginPath(),i.arc(a,l,c+1,0,Math.PI*2),i.strokeStyle="#334466",i.lineWidth=2,i.stroke()}update(e,t,n=0){const i=Math.sqrt(e.velocity[0]**2+e.velocity[1]**2+e.velocity[2]**2);let s=1/0;for(const h of t.bodies){if(h.mass<=0)continue;const u=e.position[0]-h.position[0],f=e.position[1]-h.position[1],g=e.position[2]-h.position[2],_=Math.sqrt(u*u+f*f+g*g),m=h.radius??0,p=_-m;p<s&&(s=p)}const o=Math.sqrt(e.velocity[0]**2+e.velocity[2]**2),a=Math.atan2(o,Math.abs(e.velocity[1]))*180/Math.PI,l=e.rocket.assembly.totalFuelCapacity(),c=l>0?e.rocket.totalFuelMass()/l*100:0,d=Math.min(100,n/1e5*100);this.speedVal.textContent=i.toFixed(1),s>1e3?(this.altVal.textContent=(s/1e3).toFixed(2),this.altUnit.textContent="km"):(this.altVal.textContent=s.toFixed(0),this.altUnit.textContent="m"),this.angleVal.textContent=a.toFixed(0),this.fuelPct.textContent=`${c.toFixed(0)}%`,this.fuelFill.style.width=`${Math.min(100,c)}%`,this.throtPct.textContent=`${(e.throttle*100).toFixed(0)}%`,this.throtFill.style.width=`${e.throttle*100}%`,this.heatPct.textContent=`${d.toFixed(0)}%`,this.heatFill.style.width=`${d}%`,this.heatFill.style.background=d>70?"#FF3333":d>40?"#FFCC00":"#44FF44"}unmount(){this.root.remove(),this.pauseOverlay.remove()}}function kx(r,e,t){if(r.throttle<=0)return;const n=Ga(r.rocket.assembly.roots);if(!n||!n.thrust||!n.isp)return;const i=n.thrust*1e3*r.throttle,s=i/(n.isp*ox),o=t??[0,1,0],a=i*o[0]/r.rocket.totalMass(),l=i*o[1]/r.rocket.totalMass(),c=i*o[2]/r.rocket.totalMass();r.velocity[0]+=a*e,r.velocity[1]+=l*e,r.velocity[2]+=c*e,r.consumeFuel(s,e)}function Ga(r){for(const e of r){if(e.part.kind==="engine"&&e.part.thrust&&e.part.isp)return{thrust:e.part.thrust,isp:e.part.isp};if(e.children?.length){const t=Ga(e.children);if(t)return t}}return null}class Hx{startEngine(){}setThrottle(e){}stopEngine(){}playStaging(){}playCrash(){}playLand(){}dispose(){}}class Bx{show(e,t=2500){const n=document.createElement("div");n.className="toast",n.textContent=e,n.style.cssText=`
      position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
      z-index: 300;
    `,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),200)},t)}}const In=new Bx;function Ln(r,e){const t=e.bodyByName("sun");let n=t,i=0;for(const s of e.bodies){if(s.name==="sun")continue;const o=s;let a=t,l=t.position;if(o.parentBody)a=o.parentBody,l=a.position;else if(s.name==="moon"){const v=e.bodyByName("earth");v&&(a=v,l=v.position)}const c=s.position[0]-r[0],d=s.position[1]-r[1],h=s.position[2]-r[2],u=c*c+d*d+h*h,f=Math.sqrt(u),g=s.position[0]-l[0],_=s.position[1]-l[1],m=s.position[2]-l[2],x=Math.sqrt(g*g+_*_+m*m)*Math.pow(s.mass/a.mass,.4);if(f<x){const v=$s*s.mass/u;v>i&&(i=v,n=s)}}return n}function zx(r,e,t,n,i){const s=$s*t,o=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]),l=(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])/2-s/o,c=-s/(2*l),d=r[1]*e[2]-r[2]*e[1],h=r[2]*e[0]-r[0]*e[2],u=r[0]*e[1]-r[1]*e[0],f=Math.sqrt(d*d+h*h+u*u),g=(e[1]*u-e[2]*h)/s-r[0]/o,_=(e[2]*d-e[0]*u)/s-r[1]/o,m=(e[0]*h-e[1]*d)/s-r[2]/o,p=Math.sqrt(g*g+_*_+m*m),x=p<1&&c>0,v=x?c*(1+p):1/0,S=x?c*(1-p):o,E=p>1e-8?g/p:1,A=p>1e-8?_/p:0,R=p>1e-8?m/p:0,k=[E,A,R],y=[(h*R-u*A)/(f||1),(u*E-d*R)/(f||1),(d*A-h*E)/(f||1)],w=[],I=x?Math.PI:Math.acos(-1/Math.max(p,1.001))*.98;for(let D=0;D<=i;D++){const $=-I+2*I*D/i,P=1+p*Math.cos($);if(Math.abs(P)<1e-10)continue;const F=c*(1-p*p)/P;if(isNaN(F)||!isFinite(F)||F<0)continue;const W=F*(Math.cos($)*k[0]+Math.sin($)*y[0]),J=F*(Math.cos($)*k[2]+Math.sin($)*y[2]);if(Math.sqrt(W*W+J*J)>n*1.5)break;w.push([W,J])}return{points:w,eccentricity:p,apoapsis:v,periapsis:S,bound:x}}function Gx(r,e){const t=r.position[0]-e.position[0],n=r.position[1]-e.position[1],i=r.position[2]-e.position[2],s=t*t+n*n+i*i,o=Math.sqrt(s);if(o===0)return[0,0,0];const a=$s*r.mass*e.mass/s;return[a*t/o,a*n/o,a*i/o]}function su(r,e){let t=0,n=0,i=0;for(const s of e){if(s===r||s.mass<=0)continue;const o=Gx(s,r);t+=o[0],n+=o[1],i+=o[2]}return[t,n,i]}function Wx(){try{const r=document.createElement("canvas");r.width=64,r.height=64;const e=r.getContext("2d");if(!e)throw new Error("no 2d context");const t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,200,0.9)"),t.addColorStop(.7,"rgba(255,200,100,0.5)"),t.addColorStop(1,"rgba(255,150,50,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new dn(r);return n.needsUpdate=!0,n}catch{return new Vh(new Uint8Array([255,255,255,255]),1,1,Jt)}}const gi=Ke/.08,qn=300;class Vx{particles;positions;velocities;lifetimes;ages;colors;active;nextIndex;spriteTex;constructor(){this.active=!1,this.nextIndex=0,this.positions=new Float32Array(qn*3),this.velocities=new Float32Array(qn*3),this.lifetimes=new Float32Array(qn),this.ages=new Float32Array(qn),this.colors=new Float32Array(qn*3),this.ages.fill(1/0),this.spriteTex=Wx();const e=new wt;e.setAttribute("position",new St(this.positions,3)),e.setAttribute("color",new St(this.colors,3));const t=new oo({size:gi*.8,map:this.spriteTex,vertexColors:!0,sizeAttenuation:!0,blending:Nn,depthWrite:!1,transparent:!0,opacity:1});this.particles=new Oa(e,t)}start(){this.active=!0}stop(){this.active=!1;for(let e=0;e<qn;e++)this.ages[e]=this.lifetimes[e],this.positions[e*3]=0,this.positions[e*3+1]=0,this.positions[e*3+2]=0;this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0}update(e){if(this.active){const t=8+Math.floor(Math.random()*4);for(let n=0;n<t;n++){const i=this.nextIndex;this.nextIndex=(this.nextIndex+1)%qn;const s=.15+Math.random()*.2;this.positions[i*3]=(Math.random()-.5)*s*gi,this.positions[i*3+1]=-(Math.random()*.08)*gi,this.positions[i*3+2]=(Math.random()-.5)*s*gi;const o=5+Math.random()*8;this.velocities[i*3]=(Math.random()-.5)*.5*gi,this.velocities[i*3+1]=-(o*gi),this.velocities[i*3+2]=(Math.random()-.5)*.5*gi,this.lifetimes[i]=.3+Math.random()*.4,this.ages[i]=0}}for(let t=0;t<qn;t++){const n=this.ages[t],i=this.lifetimes[t];if(n>=i)continue;const s=n+e;if(this.ages[t]=s,s>=i)continue;const o=s/i,a=t*3;this.positions[a]=(this.positions[a]??0)+(this.velocities[a]??0)*e,this.positions[a+1]=(this.positions[a+1]??0)+(this.velocities[a+1]??0)*e,this.positions[a+2]=(this.positions[a+2]??0)+(this.velocities[a+2]??0)*e;const l=Math.exp(-1.5*e);this.velocities[a]=(this.velocities[a]??0)*l,this.velocities[a+2]=(this.velocities[a+2]??0)*l;let c,d,h;if(o<.2)c=1,d=1,h=1;else if(o<.5){const u=(o-.2)/.3;c=1,d=1-u*.6,h=1-u*.9}else{const u=(o-.5)/.5;c=1-u*.5,d=.4-u*.4,h=.1-u*.1}this.colors[a]=c,this.colors[a+1]=d,this.colors[a+2]=h}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0}getMesh(){return this.particles}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.spriteTex.dispose()}}const _i=100,ls=Ke*Ma;class Xx{particles;positions;velocities;lifetimes;ages;active=!1;constructor(){this.positions=new Float32Array(_i*3),this.velocities=new Float32Array(_i*3),this.lifetimes=new Float32Array(_i),this.ages=new Float32Array(_i),this.ages.fill(1/0);const e=new wt;e.setAttribute("position",new St(this.positions,3));const t=new oo({size:.3*ls,color:13421772,transparent:!0,opacity:.5,blending:Ci,depthWrite:!1,sizeAttenuation:!0});this.particles=new Oa(e,t)}start(){this.active=!0}stop(){this.active=!1}update(e){if(this.active)for(let o=0;o<3;o++){let a=-1,l=-1;for(let c=0;c<_i;c++)this.ages[c]>=this.lifetimes[c]&&this.ages[c]>l&&(l=this.ages[c],a=c);if(a<0)for(let c=0;c<_i;c++)this.ages[c]>l&&(l=this.ages[c],a=c);a>=0&&(this.positions[a*3]=(Math.random()-.5)*.1*ls,this.positions[a*3+1]=0,this.positions[a*3+2]=(Math.random()-.5)*.1*ls,this.velocities[a*3]=(Math.random()-.5)*.5*ls,this.velocities[a*3+1]=(.5+Math.random()*1)*ls,this.velocities[a*3+2]=(Math.random()-.5)*.5*ls,this.lifetimes[a]=1+Math.random()*1.5,this.ages[a]=0)}const t=this.particles.material;let n=!1;const i=this.velocities,s=this.positions;for(let o=0;o<_i;o++){if(this.ages[o]>=this.lifetimes[o])continue;n=!0;const a=this.ages[o]+e;if(this.ages[o]=a,a>=this.lifetimes[o])continue;const l=o*3,c=i[l]??0,d=i[l+1]??0,h=i[l+2]??0;s[l]=(s[l]??0)+c*e,s[l+1]=(s[l+1]??0)+d*e,s[l+2]=(s[l+2]??0)+h*e,i[l]=c*.98,i[l+2]=h*.98}t.opacity=this.active?.5:Math.max(0,t.opacity-e*2),this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.visible=n||this.active}getMesh(){return this.particles}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose()}}const Be=On*kn;class qx{renderer;sceneMgr;system;achievements;state;rocket;rocketGroup;chase;controls;hud;sound;launched=!1;grounded=!0;groundedDir=null;engineFlame;groundSmoke;rocketShadow=null;reentryGlow=null;rocketQuat=new rn;angularVel=new C;ANGULAR_ACCEL=8;ANGULAR_DAMPING=10;timeWarp=1;parachuteDeployed=!1;deployedChuteMesh=null;crashed=!1;paused=!1;debris=[];warpLevels=[1,3,5,10,100,1e4,1e6];warpIndex=0;constructor(e,t,n,i,s){this.renderer=e,this.sceneMgr=t,this.system=n,this.achievements=s,this.rocket=i;const o=n.bodyByName("earth"),a=o.radius??6371e3,l=28.5*Math.PI/180,c=-80.5*Math.PI/180,d=[Math.cos(l)*Math.cos(c),Math.sin(l),Math.cos(l)*Math.sin(c)],h=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),u=[d[0]/h,d[1]/h,d[2]/h],f=[o.position[0]+u[0]*a,o.position[1]+u[1]*a,o.position[2]+u[2]*a],g=o.getSurfaceRadiusAt?.(f)??a,_=[o.position[0]+u[0]*(g+10),o.position[1]+u[1]*(g+10),o.position[2]+u[2]*(g+10)];this.state=new Dx(i,n,_,[0,0,0]),this.groundedDir=u;const m=new C(_[0]-o.position[0],_[1]-o.position[1],_[2]-o.position[2]).normalize();this.rocketQuat.setFromUnitVectors(new C(0,1,0),m),this.rocketGroup=i.assembly.toMesh(),this.rocketGroup.scale.setScalar(Ma),this.rocketGroup.position.set(this.state.position[0]*Be,this.state.position[1]*Be,this.state.position[2]*Be),t.scene.add(this.rocketGroup);for(const O of n.bodies){const le=O;le.mesh&&t.scene.add(le.mesh),le.light&&t.scene.add(le.light)}const p=new js(8952268,.5);p.position.set(-50,20,-30),t.scene.add(p);const x=O=>{const le=document.createElement("canvas");le.width=64,le.height=64;const se=le.getContext("2d");return se.beginPath(),se.arc(32,32,28,0,Math.PI*2),se.fillStyle=O,se.fill(),se.beginPath(),se.arc(32,32,20,0,Math.PI*2),se.fillStyle="#fff",se.globalAlpha=.3,se.fill(),se.globalAlpha=1,new dn(le)},v={sun:"#ffdd44",earth:"#4fc3f7",moon:"#888",mercury:"#aaa",venus:"#e8a84c",mars:"#d4733a",jupiter:"#d4a574",saturn:"#f4e4a1",uranus:"#4fd0e8",neptune:"#4b70dd"},S={sun:6,earth:4,moon:2,mercury:1.5,venus:2,mars:2,jupiter:5,saturn:4.5,uranus:2.5,neptune:2.5},E=[];for(const O of n.bodies){if(O.name==="earth"||O.name==="sun")continue;const le=new Da({map:x(v[O.name]||"#888"),transparent:!0,depthTest:!0}),se=new Gh(le);se.scale.set(S[O.name]||10,S[O.name]||10,1),se.position.set(O.position[0]*Be,O.position[1]*Be,O.position[2]*Be),t.scene.add(se),E.push(se)}window.__spriteMeshes=E;const A=52e23,R=n.bodyByName("earth").position,k=[];for(const O of n.bodies){if(O.mass<=0||O.name==="earth")continue;const le=O.position[0]-R[0],se=O.position[1]-R[1],X=O.position[2]-R[2],U=Math.sqrt(le*le+se*se+X*X)*Math.pow(O.mass/A,.4)*Be;if(U<1)continue;const Ge=new ht(U,24,12),ve=new Wg(Ge),fe=new Na({color:4500223,transparent:!0,opacity:.25,depthTest:!1}),de=new Xh(ve,fe);de.position.set(O.position[0]*Be,O.position[1]*Be,O.position[2]*Be),t.scene.add(de),k.push(de)}window.__soiMeshes=k,this.engineFlame=new Vx,this.positionFlameAtNozzle(),this.rocketGroup.add(this.engineFlame.getMesh()),this.groundSmoke=new Xx,this.rocketGroup.add(this.groundSmoke.getMesh());const y=new ao(.3*Ma,32),w=new It({color:0,transparent:!0,opacity:.3,depthWrite:!1});this.rocketShadow=new ge(y,w),this.rocketShadow.rotation.x=-Math.PI/2,this.rocketShadow.position.y=-2,this.rocketGroup.add(this.rocketShadow);const I=new ht(.3,16,12),D=new It({color:16737792,transparent:!0,opacity:0,blending:Nn,depthWrite:!1});this.reentryGlow=new ge(I,D),this.rocketGroup.add(this.reentryGlow);const $=new ht(.5,16,12),P=new It({color:16729088,transparent:!0,opacity:0,blending:Nn,depthWrite:!1}),F=new ge($,P);F.name="reentry-outer",this.rocketGroup.add(F);const W=new C().crossVectors(m,new C(0,1,0)).normalize(),J=Math.atan2(W.z,W.x);this.chase=new Ux(t.camera),this.chase.setAzimuth(J),this.chase.enableOrbit(this.renderer.domElement),this.chase.initialiseAt(this.state,this.rocketQuat,m),this.controls=new Fx(this.state),("ontouchstart"in window||navigator.maxTouchPoints>0)&&this.controls.enableTouch(),this.sound=new Hx,this.hud=new Ox,this.hud.onAction=O=>{O==="stage"?this.performStage():O==="parachute"?this.toggleParachute():O==="map"?(j=!j,G.style.display=j?"block":"none",j&&requestAnimationFrame(Z)):O==="resume"?(this.paused=!1,this.hud.setPaused(!1)):(O==="menu"||O==="restart")&&window.location.reload()},this.hud.mount();let j=!1,Q=1,ee=0,ae=0,ie=null;const G=document.createElement("div");G.style.cssText="position:fixed;inset:0;z-index:300;background:rgba(6,8,20,0.95);display:none;";const K=document.createElement("canvas");K.style.cssText="position:absolute;inset:0;width:100%;height:100%;",G.appendChild(K),document.body.appendChild(G);const q=document.createElement("div");q.style.cssText="position:absolute;top:16px;left:16px;z-index:10;color:#EACD9E;font-family:monospace;font-size:12px;pointer-events:none;",q.innerHTML='<div id="map-zoom">ZOOM: 1x</div><div id="map-center">CENTER: ROCKET</div><div id="map-legend" style="margin-top:8px;font-size:10px;opacity:0.7;">SCROLL: zoom | DRAG: pan | M/TAB: close</div>',G.appendChild(q),G.appendChild(K),document.body.appendChild(G),K.addEventListener("wheel",O=>{Q*=O.deltaY>0?.9:1.1,Q=Math.max(.05,Math.min(100,Q))}),K.addEventListener("mousedown",O=>{ie={x:O.clientX,y:O.clientY}}),window.addEventListener("mouseup",()=>{ie=null}),window.addEventListener("mousemove",O=>{ie&&(ee+=O.clientX-ie.x,ae+=O.clientY-ie.y,ie={x:O.clientX,y:O.clientY})}),K.addEventListener("touchstart",O=>{O.touches.length===1&&(ie={x:O.touches[0].clientX,y:O.touches[0].clientY})}),K.addEventListener("touchmove",O=>{!ie||O.touches.length!==1||(ee+=O.touches[0].clientX-ie.x,ae+=O.touches[0].clientY-ie.y,ie={x:O.touches[0].clientX,y:O.touches[0].clientY})});const Z=()=>{if(!j)return;const O=window.devicePixelRatio||1,le=K.clientWidth,se=K.clientHeight;K.width=le*O,K.height=se*O;const X=K.getContext("2d");X.setTransform(O,0,0,O,0,0),X.fillStyle="#060814",X.fillRect(0,0,le,se),X.strokeStyle="rgba(100,100,150,0.08)",X.lineWidth=1;const Ae=100*Q,U=le/2+ee,Ge=se/2+ae;for(let Y=U%Ae;Y<le;Y+=Ae)X.beginPath(),X.moveTo(Y,0),X.lineTo(Y,se),X.stroke();for(let Y=Ge%Ae;Y<se;Y+=Ae)X.beginPath(),X.moveTo(0,Y),X.lineTo(le,Y),X.stroke();let ve=1;for(const Y of this.system.bodies){const oe=(Y.position[0]-this.state.position[0])*Be,ce=(Y.position[2]-this.state.position[2])*Be,_e=Math.sqrt(oe*oe+ce*ce);_e>ve&&(ve=_e)}const fe=Math.min(le,se)*.4/ve*Q,de={sun:"#ffdd44",earth:"#4fc3f7",moon:"#888",venus:"#e8a84c",mars:"#d4733a",mercury:"#aaa",jupiter:"#d4a574",saturn:"#f4e4a1",uranus:"#4fd0e8",neptune:"#4b70dd"},qe={sun:6,earth:4,moon:2,venus:2,mars:2,mercury:1.5,jupiter:5,saturn:4.5,uranus:2.5,neptune:2.5};for(const Y of this.system.bodies){const oe=U+(Y.position[0]-this.state.position[0])*fe,ce=Ge-(Y.position[2]-this.state.position[2])*fe;X.beginPath(),X.arc(oe,ce,qe[Y.name]||3,0,Math.PI*2),X.fillStyle=de[Y.name]||"#888",X.fill(),X.font="10px sans-serif",X.fillStyle="#F4F5F2",X.fillText(Y.name.toUpperCase(),oe+10,ce+4)}const Me=U,T=Ge;X.beginPath(),X.arc(Me,T,6,0,Math.PI*2),X.fillStyle="#EACD9E",X.fill(),X.strokeStyle="#EACD9E",X.lineWidth=2,X.stroke();const M=this.state.velocity[0]||0,H=this.state.velocity[2]||0;if(Math.sqrt(M*M+H*H)>.1){const Y=Math.atan2(H,M),oe=15;X.beginPath(),X.moveTo(U+Math.cos(Y)*8,Ge-Math.sin(Y)*8),X.lineTo(U+Math.cos(Y)*(8+oe),Ge-Math.sin(Y)*(8+oe)),X.strokeStyle="#EACD9E",X.lineWidth=2,X.stroke(),X.beginPath(),X.moveTo(U+Math.cos(Y)*(8+oe),Ge-Math.sin(Y)*(8+oe)),X.lineTo(U+Math.cos(Y+.5)*(8+oe-5),Ge-Math.sin(Y+.5)*(8+oe-5)),X.lineTo(U+Math.cos(Y-.5)*(8+oe-5),Ge-Math.sin(Y-.5)*(8+oe-5)),X.closePath(),X.fillStyle="#EACD9E",X.fill()}const te=Ln(this.state.position,this.system);if(te&&te.mass>0){if(te.name!=="sun"){const ce=this.system.bodyByName("sun"),_e=(te.position[0]-ce.position[0])*Be,Se=(te.position[2]-ce.position[2])*Be,ne=Math.sqrt(_e*_e+Se*Se)*Math.pow(te.mass/ce.mass,.4);X.beginPath(),X.arc(U,Ge,ne*fe,0,Math.PI*2),X.setLineDash([4,4]),X.strokeStyle="rgba(68, 136, 255, 0.3)",X.lineWidth=1,X.stroke(),X.setLineDash([])}const Y=[(this.state.position[0]-te.position[0])*Be,(this.state.position[1]-te.position[1])*Be,(this.state.position[2]-te.position[2])*Be],oe=zx(Y,this.state.velocity,te.mass,5e14,360);if(oe.points.length>1){X.beginPath(),X.strokeStyle=oe.bound?"#4488CC":"#DDAA44",X.lineWidth=1.5;const ce=U+oe.points[0][0]*fe,_e=Ge-oe.points[0][1]*fe;X.moveTo(ce,_e);for(let Se=1;Se<oe.points.length;Se++){const Ie=U+oe.points[Se][0]*fe,ne=Ge-oe.points[Se][1]*fe;X.lineTo(Ie,ne)}if(X.stroke(),oe.bound&&isFinite(oe.apoapsis)&&isFinite(oe.periapsis)){const Se=U+oe.apoapsis*fe,Ie=U+oe.periapsis*fe;X.font="bold 10px sans-serif",X.fillStyle="#DDAA44",X.fillText("Ap",Se+4,Ge-6),X.fillText("Pe",Ie+4,Ge+14)}}}X.fillStyle="rgba(244,245,242,0.3)",X.font="9px sans-serif",X.fillText(`${(ve/1e3).toFixed(0)} km | Zoom: ${Q.toFixed(1)}x`,10,se-10),requestAnimationFrame(Z)};window.addEventListener("keydown",O=>{(O.key==="m"||O.key==="Tab")&&(j=!j,G.style.display=j?"block":"none",j&&requestAnimationFrame(Z),O.preventDefault())}),window.addEventListener("keydown",O=>{if(O.key==="q"||O.key==="["){if(this.paused)return;this.warpIndex=Math.max(0,this.warpIndex-1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarpLabel(`x${this.timeWarp}`),O.preventDefault()}else if(O.key==="e"||O.key==="]"){if(this.paused)return;this.warpIndex=Math.min(this.warpLevels.length-1,this.warpIndex+1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarpLabel(`x${this.timeWarp}`),O.preventDefault()}else if(O.key==="p"){if(i.assembly.roots.some(se=>se.part.kind==="parachute")||i.assembly.roots.some(se=>se.children.some(X=>X.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const se={radius:.6*Ke,height:1*Ke};this.deployedChuteMesh=Sa(se),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);In.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}O.preventDefault()}}),this.achievements.unlock("first_launch"),In.show("You are at the launchpad. W/S throttle, ↑↓ pitch, ←→ yaw, T SAS, Esc pause.")}sanitize(e){isFinite(e[0])||(e[0]=0),isFinite(e[1])||(e[1]=0),isFinite(e[2])||(e[2]=0)}update(e){try{this.updateInner(e)}catch(t){In.show(`ERROR: ${t.message||t}`),console.error("FlightScene.update error:",t)}}updateInner(e){const t=e;if(this.controls.consumePauseToggle()&&(this.paused=!this.paused,this.hud.setPaused(this.paused),this.paused&&this.sound.stopEngine()),this.paused){this.system.propagate(0,Vc);for(const q of this.system.bodies)q.syncMesh?.();return}e*=this.timeWarp,(!isFinite(e)||e<=0)&&(e=1/60),this.controls.update(t),this.controls.getZoomIn()&&this.chase.zoom(.92),this.controls.getZoomOut()&&this.chase.zoom(1.08);const n=this.timeWarp>1;n&&(this.state.throttle=0),!n&&this.controls.getStageRequested()&&this.performStage();const i=()=>new C(0,1,0).applyQuaternion(this.rocketQuat),s=n?0:this.controls.getPitch(),o=n?0:this.controls.getYaw(),a=n?0:this.controls.getRoll();this.angularVel.x+=s*this.ANGULAR_ACCEL*t,this.angularVel.y+=o*this.ANGULAR_ACCEL*t,this.angularVel.z+=a*this.ANGULAR_ACCEL*t;const l=Math.exp(-this.ANGULAR_DAMPING*t);this.angularVel.multiplyScalar(l);const c=new rn().setFromAxisAngle(new C(0,0,1),this.angularVel.y*t),d=new rn().setFromAxisAngle(new C(1,0,0),this.angularVel.x*t),h=new rn().setFromAxisAngle(new C(0,1,0),this.angularVel.z*t);this.rocketQuat.multiply(c).multiply(d).multiply(h),this.rocketQuat.normalize(),this.rocketGroup.quaternion.copy(this.rocketQuat);const u=i(),f=u.x,g=u.y,_=u.z,m=this.state.throttle>0;let p=!1;if(m&&this.grounded){const q=Ga(this.state.rocket.assembly.roots);if(q&&q.thrust){const Z=q.thrust*1e3*this.state.throttle,O=Ln(this.state.position,this.system),le=this.state.position[0]-O.position[0],se=this.state.position[1]-O.position[1],X=this.state.position[2]-O.position[2],Ae=Math.sqrt(le*le+se*se+X*X)||1,U=$s*O.mass/(Ae*Ae),Ge=this.state.rocket.totalMass()*U;p=Z>Ge*.95}}m&&(!this.grounded||p)&&(kx(this.state,e,[f,g,_]),this.sanitize(this.state.velocity)),m&&p&&this.grounded&&(this.grounded=!1,this.groundedDir=null,this.launched=!0,this.achievements.unlock("reach_space"),this.sound.startEngine()),m?(this.sound.setThrottle(this.state.throttle),this.engineFlame.start()):(this.sound.setThrottle(0),this.engineFlame.stop()),this.engineFlame.update(t),m&&this.grounded?this.groundSmoke.start():this.groundSmoke.stop(),this.groundSmoke.update(t),this.state.position[0]+=this.state.velocity[0]*e,this.state.position[1]+=this.state.velocity[1]*e,this.state.position[2]+=this.state.velocity[2]*e;let x=null,v=1/0;const S=Ln(this.state.position,this.system),E=S.position[0]-this.state.position[0],A=S.position[1]-this.state.position[1],R=S.position[2]-this.state.position[2];v=Math.sqrt(E*E+A*A+R*R),x=S;const k=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(!this.grounded&&x&&x.radius){const q=v-x.radius;if(q>0&&q<12e4&&k>2e3){const Z=Math.max(0,1-q/12e4)*Math.min(1,k/8e3);if(this.reentryGlow){this.reentryGlow.material.color.setHSL(.05,1,.7*Z),this.reentryGlow.material.opacity=.4*Z,this.reentryGlow.scale.setScalar(1+Z*2);const O=this.rocketGroup.getObjectByName("reentry-outer");O&&(O.material.color.setHSL(.03,1,.4*Z),O.material.opacity=.2*Z,O.scale.setScalar(1+Z*4))}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const Z=this.rocketGroup.getObjectByName("reentry-outer");Z&&(Z.material.opacity=0)}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const q=this.rocketGroup.getObjectByName("reentry-outer");q&&(q.material.opacity=0)}if(this.grounded)this.state.velocity=[0,0,0];else{const q=E,Z=A,O=R,le=v,se=le*le;if(le>1&&se>0){const fe=$s*S.mass/se;this.state.velocity[0]+=fe*q/le*e,this.state.velocity[1]+=fe*Z/le*e,this.state.velocity[2]+=fe*O/le*e}this.sanitize(this.state.velocity);const X=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),Ae=this.state.rocket.totalMass();let U=Ae*.001+.2;if(this.parachuteDeployed&&(U=50),x&&x.radius&&X>.05&&X<1e6){const fe=v-x.radius;if(fe>0&&fe<3e5){const T=.5*(1.225*Math.exp(-fe/8500))*X*X*U/Ae*e;if(T>=X)this.state.velocity=[0,0,0];else{const M=1-T/X;this.state.velocity[0]*=M,this.state.velocity[1]*=M,this.state.velocity[2]*=M}this.sanitize(this.state.velocity)}}const Ge=x?x.radius??0:0,ve=x?x.getSurfaceRadiusAt?.(this.state.position)??Ge:0;if(x&&Ge>0&&isFinite(v)){const fe=this.state.position[0]-x.position[0],de=this.state.position[1]-x.position[1],qe=this.state.position[2]-x.position[2],Me=Math.sqrt(fe*fe+de*de+qe*qe);if(Me<ve-1)this.doCrash(`Impact on ${x.name}`,x,fe,de,qe,Me,ve);else if(Me<ve+.5&&Me>.001){const T=(this.state.velocity[0]*fe+this.state.velocity[1]*de+this.state.velocity[2]*qe)/Me,M=Math.acos(Math.min(1,Math.abs((0*fe+1*de+0*qe)/Me)))*180/Math.PI,H=this.hasLandingLegs(),re=this.parachuteDeployed?15:10,te=H?30:20;if(isFinite(T)&&Math.abs(T)>re)this.doCrash(`Too fast! (${Math.abs(T).toFixed(0)} m/s) on ${x.name}`,x,fe,de,qe,Me,ve);else if(M>te)this.doCrash(`Tipped over! (${M.toFixed(0)}°) on ${x.name}`,x,fe,de,qe,Me,ve);else if(isFinite(T)){this.state.position=[x.position[0]+fe/Me*(ve+.5),x.position[1]+de/Me*(ve+.5),x.position[2]+qe/Me*(ve+.5)],this.state.velocity=[0,0,0],this.grounded=!0,this.groundedDir=[fe/Me,de/Me,qe/Me];const Y=new C(fe/Me,de/Me,qe/Me);this.rocketQuat.setFromUnitVectors(new C(0,1,0),Y),this.sound.playLand(),this.sound.stopEngine();const oe=x.name;In.show(`Landed on ${oe}!`),oe==="earth"?this.achievements.unlock("land_earth"):oe==="moon"?this.achievements.unlock("land_moon"):oe==="mars"?this.achievements.unlock("land_mars"):oe==="venus"?this.achievements.unlock("land_venus"):oe==="mercury"&&this.achievements.unlock("land_mercury")}}}}if(this.system.propagate(e,Vc),this.grounded&&this.groundedDir){const q=Ln(this.state.position,this.system),Z=q.radius??6371e3,O=[q.position[0]+this.groundedDir[0],q.position[1]+this.groundedDir[1],q.position[2]+this.groundedDir[2]],se=(q.getSurfaceRadiusAt?.(O)??Z)+10;this.state.position[0]=q.position[0]+this.groundedDir[0]*se,this.state.position[1]=q.position[1]+this.groundedDir[1]*se,this.state.position[2]=q.position[2]+this.groundedDir[2]*se}if(this.grounded){const q=Ln(this.state.position,this.system),Z=this.state.position[0]-q.position[0],O=this.state.position[1]-q.position[1],le=this.state.position[2]-q.position[2],se=Math.sqrt(Z*Z+O*O+le*le),X=q.radius??6371e3;se>X*1.1&&(this.state.velocity=[0,0,0],this.state.position[0]=q.position[0]+Z/se*(X+10),this.state.position[1]=q.position[1]+O/se*(X+10),this.state.position[2]=q.position[2]+le/se*(X+10))}for(const q of this.system.bodies)q.syncMesh?.();if(this.debris.length>0){const q=Ln(this.state.position,this.system);for(let Z=this.debris.length-1;Z>=0;Z--){const O=this.debris[Z];if(O.life-=t,O.life<=0||O.body.mass<=0){this.sceneMgr.scene.remove(O.mesh),this.debris.splice(Z,1);continue}const le=su(O.body,this.system.bodies);O.body.applyForce(le,t),O.mesh.position.set(O.body.position[0]*Be,O.body.position[1]*Be,O.body.position[2]*Be);const se=O.body.position[0]-q.position[0],X=O.body.position[1]-q.position[1],Ae=O.body.position[2]-q.position[2],U=Math.sqrt(se*se+X*X+Ae*Ae),Ge=q.getSurfaceRadiusAt?.(O.body.position)??q.radius??6371e3;U<Ge&&(this.sceneMgr.scene.remove(O.mesh),this.debris.splice(Z,1))}}if(this.explosionMeshes.length>0)for(let q=this.explosionMeshes.length-1;q>=0;q--){const Z=this.explosionMeshes[q],O=Z._age+t;Z._age=O;const le=Z._life,se=O/le;if(se>=1){this.sceneMgr.scene.remove(Z),Z.geometry.dispose(),Z.material.dispose(),this.explosionMeshes.splice(q,1);continue}const X=.2+se*2.5;Z.scale.setScalar(X),Z.material.opacity=.9*(1-se),Z.position.x+=Z._vx*t,Z.position.y+=Z._vy*t,Z.position.z+=Z._vz*t}const y=window.__spriteMeshes;if(y){let q=0;for(const Z of this.system.bodies)Z.name==="earth"||Z.name==="sun"||q<y.length&&(y[q].position.set(Z.position[0]*Be,Z.position[1]*Be,Z.position[2]*Be),q++)}const w=window.__soiMeshes;if(w){let q=0;for(const Z of this.system.bodies)Z.mass<=0||Z.name==="earth"||q<w.length&&(w[q].position.set(Z.position[0]*Be,Z.position[1]*Be,Z.position[2]*Be),q++)}const I=Ln(this.state.position,this.system),D=this.state.position[0]-I.position[0],$=this.state.position[1]-I.position[1],P=this.state.position[2]-I.position[2],F=Math.sqrt(D*D+$*$+P*P)||1,W=new C(D/F,$/F,P/F);this.rocketShadow&&(this.rocketShadow.visible=this.grounded&&!this.crashed),this.crashed||(this.rocketGroup.position.set(this.state.position[0]*Be,this.state.position[1]*Be,this.state.position[2]*Be),this.chase.follow(this.state,t,W,n),this.deployedChuteMesh&&(this.deployedChuteMesh.position.set(this.state.position[0]*Be,this.state.position[1]*Be+.02,this.state.position[2]*Be),this.deployedChuteMesh.rotation.copy(this.rocketGroup.rotation))),x&&x.radius&&v-x.radius,this.hud.update(this.state,this.system);const J=new C(0,1,0).applyQuaternion(this.rocketQuat),j=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),Q=j>.01?[this.state.velocity[0]/j,this.state.velocity[1]/j,this.state.velocity[2]/j]:[0,1,0],ee=Ln(this.state.position,this.system),ae=this.state.position[0]-ee.position[0],ie=this.state.position[1]-ee.position[1],G=this.state.position[2]-ee.position[2],K=Math.sqrt(ae*ae+ie*ie+G*G)||1;this.hud.setNavballData([J.x,J.y,J.z],Q,[ae/K,ie/K,G/K])}updateRocketMesh(){const e=this.system.bodyByName("earth");e&&this.rocketGroup.position.set(0,(e.radius+100)*Be,0)}performStage(){const e=this.findLowestDecoupler(this.rocket.assembly.roots);if(!e){In.show("No decouplers to stage.");return}this.sound.playStaging();const t=this.rocketGroup.getObjectByName(e.part.id);if(t){const n=[];for(;t.children.length>0;)n.push(t.children[0]),t.children[0].removeFromParent();const i=Ln(this.state.position,this.system),s=[...this.state.position],o=[i.position[0]-s[0],i.position[1]-s[1],i.position[2]-s[2]],a=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2])||1,l=[this.state.velocity[0]-o[0]/a*.5,this.state.velocity[1]-o[1]/a*.5,this.state.velocity[2]-o[2]/a*.5];for(const c of n){const d=new on;d.add(c),c.position.set(0,0,0);const h=new C(this.state.position[0]*Be,this.state.position[1]*Be,this.state.position[2]*Be);d.position.copy(h);const u=new C((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2);d.position.add(u),this.sceneMgr.scene.add(d);const g=new za("debris",100,s,[...l]);g.velocity[0]+=(Math.random()-.5)*.2,g.velocity[1]+=(Math.random()-.5)*.2,g.velocity[2]+=(Math.random()-.5)*.2,this.debris.push({mesh:d,body:g,life:30})}}this.rocket.removeStage(e),this.achievements.unlock("stage_separate"),In.show("Stage separated!")}findLowestDecoupler(e){let t=null;const n=i=>{for(const s of i)s.part.kind==="decoupler"&&(t=s),n(s.children)};return n(e),t}toggleParachute(){if(this.rocket.assembly.roots.some(t=>t.part.kind==="parachute")||this.rocket.assembly.roots.some(t=>t.children.some(n=>n.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const t={radius:.6*Ke,height:1*Ke};this.deployedChuteMesh=Sa(t),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);In.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}}doCrash(e,t,n,i,s,o,a){this.crashed||(this.crashed=!0,this.achievements.unlock("crash"),this.sound.playCrash(),this.sound.stopEngine(),In.show(`CRASH! ${e}`),this.rocketGroup.visible=!1,this.engineFlame.stop(),this.state.position=[t.position[0]+n/o*a,t.position[1]+i/o*a,t.position[2]+s/o*a],this.state.velocity=[0,0,0],this.state.throttle=0,this.spawnExplosion(this.state.position[0]*Be,this.state.position[1]*Be,this.state.position[2]*Be))}explosionMeshes=[];spawnExplosion(e,t,n){const i=[16737792,16729088,16720384,13386752,8939008];for(let s=0;s<6;s++){const o=.3+Math.random()*.5,a=new ht(o,8,6),l=new It({color:i[s%i.length],transparent:!0,opacity:.9,blending:Nn,depthWrite:!1}),c=new ge(a,l);c.position.set(e+(Math.random()-.5)*.5,t+(Math.random()-.5)*.5,n+(Math.random()-.5)*.5),c._life=1.5+Math.random()*.5,c._age=0,c._vx=(Math.random()-.5)*2,c._vy=(Math.random()-.5)*2,c._vz=(Math.random()-.5)*2,this.sceneMgr.scene.add(c),this.explosionMeshes.push(c)}}hasLandingLegs(){const e=t=>{for(const n of t)if(n.part.kind==="legs"||e(n.children))return!0;return!1};return e(this.rocket.assembly.roots)}positionFlameAtNozzle(){let e=1/0;this.rocketGroup.traverse(n=>{if(n instanceof ge){const i=new ln().setFromObject(n);i.min.y<e&&(e=i.min.y)}});const t=e===1/0?-.1:e-.01;this.engineFlame.getMesh().position.set(0,t,0),this.engineFlame.getMesh().rotation.set(0,0,0)}dispose(){this.sceneMgr.scene.remove(this.rocketGroup);for(const e of this.debris)this.sceneMgr.scene.remove(e.mesh);this.debris=[];for(const e of this.explosionMeshes)this.sceneMgr.scene.remove(e),e.geometry.dispose(),e.material.dispose();this.explosionMeshes=[],this.controls.dispose(),this.engineFlame.dispose(),this.groundSmoke.dispose(),this.hud.unmount(),this.sound.dispose()}}function Yx(r,e,t){const n=r.mass,i=[...r.position],s=[...r.velocity],o=yt(e(r),1/n),a=s,c=ea(r,Pt(i,yt(o,.5*t)),Pt(s,yt(a,.5*t))),d=yt(e(c),1/n),h=Pt(s,yt(o,.5*t)),f=ea(r,Pt(i,yt(d,.5*t)),Pt(s,yt(h,.5*t))),g=yt(e(f),1/n),_=Pt(s,yt(d,.5*t)),p=ea(r,Pt(i,yt(g,t)),Pt(s,yt(_,t))),x=yt(e(p),1/n),v=Pt(s,yt(g,t)),S=yt(Pt(Pt(o,yt(d,2)),Pt(yt(g,2),x)),t/6),E=yt(Pt(Pt(a,yt(h,2)),Pt(yt(_,2),v)),t/6);r.position=Pt(i,E),r.velocity=Pt(s,S)}function ea(r,e,t){return{...r,position:e,velocity:t}}function Pt(r,e){return[r[0]+e[0],r[1]+e[1],r[2]+e[2]]}function yt(r,e){return[r[0]*e,r[1]*e,r[2]*e]}class jx{bodies=[];add(e){this.bodies.push(e)}bodyByName(e){return this.bodies.find(t=>t.name===e)}propagate(e,t){let n=e;for(;n>0;){const i=Math.min(t,n);this.step(i),n-=i}}step(e){for(const t of this.bodies){if(t.mass<=0)continue;const n=su(t,this.bodies);Yx(t,()=>n,e)}}}const Yn=On*kn;class Hn extends za{radius;visualRadius;mesh;constructor(e,t,n,i,s){super(e,t,n,i),this.radius=s,this.visualRadius=s*Yn;const o=new ht(this.visualRadius,64,32),a=new gt({color:8421504});this.mesh=new ge(o,a),this.mesh.position.set(n[0]*Yn,n[1]*Yn,n[2]*Yn)}getTerrainHeightVisual(e,t,n){return 0}syncMesh(){this.mesh.position.set(this.position[0]*Yn,this.position[1]*Yn,this.position[2]*Yn)}getSurfaceRadiusAt(e){const t=e[0]-this.position[0],n=e[1]-this.position[1],i=e[2]-this.position[2],s=Math.sqrt(t*t+n*n+i*i);if(s===0)return this.radius;const o=t/s,a=n/s,l=i/s,d=this.getTerrainHeightVisual(o,a,l)/Yn;return this.radius+d}}const ta=On*kn,$c=64,jn=(r,e,t)=>{const n=Math.sin(r*127.1+e*311.7+t*74.9)*43758.5453;return n-Math.floor(n)},$x=(r,e,t)=>{const n=Math.floor(r),i=Math.floor(e),s=Math.floor(t),o=r-n,a=e-i,l=t-s,c=o*o*(3-2*o),d=a*a*(3-2*a),h=l*l*(3-2*l),u=jn(n,i,s),f=jn(n+1,i,s),g=jn(n,i+1,s),_=jn(n+1,i+1,s),m=jn(n,i,s+1),p=jn(n+1,i,s+1),x=jn(n,i+1,s+1),v=jn(n+1,i+1,s+1);return xi(xi(xi(u,f,c),xi(g,_,c),d),xi(xi(m,p,c),xi(x,v,c),d),h)},Nr=(r,e,t,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*$x(r*l,e*l,t*l),o+=s,s*=.5}return i/o},xi=(r,e,t)=>r+(e-r)*t;class Kx extends Hn{getTerrainHeightVisual(e,t,n){const i=Nr(e*10+500,t*10+600,n*10+700,4),s=Nr(e*40+100,t*40+200,n*40+300,3),o=i*.8+s*.2,a=this.visualRadius*.03;return o>.4?((o-.4)/.6)**2*a:-(.4-o)/.4*a*.12}constructor(e,t){super("mercury",1e24,e,t,244e4);const n=this.visualRadius,s=new Mn().load(Sn("/textures/mercury.jpg"),h=>{h.colorSpace=$e,h.anisotropy=4}),o=new ht(n,$c,$c),a=o.attributes.position,l=new C,c=n*.03;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,g=l.z/n,_=Nr(u*10+500,f*10+600,g*10+700,4),m=Nr(u*40+100,f*40+200,g*40+300,3),p=_*.8+m*.2;let x=0;p>.4?x=((p-.4)/.6)**2*c:x=-(.4-p)/.4*c*.12,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new gt({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new ge(o,d),this.mesh.position.set(e[0]*ta,e[1]*ta,e[2]*ta)}}const Zx=`
varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vNormal  = normalize(normalMatrix * normal);
  vViewDir = normalize(cameraPosition - worldPos.xyz);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,Jx=`
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
`,Qx=1.04;class Hi{mesh;constructor(e,t=4491519,n=.7){const i=e*Qx,s=new ht(i,48,24),o=new xn({vertexShader:Zx,fragmentShader:Jx,uniforms:{glowColor:{value:new Te(t)},intensity:{value:n}},transparent:!0,blending:Nn,depthWrite:!1,side:_n});this.mesh=new ge(s,o)}getMesh(){return this.mesh}}const na=On*kn,Kc=64,$n=(r,e,t)=>{const n=Math.sin(r*127.1+e*311.7+t*74.9)*43758.5453;return n-Math.floor(n)},ev=(r,e,t)=>{const n=Math.floor(r),i=Math.floor(e),s=Math.floor(t),o=r-n,a=e-i,l=t-s,c=o*o*(3-2*o),d=a*a*(3-2*a),h=l*l*(3-2*l),u=$n(n,i,s),f=$n(n+1,i,s),g=$n(n,i+1,s),_=$n(n+1,i+1,s),m=$n(n,i,s+1),p=$n(n+1,i,s+1),x=$n(n,i+1,s+1),v=$n(n+1,i+1,s+1);return vi(vi(vi(u,f,c),vi(g,_,c),d),vi(vi(m,p,c),vi(x,v,c),d),h)},Fr=(r,e,t,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*ev(r*l,e*l,t*l),o+=s,s*=.5}return i/o},vi=(r,e,t)=>r+(e-r)*t;class tv extends Hn{getTerrainHeightVisual(e,t,n){const i=Fr(e*6+50,t*6+100,n*6+150,4),s=Fr(e*15+200,t*15+300,n*15+400,3),o=i*.6+s*.4,a=this.visualRadius*.015;return o>.35?((o-.35)/.65)**2*a:-(.35-o)/.35*a*.05}atmosphereGlow;constructor(e,t){super("venus",146e23,e,t,6052e3);const n=this.visualRadius,s=new Mn().load(Sn("/textures/venus.jpg"),h=>{h.colorSpace=$e,h.anisotropy=4}),o=new ht(n,Kc,Kc),a=o.attributes.position,l=new C,c=n*.015;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,g=l.z/n,_=Fr(u*6+50,f*6+100,g*6+150,4),m=Fr(u*15+200,f*15+300,g*15+400,3),p=_*.6+m*.4;let x=0;p>.35?x=((p-.35)/.65)**2*c:x=-(.35-p)/.35*c*.05,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new gt({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new ge(o,d),this.mesh.position.set(e[0]*na,e[1]*na,e[2]*na),this.atmosphereGlow=new Hi(n,15247436,.4),this.mesh.add(this.atmosphereGlow.getMesh())}}const ia=On*kn,Zc=64;class nv extends Hn{atmosphereGlow;constructor(e,t){super("earth",ax,e,t,6371e3);const n=this.visualRadius,i=new ht(n,Zc,Zc),s=new gt({color:16777215,roughness:.7,metalness:0});this.mesh=new ge(i,s),this.mesh.position.set(e[0]*ia,e[1]*ia,e[2]*ia),this.atmosphereGlow=new Hi(n,4491519,.7),this.mesh.add(this.atmosphereGlow.getMesh()),this.generateTerrain(n);const o=ux();s.map=o,s.needsUpdate=!0,this.loadTexture()}getTerrainHeightVisual(e,t,n){const i=(Math.sin(e*4.5)*.5+Math.cos(t*3.2)*.3+Math.sin(n*2.1+e*1.5)*.2+Math.sin(e*8.1+t*3.7)*.15)*.4+.5,s=this.visualRadius*.015,o=this.visualRadius*.005;return i>.4?((i-.4)/.6)**2*s:-(.4-i)/.4*o}generateTerrain(e){const t=this.mesh.geometry,n=t.attributes.position,i=new C;for(let s=0;s<n.count;s++){i.fromBufferAttribute(n,s);const o=i.x/e,a=i.y/e,l=i.z/e,c=this.getTerrainHeightVisual(o,a,l);i.setLength(e+c),n.setXYZ(s,i.x,i.y,i.z)}n.needsUpdate=!0,t.computeVertexNormals()}async loadTexture(){const e=new Mn,[t]=await Promise.all([e.loadAsync(Sn("/textures/earth_daymap.jpg"))]);t.colorSpace=$e,t.anisotropy=8;const n=this.mesh.material;n.map=t,n.needsUpdate=!0;const i=new ht(this.visualRadius*.998,48,24),s=new gt({color:665672,transparent:!0,opacity:.06,roughness:.1,metalness:0});this.mesh.add(new ge(i,s)),this.addClouds(this.visualRadius)}addClouds(e){const t=new ht(e*1.008,48,24),n=new gt({color:16777215,transparent:!0,opacity:.25,roughness:.9,metalness:0,depthWrite:!1}),i=new ge(t,n),s=t.attributes.position;for(let o=0;o<s.count;o++){const a=s.getX(o),l=s.getY(o),c=s.getZ(o),h=((Math.sin(a*3.7+l*2.1)*.3+Math.cos(l*4.3+c*1.8)*.3+Math.sin(c*5.1+a*2.9)*.2+Math.sin(a*8.3+l*6.7+c*4.1)*.15)*.5+.5)*e*.006,u=Math.sqrt(a*a+l*l+c*c);s.setXYZ(o,a/u*(e*1.008+h),l/u*(e*1.008+h),c/u*(e*1.008+h))}s.needsUpdate=!0,t.computeVertexNormals(),this.mesh.add(i)}}const sa=On*kn,Jc=64,Kn=(r,e,t)=>{const n=Math.sin(r*127.1+e*311.7+t*74.9)*43758.5453;return n-Math.floor(n)},iv=(r,e,t)=>{const n=Math.floor(r),i=Math.floor(e),s=Math.floor(t),o=r-n,a=e-i,l=t-s,c=o*o*(3-2*o),d=a*a*(3-2*a),h=l*l*(3-2*l),u=Kn(n,i,s),f=Kn(n+1,i,s),g=Kn(n,i+1,s),_=Kn(n+1,i+1,s),m=Kn(n,i,s+1),p=Kn(n+1,i,s+1),x=Kn(n,i+1,s+1),v=Kn(n+1,i+1,s+1);return yi(yi(yi(u,f,c),yi(g,_,c),d),yi(yi(m,p,c),yi(x,v,c),d),h)},Or=(r,e,t,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*iv(r*l,e*l,t*l),o+=s,s*=.5}return i/o},yi=(r,e,t)=>r+(e-r)*t;class sv extends Hn{getTerrainHeightVisual(e,t,n){const i=Or(e*8+100,t*8+200,n*8+300,4),s=Or(e*30+400,t*30+500,n*30+600,3),o=i*.7+s*.3,a=this.visualRadius*.04;return o>.45?((o-.45)/.55)**2*a:-(.45-o)/.45*a*.15}constructor(e,t){super("moon",22e22,e,t,1737e3);const n=this.visualRadius,s=new Mn().load(Sn("/textures/moon.jpg"),h=>{h.colorSpace=$e,h.anisotropy=4}),o=new ht(n,Jc,Jc),a=o.attributes.position,l=new C,c=n*.04;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,g=l.z/n,_=Or(u*8+100,f*8+200,g*8+300,4),m=Or(u*30+400,f*30+500,g*30+600,3),p=_*.7+m*.3;let x=0;p>.45?x=((p-.45)/.55)**2*c:x=-(.45-p)/.45*c*.15,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new gt({map:s,roughness:.95,metalness:0,color:16777215});this.mesh=new ge(o,d),this.mesh.position.set(e[0]*sa,e[1]*sa,e[2]*sa)}}const ra=On*kn,Qc=64,Zn=(r,e,t)=>{const n=Math.sin(r*127.1+e*311.7+t*74.9)*43758.5453;return n-Math.floor(n)},rv=(r,e,t)=>{const n=Math.floor(r),i=Math.floor(e),s=Math.floor(t),o=r-n,a=e-i,l=t-s,c=o*o*(3-2*o),d=a*a*(3-2*a),h=l*l*(3-2*l),u=Zn(n,i,s),f=Zn(n+1,i,s),g=Zn(n,i+1,s),_=Zn(n+1,i+1,s),m=Zn(n,i,s+1),p=Zn(n+1,i,s+1),x=Zn(n,i+1,s+1),v=Zn(n+1,i+1,s+1);return Mi(Mi(Mi(u,f,c),Mi(g,_,c),d),Mi(Mi(m,p,c),Mi(x,v,c),d),h)},kr=(r,e,t,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*rv(r*l,e*l,t*l),o+=s,s*=.5}return i/o},Mi=(r,e,t)=>r+(e-r)*t;class ov extends Hn{getTerrainHeightVisual(e,t,n){const i=kr(e*4+10,t*4+20,n*4+30,5),s=kr(e*20+100,t*20+200,n*20+300,3),o=i*.7+s*.3,a=this.visualRadius*.035;return o>.4?((o-.4)/.6)**2*a:-(.4-o)/.4*a*.1}atmosphereGlow;constructor(e,t){super("mars",19e23,e,t,339e4);const n=this.visualRadius,s=new Mn().load(Sn("/textures/mars.jpg"),h=>{h.colorSpace=$e,h.anisotropy=4}),o=new ht(n,Qc,Qc),a=o.attributes.position,l=new C,c=n*.035;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,g=l.z/n,_=kr(u*4+10,f*4+20,g*4+30,5),m=kr(u*20+100,f*20+200,g*20+300,3),p=_*.7+m*.3;let x=0;p>.4?x=((p-.4)/.6)**2*c:x=-(.4-p)/.4*c*.1,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new gt({map:s,roughness:.85,metalness:0,color:16777215});this.mesh=new ge(o,d),this.mesh.position.set(e[0]*ra,e[1]*ra,e[2]*ra),this.atmosphereGlow=new Hi(n,13920842,.25),this.mesh.add(this.atmosphereGlow.getMesh())}}const eh=64,Jn=(r,e,t)=>{const n=Math.sin(r*127.1+e*311.7+t*74.9)*43758.5453;return n-Math.floor(n)},av=(r,e,t)=>{const n=Math.floor(r),i=Math.floor(e),s=Math.floor(t),o=r-n,a=e-i,l=t-s,c=o*o*(3-2*o),d=a*a*(3-2*a),h=l*l*(3-2*l),u=Jn(n,i,s),f=Jn(n+1,i,s),g=Jn(n,i+1,s),_=Jn(n+1,i+1,s),m=Jn(n,i,s+1),p=Jn(n+1,i,s+1),x=Jn(n,i+1,s+1),v=Jn(n+1,i+1,s+1);return Si(Si(Si(u,f,c),Si(g,_,c),d),Si(Si(m,p,c),Si(x,v,c),d),h)},th=(r,e,t,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*av(r*l,e*l,t*l),o+=s,s*=.5}return i/o},Si=(r,e,t)=>r+(e-r)*t;class lv extends Hn{atmosphereGlow;constructor(e,t){super("jupiter",19e26,e,t,69911e3);const n=this.visualRadius;new Mn().load(Sn("/textures/jupiter.jpg"),d=>{d.colorSpace=$e,d.anisotropy=4});const s=new ht(n,eh,eh),o=s.attributes.position,a=new C,l=n*.02;for(let d=0;d<o.count;d++){a.fromBufferAttribute(o,d);const h=a.x/n,u=a.y/n,f=a.z/n,g=th(h*8+10,u*8+20,f*8+30,4),_=th(h*30+100,u*30+200,f*30+300,3),m=g*.7+_*.3;let p=0;m>.4?p=((m-.4)/.6)**2*l:p=-(.4-m)/.4*l*.1,a.setLength(n+p),o.setXYZ(d,a.x,a.y,a.z)}o.needsUpdate=!0,s.computeVertexNormals();const c=new gt({map:void 0,roughness:.9,metalness:0,color:13935988});this.mesh=new ge(s,c),this.mesh.position.set(0,0,0),this.mesh.rotation.z=3.1*Math.PI/180,this.atmosphereGlow=new Hi(n,13935988,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}function Qn(r,e,t){const n=Math.sin(r*127.1+e*311.7+t*74.9)*43758.5453;return n-Math.floor(n)}function cv(r,e,t){const n=Math.floor(r),i=Math.floor(e),s=Math.floor(t),o=r-n,a=e-i,l=t-s,c=o*o*(3-2*o),d=a*a*(3-2*a),h=l*l*(3-2*l),u=Qn(n,i,s),f=Qn(n+1,i,s),g=Qn(n,i+1,s),_=Qn(n+1,i+1,s),m=Qn(n,i,s+1),p=Qn(n+1,i,s+1),x=Qn(n,i+1,s+1),v=Qn(n+1,i+1,s+1);return bi(bi(bi(u,f,c),bi(g,_,c),d),bi(bi(m,p,c),bi(x,v,c),d),h)}function bs(r,e,t,n){let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*cv(r*l,e*l,t*l),o+=s,s*=.5}return i/o}function bi(r,e,t){return r+(e-r)*t}function hv(){const t=document.createElement("canvas");t.width=1024,t.height=64;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,1024,0);i.addColorStop(0,"#8a7a5a"),i.addColorStop(.05,"#b8a888"),i.addColorStop(.12,"#d4c8a8"),i.addColorStop(.2,"#c0b898"),i.addColorStop(.35,"#e8ddd0"),i.addColorStop(.5,"#c0b090"),i.addColorStop(.65,"#d8ccb0"),i.addColorStop(.8,"#a89878"),i.addColorStop(.9,"#786858"),i.addColorStop(1,"#584838"),n.fillStyle=i,n.fillRect(0,0,1024,64);for(let o=0;o<8e3;o++){const a=Math.random()*1024,l=Math.random()*64,c=1+Math.random()*4,d=120+Math.random()*80;n.fillStyle=`rgba(${d},${d-20},${d-40},${.2+Math.random()*.4})`,n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.fill()}n.fillStyle="rgba(0,0,0,0.7)",n.fillRect(1024*.43,0,1024*.04,64),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(1024*.72,0,1024*.015,64),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(1024*.1,0,1024*.02,64),n.fillRect(1024*.17,0,1024*.01,64),n.fillRect(1024*.55,0,1024*.02,64),n.fillStyle="rgba(200,190,170,0.15)";for(let o=0;o<1024;o+=8)n.fillRect(o,0,2,64);const s=new dn(t);return s.wrapS=qt,s.wrapT=qt,s.anisotropy=4,s}class uv extends Hn{atmosphereGlow;constructor(e,t){super("saturn",5683e23,e,t,58232e3);const n=this.visualRadius,s=new Mn().load(Sn("/textures/saturn.jpg"),x=>{x.colorSpace=$e,x.anisotropy=4}),o=new ht(n,64,32),a=o.attributes.position,l=new C,c=n*.015;for(let x=0;x<a.count;x++){l.fromBufferAttribute(a,x);const v=l.x/n,S=l.y/n,E=l.z/n,A=bs(v*8+10,S*8+20,E*8+30,4),R=bs(v*30+100,S*30+200,E*30+300,3),k=A*.7+R*.3;let y=0;k>.4?y=((k-.4)/.6)**2*c:y=-(.4-k)/.4*c*.1,l.setLength(n+y),a.setXYZ(x,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new gt({map:s,roughness:.9,metalness:0,color:16049313});this.mesh=new ge(o,d),this.mesh.position.set(0,0,0),this.mesh.rotation.z=26.7*Math.PI/180,this.atmosphereGlow=new Hi(n,16049313,.1),this.mesh.add(this.atmosphereGlow.getMesh());const h=hv(),u=new Ni(n*1.15,n*2.4,256),f=new It({map:h,side:Ht,transparent:!0,opacity:.8,depthWrite:!1}),g=new ge(u,f);g.rotation.x=-Math.PI/2,g.rotation.z=26.7*Math.PI/180,this.mesh.add(g);const _=new Ni(n*2.4,n*2.8,128),m=new It({color:8943720,side:Ht,transparent:!0,opacity:.15,depthWrite:!1}),p=new ge(_,m);p.rotation.x=-Math.PI/2,p.rotation.z=26.7*Math.PI/180,this.mesh.add(p)}}class dv extends Hn{atmosphereGlow;constructor(e,t){super("uranus",8681e22,e,t,25362e3);const n=this.visualRadius,s=new Mn().load(Sn("/textures/uranus.jpg"),g=>{g.colorSpace=$e,g.anisotropy=4}),o=new ht(n,64,32),a=o.attributes.position,l=new C,c=n*.015;for(let g=0;g<a.count;g++){l.fromBufferAttribute(a,g);const _=l.x/n,m=l.y/n,p=l.z/n,x=bs(_*6+10,m*6+20,p*6+30,4),v=bs(_*25+400,m*25+500,p*25+600,3),S=x*.7+v*.3;let E=0;S>.4?E=((S-.4)/.6)**2*c:E=-(.4-S)/.4*c*.1,l.setLength(n+E),a.setXYZ(g,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new gt({map:s,roughness:.9,metalness:0,color:5230824});this.mesh=new ge(o,d),this.mesh.position.set(0,0,0),this.mesh.rotation.z=-97.8*Math.PI/180,this.atmosphereGlow=new Hi(n,5230824,.1),this.mesh.add(this.atmosphereGlow.getMesh());const h=new Ni(n*1.2,n*2.1,64),u=new It({color:11184844,side:Ht,transparent:!0,opacity:.3}),f=new ge(h,u);f.rotation.x=-Math.PI/2,f.rotation.z=97.8*Math.PI/180,this.mesh.add(f)}}class fv extends Hn{atmosphereGlow;constructor(e,t){super("neptune",1024e23,e,t,24622e3);const n=this.visualRadius,s=new Mn().load(Sn("/textures/neptune.jpg"),h=>{h.colorSpace=$e,h.anisotropy=4}),o=new ht(n,64,32),a=o.attributes.position,l=new C,c=n*.015;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,g=l.z/n,_=bs(u*6+10,f*6+20,g*6+30,4),m=bs(u*25+100,f*25+200,g*25+300,3),p=_*.7+m*.3;let x=0;p>.4?x=((p-.4)/.6)**2*c:x=-(.4-p)/.4*c*.1,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new gt({map:s,roughness:.9,metalness:0,color:4944093});this.mesh=new ge(o,d),this.mesh.position.set(0,0,0),this.mesh.rotation.z=28.3*Math.PI/180,this.atmosphereGlow=new Hi(n,4944093,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const cs=On*kn,pv=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`,mv=`
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
`;class gv extends za{light;visualRadius;mesh;constructor(e,t,n=2e26){super("sun",n,e,t),this.visualRadius=15;const i=new ht(this.visualRadius,32,16),s=new xn({vertexShader:pv,fragmentShader:mv,uniforms:{uTime:{value:0},uColor:{value:new Te(16763904)},uIntensity:{value:1.5}},transparent:!0,blending:Nn,depthWrite:!1,side:Ht});this.mesh=new ge(i,s),this.mesh.position.set(e[0]*cs,e[1]*cs,e[2]*cs),this.light=new js(16772829,2.5),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z);const o=_v(),a=new Da({map:o,blending:Nn,depthWrite:!1,transparent:!0,opacity:1}),l=new Gh(a);l.scale.set(200,200,1),this.mesh.add(l),this.sunMaterial=s}sunMaterial;update(e){this.sunMaterial.uniforms.uTime.value+=e}syncMesh(){this.mesh.position.set(this.position[0]*cs,this.position[1]*cs,this.position[2]*cs),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z)}}function _v(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255, 220, 100, 1)"),n.addColorStop(.1,"rgba(255, 200, 80, 0.8)"),n.addColorStop(.3,"rgba(255, 160, 40, 0.4)"),n.addColorStop(.5,"rgba(255, 100, 20, 0.15)"),n.addColorStop(.7,"rgba(255, 60, 10, 0.05)"),n.addColorStop(1,"rgba(255, 0, 0, 0)"),t.fillStyle=n,t.fillRect(0,0,256,256);const i=new dn(e);return i.needsUpdate=!0,i}class nh{assembly;fuelTanks;constructor(e){this.assembly=e,this.fuelTanks=[],ru(e.roots,this.fuelTanks)}dryMass(){return this.assembly.totalMass()}totalFuelMass(){return this.fuelTanks.reduce((e,t)=>e+t.remaining,0)}totalMass(){return this.dryMass()+this.totalFuelMass()}consumeFuel(e,t){let n=0;for(let i=this.fuelTanks.length-1;i>=0;i--){const s=this.fuelTanks[i];if(s.remaining<=0)continue;const o=e*t-n;if(o<=0)break;const a=Math.min(s.remaining,o);s.remaining-=a,n+=a}return n}removeStage(e){const t=new Set;ou(e,t),t.add(e),this.fuelTanks=this.fuelTanks.filter(n=>!t.has(n.node)),e.children=[]}}function ru(r,e){for(const t of r)t.part.fuelCapacity&&e.push({node:t,remaining:t.part.fuelCapacity,capacity:t.part.fuelCapacity}),ru(t.children,e)}function ou(r,e){for(const t of r.children)e.add(t),ou(t,e)}const ih="ellipse_achievements";class xv{unlocked=new Set;callbacks=[];constructor(){const e=localStorage.getItem(ih);if(e)try{JSON.parse(e).forEach(t=>this.unlocked.add(t))}catch{}}unlock(e){this.unlocked.has(e)||(this.unlocked.add(e),localStorage.setItem(ih,JSON.stringify([...this.unlocked])),this.callbacks.forEach(t=>t(e)))}isUnlocked(e){return this.unlocked.has(e)}list(){return[...this.unlocked]}onUnlock(e){this.callbacks.push(e)}}const oa={units:"metric",autoSave:!0,difficulty:"normal"},au="ellipse_settings";function vv(){const r=localStorage.getItem(au);if(!r)return{...oa};try{return{...oa,...JSON.parse(r)}}catch{return{...oa}}}function sh(r){localStorage.setItem(au,JSON.stringify(r))}class yv{root;onClose;current;constructor(e,t){this.current=e,this.onClose=t,this.root=document.createElement("div"),this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 250;
      background: rgba(6, 8, 20, 0.88);
      display: flex; align-items: center; justify-content: center;
    `;const n=document.createElement("div");n.className="panel panel--elevated",n.style.cssText="padding: var(--space-6); min-width: 400px;";const i=document.createElement("h2");i.className="text-display-sm",i.textContent="Settings",i.style.cssText="margin: 0 0 var(--space-5);",n.appendChild(i);const s=this.makeRow("Units",["metric","imperial","mixed"],e.units,l=>{this.current.units=l});n.appendChild(s);const o=this.makeToggle("Auto-save",e.autoSave,l=>{this.current.autoSave=l});n.appendChild(o);const a=document.createElement("button");a.className="btn btn--primary",a.textContent="Save & Close",a.style.cssText="margin-top: var(--space-4); width: 100%; padding: 12px;",a.addEventListener("click",()=>{sh(this.current),this.onClose()}),n.appendChild(a),this.root.appendChild(n)}makeRow(e,t,n,i){const s=document.createElement("div");s.style.cssText="margin: var(--space-3) 0;";const o=document.createElement("div");o.className="text-caption",o.textContent=e,o.style.cssText="margin-bottom: var(--space-2);",s.appendChild(o);const a=document.createElement("div");a.style.cssText="display:flex;gap:var(--space-2);";for(const l of t){const c=document.createElement("button");c.className=`btn${l===n?" btn--secondary":""}`,c.textContent=l,l===n&&(c.style.borderColor="var(--accent-blue)"),c.addEventListener("click",()=>{i(l),sh(this.current)}),a.appendChild(c)}return s.appendChild(a),s}makeToggle(e,t,n){const i=document.createElement("div");i.style.cssText="margin: var(--space-3) 0; display: flex; justify-content: space-between; align-items: center;";const s=document.createElement("span");s.className="text-body",s.textContent=e;const o=document.createElement("input");return o.type="checkbox",o.checked=t,o.addEventListener("change",()=>n(o.checked)),i.appendChild(s),i.appendChild(o),i}mount(e=document.body){e.appendChild(this.root)}unmount(){this.root.remove()}}function Hr(r){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");t.fillStyle=r,t.fillRect(0,0,64,64),t.strokeStyle="#000",t.lineWidth=2,t.strokeRect(0,0,64,64),t.strokeRect(16,16,32,32);const n=new dn(e);return n.wrapS=n.wrapT=Yt,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}Hr("#8899aa"),Hr("#808080"),Hr("#808080"),Hr("#000000");async function Ri(r,e=$e){const t=await new Promise((i,s)=>{const o=new Image;o.onload=()=>i(o),o.onerror=()=>s(new Error(`Failed: ${r}`)),o.src=r}),n=new Mt(t);return n.colorSpace=e,n.wrapS=n.wrapT=Yt,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}async function Br(r){const[e,t,n,i]=await Promise.all([Ri(`/textures/${r}_color.jpg`,$e),Ri(`/textures/${r}_normal.jpg`,ft),Ri(`/textures/${r}_rough.jpg`,ft),Ri(`/textures/${r}_metal.jpg`,ft)]);return{color:e,normal:t,roughness:n,metalness:i}}let Mv=!1,Sv=null,bv=null,Tv=null,Ev=null,wv=null,zr=null;function Av(){return zr||(zr=(async()=>{try{[Sv,bv,Tv,Ev,wv]=await Promise.all([Br("metal013"),Br("plates"),Br("metal009"),Br("metal021"),(async()=>{const[r,e,t]=await Promise.all([Ri("/textures/fabric_color.jpg",$e),Ri("/textures/fabric_normal.jpg",ft),Ri("/textures/fabric_rough.jpg",ft)]);return{color:r,normal:e,roughness:t,metalness:t}})()]),Mv=!0}catch(r){console.error("Texture loading failed, using fallback",r)}})(),zr)}class Rv{renderer;sceneMgr;system;achievements;mainMenu;vab;flight;constructor(){Av(),this.renderer=new y_,this.sceneMgr=new T_,this.achievements=new xv,this.system=new jx;const e=2e26;this.system.add(new gv([0,0,0],[0,0,0],e)),this.system.add(new Kx([15e7,0,2e7],[0,0,47400])),this.system.add(new tv([3e8,0,-3e7],[0,0,3e4]));const t=[5e8,0,0],n=[0,0,24e3];this.system.add(new nv(t,n));const i=[t[0],0,t[2]+3844e5],s=[0,0,n[2]+1020];this.system.add(new sv(i,s)),this.system.add(new ov([75e7,5e8,-2e8],[0,0,19500])),this.system.add(new lv([15e8,-3e8,1e8],[0,0,13e3])),this.system.add(new uv([28e8,2e8,-2e8],[0,0,9700])),this.system.add(new dv([55e8,-1e8,3e8],[0,0,6800])),this.system.add(new fv([85e8,4e8,0],[0,0,5400])),document.getElementById("app").appendChild(this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.sceneMgr.camera.aspect=window.innerWidth/window.innerHeight,this.sceneMgr.camera.updateProjectionMatrix()}),this.achievements.onUnlock(o=>In.show(`Achievement: ${o}`)),this.preloadModels()}async preloadModels(){const{loadGLTF:e}=await rh(async()=>{const{loadGLTF:t}=await Promise.resolve().then(()=>iu);return{loadGLTF:t}},void 0);await e("/models/agena.glb",1)}start(){this.showMainMenu(),this.loop()}showMainMenu(){this.unmountCurrent(),this.mainMenu=new E_(()=>this.showFlight(),()=>this.showVab(),()=>this.showSettings()),this.mainMenu.mount()}showSettings(){const e=new yv(vv(),()=>e.unmount());e.mount()}showVab(){this.unmountCurrent(),this.vab=new Ix(e=>{const t=new nh(e);this.showFlight(t)}),this.vab.mount(),this.sceneMgr.scene.add(this.vab.scene)}async showFlight(e){this.unmountCurrent();const t=e?.assembly??new eo;if(!e){const i=Ke;t.addRoot({part:Vr("capsule_mk1"),position:[0,1.6*i,0],rotation:0,children:[]}),t.addRoot({part:Vr("tank_s_lfo"),position:[0,.8*i,0],rotation:0,children:[]}),t.addRoot({part:Vr("engine_ant"),position:[0,0,0],rotation:0,children:[]})}const n=new nh(t);this.flight=new qx(this.renderer,this.sceneMgr,this.system,n,this.achievements)}unmountCurrent(){this.mainMenu?.unmount(),this.mainMenu=void 0,this.vab&&(this.vab.unmount(),this.sceneMgr.scene.remove(this.vab.scene),this.vab=void 0),this.flight?.dispose(),this.flight=void 0}loop(){const e=.016666666666666666;this.sceneMgr.update(e),this.flight?.update(e),this.vab?this.renderer.three.render(this.vab.scene,this.vab.camera):this.renderer.three.render(this.sceneMgr.scene,this.sceneMgr.camera),requestAnimationFrame(()=>this.loop())}}try{new Rv().start()}catch(r){console.error("Failed to start StarWeld:",r),document.body.innerHTML=`<div style="color:white;padding:32px;font-family:monospace;">
      <h1>StarWeld failed to start</h1>
      <pre>${String(r)}</pre>
    </div>`}
//# sourceMappingURL=index-CBmXGt8U.js.map
