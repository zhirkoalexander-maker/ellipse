(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const pu="modulepreload",mu=function(r){return"/ellipse/"+r},Qa={},oh=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(e.map(l=>{if(l=mu(l),l in Qa)return;Qa[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":pu,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,f)=>{h.addEventListener("load",d),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ca="160",gu=0,tl=1,_u=2,ah=1,vu=2,Nn=3,Mn=0,je=1,be=2,ri=0,oi=1,gn=2,el=3,nl=4,xu=5,Pi=100,yu=101,Mu=102,il=103,sl=104,Su=200,bu=201,Tu=202,Eu=203,fa=204,pa=205,wu=206,Au=207,Ru=208,Cu=209,Pu=210,Lu=211,Iu=212,Du=213,Uu=214,Nu=0,Fu=1,Ou=2,Kr=3,ku=4,Hu=5,Bu=6,zu=7,Pa=0,Gu=1,Wu=2,ai=0,Vu=1,Xu=2,qu=3,lh=4,Yu=5,ju=6,rl="attached",Ku="detached",ch=300,gs=301,_s=302,ma=303,ga=304,so=306,Je=1e3,Ye=1001,$r=1002,Ie=1003,_a=1004,Xr=1005,$e=1006,hh=1007,Oi=1008,li=1009,$u=1010,Zu=1011,La=1012,uh=1013,ii=1014,Fn=1015,js=1016,dh=1017,fh=1018,Ui=1020,Ju=1021,nn=1023,Qu=1024,td=1025,Ni=1026,vs=1027,ed=1028,ph=1029,nd=1030,mh=1031,gh=1033,go=33776,_o=33777,vo=33778,xo=33779,ol=35840,al=35841,ll=35842,cl=35843,_h=36196,hl=37492,ul=37496,dl=37808,fl=37809,pl=37810,ml=37811,gl=37812,_l=37813,vl=37814,xl=37815,yl=37816,Ml=37817,Sl=37818,bl=37819,Tl=37820,El=37821,yo=36492,wl=36494,Al=36495,id=36283,Rl=36284,Cl=36285,Pl=36286,Ks=2300,xs=2301,Mo=2302,Ll=2400,Il=2401,Dl=2402,sd=2500,rd=0,vh=1,va=2,xh=3e3,Fi=3001,od=3200,ad=3201,Ia=0,ld=1,un="",$t="srgb",fe="srgb-linear",Da="display-p3",ro="display-p3-linear",Zr="linear",ce="srgb",Jr="rec709",Qr="p3",zi=7680,Ul=519,cd=512,hd=513,ud=514,yh=515,dd=516,fd=517,pd=518,md=519,xa=35044,Nl="300 es",ya=1035,On=2e3,to=2001;class Es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fl=1234567;const Vs=Math.PI/180,ys=180/Math.PI;function vn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[r&255]+ke[r>>8&255]+ke[r>>16&255]+ke[r>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Ge(r,t,e){return Math.max(t,Math.min(e,r))}function Ua(r,t){return(r%t+t)%t}function gd(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function _d(r,t,e){return r!==t?(e-r)/(t-r):0}function Xs(r,t,e){return(1-e)*r+e*t}function vd(r,t,e,n){return Xs(r,t,1-Math.exp(-e*n))}function xd(r,t=1){return t-Math.abs(Ua(r,t*2)-t)}function yd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Md(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Sd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function bd(r,t){return r+Math.random()*(t-r)}function Td(r){return r*(.5-Math.random())}function Ed(r){r!==void 0&&(Fl=r);let t=Fl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wd(r){return r*Vs}function Ad(r){return r*ys}function Ma(r){return(r&r-1)===0&&r!==0}function Rd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function eo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Cd(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function se(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Pd={DEG2RAD:Vs,RAD2DEG:ys,generateUUID:vn,clamp:Ge,euclideanModulo:Ua,mapLinear:gd,inverseLerp:_d,lerp:Xs,damp:vd,pingpong:xd,smoothstep:yd,smootherstep:Md,randInt:Sd,randFloat:bd,randFloatSpread:Td,seededRandom:Ed,degToRad:wd,radToDeg:Ad,isPowerOfTwo:Ma,ceilPowerOfTwo:Rd,floorPowerOfTwo:eo,setQuaternionFromProperEuler:Cd,normalize:se,denormalize:yn};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,i,s,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],v=i[1],x=i[4],S=i[7],b=i[2],A=i[5],R=i[8];return s[0]=o*_+a*v+l*b,s[3]=o*g+a*x+l*A,s[6]=o*p+a*S+l*R,s[1]=c*_+u*v+h*b,s[4]=c*g+u*x+h*A,s[7]=c*p+u*S+h*R,s[2]=d*_+f*v+m*b,s[5]=d*g+f*x+m*A,s[8]=d*p+f*S+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,m=e*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(So.makeScale(t,e)),this}rotate(t){return this.premultiply(So.makeRotation(-t)),this}translate(t,e){return this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const So=new jt;function Mh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function $s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ld(){const r=$s("canvas");return r.style.display="block",r}const Ol={};function qs(r){r in Ol||(Ol[r]=!0,console.warn(r))}const kl=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hl=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sr={[fe]:{transfer:Zr,primaries:Jr,toReference:r=>r,fromReference:r=>r},[$t]:{transfer:ce,primaries:Jr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ro]:{transfer:Zr,primaries:Qr,toReference:r=>r.applyMatrix3(Hl),fromReference:r=>r.applyMatrix3(kl)},[Da]:{transfer:ce,primaries:Qr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Hl),fromReference:r=>r.applyMatrix3(kl).convertLinearToSRGB()}},Id=new Set([fe,ro]),Qt={enabled:!0,_workingColorSpace:fe,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Id.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=sr[t].toReference,i=sr[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return sr[r].primaries},getTransfer:function(r){return r===un?Zr:sr[r].transfer}};function fs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Gi;class Sh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=$s("canvas")),Gi.width=t.width,Gi.height=t.height;const n=Gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$s("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=fs(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fs(e[n]/255)*255):e[n]=fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dd=0;class bh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=vn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(To(i[o].image)):s.push(To(i[o]))}else s=To(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function To(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ud=0;class Te extends Es{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Ye,i=Ye,s=$e,o=Oi,a=nn,l=li,c=Te.DEFAULT_ANISOTROPY,u=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=vn(),this.name="",this.source=new bh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Fi?$t:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Je:t.x=t.x-Math.floor(t.x);break;case Ye:t.x=t.x<0?0:1;break;case $r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Je:t.y=t.y-Math.floor(t.y);break;case Ye:t.y=t.y<0?0:1;break;case $r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$t?Fi:xh}set encoding(t){qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fi?$t:un}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=ch;Te.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(f+1)/2,b=(p+1)/2,A=(u+d)/4,R=(h+_)/4,B=(m+g)/4;return x>S&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=R/n):S>b?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=B/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=R/s,i=B/s),this.set(n,i,s,e),this}let v=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nd extends Es{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(qs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fi?$t:un),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Nd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Th extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fd extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ze{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let g=1-a;const p=l*d+c*f+u*m+h*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),A=Math.atan2(b,p*v);g=Math.sin(g*A)/b,a=Math.sin(a*A)/b}const S=a*v;if(l=l*g+d*S,c=c*g+f*S,u=u*g+m*S,h=h*g+_*S,g===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-a*f,t[e+2]=c*m+u*f+a*d-l*h,t[e+3]=u*m-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Eo.copy(this).projectOnVector(t),this.sub(Eo)}reflect(t){return this.sub(Eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new C,Bl=new Ze;class rn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),or.subVectors(this.max,Is),Wi.subVectors(t.a,Is),Vi.subVectors(t.b,Is),Xi.subVectors(t.c,Is),Gn.subVectors(Vi,Wi),Wn.subVectors(Xi,Vi),mi.subVectors(Wi,Xi);let e=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-mi.z,mi.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,mi.z,0,-mi.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-mi.y,mi.x,0];return!wo(e,Wi,Vi,Xi,or)||(e=[1,0,0,0,1,0,0,0,1],!wo(e,Wi,Vi,Xi,or))?!1:(ar.crossVectors(Gn,Wn),e=[ar.x,ar.y,ar.z],wo(e,Wi,Vi,Xi,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new C,new C,new C,new C,new C,new C,new C,new C],fn=new C,rr=new rn,Wi=new C,Vi=new C,Xi=new C,Gn=new C,Wn=new C,mi=new C,Is=new C,or=new C,ar=new C,gi=new C;function wo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){gi.fromArray(r,s);const a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Od=new rn,Ds=new C,Ao=new C;class Tn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ds,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Ao)),this.expandByPoint(Ds.copy(t.center).sub(Ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new C,Ro=new C,lr=new C,Vn=new C,Co=new C,cr=new C,Po=new C;class oo{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ro.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Ro);const s=t.distanceTo(e)*.5,o=-this.direction.dot(lr),a=Vn.dot(this.direction),l=-Vn.dot(lr),c=Vn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ro).addScaledVector(lr,d),f}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,i,s){Co.subVectors(e,t),cr.subVectors(n,t),Po.crossVectors(Co,cr);let o=this.direction.dot(Po),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const l=a*this.direction.dot(cr.crossVectors(Vn,cr));if(l<0)return null;const c=a*this.direction.dot(Co.cross(Vn));if(c<0||l+c>o)return null;const u=-a*Vn.dot(Po);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(t,e,n,i,s,o,a,l,c,u,h,d,f,m,_,g){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,d,f,m,_,g)}set(t,e,n,i,s,o,a,l,c,u,h,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/qi.setFromMatrixColumn(t,0).length(),s=1/qi.setFromMatrixColumn(t,1).length(),o=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=m*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kd,t,Hd)}lookAt(t,e,n){const i=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Xn.crossVectors(n,tn),Xn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Xn.crossVectors(n,tn)),Xn.normalize(),hr.crossVectors(tn,Xn),i[0]=Xn.x,i[4]=hr.x,i[8]=tn.x,i[1]=Xn.y,i[5]=hr.y,i[9]=tn.y,i[2]=Xn.z,i[6]=hr.z,i[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],x=n[7],S=n[11],b=n[15],A=i[0],R=i[4],B=i[8],y=i[12],T=i[1],D=i[5],N=i[9],Y=i[13],P=i[2],F=i[6],W=i[10],Z=i[14],K=i[3],J=i[7],tt=i[11],ct=i[15];return s[0]=o*A+a*T+l*P+c*K,s[4]=o*R+a*D+l*F+c*J,s[8]=o*B+a*N+l*W+c*tt,s[12]=o*y+a*Y+l*Z+c*ct,s[1]=u*A+h*T+d*P+f*K,s[5]=u*R+h*D+d*F+f*J,s[9]=u*B+h*N+d*W+f*tt,s[13]=u*y+h*Y+d*Z+f*ct,s[2]=m*A+_*T+g*P+p*K,s[6]=m*R+_*D+g*F+p*J,s[10]=m*B+_*N+g*W+p*tt,s[14]=m*y+_*Y+g*Z+p*ct,s[3]=v*A+x*T+S*P+b*K,s[7]=v*R+x*D+S*F+b*J,s[11]=v*B+x*N+S*W+b*tt,s[15]=v*y+x*Y+S*Z+b*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+e*c*h-e*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=h*g*c-_*d*c+_*l*f-a*g*f-h*l*p+a*d*p,x=m*d*c-u*g*c-m*l*f+o*g*f+u*l*p-o*d*p,S=u*_*c-m*h*c+m*a*f-o*_*f-u*a*p+o*h*p,b=m*h*l-u*_*l-m*a*d+o*_*d+u*a*g-o*h*g,A=e*v+n*x+i*S+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=v*R,t[1]=(_*d*s-h*g*s-_*i*f+n*g*f+h*i*p-n*d*p)*R,t[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*R,t[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*R,t[4]=x*R,t[5]=(u*g*s-m*d*s+m*i*f-e*g*f-u*i*p+e*d*p)*R,t[6]=(m*l*s-o*g*s-m*i*c+e*g*c+o*i*p-e*l*p)*R,t[7]=(o*d*s-u*l*s+u*i*c-e*d*c-o*i*f+e*l*f)*R,t[8]=S*R,t[9]=(m*h*s-u*_*s-m*n*f+e*_*f+u*n*p-e*h*p)*R,t[10]=(o*_*s-m*a*s+m*n*c-e*_*c-o*n*p+e*a*p)*R,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*f-e*a*f)*R,t[12]=b*R,t[13]=(u*_*i-m*h*i+m*n*d-e*_*d-u*n*g+e*h*g)*R,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*g-e*a*g)*R,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,m=s*h,_=o*u,g=o*h,p=a*h,v=l*c,x=l*u,S=l*h,b=n.x,A=n.y,R=n.z;return i[0]=(1-(_+p))*b,i[1]=(f+S)*b,i[2]=(m-x)*b,i[3]=0,i[4]=(f-S)*A,i[5]=(1-(d+p))*A,i[6]=(g+v)*A,i[7]=0,i[8]=(m+x)*R,i[9]=(g-v)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=qi.set(i[0],i[1],i[2]).length();const o=qi.set(i[4],i[5],i[6]).length(),a=qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],pn.copy(this);const c=1/s,u=1/o,h=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,e.setFromRotationMatrix(pn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=On){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(a===On)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===to)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=On){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),d=(e+t)*c,f=(n+i)*u;let m,_;if(a===On)m=(o+s)*h,_=-2*h;else if(a===to)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qi=new C,pn=new qt,kd=new C(0,0,0),Hd=new C(1,1,1),Xn=new C,hr=new C,tn=new C,zl=new qt,Gl=new Ze;class ao{constructor(t=0,e=0,n=0,i=ao.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ao.DEFAULT_ORDER="XYZ";class Eh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bd=0;const Wl=new C,Yi=new Ze,Ln=new qt,ur=new C,Us=new C,zd=new C,Gd=new Ze,Vl=new C(1,0,0),Xl=new C(0,1,0),ql=new C(0,0,1),Wd={type:"added"},Vd={type:"removed"};class he extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new C,e=new ao,n=new Ze,i=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qt},normalMatrix:{value:new jt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Xl,t)}rotateZ(t){return this.rotateOnAxis(ql,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Xl,t)}translateZ(t){return this.translateOnAxis(ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Us,ur,this.up):Ln.lookAt(ur,Us,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}he.DEFAULT_UP=new C(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new C,In=new C,Lo=new C,Dn=new C,ji=new C,Ki=new C,Yl=new C,Io=new C,Do=new C,Uo=new C;let dr=!1;class hn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){mn.subVectors(i,e),In.subVectors(n,e),Lo.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(In),l=mn.dot(Lo),c=In.dot(In),u=In.dot(Lo),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(t,e,n,i,s,o,a,l){return dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dr=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),In.subVectors(t,e),mn.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),mn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dr=!0),hn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ji.subVectors(i,n),Ki.subVectors(s,n),Io.subVectors(t,n);const l=ji.dot(Io),c=Ki.dot(Io);if(l<=0&&c<=0)return e.copy(n);Do.subVectors(t,i);const u=ji.dot(Do),h=Ki.dot(Do);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ji,o);Uo.subVectors(t,s);const f=ji.dot(Uo),m=Ki.dot(Uo);if(m>=0&&f<=m)return e.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Ki,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Yl.subVectors(s,i),a=(h-u)/(h-u+(f-m)),e.copy(i).addScaledVector(Yl,a);const p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ji,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function No(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=Ua(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=No(o,s,t+1/3),this.g=No(o,s,t),this.b=No(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=$t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$t){const n=wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}copyLinearToSRGB(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$t){return Qt.fromWorkingColorSpace(He.copy(this),t),Math.round(Ge(He.r*255,0,255))*65536+Math.round(Ge(He.g*255,0,255))*256+Math.round(Ge(He.b*255,0,255))}getHexString(t=$t){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(He.copy(this),e);const n=He.r,i=He.g,s=He.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=$t){Qt.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,i=He.b;return t!==$t?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(fr);const n=Xs(qn.h,fr.h,e),i=Xs(qn.s,fr.s,e),s=Xs(qn.l,fr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Pt;Pt.NAMES=wh;let Xd=0;class dn extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=oi,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ge extends dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new C,pr=new kt;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xa&&(t.usage=this.usage),t}}class Ah extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rh extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qd=0;const ln=new qt,Fo=new he,$i=new C,en=new rn,Ns=new rn,Le=new C;class Ce extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mh(t)?Rh:Ah)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(en.min,Ns.min),en.expandByPoint(Le),Le.addVectors(en.max,Ns.max),en.expandByPoint(Le)):(en.expandByPoint(Ns.min),en.expandByPoint(Ns.max))}en.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Le.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Le.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(t,c),Le.add($i)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new C,u[T]=new C;const h=new C,d=new C,f=new C,m=new kt,_=new kt,g=new kt,p=new C,v=new C;function x(T,D,N){h.fromArray(i,T*3),d.fromArray(i,D*3),f.fromArray(i,N*3),m.fromArray(o,T*2),_.fromArray(o,D*2),g.fromArray(o,N*2),d.sub(h),f.sub(h),_.sub(m),g.sub(m);const Y=1/(_.x*g.y-g.x*_.y);isFinite(Y)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(Y),v.copy(f).multiplyScalar(_.x).addScaledVector(d,-g.x).multiplyScalar(Y),c[T].add(p),c[D].add(p),c[N].add(p),u[T].add(v),u[D].add(v),u[N].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,D=S.length;T<D;++T){const N=S[T],Y=N.start,P=N.count;for(let F=Y,W=Y+P;F<W;F+=3)x(n[F+0],n[F+1],n[F+2])}const b=new C,A=new C,R=new C,B=new C;function y(T){R.fromArray(s,T*3),B.copy(R);const D=c[T];b.copy(D),b.sub(R.multiplyScalar(R.dot(D))).normalize(),A.crossVectors(B,D);const Y=A.dot(u[T])<0?-1:1;l[T*4]=b.x,l[T*4+1]=b.y,l[T*4+2]=b.z,l[T*4+3]=Y}for(let T=0,D=S.length;T<D;++T){const N=S[T],Y=N.start,P=N.count;for(let F=Y,W=Y+P;F<W;F+=3)y(n[F+0]),y(n[F+1]),y(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new Ee(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new qt,_i=new oo,mr=new Tn,Kl=new C,Zi=new C,Ji=new C,Qi=new C,Oo=new C,gr=new C,_r=new kt,vr=new kt,xr=new kt,$l=new C,Zl=new C,Jl=new C,yr=new C,Mr=new C;class mt extends he{constructor(t=new Ce,e=new ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){gr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Oo.fromBufferAttribute(h,t),o?gr.addScaledVector(Oo,u):gr.addScaledVector(Oo.sub(e),u))}e.add(gr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),_i.copy(t.ray).recast(t.near),!(mr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(mr,Kl)===null||_i.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&(jl.copy(s).invert(),_i.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,b=x;S<b;S+=3){const A=a.getX(S),R=a.getX(S+1),B=a.getX(S+2);i=Sr(this,p,t,n,c,u,h,A,R,B),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),x=a.getX(g+1),S=a.getX(g+2);i=Sr(this,o,t,n,c,u,h,v,x,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,b=x;S<b;S+=3){const A=S,R=S+1,B=S+2;i=Sr(this,p,t,n,c,u,h,A,R,B),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,x=g+1,S=g+2;i=Sr(this,o,t,n,c,u,h,v,x,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Yd(r,t,e,n,i,s,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Mn,a),l===null)return null;Mr.copy(a),Mr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Mr);return c<e.near||c>e.far?null:{distance:c,point:Mr.clone(),object:r}}function Sr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Zi),r.getVertexPosition(l,Ji),r.getVertexPosition(c,Qi);const u=Yd(r,t,e,n,Zi,Ji,Qi,yr);if(u){i&&(_r.fromBufferAttribute(i,a),vr.fromBufferAttribute(i,l),xr.fromBufferAttribute(i,c),u.uv=hn.getInterpolation(yr,Zi,Ji,Qi,_r,vr,xr,new kt)),s&&(_r.fromBufferAttribute(s,a),vr.fromBufferAttribute(s,l),xr.fromBufferAttribute(s,c),u.uv1=hn.getInterpolation(yr,Zi,Ji,Qi,_r,vr,xr,new kt),u.uv2=u.uv1),o&&($l.fromBufferAttribute(o,a),Zl.fromBufferAttribute(o,l),Jl.fromBufferAttribute(o,c),u.normal=hn.getInterpolation(yr,Zi,Ji,Qi,$l,Zl,Jl,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new C,materialIndex:0};hn.getNormal(Zi,Ji,Qi,h.normal),u.face=h}return u}class hi extends Ce{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(h,2));function m(_,g,p,v,x,S,b,A,R,B,y){const T=S/R,D=b/B,N=S/2,Y=b/2,P=A/2,F=R+1,W=B+1;let Z=0,K=0;const J=new C;for(let tt=0;tt<W;tt++){const ct=tt*D-Y;for(let V=0;V<F;V++){const k=V*T-N;J[_]=k*v,J[g]=ct*x,J[p]=P,c.push(J.x,J.y,J.z),J[_]=0,J[g]=0,J[p]=A>0?1:-1,u.push(J.x,J.y,J.z),h.push(V/R),h.push(1-tt/B),Z+=1}}for(let tt=0;tt<B;tt++)for(let ct=0;ct<R;ct++){const V=d+ct+F*tt,k=d+ct+F*(tt+1),$=d+(ct+1)+F*(tt+1),I=d+(ct+1)+F*tt;l.push(V,k,I),l.push(k,$,I),K+=6}a.addGroup(f,K,y),f+=K,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function qe(r){const t={};for(let e=0;e<r.length;e++){const n=Ms(r[e]);for(const i in n)t[i]=n[i]}return t}function jd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ch(r){return r.getRenderTarget()===null?r.outputColorSpace:Qt.workingColorSpace}const Kd={clone:Ms,merge:qe};var $d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ph extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class We extends Ph{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ts=-90,es=1;class Jd extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(ts,es,t,e);i.layers=this.layers,this.add(i);const s=new We(ts,es,t,e);s.layers=this.layers,this.add(s);const o=new We(ts,es,t,e);o.layers=this.layers,this.add(o);const a=new We(ts,es,t,e);a.layers=this.layers,this.add(a);const l=new We(ts,es,t,e);l.layers=this.layers,this.add(l);const c=new We(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Lh extends Te{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qd extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(qs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Fi?$t:un),this.texture=new Lh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hi(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:ri});s.uniforms.tEquirect.value=e;const o=new mt(i,s),a=e.minFilter;return e.minFilter===Oi&&(e.minFilter=$e),new Jd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const ko=new C,tf=new C,ef=new jt;class Ri{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ko.subVectors(n,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ko),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ef.getNormalMatrix(t),i=this.coplanarPoint(ko).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Tn,br=new C;class Na{constructor(t=new Ri,e=new Ri,n=new Ri,i=new Ri,s=new Ri,o=new Ri){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],v=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,g-f,S-p).normalize(),n[1].setComponents(l+s,d+c,g+f,S+p).normalize(),n[2].setComponents(l+o,d+u,g+m,S+v).normalize(),n[3].setComponents(l-o,d-u,g-m,S-v).normalize(),n[4].setComponents(l-a,d-h,g-_,S-x).normalize(),e===On)n[5].setComponents(l+a,d+h,g+_,S+x).normalize();else if(e===to)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(br.x=i.normal.x>0?t.max.x:t.min.x,br.y=i.normal.y>0?t.max.y:t.min.y,br.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ih(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function nf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const d=u.array,f=u._updateRange,m=u.updateRanges;if(r.bindBuffer(h,c),f.count===-1&&m.length===0&&r.bufferSubData(h,0,d),m.length!==0){for(let _=0,g=m.length;_<g;_++){const p=m[_];e?r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Fa extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const v=p*d-o;for(let x=0;x<c;x++){const S=x*h-s;m.push(S,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,S=v+c*(p+1),b=v+1+c*(p+1),A=v+1+c*p;f.push(x,S,A),f.push(S,b,A)}this.setIndex(f),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.width,t.height,t.widthSegments,t.heightSegments)}}var sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
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
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
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
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
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
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_f=`#ifdef USE_IRIDESCENCE
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
#endif`,vf=`#ifdef USE_BUMPMAP
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Af=`#define PI 3.141592653589793
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
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cf=`vec3 transformedNormal = objectNormal;
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
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`
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
}`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
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
}`,qf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jf=`LambertMaterial material;
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
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
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
#endif`,ip=`struct PhysicalMaterial {
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
}`,sp=`
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pp=`#if defined( USE_POINTS_UV )
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
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
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
#endif`,yp=`#ifdef USE_MORPHTARGETS
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
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
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
#endif`,Ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gp=`float getShadowMask() {
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
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
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
}`,hm=`#if DEPTH_PACKING == 3200
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
}`,um=`#define DISTANCE
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
}`,dm=`#define DISTANCE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,ym=`#define LAMBERT
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
}`,Mm=`#define MATCAP
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
}`,Sm=`#define MATCAP
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
}`,bm=`#define NORMAL
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
}`,Tm=`#define NORMAL
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
}`,Em=`#define PHONG
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
}`,wm=`#define PHONG
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
}`,Am=`#define STANDARD
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
}`,Rm=`#define STANDARD
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
}`,Cm=`#define TOON
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
}`,Pm=`#define TOON
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
}`,Im=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Um=`uniform vec3 color;
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
}`,Nm=`uniform float rotation;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:of,alphamap_pars_fragment:af,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:hf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:_f,bumpmap_pars_fragment:vf,clipping_planes_fragment:xf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:Sf,color_fragment:bf,color_pars_fragment:Tf,color_pars_vertex:Ef,color_vertex:wf,common:Af,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Cf,displacementmap_pars_vertex:Pf,displacementmap_vertex:Lf,emissivemap_fragment:If,emissivemap_pars_fragment:Df,colorspace_fragment:Uf,colorspace_pars_fragment:Nf,envmap_fragment:Ff,envmap_common_pars_fragment:Of,envmap_pars_fragment:kf,envmap_pars_vertex:Hf,envmap_physical_pars_fragment:Zf,envmap_vertex:Bf,fog_vertex:zf,fog_pars_vertex:Gf,fog_fragment:Wf,fog_pars_fragment:Vf,gradientmap_pars_fragment:Xf,lightmap_fragment:qf,lightmap_pars_fragment:Yf,lights_lambert_fragment:jf,lights_lambert_pars_fragment:Kf,lights_pars_begin:$f,lights_toon_fragment:Jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:tp,lights_phong_pars_fragment:ep,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:sp,lights_fragment_maps:rp,lights_fragment_end:op,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphcolor_vertex:_p,morphnormal_vertex:vp,morphtarget_pars_vertex:xp,morphtarget_vertex:yp,normal_fragment_begin:Mp,normal_fragment_maps:Sp,normal_pars_fragment:bp,normal_pars_vertex:Tp,normal_vertex:Ep,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Ap,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Pp,opaque_fragment:Lp,packing:Ip,premultiplied_alpha_fragment:Dp,project_vertex:Up,dithering_fragment:Np,dithering_pars_fragment:Fp,roughnessmap_fragment:Op,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Bp,shadowmap_vertex:zp,shadowmask_pars_fragment:Gp,skinbase_vertex:Wp,skinning_pars_vertex:Vp,skinning_vertex:Xp,skinnormal_vertex:qp,specularmap_fragment:Yp,specularmap_pars_fragment:jp,tonemapping_fragment:Kp,tonemapping_pars_fragment:$p,transmission_fragment:Zp,transmission_pars_fragment:Jp,uv_pars_fragment:Qp,uv_pars_vertex:tm,uv_vertex:em,worldpos_vertex:nm,background_vert:im,background_frag:sm,backgroundCube_vert:rm,backgroundCube_frag:om,cube_vert:am,cube_frag:lm,depth_vert:cm,depth_frag:hm,distanceRGBA_vert:um,distanceRGBA_frag:dm,equirect_vert:fm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:_m,meshbasic_frag:vm,meshlambert_vert:xm,meshlambert_frag:ym,meshmatcap_vert:Mm,meshmatcap_frag:Sm,meshnormal_vert:bm,meshnormal_frag:Tm,meshphong_vert:Em,meshphong_frag:wm,meshphysical_vert:Am,meshphysical_frag:Rm,meshtoon_vert:Cm,meshtoon_frag:Pm,points_vert:Lm,points_frag:Im,shadow_vert:Dm,shadow_frag:Um,sprite_vert:Nm,sprite_frag:Fm},pt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},xn={basic:{uniforms:qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:qe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:qe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:qe([pt.points,pt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:qe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:qe([pt.common,pt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:qe([pt.sprite,pt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:qe([pt.common,pt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:qe([pt.lights,pt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};xn.physical={uniforms:qe([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Tr={r:0,b:0,g:0};function Om(r,t,e,n,i,s,o){const a=new Pt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function m(g,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===so)?(u===void 0&&(u=new mt(new hi(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ms(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ce,(h!==x||d!==x.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new mt(new Fa(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ms(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,p){g.getRGB(Tr,Ch(r)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:m}}function km(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function h(P,F,W,Z,K){let J=!1;if(o){const tt=_(Z,W,F);c!==tt&&(c=tt,f(c.object)),J=p(P,Z,W,K),J&&v(P,Z,W,K)}else{const tt=F.wireframe===!0;(c.geometry!==Z.id||c.program!==W.id||c.wireframe!==tt)&&(c.geometry=Z.id,c.program=W.id,c.wireframe=tt,J=!0)}K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,B(P,F,W,Z),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function m(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,F,W){const Z=W.wireframe===!0;let K=a[P.id];K===void 0&&(K={},a[P.id]=K);let J=K[F.id];J===void 0&&(J={},K[F.id]=J);let tt=J[Z];return tt===void 0&&(tt=g(d()),J[Z]=tt),tt}function g(P){const F=[],W=[],Z=[];for(let K=0;K<i;K++)F[K]=0,W[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:Z,object:P,attributes:{},index:null}}function p(P,F,W,Z){const K=c.attributes,J=F.attributes;let tt=0;const ct=W.getAttributes();for(const V in ct)if(ct[V].location>=0){const $=K[V];let I=J[V];if(I===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(I=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(I=P.instanceColor)),$===void 0||$.attribute!==I||I&&$.data!==I.data)return!0;tt++}return c.attributesNum!==tt||c.index!==Z}function v(P,F,W,Z){const K={},J=F.attributes;let tt=0;const ct=W.getAttributes();for(const V in ct)if(ct[V].location>=0){let $=J[V];$===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&($=P.instanceColor));const I={};I.attribute=$,$&&$.data&&(I.data=$.data),K[V]=I,tt++}c.attributes=K,c.attributesNum=tt,c.index=Z}function x(){const P=c.newAttributes;for(let F=0,W=P.length;F<W;F++)P[F]=0}function S(P){b(P,0)}function b(P,F){const W=c.newAttributes,Z=c.enabledAttributes,K=c.attributeDivisors;W[P]=1,Z[P]===0&&(r.enableVertexAttribArray(P),Z[P]=1),K[P]!==F&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),K[P]=F)}function A(){const P=c.newAttributes,F=c.enabledAttributes;for(let W=0,Z=F.length;W<Z;W++)F[W]!==P[W]&&(r.disableVertexAttribArray(W),F[W]=0)}function R(P,F,W,Z,K,J,tt){tt===!0?r.vertexAttribIPointer(P,F,W,K,J):r.vertexAttribPointer(P,F,W,Z,K,J)}function B(P,F,W,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const K=Z.attributes,J=W.getAttributes(),tt=F.defaultAttributeValues;for(const ct in J){const V=J[ct];if(V.location>=0){let k=K[ct];if(k===void 0&&(ct==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),ct==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){const $=k.normalized,I=k.itemSize,dt=e.get(k);if(dt===void 0)continue;const ft=dt.buffer,Ut=dt.type,It=dt.bytesPerElement,Rt=n.isWebGL2===!0&&(Ut===r.INT||Ut===r.UNSIGNED_INT||k.gpuType===uh);if(k.isInterleavedBufferAttribute){const Et=k.data,z=Et.stride,ve=k.offset;if(Et.isInstancedInterleavedBuffer){for(let St=0;St<V.locationSize;St++)b(V.location+St,Et.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let St=0;St<V.locationSize;St++)S(V.location+St);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let St=0;St<V.locationSize;St++)R(V.location+St,I/V.locationSize,Ut,$,z*It,(ve+I/V.locationSize*St)*It,Rt)}else{if(k.isInstancedBufferAttribute){for(let Et=0;Et<V.locationSize;Et++)b(V.location+Et,k.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Et=0;Et<V.locationSize;Et++)S(V.location+Et);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let Et=0;Et<V.locationSize;Et++)R(V.location+Et,I/V.locationSize,Ut,$,I*It,I/V.locationSize*Et*It,Rt)}}else if(tt!==void 0){const $=tt[ct];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(V.location,$);break;case 3:r.vertexAttrib3fv(V.location,$);break;case 4:r.vertexAttrib4fv(V.location,$);break;default:r.vertexAttrib1fv(V.location,$)}}}}A()}function y(){N();for(const P in a){const F=a[P];for(const W in F){const Z=F[W];for(const K in Z)m(Z[K].object),delete Z[K];delete F[W]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;const F=a[P.id];for(const W in F){const Z=F[W];for(const K in Z)m(Z[K].object),delete Z[K];delete F[W]}delete a[P.id]}function D(P){for(const F in a){const W=a[F];if(W[P.id]===void 0)continue;const Z=W[P.id];for(const K in Z)m(Z[K].object),delete Z[K];delete W[P.id]}}function N(){Y(),u=!0,c!==l&&(c=l,f(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:Y,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:S,disableUnusedAttributes:A}}function Hm(r,t,e,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,h,d),e.update(h,s,d)}function c(u,h,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(u[m],h[m]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_];e.update(m,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Bm(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=o||t.has("OES_texture_float"),b=x&&S,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:A}}function zm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Ri,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const v=s?0:n,x=v*4;let S=p.clippingState||null;l.value=S,S=u(m,d,x,f);for(let b=0;b!==x;++b)S[b]=e[b];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,S=f;x!==_;++x,S+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Gm(r){let t=new WeakMap;function e(o,a){return a===ma?o.mapping=gs:a===ga&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ma||a===ga)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qd(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Oa extends Ph{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const us=4,Ql=[.125,.215,.35,.446,.526,.582],Li=20,Ho=new Oa,tc=new Pt;let Bo=null,zo=0,Go=0;const Ci=(1+Math.sqrt(5))/2,ns=1/Ci,ec=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ci,ns),new C(0,Ci,-ns),new C(ns,0,Ci),new C(-ns,0,Ci),new C(Ci,ns,0),new C(-Ci,ns,0)];class nc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Bo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bo,zo,Go),t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:js,format:nn,colorSpace:fe,depthBuffer:!1},i=ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(s)),this._blurMaterial=Vm(s,t,e)}return i}_compileMaterial(t){const e=new mt(this._lodPlanes[0],t);this._renderer.compile(e,Ho)}_sceneToCubeUV(t,e,n,i){const a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(tc),u.toneMapping=ai,u.autoClear=!1;const f=new ge({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),m=new mt(new hi,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(tc),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Er(i,v*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===gs||t.mapping===_s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ho)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ec[(i-1)%ec.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Li-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):Li;g>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Li}`);const p=[];let v=0;for(let R=0;R<Li;++R){const B=R/_,y=Math.exp(-B*B/2);p.push(y),R===0?v+=y:R<g&&(v+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const S=this._sizeLods[i],b=3*S*(i>x-us?i-x+us:0),A=4*(this._cubeSize-S);Er(e,b,A,3*S,2*S),l.setRenderTarget(e),l.render(h,Ho)}}function Wm(r){const t=[],e=[],n=[];let i=r;const s=r-us+1+Ql.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-us?l=Ql[o-r+us-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),x=new Float32Array(g*m*f),S=new Float32Array(p*m*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,B=A>2?0:-1,y=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];v.set(y,_*m*A),x.set(d,g*m*A);const T=[A,A,A,A,A,A];S.set(T,p*m*A)}const b=new Ce;b.setAttribute("position",new Ee(v,_)),b.setAttribute("uv",new Ee(x,g)),b.setAttribute("faceIndex",new Ee(S,p)),t.push(b),i>us&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ic(r,t,e){const n=new ki(r,t,e);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Vm(r,t,e){const n=new Float32Array(Li),i=new C(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ka(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function sc(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function rc(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ka(){return`

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
	`}function Xm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ma||l===ga,u=l===gs||l===_s;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new nc(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new nc(r));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function qm(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ym(r,t,e,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)t.update(d[m],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,S=v.length;x<S;x+=3){const b=v[x+0],A=v[x+1],R=v[x+2];d.push(b,A,A,R,R,b)}}else if(m!==void 0){const v=m.array;_=m.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const b=x+0,A=x+1,R=x+2;d.push(b,A,A,R,R,b)}}else return;const g=new(Mh(d)?Rh:Ah)(d,1);g.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function jm(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){r.drawElements(s,m,a,f*l),e.update(m,s,1)}function h(f,m,_){if(_===0)return;let g,p;if(i)g=r,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,a,f*l,_),e.update(m,s,_)}function d(f,m,_){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(f[p]/l,m[p]);else{g.multiDrawElementsWEBGL(s,m,0,a,f,0,_);let p=0;for(let v=0;v<_;v++)p+=m[v];e.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Km(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $m(r,t){return r[0]-t[0]}function Zm(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Jm(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let F=function(){Y.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var f=F;g!==void 0&&g.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],B=u.morphAttributes.color||[];let y=0;x===!0&&(y=1),S===!0&&(y=2),b===!0&&(y=3);let T=u.attributes.position.count*y,D=1;T>t.maxTextureSize&&(D=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const N=new Float32Array(T*D*4*_),Y=new Th(N,T,D,_);Y.type=Fn,Y.needsUpdate=!0;const P=y*4;for(let W=0;W<_;W++){const Z=A[W],K=R[W],J=B[W],tt=T*D*4*W;for(let ct=0;ct<Z.count;ct++){const V=ct*P;x===!0&&(o.fromBufferAttribute(Z,ct),N[tt+V+0]=o.x,N[tt+V+1]=o.y,N[tt+V+2]=o.z,N[tt+V+3]=0),S===!0&&(o.fromBufferAttribute(K,ct),N[tt+V+4]=o.x,N[tt+V+5]=o.y,N[tt+V+6]=o.z,N[tt+V+7]=0),b===!0&&(o.fromBufferAttribute(J,ct),N[tt+V+8]=o.x,N[tt+V+9]=o.y,N[tt+V+10]=o.z,N[tt+V+11]=J.itemSize===4?o.w:1)}}g={count:_,texture:Y,size:new kt(T,D)},s.set(u,g),u.addEventListener("dispose",F)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const m=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==m){_=[];for(let S=0;S<m;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<m;S++){const b=_[S];b[0]=S,b[1]=d[S]}_.sort(Zm);for(let S=0;S<8;S++)S<m&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort($m);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const b=a[S],A=b[0],R=b[1];A!==Number.MAX_SAFE_INTEGER&&R?(g&&u.getAttribute("morphTarget"+S)!==g[A]&&u.setAttribute("morphTarget"+S,g[A]),p&&u.getAttribute("morphNormal"+S)!==p[A]&&u.setAttribute("morphNormal"+S,p[A]),i[S]=R,v+=R):(g&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const x=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Qm(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Dh extends Te{constructor(t,e,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Ni,u!==Ni&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ni&&(n=ii),n===void 0&&u===vs&&(n=Ui),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=l!==void 0?l:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uh=new Te,Nh=new Dh(1,1);Nh.compareFunction=yh;const Fh=new Th,Oh=new Fd,kh=new Lh,oc=[],ac=[],lc=new Float32Array(16),cc=new Float32Array(9),hc=new Float32Array(4);function ws(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=oc[i];if(s===void 0&&(s=new Float32Array(i),oc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ae(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Re(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function lo(r,t){let e=ac[t];e===void 0&&(e=new Int32Array(t),ac[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function t0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function e0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2fv(this.addr,t),Re(e,t)}}function n0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;r.uniform3fv(this.addr,t),Re(e,t)}}function i0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4fv(this.addr,t),Re(e,t)}}function s0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;hc.set(n),r.uniformMatrix2fv(this.addr,!1,hc),Re(e,n)}}function r0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;cc.set(n),r.uniformMatrix3fv(this.addr,!1,cc),Re(e,n)}}function o0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;lc.set(n),r.uniformMatrix4fv(this.addr,!1,lc),Re(e,n)}}function a0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function l0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2iv(this.addr,t),Re(e,t)}}function c0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;r.uniform3iv(this.addr,t),Re(e,t)}}function h0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4iv(this.addr,t),Re(e,t)}}function u0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function d0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2uiv(this.addr,t),Re(e,t)}}function f0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;r.uniform3uiv(this.addr,t),Re(e,t)}}function p0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4uiv(this.addr,t),Re(e,t)}}function m0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Nh:Uh;e.setTexture2D(t||s,i)}function g0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Oh,i)}function _0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||kh,i)}function v0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Fh,i)}function x0(r){switch(r){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return o0;case 5124:case 35670:return a0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return v0}}function y0(r,t){r.uniform1fv(this.addr,t)}function M0(r,t){const e=ws(t,this.size,2);r.uniform2fv(this.addr,e)}function S0(r,t){const e=ws(t,this.size,3);r.uniform3fv(this.addr,e)}function b0(r,t){const e=ws(t,this.size,4);r.uniform4fv(this.addr,e)}function T0(r,t){const e=ws(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function E0(r,t){const e=ws(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function w0(r,t){const e=ws(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function A0(r,t){r.uniform1iv(this.addr,t)}function R0(r,t){r.uniform2iv(this.addr,t)}function C0(r,t){r.uniform3iv(this.addr,t)}function P0(r,t){r.uniform4iv(this.addr,t)}function L0(r,t){r.uniform1uiv(this.addr,t)}function I0(r,t){r.uniform2uiv(this.addr,t)}function D0(r,t){r.uniform3uiv(this.addr,t)}function U0(r,t){r.uniform4uiv(this.addr,t)}function N0(r,t,e){const n=this.cache,i=t.length,s=lo(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Re(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Uh,s[o])}function F0(r,t,e){const n=this.cache,i=t.length,s=lo(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Re(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Oh,s[o])}function O0(r,t,e){const n=this.cache,i=t.length,s=lo(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Re(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||kh,s[o])}function k0(r,t,e){const n=this.cache,i=t.length,s=lo(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Re(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Fh,s[o])}function H0(r){switch(r){case 5126:return y0;case 35664:return M0;case 35665:return S0;case 35666:return b0;case 35674:return T0;case 35675:return E0;case 35676:return w0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return I0;case 36295:return D0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return k0}}class B0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=x0(e.type)}}class z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H0(e.type)}}class G0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function uc(r,t){r.seq.push(t),r.map[t.id]=t}function W0(r,t,e){const n=r.name,i=n.length;for(Wo.lastIndex=0;;){const s=Wo.exec(n),o=Wo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){uc(e,c===void 0?new B0(a,r,t):new z0(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new G0(a),uc(e,h)),e=h}}}class qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);W0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function dc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const V0=37297;let X0=0;function q0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Y0(r){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(r);let n;switch(t===e?n="":t===Qr&&e===Jr?n="LinearDisplayP3ToLinearSRGB":t===Jr&&e===Qr&&(n="LinearSRGBToLinearDisplayP3"),r){case fe:case ro:return[n,"LinearTransferOETF"];case $t:case Da:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function fc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+q0(r.getShaderSource(t),o)}else return i}function j0(r,t){const e=Y0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function K0(r,t){let e;switch(t){case Vu:e="Linear";break;case Xu:e="Reinhard";break;case qu:e="OptimizedCineon";break;case lh:e="ACESFilmic";break;case ju:e="AgX";break;case Yu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function Z0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function J0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ds(r){return r!==""}function pc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(r){return r.replace(tg,ng)}const eg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ng(r,t){let e=Vt[t];if(e===void 0){const n=eg.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sa(e)}const ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(r){return r.replace(ig,sg)}function sg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _c(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===vu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function og(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case so:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ag(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function lg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Pa:t="ENVMAP_BLENDING_MULTIPLY";break;case Gu:t="ENVMAP_BLENDING_MIX";break;case Wu:t="ENVMAP_BLENDING_ADD";break}return t}function cg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hg(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=rg(e),c=og(e),u=ag(e),h=lg(e),d=cg(e),f=e.isWebGL2?"":$0(e),m=Z0(e),_=J0(s),g=i.createProgram();let p,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ds).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ds).join(`
`),v.length>0&&(v+=`
`)):(p=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),v=[f,_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ai?K0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,j0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),o=Sa(o),o=pc(o,e),o=mc(o,e),a=Sa(a),a=pc(a,e),a=mc(a,e),o=gc(o),a=gc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=x+p+o,b=x+v+a,A=dc(i,i.VERTEX_SHADER,S),R=dc(i,i.FRAGMENT_SHADER,b);i.attachShader(g,A),i.attachShader(g,R),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function B(N){if(r.debug.checkShaderErrors){const Y=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(R).trim();let W=!0,Z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,R);else{const K=fc(i,A,"vertex"),J=fc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+K+`
`+J)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(P===""||F==="")&&(Z=!1);Z&&(N.diagnostics={runnable:W,programLog:Y,vertexShader:{log:P,prefix:p},fragmentShader:{log:F,prefix:v}})}i.deleteShader(A),i.deleteShader(R),y=new qr(i,g),T=Q0(i,g)}let y;this.getUniforms=function(){return y===void 0&&B(this),y};let T;this.getAttributes=function(){return T===void 0&&B(this),T};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,V0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=X0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=R,this}let ug=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fg(t),e.set(t,n)),n}}class fg{constructor(t){this.id=ug++,this.code=t,this.usedTimes=0}}function pg(r,t,e,n,i,s,o){const a=new Eh,l=new dg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function g(y,T,D,N,Y){const P=N.fog,F=Y.geometry,W=y.isMeshStandardMaterial?N.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),K=Z&&Z.mapping===so?Z.image.height:null,J=m[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const tt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ct=tt!==void 0?tt.length:0;let V=0;F.morphAttributes.position!==void 0&&(V=1),F.morphAttributes.normal!==void 0&&(V=2),F.morphAttributes.color!==void 0&&(V=3);let k,$,I,dt;if(J){const De=xn[J];k=De.vertexShader,$=De.fragmentShader}else k=y.vertexShader,$=y.fragmentShader,l.update(y),I=l.getVertexShaderID(y),dt=l.getFragmentShaderID(y);const ft=r.getRenderTarget(),Ut=Y.isInstancedMesh===!0,It=Y.isBatchedMesh===!0,Rt=!!y.map,Et=!!y.matcap,z=!!Z,ve=!!y.aoMap,St=!!y.lightMap,Dt=!!y.bumpMap,Mt=!!y.normalMap,Zt=!!y.displacementMap,Nt=!!y.emissiveMap,w=!!y.metalnessMap,M=!!y.roughnessMap,G=y.anisotropy>0,at=y.clearcoat>0,st=y.iridescence>0,rt=y.sheen>0,bt=y.transmission>0,ut=G&&!!y.anisotropyMap,vt=at&&!!y.clearcoatMap,Lt=at&&!!y.clearcoatNormalMap,Ht=at&&!!y.clearcoatRoughnessMap,U=st&&!!y.iridescenceMap,ot=st&&!!y.iridescenceThicknessMap,nt=rt&&!!y.sheenColorMap,ht=rt&&!!y.sheenRoughnessMap,et=!!y.specularMap,H=!!y.specularColorMap,_t=!!y.specularIntensityMap,xt=bt&&!!y.transmissionMap,Tt=bt&&!!y.thicknessMap,gt=!!y.gradientMap,Q=!!y.alphaMap,L=y.alphaTest>0,lt=!!y.alphaHash,it=!!y.extensions,wt=!!F.attributes.uv1,At=!!F.attributes.uv2,Jt=!!F.attributes.uv3;let te=ai;return y.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(te=r.toneMapping),{isWebGL2:u,shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:$,defines:y.defines,customVertexShaderID:I,customFragmentShaderID:dt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:It,instancing:Ut,instancingColor:Ut&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:fe,map:Rt,matcap:Et,envMap:z,envMapMode:z&&Z.mapping,envMapCubeUVHeight:K,aoMap:ve,lightMap:St,bumpMap:Dt,normalMap:Mt,displacementMap:d&&Zt,emissiveMap:Nt,normalMapObjectSpace:Mt&&y.normalMapType===ld,normalMapTangentSpace:Mt&&y.normalMapType===Ia,metalnessMap:w,roughnessMap:M,anisotropy:G,anisotropyMap:ut,clearcoat:at,clearcoatMap:vt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Ht,iridescence:st,iridescenceMap:U,iridescenceThicknessMap:ot,sheen:rt,sheenColorMap:nt,sheenRoughnessMap:ht,specularMap:et,specularColorMap:H,specularIntensityMap:_t,transmission:bt,transmissionMap:xt,thicknessMap:Tt,gradientMap:gt,opaque:y.transparent===!1&&y.blending===oi,alphaMap:Q,alphaTest:L,alphaHash:lt,combine:y.combine,mapUv:Rt&&_(y.map.channel),aoMapUv:ve&&_(y.aoMap.channel),lightMapUv:St&&_(y.lightMap.channel),bumpMapUv:Dt&&_(y.bumpMap.channel),normalMapUv:Mt&&_(y.normalMap.channel),displacementMapUv:Zt&&_(y.displacementMap.channel),emissiveMapUv:Nt&&_(y.emissiveMap.channel),metalnessMapUv:w&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:ut&&_(y.anisotropyMap.channel),clearcoatMapUv:vt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ht&&_(y.sheenRoughnessMap.channel),specularMapUv:et&&_(y.specularMap.channel),specularColorMapUv:H&&_(y.specularColorMap.channel),specularIntensityMapUv:_t&&_(y.specularIntensityMap.channel),transmissionMapUv:xt&&_(y.transmissionMap.channel),thicknessMapUv:Tt&&_(y.thicknessMap.channel),alphaMapUv:Q&&_(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Mt||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:wt,vertexUv2s:At,vertexUv3s:Jt,pointsUvs:Y.isPoints===!0&&!!F.attributes.uv&&(Rt||Q),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:te,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Rt&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===be,flipSided:y.side===je,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:it&&y.extensions.derivatives===!0,extensionFragDepth:it&&y.extensions.fragDepth===!0,extensionDrawBuffers:it&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:it&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:it&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)T.push(D),T.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(v(T,y),x(T,y),T.push(r.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function x(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){const T=m[y.type];let D;if(T){const N=xn[T];D=Kd.clone(N.uniforms)}else D=y.uniforms;return D}function b(y,T){let D;for(let N=0,Y=c.length;N<Y;N++){const P=c[N];if(P.cacheKey===T){D=P,++D.usedTimes;break}}return D===void 0&&(D=new hg(r,T,y,s),c.push(D)),D}function A(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function B(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:b,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:B}}function mg(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function gg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function vc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,f,m,_,g){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},r[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function a(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||gg),n.length>1&&n.sort(d||vc),i.length>1&&i.sort(d||vc)}function u(){for(let h=t,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function _g(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new xc,r.set(n,[o])):i>=s.length?(o=new xc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function vg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Pt};break;case"SpotLight":e={position:new C,direction:new C,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function xg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let yg=0;function Mg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Sg(r,t){const e=new vg,n=xg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new C);const s=new C,o=new qt,a=new qt;function l(u,h){let d=0,f=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,g=0,p=0,v=0,x=0,S=0,b=0,A=0,R=0,B=0,y=0;u.sort(Mg);const T=h===!0?Math.PI:1;for(let N=0,Y=u.length;N<Y;N++){const P=u[N],F=P.color,W=P.intensity,Z=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=F.r*W*T,f+=F.g*W*T,m+=F.b*W*T;else if(P.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(P.sh.coefficients[J],W);y++}else if(P.isDirectionalLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const tt=P.shadow,ct=n.get(P);ct.shadowBias=tt.bias,ct.shadowNormalBias=tt.normalBias,ct.shadowRadius=tt.radius,ct.shadowMapSize=tt.mapSize,i.directionalShadow[_]=ct,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=P.shadow.matrix,S++}i.directional[_]=J,_++}else if(P.isSpotLight){const J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(F).multiplyScalar(W*T),J.distance=Z,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,i.spot[p]=J;const tt=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,tt.updateMatrices(P),P.castShadow&&B++),i.spotLightMatrix[p]=tt.matrix,P.castShadow){const ct=n.get(P);ct.shadowBias=tt.bias,ct.shadowNormalBias=tt.normalBias,ct.shadowRadius=tt.radius,ct.shadowMapSize=tt.mapSize,i.spotShadow[p]=ct,i.spotShadowMap[p]=K,A++}p++}else if(P.isRectAreaLight){const J=e.get(P);J.color.copy(F).multiplyScalar(W),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=J,v++}else if(P.isPointLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*T),J.distance=P.distance,J.decay=P.decay,P.castShadow){const tt=P.shadow,ct=n.get(P);ct.shadowBias=tt.bias,ct.shadowNormalBias=tt.normalBias,ct.shadowRadius=tt.radius,ct.shadowMapSize=tt.mapSize,ct.shadowCameraNear=tt.camera.near,ct.shadowCameraFar=tt.camera.far,i.pointShadow[g]=ct,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=J,g++}else if(P.isHemisphereLight){const J=e.get(P);J.skyColor.copy(P.color).multiplyScalar(W*T),J.groundColor.copy(P.groundColor).multiplyScalar(W*T),i.hemi[x]=J,x++}}v>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const D=i.hash;(D.directionalLength!==_||D.pointLength!==g||D.spotLength!==p||D.rectAreaLength!==v||D.hemiLength!==x||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==A||D.numSpotMaps!==R||D.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=g,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=A+R-B,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=y,D.directionalLength=_,D.pointLength=g,D.spotLength=p,D.rectAreaLength=v,D.hemiLength=x,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=A,D.numSpotMaps=R,D.numLightProbes=y,i.version=yg++)}function c(u,h){let d=0,f=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const S=u[v];if(S.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(S.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:i}}function yc(r,t){const e=new Sg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bg(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new yc(r,t),e.set(s,[l])):o>=a.length?(l=new yc(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Tg extends dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Eg extends dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
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
}`;function Rg(r,t,e){let n=new Na;const i=new kt,s=new kt,o=new re,a=new Tg({depthPacking:ad}),l=new Eg,c={},u=e.maxTextureSize,h={[Mn]:je,[je]:Mn,[be]:be},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:wg,fragmentShader:Ag}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ce;m.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new mt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let p=this.type;this.render=function(A,R,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const y=r.getRenderTarget(),T=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ri),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const Y=p!==Nn&&this.type===Nn,P=p===Nn&&this.type!==Nn;for(let F=0,W=A.length;F<W;F++){const Z=A[F],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const J=K.getFrameExtents();if(i.multiply(J),s.copy(K.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,K.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,K.mapSize.y=s.y)),K.map===null||Y===!0||P===!0){const ct=this.type!==Nn?{minFilter:Ie,magFilter:Ie}:{};K.map!==null&&K.map.dispose(),K.map=new ki(i.x,i.y,ct),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();const tt=K.getViewportCount();for(let ct=0;ct<tt;ct++){const V=K.getViewport(ct);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),N.viewport(o),K.updateMatrices(Z,ct),n=K.getFrustum(),S(R,B,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===Nn&&v(K,B),K.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(y,T,D)};function v(A,R){const B=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ki(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(R,null,B,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(R,null,B,f,_,null)}function x(A,R,B,y){let T=null;const D=B.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)T=D;else if(T=B.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=T.uuid,Y=R.uuid;let P=c[N];P===void 0&&(P={},c[N]=P);let F=P[Y];F===void 0&&(F=T.clone(),P[Y]=F,R.addEventListener("dispose",b)),T=F}if(T.visible=R.visible,T.wireframe=R.wireframe,y===Nn?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:h[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=r.properties.get(T);N.light=B}return T}function S(A,R,B,y,T){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Nn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld);const Y=t.update(A),P=A.material;if(Array.isArray(P)){const F=Y.groups;for(let W=0,Z=F.length;W<Z;W++){const K=F[W],J=P[K.materialIndex];if(J&&J.visible){const tt=x(A,J,y,T);A.onBeforeShadow(r,A,R,B,Y,tt,K),r.renderBufferDirect(B,null,Y,tt,A,K),A.onAfterShadow(r,A,R,B,Y,tt,K)}}}else if(P.visible){const F=x(A,P,y,T);A.onBeforeShadow(r,A,R,B,Y,F,null),r.renderBufferDirect(B,null,Y,F,A,null),A.onAfterShadow(r,A,R,B,Y,F,null)}}const N=A.children;for(let Y=0,P=N.length;Y<P;Y++)S(N[Y],R,B,y,T)}function b(A){A.target.removeEventListener("dispose",b);for(const B in c){const y=c[B],T=A.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function Cg(r,t,e){const n=e.isWebGL2;function i(){let L=!1;const lt=new re;let it=null;const wt=new re(0,0,0,0);return{setMask:function(At){it!==At&&!L&&(r.colorMask(At,At,At,At),it=At)},setLocked:function(At){L=At},setClear:function(At,Jt,te,ye,De){De===!0&&(At*=ye,Jt*=ye,te*=ye),lt.set(At,Jt,te,ye),wt.equals(lt)===!1&&(r.clearColor(At,Jt,te,ye),wt.copy(lt))},reset:function(){L=!1,it=null,wt.set(-1,0,0,0)}}}function s(){let L=!1,lt=null,it=null,wt=null;return{setTest:function(At){At?It(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(At){lt!==At&&!L&&(r.depthMask(At),lt=At)},setFunc:function(At){if(it!==At){switch(At){case Nu:r.depthFunc(r.NEVER);break;case Fu:r.depthFunc(r.ALWAYS);break;case Ou:r.depthFunc(r.LESS);break;case Kr:r.depthFunc(r.LEQUAL);break;case ku:r.depthFunc(r.EQUAL);break;case Hu:r.depthFunc(r.GEQUAL);break;case Bu:r.depthFunc(r.GREATER);break;case zu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}it=At}},setLocked:function(At){L=At},setClear:function(At){wt!==At&&(r.clearDepth(At),wt=At)},reset:function(){L=!1,lt=null,it=null,wt=null}}}function o(){let L=!1,lt=null,it=null,wt=null,At=null,Jt=null,te=null,ye=null,De=null;return{setTest:function(ne){L||(ne?It(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(ne){lt!==ne&&!L&&(r.stencilMask(ne),lt=ne)},setFunc:function(ne,Ue,Ne){(it!==ne||wt!==Ue||At!==Ne)&&(r.stencilFunc(ne,Ue,Ne),it=ne,wt=Ue,At=Ne)},setOp:function(ne,Ue,Ne){(Jt!==ne||te!==Ue||ye!==Ne)&&(r.stencilOp(ne,Ue,Ne),Jt=ne,te=Ue,ye=Ne)},setLocked:function(ne){L=ne},setClear:function(ne){De!==ne&&(r.clearStencil(ne),De=ne)},reset:function(){L=!1,lt=null,it=null,wt=null,At=null,Jt=null,te=null,ye=null,De=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},f={},m=new WeakMap,_=[],g=null,p=!1,v=null,x=null,S=null,b=null,A=null,R=null,B=null,y=new Pt(0,0,0),T=0,D=!1,N=null,Y=null,P=null,F=null,W=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,J=0;const tt=r.getParameter(r.VERSION);tt.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(tt)[1]),K=J>=1):tt.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),K=J>=2);let ct=null,V={};const k=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),I=new re().fromArray(k),dt=new re().fromArray($);function ft(L,lt,it,wt){const At=new Uint8Array(4),Jt=r.createTexture();r.bindTexture(L,Jt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<it;te++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(lt,0,r.RGBA,1,1,wt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(lt+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return Jt}const Ut={};Ut[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),Ut[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ut[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ut[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),It(r.DEPTH_TEST),l.setFunc(Kr),Nt(!1),w(tl),It(r.CULL_FACE),Mt(ri);function It(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function Rt(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function Et(L,lt){return f[L]!==lt?(r.bindFramebuffer(L,lt),f[L]=lt,n&&(L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=lt),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=lt)),!0):!1}function z(L,lt){let it=_,wt=!1;if(L)if(it=m.get(lt),it===void 0&&(it=[],m.set(lt,it)),L.isWebGLMultipleRenderTargets){const At=L.texture;if(it.length!==At.length||it[0]!==r.COLOR_ATTACHMENT0){for(let Jt=0,te=At.length;Jt<te;Jt++)it[Jt]=r.COLOR_ATTACHMENT0+Jt;it.length=At.length,wt=!0}}else it[0]!==r.COLOR_ATTACHMENT0&&(it[0]=r.COLOR_ATTACHMENT0,wt=!0);else it[0]!==r.BACK&&(it[0]=r.BACK,wt=!0);wt&&(e.isWebGL2?r.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function ve(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const St={[Pi]:r.FUNC_ADD,[yu]:r.FUNC_SUBTRACT,[Mu]:r.FUNC_REVERSE_SUBTRACT};if(n)St[il]=r.MIN,St[sl]=r.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(St[il]=L.MIN_EXT,St[sl]=L.MAX_EXT)}const Dt={[Su]:r.ZERO,[bu]:r.ONE,[Tu]:r.SRC_COLOR,[fa]:r.SRC_ALPHA,[Pu]:r.SRC_ALPHA_SATURATE,[Ru]:r.DST_COLOR,[wu]:r.DST_ALPHA,[Eu]:r.ONE_MINUS_SRC_COLOR,[pa]:r.ONE_MINUS_SRC_ALPHA,[Cu]:r.ONE_MINUS_DST_COLOR,[Au]:r.ONE_MINUS_DST_ALPHA,[Lu]:r.CONSTANT_COLOR,[Iu]:r.ONE_MINUS_CONSTANT_COLOR,[Du]:r.CONSTANT_ALPHA,[Uu]:r.ONE_MINUS_CONSTANT_ALPHA};function Mt(L,lt,it,wt,At,Jt,te,ye,De,ne){if(L===ri){p===!0&&(Rt(r.BLEND),p=!1);return}if(p===!1&&(It(r.BLEND),p=!0),L!==xu){if(L!==v||ne!==D){if((x!==Pi||A!==Pi)&&(r.blendEquation(r.FUNC_ADD),x=Pi,A=Pi),ne)switch(L){case oi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gn:r.blendFunc(r.ONE,r.ONE);break;case el:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case oi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case el:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,b=null,R=null,B=null,y.set(0,0,0),T=0,v=L,D=ne}return}At=At||lt,Jt=Jt||it,te=te||wt,(lt!==x||At!==A)&&(r.blendEquationSeparate(St[lt],St[At]),x=lt,A=At),(it!==S||wt!==b||Jt!==R||te!==B)&&(r.blendFuncSeparate(Dt[it],Dt[wt],Dt[Jt],Dt[te]),S=it,b=wt,R=Jt,B=te),(ye.equals(y)===!1||De!==T)&&(r.blendColor(ye.r,ye.g,ye.b,De),y.copy(ye),T=De),v=L,D=!1}function Zt(L,lt){L.side===be?Rt(r.CULL_FACE):It(r.CULL_FACE);let it=L.side===je;lt&&(it=!it),Nt(it),L.blending===oi&&L.transparent===!1?Mt(ri):Mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const wt=L.stencilWrite;c.setTest(wt),wt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?It(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(L){N!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),N=L)}function w(L){L!==gu?(It(r.CULL_FACE),L!==Y&&(L===tl?r.cullFace(r.BACK):L===_u?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),Y=L}function M(L){L!==P&&(K&&r.lineWidth(L),P=L)}function G(L,lt,it){L?(It(r.POLYGON_OFFSET_FILL),(F!==lt||W!==it)&&(r.polygonOffset(lt,it),F=lt,W=it)):Rt(r.POLYGON_OFFSET_FILL)}function at(L){L?It(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function st(L){L===void 0&&(L=r.TEXTURE0+Z-1),ct!==L&&(r.activeTexture(L),ct=L)}function rt(L,lt,it){it===void 0&&(ct===null?it=r.TEXTURE0+Z-1:it=ct);let wt=V[it];wt===void 0&&(wt={type:void 0,texture:void 0},V[it]=wt),(wt.type!==L||wt.texture!==lt)&&(ct!==it&&(r.activeTexture(it),ct=it),r.bindTexture(L,lt||Ut[L]),wt.type=L,wt.texture=lt)}function bt(){const L=V[ct];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ut(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function U(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(L){I.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),I.copy(L))}function xt(L){dt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),dt.copy(L))}function Tt(L,lt){let it=h.get(lt);it===void 0&&(it=new WeakMap,h.set(lt,it));let wt=it.get(L);wt===void 0&&(wt=r.getUniformBlockIndex(lt,L.name),it.set(L,wt))}function gt(L,lt){const wt=h.get(lt).get(L);u.get(lt)!==wt&&(r.uniformBlockBinding(lt,wt,L.__bindingPointIndex),u.set(lt,wt))}function Q(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ct=null,V={},f={},m=new WeakMap,_=[],g=null,p=!1,v=null,x=null,S=null,b=null,A=null,R=null,B=null,y=new Pt(0,0,0),T=0,D=!1,N=null,Y=null,P=null,F=null,W=null,I.set(0,0,r.canvas.width,r.canvas.height),dt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:It,disable:Rt,bindFramebuffer:Et,drawBuffers:z,useProgram:ve,setBlending:Mt,setMaterial:Zt,setFlipSided:Nt,setCullFace:w,setLineWidth:M,setPolygonOffset:G,setScissorTest:at,activeTexture:st,bindTexture:rt,unbindTexture:bt,compressedTexImage2D:ut,compressedTexImage3D:vt,texImage2D:et,texImage3D:H,updateUBOMapping:Tt,uniformBlockBinding:gt,texStorage2D:nt,texStorage3D:ht,texSubImage2D:Lt,texSubImage3D:Ht,compressedTexSubImage2D:U,compressedTexSubImage3D:ot,scissor:_t,viewport:xt,reset:Q}}function Pg(r,t,e,n,i,s,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,M){return f?new OffscreenCanvas(w,M):$s("canvas")}function _(w,M,G,at){let st=1;if((w.width>at||w.height>at)&&(st=at/Math.max(w.width,w.height)),st<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const rt=M?eo:Math.floor,bt=rt(st*w.width),ut=rt(st*w.height);h===void 0&&(h=m(bt,ut));const vt=G?m(bt,ut):h;return vt.width=bt,vt.height=ut,vt.getContext("2d").drawImage(w,0,0,bt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+bt+"x"+ut+")."),vt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function g(w){return Ma(w.width)&&Ma(w.height)}function p(w){return a?!1:w.wrapS!==Ye||w.wrapT!==Ye||w.minFilter!==Ie&&w.minFilter!==$e}function v(w,M){return w.generateMipmaps&&M&&w.minFilter!==Ie&&w.minFilter!==$e}function x(w){r.generateMipmap(w)}function S(w,M,G,at,st=!1){if(a===!1)return M;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let rt=M;if(M===r.RED&&(G===r.FLOAT&&(rt=r.R32F),G===r.HALF_FLOAT&&(rt=r.R16F),G===r.UNSIGNED_BYTE&&(rt=r.R8)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(rt=r.R8UI),G===r.UNSIGNED_SHORT&&(rt=r.R16UI),G===r.UNSIGNED_INT&&(rt=r.R32UI),G===r.BYTE&&(rt=r.R8I),G===r.SHORT&&(rt=r.R16I),G===r.INT&&(rt=r.R32I)),M===r.RG&&(G===r.FLOAT&&(rt=r.RG32F),G===r.HALF_FLOAT&&(rt=r.RG16F),G===r.UNSIGNED_BYTE&&(rt=r.RG8)),M===r.RGBA){const bt=st?Zr:Qt.getTransfer(at);G===r.FLOAT&&(rt=r.RGBA32F),G===r.HALF_FLOAT&&(rt=r.RGBA16F),G===r.UNSIGNED_BYTE&&(rt=bt===ce?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(rt=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(rt=r.RGB5_A1)}return(rt===r.R16F||rt===r.R32F||rt===r.RG16F||rt===r.RG32F||rt===r.RGBA16F||rt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function b(w,M,G){return v(w,G)===!0||w.isFramebufferTexture&&w.minFilter!==Ie&&w.minFilter!==$e?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){return w===Ie||w===_a||w===Xr?r.NEAREST:r.LINEAR}function R(w){const M=w.target;M.removeEventListener("dispose",R),y(M),M.isVideoTexture&&u.delete(M)}function B(w){const M=w.target;M.removeEventListener("dispose",B),D(M)}function y(w){const M=n.get(w);if(M.__webglInit===void 0)return;const G=w.source,at=d.get(G);if(at){const st=at[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&T(w),Object.keys(at).length===0&&d.delete(G)}n.remove(w)}function T(w){const M=n.get(w);r.deleteTexture(M.__webglTexture);const G=w.source,at=d.get(G);delete at[M.__cacheKey],o.memory.textures--}function D(w){const M=w.texture,G=n.get(w),at=n.get(M);if(at.__webglTexture!==void 0&&(r.deleteTexture(at.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(G.__webglFramebuffer[st]))for(let rt=0;rt<G.__webglFramebuffer[st].length;rt++)r.deleteFramebuffer(G.__webglFramebuffer[st][rt]);else r.deleteFramebuffer(G.__webglFramebuffer[st]);G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[st])}else{if(Array.isArray(G.__webglFramebuffer))for(let st=0;st<G.__webglFramebuffer.length;st++)r.deleteFramebuffer(G.__webglFramebuffer[st]);else r.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let st=0;st<G.__webglColorRenderbuffer.length;st++)G.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[st]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let st=0,rt=M.length;st<rt;st++){const bt=n.get(M[st]);bt.__webglTexture&&(r.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(M[st])}n.remove(M),n.remove(w)}let N=0;function Y(){N=0}function P(){const w=N;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),N+=1,w}function F(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function W(w,M){const G=n.get(w);if(w.isVideoTexture&&Zt(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const at=w.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(G,w,M);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function Z(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){I(G,w,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function K(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){I(G,w,M);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function J(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){dt(G,w,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}const tt={[Je]:r.REPEAT,[Ye]:r.CLAMP_TO_EDGE,[$r]:r.MIRRORED_REPEAT},ct={[Ie]:r.NEAREST,[_a]:r.NEAREST_MIPMAP_NEAREST,[Xr]:r.NEAREST_MIPMAP_LINEAR,[$e]:r.LINEAR,[hh]:r.LINEAR_MIPMAP_NEAREST,[Oi]:r.LINEAR_MIPMAP_LINEAR},V={[cd]:r.NEVER,[md]:r.ALWAYS,[hd]:r.LESS,[yh]:r.LEQUAL,[ud]:r.EQUAL,[pd]:r.GEQUAL,[dd]:r.GREATER,[fd]:r.NOTEQUAL};function k(w,M,G){if(G?(r.texParameteri(w,r.TEXTURE_WRAP_S,tt[M.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,tt[M.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,tt[M.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ct[M.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ct[M.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==Ye||M.wrapT!==Ye)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,A(M.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Ie&&M.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,V[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const at=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ie||M.minFilter!==Xr&&M.minFilter!==Oi||M.type===Fn&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===js&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(w,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function $(w,M){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));const at=M.source;let st=d.get(at);st===void 0&&(st={},d.set(at,st));const rt=F(M);if(rt!==w.__cacheKey){st[rt]===void 0&&(st[rt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),st[rt].usedTimes++;const bt=st[w.__cacheKey];bt!==void 0&&(st[w.__cacheKey].usedTimes--,bt.usedTimes===0&&T(M)),w.__cacheKey=rt,w.__webglTexture=st[rt].texture}return G}function I(w,M,G){let at=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(at=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(at=r.TEXTURE_3D);const st=$(w,M),rt=M.source;e.bindTexture(at,w.__webglTexture,r.TEXTURE0+G);const bt=n.get(rt);if(rt.version!==bt.__version||st===!0){e.activeTexture(r.TEXTURE0+G);const ut=Qt.getPrimaries(Qt.workingColorSpace),vt=M.colorSpace===un?null:Qt.getPrimaries(M.colorSpace),Lt=M.colorSpace===un||ut===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Ht=p(M)&&g(M.image)===!1;let U=_(M.image,Ht,!1,i.maxTextureSize);U=Nt(M,U);const ot=g(U)||a,nt=s.convert(M.format,M.colorSpace);let ht=s.convert(M.type),et=S(M.internalFormat,nt,ht,M.colorSpace,M.isVideoTexture);k(at,M,ot);let H;const _t=M.mipmaps,xt=a&&M.isVideoTexture!==!0&&et!==_h,Tt=bt.__version===void 0||st===!0,gt=b(M,U,ot);if(M.isDepthTexture)et=r.DEPTH_COMPONENT,a?M.type===Fn?et=r.DEPTH_COMPONENT32F:M.type===ii?et=r.DEPTH_COMPONENT24:M.type===Ui?et=r.DEPTH24_STENCIL8:et=r.DEPTH_COMPONENT16:M.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ni&&et===r.DEPTH_COMPONENT&&M.type!==La&&M.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ii,ht=s.convert(M.type)),M.format===vs&&et===r.DEPTH_COMPONENT&&(et=r.DEPTH_STENCIL,M.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ui,ht=s.convert(M.type))),Tt&&(xt?e.texStorage2D(r.TEXTURE_2D,1,et,U.width,U.height):e.texImage2D(r.TEXTURE_2D,0,et,U.width,U.height,0,nt,ht,null));else if(M.isDataTexture)if(_t.length>0&&ot){xt&&Tt&&e.texStorage2D(r.TEXTURE_2D,gt,et,_t[0].width,_t[0].height);for(let Q=0,L=_t.length;Q<L;Q++)H=_t[Q],xt?e.texSubImage2D(r.TEXTURE_2D,Q,0,0,H.width,H.height,nt,ht,H.data):e.texImage2D(r.TEXTURE_2D,Q,et,H.width,H.height,0,nt,ht,H.data);M.generateMipmaps=!1}else xt?(Tt&&e.texStorage2D(r.TEXTURE_2D,gt,et,U.width,U.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,U.width,U.height,nt,ht,U.data)):e.texImage2D(r.TEXTURE_2D,0,et,U.width,U.height,0,nt,ht,U.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){xt&&Tt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,et,_t[0].width,_t[0].height,U.depth);for(let Q=0,L=_t.length;Q<L;Q++)H=_t[Q],M.format!==nn?nt!==null?xt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,H.width,H.height,U.depth,nt,H.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,et,H.width,H.height,U.depth,0,H.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,H.width,H.height,U.depth,nt,ht,H.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Q,et,H.width,H.height,U.depth,0,nt,ht,H.data)}else{xt&&Tt&&e.texStorage2D(r.TEXTURE_2D,gt,et,_t[0].width,_t[0].height);for(let Q=0,L=_t.length;Q<L;Q++)H=_t[Q],M.format!==nn?nt!==null?xt?e.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,H.width,H.height,nt,H.data):e.compressedTexImage2D(r.TEXTURE_2D,Q,et,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?e.texSubImage2D(r.TEXTURE_2D,Q,0,0,H.width,H.height,nt,ht,H.data):e.texImage2D(r.TEXTURE_2D,Q,et,H.width,H.height,0,nt,ht,H.data)}else if(M.isDataArrayTexture)xt?(Tt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,et,U.width,U.height,U.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,nt,ht,U.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,et,U.width,U.height,U.depth,0,nt,ht,U.data);else if(M.isData3DTexture)xt?(Tt&&e.texStorage3D(r.TEXTURE_3D,gt,et,U.width,U.height,U.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,nt,ht,U.data)):e.texImage3D(r.TEXTURE_3D,0,et,U.width,U.height,U.depth,0,nt,ht,U.data);else if(M.isFramebufferTexture){if(Tt)if(xt)e.texStorage2D(r.TEXTURE_2D,gt,et,U.width,U.height);else{let Q=U.width,L=U.height;for(let lt=0;lt<gt;lt++)e.texImage2D(r.TEXTURE_2D,lt,et,Q,L,0,nt,ht,null),Q>>=1,L>>=1}}else if(_t.length>0&&ot){xt&&Tt&&e.texStorage2D(r.TEXTURE_2D,gt,et,_t[0].width,_t[0].height);for(let Q=0,L=_t.length;Q<L;Q++)H=_t[Q],xt?e.texSubImage2D(r.TEXTURE_2D,Q,0,0,nt,ht,H):e.texImage2D(r.TEXTURE_2D,Q,et,nt,ht,H);M.generateMipmaps=!1}else xt?(Tt&&e.texStorage2D(r.TEXTURE_2D,gt,et,U.width,U.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt,ht,U)):e.texImage2D(r.TEXTURE_2D,0,et,nt,ht,U);v(M,ot)&&x(at),bt.__version=rt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function dt(w,M,G){if(M.image.length!==6)return;const at=$(w,M),st=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+G);const rt=n.get(st);if(st.version!==rt.__version||at===!0){e.activeTexture(r.TEXTURE0+G);const bt=Qt.getPrimaries(Qt.workingColorSpace),ut=M.colorSpace===un?null:Qt.getPrimaries(M.colorSpace),vt=M.colorSpace===un||bt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Lt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ht=M.image[0]&&M.image[0].isDataTexture,U=[];for(let Q=0;Q<6;Q++)!Lt&&!Ht?U[Q]=_(M.image[Q],!1,!0,i.maxCubemapSize):U[Q]=Ht?M.image[Q].image:M.image[Q],U[Q]=Nt(M,U[Q]);const ot=U[0],nt=g(ot)||a,ht=s.convert(M.format,M.colorSpace),et=s.convert(M.type),H=S(M.internalFormat,ht,et,M.colorSpace),_t=a&&M.isVideoTexture!==!0,xt=rt.__version===void 0||at===!0;let Tt=b(M,ot,nt);k(r.TEXTURE_CUBE_MAP,M,nt);let gt;if(Lt){_t&&xt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Tt,H,ot.width,ot.height);for(let Q=0;Q<6;Q++){gt=U[Q].mipmaps;for(let L=0;L<gt.length;L++){const lt=gt[L];M.format!==nn?ht!==null?_t?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,H,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,0,0,lt.width,lt.height,ht,et,lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,H,lt.width,lt.height,0,ht,et,lt.data)}}}else{gt=M.mipmaps,_t&&xt&&(gt.length>0&&Tt++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Tt,H,U[0].width,U[0].height));for(let Q=0;Q<6;Q++)if(Ht){_t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,U[Q].width,U[Q].height,ht,et,U[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,H,U[Q].width,U[Q].height,0,ht,et,U[Q].data);for(let L=0;L<gt.length;L++){const it=gt[L].image[Q].image;_t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,0,0,it.width,it.height,ht,et,it.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,H,it.width,it.height,0,ht,et,it.data)}}else{_t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ht,et,U[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,H,ht,et,U[Q]);for(let L=0;L<gt.length;L++){const lt=gt[L];_t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,0,0,ht,et,lt.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,H,ht,et,lt.image[Q])}}}v(M,nt)&&x(r.TEXTURE_CUBE_MAP),rt.__version=st.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ft(w,M,G,at,st,rt){const bt=s.convert(G.format,G.colorSpace),ut=s.convert(G.type),vt=S(G.internalFormat,bt,ut,G.colorSpace);if(!n.get(M).__hasExternalTextures){const Ht=Math.max(1,M.width>>rt),U=Math.max(1,M.height>>rt);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,rt,vt,Ht,U,M.depth,0,bt,ut,null):e.texImage2D(st,rt,vt,Ht,U,0,bt,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),Mt(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,at,st,n.get(G).__webglTexture,0,Dt(M)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,at,st,n.get(G).__webglTexture,rt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(w,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let at=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(G||Mt(M)){const st=M.depthTexture;st&&st.isDepthTexture&&(st.type===Fn?at=r.DEPTH_COMPONENT32F:st.type===ii&&(at=r.DEPTH_COMPONENT24));const rt=Dt(M);Mt(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,at,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,at,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,at,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const at=Dt(M);G&&Mt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,r.DEPTH24_STENCIL8,M.width,M.height):Mt(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const at=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let st=0;st<at.length;st++){const rt=at[st],bt=s.convert(rt.format,rt.colorSpace),ut=s.convert(rt.type),vt=S(rt.internalFormat,bt,ut,rt.colorSpace),Lt=Dt(M);G&&Mt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,vt,M.width,M.height):Mt(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt,vt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,vt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function It(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const at=n.get(M.depthTexture).__webglTexture,st=Dt(M);if(M.depthTexture.format===Ni)Mt(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,at,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,at,0);else if(M.depthTexture.format===vs)Mt(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,at,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Rt(w){const M=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");It(M.__webglFramebuffer,w)}else if(G){M.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[at]),M.__webglDepthbuffer[at]=r.createRenderbuffer(),Ut(M.__webglDepthbuffer[at],w,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Ut(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(w,M,G){const at=n.get(w);M!==void 0&&ft(at.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Rt(w)}function z(w){const M=w.texture,G=n.get(w),at=n.get(M);w.addEventListener("dispose",B),w.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture()),at.__version=M.version,o.memory.textures++);const st=w.isWebGLCubeRenderTarget===!0,rt=w.isWebGLMultipleRenderTargets===!0,bt=g(w)||a;if(st){G.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ut]=[];for(let vt=0;vt<M.mipmaps.length;vt++)G.__webglFramebuffer[ut][vt]=r.createFramebuffer()}else G.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)G.__webglFramebuffer[ut]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(rt)if(i.drawBuffers){const ut=w.texture;for(let vt=0,Lt=ut.length;vt<Lt;vt++){const Ht=n.get(ut[vt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Mt(w)===!1){const ut=rt?M:[M];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let vt=0;vt<ut.length;vt++){const Lt=ut[vt];G.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[vt]);const Ht=s.convert(Lt.format,Lt.colorSpace),U=s.convert(Lt.type),ot=S(Lt.internalFormat,Ht,U,Lt.colorSpace,w.isXRRenderTarget===!0),nt=Dt(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,ot,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,G.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(st){e.bindTexture(r.TEXTURE_CUBE_MAP,at.__webglTexture),k(r.TEXTURE_CUBE_MAP,M,bt);for(let ut=0;ut<6;ut++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)ft(G.__webglFramebuffer[ut][vt],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else ft(G.__webglFramebuffer[ut],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);v(M,bt)&&x(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const ut=w.texture;for(let vt=0,Lt=ut.length;vt<Lt;vt++){const Ht=ut[vt],U=n.get(Ht);e.bindTexture(r.TEXTURE_2D,U.__webglTexture),k(r.TEXTURE_2D,Ht,bt),ft(G.__webglFramebuffer,w,Ht,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,0),v(Ht,bt)&&x(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ut=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,at.__webglTexture),k(ut,M,bt),a&&M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)ft(G.__webglFramebuffer[vt],w,M,r.COLOR_ATTACHMENT0,ut,vt);else ft(G.__webglFramebuffer,w,M,r.COLOR_ATTACHMENT0,ut,0);v(M,bt)&&x(ut),e.unbindTexture()}w.depthBuffer&&Rt(w)}function ve(w){const M=g(w)||a,G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let at=0,st=G.length;at<st;at++){const rt=G[at];if(v(rt,M)){const bt=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ut=n.get(rt).__webglTexture;e.bindTexture(bt,ut),x(bt),e.unbindTexture()}}}function St(w){if(a&&w.samples>0&&Mt(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],G=w.width,at=w.height;let st=r.COLOR_BUFFER_BIT;const rt=[],bt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=n.get(w),vt=w.isWebGLMultipleRenderTargets===!0;if(vt)for(let Lt=0;Lt<M.length;Lt++)e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Lt=0;Lt<M.length;Lt++){rt.push(r.COLOR_ATTACHMENT0+Lt),w.depthBuffer&&rt.push(bt);const Ht=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Ht===!1&&(w.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),vt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ut.__webglColorRenderbuffer[Lt]),Ht===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[bt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[bt])),vt){const U=n.get(M[Lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,U,0)}r.blitFramebuffer(0,0,G,at,0,0,G,at,st,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let Lt=0;Lt<M.length;Lt++){e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,ut.__webglColorRenderbuffer[Lt]);const Ht=n.get(M[Lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,Ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function Dt(w){return Math.min(i.maxSamples,w.samples)}function Mt(w){const M=n.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Zt(w){const M=o.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function Nt(w,M){const G=w.colorSpace,at=w.format,st=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ya||G!==fe&&G!==un&&(Qt.getTransfer(G)===ce?a===!1?t.has("EXT_sRGB")===!0&&at===nn?(w.format=ya,w.minFilter=$e,w.generateMipmaps=!1):M=Sh.sRGBToLinear(M):(at!==nn||st!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=P,this.resetTextureUnits=Y,this.setTexture2D=W,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=Et,this.setupRenderTarget=z,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Mt}function Lg(r,t,e){const n=e.isWebGL2;function i(s,o=un){let a;const l=Qt.getTransfer(o);if(s===li)return r.UNSIGNED_BYTE;if(s===dh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===fh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$u)return r.BYTE;if(s===Zu)return r.SHORT;if(s===La)return r.UNSIGNED_SHORT;if(s===uh)return r.INT;if(s===ii)return r.UNSIGNED_INT;if(s===Fn)return r.FLOAT;if(s===js)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ju)return r.ALPHA;if(s===nn)return r.RGBA;if(s===Qu)return r.LUMINANCE;if(s===td)return r.LUMINANCE_ALPHA;if(s===Ni)return r.DEPTH_COMPONENT;if(s===vs)return r.DEPTH_STENCIL;if(s===ya)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ed)return r.RED;if(s===ph)return r.RED_INTEGER;if(s===nd)return r.RG;if(s===mh)return r.RG_INTEGER;if(s===gh)return r.RGBA_INTEGER;if(s===go||s===_o||s===vo||s===xo)if(l===ce)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===go)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===go)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_o)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ol||s===al||s===ll||s===cl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ol)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===al)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ll)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===cl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_h)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hl||s===ul)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===hl)return l===ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ul)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===dl||s===fl||s===pl||s===ml||s===gl||s===_l||s===vl||s===xl||s===yl||s===Ml||s===Sl||s===bl||s===Tl||s===El)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===dl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ml)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_l)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ml)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Tl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===El)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yo||s===wl||s===Al)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===yo)return l===ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Al)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===id||s===Rl||s===Cl||s===Pl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===yo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Rl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ui?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Ig extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class sn extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dg={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ug extends Es{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const _=e.getContextAttributes();let g=null,p=null;const v=[],x=[],S=new kt;let b=null;const A=new We;A.layers.enable(1),A.viewport=new re;const R=new We;R.layers.enable(2),R.viewport=new re;const B=[A,R],y=new Ig;y.layers.enable(1),y.layers.enable(2);let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=v[k];return $===void 0&&($=new Vo,v[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=v[k];return $===void 0&&($=new Vo,v[k]=$),$.getGripSpace()},this.getHand=function(k){let $=v[k];return $===void 0&&($=new Vo,v[k]=$),$.getHandSpace()};function N(k){const $=x.indexOf(k.inputSource);if($===-1)return;const I=v[$];I!==void 0&&(I.update(k.inputSource,k.frame,c||o),I.dispatchEvent({type:k.type,data:k.inputSource}))}function Y(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",P);for(let k=0;k<v.length;k++){const $=x[k];$!==null&&(x[k]=null,v[k].disconnect($))}T=null,D=null,t.setRenderTarget(g),f=null,d=null,h=null,i=null,p=null,V.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ki(f.framebufferWidth,f.framebufferHeight,{format:nn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,I=null,dt=null;_.depth&&(dt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?vs:Ni,I=_.stencil?Ui:ii);const ft={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(ft),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new ki(d.textureWidth,d.textureHeight,{format:nn,type:li,depthTexture:new Dh(d.textureWidth,d.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Ut=t.properties.get(p);Ut.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(k){for(let $=0;$<k.removed.length;$++){const I=k.removed[$],dt=x.indexOf(I);dt>=0&&(x[dt]=null,v[dt].disconnect(I))}for(let $=0;$<k.added.length;$++){const I=k.added[$];let dt=x.indexOf(I);if(dt===-1){for(let Ut=0;Ut<v.length;Ut++)if(Ut>=x.length){x.push(I),dt=Ut;break}else if(x[Ut]===null){x[Ut]=I,dt=Ut;break}if(dt===-1)break}const ft=v[dt];ft&&ft.connect(I)}}const F=new C,W=new C;function Z(k,$,I){F.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(I.matrixWorld);const dt=F.distanceTo(W),ft=$.projectionMatrix.elements,Ut=I.projectionMatrix.elements,It=ft[14]/(ft[10]-1),Rt=ft[14]/(ft[10]+1),Et=(ft[9]+1)/ft[5],z=(ft[9]-1)/ft[5],ve=(ft[8]-1)/ft[0],St=(Ut[8]+1)/Ut[0],Dt=It*ve,Mt=It*St,Zt=dt/(-ve+St),Nt=Zt*-ve;$.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Nt),k.translateZ(Zt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const w=It+Zt,M=Rt+Zt,G=Dt-Nt,at=Mt+(dt-Nt),st=Et*Rt/M*w,rt=z*Rt/M*w;k.projectionMatrix.makePerspective(G,at,st,rt,w,M),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function K(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;y.near=R.near=A.near=k.near,y.far=R.far=A.far=k.far,(T!==y.near||D!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,D=y.far);const $=k.parent,I=y.cameras;K(y,$);for(let dt=0;dt<I.length;dt++)K(I[dt],$);I.length===2?Z(y,A,R):y.projectionMatrix.copy(A.projectionMatrix),J(k,y,$)};function J(k,$,I){I===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(I.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ys*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)};let tt=null;function ct(k,$){if(u=$.getViewerPose(c||o),m=$,u!==null){const I=u.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let dt=!1;I.length!==y.cameras.length&&(y.cameras.length=0,dt=!0);for(let ft=0;ft<I.length;ft++){const Ut=I[ft];let It=null;if(f!==null)It=f.getViewport(Ut);else{const Et=h.getViewSubImage(d,Ut);It=Et.viewport,ft===0&&(t.setRenderTargetTextures(p,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(p))}let Rt=B[ft];Rt===void 0&&(Rt=new We,Rt.layers.enable(ft),Rt.viewport=new re,B[ft]=Rt),Rt.matrix.fromArray(Ut.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Ut.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(It.x,It.y,It.width,It.height),ft===0&&(y.matrix.copy(Rt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),dt===!0&&y.cameras.push(Rt)}}for(let I=0;I<v.length;I++){const dt=x[I],ft=v[I];dt!==null&&ft!==void 0&&ft.update(dt,$,c||o)}tt&&tt(k,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),m=null}const V=new Ih;V.setAnimationLoop(ct),this.setAnimationLoop=function(k){tt=k},this.dispose=function(){}}}function Ng(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ch(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fg(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const S=x.program;n.uniformBlockBinding(v,S)}function c(v,x){let S=i[v.id];S===void 0&&(m(v),S=u(v),i[v.id]=S,v.addEventListener("dispose",g));const b=x.program;n.updateUBOMapping(v,b);const A=t.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function u(v){const x=h();v.__bindingPointIndex=x;const S=r.createBuffer(),b=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,b,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],S=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,R=S.length;A<R;A++){const B=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,T=B.length;y<T;y++){const D=B[y];if(f(D,A,y,b)===!0){const N=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value];let P=0;for(let F=0;F<Y.length;F++){const W=Y[F],Z=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,N+P,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,x,S,b){const A=v.value,R=x+"_"+S;if(b[R]===void 0)return typeof A=="number"||typeof A=="boolean"?b[R]=A:b[R]=A.clone(),!0;{const B=b[R];if(typeof A=="number"||typeof A=="boolean"){if(B!==A)return b[R]=A,!0}else if(B.equals(A)===!1)return B.copy(A),!0}return!1}function m(v){const x=v.uniforms;let S=0;const b=16;for(let R=0,B=x.length;R<B;R++){const y=Array.isArray(x[R])?x[R]:[x[R]];for(let T=0,D=y.length;T<D;T++){const N=y[T],Y=Array.isArray(N.value)?N.value:[N.value];for(let P=0,F=Y.length;P<F;P++){const W=Y[P],Z=_(W),K=S%b;K!==0&&b-K<Z.boundary&&(S+=b-K),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=Z.storage}}}const A=S%b;return A>0&&(S+=b-A),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Hh{constructor(t={}){const{canvas:e=Ld(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this._useLegacyLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;const x=this;let S=!1,b=0,A=0,R=null,B=-1,y=null;const T=new re,D=new re;let N=null;const Y=new Pt(0);let P=0,F=e.width,W=e.height,Z=1,K=null,J=null;const tt=new re(0,0,F,W),ct=new re(0,0,F,W);let V=!1;const k=new Na;let $=!1,I=!1,dt=null;const ft=new qt,Ut=new kt,It=new C,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Et(){return R===null?Z:1}let z=n;function ve(E,O){for(let q=0;q<E.length;q++){const j=E[q],X=e.getContext(j,O);if(X!==null)return X}return null}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ca}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",lt,!1),z===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),z=ve(O,E),z===null)throw ve(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let St,Dt,Mt,Zt,Nt,w,M,G,at,st,rt,bt,ut,vt,Lt,Ht,U,ot,nt,ht,et,H,_t,xt;function Tt(){St=new qm(z),Dt=new Bm(z,St,t),St.init(Dt),H=new Lg(z,St,Dt),Mt=new Cg(z,St,Dt),Zt=new Km(z),Nt=new mg,w=new Pg(z,St,Mt,Nt,Dt,H,Zt),M=new Gm(x),G=new Xm(x),at=new nf(z,Dt),_t=new km(z,St,at,Dt),st=new Ym(z,at,Zt,_t),rt=new Qm(z,st,at,Zt),nt=new Jm(z,Dt,w),Ht=new zm(Nt),bt=new pg(x,M,G,St,Dt,_t,Ht),ut=new Ng(x,Nt),vt=new _g,Lt=new bg(St,Dt),ot=new Om(x,M,G,Mt,rt,d,l),U=new Rg(x,rt,Dt),xt=new Fg(z,Zt,Dt,Mt),ht=new Hm(z,St,Zt,Dt),et=new jm(z,St,Zt,Dt),Zt.programs=bt.programs,x.capabilities=Dt,x.extensions=St,x.properties=Nt,x.renderLists=vt,x.shadowMap=U,x.state=Mt,x.info=Zt}Tt();const gt=new Ug(x,z);this.xr=gt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=St.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=St.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(F,W,!1))},this.getSize=function(E){return E.set(F,W)},this.setSize=function(E,O,q=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,W=O,e.width=Math.floor(E*Z),e.height=Math.floor(O*Z),q===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(F*Z,W*Z).floor()},this.setDrawingBufferSize=function(E,O,q){F=E,W=O,Z=q,e.width=Math.floor(E*q),e.height=Math.floor(O*q),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(tt)},this.setViewport=function(E,O,q,j){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,O,q,j),Mt.viewport(T.copy(tt).multiplyScalar(Z).floor())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,O,q,j){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,O,q,j),Mt.scissor(D.copy(ct).multiplyScalar(Z).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(E){Mt.setScissorTest(V=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(E=!0,O=!0,q=!0){let j=0;if(E){let X=!1;if(R!==null){const yt=R.texture.format;X=yt===gh||yt===mh||yt===ph}if(X){const yt=R.texture.type,Ct=yt===li||yt===ii||yt===La||yt===Ui||yt===dh||yt===fh,Ot=ot.getClearColor(),Bt=ot.getClearAlpha(),Xt=Ot.r,zt=Ot.g,Wt=Ot.b;Ct?(f[0]=Xt,f[1]=zt,f[2]=Wt,f[3]=Bt,z.clearBufferuiv(z.COLOR,0,f)):(m[0]=Xt,m[1]=zt,m[2]=Wt,m[3]=Bt,z.clearBufferiv(z.COLOR,0,m))}else j|=z.COLOR_BUFFER_BIT}O&&(j|=z.DEPTH_BUFFER_BIT),q&&(j|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),vt.dispose(),Lt.dispose(),Nt.dispose(),M.dispose(),G.dispose(),rt.dispose(),_t.dispose(),xt.dispose(),bt.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",De),gt.removeEventListener("sessionend",ne),dt&&(dt.dispose(),dt=null),Ue.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Zt.autoReset,O=U.enabled,q=U.autoUpdate,j=U.needsUpdate,X=U.type;Tt(),Zt.autoReset=E,U.enabled=O,U.autoUpdate=q,U.needsUpdate=j,U.type=X}function lt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const O=E.target;O.removeEventListener("dispose",it),wt(O)}function wt(E){At(E),Nt.remove(E)}function At(E){const O=Nt.get(E).programs;O!==void 0&&(O.forEach(function(q){bt.releaseProgram(q)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,q,j,X,yt){O===null&&(O=Rt);const Ct=X.isMesh&&X.matrixWorld.determinant()<0,Ot=hu(E,O,q,j,X);Mt.setMaterial(j,Ct);let Bt=q.index,Xt=1;if(j.wireframe===!0){if(Bt=st.getWireframeAttribute(q),Bt===void 0)return;Xt=2}const zt=q.drawRange,Wt=q.attributes.position;let xe=zt.start*Xt,Qe=(zt.start+zt.count)*Xt;yt!==null&&(xe=Math.max(xe,yt.start*Xt),Qe=Math.min(Qe,(yt.start+yt.count)*Xt)),Bt!==null?(xe=Math.max(xe,0),Qe=Math.min(Qe,Bt.count)):Wt!=null&&(xe=Math.max(xe,0),Qe=Math.min(Qe,Wt.count));const Pe=Qe-xe;if(Pe<0||Pe===1/0)return;_t.setup(X,j,Ot,q,Bt);let Rn,de=ht;if(Bt!==null&&(Rn=at.get(Bt),de=et,de.setIndex(Rn)),X.isMesh)j.wireframe===!0?(Mt.setLineWidth(j.wireframeLinewidth*Et()),de.setMode(z.LINES)):de.setMode(z.TRIANGLES);else if(X.isLine){let Yt=j.linewidth;Yt===void 0&&(Yt=1),Mt.setLineWidth(Yt*Et()),X.isLineSegments?de.setMode(z.LINES):X.isLineLoop?de.setMode(z.LINE_LOOP):de.setMode(z.LINE_STRIP)}else X.isPoints?de.setMode(z.POINTS):X.isSprite&&de.setMode(z.TRIANGLES);if(X.isBatchedMesh)de.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)de.renderInstances(xe,Pe,X.count);else if(q.isInstancedBufferGeometry){const Yt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,uo=Math.min(q.instanceCount,Yt);de.renderInstances(xe,Pe,uo)}else de.render(xe,Pe)};function Jt(E,O,q){E.transparent===!0&&E.side===be&&E.forceSinglePass===!1?(E.side=je,E.needsUpdate=!0,ir(E,O,q),E.side=Mn,E.needsUpdate=!0,ir(E,O,q),E.side=be):ir(E,O,q)}this.compile=function(E,O,q=null){q===null&&(q=E),g=Lt.get(q),g.init(),v.push(g),q.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),E!==q&&E.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights(x._useLegacyLights);const j=new Set;return E.traverse(function(X){const yt=X.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){const Ot=yt[Ct];Jt(Ot,q,X),j.add(Ot)}else Jt(yt,q,X),j.add(yt)}),v.pop(),g=null,j},this.compileAsync=function(E,O,q=null){const j=this.compile(E,O,q);return new Promise(X=>{function yt(){if(j.forEach(function(Ct){Nt.get(Ct).currentProgram.isReady()&&j.delete(Ct)}),j.size===0){X(E);return}setTimeout(yt,10)}St.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let te=null;function ye(E){te&&te(E)}function De(){Ue.stop()}function ne(){Ue.start()}const Ue=new Ih;Ue.setAnimationLoop(ye),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(E){te=E,gt.setAnimationLoop(E),E===null?Ue.stop():Ue.start()},gt.addEventListener("sessionstart",De),gt.addEventListener("sessionend",ne),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(O),O=gt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,R),g=Lt.get(E,v.length),g.init(),v.push(g),ft.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k.setFromProjectionMatrix(ft),I=this.localClippingEnabled,$=Ht.init(this.clippingPlanes,I),_=vt.get(E,p.length),_.init(),p.push(_),Ne(E,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(K,J),this.info.render.frame++,$===!0&&Ht.beginShadows();const q=g.state.shadowsArray;if(U.render(q,E,O),$===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(_,E),g.setupLights(x._useLegacyLights),O.isArrayCamera){const j=O.cameras;for(let X=0,yt=j.length;X<yt;X++){const Ct=j[X];Ya(_,E,Ct,Ct.viewport)}}else Ya(_,E,O);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,O),_t.resetDefaultState(),B=-1,y=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ne(E,O,q,j){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){j&&It.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ft);const Ct=rt.update(E),Ot=E.material;Ot.visible&&_.push(E,Ct,Ot,q,It.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||k.intersectsObject(E))){const Ct=rt.update(E),Ot=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),It.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),It.copy(Ct.boundingSphere.center)),It.applyMatrix4(E.matrixWorld).applyMatrix4(ft)),Array.isArray(Ot)){const Bt=Ct.groups;for(let Xt=0,zt=Bt.length;Xt<zt;Xt++){const Wt=Bt[Xt],xe=Ot[Wt.materialIndex];xe&&xe.visible&&_.push(E,Ct,xe,q,It.z,Wt)}}else Ot.visible&&_.push(E,Ct,Ot,q,It.z,null)}}const yt=E.children;for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++)Ne(yt[Ct],O,q,j)}function Ya(E,O,q,j){const X=E.opaque,yt=E.transmissive,Ct=E.transparent;g.setupLightsView(q),$===!0&&Ht.setGlobalState(x.clippingPlanes,q),yt.length>0&&cu(X,yt,O,q),j&&Mt.viewport(T.copy(j)),X.length>0&&nr(X,O,q),yt.length>0&&nr(yt,O,q),Ct.length>0&&nr(Ct,O,q),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function cu(E,O,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const yt=Dt.isWebGL2;dt===null&&(dt=new ki(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?js:li,minFilter:Oi,samples:yt?4:0})),x.getDrawingBufferSize(Ut),yt?dt.setSize(Ut.x,Ut.y):dt.setSize(eo(Ut.x),eo(Ut.y));const Ct=x.getRenderTarget();x.setRenderTarget(dt),x.getClearColor(Y),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Ot=x.toneMapping;x.toneMapping=ai,nr(E,q,j),w.updateMultisampleRenderTarget(dt),w.updateRenderTargetMipmap(dt);let Bt=!1;for(let Xt=0,zt=O.length;Xt<zt;Xt++){const Wt=O[Xt],xe=Wt.object,Qe=Wt.geometry,Pe=Wt.material,Rn=Wt.group;if(Pe.side===be&&xe.layers.test(j.layers)){const de=Pe.side;Pe.side=je,Pe.needsUpdate=!0,ja(xe,q,j,Qe,Pe,Rn),Pe.side=de,Pe.needsUpdate=!0,Bt=!0}}Bt===!0&&(w.updateMultisampleRenderTarget(dt),w.updateRenderTargetMipmap(dt)),x.setRenderTarget(Ct),x.setClearColor(Y,P),x.toneMapping=Ot}function nr(E,O,q){const j=O.isScene===!0?O.overrideMaterial:null;for(let X=0,yt=E.length;X<yt;X++){const Ct=E[X],Ot=Ct.object,Bt=Ct.geometry,Xt=j===null?Ct.material:j,zt=Ct.group;Ot.layers.test(q.layers)&&ja(Ot,O,q,Bt,Xt,zt)}}function ja(E,O,q,j,X,yt){E.onBeforeRender(x,O,q,j,X,yt),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(x,O,q,j,E,yt),X.transparent===!0&&X.side===be&&X.forceSinglePass===!1?(X.side=je,X.needsUpdate=!0,x.renderBufferDirect(q,O,j,X,E,yt),X.side=Mn,X.needsUpdate=!0,x.renderBufferDirect(q,O,j,X,E,yt),X.side=be):x.renderBufferDirect(q,O,j,X,E,yt),E.onAfterRender(x,O,q,j,X,yt)}function ir(E,O,q){O.isScene!==!0&&(O=Rt);const j=Nt.get(E),X=g.state.lights,yt=g.state.shadowsArray,Ct=X.state.version,Ot=bt.getParameters(E,X.state,yt,O,q),Bt=bt.getProgramCacheKey(Ot);let Xt=j.programs;j.environment=E.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(E.isMeshStandardMaterial?G:M).get(E.envMap||j.environment),Xt===void 0&&(E.addEventListener("dispose",it),Xt=new Map,j.programs=Xt);let zt=Xt.get(Bt);if(zt!==void 0){if(j.currentProgram===zt&&j.lightsStateVersion===Ct)return $a(E,Ot),zt}else Ot.uniforms=bt.getUniforms(E),E.onBuild(q,Ot,x),E.onBeforeCompile(Ot,x),zt=bt.acquireProgram(Ot,Bt),Xt.set(Bt,zt),j.uniforms=Ot.uniforms;const Wt=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Wt.clippingPlanes=Ht.uniform),$a(E,Ot),j.needsLights=du(E),j.lightsStateVersion=Ct,j.needsLights&&(Wt.ambientLightColor.value=X.state.ambient,Wt.lightProbe.value=X.state.probe,Wt.directionalLights.value=X.state.directional,Wt.directionalLightShadows.value=X.state.directionalShadow,Wt.spotLights.value=X.state.spot,Wt.spotLightShadows.value=X.state.spotShadow,Wt.rectAreaLights.value=X.state.rectArea,Wt.ltc_1.value=X.state.rectAreaLTC1,Wt.ltc_2.value=X.state.rectAreaLTC2,Wt.pointLights.value=X.state.point,Wt.pointLightShadows.value=X.state.pointShadow,Wt.hemisphereLights.value=X.state.hemi,Wt.directionalShadowMap.value=X.state.directionalShadowMap,Wt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Wt.spotShadowMap.value=X.state.spotShadowMap,Wt.spotLightMatrix.value=X.state.spotLightMatrix,Wt.spotLightMap.value=X.state.spotLightMap,Wt.pointShadowMap.value=X.state.pointShadowMap,Wt.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=zt,j.uniformsList=null,zt}function Ka(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=qr.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function $a(E,O){const q=Nt.get(E);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function hu(E,O,q,j,X){O.isScene!==!0&&(O=Rt),w.resetTextureUnits();const yt=O.fog,Ct=j.isMeshStandardMaterial?O.environment:null,Ot=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:fe,Bt=(j.isMeshStandardMaterial?G:M).get(j.envMap||Ct),Xt=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,zt=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Wt=!!q.morphAttributes.position,xe=!!q.morphAttributes.normal,Qe=!!q.morphAttributes.color;let Pe=ai;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pe=x.toneMapping);const Rn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,de=Rn!==void 0?Rn.length:0,Yt=Nt.get(j),uo=g.state.lights;if($===!0&&(I===!0||E!==y)){const an=E===y&&j.id===B;Ht.setState(j,E,an)}let me=!1;j.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==uo.state.version||Yt.outputColorSpace!==Ot||X.isBatchedMesh&&Yt.batching===!1||!X.isBatchedMesh&&Yt.batching===!0||X.isInstancedMesh&&Yt.instancing===!1||!X.isInstancedMesh&&Yt.instancing===!0||X.isSkinnedMesh&&Yt.skinning===!1||!X.isSkinnedMesh&&Yt.skinning===!0||X.isInstancedMesh&&Yt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Yt.instancingColor===!1&&X.instanceColor!==null||Yt.envMap!==Bt||j.fog===!0&&Yt.fog!==yt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Ht.numPlanes||Yt.numIntersection!==Ht.numIntersection)||Yt.vertexAlphas!==Xt||Yt.vertexTangents!==zt||Yt.morphTargets!==Wt||Yt.morphNormals!==xe||Yt.morphColors!==Qe||Yt.toneMapping!==Pe||Dt.isWebGL2===!0&&Yt.morphTargetsCount!==de)&&(me=!0):(me=!0,Yt.__version=j.version);let fi=Yt.currentProgram;me===!0&&(fi=ir(j,O,X));let Za=!1,Ls=!1,fo=!1;const Oe=fi.getUniforms(),pi=Yt.uniforms;if(Mt.useProgram(fi.program)&&(Za=!0,Ls=!0,fo=!0),j.id!==B&&(B=j.id,Ls=!0),Za||y!==E){Oe.setValue(z,"projectionMatrix",E.projectionMatrix),Oe.setValue(z,"viewMatrix",E.matrixWorldInverse);const an=Oe.map.cameraPosition;an!==void 0&&an.setValue(z,It.setFromMatrixPosition(E.matrixWorld)),Dt.logarithmicDepthBuffer&&Oe.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Oe.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Ls=!0,fo=!0)}if(X.isSkinnedMesh){Oe.setOptional(z,X,"bindMatrix"),Oe.setOptional(z,X,"bindMatrixInverse");const an=X.skeleton;an&&(Dt.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Oe.setValue(z,"boneTexture",an.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Oe.setOptional(z,X,"batchingTexture"),Oe.setValue(z,"batchingTexture",X._matricesTexture,w));const po=q.morphAttributes;if((po.position!==void 0||po.normal!==void 0||po.color!==void 0&&Dt.isWebGL2===!0)&&nt.update(X,q,fi),(Ls||Yt.receiveShadow!==X.receiveShadow)&&(Yt.receiveShadow=X.receiveShadow,Oe.setValue(z,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(pi.envMap.value=Bt,pi.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Ls&&(Oe.setValue(z,"toneMappingExposure",x.toneMappingExposure),Yt.needsLights&&uu(pi,fo),yt&&j.fog===!0&&ut.refreshFogUniforms(pi,yt),ut.refreshMaterialUniforms(pi,j,Z,W,dt),qr.upload(z,Ka(Yt),pi,w)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(qr.upload(z,Ka(Yt),pi,w),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Oe.setValue(z,"center",X.center),Oe.setValue(z,"modelViewMatrix",X.modelViewMatrix),Oe.setValue(z,"normalMatrix",X.normalMatrix),Oe.setValue(z,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const an=j.uniformsGroups;for(let mo=0,fu=an.length;mo<fu;mo++)if(Dt.isWebGL2){const Ja=an[mo];xt.update(Ja,fi),xt.bind(Ja,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function uu(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function du(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,O,q){Nt.get(E.texture).__webglTexture=O,Nt.get(E.depthTexture).__webglTexture=q;const j=Nt.get(E);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const q=Nt.get(E);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,q=0){R=E,b=O,A=q;let j=!0,X=null,yt=!1,Ct=!1;if(E){const Bt=Nt.get(E);Bt.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(z.FRAMEBUFFER,null),j=!1):Bt.__webglFramebuffer===void 0?w.setupRenderTarget(E):Bt.__hasExternalTextures&&w.rebindTextures(E,Nt.get(E.texture).__webglTexture,Nt.get(E.depthTexture).__webglTexture);const Xt=E.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ct=!0);const zt=Nt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[O])?X=zt[O][q]:X=zt[O],yt=!0):Dt.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?X=Nt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?X=zt[q]:X=zt,T.copy(E.viewport),D.copy(E.scissor),N=E.scissorTest}else T.copy(tt).multiplyScalar(Z).floor(),D.copy(ct).multiplyScalar(Z).floor(),N=V;if(Mt.bindFramebuffer(z.FRAMEBUFFER,X)&&Dt.drawBuffers&&j&&Mt.drawBuffers(E,X),Mt.viewport(T),Mt.scissor(D),Mt.setScissorTest(N),yt){const Bt=Nt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Bt.__webglTexture,q)}else if(Ct){const Bt=Nt.get(E.texture),Xt=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.__webglTexture,q||0,Xt)}B=-1},this.readRenderTargetPixels=function(E,O,q,j,X,yt,Ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Nt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ot=Ot[Ct]),Ot){Mt.bindFramebuffer(z.FRAMEBUFFER,Ot);try{const Bt=E.texture,Xt=Bt.format,zt=Bt.type;if(Xt!==nn&&H.convert(Xt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=zt===js&&(St.has("EXT_color_buffer_half_float")||Dt.isWebGL2&&St.has("EXT_color_buffer_float"));if(zt!==li&&H.convert(zt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===Fn&&(Dt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-j&&q>=0&&q<=E.height-X&&z.readPixels(O,q,j,X,H.convert(Xt),H.convert(zt),yt)}finally{const Bt=R!==null?Nt.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(z.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(E,O,q=0){const j=Math.pow(2,-q),X=Math.floor(O.image.width*j),yt=Math.floor(O.image.height*j);w.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,E.x,E.y,X,yt),Mt.unbindTexture()},this.copyTextureToTexture=function(E,O,q,j=0){const X=O.image.width,yt=O.image.height,Ct=H.convert(q.format),Ot=H.convert(q.type);w.setTexture2D(q,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment),O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,j,E.x,E.y,X,yt,Ct,Ot,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,j,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Ct,O.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,j,E.x,E.y,Ct,Ot,O.image),j===0&&q.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,q,j,X=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=E.max.x-E.min.x+1,Ct=E.max.y-E.min.y+1,Ot=E.max.z-E.min.z+1,Bt=H.convert(j.format),Xt=H.convert(j.type);let zt;if(j.isData3DTexture)w.setTexture3D(j,0),zt=z.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)w.setTexture2DArray(j,0),zt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const Wt=z.getParameter(z.UNPACK_ROW_LENGTH),xe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Qe=z.getParameter(z.UNPACK_SKIP_PIXELS),Pe=z.getParameter(z.UNPACK_SKIP_ROWS),Rn=z.getParameter(z.UNPACK_SKIP_IMAGES),de=q.isCompressedTexture?q.mipmaps[X]:q.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,de.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,de.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,E.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,E.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,E.min.z),q.isDataTexture||q.isData3DTexture?z.texSubImage3D(zt,X,O.x,O.y,O.z,yt,Ct,Ot,Bt,Xt,de.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(zt,X,O.x,O.y,O.z,yt,Ct,Ot,Bt,de.data)):z.texSubImage3D(zt,X,O.x,O.y,O.z,yt,Ct,Ot,Bt,Xt,de),z.pixelStorei(z.UNPACK_ROW_LENGTH,Wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qe),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Rn),X===0&&j.generateMipmaps&&z.generateMipmap(zt),Mt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Mt.unbindTexture()},this.resetState=function(){b=0,A=0,R=null,Mt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Da?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ro?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$t?Fi:xh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Fi?$t:fe}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Og extends Hh{}Og.prototype.isWebGL1Renderer=!0;class Bh extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class zh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new C;class Zs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gh extends dn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let is;const Fs=new C,ss=new C,rs=new C,os=new kt,Os=new kt,Wh=new qt,wr=new C,ks=new C,Ar=new C,Mc=new kt,Xo=new kt,Sc=new kt;class kg extends he{constructor(t=new Gh){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new Ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zh(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new Zs(n,3,0,!1)),is.setAttribute("uv",new Zs(n,2,3,!1))}this.geometry=is,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Rr(wr.set(-.5,-.5,0),rs,o,ss,i,s),Rr(ks.set(.5,-.5,0),rs,o,ss,i,s),Rr(Ar.set(.5,.5,0),rs,o,ss,i,s),Mc.set(0,0),Xo.set(1,0),Sc.set(1,1);let a=t.ray.intersectTriangle(wr,ks,Ar,!1,Fs);if(a===null&&(Rr(ks.set(-.5,.5,0),rs,o,ss,i,s),Xo.set(0,1),a=t.ray.intersectTriangle(wr,Ar,ks,!1,Fs),a===null))return;const l=t.ray.origin.distanceTo(Fs);l<t.near||l>t.far||e.push({distance:l,point:Fs.clone(),uv:hn.getInterpolation(Fs,wr,ks,Ar,Mc,Xo,Sc,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Rr(r,t,e,n,i,s){os.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Os.x=s*os.x-i*os.y,Os.y=i*os.x+s*os.y):Os.copy(os),r.copy(t),r.x+=Os.x,r.y+=Os.y,r.applyMatrix4(Wh)}const bc=new C,Tc=new re,Ec=new re,Hg=new C,wc=new qt,Cr=new C,qo=new Tn,Ac=new qt,Yo=new oo;class Bg extends mt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rl,this.bindMatrix=new qt,this.bindMatrixInverse=new qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Cr),this.boundingBox.expandByPoint(Cr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Cr),this.boundingSphere.expandByPoint(Cr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(i),t.ray.intersectsSphere(qo)!==!1&&(Ac.copy(i).invert(),Yo.copy(t.ray).applyMatrix4(Ac),!(this.boundingBox!==null&&Yo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Yo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new re,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ku?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Tc.fromBufferAttribute(i.attributes.skinIndex,t),Ec.fromBufferAttribute(i.attributes.skinWeight,t),bc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Ec.getComponent(s);if(o!==0){const a=Tc.getComponent(s);wc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Hg.copy(bc).applyMatrix4(wc),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class Vh extends he{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xh extends Te{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Ie,u=Ie,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rc=new qt,zg=new qt;class Ha{constructor(t=[],e=[]){this.uuid=vn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new qt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:zg;Rc.multiplyMatrices(a,e[s]),Rc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ha(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Xh(e,t,t,nn,Fn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Vh),this.bones.push(o),this.boneInverses.push(new qt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class ba extends Ee{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const as=new qt,Cc=new qt,Pr=[],Pc=new rn,Gg=new qt,Hs=new mt,Bs=new Tn;class Wg extends mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ba(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Pc.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(Pc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Bs.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,as),Cc.multiplyMatrices(n,as),Hs.matrixWorld=Cc,Hs.raycast(t,Pr);for(let o=0,a=Pr.length;o<a;o++){const l=Pr[o];l.instanceId=s,l.object=this,e.push(l)}Pr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ba(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ba extends dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lc=new C,Ic=new C,Dc=new qt,jo=new oo,Lr=new Tn;class za extends he{constructor(t=new Ce,e=new Ba){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Lc.fromBufferAttribute(e,i-1),Ic.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Lc.distanceTo(Ic);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(i),Lr.radius+=s,t.ray.intersectsSphere(Lr)===!1)return;Dc.copy(i).invert(),jo.copy(t.ray).applyMatrix4(Dc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,u=new C,h=new C,d=new C,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=p,S=v-1;x<S;x+=f){const b=m.getX(x),A=m.getX(x+1);if(c.fromBufferAttribute(g,b),u.fromBufferAttribute(g,A),jo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const B=t.ray.origin.distanceTo(d);B<t.near||B>t.far||e.push({distance:B,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=p,S=v-1;x<S;x+=f){if(c.fromBufferAttribute(g,x),u.fromBufferAttribute(g,x+1),jo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Uc=new C,Nc=new C;class qh extends za{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Uc.fromBufferAttribute(e,i),Nc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uc.distanceTo(Nc);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vg extends za{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class co extends dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fc=new qt,Ta=new oo,Ir=new Tn,Dr=new C;class Ga extends he{constructor(t=new Ce,e=new co){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=s,t.ray.intersectsSphere(Ir)===!1)return;Fc.copy(i).invert(),Ta.copy(t.ray).applyMatrix4(Fc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);Dr.fromBufferAttribute(h,g),Oc(Dr,g,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Dr.fromBufferAttribute(h,m),Oc(Dr,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Oc(r,t,e,n,i,s,o){const a=Ta.distanceSqToPoint(r);if(a<e){const l=new C;Ta.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class _n extends Te{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ho extends Ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new C,u=new kt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends Ce{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function v(){const S=new C,b=new C;let A=0;const R=(e-t)/n;for(let B=0;B<=s;B++){const y=[],T=B/s,D=T*(e-t)+t;for(let N=0;N<=i;N++){const Y=N/i,P=Y*l+a,F=Math.sin(P),W=Math.cos(P);b.x=D*F,b.y=-T*n+g,b.z=D*W,h.push(b.x,b.y,b.z),S.set(F,R,W).normalize(),d.push(S.x,S.y,S.z),f.push(Y,1-T),y.push(m++)}_.push(y)}for(let B=0;B<i;B++)for(let y=0;y<s;y++){const T=_[y][B],D=_[y+1][B],N=_[y+1][B+1],Y=_[y][B+1];u.push(T,D,Y),u.push(D,N,Y),A+=6}c.addGroup(p,A,0),p+=A}function x(S){const b=m,A=new kt,R=new C;let B=0;const y=S===!0?t:e,T=S===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,g*T,0),d.push(0,T,0),f.push(.5,.5),m++;const D=m;for(let N=0;N<=i;N++){const P=N/i*l+a,F=Math.cos(P),W=Math.sin(P);R.x=y*W,R.y=g*T,R.z=y*F,h.push(R.x,R.y,R.z),d.push(0,T,0),A.x=F*.5+.5,A.y=W*.5*T+.5,f.push(A.x,A.y),m++}for(let N=0;N<i;N++){const Y=b+N,P=D+N;S===!0?u.push(P,P+1,Y):u.push(P+1,P,Y),B+=3}c.addGroup(p,B,S===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bn extends Ce{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/i,f=new C,m=new kt;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=s+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const v=p+g,x=v,S=v+n+1,b=v+n+2,A=v+1;a.push(x,S,A),a.push(S,b,A)}}this.setIndex(a),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ue extends Ce{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new C,d=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let b=0;b<=e;b++){const A=b/e;h.x=-t*Math.cos(i+A*s)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(i+A*s)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(A+S,1-x),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const x=u[p][v+1],S=u[p][v],b=u[p+1][v],A=u[p+1][v+1];(p!==0||o>0)&&f.push(x,S,A),(p!==n-1||l<Math.PI)&&f.push(S,b,A)}this.setIndex(f),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class no extends Ce{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new C,h=new C,d=new C;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*s,g=f/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;o.push(_,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pe extends dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kn extends pe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xg extends dn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pt(16777215),this.specular=new Pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Ur(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function qg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Yg(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function kc(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function Yh(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class Qs{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jg extends Qs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Il:s=t,a=2*e-n;break;case Dl:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Il:o=t,l=2*n-e;break;case Dl:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*_+.5*m,S=f*g-f*_;for(let b=0;b!==a;++b)s[b]=p*o[u+b]+v*o[c+b]+x*o[l+b]+S*o[h+b];return s}}class Kg extends Qs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class $g extends Qs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class En{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ur(e,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ur(t.times,Array),values:Ur(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $g(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case xs:e=this.InterpolantFactoryMethodLinear;break;case Mo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return xs;case this.InterpolantFactoryMethodSmooth:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&qg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mo,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const _=e[h+m];if(_!==e[d+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=xs;class As extends En{}As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Ks;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class jh extends En{}jh.prototype.ValueTypeName="color";class Ss extends En{}Ss.prototype.ValueTypeName="number";class Zg extends Qs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let u=c+a;c!==u;c+=4)Ze.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Hi extends En{InterpolantFactoryMethodLinear(t){return new Zg(this.times,this.values,this.getValueSize(),t)}}Hi.prototype.ValueTypeName="quaternion";Hi.prototype.DefaultInterpolation=xs;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends En{}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Ks;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends En{}bs.prototype.ValueTypeName="vector";class Jg{constructor(t,e=-1,n,i=sd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(t_(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(En.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Yg(l);l=kc(l,1,u),c=kc(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ss(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,_){if(f.length!==0){const g=[],p=[];Yh(f,g,p,m),g.length!==0&&_.push(new h(d,g,p))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const x=d[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Ss(".morphTargetInfluence["+_+"]",g,p))}l=f.length*o}else{const f=".bones["+e[h].name+"]";n(bs,f+".position",d,"pos",i),n(Hi,f+".quaternion",d,"rot",i),n(bs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Qg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ss;case"vector":case"vector2":case"vector3":case"vector4":return bs;case"color":return jh;case"quaternion":return Hi;case"bool":case"boolean":return As;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function t_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Qg(r.type);if(r.times===void 0){const e=[],n=[];Yh(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const si={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class e_{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const n_=new e_;class Cs{constructor(t){this.manager=t!==void 0?t:n_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class i_ extends Error{constructor(t,e){super(t),this.response=e}}class Kh extends Cs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=si.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Un[t]!==void 0){Un[t].push({onLoad:e,onProgress:n,onError:i});return}Un[t]=[],Un[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Un[t],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){h.read().then(({done:x,value:S})=>{if(x)p.close();else{_+=S.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let A=0,R=u.length;A<R;A++){const B=u[A];B.onProgress&&B.onProgress(b)}p.enqueue(S),v()}})}}});return new Response(g)}else throw new i_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{si.add(t,c);const u=Un[t];delete Un[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Un[t];if(u===void 0)throw this.manager.itemError(t),c;delete Un[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class s_ extends Cs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=si.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=$s("img");function l(){u(),si.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class wn extends Cs{constructor(t){super(t)}load(t,e,n,i){const s=new Te,o=new s_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class tr extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class $h extends tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ko=new qt,Hc=new C,Bc=new C;class Wa{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Hc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hc),Bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bc),e.updateMatrixWorld(),Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class r_ extends Wa{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ys*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class o_ extends tr{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new r_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const zc=new qt,zs=new C,$o=new C;class a_ extends Wa{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new kt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(zs),$o.copy(n.position),$o.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($o),n.updateMatrixWorld(),i.makeTranslation(-zs.x,-zs.y,-zs.z),zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc)}}class l_ extends tr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new a_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class c_ extends Wa{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Js extends tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new c_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zh extends tr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ys{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class h_ extends Cs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=si.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return si.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),si.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});si.add(t,l),s.manager.itemStart(t)}}class u_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Gc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Gc(){return(typeof performance>"u"?Date:performance).now()}const Va="\\[\\]\\.:\\/",d_=new RegExp("["+Va+"]","g"),Xa="[^"+Va+"]",f_="[^"+Va.replace("\\.","")+"]",p_=/((?:WC+[\/:])*)/.source.replace("WC",Xa),m_=/(WCOD+)?/.source.replace("WCOD",f_),g_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xa),__=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xa),v_=new RegExp("^"+p_+m_+g_+__+"$"),x_=["material","materials","bones","map"];class y_{constructor(t,e,n){const i=n||ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ee{constructor(t,e,n){this.path=e,this.parsedPath=n||ee.parseTrackName(e),this.node=ee.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ee.Composite(t,e,n):new ee(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(d_,"")}static parseTrackName(t){const e=v_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);x_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ee.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ee.Composite=y_;ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ee.prototype.GetterByBindingType=[ee.prototype._getValue_direct,ee.prototype._getValue_array,ee.prototype._getValue_arrayElement,ee.prototype._getValue_toArray];ee.prototype.SetterByBindingTypeAndVersioning=[[ee.prototype._setValue_direct,ee.prototype._setValue_direct_setNeedsUpdate,ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_array,ee.prototype._setValue_array_setNeedsUpdate,ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_arrayElement,ee.prototype._setValue_arrayElement_setNeedsUpdate,ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_fromArray,ee.prototype._setValue_fromArray_setNeedsUpdate,ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class M_ extends qh{constructor(t=10,e=10,n=4473924,i=8947848){n=new Pt(n),i=new Pt(i);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=d===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new Ce;u.setAttribute("position",new le(l,3)),u.setAttribute("color",new le(c,3));const h=new Ba({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ca);class S_{domElement;three;constructor(){this.three=new Hh({antialias:!0,powerPreference:"high-performance"}),this.domElement=this.three.domElement,this.three.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.three.setClearColor(0,1),this.three.toneMapping=lh,this.three.toneMappingExposure=.8}setSize(t,e){this.three.setSize(t,e)}dispose(){this.three.dispose()}}class b_{group;skyMat;constructor(){this.group=new sn;const t=new ue(5e4,64,48);t.scale(-1,1,1),this.skyMat=new Sn({vertexShader:`
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
      `,uniforms:{},side:je,depthWrite:!1}),this.group.add(new mt(t,this.skyMat))}update(t){}getMesh(){return this.group}}class T_{scene;camera;clock=new u_;frames=0;lastFpsUpdate=0;fps=0;stars;constructor(){this.scene=new Bh,this.scene.background=new Pt(0),this.stars=new b_,this.scene.add(this.stars.getMesh()),this.scene.add(new Zh(4473958,.2)),this.scene.add(new $h(4487082,2241348,.35)),this.camera=new We(60,window.innerWidth/window.innerHeight,.001,5e7),this.camera.position.set(0,0,10),this.camera.lookAt(0,0,0)}update(t){const e=this.clock.getElapsedTime();this.frames++,e-this.lastFpsUpdate>=1&&(this.fps=this.frames/(e-this.lastFpsUpdate),this.frames=0,this.lastFpsUpdate=e),this.stars.getMesh().position.copy(this.camera.position),this.stars.update(t)}getFps(){return this.fps}}class E_{root;helpOverlay=null;onPlay;onVab;onSettings;constructor(t,e,n){this.onPlay=t,this.onVab=e,this.onSettings=n,this.root=document.createElement("div"),this.root.className="panel",this.root.style.cssText=`
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
    `,t.querySelector("#help-close").addEventListener("click",()=>{t.remove(),this.helpOverlay=null}),document.body.appendChild(t),this.helpOverlay=t}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove(),this.helpOverlay?.remove()}}const Jh=[{id:"capsule_mk1",name:"MK-1 Capsule",kind:"capsule",size:"M",mass:1200,crewCapacity:1,hasParachute:!0,dragCoeff:.5},{id:"tank_s_lfo",name:"Fuel Tank S (LFO)",kind:"tank",size:"S",mass:200,fuelCapacity:4500,fuelType:"LFO",dragCoeff:.4},{id:"tank_m_lfo",name:"Fuel Tank M (LFO)",kind:"tank",size:"M",mass:600,fuelCapacity:45e3,fuelType:"LFO",dragCoeff:.4},{id:"tank_l_lfo",name:"Fuel Tank L (LFO)",kind:"tank",size:"L",mass:1200,fuelCapacity:9e4,fuelType:"LFO",dragCoeff:.4},{id:"tank_xl_lfo",name:"Fuel Tank XL (LFO)",kind:"tank",size:"XL",mass:2500,fuelCapacity:225e3,fuelType:"LFO",dragCoeff:.4},{id:"engine_ant",name:'"Ant" Engine',kind:"engine",size:"S",mass:50,thrust:88,isp:350,fuelType:"LFO"},{id:"engine_vector",name:'"Vector" Engine',kind:"engine",size:"M",mass:400,thrust:800,isp:340,fuelType:"LFO"},{id:"engine_mastodon",name:'"Mastodon" Engine',kind:"engine",size:"L",mass:1200,thrust:2e3,isp:330,fuelType:"LFO"},{id:"engine_mammoth",name:'"Mammoth" Engine',kind:"engine",size:"XL",mass:3e3,thrust:5e3,isp:310,fuelType:"LFO"},{id:"parachute_mk16",name:"Mk-16 Parachute",kind:"parachute",size:"M",mass:30,dragCoeff:5},{id:"legs_landini",name:'"Landini" Landing Legs',kind:"legs",size:"S",mass:80,dragCoeff:.1},{id:"heatshield_s",name:"Heat Shield S (Ablative)",kind:"heatshield",size:"S",mass:50,heatCapacity:5e4,dragCoeff:1.2},{id:"heatshield_m",name:"Heat Shield M (Ablative)",kind:"heatshield",size:"M",mass:150,heatCapacity:15e4,dragCoeff:1.2},{id:"heatshield_l",name:"Heat Shield L (Ablative)",kind:"heatshield",size:"L",mass:400,heatCapacity:4e5,dragCoeff:1.2},{id:"decoupler_1",name:"TD-1 Decoupler",kind:"decoupler",size:"M",mass:100,dragCoeff:.3},{id:"agena_target",name:"Agena Target Vehicle",kind:"gltf",size:"M",mass:1500,dragCoeff:.3,gltfUrl:"/models/agena.glb",gltfScale:.0015},{id:"apollo_soyuz",name:"Apollo Soyuz",kind:"gltf",size:"L",mass:5e3,dragCoeff:.3,gltfUrl:"/models/apollo_soyuz.glb",gltfScale:.0015},{id:"saturn_v",name:"Saturn V",kind:"gltf",size:"XL",mass:3e6,dragCoeff:.3,gltfUrl:"/models/saturn_v.glb",gltfScale:.0015},{id:"ares_1",name:"Ares I",kind:"gltf",size:"XL",mass:2e6,dragCoeff:.3,gltfUrl:"/models/ares_1.glb",gltfScale:.0015},{id:"apollo_lunar_module",name:"Apollo Lunar Module",kind:"gltf",size:"L",mass:15e3,dragCoeff:.3,gltfUrl:"/models/apollo_lunar_module.glb",gltfScale:.002},{id:"atlas_6",name:"Atlas 6 (Friendship 7)",kind:"gltf",size:"L",mass:12e4,dragCoeff:.3,gltfUrl:"/models/atlas_6.glb",gltfScale:.0015},{id:"atlas_9",name:"Atlas 9 (Faith 7)",kind:"gltf",size:"L",mass:12e4,dragCoeff:.3,gltfUrl:"/models/atlas_9.glb",gltfScale:.0015},{id:"crawler",name:"Crawler Transporter",kind:"gltf",size:"XL",mass:27e5,dragCoeff:.3,gltfUrl:"/models/crawler.glb",gltfScale:.001}];function Yr(r){return Jh.find(t=>t.id===r)}function Wc(r,t){if(t===rd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===va||t===vh){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===va)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class w_ extends Cs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new L_(e)}),this.register(function(e){return new B_(e)}),this.register(function(e){return new z_(e)}),this.register(function(e){return new G_(e)}),this.register(function(e){return new D_(e)}),this.register(function(e){return new U_(e)}),this.register(function(e){return new N_(e)}),this.register(function(e){return new F_(e)}),this.register(function(e){return new P_(e)}),this.register(function(e){return new O_(e)}),this.register(function(e){return new I_(e)}),this.register(function(e){return new H_(e)}),this.register(function(e){return new k_(e)}),this.register(function(e){return new R_(e)}),this.register(function(e){return new W_(e)}),this.register(function(e){return new V_(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ys.extractUrlBase(t);o=Ys.resolveURL(c,this.path)}else o=Ys.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new Kh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,o,function(u){e(u),s.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Qh){try{o[Kt.KHR_BINARY_GLTF]=new X_(t)}catch(h){i&&i(h);return}s=JSON.parse(o[Kt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sv(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Kt.KHR_MATERIALS_UNLIT:o[h]=new C_;break;case Kt.KHR_DRACO_MESH_COMPRESSION:o[h]=new q_(s,this.dracoLoader);break;case Kt.KHR_TEXTURE_TRANSFORM:o[h]=new Y_;break;case Kt.KHR_MESH_QUANTIZATION:o[h]=new j_;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function A_(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const Kt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class R_{constructor(t){this.parser=t,this.name=Kt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const u=new Pt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],fe);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Js(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new l_(u),c.distance=h;break;case"spot":c=new o_(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ni(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class C_{constructor(){this.name=Kt.KHR_MATERIALS_UNLIT}getMaterialType(){return ge}extendParams(t,e,n){const i=[];t.color=new Pt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],fe),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,$t))}return Promise.all(i)}}class P_{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class L_{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new kt(a,a)}return Promise.all(s)}}class I_{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class D_{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Pt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],fe)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,$t)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class U_{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class N_{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Pt().setRGB(a[0],a[1],a[2],fe),Promise.all(s)}}class F_{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class O_{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Pt().setRGB(a[0],a[1],a[2],fe),o.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,$t)),Promise.all(s)}}class k_{constructor(t){this.parser=t,this.name=Kt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class H_{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class B_{constructor(t){this.parser=t,this.name=Kt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class z_{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class G_{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class W_{constructor(t){this.name=Kt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class V_{constructor(t){this.name=Kt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==cn.TRIANGLES&&c.mode!==cn.TRIANGLE_STRIP&&c.mode!==cn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const m of h){const _=new qt,g=new C,p=new Ze,v=new C(1,1,1),x=new Wg(m.geometry,m.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&v.fromBufferAttribute(l.SCALE,S),x.setMatrixAt(S,_.compose(g,p,v));for(const S in l)if(S==="_COLOR_0"){const b=l[S];x.instanceColor=new ba(b.array,b.itemSize,b.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&m.geometry.setAttribute(S,l[S]);he.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Qh="glTF",Gs=12,Vc={JSON:1313821514,BIN:5130562};class X_{constructor(t){this.name=Kt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Gs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Qh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Gs,s=new DataView(t,Gs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Vc.JSON){const c=new Uint8Array(t,Gs+o,a);this.content=n.decode(c)}else if(l===Vc.BIN){const c=Gs+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class q_{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Kt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Ea[u]||u.toLowerCase();a[h]=o[u]}for(const u in t.attributes){const h=Ea[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[t.attributes[u]],f=ps[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const m in f.attributes){const _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}h(f)},a,c,fe,d)})})}}class Y_{constructor(){this.name=Kt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class j_{constructor(){this.name=Kt.KHR_MESH_QUANTIZATION}}class tu extends Qs{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-e,h=(n-e)/u,d=h*h,f=d*h,m=t*c,_=m-c,g=-2*f+3*d,p=f-d,v=1-g,x=p-d+h;for(let S=0;S!==a;S++){const b=o[_+S+a],A=o[_+S+l]*u,R=o[m+S+a],B=o[m+S]*u;s[S]=v*b+x*A+g*R+p*B}return s}}const K_=new Ze;class $_ extends tu{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return K_.fromArray(s).normalize().toArray(s),s}}const cn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xc={9728:Ie,9729:$e,9984:_a,9985:hh,9986:Xr,9987:Oi},qc={33071:Ye,33648:$r,10497:Je},Zo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ea={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Z_={CUBICSPLINE:void 0,LINEAR:xs,STEP:Ks},Jo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function J_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new pe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mn})),r.DefaultMaterial}function xi(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ni(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Q_(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,u=t.length;c<u;c++){const h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=t.length;c<u;c++){const h=t[c];if(n){const d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function tv(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ev(r){let t;const e=r.extensions&&r.extensions[Kt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Qo(e.attributes):t=r.indices+":"+Qo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+Qo(r.targets[n]);return t}function Qo(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function wa(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const iv=new qt;class sv{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new A_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new wn(this.options.manager):this.textureLoader=new h_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return xi(s,a,i),ni(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Kt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ys.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Zo[i.type],a=ps[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ee(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Zo[i.type],c=ps[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==h){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=e.cache.get(v);x||(_=new c(a,p*f,i.count*f/u),x=new zh(_,f/u),e.cache.add(v,x)),g=new Zs(x,l,d%f/u,m)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),g=new Ee(_,l,m);if(i.sparse!==void 0){const p=Zo.SCALAR,v=ps[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,b=new v(o[1],x,i.sparse.count*p),A=new c(o[2],S,i.sparse.count*l);a!==null&&(g=new Ee(g.array.slice(),g.itemSize,g.normalized));for(let R=0,B=b.length;R<B;R++){const y=b[R];if(g.setX(y,A[R*l]),l>=2&&g.setY(y,A[R*l+1]),l>=3&&g.setZ(y,A[R*l+2]),l>=4&&g.setW(y,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Xc[d.magFilter]||$e,u.minFilter=Xc[d.minFilter]||Oi,u.wrapS=qc[d.wrapS]||Je,u.wrapT=qc[d.wrapT]||Je,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(_){const g=new Te(_);g.needsUpdate=!0,d(g)}),e.load(Ys.resolveURL(h,s.path),m,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||nv(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Kt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Kt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Kt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new co,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ba,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return pe}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},l=s.extensions||{},c=[];if(l[Kt.KHR_MATERIALS_UNLIT]){const h=i[Kt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,e))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Pt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],fe),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",h.baseColorTexture,$t)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=be);const u=s.alphaMode||Jo.OPAQUE;if(u===Jo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Jo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ge&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new kt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==ge&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ge){const h=s.emissiveFactor;a.emissive=new Pt().setRGB(h[0],h[1],h[2],fe)}return s.emissiveTexture!==void 0&&o!==ge&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,$t)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),ni(h,s),e.associations.set(h,{materials:t}),s.extensions&&xi(i,h,s),h})}createUniqueName(t){const e=ee.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Kt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Yc(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],u=ev(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Kt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Yc(new Ce,c,e),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?J_(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const _=u[f],g=o[f];let p;const v=c[f];if(g.mode===cn.TRIANGLES||g.mode===cn.TRIANGLE_STRIP||g.mode===cn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Bg(_,v):new mt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===cn.TRIANGLE_STRIP?p.geometry=Wc(p.geometry,vh):g.mode===cn.TRIANGLE_FAN&&(p.geometry=Wc(p.geometry,va));else if(g.mode===cn.LINES)p=new qh(_,v);else if(g.mode===cn.LINE_STRIP)p=new za(_,v);else if(g.mode===cn.LINE_LOOP)p=new Vg(_,v);else if(g.mode===cn.POINTS)p=new Ga(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&tv(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),ni(p,s),g.extensions&&xi(i,p,g),e.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return s.extensions&&xi(i,h[0],s),h[0];const d=new sn;s.extensions&&xi(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new We(Pd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Oa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ni(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new qt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Ha(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let v=0,x=d.length;v<x;v++){const S=d[v],b=f[v],A=m[v],R=_[v],B=g[v];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const y=n._createAnimationTracks(S,b,A,R,B);if(y)for(let T=0;T<y.length;T++)p.push(y[T])}return new Jg(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,iv)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Vh:c.length>1?u=new sn:c.length===1?u=c[0]:u=new he,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),ni(u,s),s.extensions&&xi(n,u,s),s.matrix!==void 0){const h=new qt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new sn;n.name&&(s.name=i.createUniqueName(n.name)),ni(s,n),n.extensions&&xi(e,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof dn||d instanceof Te)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,l=[];Yn[s.path]===Yn.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Yn[s.path]){case Yn.weights:c=Ss;break;case Yn.rotation:c=Hi;break;case Yn.position:case Yn.scale:c=bs;break;default:switch(n.itemSize){case 1:c=Ss;break;case 2:case 3:default:c=bs;break}break}const u=i.interpolation!==void 0?Z_[i.interpolation]:xs,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+Yn[s.path],e.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=wa(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Hi?$_:tu;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rv(r,t,e){const n=t.attributes,i=new rn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const u=wa(ps[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new C,l=new C;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=e.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=wa(ps[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Tn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Yc(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Ea[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return Qt.workingColorSpace!==fe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),ni(r,t),rv(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Q_(r,t.targets,e):r})}const ms=66743e-15,Hn=1e-9,Bn=562500,ta=1/60,ov=9.80665,av=11944e22,Ft=.05,Aa=5;function An(r){return("/ellipse/"+r.replace(/^\//,"")).replace(/\/\//g,"/")}function Gt(r,t){const e=document.createElement("canvas");e.width=r,e.height=t;const n=e.getContext("2d");return[e,n]}function lv(r,t){const e=r*2*Math.PI-Math.PI;return[t*Math.PI-Math.PI/2,e]}const cv=[{lat:.7,lon:-1.8,radiusLat:.5,radiusLon:.8,color:"#4a7c3f"},{lat:-.4,lon:-1.3,radiusLat:.6,radiusLon:.35,color:"#5a8c4a"},{lat:.85,lon:.4,radiusLat:.25,radiusLon:.3,color:"#6a9c5a"},{lat:.1,lon:.6,radiusLat:.55,radiusLon:.4,color:"#8a7c3f"},{lat:.7,lon:1.6,radiusLat:.55,radiusLon:1,color:"#6a8c4a"},{lat:-.6,lon:2.4,radiusLat:.25,radiusLon:.3,color:"#9a8c5a"},{lat:1.1,lon:-.9,radiusLat:.2,radiusLon:.2,color:"#8aac7a"}];function hv(r,t=2){const e=r.width,n=r.height,o=r.getContext("2d").getImageData(0,0,e,n).data,[a,l]=Gt(e,n),c=l.createImageData(e,n),u=c.data,h=(f,m)=>(Math.max(0,Math.min(n-1,m))*e+Math.max(0,Math.min(e-1,f)))*4;for(let f=0;f<n;f++)for(let m=0;m<e;m++){const _=o[h(m-1,f-1)]/255,g=o[h(m,f-1)]/255,p=o[h(m+1,f-1)]/255,v=o[h(m-1,f)]/255,x=o[h(m+1,f)]/255,S=o[h(m-1,f+1)]/255,b=o[h(m,f+1)]/255,A=o[h(m+1,f+1)]/255,R=p+2*x+A-(_+2*v+S),B=S+2*b+A-(_+2*g+p),y=R*t,T=B*t,D=Math.sqrt(y*y+T*T+1),N=(f*e+m)*4;u[N]=Math.round((y/D*.5+.5)*255),u[N+1]=Math.round((T/D*.5+.5)*255),u[N+2]=Math.round(1/D*255),u[N+3]=255}l.putImageData(c,0,0);const d=new _n(a);return d.wrapS=d.wrapT=Je,d.anisotropy=4,d}function ui(r,t,e,n,i){const s=new _n(r);s.wrapS=s.wrapT=Je,s.colorSpace=$t,s.anisotropy=4;let o;t&&(o=hv(t,2));let a;e&&(a=new _n(e),a.wrapS=a.wrapT=Je,a.anisotropy=4);let l;n&&(l=new _n(n),l.wrapS=l.wrapT=Je,l.anisotropy=4);let c;return i&&(c=new _n(i),c.wrapS=c.wrapT=Je,c.anisotropy=4),{color:s,normal:o,roughness:a,metalness:l,ao:c}}function Bi(r){let t=r|0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function di(r,t,e,n=.02){const i=r.getImageData(0,0,t,e),s=i.data;for(let o=0;o<s.length;o+=4){const a=(Math.random()-.5)*2*n*255;s[o]=Math.min(255,Math.max(0,s[o]+a)),s[o+1]=Math.min(255,Math.max(0,s[o+1]+a)),s[o+2]=Math.min(255,Math.max(0,s[o+2]+a))}r.putImageData(i,0,0)}function uv(){const[e,n]=Gt(1024,512),i=n.createImageData(1024,512),s=i.data,o=new Float32Array(1024*512);for(let l=0;l<512;l++)for(let c=0;c<1024;c++){const u=c/1024,h=l/512,[d,f]=lv(u,h);let m=0;for(const _ of cv){const g=(d-_.lat)/_.radiusLat,p=(f-_.lon)/_.radiusLon;if(g*g+p*p<1){m=1;break}}(h<.07||h>.93)&&(m=.5),o[l*1024+c]=m}for(let l=0;l<512;l++)for(let c=0;c<1024;c++){const u=(l*1024+c)*4,h=o[l*1024+c]??0,d=Math.random()*.15+.85,f=(h*.5+.1*d)*255,m=Math.min(255,Math.max(0,Math.round(f)));s[u]=m,s[u+1]=m,s[u+2]=m,s[u+3]=255}n.putImageData(i,0,0);const a=new _n(e);return a.wrapS=a.wrapT=Je,a}function dv(r="M"){const[n,i]=Gt(2048,2048),[s,o]=Gt(2048,2048),[a,l]=Gt(2048,2048),[c,u]=Gt(2048,2048),[h,d]=Gt(2048,2048),f=Bi(r.charCodeAt(0)*1e3+42),m=r==="S",_=r==="L"||r==="XL";i.fillStyle="#ecece8",i.fillRect(0,0,2048,2048);const g=i.createLinearGradient(0,0,0,2048);g&&(g.addColorStop(0,"rgba(0,0,0,0.04)"),g.addColorStop(.5,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(0,0,0,0.03)"),i.fillStyle=g,i.fillRect(0,0,2048,2048));const v=2048/(m?6:_?16:10);i.strokeStyle="#d0d0ca",i.lineWidth=3;for(let b=v;b<2048;b+=v)i.beginPath(),i.moveTo(0,b),i.lineTo(2048,b),i.stroke(),i.strokeStyle="rgba(255,255,255,0.12)",i.lineWidth=1.5,i.beginPath(),i.moveTo(0,b-1.5),i.lineTo(2048,b-1.5),i.stroke(),i.strokeStyle="#d0d0ca",i.lineWidth=3;const x=m?12:_?28:18;i.strokeStyle="rgba(90,90,100,0.06)",i.lineWidth=2;for(let b=1;b<x;b++){const A=b/x*2048;i.beginPath(),i.moveTo(A,0),i.lineTo(A,2048),i.stroke()}i.fillStyle="#c8c8c2";for(let b=v;b<2048;b+=v)for(let A=40;A<2008;A+=80)i.beginPath(),i.arc(A,b,5,0,Math.PI*2),i.fill(),i.strokeStyle="#b0b0aa",i.lineWidth=1,i.stroke();const S=m?4:_?14:8;for(let b=0;b<S;b++){const A=f()*2048*.85+153.6,R=f()*2048*.75+2048*.1,B=50+f()*180,y=40+f()*120;i.fillStyle=`rgb(${200+f()*30}, ${160+f()*20}, ${100+f()*20})`,i.globalAlpha=.7+f()*.25,i.fillRect(A,R,B,y),i.fillStyle=`rgb(${180+f()*20}, ${140+f()*20}, ${80+f()*20})`;for(let T=0;T<20;T++)i.beginPath(),i.arc(A+f()*B,R+f()*y,2+f()*5,0,Math.PI*2),i.fill();i.globalAlpha=1}i.fillStyle="#6a6a70",i.fillRect(0,0,2048,2048*.015),i.fillRect(0,2048*.985,2048,2048*.015),i.strokeStyle="rgba(90,90,100,0.35)",i.lineWidth=4,i.beginPath(),i.moveTo(2048*.5,0),i.lineTo(2048*.5,2048),i.stroke(),o.fillStyle="#808080",o.fillRect(0,0,2048,2048),o.strokeStyle="#b8b8b8",o.lineWidth=10;for(let b=v;b<2048;b+=v)o.beginPath(),o.moveTo(0,b),o.lineTo(2048,b),o.stroke();o.strokeStyle="#989898",o.lineWidth=4;for(let b=1;b<x;b++){const A=b/x*2048;o.beginPath(),o.moveTo(A,0),o.lineTo(A,2048),o.stroke()}o.fillStyle="#d0d0d0";for(let b=v;b<2048;b+=v)for(let A=40;A<2008;A+=80)o.beginPath(),o.arc(A,b,6,0,Math.PI*2),o.fill();l.fillStyle="#a0a0a0",l.fillRect(0,0,2048,2048),l.strokeStyle="#d0d0d0",l.lineWidth=12;for(let b=v;b<2048;b+=v)l.beginPath(),l.moveTo(0,b),l.lineTo(2048,b),l.stroke();for(let b=0;b<S;b++){const A=f()*2048*.85+153.6,R=f()*2048*.75+2048*.1,B=50+f()*180,y=40+f()*120;l.fillStyle="#e0e0e0",l.fillRect(A,R,B,y)}l.fillStyle="#606060",l.fillRect(0,0,2048,2048*.015),l.fillRect(0,2048*.985,2048,2048*.015),u.fillStyle="#080808",u.fillRect(0,0,2048,2048),u.fillStyle="#d0d0d0",u.fillRect(0,0,2048,2048*.015),u.fillRect(0,2048*.985,2048,2048*.015),u.fillStyle="#707070",u.fillRect(2048*.49,0,2048*.02,2048),d.fillStyle="#ffffff",d.fillRect(0,0,2048,2048),d.strokeStyle="#808080",d.lineWidth=14;for(let b=v;b<2048;b+=v)d.beginPath(),d.moveTo(0,b),d.lineTo(2048,b),d.stroke();d.strokeStyle="#b0b0b0",d.lineWidth=8;for(let b=1;b<x;b++){const A=b/x*2048;d.beginPath(),d.moveTo(A,0),d.lineTo(A,2048),d.stroke()}return di(i,2048,2048,.012),ui(n,s,a,c,h)}function fv(){const[e,n]=Gt(2048,2048),[i,s]=Gt(2048,2048),[o,a]=Gt(2048,2048),[l,c]=Gt(2048,2048),[u,h]=Gt(2048,2048),d=Bi(12345);n.fillStyle="#f5f5ee",n.fillRect(0,0,2048,2048*.78);const f=n.createLinearGradient(0,0,0,2048*.78);f&&(f.addColorStop(0,"rgba(20,20,25,0.05)"),f.addColorStop(.5,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(20,20,25,0.03)"),n.fillStyle=f,n.fillRect(0,0,2048,2048*.78)),n.strokeStyle="rgba(180,180,180,0.15)",n.lineWidth=2;for(let _=2048*.08;_<2048*.75;_+=2048*.07)n.beginPath(),n.moveTo(0,_),n.lineTo(2048,_),n.stroke();n.fillStyle="#2a2a2e",n.fillRect(0,2048*.78,2048,2048*.22);for(let _=0;_<1500;_++){const g=d()*2048,p=2048*.78+d()*2048*.22,v=1+d()*4,x=25+d()*45;n.fillStyle=`rgb(${x},${x},${x+3})`,n.beginPath(),n.arc(g,p,v,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(10,10,12,0.35)",n.lineWidth=1+d()*2;for(let _=0;_<50;_++){const g=d()*2048,p=2048*.78+d()*2048*.18,v=30+d()*120;n.beginPath(),n.moveTo(g,p),n.lineTo(g+(d()-.5)*40,p+v),n.stroke()}n.fillStyle="#5a5a60",n.fillRect(0,2048*.77,2048,2048*.015),n.fillStyle="#8a8a90",n.fillRect(0,2048*.775,2048,2048*.005),n.fillStyle="#003366",n.fillRect(0,2048*.2,2048,2048*.035),n.fillStyle="#b31b1b",n.fillRect(0,2048*.245,2048,2048*.025),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(0,2048*.27,2048,2048*.003);const m=[[2048*.28,2048*.12],[2048*.55,2048*.14]];for(const[_,g]of m)n.fillStyle="#0a0a15",n.beginPath(),n.ellipse(_,g,2048*.04,2048*.03,0,0,Math.PI*2),n.fill(),n.strokeStyle="#9a9a9e",n.lineWidth=5,n.beginPath(),n.ellipse(_,g,2048*.045,2048*.035,0,0,Math.PI*2),n.stroke(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.beginPath(),n.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),n.stroke();n.fillStyle="#3a3a3e";for(let _=0;_<4;_++){const g=_/4*Math.PI*2,p=2048*.5+Math.cos(g)*2048*.38,v=2048*.35+Math.sin(g)*2048*.05;n.beginPath(),n.arc(p,v,14,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.stroke()}n.fillStyle="#e0e0d8",n.fillRect(0,0,2048,2048*.04),n.strokeStyle="#a0a0a0",n.lineWidth=2,n.beginPath(),n.moveTo(0,2048*.04),n.lineTo(2048,2048*.04),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,2048,2048),s.strokeStyle="#a8a8a8",s.lineWidth=5;for(let _=2048*.08;_<2048*.75;_+=2048*.07)s.beginPath(),s.moveTo(0,_),s.lineTo(2048,_),s.stroke();s.strokeStyle="#585858",s.lineWidth=3;for(let _=0;_<2048;_+=48)s.beginPath(),s.moveTo(_,2048*.78),s.lineTo(_,2048),s.stroke();for(let _=2048*.8;_<2048;_+=48)s.beginPath(),s.moveTo(0,_),s.lineTo(2048,_),s.stroke();s.strokeStyle="#c0c0c0",s.lineWidth=8,s.beginPath(),s.moveTo(0,2048*.775),s.lineTo(2048,2048*.775),s.stroke();for(const[_,g]of m)s.strokeStyle="#d0d0d0",s.lineWidth=10,s.beginPath(),s.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),s.stroke();a.fillStyle="#808080",a.fillRect(0,0,2048,2048*.78),a.fillStyle="#e0e0e0",a.fillRect(0,2048*.78,2048,2048*.22),a.fillStyle="#484848",a.fillRect(0,2048*.77,2048,2048*.015);for(const[_,g]of m)a.fillStyle="#181818",a.beginPath(),a.ellipse(_,g,2048*.045,2048*.035,0,0,Math.PI*2),a.fill();c.fillStyle="#080808",c.fillRect(0,0,2048,2048),c.fillStyle="#d0d0d0",c.fillRect(0,2048*.77,2048,2048*.015),c.fillRect(0,0,2048,2048*.04);for(const[_,g]of m)c.fillStyle="#b0b0b0",c.beginPath(),c.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),c.fill();for(let _=0;_<4;_++){const g=_/4*Math.PI*2,p=2048*.5+Math.cos(g)*2048*.38,v=2048*.35+Math.sin(g)*2048*.05;c.beginPath(),c.arc(p,v,16,0,Math.PI*2),c.fill()}h.fillStyle="#ffffff",h.fillRect(0,0,2048,2048),h.strokeStyle="#808080",h.lineWidth=10;for(let _=2048*.08;_<2048*.75;_+=2048*.07)h.beginPath(),h.moveTo(0,_),h.lineTo(2048,_),h.stroke();h.strokeStyle="#606060",h.lineWidth=6;for(let _=0;_<2048;_+=48)h.beginPath(),h.moveTo(_,2048*.78),h.lineTo(_,2048),h.stroke();for(let _=2048*.8;_<2048;_+=48)h.beginPath(),h.moveTo(0,_),h.lineTo(2048,_),h.stroke();h.strokeStyle="#909090",h.lineWidth=12,h.beginPath(),h.moveTo(0,2048*.775),h.lineTo(2048,2048*.775),h.stroke();for(const[_,g]of m)h.strokeStyle="#707070",h.lineWidth=14,h.beginPath(),h.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),h.stroke();return di(n,2048,2048,.018),ui(e,i,o,l,u)}function pv(){const[e,n]=Gt(1024,1024),[i,s]=Gt(1024,1024),[o,a]=Gt(1024,1024),[l,c]=Gt(1024,1024),[u,h]=Gt(1024,1024),d=Bi(54321);n.fillStyle="#3a3a40",n.fillRect(0,0,1024,1024*.35);for(let m=0;m<200;m++){const _=d()*1024,g=d()*1024*.35,p=5+d()*30;n.strokeStyle=`rgba(255,255,255,${.02+d()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(_,g),n.lineTo(_,g+p),n.stroke()}n.fillStyle="#4a4a50",n.fillRect(0,1024*.35,1024,1024*.06),n.fillStyle="#2a2a2e";for(let m=16;m<1024;m+=32)n.beginPath(),n.arc(m,1024*.38,5,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=1,n.stroke();for(let m=1024*.41;m<1024*.95;m++){const _=(m-419.84)/552.96,g=Math.round(180+40*(1-_)),p=Math.round(100+20*(1-_)),v=Math.round(40+10*(1-_));n.fillStyle=`rgb(${g}, ${p}, ${v})`,n.fillRect(0,m,1024,1)}n.strokeStyle="rgba(120,70,30,0.4)",n.lineWidth=1;for(let m=8;m<1024;m+=16)n.beginPath(),n.moveTo(m,1024*.41),n.lineTo(m,1024*.95),n.stroke();const f=n.createLinearGradient(0,1024*.85,0,1024);f&&(f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(.5,"rgba(0,0,0,0.3)"),f.addColorStop(1,"rgba(0,0,0,0.6)"),n.fillStyle=f,n.fillRect(0,1024*.85,1024,1024*.15)),n.fillStyle="#5a5a60",n.fillRect(0,1024*.95,1024,1024*.025),n.fillStyle="#7a7a80",n.fillRect(0,1024*.975,1024,1024*.025),n.fillStyle="#4a4a50";for(let m=0;m<4;m++){const _=m/4*Math.PI*2+Math.PI/4,g=1024*.5+Math.cos(_)*1024*.42,p=1024*.25+Math.sin(_)*1024*.05;n.fillRect(g-15,p-15,30,30),n.strokeStyle="#6a6a70",n.lineWidth=2,n.strokeRect(g-15,p-15,30,30)}s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let m=0;m<1024;m+=4)s.beginPath(),s.moveTo(m,0),s.lineTo(m,1024*.35),s.stroke();s.fillStyle="#c0c0c0";for(let m=16;m<1024;m+=32)s.beginPath(),s.arc(m,1024*.38,5,0,Math.PI*2),s.fill();s.strokeStyle="#606060",s.lineWidth=3;for(let m=8;m<1024;m+=16)s.beginPath(),s.moveTo(m,1024*.41),s.lineTo(m,1024*.95),s.stroke();s.strokeStyle="#a0a0a0",s.lineWidth=6,s.beginPath(),s.moveTo(0,1024*.41),s.lineTo(1024,1024*.41),s.stroke(),s.beginPath(),s.moveTo(0,1024*.95),s.lineTo(1024,1024*.95),s.stroke(),a.fillStyle="#505050",a.fillRect(0,0,1024,1024*.35),a.fillStyle="#606060",a.fillRect(0,1024*.35,1024,1024*.06),a.fillStyle="#808080",a.fillRect(0,1024*.41,1024,1024*.54),a.fillStyle="#b0b0b0",a.fillRect(0,1024*.85,1024,1024*.15),a.fillStyle="#404040",a.fillRect(0,1024*.95,1024,1024*.05),c.fillStyle="#e0e0e0",c.fillRect(0,0,1024,1024),c.fillStyle="#808080",c.fillRect(0,1024*.85,1024,1024*.15),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=12,h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.beginPath(),h.moveTo(0,1024*.41),h.lineTo(1024,1024*.41),h.stroke(),h.strokeStyle="#808080",h.lineWidth=4;for(let m=8;m<1024;m+=16)h.beginPath(),h.moveTo(m,1024*.41),h.lineTo(m,1024*.95),h.stroke();return h.strokeStyle="#707070",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.95),h.lineTo(1024,1024*.95),h.stroke(),di(n,1024,1024,.01),ui(e,i,o,l,u)}function mv(){const[e,n]=Gt(1024,1024),[i,s]=Gt(1024,1024),[o,a]=Gt(1024,1024),[l,c]=Gt(1024,1024),[u,h]=Gt(1024,1024),d=Bi(11111);n.fillStyle="#3a3d30",n.fillRect(0,0,1024,1024);for(let f=0;f<100;f++){const m=d()*1024,_=d()*1024,g=10+d()*50;n.strokeStyle=`rgba(255,255,255,${.02+d()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(m,_),n.lineTo(m,_+g),n.stroke()}n.fillStyle="#8a8a8e";for(let f=50;f<1024;f+=200)n.fillRect(0,f,1024,15),n.fillStyle="#6a6a6e",n.fillRect(0,f+15,1024,2),n.fillStyle="#8a8a8e";n.fillStyle="#2a2d22",n.fillRect(0,1024*.85,1024,1024*.15),n.strokeStyle="#4a4d42",n.lineWidth=1;for(let f=0;f<1024;f+=32)n.beginPath(),n.moveTo(f,1024*.85),n.lineTo(f,1024),n.stroke();for(let f=1024*.85;f<1024;f+=32)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();n.fillStyle="#222";for(let f=0;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);n.fillStyle="#ffcc00";for(let f=20;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=2;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024*.85),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=6;for(let f=50;f<1024;f+=200)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();s.strokeStyle="#606060",s.lineWidth=3;for(let f=0;f<1024;f+=32)s.beginPath(),s.moveTo(f,1024*.85),s.lineTo(f,1024),s.stroke();for(let f=1024*.85;f<1024;f+=32)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#707070",a.fillRect(0,0,1024,1024*.85),a.fillStyle="#909090";for(let f=50;f<1024;f+=200)a.fillRect(0,f,1024,17);a.fillStyle="#b0b0b0",a.fillRect(0,1024*.85,1024,1024*.15),c.fillStyle="#303030",c.fillRect(0,0,1024,1024),c.fillStyle="#e0e0e0";for(let f=50;f<1024;f+=200)c.fillRect(0,f,1024,17);c.fillStyle="#a0a0a0",c.fillRect(0,1024*.85,1024,1024*.15),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#808080",h.lineWidth=8;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024*.85),h.stroke();h.strokeStyle="#909090",h.lineWidth=10;for(let f=50;f<1024;f+=200)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return di(n,1024,1024,.02),ui(e,i,o,l,u)}function gv(){const[e,n]=Gt(1024,1024),[i,s]=Gt(1024,1024),[o,a]=Gt(1024,1024),[l,c]=Gt(1024,1024),[u,h]=Gt(1024,1024),d=Bi(22222);n.fillStyle="#4a4a4e",n.fillRect(0,0,1024,1024);for(let f=0;f<150;f++){const m=d()*1024,_=d()*1024,g=5+d()*30;n.strokeStyle=`rgba(255,255,255,${.02+d()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(m,_),n.lineTo(m,_+g),n.stroke()}n.fillStyle="#7a7a7e",n.fillRect(0,1024*.35,1024,1024*.3),n.fillStyle="#3a3a3e";for(let f=24;f<1024;f+=48)n.beginPath(),n.arc(f,1024*.5,6,0,Math.PI*2),n.fill(),n.strokeStyle="#6a6a6e",n.lineWidth=1,n.stroke();n.fillStyle="#cc3300";for(let f=0;f<8;f++){const m=f/8*Math.PI*2,_=1024*.5+Math.cos(m)*1024*.35,g=1024*.5+Math.sin(m)*1024*.35;n.beginPath(),n.arc(_,g,8,0,Math.PI*2),n.fill()}n.fillStyle="#5a5a5e",n.fillRect(0,0,1024,1024*.08),n.fillRect(0,1024*.92,1024,1024*.08),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#b0b0b0",s.lineWidth=10,s.beginPath(),s.moveTo(0,1024*.35),s.lineTo(1024,1024*.35),s.stroke(),s.beginPath(),s.moveTo(0,1024*.65),s.lineTo(1024,1024*.65),s.stroke(),s.fillStyle="#c0c0c0";for(let f=24;f<1024;f+=48)s.beginPath(),s.arc(f,1024*.5,6,0,Math.PI*2),s.fill();return s.strokeStyle="#a0a0a0",s.lineWidth=8,s.beginPath(),s.moveTo(0,1024*.08),s.lineTo(1024,1024*.08),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#404040",a.fillRect(0,1024*.35,1024,1024*.3),a.fillStyle="#505050",a.fillRect(0,0,1024,1024*.08),a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#d0d0d0",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#707070",h.lineWidth=12,h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.beginPath(),h.moveTo(0,1024*.65),h.lineTo(1024,1024*.65),h.stroke(),h.strokeStyle="#808080",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.08),h.lineTo(1024,1024*.08),h.stroke(),h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),di(n,1024,1024,.015),ui(e,i,o,l,u)}function _v(){const[e,n]=Gt(1024,1024),[i,s]=Gt(1024,1024),[o,a]=Gt(1024,1024),[l,c]=Gt(1024,1024),[u,h]=Gt(1024,1024),d=Bi(33333);n.fillStyle="#1a1a1c",n.fillRect(0,0,1024,1024);for(let f=0;f<3e3;f++){const m=d()*1024,_=d()*1024,g=1+d()*4,p=20+d()*50,v=d()*20-10;n.fillStyle=`rgb(${p+v},${p},${p-v})`,n.beginPath(),n.arc(m,_,g,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(40,20,10,0.3)",n.lineWidth=1+d()*2;for(let f=0;f<80;f++){const m=d()*1024,_=d()*1024*.3,g=50+d()*200;n.beginPath(),n.moveTo(m,_),n.lineTo(m+(d()-.5)*40,_+g),n.stroke()}n.strokeStyle="#0a0a0c",n.lineWidth=2;for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(f,0),n.lineTo(f,1024),n.stroke();for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();s.fillStyle="#808080",s.fillRect(0,0,1024,1024);for(let f=0;f<500;f++){const m=d()*1024,_=d()*1024,g=2+d()*5;s.fillStyle=`rgb(${128+d()*30},${128+d()*30},${128+d()*30})`,s.beginPath(),s.arc(m,_,g,0,Math.PI*2),s.fill()}s.strokeStyle="#404040",s.lineWidth=6;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024),s.stroke();for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#f0f0f0",a.fillRect(0,0,1024,1024),a.fillStyle="#ffffff",a.strokeStyle="#ffffff",a.lineWidth=8;for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f,1024),a.stroke();for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(0,f),a.lineTo(1024,f),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#303030",h.lineWidth=10;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024),h.stroke();for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return di(n,1024,1024,.03),ui(e,i,o,l,u)}function er(){const[e,n]=Gt(1024,1024),[i,s]=Gt(1024,1024),[o,a]=Gt(1024,1024),[l,c]=Gt(1024,1024),[u,h]=Gt(1024,1024),d=Bi(44444),f=n.createLinearGradient(0,0,0,1024);f&&(f.addColorStop(0,"#c49a38"),f.addColorStop(.15,"#daad4a"),f.addColorStop(.3,"#b8842a"),f.addColorStop(.5,"#d4a843"),f.addColorStop(.65,"#c49030"),f.addColorStop(.8,"#d8b050"),f.addColorStop(1,"#c49a38"),n.fillStyle=f,n.fillRect(0,0,1024,1024));for(let m=0;m<400;m++){const _=d()*1024,g=d()*1024,p=5+d()*60,v=3+d()*30;d()>.5?n.fillStyle=`rgba(255,225,150,${.05+d()*.1})`:n.fillStyle=`rgba(80,60,20,${.04+d()*.08})`,n.fillRect(_,g,p,v)}n.strokeStyle="rgba(60,40,10,0.3)",n.lineWidth=.5;for(let m=0;m<150;m++){const _=d()*1024,g=d()*1024,p=d()*Math.PI*2,v=5+d()*40;n.beginPath(),n.moveTo(_,g),n.lineTo(_+Math.cos(p)*v,g+Math.sin(p)*v),n.stroke()}for(let m=0;m<80;m++){const _=d()*1024,g=d()*1024,p=3+d()*20,v=60+d()*60,x=50+d()*40;n.fillStyle=`rgba(${v+30}, ${x}, ${v/2}, ${.1+d()*.2})`,n.beginPath(),n.arc(_,g,p,0,Math.PI*2),n.fill()}for(let m=0;m<30;m++){const _=d()*1024,g=d()*1024,p=2+d()*15;n.fillStyle=`rgba(255,240,200,${.1+d()*.15})`,n.beginPath(),n.arc(_,g,p,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(160,120,40,0.2)",n.lineWidth=1+d()*2;for(let m=0;m<1024;m+=20+d()*30)n.beginPath(),n.moveTo(0,m),n.lineTo(1024,m),n.stroke();s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#b0b0b0",s.lineWidth=1+d()*2;for(let m=0;m<500;m++){const _=d()*1024,g=d()*1024,p=d()*Math.PI*2,v=3+d()*40;s.beginPath(),s.moveTo(_,g),s.lineTo(_+Math.cos(p)*v,g+Math.sin(p)*v),s.stroke()}s.fillStyle="#606060";for(let m=0;m<80;m++){const _=d()*1024,g=d()*1024,p=3+d()*20;s.beginPath(),s.arc(_,g,p,0,Math.PI*2),s.fill()}a.fillStyle="#808080",a.fillRect(0,0,1024,1024),a.fillStyle="#b0b0b0";for(let m=0;m<300;m++){const _=d()*1024,g=d()*1024,p=5+d()*60,v=3+d()*30;a.fillRect(_,g,p,v)}a.fillStyle="#d0d0d0";for(let m=0;m<80;m++){const _=d()*1024,g=d()*1024,p=3+d()*20;a.beginPath(),a.arc(_,g,p,0,Math.PI*2),a.fill()}c.fillStyle="#f0f0f0",c.fillRect(0,0,1024,1024),c.fillStyle="#404040";for(let m=0;m<80;m++){const _=d()*1024,g=d()*1024,p=3+d()*20;c.beginPath(),c.arc(_,g,p,0,Math.PI*2),c.fill()}h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#707070",h.lineWidth=3;for(let m=0;m<300;m++){const _=d()*1024,g=d()*1024,p=d()*Math.PI*2,v=5+d()*40;h.beginPath(),h.moveTo(_,g),h.lineTo(_+Math.cos(p)*v,g+Math.sin(p)*v),h.stroke()}h.fillStyle="#808080";for(let m=0;m<80;m++){const _=d()*1024,g=d()*1024,p=5+d()*22;h.beginPath(),h.arc(_,g,p,0,Math.PI*2),h.fill()}return di(n,1024,1024,.025),ui(e,i,o,l,u)}function eu(){const[e,n]=Gt(1024,1024),[i,s]=Gt(1024,1024),[o,a]=Gt(1024,1024),[l,c]=Gt(1024,1024),[u,h]=Gt(1024,1024);n.fillStyle="#f5f5f0",n.fillRect(0,0,1024,1024),n.strokeStyle="rgba(200,200,190,0.15)",n.lineWidth=1;for(let d=0;d<1024;d+=4)n.beginPath(),n.moveTo(d,0),n.lineTo(d,1024),n.stroke();n.strokeStyle="rgba(200,200,190,0.1)";for(let d=0;d<1024;d+=4)n.beginPath(),n.moveTo(0,d),n.lineTo(1024,d),n.stroke();n.strokeStyle="rgba(160,160,150,0.3)",n.lineWidth=2;for(let d=0;d<1024;d+=32)n.beginPath(),n.moveTo(d,0),n.lineTo(d,1024),n.stroke();for(let d=0;d<1024;d+=32)n.beginPath(),n.moveTo(0,d),n.lineTo(1024,d),n.stroke();n.strokeStyle="rgba(120,120,110,0.4)",n.lineWidth=1,n.setLineDash([8,16]);for(let d=16;d<1024;d+=64)n.beginPath(),n.moveTo(d,0),n.lineTo(d,1024),n.stroke();for(let d=16;d<1024;d+=64)n.beginPath(),n.moveTo(0,d),n.lineTo(1024,d),n.stroke();n.setLineDash([]),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let d=0;d<1024;d+=8)s.beginPath(),s.moveTo(d,0),s.lineTo(d,1024),s.stroke();for(let d=0;d<1024;d+=8)s.beginPath(),s.moveTo(0,d),s.lineTo(1024,d),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=4;for(let d=0;d<1024;d+=32)s.beginPath(),s.moveTo(d,0),s.lineTo(d,1024),s.stroke();for(let d=0;d<1024;d+=32)s.beginPath(),s.moveTo(0,d),s.lineTo(1024,d),s.stroke();a.fillStyle="#c0c0c0",a.fillRect(0,0,1024,1024),a.fillStyle="#e0e0e0",a.strokeStyle="#e0e0e0",a.lineWidth=6;for(let d=0;d<1024;d+=32)a.beginPath(),a.moveTo(d,0),a.lineTo(d,1024),a.stroke();for(let d=0;d<1024;d+=32)a.beginPath(),a.moveTo(0,d),a.lineTo(1024,d),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#a0a0a0",h.lineWidth=6;for(let d=0;d<1024;d+=32)h.beginPath(),h.moveTo(d,0),h.lineTo(d,1024),h.stroke();for(let d=0;d<1024;d+=32)h.beginPath(),h.moveTo(0,d),h.lineTo(1024,d),h.stroke();return di(n,1024,1024,.02),ui(e,i,o,l,u)}const jc={S:{radius:.5*Ft,height:.7*Ft},M:{radius:.7*Ft,height:1.1*Ft},L:{radius:1*Ft,height:1.6*Ft},XL:{radius:1.4*Ft,height:2.2*Ft}},ze=Math.PI,_e=64;let ea=0;function na(){return ea=ea*1664525+1013904223>>>0,(ea>>>0)/4294967295}function Ve(r,t){const e=r.attributes.position;if(!e)return;const n=e.array;for(let i=0;i<n.length;i+=3){const s=(na()-.5)*2,o=(na()-.5)*2,a=(na()-.5)*2;n[i]=n[i]+s*t,n[i+1]=n[i+1]+o*t,n[i+2]=n[i+2]+a*t}e.needsUpdate=!0,r.computeVertexNormals()}const nu=new w_,ci=new Map;async function vv(r,t=1){const e=An(r);if(ci.has(r))return ci.get(r).clone();try{const i=(await nu.loadAsync(e)).scene;return i.traverse(s=>{if(s instanceof mt)if(s.castShadow=!0,s.receiveShadow=!0,s.material){const o=Array.isArray(s.material)?s.material:[s.material];for(const a of o)if(a instanceof pe){if(a.roughness=Math.max(.1,a.roughness??.5),a.metalness=Math.max(0,a.metalness??0),a.color){const c={h:0,s:0,l:0};a.color.getHSL(c),c.s<.3&&(c.s=Math.min(1,c.s*1.5+.05),c.l=Math.min(1,Math.max(.1,c.l*1.1)),a.color.setHSL(c.h,c.s,c.l))}const l=s.name.toLowerCase();(l.includes("engine")||l.includes("nozzle")||l.includes("thruster")||l.includes("motor"))&&(a.emissive=new Pt(4465152),a.emissiveIntensity=.05),a.needsUpdate=!0}else if(a instanceof ge||a instanceof Xg){const l=new pe({color:a.color??16777215,map:a.map,normalMap:a.normalMap,roughnessMap:a.roughnessMap,metalnessMap:a.metalnessMap,aoMap:a.aoMap,roughness:.5,metalness:.1});s.material=l}}else s.material=new pe({color:13421772,roughness:.5,metalness:.1})}),ci.set(r,i),i.clone()}catch(n){return console.error("Failed to load GLTF:",r,n),null}}const ia=new Map;function on(r,t){return ia.has(r)||ia.set(r,t()),ia.get(r)}function we(r,t={}){const e={map:r.color,normalMap:r.normal,roughnessMap:r.roughness,metalnessMap:r.metalness,roughness:1,metalness:1,...t};return r.ao&&(e.aoMap=r.ao,e.aoMapIntensity=1),r.emissive&&(e.emissiveMap=r.emissive),new pe(e)}function ae(r,t=1){const e=r.attributes.position;if(!e)return;let n=r.attributes.uv;n||(n=new Ee(new Float32Array(e.count*2),2));for(let i=0;i<e.count;i++){const s=e.getX(i),o=e.getY(i),a=e.getZ(i),c=(Math.atan2(s,a)+Math.PI)/(2*Math.PI),u=(o+1)*.5*t;n.setXY(i,c,u)}r.setAttribute("uv",n),n.needsUpdate=!0,r.attributes.uv2||r.setAttribute("uv2",n.clone())}function iu(r){const t=new sn;t.name=r.id;const e=jc[r.size];switch(r.kind){case"capsule":xv(t,e,r.id);break;case"tank":yv(t,e,r.size);break;case"engine":Mv(t,e,r.size);break;case"parachute":Sv(t,e);break;case"legs":bv(t,e);break;case"decoupler":Tv(t,e);break;case"heatshield":Ev(t,e);break;case"gltf":{if(r.gltfUrl&&ci.has(r.gltfUrl)){const n=r.gltfScale??1,i=ci.get(r.gltfUrl).clone();i.scale.setScalar(n);const s=new rn().setFromObject(i),o=new C;s.getCenter(o),i.position.sub(o);const a=[],l=[];i.traverse(c=>{if(c instanceof mt){const u=c.name.toLowerCase();if(u.includes("engine")||u.includes("nozzle")||u.includes("thruster")||u.includes("motor")||u.includes("combustion")||c.position.y<-.1){const f=new rn().setFromObject(c),m=new C;f.getCenter(m);const _=m.clone().sub(i.position);a.push(_),l.push(c)}c.castShadow=!0,c.receiveShadow=!0}}),i.userData.nozzlePoints=a,i.userData.engineMeshes=l,t.add(i)}else{const n=jc[r.size],i=new hi(n.radius*2,n.height*.5,n.radius*2),s=new pe({color:8947882,roughness:.6,metalness:.2,transparent:!0,opacity:.5}),o=new mt(i,s);o.position.y=-n.height*.25,t.add(o)}break}}return t}function xv(r,t,e){const n=t.radius,i=t.height,s=e.includes("mk1"),o=on(`capsule_${s?"mk1":"mk2"}`,fv),a=we(o),l=on("gold",er),c=we(l),u=new oe(n,n,i*.6,_e);ae(u);const h=new mt(u,a);h.position.y=i*.05,r.add(h);const d=new ue(n,_e,_e,0,ze*2,0,ze/2);ae(d,.5);const f=new mt(d,a);f.position.y=i*.35,r.add(f);const m=new mt(new ue(n*.08,12,8),c);m.position.y=i*.35+n*.5,r.add(m);const _=s?14500932:30673,g=new pe({color:_,roughness:.6,metalness:.1}),p=new oe(n*1.04,n*1.04,i*.05,_e);ae(p),Ve(p,Ft*.008);const v=new mt(p,g);v.position.y=i*.05,r.add(v);const x=new oe(n*1.04,n*1.04,i*.03,_e);ae(x),Ve(x,Ft*.008);const S=new mt(x,g);S.position.y=-i*.15,r.add(S);const b=new oe(n*1.3,n*.95,i*.15,_e);ae(b),Ve(b,Ft*.01);const A=new mt(b,c);A.position.y=-i*.3-i*.075,r.add(A);const R=we(o,{color:1726856,roughness:.1,metalness:.8,transparent:!0,opacity:.3}),B=new mt(new ho(n*.2,16),R);B.position.set(n+.001,i*.18,0),B.rotation.y=-ze/2,r.add(B);const y=new ge({color:3381759,transparent:!0,opacity:.6}),T=new mt(new bn(n*.2,n*.24,16),y);T.position.set(n+.001,i*.18,0),T.rotation.y=-ze/2,r.add(T)}function yv(r,t,e){const n=t.radius,i=t.height,s=on(`tank_${e}`,()=>dv(e)),o=we(s),a=on("gold",er),l=we(a),c=new oe(n,n,i,_e);ae(c);const u=new mt(c,o);r.add(u);const h=i*.03,d=new oe(n*1.03,n*1.03,h,_e);ae(d),Ve(d,Ft*.006);const f=new mt(d,l);f.position.y=i/2-h/2,r.add(f);const m=new oe(n*1.03,n*1.03,h,_e);ae(m),Ve(m,Ft*.006);const _=new mt(m,l);_.position.y=-i/2+h/2,r.add(_);for(let v=0;v<3;v++){const x=new no(n*1.01,h*1.5,6,_e);ae(x),Ve(x,Ft*.005);const S=new mt(x,l);S.position.y=-i/2+i*.2*(v+1),S.rotation.x=ze/2,r.add(S)}const g=new no(n*1.02,h*1.2,6,_e);ae(g),Ve(g,Ft*.005);const p=new mt(g,l);p.position.y=0,p.rotation.x=ze/2,r.add(p)}function Mv(r,t,e){const n=t.radius,i=t.height,s=on(`engine_${e}`,pv),o=we(s),a=on("gold",er),l=we(a),c=new oe(n*1.4,n*.6,i*.25,_e);ae(c);const u=new mt(c,o);u.position.y=i*.35,r.add(u);const h=new oe(n*.6,n*.5,i*.06,_e);ae(h),Ve(h,Ft*.015);const d=new mt(h,l);d.position.y=i*.12,r.add(d);const f=new oe(n*.5,n*.85,i*.4,_e);ae(f,1.5),Ve(f,Ft*.01);const m=new mt(f,o);m.position.y=-i*.12,r.add(m);const _=we(s,{color:1712682,roughness:.7,metalness:.5}),g=new oe(n*.35,n*.7,i*.38,_e);ae(g,1.5),Ve(g,Ft*.012);const p=new mt(g,_);p.position.y=-i*.12,r.add(p);const v=new oe(n*.88,n*.88,i*.03,_e);ae(v),Ve(v,Ft*.008);const x=new mt(v,l);x.position.y=-i*.12-i*.2-i*.015,r.add(x);const S=new ge({color:16746496,transparent:!0,opacity:.4}),b=new mt(new bn(0,n*.3,_e),S);b.position.y=-i*.12-i*.2-i*.02,b.rotation.x=-ze/2,r.add(b)}function Sv(r,t){const e=t.radius,n=t.height,i=on("fabric",eu),s=on("gold",er),o=we(s),a=we(i,{color:8952234,roughness:.5,metalness:.1}),l=new oe(e*.35,e*.35,n*.18,12);ae(l);const c=new mt(l,a);c.position.y=n*.55,r.add(c);const u=we(i,{color:6978186,roughness:.4,metalness:.2}),h=new oe(e*.37,e*.37,n*.03,12);ae(h);const d=new mt(h,u);d.position.y=n*.55+n*.09,r.add(d);const f=new oe(e*.37,e*.37,n*.02,12);ae(f);const m=new mt(f,o);m.position.y=n*.55-n*.09,r.add(m)}function Ra(r){const t=new sn,e=r.radius,n=r.height,i=24,s=on("fabric",eu),o=we(s,{side:be,transparent:!0,opacity:.95}),a=new ue(e*1.8,i,i,0,ze*2,0,ze*.5);ae(a,.5);const l=new mt(a,o);l.position.y=n*.3,l.rotation.x=ze,t.add(l);const c=we(s,{color:14500932,side:be,transparent:!0,opacity:.9});for(let h=0;h<6;h++){const d=h/6*ze*2,f=new hi(e*.03,n*.7,e*.015),m=new mt(f,c);m.position.set(Math.cos(d)*e*.9,n*.4,Math.sin(d)*e*.9),m.rotation.x=ze,m.lookAt(0,n*.8,0),t.add(m)}const u=we(s,{color:6978186,roughness:.5,metalness:.4});for(let h=0;h<4;h++){const d=h/4*ze*2+ze/4;for(let f=0;f<3;f++){const m=new oe(.006,.006,n*.15,4);ae(m);const _=new mt(m,u),g=d+(f-1)*.3;_.position.set(Math.cos(g)*e*1.5,n*.15-n*.06*f,Math.sin(g)*e*1.5),t.add(_)}}return t}function bv(r,t){const e=t.radius,n=t.height,i=on("legs",mv),s=we(i),o=we(i,{color:2764066,roughness:.8,metalness:.2});for(let a=0;a<4;a++){const l=a/4*ze*2+ze/4,c=new oe(.01,.007,n*.35,6);ae(c);const u=new mt(c,s),h=Math.cos(l)*e*.65,d=Math.sin(l)*e*.65;u.position.set(h,-n/2-n*.175,d),u.rotation.z=Math.cos(l)*.3,u.rotation.x=Math.sin(l)*.3,r.add(u);const f=new oe(.02,.025,.008,6);ae(f);const m=new mt(f,o);m.position.set(Math.cos(l)*e*.95,-n/2-n*.35,Math.sin(l)*e*.95),r.add(m)}}function Tv(r,t){const e=t.radius,n=t.height,i=on("decoupler",gv),s=we(i),o=on("gold",er),a=we(o),l=new oe(e*1.05,e*.92,n*.12,_e);ae(l),Ve(l,Ft*.008);const c=new mt(l,s);r.add(c);const u=new oe(e*1.08,e*1.08,n*.04,_e);ae(u),Ve(u,Ft*.005);const h=new mt(u,a);h.position.y=n*.06,r.add(h);const d=new oe(e*.92,e*.92,n*.04,_e);ae(d),Ve(d,Ft*.008);const f=new mt(d,s);f.position.y=-n*.06,r.add(f)}function Ev(r,t){const e=t.radius,n=t.height,i=on("heatshield",_v),s=we(i),o=new oe(e*1.2,e*.8,n*.2,_e,1,!0);ae(o,.5),Ve(o,Ft*.012);const a=new mt(o,s);a.position.y=-n*.1,r.add(a);const l=new oe(e*.8,e*.8,n*.08,_e);ae(l),Ve(l,Ft*.01);const c=new mt(l,s);c.position.y=-n*.2,r.add(c)}const su=Object.freeze(Object.defineProperty({__proto__:null,buildDeployedParachute:Ra,buildPartMesh:iu,gltfCache:ci,gltfLoader:nu,loadGLTF:vv},Symbol.toStringTag,{value:"Module"}));class io{roots=[];addRoot(t){this.roots.push(t)}totalFuelCapacity(){let t=0;const e=n=>{n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}totalMass(){let t=0;const e=n=>{t+=n.part.mass,n.children.forEach(e)};return this.roots.forEach(e),t}totalMassWithFuel(){let t=0;const e=n=>{t+=n.part.mass,n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}centerOfMass(){let t=0,e=0,n=0,i=0;const s=o=>{const a=o.part.mass;t+=a,e+=o.position[0]*a,n+=o.position[1]*a,i+=o.position[2]*a,o.children.forEach(s)};return this.roots.forEach(s),t===0?[0,0,0]:[e/t,n/t,i/t]}toMesh(){const t=new sn,e=(i,s)=>{const o=iu(i.part);o.position.set(i.position[0],i.position[1],i.position[2]),o.rotation.y=i.rotation,s.add(o),i.children.forEach(a=>e(a,o))};this.roots.forEach(i=>e(i,t));const n=this.centerOfMass();for(const i of t.children)i.position.x-=n[0],i.position.y-=n[1],i.position.z-=n[2];return t}}const wv={S:.6*Ft,M:1*Ft,L:1.4*Ft,XL:2*Ft};function jr(r,t,e){const n=Yr(t);if(!n)return e;const i=wv[n.size]||.6*Ft;return r.addRoot({part:n,position:[0,e+i/2,0],rotation:0,children:[]}),e+i}const Av={tiny:{tank:"tank_s_lfo",engine:"engine_ant"},small:{tank:"tank_m_lfo",engine:"engine_vector"},medium:{tank:"tank_l_lfo",engine:"engine_mastodon"},large:{tank:"tank_xl_lfo",engine:"engine_mammoth"}};function Kc(r,t,e,n=[]){const i=Av[e];if(!i)return t;for(const s of[i.tank,i.engine,...n])t=jr(r,s,t);return t}function Rv(r){const t=r.toLowerCase(),e=/sun|солн|heliocentric/.test(t),n=/mars|марс/.test(t),i=/venus|венер/.test(t),s=/mercury|меркур/.test(t),o=/moon|лун/.test(t),a=/orbit|орбит|station|станц|satellite|спутник/.test(t),l=/suborbit|суборбит|test|тест|hop|прыж/.test(t),c=/land|сади|посад|touchdown/.test(t)&&!/flyby|пролет/.test(t),u=/return|back|верн|обратн|round.?trip|there\s+and\s+back/.test(t)||o&&c||n&&c,h=u||/parachute|парашют|chute/.test(t)||!c,d=c||/legs|ноги|landing\s+gear/.test(t);let f=1,m="small";return l?(f=1,m="tiny"):a?(f=1,m="small"):o?(f=u?2:1,m="medium"):n||i?(f=u?3:2,m="large"):s?(f=2,m="medium"):e?(f=3,m="large"):/big|large|тяже|больш|huge|super|giant/.test(t)?(f=2,m="large"):/small|tiny|легк|малень/.test(t)?(f=1,m="tiny"):/safe|50%|half/.test(t)?(f=2,m="medium",f=2):(f=1,m="small"),/heavy|super|giant|тяжел/.test(t)&&m!=="large"&&(m=m==="tiny"?"small":"large"),/safe|50%|half\s+fuel/.test(t)&&(f=2,m="large"),{stages:f,stageSize:m,needsParachute:h,needsLegs:d,needsReturn:u}}function Cv(r){const t=new io;let e=0;const n=r.stageSize,i=r.needsReturn?Math.max(1,r.stages-1):r.stages;for(let s=0;s<i;s++){const o=s===0?n:n==="large"&&s>0?"medium":n,a=[];s===0&&r.needsLegs&&a.push("legs_landini"),e=Kc(t,e,o,a)}return r.needsReturn&&r.stages>1&&(e=jr(t,"decoupler_1",e),e=Kc(t,e,n==="large"?"small":"tiny")),e=jr(t,"capsule_mk1",e),r.needsParachute&&(e=jr(t,"parachute_mk16",e)),t}function Pv(r){const t=Rv(r);return Cv(t)}const Ws={S:.8*Ft,M:1.2*Ft,L:1.8*Ft,XL:2.5*Ft};class Lv{scene;camera;assembly;rocketGroup;rootEl;partListEl;currentRocketEl;onLaunch;stackHeight=0;addedPartNames=[];vabAzimuth=0;vabPolar=Math.PI/2;vabDist=3;vabIsDragging=!1;vabPrevMouse={x:0,y:0};vabTarget=new C(0,Ft,0);constructor(t){this.onLaunch=t,this.scene=new Bh,this.scene.background=new Pt(658714),this.scene.add(new Zh(4473958,.5));const e=new Js(16777215,3);e.position.set(2,4,3),this.scene.add(e);const n=new Js(8947916,1);n.position.set(-2,1,-1),this.scene.add(n);const i=new $h(8947916,4473958,.8);this.scene.add(i);const s=10,o=20,a=new M_(s,o,3359846,2241365);a.position.y=-.3,this.scene.add(a);const l=new bn(.5,.8,32),c=new pe({color:2241365,metalness:.6,roughness:.4,side:be}),u=new mt(l,c);u.rotation.x=-Math.PI/2,u.position.y=-.28,this.scene.add(u),this.camera=new We(50,window.innerWidth/window.innerHeight,.01,1e3),this.updateVabCamera();const h=Ft*4,d=new mt(new hi(h,.02*Ft,h),new pe({color:1843264,roughness:.9}));d.position.y=-Ft*.3,this.scene.add(d),this.assembly=new io,this.rocketGroup=new sn,this.scene.add(this.rocketGroup),this.setupVabOrbit(),this.rootEl=document.createElement("div"),this.rootEl.style.cssText="position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;",this.rootEl.innerHTML=`
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
    `,this.partListEl=this.rootEl.querySelector("#vab-parts"),this.currentRocketEl=this.rootEl.querySelector("#vab-current"),this.buildPartList(),this.buildPresets(),this.updateCurrentList(),this.rootEl.querySelector("#vab-launch").addEventListener("click",()=>{this.assembly.roots.length>0&&this.onLaunch(this.assembly)}),this.rootEl.querySelector("#vab-remove").addEventListener("click",()=>this.removeLast()),this.rootEl.querySelector("#vab-clear").addEventListener("click",()=>this.clearAll())}buildPresets(){const t=[{label:"🚀 Suborbital",desc:"suborbital test",color:"#6688aa"},{label:"🛸 Earth Orbit",desc:"earth orbit",color:"#4488FF"},{label:"🌙 Moon Landing",desc:"land on moon",color:"#88AACC"},{label:"🌙 Moon Return",desc:"land on moon and return",color:"#EACD9E"},{label:"🌙+🛡️ Moon Safe",desc:"safe moon landing and return with 50% fuel",color:"#66DD88"},{label:"🔴 Mars",desc:"mars mission",color:"#d4733a"},{label:"☀️ Solar Orbit",desc:"orbit around the sun",color:"#ffdd44"},{label:"🪐 Heavy Lifter",desc:"heavy interplanetary",color:"#CC88AA"}],e=this.rootEl.querySelector("#vab-presets");for(const n of t){const i=document.createElement("button");i.textContent=n.label,i.title=n.desc,i.style.cssText=`flex:1;min-width:80px;padding:5px 6px;background:rgba(244,245,242,0.06);color:${n.color};border:1px solid rgba(244,245,242,0.1);border-radius:3px;font-size:9px;cursor:pointer;pointer-events:auto;text-align:center;white-space:nowrap;`,i.addEventListener("mouseenter",()=>{i.style.background="rgba(244,245,242,0.12)"}),i.addEventListener("mouseleave",()=>{i.style.background="rgba(244,245,242,0.06)"}),i.addEventListener("click",()=>{this.clearAll(),this.assembly=Pv(n.desc),this.refreshMesh(),this.syncPartsFromAssembly()}),e.appendChild(i)}}buildPartList(){for(const t of Jh){const e=document.createElement("button"),n=t.size?` [${t.size}]`:"";let i="";t.kind==="tank"&&t.fuelCapacity&&(i=` — ${(t.fuelCapacity/1e3).toFixed(0)}t`),t.kind==="engine"&&t.thrust&&(i=` — ${t.thrust}kN`),e.textContent=t.name+n+i,e.title=`${t.kind} — mass: ${t.mass}kg${t.fuelCapacity?", fuel: "+t.fuelCapacity+"kg":""}${t.thrust?", thrust: "+t.thrust+"kN":""}`,e.style.cssText="display:block;width:100%;padding:6px 8px;background:transparent;color:#F4F5F2;border:none;border-radius:3px;font-size:11px;text-align:left;cursor:pointer;margin-bottom:2px;",e.addEventListener("mouseenter",()=>{e.style.background="rgba(234,205,158,0.1)"}),e.addEventListener("mouseleave",()=>{e.style.background="transparent"}),e.addEventListener("click",()=>this.addPart(t)),this.partListEl.appendChild(e)}}addPart(t){const e=Ws[t.size]||.6*Ft,n=this.stackHeight+e/2;this.assembly.addRoot({part:t,position:[0,n,0],rotation:0,children:[]}),this.stackHeight+=e,this.addedPartNames.push(t.name),this.refreshMesh(),this.updateCurrentList()}removeLast(){if(this.assembly.roots.length===0)return;const t=this.assembly.roots.pop(),e=Ws[t.part.size]||.6*Ft;this.stackHeight-=e,this.addedPartNames.pop(),this.refreshMesh(),this.updateCurrentList()}clearAll(){this.assembly=new io,this.stackHeight=0,this.addedPartNames=[],this.refreshMesh(),this.updateCurrentList()}updateCurrentList(){if(this.addedPartNames.length===0){this.currentRocketEl.innerHTML='<div style="color:rgba(244,245,242,0.3);font-size:10px;font-style:italic;">No parts — click from list below</div>';return}const t=this.assembly.roots.reduce((n,i)=>n+i.part.mass+this.childMass(i),0),e=this.assembly.roots.reduce((n,i)=>n+(i.part.fuelCapacity??0)+this.childFuel(i),0);this.currentRocketEl.innerHTML='<div style="color:rgba(244,245,242,0.4);font-size:9px;letter-spacing:0.05em;margin-bottom:4px;">CURRENT ROCKET (top to bottom):</div>'+[...this.addedPartNames].reverse().map((n,i)=>`<div style="color:#F4F5F2;font-size:10px;padding:1px 0;${i===0?"color:#EACD9E;":""}">${i===0?"▲ ":""}${n}</div>`).join("")+`<div style="color:rgba(244,245,242,0.35);font-size:9px;margin-top:6px;border-top:1px solid rgba(244,245,242,0.1);padding-top:4px;">${this.addedPartNames.length} parts | ${t.toFixed(1)}kg | ${e.toFixed(0)}kg fuel</div>`}childMass(t){return t.children.reduce((e,n)=>e+n.part.mass+this.childMass(n),0)}childFuel(t){return t.children.reduce((e,n)=>e+(n.part.fuelCapacity??0)+this.childFuel(n),0)}updateVabCamera(){const t=this.vabDist*Math.sin(this.vabPolar)*Math.cos(this.vabAzimuth),e=this.vabDist*Math.cos(this.vabPolar),n=this.vabDist*Math.sin(this.vabPolar)*Math.sin(this.vabAzimuth);this.camera.position.set(this.vabTarget.x+t,this.vabTarget.y+e,this.vabTarget.z+n),this.camera.lookAt(this.vabTarget)}setupVabOrbit(){const t=e=>{e.button===0&&(this.vabIsDragging=!0,this.vabPrevMouse={x:e.clientX,y:e.clientY})};document.addEventListener("mousedown",t),document.addEventListener("mousemove",e=>{if(!this.vabIsDragging)return;const n=e.clientX-this.vabPrevMouse.x,i=e.clientY-this.vabPrevMouse.y;this.vabAzimuth-=n*.005,this.vabPolar=Math.max(.05,Math.min(Math.PI-.05,this.vabPolar+i*.005)),this.vabPrevMouse={x:e.clientX,y:e.clientY},this.updateVabCamera()}),document.addEventListener("mouseup",()=>{this.vabIsDragging=!1}),document.addEventListener("wheel",e=>{this.vabDist*=e.deltaY>0?1.1:.9,this.vabDist=Math.max(.5,Math.min(50,this.vabDist)),this.updateVabCamera()},{passive:!0})}async refreshMesh(){for(;this.rocketGroup.children.length>0;){const t=this.rocketGroup.children[0];t&&this.rocketGroup.remove(t)}if(this.assembly.roots.length>0){if(!this.rootEl.querySelector(".vab-name-input")){const c=document.createElement("div");c.className="vab-name-row",c.style.cssText="padding:4px 0;margin-bottom:6px;",c.innerHTML=`
          <input type="text" class="vab-name-input" placeholder="Name your rocket..."
            style="width:100%;background:rgba(244,245,242,0.08);border:1px solid rgba(244,245,242,0.15);
            border-radius:4px;padding:6px 8px;color:#F4F5F2;font-size:11px;font-family:system-ui,sans-serif;
            outline:none;box-sizing:border-box;" maxlength="30"
          />
        `,this.currentRocketEl.parentElement?.insertBefore(c,this.currentRocketEl)}if(this.assembly.roots.some(c=>c.part.kind==="gltf"&&c.part.gltfUrl&&!ci.has(c.part.gltfUrl))){const{loadGLTF:c}=await oh(async()=>{const{loadGLTF:u}=await Promise.resolve().then(()=>su);return{loadGLTF:u}},void 0);for(const u of this.assembly.roots)u.part.kind==="gltf"&&u.part.gltfUrl&&!ci.has(u.part.gltfUrl)&&(await c(u.part.gltfUrl,u.part.gltfScale??1)||console.warn("GLTF load failed, using placeholder for:",u.part.name))}const e=this.assembly.toMesh();e.traverse(c=>{if(c instanceof mt&&c.material){c.visible=!0;const u=c.material;Array.isArray(u)||(u.transparent=!1,u.opacity=1,u.depthWrite=!0,u.depthTest=!0)}}),this.rocketGroup.add(e);let n=0;for(const c of this.assembly.roots){const u=(d,f)=>{if(d.part.kind==="decoupler"){const _=new bn(.15,.25,16),g=new ge({color:16737860,side:be,transparent:!0,opacity:.5}),p=new mt(_,g);p.position.set(0,f,0),p.rotation.x=-Math.PI/2,this.rocketGroup.add(p)}const m=Ws[d.part.size]||.6*Ft;for(const _ of d.children)u(_,f-m)},h=Ws[c.part.size]||.6*Ft;u(c,n+h/2),n+=h}const i=new rn().setFromObject(this.rocketGroup),s=i.getSize(new C),o=i.getCenter(new C),a=Math.max(s.x,s.y,s.z,.1),l=a*3.5;this.camera.position.set(o.x,o.y+a*.5,o.z+l),this.camera.lookAt(o.x,o.y,o.z),this.camera.updateProjectionMatrix()}}syncPartsFromAssembly(){this.addedPartNames=[],this.stackHeight=0;const t=(e,n)=>{for(const i of e){this.addedPartNames.push(i.part.name);const s=Ws[i.part.size]||.6*Ft;this.stackHeight+=s,t(i.children)}};t(this.assembly.roots),this.updateCurrentList()}mount(){document.body.appendChild(this.rootEl)}unmount(){this.rootEl.remove()}}class qa{name;mass;position;velocity;constructor(t,e,n,i){this.name=t,this.mass=e,this.position=[...n],this.velocity=[...i]}applyForce(t,e){const n=t[0]/this.mass,i=t[1]/this.mass,s=t[2]/this.mass;this.velocity[0]+=n*e,this.velocity[1]+=i*e,this.velocity[2]+=s*e,this.position[0]+=this.velocity[0]*e,this.position[1]+=this.velocity[1]*e,this.position[2]+=this.velocity[2]*e}kineticEnergy(){const t=this.velocity[0]**2+this.velocity[1]**2+this.velocity[2]**2;return .5*this.mass*t}}class Iv{rocket;system;position;velocity;throttle=0;constructor(t,e,n,i){this.rocket=t,this.system=e,this.position=[...n],this.velocity=[...i]}consumeFuel(t,e){this.rocket.consumeFuel(t,e)}}const ls=Hn*Bn,sa=.5,ra=200,Nr=4,Fr=3,$c=2;class Dv{camera;dist=2.5;targetDist=2.5;azimuth=0;targetAzimuth=0;polar=Math.PI/2;targetPolar=Math.PI/2;isDragging=!1;prevMouse={x:0,y:0};canvas=null;smoothPos=new C;initialized=!1;orbitKeys={left:!1,right:!1,up:!1,down:!1};zoomKeys={in:!1,out:!1};constructor(t){this.camera=t,this.setupKeyboard()}setupKeyboard(){window.addEventListener("keydown",t=>{if(t.shiftKey)switch(t.key){case"ArrowLeft":this.orbitKeys.left=!0,t.preventDefault();break;case"ArrowRight":this.orbitKeys.right=!0,t.preventDefault();break;case"ArrowUp":this.orbitKeys.up=!0,t.preventDefault();break;case"ArrowDown":this.orbitKeys.down=!0,t.preventDefault();break}(t.key==="z"||t.key==="Z")&&(this.zoomKeys.in=!0),(t.key==="x"||t.key==="X")&&(this.zoomKeys.out=!0)}),window.addEventListener("keyup",t=>{switch(t.key){case"ArrowLeft":this.orbitKeys.left=!1;break;case"ArrowRight":this.orbitKeys.right=!1;break;case"ArrowUp":this.orbitKeys.up=!1;break;case"ArrowDown":this.orbitKeys.down=!1;break;case"z":case"Z":this.zoomKeys.in=!1;break;case"x":case"X":this.zoomKeys.out=!1;break}})}initialiseAt(t,e,n){const i=t.position[0]*ls,s=t.position[1]*ls,o=t.position[2]*ls,a=new C(i,s,o),l=this.targetDist*Math.sin(this.polar)*Math.cos(this.azimuth),c=this.targetDist*Math.cos(this.polar),u=this.targetDist*Math.sin(this.polar)*Math.sin(this.azimuth);this.camera.position.set(i+l,s+c,o+u),this.camera.up.set(0,1,0),this.camera.lookAt(a)}setAzimuth(t){this.azimuth=t,this.targetAzimuth=t}setPolar(t){this.polar=t,this.targetPolar=t}zoom(t){this.targetDist*=t,this.targetDist=Math.max(sa,Math.min(ra,this.targetDist))}enableOrbit(t){this.canvas=t,t.addEventListener("mousedown",e=>{e.button===0&&(this.isDragging=!0,this.prevMouse={x:e.clientX,y:e.clientY})}),window.addEventListener("mousemove",e=>{if(!this.isDragging)return;const n=e.clientX-this.prevMouse.x,i=e.clientY-this.prevMouse.y;this.targetAzimuth-=n*.005,this.targetPolar=Math.max(.05,Math.min(Math.PI-.05,this.targetPolar+i*.005)),this.prevMouse={x:e.clientX,y:e.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),t.addEventListener("wheel",e=>{e.preventDefault(),this.targetDist*=e.deltaY>0?1.1:.9,this.targetDist=Math.max(sa,Math.min(ra,this.targetDist))},{passive:!1})}follow(t,e,n,i=!1){const s=t.position[0]*ls,o=t.position[1]*ls,a=t.position[2]*ls,l=new C(s,o,a);this.orbitKeys.left&&(this.targetAzimuth+=e*Fr),this.orbitKeys.right&&(this.targetAzimuth-=e*Fr),this.orbitKeys.up&&(this.targetPolar=Math.max(.05,this.targetPolar-e*Fr*.5)),this.orbitKeys.down&&(this.targetPolar=Math.min(Math.PI-.05,this.targetPolar+e*Fr*.5)),this.zoomKeys.in&&(this.targetDist=Math.max(sa,this.targetDist*(1-e*$c))),this.zoomKeys.out&&(this.targetDist=Math.min(ra,this.targetDist*(1+e*$c))),this.dist+=(this.targetDist-this.dist)*Math.min(1,Nr*e),this.azimuth+=(this.targetAzimuth-this.azimuth)*Math.min(1,Nr*e*.5),this.polar+=(this.targetPolar-this.polar)*Math.min(1,Nr*e*.5);const c=this.dist*Math.sin(this.polar)*Math.cos(this.azimuth),u=this.dist*Math.cos(this.polar),h=this.dist*Math.sin(this.polar)*Math.sin(this.azimuth),d=new C(s+c,o+u,a+h),f=new C(0,1,0);if(this.initialized||(this.smoothPos.copy(d),this.initialized=!0),i)this.smoothPos.copy(d);else{const _=Math.min(1,Nr*e);this.smoothPos.lerp(d,_)}this.camera.position.copy(this.smoothPos);const m=Math.abs(this.polar)<.1?new C(0,0,1):Math.abs(this.polar-Math.PI)<.1?new C(0,0,-1):f;this.camera.up.copy(m),this.camera.lookAt(l)}reset(){this.targetDist=2.5,this.dist=2.5,this.targetAzimuth=0,this.azimuth=0,this.targetPolar=Math.PI/2,this.polar=Math.PI/2}}class Uv{container;active=!1;keys=new Set;stagePressed=!1;pauseToggle=!1;visible=!1;constructor(){this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,e.appendChild(n);let i=null;const s={x:0,y:0},o={x:0,y:0},a=(D,N)=>{const Y=e.getBoundingClientRect();s.x=Y.left+Y.width/2,s.y=Y.top+Y.height/2,o.x=D,o.y=N,this.updateStick(n,s,o)},l=(D,N)=>{o.x=D,o.y=N,this.updateStick(n,s,o);const Y=(D-s.x)/60,P=(N-s.y)/60,F=Math.max(-1,Math.min(1,Y)),W=Math.max(-1,Math.min(1,P));W>.3?(this.keys.add("touch-up"),this.keys.delete("touch-down")):W<-.3?(this.keys.add("touch-down"),this.keys.delete("touch-up")):(this.keys.delete("touch-up"),this.keys.delete("touch-down")),F>.3?(this.keys.add("touch-right"),this.keys.delete("touch-left")):F<-.3?(this.keys.add("touch-left"),this.keys.delete("touch-right")):(this.keys.delete("touch-left"),this.keys.delete("touch-right"))},c=()=>{i=null,n.style.transform="translate(-50%, -50%)",this.keys.delete("touch-up"),this.keys.delete("touch-down"),this.keys.delete("touch-left"),this.keys.delete("touch-right")};e.addEventListener("touchstart",D=>{if(D.preventDefault(),i!==null)return;const N=D.changedTouches[0];i=N.identifier,a(N.clientX,N.clientY)},{passive:!1}),e.addEventListener("touchmove",D=>{D.preventDefault();for(let N=0;N<D.changedTouches.length;N++)D.changedTouches[N].identifier===i&&l(D.changedTouches[N].clientX,D.changedTouches[N].clientY)},{passive:!1}),e.addEventListener("touchend",D=>{for(let N=0;N<D.changedTouches.length;N++)D.changedTouches[N].identifier===i&&c()}),e.addEventListener("touchcancel",c),t.appendChild(e);const u=document.createElement("div");u.style.cssText=`
      position: absolute; bottom: 20px; right: 20px; display: flex;
      flex-direction: column; gap: 8px; align-items: flex-end;
    `;const h=(D,N=70,Y=50)=>{const P=document.createElement("div");P.style.cssText="pointer-events: auto; position: relative;";const F=document.createElement("button");return F.textContent=D,F.style.cssText=`
        width: ${N}px; height: ${Y}px; border-radius: 12px;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        color: white; font: 600 14px/1 monospace; cursor: pointer;
        touch-action: none; user-select: none;
      `,P.appendChild(F),[F,P]},[d,f]=h("THR+",70,44),[m,_]=h("THR-",70,44),[g,p]=h("STAGE",70,44),[v,x]=h("R-",60,44),[S,b]=h("R+",60,44),A=(D,N)=>{this.keys.add(D),N.style.background="rgba(255,255,255,0.3)"},R=(D,N)=>{this.keys.delete(D),N.style.background="rgba(255,255,255,0.1)"},B=(D,N)=>{D.addEventListener("touchstart",Y=>{Y.preventDefault(),A(N,D)},{passive:!1}),D.addEventListener("touchend",Y=>{Y.preventDefault(),R(N,D)},{passive:!1}),D.addEventListener("touchcancel",()=>R(N,D)),D.addEventListener("mousedown",()=>A(N,D)),D.addEventListener("mouseup",()=>R(N,D)),D.addEventListener("mouseleave",()=>R(N,D))};B(d,"w"),B(m,"s"),B(v,"a"),B(S,"d"),g.addEventListener("touchstart",D=>{D.preventDefault(),this.stagePressed=!0},{passive:!1}),g.addEventListener("mousedown",()=>{this.stagePressed=!0});const y=document.createElement("div");y.style.cssText="display:flex; gap:8px;",y.appendChild(f),y.appendChild(p),u.appendChild(y);const T=document.createElement("div");T.style.cssText="display:flex; gap:8px;",T.appendChild(_),T.appendChild(x),T.appendChild(b),u.appendChild(T),t.appendChild(u)}updateStick(t,e,n){const i=n.x-e.x,s=n.y-e.y,o=60,a=Math.sqrt(i*i+s*s),l=Math.min(a,o),c=Math.atan2(s,i),u=Math.cos(c)*l,h=Math.sin(c)*l;t.style.transform=`translate(calc(-50% + ${u}px), calc(-50% + ${h}px))`}show(){this.visible||(this.visible=!0,this.container.style.display="block")}hide(){this.visible=!1,this.container.style.display="none"}isVisible(){return this.visible}getPitch(){let t=0;return this.keys.has("touch-up")&&(t=1),this.keys.has("touch-down")&&(t=-1),t}getYaw(){let t=0;return this.keys.has("touch-right")&&(t=1),this.keys.has("touch-left")&&(t=-1),t}getRoll(){let t=0;return this.keys.has("a")&&(t=1),this.keys.has("d")&&(t=-1),t}getThrottleUp(){return this.keys.has("w")}getThrottleDown(){return this.keys.has("s")}getStageRequested(){const t=this.stagePressed;return this.stagePressed=!1,t}dispose(){document.body.removeChild(this.container)}}class Nv{keys=new Set;stagePressed=!1;pauseToggle=!1;throttleLimiter=1;state;touch=null;constructor(t){this.state=t,window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.key.toLowerCase()),e.key===" "&&(this.stagePressed=!0),e.key==="Escape"&&(this.pauseToggle=!0),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(e.key.toLowerCase())&&e.preventDefault())}),window.addEventListener("keyup",e=>{this.keys.delete(e.key.toLowerCase())})}enableTouch(){this.touch||(this.touch=new Uv),this.touch.show()}disableTouch(){this.touch&&this.touch.hide()}update(t){const e=this.touch?.getThrottleUp()||this.keys.has("w"),n=this.touch?.getThrottleDown()||this.keys.has("s");e&&(this.state.throttle=Math.min(1,this.state.throttle+t*.3)),n&&(this.state.throttle=Math.max(0,this.state.throttle-t*.3))}getPitch(){let t=0;return(this.keys.has("arrowup")||this.touch?.getPitch()===1)&&(t=1),(this.keys.has("arrowdown")||this.touch?.getPitch()===-1)&&(t=-1),t}getYaw(){let t=0;return(this.keys.has("arrowleft")||this.touch?.getYaw()===1)&&(t=1),(this.keys.has("arrowright")||this.touch?.getYaw()===-1)&&(t=-1),t}getRoll(){let t=0;return(this.keys.has("a")||this.touch?.getRoll()===1)&&(t=1),(this.keys.has("d")||this.touch?.getRoll()===-1)&&(t=-1),t}getZoomIn(){return this.keys.has("z")}getZoomOut(){return this.keys.has("x")}getStageRequested(){const t=this.stagePressed||!!this.touch?.getStageRequested();return this.stagePressed=!1,t}consumePauseToggle(){const t=this.pauseToggle;return this.pauseToggle=!1,t}dispose(){this.touch?.dispose(),this.touch=null}}function Ke(r,t){const e=t.bodyByName("sun");let n=e,i=0;for(const s of t.bodies){if(s.name==="sun")continue;const o=s;let a=e,l=e.position;if(o.parentBody)a=o.parentBody,l=a.position;else if(s.name==="moon"){const x=t.bodyByName("earth");x&&(a=x,l=x.position)}const c=s.position[0]-r[0],u=s.position[1]-r[1],h=s.position[2]-r[2],d=c*c+u*u+h*h,f=Math.sqrt(d),m=s.position[0]-l[0],_=s.position[1]-l[1],g=s.position[2]-l[2],v=Math.sqrt(m*m+_*_+g*g)*Math.pow(s.mass/a.mass,.4);if(f<v){const x=ms*s.mass/d;x>i&&(i=x,n=s)}}return n}function Fv(r,t,e){if(r.throttle<=0)return;const n=Ii(r.rocket.assembly.roots);if(!n||!n.thrust||!n.isp)return;const i=n.thrust*1e3*r.throttle,s=i/(n.isp*ov),o=e??[0,1,0],a=i*o[0]/r.rocket.totalMass(),l=i*o[1]/r.rocket.totalMass(),c=i*o[2]/r.rocket.totalMass();r.velocity[0]+=a*t,r.velocity[1]+=l*t,r.velocity[2]+=c*t,r.consumeFuel(s,t)}function Ii(r){for(const t of r){if(t.part.kind==="engine"&&t.part.thrust&&t.part.isp)return{thrust:t.part.thrust,isp:t.part.isp};if(t.children?.length){const e=Ii(t.children);if(e)return e}}return null}class Ov{root;speedVal;speedUnit;vsVal;altVal;altUnit;angleVal;fuelFill;fuelPct;throtFill;throtPct;heatFill;heatPct;gforceVal;stageVal;apeVal;peVal;twrVal;ttaVal;ttpVal;timeVal;dvVal;ispVal;burnVal;recVal;pauseOverlay;navballCanvas;navballCtx;onAction=null;constructor(){this.root=document.createElement("div"),this.root.className="hud-panel",this.root.style.cssText="position:fixed;top:16px;left:16px;z-index:100;min-width:180px;",this.pauseOverlay=document.createElement("div"),this.pauseOverlay.style.cssText="position:fixed;inset:0;z-index:500;background:rgba(6,8,20,0.85);display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:12px;",this.pauseOverlay.innerHTML=`
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
      <div class="hud-row"><span class="hud-label">Record</span><span class="hud-value rec-val" style="font-size:9px;color:#EACD9E;">—</span></div>
      <div class="hud-row"><span class="hud-label">Q</span><span class="hud-value q-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row"><span class="hud-label">Impact</span><span class="hud-value impact-val" style="font-size:9px;color:#CCCC44;">—</span></div>
      <div class="hud-row"><span class="hud-label">T to Ap</span><span class="hud-value tta-val" style="font-size:9px;color:#FF8844;">—</span></div>
      <div class="hud-row"><span class="hud-label">T to Pe</span><span class="hud-value ttp-val" style="font-size:9px;color:#44DD88;">—</span></div>
      <div class="btn-bar">
        <button class="btn btn--action" data-action="stage">STAGE</button>
        <button class="btn btn--action" data-action="parachute">CHUTE</button>
        <button class="btn btn--action" data-action="map">MAP</button>
      </div>
      <div style="color:rgba(244,245,242,0.35);font-size:9px;letter-spacing:0.05em;">W/S Throttle | ↑↓ Pitch | ←→ Yaw | Space Stage | Esc Pause</div>
      <div style="color:rgba(244,245,242,0.2);font-size:8px;letter-spacing:0.03em;margin-top:4px;">🖱 Drag orbit | Shift+←→ orbit | Scroll zoom | M Map</div>
    `,t.appendChild(this.root),this.speedVal=this.root.querySelector(".speed-val"),this.speedUnit=this.root.querySelector(".speed-unit"),this.vsVal=this.root.querySelector(".vs-val"),this.altVal=this.root.querySelector(".alt-val"),this.altUnit=this.root.querySelector(".alt-unit"),this.angleVal=this.root.querySelector(".angle-val"),this.fuelFill=this.root.querySelector(".fuel-fill"),this.fuelPct=this.root.querySelector(".fuel-pct"),this.throtFill=this.root.querySelector(".throt-fill"),this.throtPct=this.root.querySelector(".throt-pct"),this.heatFill=this.root.querySelector(".heat-fill"),this.heatPct=this.root.querySelector(".heat-pct"),this.gforceVal=this.root.querySelector(".gforce-val"),this.stageVal=this.root.querySelector(".stage-val"),this.apeVal=this.root.querySelector(".ape-val"),this.peVal=this.root.querySelector(".pe-val"),this.twrVal=this.root.querySelector(".twr-val"),this.ttaVal=this.root.querySelector(".tta-val"),this.ttpVal=this.root.querySelector(".ttp-val"),this.timeVal=this.root.querySelector(".time-val"),this.dvVal=this.root.querySelector(".dv-val"),this.ispVal=this.root.querySelector(".isp-val"),this.burnVal=this.root.querySelector(".burn-val"),this.recVal=this.root.querySelector(".rec-val"),this.root.addEventListener("click",i=>{const s=i.target.closest("[data-action]");s&&this.onAction&&this.onAction(s.dataset.action)});const e=document.createElement("div");e.className="navball-container",e.style.cssText="position:fixed;bottom:20px;right:20px;z-index:100;";const n=document.createElement("canvas");n.width=160,n.height=160,n.style.cssText="width:160px;height:160px;border-radius:80px;opacity:0.85;",e.appendChild(n),t.appendChild(e),this.navballCanvas=n,this.navballCtx=n.getContext("2d")}setWarpLabel(t){const e=this.root.querySelector(".warp-val");e&&(e.textContent=t)}setDeltaV(t){this.dvVal.textContent=t>=0?`${t.toFixed(0)} m/s`:"—",this.dvVal.style.color=t>500?"#44FF44":t>100?"#FFAA44":"#FF4444"}setIsp(t){this.ispVal.textContent=t>0?`${t.toFixed(0)}s`:"—"}setRecord(t){this.recVal.textContent=t}setSAS(t){const e=this.root.querySelector(".sas-val");e&&(t==="off"?(e.textContent="OFF",e.style.color="#666688"):t==="prograde"?(e.textContent="PRG",e.style.color="#44FF44"):t==="retrograde"?(e.textContent="RET",e.style.color="#FF6644"):(e.textContent="HLD",e.style.color="#44AAFF"))}setGForce(t){this.gforceVal.textContent=t.toFixed(2),t>5?this.gforceVal.style.color="#FF4444":t>3?this.gforceVal.style.color="#FFAA44":this.gforceVal.style.color="#88CCFF"}setGForceEnabled(t){this.root.querySelector(".gforce-row")?.style.setProperty("display",t?"":"none")}setTWR(t){this.twrVal.textContent=t.toFixed(2),this.twrVal.style.color=t>1.1?"#44CC88":t>.8?"#FFAA44":"#FF4444"}setPaused(t){this.pauseOverlay.style.display=t?"flex":"none";const e=this.root.querySelector(".warp-val");e&&(e.style.opacity=t?"0.5":"1")}setNavballData(t,e,n,i,s){const o=this.navballCtx,a=160,l=160,c=80,u=80,h=75;o.clearRect(0,0,a,l),o.beginPath(),o.arc(c,u,h+2,0,Math.PI*2),o.fillStyle="#0a0a1a",o.fill();const f=(n[0]*t[0]+n[1]*t[1]+n[2]*t[2])*h;o.save(),o.beginPath(),o.arc(c,u,h,0,Math.PI*2),o.clip(),o.fillStyle="#2244aa",o.fillRect(c-h,u-h-f,h*2,h+f),o.fillStyle="#885522",o.fillRect(c-h,u-f,h*2,h+f);for(let b=-80;b<=80;b+=10){const A=u-Math.sin(b*Math.PI/180)*h;o.beginPath();const R=b===0?30:b%20===0?22:14;o.moveTo(c-R,A),o.lineTo(c+R,A),o.strokeStyle=b===0?"#FFCC44":"rgba(255,255,255,0.3)",o.lineWidth=b===0?1.5:.7,o.stroke(),b%20===0&&(o.fillStyle="rgba(255,255,255,0.5)",o.font="8px sans-serif",o.fillText(`${Math.abs(b)}`,c+R+3,A+3))}o.beginPath(),o.moveTo(c-h,u-f),o.lineTo(c+h,u-f),o.strokeStyle="#ffffff",o.lineWidth=1.5,o.stroke();const m=b=>{const A=Math.sqrt(b[0]**2+b[1]**2+b[2]**2)||1,R=b[0]/A,B=b[1]/A,y=b[2]/A,T=R*t[0]+B*t[1]+y*t[2],D=R-t[0]*T,N=B-t[1]*T,Y=Math.sqrt(D*D+N*N)||1;return{x:c+D/Y*h*.78,y:u-N/Y*h*.78,inFront:T>0}},_=m(e);_.inFront&&(o.beginPath(),o.arc(_.x,_.y,6,0,Math.PI*2),o.fillStyle="#44FF44",o.fill(),o.beginPath(),o.arc(_.x,_.y,9,0,Math.PI*2),o.strokeStyle="#44FF44",o.lineWidth=2,o.stroke(),o.fillStyle="#44FF44",o.font="bold 8px sans-serif",o.fillText("P",_.x+8,_.y+3));const g=[-e[0],-e[1],-e[2]],p=m(g);p.inFront&&(o.beginPath(),o.arc(p.x,p.y,6,0,Math.PI*2),o.fillStyle="rgba(68,255,68,0.6)",o.fill(),o.beginPath(),o.arc(p.x,p.y,9,0,Math.PI*2),o.strokeStyle="#44FF44",o.lineWidth=1.5,o.stroke(),o.beginPath(),o.moveTo(p.x-5,p.y-5),o.lineTo(p.x+5,p.y+5),o.moveTo(p.x+5,p.y-5),o.lineTo(p.x-5,p.y+5),o.strokeStyle="#44FF44",o.lineWidth=1.5,o.stroke());const v=m(n);v.inFront&&(o.beginPath(),o.moveTo(v.x,v.y-8),o.lineTo(v.x-6,v.y+4),o.lineTo(v.x+6,v.y+4),o.closePath(),o.fillStyle="#4488FF",o.fill());const x=[-n[0],-n[1],-n[2]],S=m(x);if(S.inFront&&(o.beginPath(),o.moveTo(S.x,S.y+8),o.lineTo(S.x-6,S.y-4),o.lineTo(S.x+6,S.y-4),o.closePath(),o.fillStyle="#4488FF",o.fill()),o.beginPath(),o.arc(c,u,5,0,Math.PI*2),o.fillStyle="#FFAA44",o.fill(),i){const b=m(i);b.inFront&&(o.beginPath(),o.moveTo(b.x,b.y-7),o.lineTo(b.x-5,b.y+5),o.lineTo(b.x+5,b.y+5),o.closePath(),o.fillStyle="#CC88FF",o.fill())}if(s)for(const b of s){const A=m(b.dir);A.inFront&&(o.beginPath(),o.arc(A.x,A.y,3,0,Math.PI*2),o.fillStyle=b.color+"aa",o.fill())}o.restore(),o.beginPath(),o.arc(c,u,h+1,0,Math.PI*2),o.strokeStyle="#334466",o.lineWidth=2,o.stroke()}update(t,e,n=0,i=1,s,o,a,l,c,u){const h=Math.sqrt(t.velocity[0]**2+t.velocity[1]**2+t.velocity[2]**2);let d=1/0,f=0,m=0,_=0;for(const Y of e.bodies){if(Y.mass<=0)continue;const P=t.position[0]-Y.position[0],F=t.position[1]-Y.position[1],W=t.position[2]-Y.position[2],Z=Math.sqrt(P*P+F*F+W*W),K=Y.radius??0,J=Y.getSurfaceRadiusAt?.(t.position)??K,tt=Z-J;tt<d&&(d=tt,f=P,m=F,_=W)}const g=Math.sqrt(t.velocity[0]**2+t.velocity[2]**2),p=Math.atan2(g,Math.abs(t.velocity[1]))*180/Math.PI,v=t.rocket.assembly.totalFuelCapacity(),x=v>0?t.rocket.totalFuelMass()/v*100:0,S=Math.min(100,n/1e5*100),b=Math.sqrt(f*f+m*m+_*_)||1,A=f/b,R=m/b,B=_/b,y=t.velocity[0]*A+t.velocity[1]*R+t.velocity[2]*B;if(this.vsVal.textContent=y.toFixed(1),this.vsVal.style.color=y<-5?"#FF4444":y>5?"#44FF44":"#CCCC44",this.speedVal.textContent=h.toFixed(1),d>1e3?(this.altVal.textContent=(d/1e3).toFixed(2),this.altUnit.textContent="km"):(this.altVal.textContent=d.toFixed(0),this.altUnit.textContent="m"),this.angleVal.textContent=p.toFixed(0),this.fuelPct.textContent=`${x.toFixed(0)}%`,this.fuelFill.style.width=`${Math.min(100,x)}%`,this.throtPct.textContent=`${(t.throttle*100).toFixed(0)}%`,this.throtFill.style.width=`${t.throttle*100}%`,this.throtFill.style.background=t.throttle>0&&t.rocket.totalFuelMass()>0?"#FF8844":"#446688",this.heatPct.textContent=`${S.toFixed(0)}%`,this.heatFill.style.width=`${S}%`,this.heatFill.style.background=S>70?"#FF3333":S>40?"#FFCC00":"#44FF44",this.stageVal.textContent=`${i}`,s!==void 0&&isFinite(s)&&(this.apeVal.textContent=s>1e3?`${(s/1e3).toFixed(1)}km`:`${s.toFixed(0)}m`),o!==void 0&&isFinite(o)&&(this.peVal.textContent=o>1e3?`${(o/1e3).toFixed(1)}km`:`${o.toFixed(0)}m`),a!==void 0&&isFinite(a)?this.ttaVal.textContent=a>60?`${(a/60).toFixed(1)}m`:`${a.toFixed(0)}s`:this.ttaVal.textContent="—",l!==void 0&&isFinite(l)?this.ttpVal.textContent=l>60?`${(l/60).toFixed(1)}m`:`${l.toFixed(0)}s`:this.ttpVal.textContent="—",c!==void 0){const Y=Math.floor(c/60),P=Math.floor(c%60);this.timeVal.textContent=`T+${Y.toString().padStart(2,"0")}:${P.toString().padStart(2,"0")}`}const T=this.root.querySelector(".impact-val");if(T){const Y=-y;if(Y>1&&d>0&&d<5e5){const P=d/Y;P<600?(T.textContent=`Impact T-${P.toFixed(0)}s`,T.style.color=P<30?"#FF4444":P<120?"#FFAA44":"#CCCC44"):T.textContent="—"}else T.textContent="—"}const D=this.root.querySelector(".ecc-val");D&&u!==void 0&&(D.textContent=u.toFixed(3));const N=this.root.querySelector(".soi-val");if(N){const Y=Ke(t.position,e);N.textContent=Y?Y.name.toUpperCase():"—"}if(this.burnVal){const Y=t.rocket.totalFuelMass(),P=t.throttle;if(Y>.1&&P>.01){const F=Ii(t.rocket.assembly.roots);if(F&&F.thrust){const Z=F.thrust*1e3*P/(320*9.80665),K=Y/Z;this.burnVal.textContent=K>60?`${(K/60).toFixed(1)}m`:`${K.toFixed(0)}s`}}else this.burnVal.textContent="—"}}setQ(t){const e=this.root.querySelector(".q-val");e&&(e.textContent=t>1e3?`${(t/1e3).toFixed(1)} kPa`:`${t.toFixed(0)} Pa`,e.style.color=t>1e4?"#FF4444":t>2e3?"#FFAA44":"#aaaacc")}unmount(){this.root.remove(),this.pauseOverlay.remove()}}class kv{startEngine(){}setThrottle(t){}stopEngine(){}playStaging(){}playCrash(){}playLand(){}dispose(){}}class Hv{show(t,e=2500){const n=document.createElement("div");n.className="toast",n.textContent=t,n.style.cssText=`
      position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
      z-index: 300;
    `,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),200)},e)}}const Be=new Hv;function Or(r,t,e,n,i){const s=ms*e,o=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]),l=(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])/2-s/o,c=-s/(2*l),u=r[1]*t[2]-r[2]*t[1],h=r[2]*t[0]-r[0]*t[2],d=r[0]*t[1]-r[1]*t[0],f=Math.sqrt(u*u+h*h+d*d),m=(t[1]*d-t[2]*h)/s-r[0]/o,_=(t[2]*u-t[0]*d)/s-r[1]/o,g=(t[0]*h-t[1]*u)/s-r[2]/o,p=Math.sqrt(m*m+_*_+g*g),v=p<1&&c>0,x=v?c*(1+p):1/0,S=v?c*(1-p):o,b=p>1e-8?m/p:1,A=p>1e-8?_/p:0,R=p>1e-8?g/p:0,B=[b,A,R],y=[(h*R-d*A)/(f||1),(d*b-u*R)/(f||1),(u*A-h*b)/(f||1)],T=[],D=v?Math.PI:Math.acos(-1/Math.max(p,1.001))*.98;let N,Y;if(v){const P=2*Math.PI*Math.sqrt(c*c*c/s),F=(r[0]*t[0]+r[1]*t[1]+r[2]*t[2])/(o||1),W=(c*(1-p*p)/o-1)/p,Z=F*Math.sqrt(c*(1-p*p)/s)/(p||1),K=(p+W)/(1+p*W),J=Math.sqrt(1-p*p)*Z/(1+p*W);let tt=Math.atan2(J,K);tt<0&&(tt+=Math.PI*2);const V=(tt-p*J)*P/(2*Math.PI),k=P-V,$=(k+P/2)%P;Y=k,N=$}for(let P=0;P<=i;P++){const F=-D+2*D*P/i,W=1+p*Math.cos(F);if(Math.abs(W)<1e-10)continue;const Z=c*(1-p*p)/W;if(isNaN(Z)||!isFinite(Z)||Z<0)continue;const K=Z*(Math.cos(F)*B[0]+Math.sin(F)*y[0]),J=Z*(Math.cos(F)*B[2]+Math.sin(F)*y[2]);if(Math.sqrt(K*K+J*J)>n*1.5)break;T.push([K,J])}return{points:T,eccentricity:p,apoapsis:x,periapsis:S,bound:v,timeToAp:N,timeToPe:Y}}function Bv(r,t){const e=r.position[0]-t.position[0],n=r.position[1]-t.position[1],i=r.position[2]-t.position[2],s=e*e+n*n+i*i,o=Math.sqrt(s);if(o===0)return[0,0,0];const a=ms*r.mass*t.mass/s;return[a*e/o,a*n/o,a*i/o]}function ru(r,t){let e=0,n=0,i=0;for(const s of t){if(s===r||s.mass<=0)continue;const o=Bv(s,r);e+=o[0],n+=o[1],i+=o[2]}return[e,n,i]}function zv(){try{const r=document.createElement("canvas");r.width=64,r.height=64;const t=r.getContext("2d");if(!t)throw new Error("no 2d context");const e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,200,0.9)"),e.addColorStop(.7,"rgba(255,200,100,0.5)"),e.addColorStop(1,"rgba(255,150,50,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new _n(r);return n.needsUpdate=!0,n}catch{return new Xh(new Uint8Array([255,255,255,255]),1,1,nn)}}const yi=Ft/.08,jn=300;class Gv{particles;positions;velocities;lifetimes;ages;colors;active;nextIndex;spriteTex;throttleLevel=1;inVacuum=!1;constructor(){this.active=!1,this.nextIndex=0,this.positions=new Float32Array(jn*3),this.velocities=new Float32Array(jn*3),this.lifetimes=new Float32Array(jn),this.ages=new Float32Array(jn),this.colors=new Float32Array(jn*3),this.ages.fill(1/0),this.spriteTex=zv();const t=new Ce;t.setAttribute("position",new Ee(this.positions,3)),t.setAttribute("color",new Ee(this.colors,3));const e=new co({size:yi*.8,map:this.spriteTex,vertexColors:!0,sizeAttenuation:!0,blending:gn,depthWrite:!1,transparent:!0,opacity:1});this.particles=new Ga(t,e)}setThrottle(t){this.throttleLevel=Math.max(.01,t)}setVacuum(t){this.inVacuum=t}start(){this.active=!0}stop(){this.active=!1;for(let t=0;t<jn;t++)this.ages[t]=this.lifetimes[t],this.positions[t*3]=0,this.positions[t*3+1]=0,this.positions[t*3+2]=0;this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0}update(t){if(this.active){const e=Math.ceil((4+Math.floor(Math.random()*4))*this.throttleLevel),n=this.inVacuum?3:1;for(let i=0;i<e;i++){const s=this.nextIndex;this.nextIndex=(this.nextIndex+1)%jn;const o=(.15+Math.random()*.2)/this.throttleLevel;this.positions[s*3]=(Math.random()-.5)*o*yi,this.positions[s*3+1]=-(Math.random()*.08)*yi*n,this.positions[s*3+2]=(Math.random()-.5)*o*yi;const a=(5+Math.random()*8)*n;this.velocities[s*3]=(Math.random()-.5)*.5*yi,this.velocities[s*3+1]=-(a*yi),this.velocities[s*3+2]=(Math.random()-.5)*.5*yi,this.lifetimes[s]=(.3+Math.random()*.4)*n,this.ages[s]=0}}for(let e=0;e<jn;e++){const n=this.ages[e],i=this.lifetimes[e];if(n>=i)continue;const s=n+t;if(this.ages[e]=s,s>=i)continue;const o=s/i,a=e*3;this.positions[a]=(this.positions[a]??0)+(this.velocities[a]??0)*t,this.positions[a+1]=(this.positions[a+1]??0)+(this.velocities[a+1]??0)*t,this.positions[a+2]=(this.positions[a+2]??0)+(this.velocities[a+2]??0)*t;const l=Math.exp(-1.5*t);this.velocities[a]=(this.velocities[a]??0)*l,this.velocities[a+2]=(this.velocities[a+2]??0)*l;let c,u,h;if(o<.2)c=1,u=1,h=1;else if(o<.5){const d=(o-.2)/.3;c=1,u=1-d*.6,h=1-d*.9}else{const d=(o-.5)/.5;c=1-d*.5,u=.4-d*.4,h=.1-d*.1}this.colors[a]=c,this.colors[a+1]=u,this.colors[a+2]=h}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0}getMesh(){return this.particles}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.spriteTex.dispose()}}const Mi=100,cs=Ft*Aa;class Wv{particles;positions;velocities;lifetimes;ages;active=!1;constructor(){this.positions=new Float32Array(Mi*3),this.velocities=new Float32Array(Mi*3),this.lifetimes=new Float32Array(Mi),this.ages=new Float32Array(Mi),this.ages.fill(1/0);const t=new Ce;t.setAttribute("position",new Ee(this.positions,3));const e=new co({size:.3*cs,color:13421772,transparent:!0,opacity:.5,blending:oi,depthWrite:!1,sizeAttenuation:!0});this.particles=new Ga(t,e)}start(){this.active=!0}stop(){this.active=!1}update(t){if(this.active)for(let o=0;o<3;o++){let a=-1,l=-1;for(let c=0;c<Mi;c++)this.ages[c]>=this.lifetimes[c]&&this.ages[c]>l&&(l=this.ages[c],a=c);if(a<0)for(let c=0;c<Mi;c++)this.ages[c]>l&&(l=this.ages[c],a=c);a>=0&&(this.positions[a*3]=(Math.random()-.5)*.1*cs,this.positions[a*3+1]=0,this.positions[a*3+2]=(Math.random()-.5)*.1*cs,this.velocities[a*3]=(Math.random()-.5)*.5*cs,this.velocities[a*3+1]=(.5+Math.random()*1)*cs,this.velocities[a*3+2]=(Math.random()-.5)*.5*cs,this.lifetimes[a]=1+Math.random()*1.5,this.ages[a]=0)}const e=this.particles.material;let n=!1;const i=this.velocities,s=this.positions;for(let o=0;o<Mi;o++){if(this.ages[o]>=this.lifetimes[o])continue;n=!0;const a=this.ages[o]+t;if(this.ages[o]=a,a>=this.lifetimes[o])continue;const l=o*3,c=i[l]??0,u=i[l+1]??0,h=i[l+2]??0;s[l]=(s[l]??0)+c*t,s[l+1]=(s[l+1]??0)+u*t,s[l+2]=(s[l+2]??0)+h*t,i[l]=c*.98,i[l+2]=h*.98}e.opacity=this.active?.5:Math.max(0,e.opacity-t*2),this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.visible=n||this.active}getMesh(){return this.particles}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose()}}const ie=Hn*Bn;class Vv{renderer;sceneMgr;system;achievements;state;rocket;rocketGroup;chase;controls;hud;sound;launched=!1;grounded=!0;groundedDir=null;liftoffFrames=0;engineFlame;groundSmoke;rocketShadow=null;reentryGlow=null;rocketQuat=new Ze;angularVel=new C;ANGULAR_ACCEL=8;ANGULAR_DAMPING=10;timeWarp=1;parachuteDeployed=!1;deployedChuteMesh=null;crashed=!1;paused=!1;debris=[];warpLevels=[1,3,5,10,100,1e3,1e5,1e6];warpIndex=0;crashOverlay=null;prevVel=[0,0,0];gearDeployed=!1;gearMeshes=[];missionTime=0;sasMode="off";sasTargetQuat=new Ze;screenShake=0;countdownTimer=0;countdownActive=!1;countdownEl=null;lastRefBody=null;impactMarker=null;maxAlt=0;maxSpeed=0;showCountdown(t){this.countdownEl||(this.countdownEl=document.createElement("div"),this.countdownEl.style.cssText=`
        position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);
        font-size:72px;font-weight:bold;color:#fff;z-index:500;
        text-shadow:0 0 30px rgba(68,136,255,0.6);
        font-family:system-ui,sans-serif;pointer-events:none;
        transition:opacity 0.2s;
      `,document.body.appendChild(this.countdownEl)),this.countdownEl.textContent=t,this.countdownEl.style.opacity="1",t==="LIFTOFF!"?(this.countdownEl.style.color="#FF8844",this.countdownEl.style.fontSize="48px"):(this.countdownEl.style.color="#FFFFFF",this.countdownEl.style.fontSize="72px")}hideCountdown(){this.countdownEl&&(this.countdownEl.style.opacity="0")}get dragMultiplier(){return this.gearDeployed?2.5:1}onCrashAction=null;constructor(t,e,n,i,s){this.renderer=t,this.sceneMgr=e,this.system=n,this.achievements=s,this.rocket=i;const o=n.bodyByName("earth"),a=o.radius??6371e3,l=28.5*Math.PI/180,c=-80.5*Math.PI/180,u=[Math.cos(l)*Math.cos(c),Math.sin(l),Math.cos(l)*Math.sin(c)],h=Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2]),d=[u[0]/h,u[1]/h,u[2]/h],f=[o.position[0]+d[0]*a,o.position[1]+d[1]*a,o.position[2]+d[2]*a],m=o.getSurfaceRadiusAt?.(f)??a,_=[o.position[0]+d[0]*(m+10),o.position[1]+d[1]*(m+10),o.position[2]+d[2]*(m+10)];this.state=new Iv(i,n,_,[0,0,0]),this.groundedDir=d;const g=new C(_[0]-o.position[0],_[1]-o.position[1],_[2]-o.position[2]).normalize();this.rocketQuat.setFromUnitVectors(new C(0,1,0),g),this.rocketGroup=i.assembly.toMesh(),this.rocketGroup.scale.setScalar(Aa),this.rocketGroup.position.set(this.state.position[0]*ie,this.state.position[1]*ie,this.state.position[2]*ie),e.scene.add(this.rocketGroup);for(let V=0;V<3;V++){const k=V/3*Math.PI*2,$=new oe(.015,.04,.3,6),I=new pe({color:5596791,metalness:.8,roughness:.3}),dt=new mt($,I);dt.position.set(Math.cos(k)*.15,-.1,Math.sin(k)*.15),dt.rotation.z=Math.cos(k)*.3,dt.rotation.x=Math.sin(k)*.3,dt.visible=!1,this.rocketGroup.add(dt),this.gearMeshes.push(dt);const ft=new oe(.05,.06,.02,6),Ut=new pe({color:4478310,metalness:.5,roughness:.6}),It=new mt(ft,Ut);It.position.set(Math.cos(k)*.22,-.22,Math.sin(k)*.22),this.rocketGroup.add(It),this.gearMeshes.push(It)}const p=new bn(.05,.15,16),v=new ge({color:16724787,side:be,transparent:!0,opacity:.6,depthWrite:!1});this.impactMarker=new mt(p,v),this.impactMarker.rotation.x=-Math.PI/2,this.impactMarker.visible=!1,this.sceneMgr.scene.add(this.impactMarker);for(const V of n.bodies){const k=V;k.mesh&&e.scene.add(k.mesh),k.light&&e.scene.add(k.light)}const x=new Js(8952268,.5);x.position.set(-50,20,-30),e.scene.add(x),this.engineFlame=new Gv,this.positionFlameAtNozzle(),this.rocketGroup.add(this.engineFlame.getMesh()),this.groundSmoke=new Wv,this.rocketGroup.add(this.groundSmoke.getMesh());const S=new ho(.3*Aa,32),b=new ge({color:0,transparent:!0,opacity:.3,depthWrite:!1});this.rocketShadow=new mt(S,b),this.rocketShadow.rotation.x=-Math.PI/2,this.rocketShadow.position.y=-2,this.rocketGroup.add(this.rocketShadow);const A=new ue(.3,16,12),R=new ge({color:16737792,transparent:!0,opacity:0,blending:gn,depthWrite:!1});this.reentryGlow=new mt(A,R),this.rocketGroup.add(this.reentryGlow);const B=new ue(.5,16,12),y=new ge({color:16729088,transparent:!0,opacity:0,blending:gn,depthWrite:!1}),T=new mt(B,y);T.name="reentry-outer",this.rocketGroup.add(T);const D=new C().crossVectors(g,new C(0,1,0)).normalize(),N=Math.atan2(D.z,D.x);this.chase=new Dv(e.camera),this.chase.setAzimuth(N),this.chase.enableOrbit(this.renderer.domElement),this.chase.initialiseAt(this.state,this.rocketQuat,g),this.controls=new Nv(this.state),("ontouchstart"in window||navigator.maxTouchPoints>0)&&this.controls.enableTouch(),this.sound=new kv,this.hud=new Ov,this.hud.onAction=V=>{V==="stage"?this.performStage():V==="parachute"?this.toggleParachute():V==="map"?(Y=!Y,K.style.display=Y?"block":"none",Y&&requestAnimationFrame(ct)):V==="resume"?(this.paused=!1,this.hud.setPaused(!1)):V==="menu"?this.onCrashAction?.("menu"):V==="restart"&&this.onCrashAction?.("restart")},this.hud.mount();let Y=!1,P=1,F=0,W=0,Z=null;const K=document.createElement("div");K.style.cssText="position:fixed;inset:0;z-index:300;background:rgba(6,8,20,0.95);display:none;";const J=document.createElement("canvas");J.style.cssText="position:absolute;inset:0;width:100%;height:100%;",K.appendChild(J),document.body.appendChild(K);const tt=document.createElement("div");tt.style.cssText="position:absolute;top:16px;left:16px;z-index:10;color:#EACD9E;font-family:monospace;font-size:12px;pointer-events:none;",tt.innerHTML='<div id="map-zoom">ZOOM: 1x</div><div id="map-center">CENTER: ROCKET</div><div id="map-legend" style="margin-top:8px;font-size:10px;opacity:0.7;">SCROLL: zoom | DRAG: pan | M/TAB: close</div>',K.appendChild(tt),K.appendChild(J),document.body.appendChild(K),J.addEventListener("wheel",V=>{P*=V.deltaY>0?.9:1.1,P=Math.max(.05,Math.min(100,P))}),J.addEventListener("mousedown",V=>{Z={x:V.clientX,y:V.clientY}}),window.addEventListener("mouseup",()=>{Z=null}),window.addEventListener("mousemove",V=>{Z&&(F+=V.clientX-Z.x,W+=V.clientY-Z.y,Z={x:V.clientX,y:V.clientY})}),J.addEventListener("touchstart",V=>{V.touches.length===1&&(Z={x:V.touches[0].clientX,y:V.touches[0].clientY})}),J.addEventListener("touchmove",V=>{!Z||V.touches.length!==1||(F+=V.touches[0].clientX-Z.x,W+=V.touches[0].clientY-Z.y,Z={x:V.touches[0].clientX,y:V.touches[0].clientY})}),J.addEventListener("touchend",()=>{Z=null});const ct=()=>{if(!Y)return;const V=window.devicePixelRatio||1,k=J.clientWidth,$=J.clientHeight;J.width=k*V,J.height=$*V;const I=J.getContext("2d");I.setTransform(V,0,0,V,0,0),I.fillStyle="#060814",I.fillRect(0,0,k,$);const dt=k/2+F,ft=$/2+W,Ut=I.createRadialGradient(dt,ft,0,dt,ft,Math.max(k,$)*.6);Ut.addColorStop(0,"rgba(20,30,60,0.3)"),Ut.addColorStop(.5,"rgba(10,15,30,0.15)"),Ut.addColorStop(1,"rgba(6,8,20,0)"),I.fillStyle=Ut,I.fillRect(0,0,k,$),I.strokeStyle="rgba(100,100,150,0.08)",I.lineWidth=1;const It=100*P;for(let H=dt%It;H<k;H+=It)I.beginPath(),I.moveTo(H,0),I.lineTo(H,$),I.stroke();for(let H=ft%It;H<$;H+=It)I.beginPath(),I.moveTo(0,H),I.lineTo(k,H),I.stroke();I.strokeStyle="rgba(68,136,255,0.06)",I.lineWidth=.5;for(let H=It;H<Math.max(k,$);H+=It)I.beginPath(),I.arc(dt,ft,H,0,Math.PI*2),I.stroke();let Rt=1;for(const H of this.system.bodies){const _t=(H.position[0]-this.state.position[0])*ie,xt=(H.position[2]-this.state.position[2])*ie,Tt=Math.sqrt(_t*_t+xt*xt);Tt>Rt&&(Rt=Tt)}const Et=Math.min(k,$)*.4/Rt*P,z={sun:"#ffdd44",earth:"#4fc3f7",moon:"#aaaacc",venus:"#e8a84c",mars:"#d4733a",mercury:"#b0b0b0",jupiter:"#d4a574",saturn:"#f4e4a1",uranus:"#4fd0e8",neptune:"#4b70dd"},ve={sun:"rgba(255,220,68,0.12)",earth:"rgba(79,195,247,0.08)",mars:"rgba(212,115,58,0.08)",venus:"rgba(232,168,76,0.08)",jupiter:"rgba(212,165,116,0.08)",saturn:"rgba(244,228,161,0.15)"},St={sun:8,earth:5,moon:2,venus:3,mars:3,mercury:2,jupiter:7,saturn:6,uranus:3.5,neptune:3.5},Dt=this.system.bodyByName("sun")?.position;if(Dt)for(const H of this.system.bodies){if(H.name==="sun"||H.name==="moon")continue;const _t=[H.position[0]-Dt[0],H.position[1]-Dt[1],H.position[2]-Dt[2]];if(H.velocity){const xt=Or(_t,H.velocity,this.system.bodyByName("sun").mass,5e14,180);if(xt.points.length>10){I.beginPath(),I.strokeStyle=z[H.name]+"30",I.lineWidth=1,I.setLineDash([3,6]);const Tt=dt+(xt.points[0][0]+Dt[0])*Et,gt=ft-(xt.points[0][1]+Dt[2])*Et;I.moveTo(Tt,gt);for(let Q=1;Q<xt.points.length;Q+=2){const L=dt+(xt.points[Q][0]+Dt[0])*Et,lt=ft-(xt.points[Q][1]+Dt[2])*Et;I.lineTo(L,lt)}I.stroke(),I.setLineDash([])}}}const Mt=["earth","venus","mars","jupiter","saturn","uranus","neptune"];for(const H of this.system.bodies)if(Mt.includes(H.name)){const _t=dt+(H.position[0]-this.state.position[0])*Et,xt=ft-(H.position[2]-this.state.position[2])*Et,Tt=St[H.name]||3,gt=I.createRadialGradient(_t,xt,Tt*.5,_t,xt,Tt*3),Q=z[H.name]||"#888";gt.addColorStop(0,Q+"30"),gt.addColorStop(.5,Q+"15"),gt.addColorStop(1,Q+"00"),I.beginPath(),I.arc(_t,xt,Tt*3,0,Math.PI*2),I.fillStyle=gt,I.fill()}for(const H of this.system.bodies)if(Mt.includes(H.name)){const _t=dt+(H.position[0]-this.state.position[0])*Et,xt=ft-(H.position[2]-this.state.position[2])*Et,Tt=St[H.name]||3,gt=1.2;I.beginPath(),I.arc(_t,xt,Tt*gt,0,Math.PI*2),I.setLineDash([2,6]),I.strokeStyle="rgba(100,180,255,0.25)",I.lineWidth=.8,I.stroke(),I.setLineDash([])}for(const H of this.system.bodies){const _t=dt+(H.position[0]-this.state.position[0])*Et,xt=ft-(H.position[2]-this.state.position[2])*Et;St[H.name]&&St[H.name]>=5&&(I.beginPath(),I.arc(_t,xt,St[H.name]*3,0,Math.PI*2),I.fillStyle=ve[H.name]||"rgba(100,100,150,0.05)",I.fill()),I.beginPath(),I.arc(_t,xt,St[H.name]||3,0,Math.PI*2),I.fillStyle=z[H.name]||"#888",I.fill(),I.strokeStyle="rgba(244,245,242,0.3)",I.lineWidth=.5,I.stroke(),I.font="9px monospace",I.fillStyle="#F4F5F2",I.fillText(H.name.toUpperCase(),_t+St[H.name]+6,xt+3)}const Zt=this.system.bodyByName("sun");for(const H of this.system.bodies){if(H.name==="sun"||H.mass<=0||!Zt||H.name===Zt.name)continue;const _t=(H.position[0]-Zt.position[0])*ie,xt=(H.position[2]-Zt.position[2])*ie,Tt=Math.sqrt(_t*_t+xt*xt);if(Tt<1)continue;const gt=Tt*Math.pow(H.mass/Zt.mass,.4),Q=dt+(H.position[0]-this.state.position[0])*Et,L=ft-(H.position[2]-this.state.position[2])*Et;I.beginPath(),I.arc(Q,L,gt*Et,0,Math.PI*2),I.setLineDash([4,4]),I.strokeStyle=(z[H.name]||"#888")+"44",I.lineWidth=.8,I.stroke(),I.setLineDash([])}const Nt=80,w=3,M=k-Nt-15,G=$-30,st=Rt*2/Math.min(k,$)*P*Nt,rt=Math.pow(10,Math.floor(Math.log10(st))),bt=Nt*(rt/st);I.fillStyle="rgba(244,245,242,0.4)",I.fillRect(M,G,bt,w),I.strokeStyle="rgba(244,245,242,0.5)",I.lineWidth=.5,I.strokeRect(M,G,bt,w),I.fillStyle="rgba(244,245,242,0.4)",I.font="8px monospace",I.fillText(`${rt>=1e3?(rt/1e3).toFixed(0)+"Mkm":rt.toFixed(0)+"km"}`,M,G-2);const ut=dt,vt=ft,Lt=this.state.velocity[0]||0,Ht=this.state.velocity[2]||0,U=Math.sqrt(Lt*Lt+Ht*Ht),ot=U>.1?Math.atan2(Ht,Lt):0;if(I.save(),I.translate(ut,vt),I.rotate(-ot),I.beginPath(),I.moveTo(8,0),I.lineTo(0,-4),I.lineTo(-5,0),I.lineTo(0,4),I.closePath(),I.fillStyle="#EACD9E",I.fill(),I.strokeStyle="#EACD9E",I.lineWidth=1.5,I.stroke(),I.restore(),U>.1){const H=Math.min(30,10+U*Et*2);I.beginPath(),I.moveTo(ut,vt),I.lineTo(ut+Math.cos(ot)*H,vt-Math.sin(ot)*H),I.strokeStyle="rgba(234,205,158,0.6)",I.lineWidth=1.5,I.stroke(),I.beginPath(),I.moveTo(ut+Math.cos(ot)*H,vt-Math.sin(ot)*H),I.lineTo(ut+Math.cos(ot+.4)*(H-5),vt-Math.sin(ot+.4)*(H-5)),I.lineTo(ut+Math.cos(ot-.4)*(H-5),vt-Math.sin(ot-.4)*(H-5)),I.closePath(),I.fillStyle="rgba(234,205,158,0.6)",I.fill()}const nt=Ke(this.state.position,this.system),ht=[(this.state.position[0]-nt.position[0])*ie,(this.state.position[1]-nt.position[1])*ie,(this.state.position[2]-nt.position[2])*ie],et=Or(ht,this.state.velocity,nt.mass,5e14,360);if(et.points.length>1){I.beginPath(),I.strokeStyle=et.bound?"rgba(68,136,204,0.15)":"rgba(221,170,68,0.15)",I.lineWidth=8;const H=dt+et.points[0][0]*Et,_t=ft-et.points[0][1]*Et;I.moveTo(H,_t);for(let Tt=1;Tt<et.points.length;Tt++){const gt=dt+et.points[Tt][0]*Et,Q=ft-et.points[Tt][1]*Et;I.lineTo(gt,Q)}I.stroke(),I.beginPath(),I.strokeStyle=et.bound?"#4488CC":"#DDAA44",I.lineWidth=2,I.setLineDash(et.bound?[]:[6,4]),I.moveTo(H,_t);for(let Tt=1;Tt<et.points.length;Tt++){const gt=dt+et.points[Tt][0]*Et,Q=ft-et.points[Tt][1]*Et;I.lineTo(gt,Q)}I.stroke(),I.setLineDash([]);const xt=Math.max(4,Math.floor(et.points.length/6));I.fillStyle=et.bound?"#4488CC":"#DDAA44";for(let Tt=xt;Tt<et.points.length-xt;Tt+=xt){const gt=et.points[Tt],Q=et.points[Math.min(Tt+2,et.points.length-1)],L=Q[0]-gt[0],lt=Q[1]-gt[1],it=Math.atan2(lt,L),wt=dt+gt[0]*Et,At=ft-gt[1]*Et;I.beginPath(),I.moveTo(wt+Math.cos(it)*5,At-Math.sin(it)*5),I.lineTo(wt+Math.cos(it+1.8)*7,At-Math.sin(it+1.8)*7),I.lineTo(wt+Math.cos(it-1.8)*7,At-Math.sin(it-1.8)*7),I.closePath(),I.fill()}if(et.bound&&isFinite(et.apoapsis)&&isFinite(et.periapsis)){const Tt=dt+et.apoapsis*Et,gt=dt+et.periapsis*Et;I.beginPath(),I.arc(Tt,ft,4,0,Math.PI*2),I.fillStyle="#FF8844",I.fill(),I.font="bold 9px monospace",I.fillStyle="#FF8844",I.fillText("Ap",Tt+6,ft+3),I.beginPath(),I.arc(gt,ft,4,0,Math.PI*2),I.fillStyle="#44DD88",I.fill(),I.fillStyle="#44DD88",I.fillText("Pe",gt+6,ft+3)}}I.fillStyle="rgba(244,245,242,0.3)",I.font="9px sans-serif",I.fillText(`${(Rt/1e3).toFixed(0)} km | Zoom: ${P.toFixed(1)}x`,10,$-10),requestAnimationFrame(ct)};window.addEventListener("keydown",V=>{(V.key==="m"||V.key==="Tab")&&(Y=!Y,K.style.display=Y?"block":"none",Y&&requestAnimationFrame(ct),V.preventDefault())}),window.addEventListener("keydown",V=>{if(V.key==="q"||V.key==="["){if(this.paused)return;this.warpIndex=Math.max(0,this.warpIndex-1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarpLabel(`x${this.timeWarp}`),V.preventDefault()}else if(V.key==="e"||V.key==="]"){if(this.paused)return;this.warpIndex=Math.min(this.warpLevels.length-1,this.warpIndex+1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarpLabel(`x${this.timeWarp}`),V.preventDefault()}else if(V.key==="p"){if(i.assembly.roots.some($=>$.part.kind==="parachute")||i.assembly.roots.some($=>$.children.some(I=>I.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const $={radius:.6*Ft,height:1*Ft};this.deployedChuteMesh=Ra($),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);Be.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}V.preventDefault()}else if(V.key==="g")this.toggleGear(),V.preventDefault();else if(V.key==="t"){const k=["off","hold","prograde","retrograde"],$=k.indexOf(this.sasMode);this.sasMode=k[($+1)%k.length],this.sasMode==="off"?Be.show("SAS disabled"):this.sasMode==="hold"?(this.sasTargetQuat.copy(this.rocketQuat),Be.show("SAS — attitude hold")):this.sasMode==="prograde"?Be.show("SAS — prograde"):Be.show("SAS — retrograde"),V.preventDefault()}else V.key==="f"&&(this.chase.reset(),Be.show("Camera view reset"),V.preventDefault())}),this.achievements.unlock("first_launch"),Be.show("You are at the launchpad. W/S throttle, ↑↓ pitch, ←→ yaw, T SAS, Esc pause.")}sanitize(t){isFinite(t[0])||(t[0]=0),isFinite(t[1])||(t[1]=0),isFinite(t[2])||(t[2]=0)}countStages(t){let e=0;for(const n of t)n.part.kind==="decoupler"&&e++,e+=this.countStages(n.children);return e}update(t){try{this.updateInner(t)}catch(e){Be.show(`ERROR: ${e.message||e}`),console.error("FlightScene.update error:",e)}}updateInner(t){const e=t;if(this.controls.consumePauseToggle()&&(this.paused=!this.paused,this.hud.setPaused(this.paused),this.paused&&this.sound.stopEngine()),this.paused){this.system.propagate(0,ta);for(const U of this.system.bodies)U.syncMesh?.();return}if(this.crashed){this.system.propagate(t*this.timeWarp,ta);for(const U of this.system.bodies)U.syncMesh?.();this.updateExplosion(e);return}this.missionTime+=e,this.missionTime=Math.min(this.missionTime,99999),t*=this.timeWarp,(!isFinite(t)||t<=0)&&(t=1/60),this.controls.update(e),this.controls.getZoomIn()&&this.chase.zoom(.92),this.controls.getZoomOut()&&this.chase.zoom(1.08);const n=this.timeWarp>1;n&&(this.state.throttle=0),!n&&this.controls.getStageRequested()&&this.performStage(),!n&&!this.grounded&&this.state.throttle>0&&(!Ii(this.state.rocket.assembly.roots)||this.state.rocket.totalFuelMass()<.1)&&this.state.rocket.assembly.roots.some(nt=>nt.part.kind==="decoupler"||nt.children.some(ht=>ht.part.kind==="decoupler"))&&this.performStage();const i=()=>new C(0,1,0).applyQuaternion(this.rocketQuat),s=this.state.throttle>0,o=n?0:this.controls.getPitch(),a=n?0:this.controls.getYaw(),l=n?0:this.controls.getRoll();if(this.angularVel.x+=o*this.ANGULAR_ACCEL*e,this.angularVel.y+=a*this.ANGULAR_ACCEL*e,this.angularVel.z+=l*this.ANGULAR_ACCEL*e,s&&!this.grounded&&(this.angularVel.x+=o*this.state.throttle*4*e,this.angularVel.y+=a*this.state.throttle*4*e),this.sasMode!=="off"&&!n){if(this.sasMode==="prograde"||this.sasMode==="retrograde"){const nt=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(nt>.1){let ht=new C(this.state.velocity[0]/nt,this.state.velocity[1]/nt,this.state.velocity[2]/nt);this.sasMode==="retrograde"&&ht.negate(),this.sasTargetQuat.setFromUnitVectors(new C(0,1,0),ht)}}const U=new Ze().copy(this.sasTargetQuat).invert().multiply(this.rocketQuat),ot=2*Math.acos(Math.abs(U.w));if(ot>.001){const nt=new C(U.x,U.y,U.z).normalize();this.angularVel.x-=nt.x*ot*3*e,this.angularVel.y-=nt.y*ot*3*e,this.angularVel.z-=nt.z*ot*3*e}this.angularVel.multiplyScalar(Math.exp(-5*e))}const c=Math.exp(-this.ANGULAR_DAMPING*e);this.angularVel.multiplyScalar(c);const u=new Ze().setFromAxisAngle(new C(0,0,1),this.angularVel.y*e),h=new Ze().setFromAxisAngle(new C(1,0,0),this.angularVel.x*e),d=new Ze().setFromAxisAngle(new C(0,1,0),this.angularVel.z*e);this.rocketQuat.multiply(u).multiply(h).multiply(d),this.rocketQuat.normalize(),this.rocketGroup.quaternion.copy(this.rocketQuat);const f=i(),m=f.x,_=f.y,g=f.z;let p=!1;if(s&&this.grounded){!this.countdownActive&&!this.launched&&(this.countdownActive=!0,this.countdownTimer=0,this.showCountdown("3")),this.countdownActive&&(this.countdownTimer+=e,this.countdownTimer>=1&&this.countdownTimer<2?this.showCountdown("2"):this.countdownTimer>=2&&this.countdownTimer<3?this.showCountdown("1"):this.countdownTimer>=3&&(this.countdownActive=!1,this.countdownTimer=0,this.showCountdown("LIFTOFF!"),setTimeout(()=>this.hideCountdown(),1500)));const U=Ii(this.state.rocket.assembly.roots);if(U&&U.thrust){const ot=U.thrust*1e3*this.state.throttle,nt=Ke(this.state.position,this.system),ht=this.state.position[0]-nt.position[0],et=this.state.position[1]-nt.position[1],H=this.state.position[2]-nt.position[2],_t=Math.sqrt(ht*ht+et*et+H*H)||1,xt=ms*nt.mass/(_t*_t),Tt=this.state.rocket.totalMass()*xt;p=ot>Tt*.95}}if(s&&(!this.grounded||p)&&(Fv(this.state,t,[m,_,g]),this.sanitize(this.state.velocity)),s&&p&&this.grounded&&(this.grounded=!1,this.groundedDir=null,this.liftoffFrames=5,this.launched=!0,this.achievements.unlock("reach_space"),this.sound.startEngine()),s){this.sound.setThrottle(this.state.throttle),this.engineFlame.setThrottle(this.state.throttle),this.engineFlame.start();const U=Ke(this.state.position,this.system),ot=this.state.position[0]-U.position[0],nt=this.state.position[1]-U.position[1],ht=this.state.position[2]-U.position[2],et=Math.sqrt(ot*ot+nt*nt+ht*ht)||1,H=U.getSurfaceRadiusAt?.(this.state.position)??U.radius??6371e3;this.engineFlame.setVacuum(et-H>5e4)}else this.sound.setThrottle(0),this.engineFlame.stop();this.engineFlame.update(e),s&&this.grounded?this.groundSmoke.start():this.groundSmoke.stop(),this.groundSmoke.update(e),this.grounded&&n||(this.state.position[0]+=this.state.velocity[0]*t,this.state.position[1]+=this.state.velocity[1]*t,this.state.position[2]+=this.state.velocity[2]*t);let v=null,x=1/0;const S=Ke(this.state.position,this.system),b=S.name;this.lastRefBody&&this.lastRefBody!==b&&Be.show(`Entering ${b.toUpperCase()} SOI`),this.lastRefBody=b;const A=S.position[0]-this.state.position[0],R=S.position[1]-this.state.position[1],B=S.position[2]-this.state.position[2];x=Math.sqrt(A*A+R*R+B*B),v=S;const y=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(!this.grounded&&v&&v.radius){const U=x-v.radius;if(U>0&&U<12e4&&y>2e3){const ot=Math.max(0,1-U/12e4)*Math.min(1,y/8e3);if(this.reentryGlow){this.reentryGlow.material.color.setHSL(.05,1,.7*ot),this.reentryGlow.material.opacity=.4*ot,this.reentryGlow.scale.setScalar(1+ot*2);const nt=this.rocketGroup.getObjectByName("reentry-outer");nt&&(nt.material.color.setHSL(.03,1,.4*ot),nt.material.opacity=.2*ot,nt.scale.setScalar(1+ot*4))}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const ot=this.rocketGroup.getObjectByName("reentry-outer");ot&&(ot.material.opacity=0)}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const U=this.rocketGroup.getObjectByName("reentry-outer");U&&(U.material.opacity=0)}if(this.liftoffFrames>0&&this.liftoffFrames--,this.grounded)this.state.velocity=[0,0,0];else{const U=A,ot=R,nt=B,ht=x,et=ht*ht;if(ht>1&&et>0){const Q=ms*S.mass/et;this.state.velocity[0]-=Q*U/ht*e,this.state.velocity[1]-=Q*ot/ht*e,this.state.velocity[2]-=Q*nt/ht*e}this.sanitize(this.state.velocity);const H=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),_t=this.state.rocket.totalMass();let xt=_t*.001+.2;if(this.parachuteDeployed?xt=50:this.gearDeployed&&(xt*=2.5),v&&v.radius&&H>.05&&H<1e6){const Q=x-v.radius;if(Q>0&&Q<3e5){const lt=.5*(1.225*Math.exp(-Q/8500))*H*H;this.hud.setQ(lt);const At=lt*xt/_t*e;if(At>=H)this.state.velocity[0]=0,this.state.velocity[1]=0,this.state.velocity[2]=0;else{const Jt=1-At/H;this.state.velocity[0]*=Jt,this.state.velocity[1]*=Jt,this.state.velocity[2]*=Jt}this.sanitize(this.state.velocity)}}const Tt=v?v.radius??0:0,gt=v?v.getSurfaceRadiusAt?.(this.state.position)??Tt:0;if(v&&Tt>0&&isFinite(x)){const Q=this.state.position[0]-v.position[0],L=this.state.position[1]-v.position[1],lt=this.state.position[2]-v.position[2],it=Math.sqrt(Q*Q+L*L+lt*lt),wt=(this.state.velocity[0]*Q+this.state.velocity[1]*L+this.state.velocity[2]*lt)/it;if(it<gt-1)this.doCrash(`Impact on ${v.name}`,v,Q,L,lt,it,gt);else if(it<gt+5&&it>.001&&this.liftoffFrames<=0){const At=new C(Q/it,L/it,lt/it),Jt=new C(0,1,0).applyQuaternion(this.rocketQuat),te=Math.acos(Math.min(1,Math.abs(Jt.dot(At))))*180/Math.PI,ye=this.hasLandingLegs(),De=this.parachuteDeployed?15:10,ne=ye?30:20;if(isFinite(wt)&&Math.abs(wt)>De)this.doCrash(`Too fast! (${Math.abs(wt).toFixed(0)} m/s) on ${v.name}`,v,Q,L,lt,it,gt);else if(te>ne)this.doCrash(`Tipped over! (${te.toFixed(0)}°) on ${v.name}`,v,Q,L,lt,it,gt);else if(isFinite(wt)&&wt<1){this.state.velocity=[0,0,0],this.grounded=!0,this.groundedDir=[Q/it,L/it,lt/it];const Ue=new C(Q/it,L/it,lt/it);if(this.rocketQuat.setFromUnitVectors(new C(0,1,0),Ue),this.state.position[0]!==v.position[0]+Q/it*(gt+.5)||this.state.position[1]!==v.position[1]+L/it*(gt+.5)||this.state.position[2]!==v.position[2]+lt/it*(gt+.5)){this.state.position=[v.position[0]+Q/it*(gt+.5),v.position[1]+L/it*(gt+.5),v.position[2]+lt/it*(gt+.5)],this.sound.playLand(),this.sound.stopEngine();const Ne=v.name;Be.show(`Landed on ${Ne}!`),Ne==="earth"?this.achievements.unlock("land_earth"):Ne==="moon"?this.achievements.unlock("land_moon"):Ne==="mars"?this.achievements.unlock("land_mars"):Ne==="venus"?this.achievements.unlock("land_venus"):Ne==="mercury"&&this.achievements.unlock("land_mercury")}}}else it<gt+200&&isFinite(wt)&&Math.abs(wt)>50&&this.doCrash(`High-speed impact! (${Math.abs(wt).toFixed(0)} m/s) on ${v.name}`,v,Q,L,lt,it,gt)}}if(this.system.propagate(t,ta),this.grounded&&this.groundedDir){const U=Ke(this.state.position,this.system),ot=U.radius??6371e3,nt=[U.position[0]+this.groundedDir[0],U.position[1]+this.groundedDir[1],U.position[2]+this.groundedDir[2]],et=(U.getSurfaceRadiusAt?.(nt)??ot)+.5;this.state.position[0]=U.position[0]+this.groundedDir[0]*et,this.state.position[1]=U.position[1]+this.groundedDir[1]*et,this.state.position[2]=U.position[2]+this.groundedDir[2]*et}if(this.grounded){const U=Ke(this.state.position,this.system),ot=this.state.position[0]-U.position[0],nt=this.state.position[1]-U.position[1],ht=this.state.position[2]-U.position[2],et=Math.sqrt(ot*ot+nt*nt+ht*ht),H=U.radius??6371e3;et>H*1.1&&(this.state.velocity=[0,0,0],this.state.position[0]=U.position[0]+ot/et*(H+10),this.state.position[1]=U.position[1]+nt/et*(H+10),this.state.position[2]=U.position[2]+ht/et*(H+10))}for(const U of this.system.bodies)U.syncMesh?.();if(this.debris.length>0){const U=Ke(this.state.position,this.system);for(let ot=this.debris.length-1;ot>=0;ot--){const nt=this.debris[ot];if(nt.life-=e,nt.life<=0||nt.body.mass<=0){this.sceneMgr.scene.remove(nt.mesh),this.debris.splice(ot,1);continue}const ht=ru(nt.body,this.system.bodies);nt.body.applyForce(ht,e),nt.mesh.position.set(nt.body.position[0]*ie,nt.body.position[1]*ie,nt.body.position[2]*ie);const et=nt.body.position[0]-U.position[0],H=nt.body.position[1]-U.position[1],_t=nt.body.position[2]-U.position[2],xt=Math.sqrt(et*et+H*H+_t*_t),Tt=U.getSurfaceRadiusAt?.(nt.body.position)??U.radius??6371e3;xt<Tt&&(this.sceneMgr.scene.remove(nt.mesh),this.debris.splice(ot,1))}}this.updateExplosion(e);const T=Ke(this.state.position,this.system),D=this.state.position[0]-T.position[0],N=this.state.position[1]-T.position[1],Y=this.state.position[2]-T.position[2],P=Math.sqrt(D*D+N*N+Y*Y)||1,F=new C(D/P,N/P,Y/P);this.rocketShadow&&(this.rocketShadow.visible=this.grounded&&!this.crashed),this.crashed||(this.rocketGroup.position.set(this.state.position[0]*ie,this.state.position[1]*ie,this.state.position[2]*ie),this.chase.follow(this.state,e,F,n),this.deployedChuteMesh&&(this.deployedChuteMesh.position.set(this.state.position[0]*ie,this.state.position[1]*ie+.02,this.state.position[2]*ie),this.deployedChuteMesh.rotation.copy(this.rocketGroup.rotation)));const W=v&&v.radius?x-v.radius:0,Z=this.countStages(this.rocket.assembly.roots),K=Ii(this.state.rocket.assembly.roots);if(K&&K.thrust){const U=K.thrust*1e3*this.state.throttle,ot=Ke(this.state.position,this.system),nt=this.state.position[0]-ot.position[0],ht=this.state.position[1]-ot.position[1],et=this.state.position[2]-ot.position[2],H=Math.sqrt(nt*nt+ht*ht+et*et)||1,_t=ms*ot.mass/(H*H),xt=this.state.rocket.totalMass()*_t;this.hud.setTWR(U/(xt||1))}else this.hud.setTWR(0);let J,tt,ct,V,k;const $=Ke(this.state.position,this.system);if($&&$.mass>0){const U=[(this.state.position[0]-$.position[0])*ie,(this.state.position[1]-$.position[1])*ie,(this.state.position[2]-$.position[2])*ie],ot=Or(U,this.state.velocity,$.mass,5e14,360);ot.bound&&(J=ot.apoapsis,tt=ot.periapsis,ct=ot.timeToAp,V=ot.timeToPe,k=ot.eccentricity)}if(this.impactMarker){const U=Ke(this.state.position,this.system),ot=[this.state.position[0]-U.position[0],this.state.position[1]-U.position[1],this.state.position[2]-U.position[2]],nt=Or(ot,this.state.velocity,U.mass,5e14,360);if(nt.points.length>10&&!nt.bound){const ht=nt.points[nt.points.length-1],et=U.getSurfaceRadiusAt?.([ht[0],0,ht[1]])??U.radius??6371e3;U.position[0]+ht[0],U.position[2]+ht[1];const H=Math.sqrt(ht[0]*ht[0]+ht[1]*ht[1]);if(H>et*.5){const _t=U.position[0]+ht[0]/H*et,xt=U.position[2]+ht[1]/H*et;this.impactMarker.position.set(_t*ie,0,xt*ie),this.impactMarker.visible=!0}else this.impactMarker.visible=!1}else this.impactMarker.visible=!1}this.hud.update(this.state,this.system,0,Z,J,tt,ct,V,this.missionTime,k),this.hud.setSAS(this.sasMode),W>this.maxAlt&&(this.maxAlt=W),y>this.maxSpeed&&(this.maxSpeed=y),this.hud.setRecord(`Alt ${(this.maxAlt/1e3).toFixed(0)}km Spd ${this.maxSpeed.toFixed(0)}m/s`);const I=Ii(this.state.rocket.assembly.roots);if(I&&I.thrust){const U=this.state.rocket.totalMass(),ot=U-this.state.rocket.totalFuelMass(),nt=320;if(ot>0&&U>ot){const et=nt*9.80665*Math.log(U/ot);this.hud.setDeltaV(et)}else this.hud.setDeltaV(0);this.hud.setIsp(nt)}else this.hud.setDeltaV(-1),this.hud.setIsp(0);const dt=this.state.velocity[0]-this.prevVel[0],ft=this.state.velocity[1]-this.prevVel[1],Ut=this.state.velocity[2]-this.prevVel[2],It=Math.sqrt(dt*dt+ft*ft+Ut*Ut),Rt=e>0?It/(e*9.80665):1;if(this.hud.setGForce(Rt),this.hud.setGForceEnabled(Rt>1.1),this.prevVel=[this.state.velocity[0],this.state.velocity[1],this.state.velocity[2]],Rt>2.5?this.screenShake=Math.min(1,(Rt-2.5)/5):this.screenShake*=Math.exp(-3*e),this.screenShake>.01){const U=(Math.random()-.5)*this.screenShake*.01,ot=(Math.random()-.5)*this.screenShake*.01;this.rocketGroup.position.x+=U,this.rocketGroup.position.z+=ot}const Et=y/1e3,z=50+Math.min(30,Et*.1);this.sceneMgr.camera.fov+=(z-this.sceneMgr.camera.fov)*e*2,this.sceneMgr.camera.updateProjectionMatrix();const ve=new C(0,1,0).applyQuaternion(this.rocketQuat),St=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),Dt=St>.01?[this.state.velocity[0]/St,this.state.velocity[1]/St,this.state.velocity[2]/St]:[0,1,0],Mt=Ke(this.state.position,this.system),Zt=this.state.position[0]-Mt.position[0],Nt=this.state.position[1]-Mt.position[1],w=this.state.position[2]-Mt.position[2],M=Math.sqrt(Zt*Zt+Nt*Nt+w*w)||1,G=this.state.velocity[0],at=this.state.velocity[1],st=this.state.velocity[2],rt=Nt*st-w*at,bt=w*G-Zt*st,ut=Zt*at-Nt*G,vt=Math.sqrt(rt*rt+bt*bt+ut*ut)||1,Lt=[],Ht={sun:"#ffdd44",earth:"#4fc3f7",moon:"#aaaacc",venus:"#e8a84c",mars:"#d4733a",jupiter:"#d4a574",saturn:"#f4e4a1",uranus:"#4fd0e8",neptune:"#4b70dd"};for(const U of this.system.bodies){if(U.mass<=0)continue;const ot=U.position[0]-this.state.position[0],nt=U.position[1]-this.state.position[1],ht=U.position[2]-this.state.position[2],et=Math.sqrt(ot*ot+nt*nt+ht*ht)||1;Lt.push({name:U.name,dir:[ot/et,nt/et,ht/et],color:Ht[U.name]||"#888"})}this.hud.setNavballData([ve.x,ve.y,ve.z],Dt,[Zt/M,Nt/M,w/M],[rt/vt,bt/vt,ut/vt],Lt)}updateRocketMesh(){const t=this.system.bodyByName("earth");t&&this.rocketGroup.position.set(0,(t.radius+100)*ie,0)}performStage(){const t=this.findLowestDecoupler(this.rocket.assembly.roots);if(!t){Be.show("No decouplers to stage.");return}this.sound.playStaging();const e=this.rocketGroup.getObjectByName(t.part.id);if(e){const n=[],i=[];for(let c=0;c<16;c++){const u=.02+Math.random()*.04,h=new ue(u,4,3),d=new ge({color:c<4?16746564:11184810,transparent:!0,opacity:.9,blending:gn,depthWrite:!1}),f=new mt(h,d),m=c/16*Math.PI*2+Math.random()*.3,_=(Math.random()-.5)*.8;f.position.copy(this.rocketGroup.position),f.position.x+=Math.cos(m)*.15,f.position.y+=_*.1,f.position.z+=Math.sin(m)*.15,this.sceneMgr.scene.add(f),f._life=.6+Math.random()*.4,f._age=0,f._vx=Math.cos(m)*(.8+Math.random()*1.5),f._vy=_*.5,f._vz=Math.sin(m)*(.8+Math.random()*1.5),this.explosionMeshes.push(f)}for(;e.children.length>0;){const c=e.children[0],u=new C;c.getWorldPosition(u),n.push(u),i.push(c),c.removeFromParent()}const s=Ke(this.state.position,this.system),o=[...this.state.position],a=[s.position[0]-o[0],s.position[1]-o[1],s.position[2]-o[2]],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])||1;for(let c=0;c<i.length;c++){const u=i[c],h=new sn;h.add(u),u.position.set(0,0,0);const d=this.sceneMgr.scene;h.position.copy(n[c]),h.position.x+=(Math.random()-.5)*.5,h.position.y+=(Math.random()-.5)*.5,h.position.z+=(Math.random()-.5)*.5,h.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),d.add(h);const f=1+Math.random()*2,m=[this.state.velocity[0]-a[0]/l*f+(Math.random()-.5)*.5,this.state.velocity[1]-a[1]/l*f+(Math.random()-.5)*.5,this.state.velocity[2]-a[2]/l*f+(Math.random()-.5)*.5],_=new qa("debris",100,o,m);this.debris.push({mesh:h,body:_,life:60})}}this.rocket.removeStage(t),this.achievements.unlock("stage_separate"),Be.show("Stage separated!")}findLowestDecoupler(t){let e=null;const n=i=>{for(const s of i)s.part.kind==="decoupler"&&(e=s),n(s.children)};return n(t),e}toggleParachute(){if(this.rocket.assembly.roots.some(e=>e.part.kind==="parachute")||this.rocket.assembly.roots.some(e=>e.children.some(n=>n.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const e={radius:.6*Ft,height:1*Ft};this.deployedChuteMesh=Ra(e),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);Be.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}}toggleGear(){this.gearDeployed=!this.gearDeployed;for(const t of this.gearMeshes)t.visible=this.gearDeployed;Be.show(this.gearDeployed?"Landing gear deployed":"Landing gear retracted")}doCrash(t,e,n,i,s,o,a){this.crashed||(this.crashed=!0,this.achievements.unlock("crash"),this.sound.playCrash(),this.sound.stopEngine(),Be.show(`CRASH! ${t}`),this.rocketGroup.visible=!1,this.engineFlame.stop(),this.state.position=[e.position[0]+n/o*a,e.position[1]+i/o*a,e.position[2]+s/o*a],this.state.velocity=[0,0,0],this.state.throttle=0,this.spawnExplosion(this.state.position[0]*ie,this.state.position[1]*ie,this.state.position[2]*ie),this.showCrashOverlay(t))}showCrashOverlay(t){const e=document.createElement("div");e.style.cssText=`
      position:fixed;top:0;left:0;width:100%;height:100%;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:rgba(0,0,0,0.7);z-index:1000;
      font-family:system-ui,sans-serif;color:#fff;
    `,e.innerHTML=`
      <div style="font-size:48px;font-weight:bold;color:#ff4444;margin-bottom:8px;">CRASH!</div>
      <div style="font-size:16px;color:#ccc;margin-bottom:32px;">${t}</div>
      <div style="display:flex;gap:16px;">
        <button id="crash-menu" style="padding:12px 32px;font-size:18px;border:1px solid #555;border-radius:6px;background:#222;color:#fff;cursor:pointer;">MENU</button>
        <button id="crash-restart" style="padding:12px 32px;font-size:18px;border:none;border-radius:6px;background:#4488ff;color:#fff;cursor:pointer;">LAUNCH AGAIN</button>
      </div>
    `,document.body.appendChild(e),this.crashOverlay=e,e.querySelector("#crash-menu").addEventListener("click",()=>{this.onCrashAction?.("menu")}),e.querySelector("#crash-restart").addEventListener("click",()=>{this.onCrashAction?.("restart")})}updateExplosion(t){if(this.explosionMeshes.length>0)for(let e=this.explosionMeshes.length-1;e>=0;e--){const n=this.explosionMeshes[e],i=n._age+t;n._age=i;const s=n._life,o=i/s;if(o>=1){this.sceneMgr.scene.remove(n),n.geometry.dispose(),n.material.dispose(),this.explosionMeshes.splice(e,1);continue}const a=1+o*6;n.scale.setScalar(a);const l=s<1?2:1;n.material.opacity=Math.max(0,.9*(1-o*l)),n.position.x+=n._vx*t,n.position.y+=n._vy*t,n.position.z+=n._vz*t}}explosionMeshes=[];spawnExplosion(t,e,n){const i=[16746496,16729088,16720384,16737792,13386752,16755200],s=new mt(new ue(.8,12,8),new ge({color:16755200,transparent:!0,opacity:1,blending:gn,depthWrite:!1}));s.position.set(t,e,n),s._life=.8,s._age=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s);for(let o=0;o<8;o++){const a=1+Math.random()*1.5,l=new ue(a,8,6),c=new ge({color:i[o%i.length],transparent:!0,opacity:.9,blending:gn,depthWrite:!1}),u=new mt(l,c),h=o/8*Math.PI*2,d=Math.random()*Math.PI,f=.3;u.position.set(t+Math.sin(h)*Math.cos(d)*f,e+Math.sin(d)*f,n+Math.cos(h)*Math.cos(d)*f),u._life=1.5+Math.random()*.5,u._age=0,u._vx=Math.sin(h)*Math.cos(d)*(1+Math.random()*3),u._vy=Math.sin(d)*(1+Math.random()*3),u._vz=Math.cos(h)*Math.cos(d)*(1+Math.random()*3),this.sceneMgr.scene.add(u),this.explosionMeshes.push(u)}for(let o=0;o<4;o++){const a=1.5+Math.random()*2,l=new ge({color:4473924,transparent:!0,opacity:.4,blending:oi,depthWrite:!1}),c=new mt(new ue(a,6,6),l),u=o/4*Math.PI*2+Math.random()*.5;c.position.set(t+Math.cos(u)*.5,e+(Math.random()-.5)*.3,n+Math.sin(u)*.5),c._life=2+Math.random()*.5,c._age=0,c._vx=Math.cos(u)*(.5+Math.random()*1.5),c._vy=(Math.random()-.5)*1,c._vz=Math.sin(u)*(.5+Math.random()*1.5),this.sceneMgr.scene.add(c),this.explosionMeshes.push(c)}}hasLandingLegs(){const t=e=>{for(const n of e)if(n.part.kind==="legs"||t(n.children))return!0;return!1};return t(this.rocket.assembly.roots)}positionFlameAtNozzle(){let t=1/0;this.rocketGroup.traverse(n=>{if(n instanceof mt){const i=new rn().setFromObject(n);i.min.y<t&&(t=i.min.y)}});const e=t===1/0?-.1:t-.01;this.engineFlame.getMesh().position.set(0,e,0),this.engineFlame.getMesh().rotation.set(0,0,0)}dispose(){this.crashOverlay&&(this.crashOverlay.remove(),this.crashOverlay=null),this.sceneMgr.scene.remove(this.rocketGroup);for(const t of this.debris)this.sceneMgr.scene.remove(t.mesh);this.debris=[];for(const t of this.explosionMeshes)this.sceneMgr.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.explosionMeshes=[],this.controls.dispose(),this.engineFlame.dispose(),this.groundSmoke.dispose(),this.hud.unmount(),this.sound.dispose()}}function Xv(r,t,e){const n=r.mass,i=[...r.position],s=[...r.velocity],o=Se(t(r),1/n),a=s,c=oa(r,Fe(i,Se(o,.5*e)),Fe(s,Se(a,.5*e))),u=Se(t(c),1/n),h=Fe(s,Se(o,.5*e)),f=oa(r,Fe(i,Se(u,.5*e)),Fe(s,Se(h,.5*e))),m=Se(t(f),1/n),_=Fe(s,Se(u,.5*e)),p=oa(r,Fe(i,Se(m,e)),Fe(s,Se(_,e))),v=Se(t(p),1/n),x=Fe(s,Se(m,e)),S=Se(Fe(Fe(o,Se(u,2)),Fe(Se(m,2),v)),e/6),b=Se(Fe(Fe(a,Se(h,2)),Fe(Se(_,2),x)),e/6);r.position=Fe(i,b),r.velocity=Fe(s,S)}function oa(r,t,e){return{...r,position:t,velocity:e}}function Fe(r,t){return[r[0]+t[0],r[1]+t[1],r[2]+t[2]]}function Se(r,t){return[r[0]*t,r[1]*t,r[2]*t]}class qv{bodies=[];add(t){this.bodies.push(t)}bodyByName(t){return this.bodies.find(e=>e.name===t)}propagate(t,e){let n=t;for(;n>0;){const i=Math.min(e,n);this.step(i),n-=i}}step(t){for(const e of this.bodies){if(e.mass<=0)continue;const n=ru(e,this.bodies);Xv(e,()=>n,t)}}}const Kn=Hn*Bn;class zn extends qa{radius;visualRadius;mesh;constructor(t,e,n,i,s){super(t,e,n,i),this.radius=s,this.visualRadius=s*Kn;const o=new ue(this.visualRadius,64,32),a=new pe({color:8421504});this.mesh=new mt(o,a),this.mesh.position.set(n[0]*Kn,n[1]*Kn,n[2]*Kn)}getTerrainHeightVisual(t,e,n){return 0}syncMesh(){this.mesh.position.set(this.position[0]*Kn,this.position[1]*Kn,this.position[2]*Kn)}getSurfaceRadiusAt(t){const e=t[0]-this.position[0],n=t[1]-this.position[1],i=t[2]-this.position[2],s=Math.sqrt(e*e+n*n+i*i);if(s===0)return this.radius;const o=e/s,a=n/s,l=i/s,u=this.getTerrainHeightVisual(o,a,l)/Kn;return this.radius+u}}const aa=Hn*Bn,Zc=64,$n=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},Yv=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=$n(n,i,s),f=$n(n+1,i,s),m=$n(n,i+1,s),_=$n(n+1,i+1,s),g=$n(n,i,s+1),p=$n(n+1,i,s+1),v=$n(n,i+1,s+1),x=$n(n+1,i+1,s+1);return Si(Si(Si(d,f,c),Si(m,_,c),u),Si(Si(g,p,c),Si(v,x,c),u),h)},kr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*Yv(r*l,t*l,e*l),o+=s,s*=.5}return i/o},Si=(r,t,e)=>r+(t-r)*e;class jv extends zn{getTerrainHeightVisual(t,e,n){const i=kr(t*10+500,e*10+600,n*10+700,4),s=kr(t*40+100,e*40+200,n*40+300,3),o=i*.8+s*.2,a=this.visualRadius*.03;return o>.4?((o-.4)/.6)**2*a:-(.4-o)/.4*a*.12}constructor(t,e){super("mercury",1e24,t,e,244e4);const n=this.visualRadius,s=new wn().load(An("/textures/mercury.jpg"),h=>{h.colorSpace=$t,h.anisotropy=4}),o=new ue(n,Zc,Zc),a=o.attributes.position,l=new C,c=n*.03;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,m=l.z/n,_=kr(d*10+500,f*10+600,m*10+700,4),g=kr(d*40+100,f*40+200,m*40+300,3),p=_*.8+g*.2;let v=0;p>.4?v=((p-.4)/.6)**2*c:v=-(.4-p)/.4*c*.12,l.setLength(n+v),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new pe({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new mt(o,u),this.mesh.position.set(t[0]*aa,t[1]*aa,t[2]*aa)}}const Kv=`
varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vNormal  = normalize(normalMatrix * normal);
  vViewDir = normalize(cameraPosition - worldPos.xyz);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,$v=`
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
`,Zv=1.04;class Ps{mesh;constructor(t,e=4491519,n=.7){const i=t*Zv,s=new ue(i,48,24),o=new Sn({vertexShader:Kv,fragmentShader:$v,uniforms:{glowColor:{value:new Pt(e)},intensity:{value:n}},transparent:!0,blending:gn,depthWrite:!1,side:Mn});this.mesh=new mt(s,o)}getMesh(){return this.mesh}}const la=Hn*Bn,Jc=64,Zn=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},Jv=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=Zn(n,i,s),f=Zn(n+1,i,s),m=Zn(n,i+1,s),_=Zn(n+1,i+1,s),g=Zn(n,i,s+1),p=Zn(n+1,i,s+1),v=Zn(n,i+1,s+1),x=Zn(n+1,i+1,s+1);return bi(bi(bi(d,f,c),bi(m,_,c),u),bi(bi(g,p,c),bi(v,x,c),u),h)},Hr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*Jv(r*l,t*l,e*l),o+=s,s*=.5}return i/o},bi=(r,t,e)=>r+(t-r)*e;class Qv extends zn{getTerrainHeightVisual(t,e,n){const i=Hr(t*6+50,e*6+100,n*6+150,4),s=Hr(t*15+200,e*15+300,n*15+400,3),o=i*.6+s*.4,a=this.visualRadius*.015;return o>.35?((o-.35)/.65)**2*a:-(.35-o)/.35*a*.05}atmosphereGlow;constructor(t,e){super("venus",146e23,t,e,6052e3);const n=this.visualRadius,s=new wn().load(An("/textures/venus.jpg"),h=>{h.colorSpace=$t,h.anisotropy=4}),o=new ue(n,Jc,Jc),a=o.attributes.position,l=new C,c=n*.015;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,m=l.z/n,_=Hr(d*6+50,f*6+100,m*6+150,4),g=Hr(d*15+200,f*15+300,m*15+400,3),p=_*.6+g*.4;let v=0;p>.35?v=((p-.35)/.65)**2*c:v=-(.35-p)/.35*c*.05,l.setLength(n+v),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new pe({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new mt(o,u),this.mesh.position.set(t[0]*la,t[1]*la,t[2]*la),this.atmosphereGlow=new Ps(n,15247436,.4),this.mesh.add(this.atmosphereGlow.getMesh())}}const ca=Hn*Bn;function tx(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"#1a3a6a"),i.addColorStop(.5,"#2a6daa"),i.addColorStop(1,"#1a4a8a"),n.fillStyle=i,n.fillRect(0,0,1024,512);const s=[{lat:.7,lon:-2,rx:.55,ry:.5,color:"#5a8c3f"},{lat:.65,lon:-1.6,rx:.35,ry:.35,color:"#6a9c4f"},{lat:-.35,lon:-1.4,rx:.4,ry:.6,color:"#6a9c4f"},{lat:.85,lon:.4,rx:.2,ry:.22,color:"#7aac5a"},{lat:.1,lon:.6,rx:.45,ry:.5,color:"#8a9c4f"},{lat:.5,lon:1.5,rx:.6,ry:.4,color:"#7a9c4a"},{lat:.3,lon:1.1,rx:.25,ry:.15,color:"#8aac5a"},{lat:-.4,lon:1.7,rx:.15,ry:.35,color:"#7a9c4f"},{lat:1,lon:-2.5,rx:.08,ry:.1,color:"#6a9c4f"},{lat:-.7,lon:-1.1,rx:.08,ry:.08,color:"#7aac5a"}];for(const a of s){n.fillStyle=a.color,n.beginPath();const l=(a.lon+Math.PI)/(2*Math.PI)*1024,c=(Math.PI/2-a.lat)/Math.PI*512,u=a.rx/(2*Math.PI)*1024,h=a.ry/Math.PI*512;n.ellipse(l,c,u,h,0,0,Math.PI*2),n.fill();const d=a.lat*1e3+a.lon*100,f=(()=>{let m=d|0;return()=>{m=m+1831565813|0;let _=Math.imul(m^m>>>15,1|m);return _=_+Math.imul(_^_>>>7,61|_)^_,((_^_>>>14)>>>0)/4294967296}})();for(let m=0;m<80;m++){const _=(f()-.5)*u*1.8,g=(f()-.5)*h*1.8;(_/u)**2+(g/h)**2<1&&(n.fillStyle=f()>.5?"#2a5c1f":"#6a9c4a",n.beginPath(),n.arc(l+_,c+g,1+f()*4,0,Math.PI*2),n.fill())}}n.fillStyle="#c0d8e8",n.fillRect(0,0,1024,512*.05),n.fillRect(0,512*.95,1024,512*.05);const o=new _n(e);return o.wrapS=o.wrapT=Ye,o.colorSpace=$t,o}class ex extends zn{constructor(t,e){super("earth",av,t,e,6371e3);const n=this.visualRadius,i=200,s=new ue(n,i,i),o=new pe({roughness:.9,metalness:0,bumpMap:uv(),bumpScale:.5});this.mesh=new mt(s,o),this.mesh.position.set(t[0]*ca,t[1]*ca,t[2]*ca),this.generateTerrain(n);const a=tx();o.map=a,o.needsUpdate=!0,this.loadHighResTexture().catch(()=>{})}async loadHighResTexture(){const e=await new wn().loadAsync(An("/textures/earth_daymap.jpg"));e.colorSpace=$t,e.anisotropy=8;const n=this.mesh.material;n.map=e,n.needsUpdate=!0}getTerrainHeightVisual(t,e,n){const i=Math.sin(t*3+e*1.8)*.5+Math.cos(e*2.5-n*1.3)*.3,s=Math.sin(n*1.8+t*1.2+e*.6)*.2+Math.sin(t*6+e*3+n*4)*.15,o=Math.sin(t*12+n*8)*.1+Math.cos(e*10+t*5)*.08,a=Math.sin(t*25+e*20+n*30)*.05,l=((i+s+o+a)*.3+.5)*1.2,c=this.visualRadius*.025,u=this.visualRadius*.005;if(l>.4){const h=(l-.4)/.6;return h*h*c}return-(.4-l)/.4*u}generateTerrain(t){const e=this.mesh.geometry,n=e.attributes.position,i=new C;for(let s=0;s<n.count;s++){i.fromBufferAttribute(n,s);const o=i.x/t,a=i.y/t,l=i.z/t,c=this.getTerrainHeightVisual(o,a,l);i.setLength(t+c),n.setXYZ(s,i.x,i.y,i.z)}n.needsUpdate=!0,e.computeVertexNormals()}}const ha=Hn*Bn,Qc=64,Jn=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},nx=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=Jn(n,i,s),f=Jn(n+1,i,s),m=Jn(n,i+1,s),_=Jn(n+1,i+1,s),g=Jn(n,i,s+1),p=Jn(n+1,i,s+1),v=Jn(n,i+1,s+1),x=Jn(n+1,i+1,s+1);return Ti(Ti(Ti(d,f,c),Ti(m,_,c),u),Ti(Ti(g,p,c),Ti(v,x,c),u),h)},Br=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*nx(r*l,t*l,e*l),o+=s,s*=.5}return i/o},Ti=(r,t,e)=>r+(t-r)*e;class ix extends zn{getTerrainHeightVisual(t,e,n){const i=Br(t*8+100,e*8+200,n*8+300,4),s=Br(t*30+400,e*30+500,n*30+600,3),o=i*.7+s*.3,a=this.visualRadius*.04;return o>.45?((o-.45)/.55)**2*a:-(.45-o)/.45*a*.15}constructor(t,e){super("moon",22e22,t,e,1737e3);const n=this.visualRadius,s=new wn().load(An("/textures/moon.jpg"),h=>{h.colorSpace=$t,h.anisotropy=4}),o=new ue(n,Qc,Qc),a=o.attributes.position,l=new C,c=n*.04;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,m=l.z/n,_=Br(d*8+100,f*8+200,m*8+300,4),g=Br(d*30+400,f*30+500,m*30+600,3),p=_*.7+g*.3;let v=0;p>.45?v=((p-.45)/.55)**2*c:v=-(.45-p)/.45*c*.15,l.setLength(n+v),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new pe({map:s,roughness:.95,metalness:0,color:16777215});this.mesh=new mt(o,u),this.mesh.position.set(t[0]*ha,t[1]*ha,t[2]*ha)}}const ua=Hn*Bn,th=64,Qn=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},sx=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=Qn(n,i,s),f=Qn(n+1,i,s),m=Qn(n,i+1,s),_=Qn(n+1,i+1,s),g=Qn(n,i,s+1),p=Qn(n+1,i,s+1),v=Qn(n,i+1,s+1),x=Qn(n+1,i+1,s+1);return Ei(Ei(Ei(d,f,c),Ei(m,_,c),u),Ei(Ei(g,p,c),Ei(v,x,c),u),h)},zr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*sx(r*l,t*l,e*l),o+=s,s*=.5}return i/o},Ei=(r,t,e)=>r+(t-r)*e;class rx extends zn{getTerrainHeightVisual(t,e,n){const i=zr(t*4+10,e*4+20,n*4+30,5),s=zr(t*20+100,e*20+200,n*20+300,3),o=i*.7+s*.3,a=this.visualRadius*.035;return o>.4?((o-.4)/.6)**2*a:-(.4-o)/.4*a*.1}atmosphereGlow;constructor(t,e){super("mars",19e23,t,e,339e4);const n=this.visualRadius,s=new wn().load(An("/textures/mars.jpg"),h=>{h.colorSpace=$t,h.anisotropy=4}),o=new ue(n,th,th),a=o.attributes.position,l=new C,c=n*.035;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,m=l.z/n,_=zr(d*4+10,f*4+20,m*4+30,5),g=zr(d*20+100,f*20+200,m*20+300,3),p=_*.7+g*.3;let v=0;p>.4?v=((p-.4)/.6)**2*c:v=-(.4-p)/.4*c*.1,l.setLength(n+v),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new pe({map:s,roughness:.85,metalness:0,color:16777215});this.mesh=new mt(o,u),this.mesh.position.set(t[0]*ua,t[1]*ua,t[2]*ua),this.atmosphereGlow=new Ps(n,13920842,.25),this.mesh.add(this.atmosphereGlow.getMesh())}}const eh=64,ti=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},ox=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=ti(n,i,s),f=ti(n+1,i,s),m=ti(n,i+1,s),_=ti(n+1,i+1,s),g=ti(n,i,s+1),p=ti(n+1,i,s+1),v=ti(n,i+1,s+1),x=ti(n+1,i+1,s+1);return wi(wi(wi(d,f,c),wi(m,_,c),u),wi(wi(g,p,c),wi(v,x,c),u),h)},nh=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*ox(r*l,t*l,e*l),o+=s,s*=.5}return i/o},wi=(r,t,e)=>r+(t-r)*e;class ax extends zn{atmosphereGlow;constructor(t,e){super("jupiter",19e26,t,e,69911e3);const n=this.visualRadius;new wn().load(An("/textures/jupiter.jpg"),u=>{u.colorSpace=$t,u.anisotropy=4});const s=new ue(n,eh,eh),o=s.attributes.position,a=new C,l=n*.02;for(let u=0;u<o.count;u++){a.fromBufferAttribute(o,u);const h=a.x/n,d=a.y/n,f=a.z/n,m=nh(h*8+10,d*8+20,f*8+30,4),_=nh(h*30+100,d*30+200,f*30+300,3),g=m*.7+_*.3;let p=0;g>.4?p=((g-.4)/.6)**2*l:p=-(.4-g)/.4*l*.1,a.setLength(n+p),o.setXYZ(u,a.x,a.y,a.z)}o.needsUpdate=!0,s.computeVertexNormals();const c=new pe({map:void 0,roughness:.9,metalness:0,color:13935988});this.mesh=new mt(s,c),this.mesh.position.set(0,0,0),this.mesh.rotation.z=3.1*Math.PI/180,this.atmosphereGlow=new Ps(n,13935988,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}function ei(r,t,e){const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)}function lx(r,t,e){const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=ei(n,i,s),f=ei(n+1,i,s),m=ei(n,i+1,s),_=ei(n+1,i+1,s),g=ei(n,i,s+1),p=ei(n+1,i,s+1),v=ei(n,i+1,s+1),x=ei(n+1,i+1,s+1);return Ai(Ai(Ai(d,f,c),Ai(m,_,c),u),Ai(Ai(g,p,c),Ai(v,x,c),u),h)}function Ts(r,t,e,n){let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*lx(r*l,t*l,e*l),o+=s,s*=.5}return i/o}function Ai(r,t,e){return r+(t-r)*e}function cx(){const e=document.createElement("canvas");e.width=1024,e.height=64;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,1024,0);i.addColorStop(0,"#8a7a5a"),i.addColorStop(.05,"#b8a888"),i.addColorStop(.12,"#d4c8a8"),i.addColorStop(.2,"#c0b898"),i.addColorStop(.35,"#e8ddd0"),i.addColorStop(.5,"#c0b090"),i.addColorStop(.65,"#d8ccb0"),i.addColorStop(.8,"#a89878"),i.addColorStop(.9,"#786858"),i.addColorStop(1,"#584838"),n.fillStyle=i,n.fillRect(0,0,1024,64);for(let o=0;o<8e3;o++){const a=Math.random()*1024,l=Math.random()*64,c=1+Math.random()*4,u=120+Math.random()*80;n.fillStyle=`rgba(${u},${u-20},${u-40},${.2+Math.random()*.4})`,n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.fill()}n.fillStyle="rgba(0,0,0,0.7)",n.fillRect(1024*.43,0,1024*.04,64),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(1024*.72,0,1024*.015,64),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(1024*.1,0,1024*.02,64),n.fillRect(1024*.17,0,1024*.01,64),n.fillRect(1024*.55,0,1024*.02,64),n.fillStyle="rgba(200,190,170,0.15)";for(let o=0;o<1024;o+=8)n.fillRect(o,0,2,64);const s=new _n(e);return s.wrapS=Ye,s.wrapT=Ye,s.anisotropy=4,s}class hx extends zn{atmosphereGlow;constructor(t,e){super("saturn",5683e23,t,e,58232e3);const n=this.visualRadius,s=new wn().load(An("/textures/saturn.jpg"),v=>{v.colorSpace=$t,v.anisotropy=4}),o=new ue(n,64,32),a=o.attributes.position,l=new C,c=n*.015;for(let v=0;v<a.count;v++){l.fromBufferAttribute(a,v);const x=l.x/n,S=l.y/n,b=l.z/n,A=Ts(x*8+10,S*8+20,b*8+30,4),R=Ts(x*30+100,S*30+200,b*30+300,3),B=A*.7+R*.3;let y=0;B>.4?y=((B-.4)/.6)**2*c:y=-(.4-B)/.4*c*.1,l.setLength(n+y),a.setXYZ(v,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new pe({map:s,roughness:.9,metalness:0,color:16049313});this.mesh=new mt(o,u),this.mesh.position.set(0,0,0),this.mesh.rotation.z=26.7*Math.PI/180,this.atmosphereGlow=new Ps(n,16049313,.1),this.mesh.add(this.atmosphereGlow.getMesh());const h=cx(),d=new bn(n*1.15,n*2.4,256),f=new ge({map:h,side:be,transparent:!0,opacity:.8,depthWrite:!1}),m=new mt(d,f);m.rotation.x=-Math.PI/2,m.rotation.z=26.7*Math.PI/180,this.mesh.add(m);const _=new bn(n*2.4,n*2.8,128),g=new ge({color:8943720,side:be,transparent:!0,opacity:.15,depthWrite:!1}),p=new mt(_,g);p.rotation.x=-Math.PI/2,p.rotation.z=26.7*Math.PI/180,this.mesh.add(p)}}class ux extends zn{atmosphereGlow;constructor(t,e){super("uranus",8681e22,t,e,25362e3);const n=this.visualRadius,s=new wn().load(An("/textures/uranus.jpg"),m=>{m.colorSpace=$t,m.anisotropy=4}),o=new ue(n,64,32),a=o.attributes.position,l=new C,c=n*.015;for(let m=0;m<a.count;m++){l.fromBufferAttribute(a,m);const _=l.x/n,g=l.y/n,p=l.z/n,v=Ts(_*6+10,g*6+20,p*6+30,4),x=Ts(_*25+400,g*25+500,p*25+600,3),S=v*.7+x*.3;let b=0;S>.4?b=((S-.4)/.6)**2*c:b=-(.4-S)/.4*c*.1,l.setLength(n+b),a.setXYZ(m,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new pe({map:s,roughness:.9,metalness:0,color:5230824});this.mesh=new mt(o,u),this.mesh.position.set(0,0,0),this.mesh.rotation.z=-97.8*Math.PI/180,this.atmosphereGlow=new Ps(n,5230824,.1),this.mesh.add(this.atmosphereGlow.getMesh());const h=new bn(n*1.2,n*2.1,64),d=new ge({color:11184844,side:be,transparent:!0,opacity:.3}),f=new mt(h,d);f.rotation.x=-Math.PI/2,f.rotation.z=97.8*Math.PI/180,this.mesh.add(f)}}class dx extends zn{atmosphereGlow;constructor(t,e){super("neptune",1024e23,t,e,24622e3);const n=this.visualRadius,s=new wn().load(An("/textures/neptune.jpg"),h=>{h.colorSpace=$t,h.anisotropy=4}),o=new ue(n,64,32),a=o.attributes.position,l=new C,c=n*.015;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,m=l.z/n,_=Ts(d*6+10,f*6+20,m*6+30,4),g=Ts(d*25+100,f*25+200,m*25+300,3),p=_*.7+g*.3;let v=0;p>.4?v=((p-.4)/.6)**2*c:v=-(.4-p)/.4*c*.1,l.setLength(n+v),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new pe({map:s,roughness:.9,metalness:0,color:4944093});this.mesh=new mt(o,u),this.mesh.position.set(0,0,0),this.mesh.rotation.z=28.3*Math.PI/180,this.atmosphereGlow=new Ps(n,4944093,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const hs=Hn*Bn,fx=`
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
`;class mx extends qa{light;visualRadius;mesh;constructor(t,e,n=2e26){super("sun",n,t,e),this.visualRadius=100;const i=new ue(this.visualRadius,32,16),s=new Sn({vertexShader:fx,fragmentShader:px,uniforms:{uTime:{value:0},uColor:{value:new Pt(16763904)},uIntensity:{value:1.5}},transparent:!0,blending:gn,depthWrite:!1,side:be});this.mesh=new mt(i,s),this.mesh.position.set(t[0]*hs,t[1]*hs,t[2]*hs),this.light=new Js(16772829,2.5),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z);const o=gx(),a=new Gh({map:o,blending:gn,depthWrite:!1,transparent:!0,opacity:1}),l=new kg(a);l.scale.set(25e4,25e4,1),this.mesh.add(l),this.sunMaterial=s}sunMaterial;update(t){this.sunMaterial.uniforms.uTime.value+=t}syncMesh(){this.mesh.position.set(this.position[0]*hs,this.position[1]*hs,this.position[2]*hs),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z)}}function gx(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255, 220, 100, 1)"),n.addColorStop(.1,"rgba(255, 200, 80, 0.8)"),n.addColorStop(.3,"rgba(255, 160, 40, 0.4)"),n.addColorStop(.5,"rgba(255, 100, 20, 0.15)"),n.addColorStop(.7,"rgba(255, 60, 10, 0.05)"),n.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,256,256);const i=new _n(t);return i.needsUpdate=!0,i}class ih{assembly;fuelTanks;constructor(t){this.assembly=t,this.fuelTanks=[],ou(t.roots,this.fuelTanks)}dryMass(){return this.assembly.totalMass()}totalFuelMass(){return this.fuelTanks.reduce((t,e)=>t+e.remaining,0)}totalMass(){return this.dryMass()+this.totalFuelMass()}consumeFuel(t,e){let n=0;for(let i=this.fuelTanks.length-1;i>=0;i--){const s=this.fuelTanks[i];if(s.remaining<=0)continue;const o=t*e-n;if(o<=0)break;const a=Math.min(s.remaining,o);s.remaining-=a,n+=a}return n}removeStage(t){const e=new Set;au(t,e),e.add(t),this.fuelTanks=this.fuelTanks.filter(n=>!e.has(n.node)),t.children=[]}}function ou(r,t){for(const e of r)e.part.fuelCapacity&&t.push({node:e,remaining:e.part.fuelCapacity,capacity:e.part.fuelCapacity}),ou(e.children,t)}function au(r,t){for(const e of r.children)t.add(e),au(e,t)}const sh="ellipse_achievements";class _x{unlocked=new Set;callbacks=[];constructor(){const t=localStorage.getItem(sh);if(t)try{JSON.parse(t).forEach(e=>this.unlocked.add(e))}catch{}}unlock(t){this.unlocked.has(t)||(this.unlocked.add(t),localStorage.setItem(sh,JSON.stringify([...this.unlocked])),this.callbacks.forEach(e=>e(t)))}isUnlocked(t){return this.unlocked.has(t)}list(){return[...this.unlocked]}onUnlock(t){this.callbacks.push(t)}}const da={units:"metric",autoSave:!0,difficulty:"normal"},lu="ellipse_settings";function vx(){const r=localStorage.getItem(lu);if(!r)return{...da};try{return{...da,...JSON.parse(r)}}catch{return{...da}}}function rh(r){localStorage.setItem(lu,JSON.stringify(r))}class xx{root;onClose;current;constructor(t,e){this.current=t,this.onClose=e,this.root=document.createElement("div"),this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 250;
      background: rgba(6, 8, 20, 0.88);
      display: flex; align-items: center; justify-content: center;
    `;const n=document.createElement("div");n.className="panel panel--elevated",n.style.cssText="padding: var(--space-6); min-width: 400px;";const i=document.createElement("h2");i.className="text-display-sm",i.textContent="Settings",i.style.cssText="margin: 0 0 var(--space-5);",n.appendChild(i);const s=this.makeRow("Units",["metric","imperial","mixed"],t.units,l=>{this.current.units=l});n.appendChild(s);const o=this.makeToggle("Auto-save",t.autoSave,l=>{this.current.autoSave=l});n.appendChild(o);const a=document.createElement("button");a.className="btn btn--primary",a.textContent="Save & Close",a.style.cssText="margin-top: var(--space-4); width: 100%; padding: 12px;",a.addEventListener("click",()=>{rh(this.current),this.onClose()}),n.appendChild(a),this.root.appendChild(n)}makeRow(t,e,n,i){const s=document.createElement("div");s.style.cssText="margin: var(--space-3) 0;";const o=document.createElement("div");o.className="text-caption",o.textContent=t,o.style.cssText="margin-bottom: var(--space-2);",s.appendChild(o);const a=document.createElement("div");a.style.cssText="display:flex;gap:var(--space-2);";for(const l of e){const c=document.createElement("button");c.className=`btn${l===n?" btn--secondary":""}`,c.textContent=l,l===n&&(c.style.borderColor="var(--accent-blue)"),c.addEventListener("click",()=>{i(l),rh(this.current)}),a.appendChild(c)}return s.appendChild(a),s}makeToggle(t,e,n){const i=document.createElement("div");i.style.cssText="margin: var(--space-3) 0; display: flex; justify-content: space-between; align-items: center;";const s=document.createElement("span");s.className="text-body",s.textContent=t;const o=document.createElement("input");return o.type="checkbox",o.checked=e,o.addEventListener("change",()=>n(o.checked)),i.appendChild(s),i.appendChild(o),i}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove()}}function Gr(r){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle=r,e.fillRect(0,0,64,64),e.strokeStyle="#000",e.lineWidth=2,e.strokeRect(0,0,64,64),e.strokeRect(16,16,32,32);const n=new _n(t);return n.wrapS=n.wrapT=Je,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}Gr("#8899aa"),Gr("#808080"),Gr("#808080"),Gr("#000000");async function Di(r,t=$t){const e=await new Promise((i,s)=>{const o=new Image;o.onload=()=>i(o),o.onerror=()=>s(new Error(`Failed: ${r}`)),o.src=r}),n=new Te(e);return n.colorSpace=t,n.wrapS=n.wrapT=Je,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}async function Wr(r){const[t,e,n,i]=await Promise.all([Di(`/textures/${r}_color.jpg`,$t),Di(`/textures/${r}_normal.jpg`,fe),Di(`/textures/${r}_rough.jpg`,fe),Di(`/textures/${r}_metal.jpg`,fe)]);return{color:t,normal:e,roughness:n,metalness:i}}let yx=!1,Mx=null,Sx=null,bx=null,Tx=null,Ex=null,Vr=null;function wx(){return Vr||(Vr=(async()=>{try{[Mx,Sx,bx,Tx,Ex]=await Promise.all([Wr("metal013"),Wr("plates"),Wr("metal009"),Wr("metal021"),(async()=>{const[r,t,e]=await Promise.all([Di("/textures/fabric_color.jpg",$t),Di("/textures/fabric_normal.jpg",fe),Di("/textures/fabric_rough.jpg",fe)]);return{color:r,normal:t,roughness:e,metalness:e}})()]),yx=!0}catch(r){console.error("Texture loading failed, using fallback",r)}})(),Vr)}class Ax{renderer;sceneMgr;system;achievements;mainMenu;vab;flight;constructor(){wx(),this.renderer=new S_,this.sceneMgr=new T_,this.achievements=new _x,this.system=new qv;const t=2e26;this.system.add(new mx([0,0,0],[0,0,0],t)),this.system.add(new jv([15e7,0,2e7],[0,0,47400])),this.system.add(new Qv([3e8,0,-3e7],[0,0,3e4]));const e=[5e8,0,0],n=[0,0,24e3];this.system.add(new ex(e,n));const i=[e[0],0,e[2]+3844e5],s=[0,0,n[2]+1020];this.system.add(new ix(i,s)),this.system.add(new rx([75e7,5e8,-2e8],[0,0,19500])),this.system.add(new ax([15e8,-3e8,1e8],[0,0,13e3])),this.system.add(new hx([28e8,2e8,-2e8],[0,0,9700])),this.system.add(new ux([55e8,-1e8,3e8],[0,0,6800])),this.system.add(new dx([85e8,4e8,0],[0,0,5400])),document.getElementById("app").appendChild(this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.sceneMgr.camera.aspect=window.innerWidth/window.innerHeight,this.sceneMgr.camera.updateProjectionMatrix()}),this.achievements.onUnlock(o=>Be.show(`Achievement: ${o}`)),this.preloadModels()}async preloadModels(){const{loadGLTF:t}=await oh(async()=>{const{loadGLTF:n}=await Promise.resolve().then(()=>su);return{loadGLTF:n}},void 0),e=["/models/agena.glb","/models/saturn_v.glb","/models/apollo_soyuz.glb","/models/ares_1.glb","/models/apollo_lunar_module.glb","/models/atlas_6.glb","/models/atlas_9.glb","/models/crawler.glb"];await Promise.allSettled(e.map(n=>t(n,1))),console.log("GLTF models preloaded:",e.length)}start(){this.showMainMenu(),this.loop()}showMainMenu(){this.unmountCurrent(),this.mainMenu=new E_(()=>this.showFlight(),()=>this.showVab(),()=>this.showSettings()),this.mainMenu.mount()}showSettings(){const t=new xx(vx(),()=>t.unmount());t.mount()}showVab(){this.unmountCurrent(),this.vab=new Lv(t=>{const e=new ih(t);this.showFlight(e)}),this.vab.mount(),this.sceneMgr.scene.add(this.vab.scene)}async showFlight(t){this.unmountCurrent();const e=t?.assembly??new io;if(!t){const i=Ft;e.addRoot({part:Yr("capsule_mk1"),position:[0,1.6*i,0],rotation:0,children:[]}),e.addRoot({part:Yr("tank_s_lfo"),position:[0,.8*i,0],rotation:0,children:[]}),e.addRoot({part:Yr("engine_ant"),position:[0,0,0],rotation:0,children:[]})}const n=new ih(e);this.flight=new Vv(this.renderer,this.sceneMgr,this.system,n,this.achievements),this.flight.onCrashAction=i=>{i==="menu"?this.showMainMenu():this.showFlight(t)}}unmountCurrent(){this.mainMenu?.unmount(),this.mainMenu=void 0,this.vab&&(this.vab.unmount(),this.sceneMgr.scene.remove(this.vab.scene),this.vab=void 0),this.flight?.dispose(),this.flight=void 0}loop(){const t=.016666666666666666;this.sceneMgr.update(t),this.flight?.update(t),this.vab?this.renderer.three.render(this.vab.scene,this.vab.camera):this.renderer.three.render(this.sceneMgr.scene,this.sceneMgr.camera),requestAnimationFrame(()=>this.loop())}}try{new Ax().start()}catch(r){console.error("Failed to start StarWeld:",r),document.body.innerHTML=`<div style="color:white;padding:32px;font-family:monospace;">
      <h1>StarWeld failed to start</h1>
      <pre>${String(r)}</pre>
    </div>`}
//# sourceMappingURL=index-ufY5TqYh.js.map
