(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const $a="187",rs={ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dd=0,Nl=1,Id=2,Ur=1,hh=2,Ns=3,ui=0,Ze=1,ae=2,os=0,Fs=1,Gs=2,Ul=3,Ol=4,Nd=5,ns=100,Ud=101,Od=102,Fd=103,Bd=104,zd=200,kd=201,Gd=202,Hd=203,dh=204,uh=205,Vd=206,Wd=207,Xd=208,Yd=209,qd=210,Zd=211,$d=212,Kd=213,Jd=214,jo=0,ta=1,ea=2,Hs=3,na=4,ia=5,sa=6,ra=7,fh=0,Qd=1,jd=2,Zn=0,ph=1,mh=2,gh=3,Ka=4,_h=5,xh=6,vh=7,Mh=300,cs=301,Vs=302,po=303,mo=304,Wr=1e3,qn=1001,oa=1002,De=1003,tu=1004,nr=1005,rn=1006,go=1007,hi=1008,ln=1009,Sh=1010,yh=1011,Ws=1012,Ja=1013,On=1014,En=1015,Fn=1016,Qa=1017,ja=1018,hs=1020,bh=35902,wh=35899,Eh=1021,Th=1022,Tn=1023,fi=1026,di=1027,tl=1028,el=1029,Li=1030,nl=1031,il=1033,Or=33776,Fr=33777,Br=33778,zr=33779,aa=35840,la=35841,ca=35842,ha=35843,da=36196,ua=37492,fa=37496,pa=37488,ma=37489,Xr=37490,ga=37491,_a=37808,xa=37809,va=37810,Ma=37811,Sa=37812,ya=37813,ba=37814,wa=37815,Ea=37816,Ta=37817,Aa=37818,Ra=37819,Ca=37820,Pa=37821,La=36492,Da=36494,Ia=36495,Na=36283,Ua=36284,Yr=36285,Oa=36286,eu=3200,Fa=0,nu=1,li="",nn="srgb",qr="srgb-linear",Zr="linear",se="srgb",_o=7680,iu=519,su=512,ru=513,ou=514,Ah=515,au=516,lu=517,Rh=518,Ch=519,Ph=35044,Fl=35048,Bl="300 es",An=2e3,Xs=2001;function cu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hu(){const i=$r("canvas");return i.style.display="block",i}const zl={};function Kr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Lh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=Lh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=Lh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function kr(...i){const t=i.join(" ");t in zl||(zl[t]=!0,Ut(...i))}function du(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const uu={[jo]:jo,[ea]:sa,[na]:na,[Hs]:ia,[ta]:ta,[sa]:ea,[ra]:ra,[ia]:Hs};class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gr=Math.PI/180,Ba=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function fu(i,t){return(i%t+t)%t}function xo(i,t,e){return(1-e)*i+e*t}function pu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function io(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Dh(i,t){if(t.constructor===Float32Array)return i;const e=io(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Ih(i,t){if(t.constructor===Float32Array)return i;const e=io(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const mu={DEG2RAD:Gr};class ct{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*x;p<0&&(u=-u,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){const M=Math.acos(p),w=Math.sin(M);m=Math.sin(m*M)/w,a=Math.sin(a*M)/w,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+x*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+x*a;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vo.copy(this).projectOnVector(t),this.sub(vo)}reflect(t){return this.sub(vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new C,kl=new pi;class zt{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],M=s[1],w=s[4],y=s[7],A=s[2],E=s[5],_=s[8];return r[0]=o*x+a*M+l*A,r[3]=o*p+a*w+l*E,r[6]=o*m+a*y+l*_,r[1]=c*x+h*M+d*A,r[4]=c*p+h*w+d*E,r[7]=c*m+h*y+d*_,r[2]=u*x+f*M+g*A,r[5]=u*p+f*w+g*E,r[8]=u*m+f*y+g*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mo.makeScale(t,e)),this}rotate(t){return kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mo.makeRotation(-t)),this}translate(t,e){return kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new zt,Gl=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gu(){const i={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===se&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?Zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qr]:{primaries:t,whitePoint:n,transfer:Zr,toXYZ:Gl,fromXYZ:Hl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:se,toXYZ:Gl,fromXYZ:Hl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const Zt=gu();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class _u{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=$r("canvas")),Oi.width=t.width,Oi.height=t.height;const s=Oi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$r("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xu=0;class sl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(So(s[o].image)):r.push(So(s[o]))}else r=So(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function So(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_u.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let vu=0;const yo=new C;class $e extends gi{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=qn,s=qn,r=rn,o=hi,a=Tn,l=ln,c=$e.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=_i(),this.name="",this.source=new sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(yo).x}get height(){return this.source.getSize(yo).y}get depth(){return this.source.getSize(yo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wr:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wr:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Mh;$e.DEFAULT_ANISOTROPY=1;class ve{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(f+1)/2,A=(m+1)/2,E=(h+u)/4,_=(d+x)/4,b=(g+p)/4;return w>y&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=_/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=b/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mu extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new $e({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new sl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Mu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nh extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Su extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class jt{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,x,p)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yu,t,bu)}lookAt(t,e,n){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ti.crossVectors(n,on),ti.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ti.crossVectors(n,on)),ti.normalize(),ir.crossVectors(on,ti),s[0]=ti.x,s[4]=ir.x,s[8]=on.x,s[1]=ti.y,s[5]=ir.y,s[9]=on.y,s[2]=ti.z,s[6]=ir.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],M=n[3],w=n[7],y=n[11],A=n[15],E=s[0],_=s[4],b=s[8],U=s[12],R=s[1],D=s[5],N=s[9],F=s[13],P=s[2],H=s[6],q=s[10],z=s[14],nt=s[3],X=s[7],J=s[11],et=s[15];return r[0]=o*E+a*R+l*P+c*nt,r[4]=o*_+a*D+l*H+c*X,r[8]=o*b+a*N+l*q+c*J,r[12]=o*U+a*F+l*z+c*et,r[1]=h*E+d*R+u*P+f*nt,r[5]=h*_+d*D+u*H+f*X,r[9]=h*b+d*N+u*q+f*J,r[13]=h*U+d*F+u*z+f*et,r[2]=g*E+x*R+p*P+m*nt,r[6]=g*_+x*D+p*H+m*X,r[10]=g*b+x*N+p*q+m*J,r[14]=g*U+x*F+p*z+m*et,r[3]=M*E+w*R+y*P+A*nt,r[7]=M*_+w*D+y*H+A*X,r[11]=M*b+w*N+y*q+A*J,r[15]=M*U+w*F+y*z+A*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15],M=l*f-c*u,w=a*f-c*d,y=a*u-l*d,A=o*f-c*h,E=o*u-l*h,_=o*d-a*h;return e*(x*M-p*w+m*y)-n*(g*M-p*A+m*E)+s*(g*w-x*A+m*_)-r*(g*y-x*E+p*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],M=e*a-n*o,w=e*l-s*o,y=e*c-r*o,A=n*l-s*a,E=n*c-r*a,_=s*c-r*l,b=h*x-d*g,U=h*p-u*g,R=h*m-f*g,D=d*p-u*x,N=d*m-f*x,F=u*m-f*p,P=M*F-w*N+y*D+A*R-E*U+_*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/P;return t[0]=(a*F-l*N+c*D)*H,t[1]=(s*N-n*F-r*D)*H,t[2]=(x*_-p*E+m*A)*H,t[3]=(u*E-d*_-f*A)*H,t[4]=(l*R-o*F-c*U)*H,t[5]=(e*F-s*R+r*U)*H,t[6]=(p*y-g*_-m*w)*H,t[7]=(h*_-u*y+f*w)*H,t[8]=(o*N-a*R+c*b)*H,t[9]=(n*R-e*N-r*b)*H,t[10]=(g*E-x*y+m*M)*H,t[11]=(d*y-h*E-f*M)*H,t[12]=(a*U-o*D-l*b)*H,t[13]=(e*D-n*U+s*b)*H,t[14]=(x*w-g*A-p*M)*H,t[15]=(h*A-d*w+u*M)*H,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,x=o*h,p=o*d,m=a*d,M=l*c,w=l*h,y=l*d,A=n.x,E=n.y,_=n.z;return s[0]=(1-(x+m))*A,s[1]=(f+y)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+m))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+w)*_,s[9]=(p-M)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Fi.set(s[0],s[1],s[2]).length();const a=Fi.set(s[4],s[5],s[6]).length(),l=Fi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yn.copy(this);const c=1/o,h=1/a,d=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,e.setFromRotationMatrix(yn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=An,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===An)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Xs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=An,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===An)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Xs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fi=new C,yn=new jt,yu=new C(0,0,0),bu=new C(1,1,1),ti=new C,ir=new C,on=new C,Vl=new jt,Wl=new pi;class Di{constructor(t=0,e=0,n=0,s=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class Uh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wu=0;const Xl=new C,Bi=new pi,kn=new jt,sr=new C,_s=new C,Eu=new C,Tu=new pi,Yl=new C(1,0,0),ql=new C(0,1,0),Zl=new C(0,0,1),$l={type:"added"},Au={type:"removed"},zi={type:"childadded",child:null},bo={type:"childremoved",child:null};class Se extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new C,e=new Di,n=new pi,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new zt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(Yl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Zl,t)}translateOnAxis(t,e){return Xl.copy(t).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sr.copy(t):sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(_s,sr,this.up):kn.lookAt(sr,_s,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(kn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),zi.child=t,this.dispatchEvent(zi),zi.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Au),bo.child=t,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Se.DEFAULT_UP=new C(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Me extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ru={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ru)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},rr={h:0,s:0,l:0};function Eo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=fu(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Eo(o,r,t+1/3),this.g=Eo(o,r,t),this.b=Eo(o,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Zt.workingToColorSpace(Ye.copy(this),t),Math.round(Vt(Ye.r*255,0,255))*65536+Math.round(Vt(Ye.g*255,0,255))*256+Math.round(Vt(Ye.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=nn){Zt.workingToColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(rr);const n=xo(ei.h,rr.h,e),s=xo(ei.s,rr.s,e),r=xo(ei.l,rr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Ot;Ot.NAMES=Oh;class rl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new rl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cu extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const bn=new C,Gn=new C,To=new C,Hn=new C,ki=new C,Gi=new C,Kl=new C,Ao=new C,Ro=new C,Co=new C,Po=new ve,Lo=new ve,Do=new ve;class vn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),Gn.subVectors(n,e),To.subVectors(t,e);const o=bn.dot(bn),a=bn.dot(Gn),l=bn.dot(To),c=Gn.dot(Gn),h=Gn.dot(To),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Po.setScalar(0),Lo.setScalar(0),Do.setScalar(0),Po.fromBufferAttribute(t,e),Lo.fromBufferAttribute(t,n),Do.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Po,r.x),o.addScaledVector(Lo,r.y),o.addScaledVector(Do,r.z),o}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),Gn.subVectors(t,e),bn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),bn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ki.subVectors(s,n),Gi.subVectors(r,n),Ao.subVectors(t,n);const l=ki.dot(Ao),c=Gi.dot(Ao);if(l<=0&&c<=0)return e.copy(n);Ro.subVectors(t,s);const h=ki.dot(Ro),d=Gi.dot(Ro);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(ki,o);Co.subVectors(t,r);const f=ki.dot(Co),g=Gi.dot(Co);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Gi,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Kl.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Kl,a);const m=1/(p+x+u);return o=x*m,a=u*m,e.copy(n).addScaledVector(ki,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Jn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),ar.subVectors(this.max,xs),Hi.subVectors(t.a,xs),Vi.subVectors(t.b,xs),Wi.subVectors(t.c,xs),ni.subVectors(Vi,Hi),ii.subVectors(Wi,Vi),yi.subVectors(Hi,Wi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-yi.z,yi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,yi.z,0,-yi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-yi.y,yi.x,0];return!Io(e,Hi,Vi,Wi,ar)||(e=[1,0,0,0,1,0,0,0,1],!Io(e,Hi,Vi,Wi,ar))?!1:(lr.crossVectors(ni,ii),e=[lr.x,lr.y,lr.z],Io(e,Hi,Vi,Wi,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vn=[new C,new C,new C,new C,new C,new C,new C,new C],wn=new C,or=new Jn,Hi=new C,Vi=new C,Wi=new C,ni=new C,ii=new C,yi=new C,xs=new C,ar=new C,lr=new C,bi=new C;function Io(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bi.fromArray(i,r);const a=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const be=new C,cr=new ct;let Pu=0;class Cn extends gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ph,this.updateRanges=[],this.gpuType=En,this.version=0,this._normalizationScale=t!==void 0?io(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Dh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ih(t,this.array)}}class Fh extends Cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bh extends Cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Lu=new Jn,vs=new C,No=new C;class Ni{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(No)),this.expandByPoint(vs.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Du=0;const pn=new jt,Uo=new Se,Xi=new C,an=new Jn,Ms=new Jn,Be=new C;class Re extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?Bh:Fh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Uo.lookAt(t),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(an.min,Ms.min),an.expandByPoint(Be),Be.addVectors(an.max,Ms.max),an.expandByPoint(Be)):(an.expandByPoint(Ms.min),an.expandByPoint(Ms.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(t,c),Be.add(Xi)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)a[U]=new C,l[U]=new C;const h=new C,d=new C,u=new C,f=new ct,g=new ct,x=new ct,p=new C,m=new C;function M(U,R,D){c[U]=c[R]=c[D]=1,h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,D),f.fromBufferAttribute(r,U),g.fromBufferAttribute(r,R),x.fromBufferAttribute(r,D),d.sub(h),u.sub(h),g.sub(f),x.sub(f);const N=1/(g.x*x.y-x.x*g.y);isFinite(N)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(N),m.copy(u).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(N),a[U].add(p),a[R].add(p),a[D].add(p),l[U].add(m),l[R].add(m),l[D].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let U=0,R=w.length;U<R;++U){const D=w[U],N=D.start,F=D.count;for(let P=N,H=N+F;P<H;P+=3)M(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const y=new C,A=new C,E=new C,_=new C;function b(U){E.fromBufferAttribute(s,U),_.copy(E);const R=a[U];y.copy(R),y.sub(E.multiplyScalar(E.dot(R))).normalize(),A.crossVectors(_,R);const N=A.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,N)}for(let U=0,R=n.count;U<R;++U)c[U]&&b(U);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Cn(u,h,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Iu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ph,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Jl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Jl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Jl(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=_i()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const Je=new C;class Jr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?io(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Dh(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ih(t,this.data.array)}}const Oo=new C,Nu=new C,Uu=new zt;class Yn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Oo.subVectors(n,e).cross(Nu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Oo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Uu.getNormalMatrix(t),s=this.coplanarPoint(Oo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Ou=0;class xi extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Fs,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=uh,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qr extends xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const Ss=new C,qi=new C,Zi=new C,$i=new ct,ys=new ct,zh=new jt,hr=new C,bs=new C,dr=new C,Ql=new ct,Fo=new ct,jl=new ct;class za extends Se{constructor(t=new Qr){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Iu(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new Jr(n,3,0,!1)),Yi.setAttribute("uv",new Jr(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Zi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ur(hr.set(-.5,-.5,0),Zi,o,qi,s,r),ur(bs.set(.5,-.5,0),Zi,o,qi,s,r),ur(dr.set(.5,.5,0),Zi,o,qi,s,r),Ql.set(0,0),Fo.set(1,0),jl.set(1,1);let a=t.ray.intersectTriangle(hr,bs,dr,!1,Ss);if(a===null&&(ur(bs.set(-.5,.5,0),Zi,o,qi,s,r),Fo.set(0,1),a=t.ray.intersectTriangle(hr,dr,bs,!1,Ss),a===null))return;const l=t.ray.origin.distanceTo(Ss);l<t.near||l>t.far||e.push({distance:l,point:Ss.clone(),uv:vn.getInterpolation(Ss,hr,bs,dr,Ql,Fo,jl,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function ur(i,t,e,n,s,r){$i.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ys.x=r*$i.x-s*$i.y,ys.y=s*$i.x+r*$i.y):ys.copy($i),i.copy(t),i.x+=ys.x,i.y+=ys.y,i.applyMatrix4(zh)}const Wn=new C,Bo=new C,fr=new C,pr=new C;class so{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bo.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),pr.copy(this.origin).sub(Bo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=pr.dot(this.direction),l=-pr.dot(fr),c=pr.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Bo).addScaledVector(fr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,p=e.z-o.z,m=n.x-o.x,M=n.y-o.y,w=n.z-o.z,y=Math.abs(l),A=Math.abs(c),E=Math.abs(h);let _,b,U,R,D,N,F,P,H,q,z,nt;if(y>=A&&y>=E?(U=l,N=d,H=g,nt=m,l>=0?(_=c,b=h,R=u,D=f,F=x,P=p,q=M,z=w):(_=h,b=c,R=f,D=u,F=p,P=x,q=w,z=M)):A>=E?(U=c,N=u,H=x,nt=M,c>=0?(_=h,b=l,R=f,D=d,F=p,P=g,q=w,z=m):(_=l,b=h,R=d,D=f,F=g,P=p,q=m,z=w)):(U=h,N=f,H=p,nt=w,h>=0?(_=l,b=c,R=d,D=u,F=g,P=x,q=m,z=M):(_=c,b=l,R=u,D=d,F=x,P=g,q=M,z=m)),U===0)return null;const X=_/U,J=b/U,et=1/U,St=R-X*N,It=D-J*N,B=F-X*H,k=P-J*H,at=q-X*nt,At=z-J*nt,mt=at*k-At*B,Lt=St*At-It*at,ce=B*It-k*St;if(s){if(mt<0||Lt<0||ce<0)return null}else if((mt<0||Lt<0||ce<0)&&(mt>0||Lt>0||ce>0))return null;const Dt=mt+Lt+ce;if(Dt===0)return null;const $t=et*(mt*N+Lt*H+ce*nt);return(Dt>0?$t<0:$t>0)?null:this.at($t/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tc=new jt,wi=new so,mr=new Ni,ec=new C,gr=new C,_r=new C,xr=new C,zo=new C,vr=new C,nc=new C,Mr=new C;class ne extends Se{constructor(t=new Re,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(zo.fromBufferAttribute(d,t),o?vr.addScaledVector(zo,h):vr.addScaledVector(zo.sub(e),h))}e.add(vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(mr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(mr,ec)===null||wi.origin.distanceToSquared(ec)>(t.far-t.near)**2))&&(tc.copy(r).invert(),wi.copy(t.ray).applyMatrix4(tc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,A=w;y<A;y+=3){const E=a.getX(y),_=a.getX(y+1),b=a.getX(y+2);s=Sr(this,m,t,n,c,h,d,E,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const M=a.getX(p),w=a.getX(p+1),y=a.getX(p+2);s=Sr(this,o,t,n,c,h,d,M,w,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,A=w;y<A;y+=3){const E=y,_=y+1,b=y+2;s=Sr(this,m,t,n,c,h,d,E,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const M=p,w=p+1,y=p+2;s=Sr(this,o,t,n,c,h,d,M,w,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Fu(i,t,e,n,s,r,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ui,a),l===null)return null;Mr.copy(a),Mr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Mr);return c<e.near||c>e.far?null:{distance:c,point:Mr.clone(),object:i}}function Sr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,gr),i.getVertexPosition(l,_r),i.getVertexPosition(c,xr);const h=Fu(i,t,e,n,gr,_r,xr,nc);if(h){const d=new C;vn.getBarycoord(nc,gr,_r,xr,d),s&&(h.uv=vn.getInterpolatedAttribute(s,a,l,c,d,new ct)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,l,c,d,new ct)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new C,materialIndex:0};vn.getNormal(gr,_r,xr,u.normal),h.face=u,h.barycoord=d}return h}class ol extends $e{constructor(t=null,e=1,n=1,s,r,o,a,l,c=De,h=De,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic extends Cn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ki=new jt,sc=new jt,yr=[],rc=new Jn,Bu=new jt,ws=new ne,Es=new Ni;class zu extends ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),rc.copy(t.boundingBox).applyMatrix4(Ki),this.boundingBox.union(rc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),Es.copy(t.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ki),sc.multiplyMatrices(n,Ki),ws.matrixWorld=sc,ws.raycast(t,yr);for(let o=0,a=yr.length;o<a;o++){const l=yr[o];l.instanceId=r,l.object=this,e.push(l)}yr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ol(new Float32Array(s*this.count),s,this.count,tl,En));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ei=new Ni,ku=new ct(.5,.5),br=new C;class Ys{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],M=r[12],w=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,f-h,m-g,A-M).normalize(),s[1].setComponents(c+o,f+h,m+g,A+M).normalize(),s[2].setComponents(c+a,f+d,m+x,A+w).normalize(),s[3].setComponents(c-a,f-d,m-x,A-w).normalize(),n)s[4].setComponents(l,u,p,y).normalize(),s[5].setComponents(c-l,f-u,m-p,A-y).normalize();else if(s[4].setComponents(c-l,f-u,m-p,A-y).normalize(),e===An)s[5].setComponents(c+l,f+u,m+p,A+y).normalize();else if(e===Xs)s[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);const e=ku.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(br.x=s.normal.x>0?t.max.x:t.min.x,br.y=s.normal.y>0?t.max.y:t.min.y,br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const oc=new jt;class al{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];oc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ys),n[s].setFromProjectionMatrix(oc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ys),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new al().copy(this)}}class kh extends xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jr=new C,to=new C,ac=new jt,Ts=new so,wr=new Ni,ko=new C,lc=new C;class Gu extends Se{constructor(t=new Re,e=new kh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)jr.fromBufferAttribute(e,s-1),to.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=jr.distanceTo(to);t.setAttribute("lineDistance",new Jt(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(s),wr.radius+=r,t.ray.intersectsSphere(wr)===!1)return;ac.copy(s).invert(),Ts.copy(t.ray).applyMatrix4(ac);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){const m=h.getX(x),M=h.getX(x+1),w=Er(this,t,Ts,l,m,M,x);w&&e.push(w)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(f),m=Er(this,t,Ts,l,x,p,g-1);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){const m=Er(this,t,Ts,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){const x=Er(this,t,Ts,l,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Er(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(jr.fromBufferAttribute(a,s),to.fromBufferAttribute(a,r),e.distanceSqToSegment(jr,to,ko,lc)>n)return;ko.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ko);if(!(c<t.near||c>t.far))return{distance:c,point:lc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const cc=new C,hc=new C;class Hu extends Gu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)cc.fromBufferAttribute(e,s),hc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cc.distanceTo(hc);t.setAttribute("lineDistance",new Jt(n,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ll extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dc=new jt,ka=new so,Tr=new Ni,Ar=new C;class Gh extends Se{constructor(t=new Re,e=new ll){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=r,t.ray.intersectsSphere(Tr)===!1)return;dc.copy(s).invert(),ka.copy(t.ray).applyMatrix4(dc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,x=f;g<x;g++){const p=c.getX(g);Ar.fromBufferAttribute(d,p),uc(Ar,p,l,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)Ar.fromBufferAttribute(d,g),uc(Ar,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function uc(i,t,e,n,s,r,o){const a=ka.distanceSqToPoint(i);if(a<e){const l=new C;ka.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Hh extends $e{constructor(t=[],e=cs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vu extends $e{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ds extends $e{constructor(t,e,n=On,s,r,o,a=De,l=De,c,h=fi,d=1){if(h!==fi&&h!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Vh extends ds{constructor(t,e=On,n=cs,s,r,o=De,a=De,l,c=fi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Wh extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ui extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function g(x,p,m,M,w,y,A,E,_,b,U){const R=y/_,D=A/b,N=y/2,F=A/2,P=E/2,H=_+1,q=b+1;let z=0,nt=0;const X=new C;for(let J=0;J<q;J++){const et=J*D-F;for(let St=0;St<H;St++){const It=St*R-N;X[x]=It*M,X[p]=et*w,X[m]=P,c.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[m]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(St/_),d.push(1-J/b),z+=1}}for(let J=0;J<b;J++)for(let et=0;et<_;et++){const St=u+et+H*J,It=u+et+H*(J+1),B=u+(et+1)+H*(J+1),k=u+(et+1)+H*J;l.push(St,It,k),l.push(It,B,k),nt+=6}a.addGroup(f,nt,U),f+=nt,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ro extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oo extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const x=[],p=n/2;let m=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function M(){const y=new C,A=new C;let E=0;const _=(e-t)/n;for(let b=0;b<=r;b++){const U=[],R=b/r,D=R*(e-t)+t;for(let N=0;N<=s;N++){const F=N/s,P=F*l+a,H=Math.sin(P),q=Math.cos(P);A.x=D*H,A.y=-R*n+p,A.z=D*q,d.push(A.x,A.y,A.z),y.set(H,_,q).normalize(),u.push(y.x,y.y,y.z),f.push(F,1-R),U.push(g++)}x.push(U)}for(let b=0;b<s;b++)for(let U=0;U<r;U++){const R=x[U][b],D=x[U+1][b],N=x[U+1][b+1],F=x[U][b+1];(t>0||U!==0)&&(h.push(R,D,F),E+=3),(e>0||U!==r-1)&&(h.push(D,N,F),E+=3)}c.addGroup(m,E,0),m+=E}function w(y){const A=g,E=new ct,_=new C;let b=0;const U=y===!0?t:e,R=y===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,p*R,0),u.push(0,R,0),f.push(.5,.5),g++;const D=g;for(let N=0;N<=s;N++){const P=N/s*l+a,H=Math.cos(P),q=Math.sin(P);_.x=U*q,_.y=p*R,_.z=U*H,d.push(_.x,_.y,_.z),u.push(0,R,0),E.x=H*.5+.5,E.y=q*.5*R+.5,f.push(E.x,E.y),g++}for(let N=0;N<s;N++){const F=A+N,P=D+N;y===!0?h.push(P,P+1,F):h.push(P+1,P,F),b+=3}c.addGroup(m,b,y===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cl extends oo{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new cl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new C,s=[],r=[],o=[],a=new C,l=new jt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Vt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Vt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class hl extends Bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Wu extends hl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function dl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const fc=new C,pc=new C,Go=new dl,Ho=new dl,Vo=new dl;class Rn extends Bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(pc.subVectors(s[0],s[1]).add(s[0]),c=pc);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(fc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Go.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,p),Ho.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,p),Vo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Go.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ho.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Vo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Go.calc(l),Ho.calc(l),Vo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Xu(i,t){const e=1-i;return e*e*t}function Yu(i,t){return 2*(1-i)*i*t}function qu(i,t){return i*i*t}function Bs(i,t,e,n){return Xu(i,t)+Yu(i,e)+qu(i,n)}function Zu(i,t){const e=1-i;return e*e*e*t}function $u(i,t){const e=1-i;return 3*e*e*i*t}function Ku(i,t){return 3*(1-i)*i*i*t}function Ju(i,t){return i*i*i*t}function zs(i,t,e,n,s){return Zu(i,t)+$u(i,e)+Ku(i,n)+Ju(i,s)}class Xh extends Bn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qu extends Bn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y),zs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yh extends Bn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ju extends Bn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qh extends Bn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(t,s.x,r.x,o.x),Bs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends Bn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(t,s.x,r.x,o.x),Bs(t,s.y,r.y,o.y),Bs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(mc(a,l.x,c.x,h.x,d.x),mc(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var Ga=Object.freeze({__proto__:null,ArcCurve:Wu,CatmullRomCurve3:Rn,CubicBezierCurve:Xh,CubicBezierCurve3:Qu,EllipseCurve:hl,LineCurve:Yh,LineCurve3:ju,QuadraticBezierCurve:qh,QuadraticBezierCurve3:Zh,SplineCurve:$h});class tf extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ga[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class gc extends tf{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Yh(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new qh(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Xh(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $h(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new hl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Kh extends gc{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new gc().fromJSON(s))}return this}}function ef(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Jh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=af(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){const f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return qs(r,o,e,a,l,c,0),o}function Jh(i,t,e,n,s){let r;if(s===xf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=_c(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=_c(o/n|0,i[o],i[o+1],r);return r&&us(r,r.next)&&($s(r),r=r.next),r}function Ii(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(us(e,e.next)||ge(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&uf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?sf(i,n,s,r):nf(i)){t.push(l.i,i.i,c.i),$s(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=rf(Ii(i),t),qs(i,t,e,n,s,r,2)):o===2&&of(i,t,e,n,s,r):qs(Ii(i),t,e,n,s,r,1);break}}}function nf(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Us(s,a,r,l,o,c,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ge(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),x=Math.max(a,l,c),p=Math.max(h,d,u),m=Ha(f,g,t,e,n),M=Ha(x,p,t,e,n);let w=i.prevZ,y=i.nextZ;for(;w&&w.z>=m&&y&&y.z<=M;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&Us(a,h,l,d,c,u,w.x,w.y)&&ge(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Us(a,h,l,d,c,u,y.x,y.y)&&ge(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&Us(a,h,l,d,c,u,w.x,w.y)&&ge(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Us(a,h,l,d,c,u,y.x,y.y)&&ge(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function rf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!us(n,s)&&jh(n,e,e.next,s)&&Zs(n,s)&&Zs(s,n)&&(t.push(n.i,e.i,s.i),$s(e),$s(e.next),e=i=s),e=e.next}while(e!==i);return Ii(e)}function of(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mf(o,a)){let l=td(o,a);o=Ii(o,o.next),l=Ii(l,l.next),qs(o,t,e,n,s,r,0),qs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function af(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Jh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pf(c))}s.sort(lf);for(let r=0;r<s.length;r++)e=cf(s[r],e);return e}function lf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cf(i,t){const e=hf(i,t);if(!e)return t;const n=td(e,i);return Ii(n,n.next),Ii(e,e.next)}function hf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(us(i,e))return e;do{if(us(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Qh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Zs(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&df(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function df(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function uf(i,t,e,n){let s=i;do s.z===0&&(s.z=Ha(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ff(s)}function ff(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ha(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Us(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Qh(i,t,e,n,s,r,o,a)}function mf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gf(i,t)&&(Zs(i,t)&&Zs(t,i)&&_f(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||us(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function us(i,t){return i.x===t.x&&i.y===t.y}function jh(i,t,e,n){const s=Cr(ge(i,t,e)),r=Cr(ge(i,t,n)),o=Cr(ge(e,n,i)),a=Cr(ge(e,n,t));return!!(s!==r&&o!==a||s===0&&Rr(i,e,t)||r===0&&Rr(i,n,t)||o===0&&Rr(e,i,n)||a===0&&Rr(e,t,n))}function Rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Cr(i){return i>0?1:i<0?-1:0}function gf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&jh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zs(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function _f(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function td(i,t){const e=Va(i.i,i.x,i.y),n=Va(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _c(i,t,e,n){const s=Va(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Va(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class vf{static triangulate(t,e,n=2){return ef(t,e,n)}}class ks{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ks.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];xc(t),vc(n,t);let o=t.length;e.forEach(xc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,vc(n,e[l]);const a=vf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function xc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ul extends Re{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Vt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new C,u=new ct,f=new C,g=new C,x=new C;let p=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let M=0;M<=e;M++){const w=n+M*h*s,y=Math.sin(w),A=Math.cos(w);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*y,d.y=t[E].y,d.z=t[E].x*A,o.push(d.x,d.y,d.z),u.x=M/e,u.y=E/(t.length-1),a.push(u.x,u.y);const _=l[3*E+0]*y,b=l[3*E+1],U=l[3*E+0]*A;c.push(_,b,U)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){const y=w+M*t.length,A=y,E=y+t.length,_=y+t.length+1,b=y+1;r.push(A,E,b),r.push(_,b,E)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.points,t.segments,t.phiStart,t.phiLength)}}class Kn extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const M=m*u-o;for(let w=0;w<c;w++){const y=w*d-r;g.push(y,-M,0),x.push(0,0,1),p.push(w/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const w=M+c*m,y=M+c*(m+1),A=M+1+c*(m+1),E=M+1+c*m;f.push(w,y,E),f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.widthSegments,t.heightSegments)}}class fl extends Re{constructor(t=new Kh([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(o,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;ks.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const M=g[p];ks.isClockWise(M)===!0&&(g[p]=M.reverse())}const x=ks.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const M=g[p];f=f.concat(M)}for(let p=0,m=f.length;p<m;p++){const M=f[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,m=x.length;p<m;p++){const M=x[p],w=M[0]+d,y=M[1]+d,A=M[2]+d;n.push(w,y,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Mf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new fl(n,t.curveSegments)}}function Mf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ao extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new C,u=new C,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const M=[],w=m/n,y=o+w*a,A=t*Math.cos(y),E=Math.sqrt(t*t-A*A);let _=0;m===0&&o===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){const U=b/e,R=s+U*r;d.x=-E*Math.cos(R),d.y=A,d.z=E*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(U+_,1-w),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const w=h[m][M+1],y=h[m][M],A=h[m+1][M],E=h[m+1][M+1];(m!==0||o>0)&&f.push(w,y,E),(m!==n-1||l<Math.PI)&&f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pl extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new C,f=new C,g=new C;for(let x=0;x<=n;x++){const p=o+x/n*a;for(let m=0;m<=s;m++){const M=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){const m=(s+1)*x+p-1,M=(s+1)*(x-1)+p-1,w=(s+1)*(x-1)+p,y=(s+1)*x+p;l.push(m,M,y),l.push(M,w,y)}this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Mn extends Re{constructor(t=new Zh(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new ct;let h=new C;const d=[],u=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function x(){for(let w=0;w<e;w++)p(w);p(r===!1?e:0),M(),m()}function p(w){h=t.getPointAt(w/e,h);const y=o.normals[w],A=o.binormals[w];for(let E=0;E<=s;E++){const _=E/s*Math.PI*2,b=Math.sin(_),U=-Math.cos(_);l.x=U*y.x+b*A.x,l.y=U*y.y+b*A.y,l.z=U*y.z+b*A.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let w=1;w<=e;w++)for(let y=1;y<=s;y++){const A=(s+1)*(w-1)+(y-1),E=(s+1)*w+(y-1),_=(s+1)*w+y,b=(s+1)*(w-1)+y;g.push(A,E,b),g.push(E,_,b)}}function M(){for(let w=0;w<=e;w++)for(let y=0;y<=s;y++)c.x=w/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Mn(new Ga[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function fs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Mc(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Mc(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=fs(i[e]);for(const s in n)t[s]=n[s]}return t}function Mc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ed(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const yf={clone:fs,merge:Qe};var bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=Sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new jt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ef extends mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tf extends xi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Af extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rf extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lo extends Se{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Cf extends lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Wo=new jt,Sc=new C,yc=new C;class nd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Xs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pr=new C,Lr=new pi,Ln=new C;class id extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pr,Lr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Pr,Lr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new C,bc=new ct,wc=new ct;class _n extends id{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ba*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,bc,wc),e.subVectors(wc,bc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Pf extends nd{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}}class Js extends lo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Pf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class sd extends id{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Lf extends nd{constructor(){super(new sd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Df extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Lf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class If extends lo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ji=-90,Qi=1;class Wa extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const r=new _n(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const o=new _n(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const a=new _n(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const l=new _n(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new _n(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nf extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Ec{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Uf extends gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Tc(i,t,e,n){const s=Of(n);switch(e){case Eh:return i*t;case tl:return i*t/s.components*s.byteLength;case el:return i*t/s.components*s.byteLength;case Li:return i*t*2/s.components*s.byteLength;case nl:return i*t*2/s.components*s.byteLength;case Th:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case il:return i*t*4/s.components*s.byteLength;case Or:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case la:case ha:return Math.max(i,16)*Math.max(t,8)/4;case aa:case ca:return Math.max(i,8)*Math.max(t,8)/2;case da:case ua:case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fa:case Xr:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case La:case Da:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Na:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yr:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Of(i){switch(i){case ln:case Sh:return{byteLength:1,components:1};case Ws:case yh:case Fn:return{byteLength:2,components:1};case Qa:case ja:return{byteLength:2,components:4};case On:case Ja:case En:return{byteLength:4,components:1};case bh:case wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);function rd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ff(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
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
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jf=`#ifdef USE_IRIDESCENCE
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
#endif`,Qf=`#ifdef USE_BUMPMAP
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,lp=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Cp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Up=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Op=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
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
#endif`,a0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,y0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,E0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X0=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Q0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,j0=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,tm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,em=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,nm=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,im=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rm=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,om=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,am=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,lm=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,cm=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,hm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,dm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,um=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,pm=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,gm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ht={alphahash_fragment:Bf,alphahash_pars_fragment:zf,alphamap_fragment:kf,alphamap_pars_fragment:Gf,alphatest_fragment:Hf,alphatest_pars_fragment:Vf,aomap_fragment:Wf,aomap_pars_fragment:Xf,batching_pars_vertex:Yf,batching_vertex:qf,begin_vertex:Zf,beginnormal_vertex:$f,bsdfs:Kf,iridescence_fragment:Jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:jf,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:ep,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:sp,color_pars_vertex:rp,color_vertex:op,common:ap,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:hp,emissivemap_fragment:dp,emissivemap_pars_fragment:up,colorspace_fragment:fp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:_p,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Cp,envmap_vertex:vp,fog_vertex:Mp,fog_pars_vertex:Sp,fog_fragment:yp,fog_pars_fragment:bp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Ep,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:Ap,lights_pars_begin:Rp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Lp,lights_phong_fragment:Dp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Np,lights_physical_pars_fragment:Up,lights_fragment_begin:Op,lights_fragment_maps:Fp,lights_fragment_end:Bp,lightprobes_pars_fragment:zp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:Vp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:Yp,map_particle_pars_fragment:qp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Kp,morphcolor_vertex:Jp,morphnormal_vertex:Qp,morphtarget_pars_vertex:jp,morphtarget_vertex:t0,normal_fragment_begin:e0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:s0,normal_vertex:r0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:a0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:h0,opaque_fragment:d0,packing:u0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:v0,shadowmap_pars_vertex:M0,shadowmap_vertex:S0,shadowmask_pars_fragment:y0,skinbase_vertex:b0,skinning_pars_vertex:w0,skinning_vertex:E0,skinnormal_vertex:T0,specularmap_fragment:A0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:P0,transmission_fragment:L0,transmission_pars_fragment:D0,uv_pars_fragment:I0,uv_pars_vertex:N0,uv_vertex:U0,worldpos_vertex:O0,background_vert:F0,background_frag:B0,backgroundCube_vert:z0,backgroundCube_frag:k0,cube_vert:G0,cube_frag:H0,depth_vert:V0,depth_frag:W0,distance_vert:X0,distance_frag:Y0,equirect_vert:q0,equirect_frag:Z0,linedashed_vert:$0,linedashed_frag:K0,meshbasic_vert:J0,meshbasic_frag:Q0,meshlambert_vert:j0,meshlambert_frag:tm,meshmatcap_vert:em,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:sm,meshphong_vert:rm,meshphong_frag:om,meshphysical_vert:am,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:hm,points_vert:dm,points_frag:um,shadow_vert:fm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},Mt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},In={basic:{uniforms:Qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Qe([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Qe([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Qe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Qe([Mt.points,Mt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Qe([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Qe([Mt.common,Mt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Qe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Qe([Mt.sprite,Mt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Qe([Mt.common,Mt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Qe([Mt.lights,Mt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};In.physical={uniforms:Qe([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Dr={r:0,b:0,g:0},_m=new jt,od=new zt;od.set(-1,0,0,0,1,0,0,0,1);function xm(i,t,e,n,s,r){const o=new Ot(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const y=M.backgroundBlurriness>0;w=t.get(w,y)}return w}function g(M){let w=!1;const y=f(M);y===null?p(o,a):y&&y.isColor&&(p(y,1),w=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,w){const y=f(w);y&&y.isCubeTexture?(c===void 0&&(c=new ne(new Ui(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:fs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(od),c.material.toneMapped=Zt.getTransfer(y.colorSpace)!==se,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ne(new Kn(2,2),new mi({name:"BackgroundMaterial",uniforms:fs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(y.colorSpace)!==se,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,w){M.getRGB(Dr,ed(i)),e.buffers.color.setClear(Dr.r,Dr.g,Dr.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:g,addToRenderList:x,dispose:m}}function vm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(D,N,F,P,H){let q=!1;const z=d(D,P,F,N);r!==z&&(r=z,c(r.object)),q=f(D,P,F,H),q&&g(D,P,F,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(D,N,F,P),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,N,F,P){const H=P.wireframe===!0;let q=n[N.id];q===void 0&&(q={},n[N.id]=q);const z=D.isInstancedMesh===!0?D.id:0;let nt=q[z];nt===void 0&&(nt={},q[z]=nt);let X=nt[F.id];X===void 0&&(X={},nt[F.id]=X);let J=X[H];return J===void 0&&(J=u(l()),X[H]=J),J}function u(D){const N=[],F=[],P=[];for(let H=0;H<e;H++)N[H]=0,F[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,N,F,P){const H=r.attributes,q=N.attributes;let z=0;const nt=F.getAttributes();for(const X in nt)if(nt[X].location>=0){const et=H[X];let St=q[X];if(St===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),et===void 0||et.attribute!==St||St&&et.data!==St.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function g(D,N,F,P){const H={},q=N.attributes;let z=0;const nt=F.getAttributes();for(const X in nt)if(nt[X].location>=0){let et=q[X];et===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(et=D.instanceColor));const St={};St.attribute=et,et&&et.data&&(St.data=et.data),H[X]=St,z++}r.attributes=H,r.attributesNum=z,r.index=P}function x(){const D=r.newAttributes;for(let N=0,F=D.length;N<F;N++)D[N]=0}function p(D){m(D,0)}function m(D,N){const F=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;F[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),H[D]!==N&&(i.vertexAttribDivisor(D,N),H[D]=N)}function M(){const D=r.newAttributes,N=r.enabledAttributes;for(let F=0,P=N.length;F<P;F++)N[F]!==D[F]&&(i.disableVertexAttribArray(F),N[F]=0)}function w(D,N,F,P,H,q,z){z===!0?i.vertexAttribIPointer(D,N,F,H,q):i.vertexAttribPointer(D,N,F,P,H,q)}function y(D,N,F,P){x();const H=P.attributes,q=F.getAttributes(),z=N.defaultAttributeValues;for(const nt in q){const X=q[nt];if(X.location>=0){let J=H[nt];if(J===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){const et=J.normalized,St=J.itemSize,It=t.get(J);if(It===void 0)continue;const B=It.buffer,k=It.type,at=It.bytesPerElement,At=k===i.INT||k===i.UNSIGNED_INT||J.gpuType===Ja;if(J.isInterleavedBufferAttribute){const mt=J.data,Lt=mt.isInterleavedBuffer===!0?mt.stride:mt.itemSize,ce=J.offset;if(mt.isInstancedInterleavedBuffer||mt.isInstancedBufferAttribute){for(let Dt=0;Dt<X.locationSize;Dt++)m(X.location+Dt,mt.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Dt=0;Dt<X.locationSize;Dt++)p(X.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,B);for(let Dt=0;Dt<X.locationSize;Dt++)w(X.location+Dt,St/X.locationSize,k,et,Lt*at,(ce+St/X.locationSize*Dt)*at,At)}else{if(J.isInstancedBufferAttribute){for(let mt=0;mt<X.locationSize;mt++)m(X.location+mt,J.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let mt=0;mt<X.locationSize;mt++)p(X.location+mt);i.bindBuffer(i.ARRAY_BUFFER,B);for(let mt=0;mt<X.locationSize;mt++)w(X.location+mt,St/X.locationSize,k,et,St*at,St/X.locationSize*mt*at,At)}}else if(z!==void 0){const et=z[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(X.location,et);break;case 3:i.vertexAttrib3fv(X.location,et);break;case 4:i.vertexAttrib4fv(X.location,et);break;default:i.vertexAttrib1fv(X.location,et)}}}}M()}function A(){U();for(const D in n){const N=n[D];for(const F in N){const P=N[F];for(const H in P){const q=P[H];for(const z in q)h(q[z].object),delete q[z];delete P[H]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const N=n[D.id];for(const F in N){const P=N[F];for(const H in P){const q=P[H];for(const z in q)h(q[z].object),delete q[z];delete P[H]}}delete n[D.id]}function _(D){for(const N in n){const F=n[N];for(const P in F){const H=F[P];if(H[D.id]===void 0)continue;const q=H[D.id];for(const z in q)h(q[z].object),delete q[z];delete H[D.id]}}}function b(D){for(const N in n){const F=n[N],P=D.isInstancedMesh===!0?D.id:0,H=F[P];if(H!==void 0){for(const q in H){const z=H[q];for(const nt in z)h(z[nt].object),delete z[nt];delete H[q]}delete F[P],Object.keys(F).length===0&&delete n[N]}}}function U(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function Mm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Sm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Tn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){const b=_===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==ln&&_!==En&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ut("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:A,samples:E}}function ym(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Yn,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,w=M*4;let y=m.clippingState||null;l.value=y,y=h(g,u,w,f);for(let A=0;A!==w;++A)y[A]=e[A];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=f+x*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,y=f;w!==x;++w,y+=4)o.copy(d[w]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}class ml extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ui(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:os});r.uniforms.tEquirect.value=e;const o=new ne(s,r),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=rn),new Wa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ac=256,bm=3,wm=20,ad=256,ld=16,Em=3,Tm=new C,Am=new Ot;class eo{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wa(1,10,null),this._boxMesh=new ne(new Ui(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Tm}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Am));const p=new Wa(n,s,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ac,pu(t))}_fromTexture(t,e){t.mapping===cs||t.mapping===Vs?this._setSize(t.image.length===0?Ac:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Rc(t,!1,!1),n=Math.log2(t)-bm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Rc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===cs||t.mapping===Vs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Rm(),this._integrationMaterial=Cm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ld);for(let o=0;o<=n;o++){const a=eo.lodToRoughness(o,n);if(o>n-Em)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(ad*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Pm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Rc(i,t,e){return new ml(i,{minFilter:hi,generateMipmaps:t,type:Fn,colorSpace:qr,depthBuffer:e})}function Qs(i,t,e){return new mi({name:i,uniforms:t,vertexShader:Ht.cube_vert,fragmentShader:e,side:Ze,blending:os,depthTest:!1,depthWrite:!1})}function Rm(){return Qs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ad}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Cm(){return Qs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ld}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Pm(){return Qs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${wm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Cc(){return Qs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Pc(){return Qs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Lm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===po||f===mo)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new ml(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,g=f===po||f===mo,x=f===cs||f===Vs;if(g||x){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new eo(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const M=u.image;return g&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new eo(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===po?u.mapping=cs:f===mo&&(u.mapping=Vs),u}function l(u){let f=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Dm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&kr("WebGLRenderer: "+n+" extension not supported."),s}}}function Im(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(const p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);const x=r.get(g);x&&(t.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(g){const x=g.attributes;for(const p in x)t.update(x[p],i.ARRAY_BUFFER)}function d(g){const x=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const M=x!==null?x.array.length:p.array.length/3-1,w=p.count>=65535?Bh:Fh,y=new w(Math.ceil(M/3)*6,1),A=y.array;if(x!==null){const _=x.array;m=x.version;for(let b=0,U=0;b<M;b+=3){const R=_[b+0],D=_[b+1],N=_[b+2];A[U++]=R,A[U++]=D,A[U++]=D,A[U++]=N,A[U++]=N,A[U++]=R}}else{m=p.version;for(let _=0,b=0;_<M;_+=3){const U=_+0,R=_+1,D=_+2;A[b++]=U,A[b++]=R,A[b++]=R,A[b++]=D,A[b++]=D,A[b++]=U}}y.version=m;const E=r.get(g);E&&t.remove(E),r.set(g,y)}function u(g){const x=r.get(g);if(x){const p=g.index;p!==null&&x.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(const g in s){const x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Nm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Um(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Om(i,t,e){const n=new WeakMap,s=new ve;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let R=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",R)};var f=R;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let A=a.attributes.position.count*y,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const _=new Float32Array(A*E*4*d),b=new Nh(_,A,E,d);b.type=En,b.needsUpdate=!0;const U=y*4;for(let D=0;D<d;D++){const N=m[D],F=M[D],P=w[D],H=A*E*4*D;for(let q=0;q<N.count;q++){const z=q*U;g===!0&&(s.fromBufferAttribute(N,q),_[H+z+0]=s.x,_[H+z+1]=s.y,_[H+z+2]=s.z,_[H+z+3]=0),x===!0&&(s.fromBufferAttribute(F,q),_[H+z+4]=s.x,_[H+z+5]=s.y,_[H+z+6]=s.z,_[H+z+7]=0),p===!0&&(s.fromBufferAttribute(P,q),_[H+z+8]=s.x,_[H+z+9]=s.y,_[H+z+10]=s.z,_[H+z+11]=P.itemSize===4?s.w:1)}}u={count:d,texture:b,size:new ct(A,E)},n.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Fm(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Bm={[ph]:"LINEAR_TONE_MAPPING",[mh]:"REINHARD_TONE_MAPPING",[gh]:"CINEON_TONE_MAPPING",[Ka]:"ACES_FILMIC_TONE_MAPPING",[xh]:"AGX_TONE_MAPPING",[vh]:"NEUTRAL_TONE_MAPPING",[_h]:"CUSTOM_TONE_MAPPING"};function zm(i,t,e,n,s,r){const o=new Un(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Re;h.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const d=new Ef({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ne(h,d),f=new sd(-1,1,1,-1,0,1);let g=null,x=null,p=!1,m,M=null,w=[],y=!1;this.setSize=function(A,E){o.setSize(A,E),a!==null&&a.setSize(A,E),l!==null&&l.setSize(A,E);for(let _=0;_<w.length;_++){const b=w[_];b.setSize&&b.setSize(A,E)}},this.setEffects=function(A){w=A,y=w.length>0&&w[0].isRenderPass===!0;const E=o.width,_=o.height;w.length>0&&a===null&&(a=new Un(E,_,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new Un(E,_,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&w.some(U=>U.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new ds(E,_),r===!0&&(c.format=di,c.type=hs)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let U=0;U<w.length;U++){const R=w[U];R.setSize&&R.setSize(E,_),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,E){if(p||A.toneMapping===Zn&&w.length===0)return!1;if(M=E,E!==null){const _=E.width,b=E.height;(o.width!==_||o.height!==b)&&this.setSize(_,b)}return y===!1&&A.setRenderTarget(o),m=A.toneMapping,A.toneMapping=Zn,!0},this.hasRenderPass=function(){return y},this.end=function(A,E){A.toneMapping=m,p=!0;let _=o,b=a;for(let U=0;U<w.length;U++){const R=w[U];R.enabled!==!1&&(R.render(A,b,_,E),R.needsSwap!==!1&&(_=b,b=b===a?l:a))}if(g!==A.outputColorSpace||x!==A.toneMapping){g=A.outputColorSpace,x=A.toneMapping,d.defines={},Zt.getTransfer(g)===se&&(d.defines.SRGB_TRANSFER="");const U=Bm[x];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(M),A.render(u,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const cd=new $e,hd=new ds(1,1),dd=new Vh(1),ud=new Nh,fd=new Su,pd=new Hh,Lc=[],Dc=[],Ic=new Float32Array(16),Nc=new Float32Array(9),Uc=new Float32Array(4);function ps(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Lc[s];if(r===void 0&&(r=new Float32Array(s),Lc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function co(i,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function Wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,n))return;Uc.set(n),i.uniformMatrix2fv(this.addr,!1,Uc),Ne(e,n)}}function Xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,n))return;Nc.set(n),i.uniformMatrix3fv(this.addr,!1,Nc),Ne(e,n)}}function Ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,n))return;Ic.set(n),i.uniformMatrix4fv(this.addr,!1,Ic),Ne(e,n)}}function qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function Jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function ho(i){return i.version===0&&(i.compareFunction=Ch,i.needsUpdate=!0),i}function eg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ho(hd):r=cd,e.setTexture2D(t||r,s)}function ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fd,s)}function ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ho(dd):r=pd,e.setTextureCube(t||r,s)}function sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ud,s)}function rg(i){switch(i){case 5126:return km;case 35664:return Gm;case 35665:return Hm;case 35666:return Vm;case 35674:return Wm;case 35675:return Xm;case 35676:return Ym;case 5124:case 35670:return qm;case 35667:case 35671:return Zm;case 35668:case 35672:return $m;case 35669:case 35673:return Km;case 5125:return Jm;case 36294:return Qm;case 36295:return jm;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}function og(i,t){i.uniform1fv(this.addr,t)}function ag(i,t){const e=ps(t,this.size,2);i.uniform2fv(this.addr,e)}function lg(i,t){const e=ps(t,this.size,3);i.uniform3fv(this.addr,e)}function cg(i,t){const e=ps(t,this.size,4);i.uniform4fv(this.addr,e)}function hg(i,t){const e=ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dg(i,t){const e=ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ug(i,t){const e=ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fg(i,t){i.uniform1iv(this.addr,t)}function pg(i,t){i.uniform2iv(this.addr,t)}function mg(i,t){i.uniform3iv(this.addr,t)}function gg(i,t){i.uniform4iv(this.addr,t)}function _g(i,t){i.uniform1uiv(this.addr,t)}function xg(i,t){i.uniform2uiv(this.addr,t)}function vg(i,t){i.uniform3uiv(this.addr,t)}function Mg(i,t){i.uniform4uiv(this.addr,t)}function Sg(i,t,e){const n=this.cache,s=t.length,r=co(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ho(hd):o=cd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function yg(i,t,e){const n=this.cache,s=t.length,r=co(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||fd,r[o])}function bg(i,t,e){const n=this.cache,s=t.length,r=co(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=ho(dd):o=pd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function wg(i,t,e){const n=this.cache,s=t.length,r=co(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ud,r[o])}function Eg(i){switch(i){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return dg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return xg;case 36295:return vg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return wg}}class Tg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rg(e.type)}}class Ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Eg(e.type)}}class Rg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function Oc(i,t){i.seq.push(t),i.map[t.id]=t}function Cg(i,t,e){const n=i.name,s=n.length;for(Xo.lastIndex=0;;){const r=Xo.exec(n),o=Xo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Oc(e,c===void 0?new Tg(a,i,t):new Ag(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Rg(a),Oc(e,d)),e=d}}}class Hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Cg(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Fc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Pg=37297;let Lg=0;function Dg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Bc=new zt;function Ig(i){Zt._getMatrix(Bc,Zt.workingColorSpace,i);const t=`mat3( ${Bc.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Zr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Dg(i.getShaderSource(t),a)}else return r}function Ng(i,t){const e=Ig(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ug={[ph]:"Linear",[mh]:"Reinhard",[gh]:"Cineon",[Ka]:"ACESFilmic",[xh]:"AgX",[vh]:"Neutral",[_h]:"Custom"};function Og(i,t){const e=Ug[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ir=new C;function Fg(){Zt.getLuminanceCoefficients(Ir);const i=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function zg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Os(i){return i!==""}function kc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Gc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(i){return i.replace(Gg,Hg)}function Hg(i,t){const e=Ht[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Xa(e)}const Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(i){return i.replace(Vg,Wg)}function Wg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Xg={[Ur]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function Yg(i){return Xg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qg={[Vs]:"ENVMAP_MODE_REFRACTION"};function Zg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $g={[fh]:"ENVMAP_BLENDING_MULTIPLY",[Qd]:"ENVMAP_BLENDING_MIX",[jd]:"ENVMAP_BLENDING_ADD"};function Kg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$g[i.combine]||"ENVMAP_BLENDING_NONE"}function Jg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Yg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Zg(e),d=Kg(e),u=Bg(e),f=zg(r),g=s.createProgram();let x,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Os).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(x=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Zn?Og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Ng("linearToOutputTexel",e.outputColorSpace),Fg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=Xa(o),o=kc(o,e),o=Gc(o,e),a=Xa(a),a=kc(a,e),a=Gc(a,e),o=Hc(o),a=Hc(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=m+x+o,w=m+p+a,y=Fc(s,s.VERTEX_SHADER,M),A=Fc(s,s.FRAGMENT_SHADER,w);s.attachShader(g,y),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(R){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(y)||"",F=s.getShaderInfoLog(A)||"",P=D.trim(),H=N.trim(),q=F.trim();let z=!0,nt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,A);else{const X=zc(s,y,"vertex"),J=zc(s,A,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+X+`
`+J)}else P!==""?Ut("WebGLProgram: Program Info Log:",P):(H===""||q==="")&&(nt=!1);nt&&(R.diagnostics={runnable:z,programLog:P,vertexShader:{log:H,prefix:x},fragmentShader:{log:q,prefix:p}})}s.deleteShader(y),s.deleteShader(A),_=new Hr(s,g),b=kg(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,Pg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=A,this}let Qg=0;class jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new t_(t),e.set(t,n)),n}}class t_{constructor(t){this.id=Qg++,this.code=t,this.usedTimes=0}}function e_(i){return i===Li||i===Xr||i===Yr}function n_(i,t,e,n,s,r){const o=new Uh,a=new jg,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,U,R,D,N){const F=R.fog,P=D.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=t.get(_.envMap||H,q),nt=u[_.type];let X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Ut("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));const J=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,et=J!==void 0?J.length:0;let St=0;P.morphAttributes.position!==void 0&&(St=1),P.morphAttributes.normal!==void 0&&(St=2),P.morphAttributes.color!==void 0&&(St=3);let It,B,k,at;if(nt){const vt=In[nt];It=vt.vertexShader,B=vt.fragmentShader}else{It=_.vertexShader,B=_.fragmentShader;const vt=a.getVertexShaderStage(_),ie=a.getFragmentShaderStage(_);a.update(_,vt,ie),k=vt.id,at=ie.id}const At=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Lt=D.isInstancedMesh===!0,ce=D.isBatchedMesh===!0,Dt=!!_.map,$t=!!_.matcap,Xt=!!z,it=Xt&&z.isPMREMTexture===!0,Wt=!!_.aoMap,he=!!_.lightMap,tn=!!_.bumpMap&&_.wireframe===!1,pe=!!_.normalMap,Pn=!!_.displacementMap,Ue=!!_.emissiveMap,hn=!!_.metalnessMap,dn=!!_.roughnessMap,un=_.anisotropy>0,O=_.clearcoat>0,fn=_.diffuseRoughness>0,ue=_.dispersion>0,fe=_.retroreflectivity>0,xt=_.iridescence>0,Ce=_.sheen>0,Nt=_.transmission>0,Ft=un&&!!_.anisotropyMap,T=O&&!!_.clearcoatMap,v=O&&!!_.clearcoatNormalMap,V=O&&!!_.clearcoatRoughnessMap,st=fn&&!!_.diffuseRoughnessMap,j=xt&&!!_.iridescenceMap,ht=xt&&!!_.iridescenceThicknessMap,gt=Ce&&!!_.sheenColorMap,$=Ce&&!!_.sheenRoughnessMap,K=!!_.specularMap,ut=!!_.specularColorMap,L=!!_.specularIntensityMap,Q=Nt&&!!_.transmissionMap,Z=Nt&&!!_.thicknessMap,ft=!!_.gradientMap,lt=!!_.alphaMap,dt=_.alphaTest>0,Ct=!!_.alphaHash,Gt=!!_.extensions;let ot=Zn;_.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ot=i.toneMapping);const Pt=it?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,kt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:It,fragmentShader:B,defines:_.defines,customVertexShaderID:k,customFragmentShaderID:at,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:ce,batchingColor:ce&&D._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&D.instanceColor!==null,instancingMorph:Lt&&D.morphTexture!==null,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Dt,matcap:$t,envMap:Xt,envMapMode:Xt&&z.mapping,envMapPMREM:it,envMapMaxLod:it?Pt.length-1:null,envMapSize:it?Pt[0].width:null,aoMap:Wt,lightMap:he,bumpMap:tn,normalMap:pe,displacementMap:Pn,emissiveMap:Ue,normalMapObjectSpace:pe&&_.normalMapType===nu,normalMapTangentSpace:pe&&_.normalMapType===Fa,packedNormalMap:pe&&_.normalMapType===Fa&&e_(_.normalMap.format),metalnessMap:hn,roughnessMap:dn,anisotropy:un,anisotropyMap:Ft,clearcoat:O,clearcoatMap:T,clearcoatNormalMap:v,clearcoatRoughnessMap:V,diffuseRoughness:fn,diffuseRoughnessMap:st,dispersion:ue,retroreflection:fe,iridescence:xt,iridescenceMap:j,iridescenceThicknessMap:ht,sheen:Ce,sheenColorMap:gt,sheenRoughnessMap:$,specularMap:K,specularColorMap:ut,specularIntensityMap:L,transmission:Nt,transmissionMap:Q,thicknessMap:Z,gradientMap:ft,opaque:_.transparent===!1&&_.blending===Fs&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:dt,alphaHash:Ct,combine:_.combine,mapUv:Dt&&f(_.map.channel),aoMapUv:Wt&&f(_.aoMap.channel),lightMapUv:he&&f(_.lightMap.channel),bumpMapUv:tn&&f(_.bumpMap.channel),normalMapUv:pe&&f(_.normalMap.channel),displacementMapUv:Pn&&f(_.displacementMap.channel),emissiveMapUv:Ue&&f(_.emissiveMap.channel),metalnessMapUv:hn&&f(_.metalnessMap.channel),roughnessMapUv:dn&&f(_.roughnessMap.channel),anisotropyMapUv:Ft&&f(_.anisotropyMap.channel),clearcoatMapUv:T&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:ut&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:lt&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(pe||un),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Dt||lt),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:St,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:Dt&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===se,decodeVideoTextureEmissive:Ue&&_.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(_.emissiveMap.colorSpace)===se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ae,flipSided:_.side===Ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Gt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&_.extensions.multiDraw===!0||ce)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function x(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const U in _.defines)b.push(U),b.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){const b=u[_.type];let U;if(b){const R=In[b];U=yf.clone(R.uniforms)}else U=_.uniforms;return U}function w(_,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new Jg(i,b,_,s),c.push(U),h.set(b,U)),U}function y(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:M,acquireProgram:w,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:E}}function i_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function s_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,x,p,m){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=p,M.group=m),t++,M}function l(u,f,g,x,p,m,M){M.reversedDepth===!0&&(p=-p);const w=a(u,f,g,x,p,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,f,g,x,p,m){const M=a(u,f,g,x,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||s_),n.length>1&&n.sort(f||Wc),s.length>1&&s.sort(f||Wc)}function d(){for(let u=t,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function r_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Xc,i.set(n,[o])):s>=r.length?(o=new Xc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function o_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Ot};break;case"SpotLight":e={position:new C,direction:new C,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function a_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let l_=0;function c_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h_(i){const t=new o_,e=a_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new jt,o=new jt;function a(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,M=0,w=0,y=0,A=0,E=0,_=0,b=0,U=0,R=0;c.sort(c_);for(let N=0,F=c.length;N<F;N++){const P=c[N],H=P.color,q=P.intensity,z=P.distance;let nt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Li?nt=P.shadow.map.texture:nt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*q,d+=H.g*q,u+=H.b*q;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],q);R++}else if(P.isSunLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,et=e.get(P);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=nt;const St=J.getViewportCount();for(let It=0;It<St;It++)n.sunShadowMatrix[x+It]=J.getMatrix(It),n.sunShadowCascade[x+It]=J._cascadeData[It];x+=St,g++}n.sun[f]=X,f++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,et=e.get(P);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=P.shadow.matrix,A++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(H).multiplyScalar(q),X.distance=z,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[M]=X;const J=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,J.updateMatrices(P),P.castShadow&&U++),n.spotLightMatrix[M]=J.matrix,P.castShadow){const et=e.get(P);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.spotShadow[M]=et,n.spotShadowMap[M]=nt,_++}M++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(H).multiplyScalar(q),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=X,w++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const J=P.shadow,et=e.get(P);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,et.shadowCameraNear=J.camera.near,et.shadowCameraFar=J.camera.far,n.pointShadow[m]=et,n.pointShadowMap[m]=nt,n.pointShadowMatrix[m]=P.shadow.matrix,E++}n.point[m]=X,m++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(q),X.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[y]=X,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==w||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==b||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=w,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-U,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=R,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=M,D.rectAreaLength=w,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=b,D.numLightProbes=R,n.version=l_++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,p=0;const m=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const y=c[M];if(y.isSunLight){const A=n.sun[d];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),d++}else if(y.isDirectionalLight){const A=n.directional[u];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(y.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const A=n.rectArea[x];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const A=n.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function Yc(i){const t=new h_(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function d_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Yc(i),t.set(s,[a])):r>=o.length?(a=new Yc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const u_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,p_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],m_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],qc=new jt,As=new C,Yo=new C;function g_(i,t,e){let n=new Ys;const s=new ct,r=new ct,o=new ve,a=new Af,l=new Rf,c={},h=e.maxTextureSize,d={[ui]:Ze,[Ze]:ui,[ae]:ae},u=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:u_,fragmentShader:f_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ne(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let m=this.type;this.render=function(E,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===hh&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ur);const U=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(os),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=m!==this.type;F&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=E.length;P<H;P++){const q=E[P],z=q.shadow;if(z===void 0){Ut("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const nt=z.getFrameExtents();s.multiply(nt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,z.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=X,z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ns){if(q.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Un(s.x,s.y,{format:Li,type:Fn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new ds(s.x,s.y,En),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=fi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=De,z.map.depthTexture.magFilter=De}else q.isPointLight?(z.map=new ml(s.x),z.map.depthTexture=new Vh(s.x,On)):(z.map=new Un(s.x,s.y),z.map.depthTexture=new ds(s.x,s.y,On)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=fi,this.type===Ur?(z.map.depthTexture.compareFunction=X?Rh:Ah,z.map.depthTexture.minFilter=rn,z.map.depthTexture.magFilter=rn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=De,z.map.depthTexture.magFilter=De);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const J=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,b);const et=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let St=0;St<J;St++){const It=z.getCamera(St);if(q.isPointLight){const B=z.camera,k=z.matrix,at=q.distance||B.far;at!==B.far&&(B.far=at,B.updateProjectionMatrix()),As.setFromMatrixPosition(q.matrixWorld),B.position.copy(As),Yo.copy(B.position),Yo.add(p_[St]),B.up.copy(m_[St]),B.lookAt(Yo),B.updateMatrixWorld(),k.makeTranslation(-As.x,-As.y,-As.z),qc.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),z._frustum.setFromProjectionMatrix(qc,B.coordinateSystem,B.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,St),i.clear();else{St===0&&(i.setRenderTarget(z.map),i.clear());const B=z.getViewport(St);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),N.viewport(o)}n=z.getFrustum(St),y(_,b,It,q,et,this.type)}z.isPointLightShadow!==!0&&this.type===Ns&&M(z,b),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(U,R,D)};function M(E,_){const b=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Un(s.x,s.y,{format:Li,type:Fn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,b,f,x,null)}function w(E,_,b,U){let R=null;const D=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=b.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const N=R.uuid,F=_.uuid;let P=c[N];P===void 0&&(P={},c[N]=P);let H=P[F];H===void 0&&(H=R.clone(),P[F]=H,_.addEventListener("dispose",A)),R=H}if(R.visible=_.visible,R.wireframe=_.wireframe,U===Ns?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=i.properties.get(R);N.light=b}return R}function y(E,_,b,U,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Ns)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const P=t.update(E),H=E.material;if(Array.isArray(H)){const q=P.groups;for(let z=0,nt=q.length;z<nt;z++){const X=q[z],J=H[X.materialIndex];if(J&&J.visible){const et=w(E,J,U,D);E.onBeforeShadow(i,E,_,b,P,et,X),i.renderBufferDirect(b,null,P,et,E,X),E.onAfterShadow(i,E,_,b,P,et,X)}}}else if(H.visible){const q=w(E,H,U,D);E.onBeforeShadow(i,E,_,b,P,q,null),i.renderBufferDirect(b,null,P,q,E,null),E.onAfterShadow(i,E,_,b,P,q,null)}}const F=E.children;for(let P=0,H=F.length;P<H;P++)y(F[P],_,b,U,R,D)}function A(E){E.target.removeEventListener("dispose",A);for(const b in c){const U=c[b],R=E.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}function __(i,t){function e(){let L=!1;const Q=new ve;let Z=null;const ft=new ve(0,0,0,0);return{setMask:function(lt){Z!==lt&&!L&&(i.colorMask(lt,lt,lt,lt),Z=lt)},setLocked:function(lt){L=lt},setClear:function(lt,dt,Ct,Gt,ot){ot===!0&&(lt*=Gt,dt*=Gt,Ct*=Gt),Q.set(lt,dt,Ct,Gt),ft.equals(Q)===!1&&(i.clearColor(lt,dt,Ct,Gt),ft.copy(Q))},reset:function(){L=!1,Z=null,ft.set(-1,0,0,0)}}}function n(){let L=!1,Q=!1,Z=null,ft=null,lt=null;return{setReversed:function(dt){if(Q!==dt){const Ct=t.get("EXT_clip_control");dt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Q=dt;const Gt=lt;lt=null,this.setClear(Gt)}},getReversed:function(){return Q},setTest:function(dt){dt?mt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(dt){Z!==dt&&!L&&(i.depthMask(dt),Z=dt)},setFunc:function(dt){if(Q&&(dt=uu[dt]),ft!==dt){switch(dt){case jo:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case na:i.depthFunc(i.EQUAL);break;case ia:i.depthFunc(i.GEQUAL);break;case sa:i.depthFunc(i.GREATER);break;case ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=dt}},setLocked:function(dt){L=dt},setClear:function(dt){lt!==dt&&(lt=dt,Q&&(dt=1-dt),i.clearDepth(dt))},reset:function(){L=!1,Z=null,ft=null,lt=null,Q=!1}}}function s(){let L=!1,Q=null,Z=null,ft=null,lt=null,dt=null,Ct=null,Gt=null,ot=null;return{setTest:function(Pt){L||(Pt?mt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(Pt){Q!==Pt&&!L&&(i.stencilMask(Pt),Q=Pt)},setFunc:function(Pt,kt,vt){(Z!==Pt||ft!==kt||lt!==vt)&&(i.stencilFunc(Pt,kt,vt),Z=Pt,ft=kt,lt=vt)},setOp:function(Pt,kt,vt){(dt!==Pt||Ct!==kt||Gt!==vt)&&(i.stencilOp(Pt,kt,vt),dt=Pt,Ct=kt,Gt=vt)},setLocked:function(Pt){L=Pt},setClear:function(Pt){ot!==Pt&&(i.clearStencil(Pt),ot=Pt)},reset:function(){L=!1,Q=null,Z=null,ft=null,lt=null,dt=null,Ct=null,Gt=null,ot=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],x=null,p=!1,m=null,M=null,w=null,y=null,A=null,E=null,_=null,b=new Ot(0,0,0),U=0,R=!1,D=null,N=null,F=null,P=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,nt=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=nt>=2);let J=null,et={};const St=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),B=new ve().fromArray(St),k=new ve().fromArray(It);function at(L,Q,Z,ft){const lt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(L,dt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<Z;Ct++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(Q+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return dt}const At={};At[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),o.setFunc(Hs),tn(!1),pe(Nl),mt(i.CULL_FACE),Wt(os);function mt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Lt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function ce(L,Q){return u[L]!==Q?(i.bindFramebuffer(L,Q),u[L]=Q,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Dt(L,Q){let Z=g,ft=!1;if(L){Z=f.get(Q),Z===void 0&&(Z=[],f.set(Q,Z));const lt=L.textures;if(Z.length!==lt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ct=lt.length;dt<Ct;dt++)Z[dt]=i.COLOR_ATTACHMENT0+dt;Z.length=lt.length,ft=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ft=!0);ft&&i.drawBuffers(Z)}function $t(L){return x!==L?(i.useProgram(L),x=L,!0):!1}const Xt={[ns]:i.FUNC_ADD,[Ud]:i.FUNC_SUBTRACT,[Od]:i.FUNC_REVERSE_SUBTRACT};Xt[Fd]=i.MIN,Xt[Bd]=i.MAX;const it={[zd]:i.ZERO,[kd]:i.ONE,[Gd]:i.SRC_COLOR,[dh]:i.SRC_ALPHA,[qd]:i.SRC_ALPHA_SATURATE,[Xd]:i.DST_COLOR,[Vd]:i.DST_ALPHA,[Hd]:i.ONE_MINUS_SRC_COLOR,[uh]:i.ONE_MINUS_SRC_ALPHA,[Yd]:i.ONE_MINUS_DST_COLOR,[Wd]:i.ONE_MINUS_DST_ALPHA,[Zd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[Kd]:i.CONSTANT_ALPHA,[Jd]:i.ONE_MINUS_CONSTANT_ALPHA};function Wt(L,Q,Z,ft,lt,dt,Ct,Gt,ot,Pt){if(L===os){p===!0&&(Lt(i.BLEND),p=!1);return}if(p===!1&&(mt(i.BLEND),p=!0),L!==Nd){if(L!==m||Pt!==R){if((M!==ns||A!==ns)&&(i.blendEquation(i.FUNC_ADD),M=ns,A=ns),Pt)switch(L){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gs:i.blendFunc(i.ONE,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",L);break}else switch(L){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ul:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ol:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",L);break}w=null,y=null,E=null,_=null,b.set(0,0,0),U=0,m=L,R=Pt}return}lt=lt||Q,dt=dt||Z,Ct=Ct||ft,(Q!==M||lt!==A)&&(i.blendEquationSeparate(Xt[Q],Xt[lt]),M=Q,A=lt),(Z!==w||ft!==y||dt!==E||Ct!==_)&&(i.blendFuncSeparate(it[Z],it[ft],it[dt],it[Ct]),w=Z,y=ft,E=dt,_=Ct),(Gt.equals(b)===!1||ot!==U)&&(i.blendColor(Gt.r,Gt.g,Gt.b,ot),b.copy(Gt),U=ot),m=L,R=!1}function he(L,Q){L.side===ae?Lt(i.CULL_FACE):mt(i.CULL_FACE);let Z=L.side===Ze;Q&&(Z=!Z),tn(Z),L.blending===Fs&&L.transparent===!1?Wt(os):Wt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const ft=L.stencilWrite;a.setTest(ft),ft&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tn(L){D!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),D=L)}function pe(L){L!==Dd?(mt(i.CULL_FACE),L!==N&&(L===Nl?i.cullFace(i.BACK):L===Id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),N=L}function Pn(L){L!==F&&(z&&i.lineWidth(L),F=L)}function Ue(L,Q,Z){L?(mt(i.POLYGON_OFFSET_FILL),(P!==Q||H!==Z)&&(P=Q,H=Z,o.getReversed()&&(Q=-Q,Z=-Z),i.polygonOffset(Q,Z))):Lt(i.POLYGON_OFFSET_FILL)}function hn(L){L?mt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function dn(L){L===void 0&&(L=i.TEXTURE0+q-1),J!==L&&(i.activeTexture(L),J=L)}function un(L,Q,Z){Z===void 0&&(J===null?Z=i.TEXTURE0+q-1:Z=J);let ft=et[Z];ft===void 0&&(ft={type:void 0,texture:void 0},et[Z]=ft),(ft.type!==L||ft.texture!==Q)&&(J!==Z&&(i.activeTexture(Z),J=Z),i.bindTexture(L,Q||At[L]),ft.type=L,ft.texture=Q)}function O(){const L=et[J];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function fn(){try{i.compressedTexImage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function ue(){try{i.compressedTexImage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function fe(){try{i.texSubImage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function xt(){try{i.texSubImage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function Ce(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function Ft(){try{i.texStorage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function T(){try{i.texStorage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function v(){try{i.texImage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function V(){try{i.texImage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function st(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function j(L,Q){d[L]!==Q&&(i.pixelStorei(L,Q),d[L]=Q)}function ht(L){B.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),B.copy(L))}function gt(L){k.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),k.copy(L))}function $(L,Q){let Z=c.get(Q);Z===void 0&&(Z=new WeakMap,c.set(Q,Z));let ft=Z.get(L);ft===void 0&&(ft=i.getUniformBlockIndex(Q,L.name),i.uniformBlockBinding(Q,ft,ft),Z.set(L,ft))}function K(L,Q,Z){const lt=c.get(Q).get(L);l[lt]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,lt,Z),l[lt]=Z)}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,et={},u={},l={},f=new WeakMap,g=[],x=null,p=!1,m=null,M=null,w=null,y=null,A=null,E=null,_=null,b=new Ot(0,0,0),U=0,R=!1,D=null,N=null,F=null,P=null,H=null,B.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:Lt,bindFramebuffer:ce,drawBuffers:Dt,useProgram:$t,setBlending:Wt,setMaterial:he,setFlipSided:tn,setCullFace:pe,setLineWidth:Pn,setPolygonOffset:Ue,setScissorTest:hn,activeTexture:dn,bindTexture:un,unbindTexture:O,compressedTexImage2D:fn,compressedTexImage3D:ue,texImage2D:v,texImage3D:V,pixelStorei:j,getParameter:st,updateUBOMapping:$,uniformBlockBinding:K,texStorage2D:Ft,texStorage3D:T,texSubImage2D:fe,texSubImage3D:xt,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Nt,scissor:ht,viewport:gt,reset:ut}}function x_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,d=new Set;let u;const f=new WeakMap,g=new Set,x=new FinalizationRegistry(T=>g.delete(T));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,v){return p?new OffscreenCanvas(T,v):$r("canvas")}function M(T,v,V){let st=1;const j=Ft(T);if((j.width>V||j.height>V)&&(st=V/Math.max(j.width,j.height)),st<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ht=Math.floor(st*j.width),gt=Math.floor(st*j.height);u===void 0&&(u=m(ht,gt));const $=v?m(ht,gt):u;return $.width=ht,$.height=gt,$.getContext("2d").drawImage(T,0,0,ht,gt),Ut("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ht+"x"+gt+")."),$}else return"data"in T&&Ut("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function w(T){return T.generateMipmaps}function y(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,v,V,st,j,ht=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let gt;st&&(gt=t.get("EXT_texture_norm16"),gt||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===i.RED&&(V===i.FLOAT&&($=i.R32F),V===i.HALF_FLOAT&&($=i.R16F),V===i.UNSIGNED_BYTE&&($=i.R8),V===i.UNSIGNED_SHORT&&gt&&($=gt.R16_EXT),V===i.SHORT&&gt&&($=gt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.R8UI),V===i.UNSIGNED_SHORT&&($=i.R16UI),V===i.UNSIGNED_INT&&($=i.R32UI),V===i.BYTE&&($=i.R8I),V===i.SHORT&&($=i.R16I),V===i.INT&&($=i.R32I)),v===i.RG&&(V===i.FLOAT&&($=i.RG32F),V===i.HALF_FLOAT&&($=i.RG16F),V===i.UNSIGNED_BYTE&&($=i.RG8),V===i.UNSIGNED_SHORT&&gt&&($=gt.RG16_EXT),V===i.SHORT&&gt&&($=gt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RG8UI),V===i.UNSIGNED_SHORT&&($=i.RG16UI),V===i.UNSIGNED_INT&&($=i.RG32UI),V===i.BYTE&&($=i.RG8I),V===i.SHORT&&($=i.RG16I),V===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGB8UI),V===i.UNSIGNED_SHORT&&($=i.RGB16UI),V===i.UNSIGNED_INT&&($=i.RGB32UI),V===i.BYTE&&($=i.RGB8I),V===i.SHORT&&($=i.RGB16I),V===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGBA8UI),V===i.UNSIGNED_SHORT&&($=i.RGBA16UI),V===i.UNSIGNED_INT&&($=i.RGBA32UI),V===i.BYTE&&($=i.RGBA8I),V===i.SHORT&&($=i.RGBA16I),V===i.INT&&($=i.RGBA32I)),v===i.RGB&&(V===i.UNSIGNED_SHORT&&gt&&($=gt.RGB16_EXT),V===i.SHORT&&gt&&($=gt.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),v===i.RGBA){const K=ht?Zr:Zt.getTransfer(j);V===i.FLOAT&&($=i.RGBA32F),V===i.HALF_FLOAT&&($=i.RGBA16F),V===i.UNSIGNED_BYTE&&($=K===se?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&gt&&($=gt.RGBA16_EXT),V===i.SHORT&&gt&&($=gt.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(T,v){let V;return T?v===null||v===On||v===hs?V=i.DEPTH24_STENCIL8:v===En?V=i.DEPTH32F_STENCIL8:v===Ws&&(V=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===On||v===hs?V=i.DEPTH_COMPONENT24:v===En?V=i.DEPTH_COMPONENT32F:v===Ws&&(V=i.DEPTH_COMPONENT16),V}function b(T,v){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==De&&T.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function U(T){const v=new WeakRef(T);n.get(T).__ref=v,g.add(v),x.register(T,v,v)}function R(T){const v=n.get(T).__ref;v!==void 0&&(g.delete(v),x.unregister(v))}function D(T){F(T.target)}function N(T){P(T.target)}function F(T){T.removeEventListener("dispose",D),R(T),q(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function P(T){T.removeEventListener("dispose",N),R(T),nt(T)}function H(){for(const T of g){const v=T.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):F(v))}g.clear(),d.clear()}function q(T){const v=n.get(T);if(v.__webglInit===void 0)return;const V=T.source,st=f.get(V);if(st){const j=st[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&z(T),Object.keys(st).length===0&&f.delete(V)}n.remove(T)}function z(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const V=T.source,st=f.get(V);delete st[v.__cacheKey],o.memory.textures--}function nt(T){const v=n.get(T);v.__depthDisposeCallback&&v.__depthDisposeCallback();const V=T.depthTexture;if(V&&V.renderTarget===T&&F(V),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let ht=0;ht<v.__webglFramebuffer[j].length;ht++)i.deleteFramebuffer(v.__webglFramebuffer[j][ht]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const st=T.textures;for(let j=0,ht=st.length;j<ht;j++){const gt=n.get(st[j]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(st[j])}n.remove(T)}let X=0;function J(){X=0}function et(){return X}function St(T){X=T}function It(){const T=X;return T>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function B(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.mipmapsAutoUpdate),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function k(T,v){const V=n.get(T);if(T.isVideoTexture&&Ce(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){const st=T.image;if(st===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{he(V,T,v);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function at(T,v){const V=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){he(V,T,v);return}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function At(T,v){const V=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){he(V,T,v);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function mt(T,v){const V=n.get(T);if(T.version>0&&V.__version!==T.version){tn(V,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}const Lt={[Wr]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},ce={[De]:i.NEAREST,[tu]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},Dt={[su]:i.NEVER,[Ch]:i.ALWAYS,[ru]:i.LESS,[Ah]:i.LEQUAL,[ou]:i.EQUAL,[Rh]:i.GEQUAL,[au]:i.GREATER,[lu]:i.NOTEQUAL};function $t(T,v){if(v.type===En&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===rn||v.magFilter===go||v.magFilter===nr||v.magFilter===hi||v.minFilter===rn||v.minFilter===go||v.minFilter===nr||v.minFilter===hi)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Lt[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Lt[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Lt[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Dt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===De||v.minFilter!==nr&&v.minFilter!==hi||v.type===En&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Xt(T,v){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",D),U(v));const st=v.source;let j=f.get(st);j===void 0&&(j={},f.set(st,j));const ht=B(v);if(ht!==T.__cacheKey){j[ht]===void 0&&(j[ht]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),j[ht].usedTimes++;const gt=j[T.__cacheKey];gt!==void 0&&(j[T.__cacheKey].usedTimes--,gt.usedTimes===0&&z(v)),T.__cacheKey=ht,T.__webglTexture=j[ht].texture}return V}function it(T,v,V){return Math.floor(Math.floor(T/V)/v)}function Wt(T,v,V,st){const ht=T.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,V,st,v.data);else{ht.sort((L,Q)=>L.start-Q.start);let gt=0;for(let L=1;L<ht.length;L++){const Q=ht[gt],Z=ht[L],ft=Q.start+Q.count,lt=it(Z.start,v.width,4),dt=it(Q.start,v.width,4);Z.start<=ft+1&&lt===dt&&it(Z.start+Z.count-1,v.width,4)===lt?Q.count=Math.max(Q.count,Z.start+Z.count-Q.start):(++gt,ht[gt]=Z)}ht.length=gt+1;const $=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let L=0,Q=ht.length;L<Q;L++){const Z=ht[L],ft=Math.floor(Z.start/4),lt=Math.ceil(Z.count/4),dt=ft%v.width,Ct=Math.floor(ft/v.width),Gt=lt,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct),e.texSubImage2D(i.TEXTURE_2D,0,dt,Ct,Gt,ot,V,st,v.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function he(T,v,V){let st=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(st=i.TEXTURE_3D);const j=Xt(T,v),ht=v.source;e.bindTexture(st,T.__webglTexture,i.TEXTURE0+V);const gt=n.get(ht);if(ht.version!==gt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ot=Zt.getPrimaries(Zt.workingColorSpace),Pt=v.colorSpace===li?null:Zt.getPrimaries(v.colorSpace),kt=v.colorSpace===li||ot===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let K=M(v.image,!1,s.maxTextureSize);K=Nt(v,K);const ut=r.convert(v.format,v.colorSpace),L=r.convert(v.type);let Q=E(v.internalFormat,ut,L,v.normalized,v.colorSpace,v.isVideoTexture);$t(st,v);let Z;const ft=v.mipmaps,lt=v.isVideoTexture!==!0,dt=gt.__version===void 0||j===!0,Ct=ht.dataReady,Gt=b(v,K);if(v.isDepthTexture)Q=_(v.format===di,v.type),dt&&(lt?e.texStorage2D(i.TEXTURE_2D,1,Q,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,Q,K.width,K.height,0,ut,L,null));else if(v.isDataTexture)if(ft.length>0){lt&&dt&&e.texStorage2D(i.TEXTURE_2D,Gt,Q,ft[0].width,ft[0].height);for(let ot=0,Pt=ft.length;ot<Pt;ot++)Z=ft[ot],lt?Ct&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Z.width,Z.height,ut,L,Z.data):e.texImage2D(i.TEXTURE_2D,ot,Q,Z.width,Z.height,0,ut,L,Z.data);v.generateMipmaps=!1}else lt?(dt&&e.texStorage2D(i.TEXTURE_2D,Gt,Q,K.width,K.height),Ct&&Wt(v,K,ut,L)):e.texImage2D(i.TEXTURE_2D,0,Q,K.width,K.height,0,ut,L,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){lt&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Q,ft[0].width,ft[0].height,K.depth);for(let ot=0,Pt=ft.length;ot<Pt;ot++)if(Z=ft[ot],v.format!==Tn)if(ut!==null)if(lt){if(Ct)if(v.layerUpdates.size>0){const kt=Tc(Z.width,Z.height,v.format,v.type);for(const vt of v.layerUpdates){const ie=Z.data.subarray(vt*kt/Z.data.BYTES_PER_ELEMENT,(vt+1)*kt/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,vt,Z.width,Z.height,1,ut,ie)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Z.width,Z.height,K.depth,ut,Z.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Q,Z.width,Z.height,K.depth,0,Z.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Z.width,Z.height,K.depth,ut,L,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Q,Z.width,Z.height,K.depth,0,ut,L,Z.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{lt&&dt&&e.texStorage2D(i.TEXTURE_2D,Gt,Q,ft[0].width,ft[0].height);for(let ot=0,Pt=ft.length;ot<Pt;ot++)Z=ft[ot],v.format!==Tn?ut!==null?lt?Ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,Z.width,Z.height,ut,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Q,Z.width,Z.height,0,Z.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Ct&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Z.width,Z.height,ut,L,Z.data):e.texImage2D(i.TEXTURE_2D,ot,Q,Z.width,Z.height,0,ut,L,Z.data)}else if(v.isDataArrayTexture)if(lt){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Q,K.width,K.height,K.depth),Ct)if(v.layerUpdates.size>0){const ot=Tc(K.width,K.height,v.format,v.type);for(const Pt of v.layerUpdates){const kt=K.data.subarray(Pt*ot/K.data.BYTES_PER_ELEMENT,(Pt+1)*ot/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,K.width,K.height,1,ut,L,kt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ut,L,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,K.width,K.height,K.depth,0,ut,L,K.data);else if(v.isData3DTexture)lt?(dt&&e.texStorage3D(i.TEXTURE_3D,Gt,Q,K.width,K.height,K.depth),Ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ut,L,K.data)):e.texImage3D(i.TEXTURE_3D,0,Q,K.width,K.height,K.depth,0,ut,L,K.data);else if(v.isFramebufferTexture){if(dt)if(lt)e.texStorage2D(i.TEXTURE_2D,Gt,Q,K.width,K.height);else{let ot=K.width,Pt=K.height;for(let kt=0;kt<Gt;kt++)e.texImage2D(i.TEXTURE_2D,kt,Q,ot,Pt,0,ut,L,null),ot>>=1,Pt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),K.parentNode!==ot){ot.appendChild(K),d.add(v),ot.onpaint=Pt=>{const kt=Pt.changedElements;for(const vt of d)kt.includes(vt.image)&&(vt.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const kt=i.RGBA,vt=i.RGBA,ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,kt,vt,ie,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ft.length>0){if(lt&&dt){const ot=Ft(ft[0]);e.texStorage2D(i.TEXTURE_2D,Gt,Q,ot.width,ot.height)}for(let ot=0,Pt=ft.length;ot<Pt;ot++)Z=ft[ot],lt?Ct&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,ut,L,Z):e.texImage2D(i.TEXTURE_2D,ot,Q,ut,L,Z);v.generateMipmaps=!1}else if(lt){if(dt){const ot=Ft(K);e.texStorage2D(i.TEXTURE_2D,Gt,Q,ot.width,ot.height)}Ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,L,K)}else e.texImage2D(i.TEXTURE_2D,0,Q,ut,L,K);w(v)&&v.mipmapsAutoUpdate===!0&&y(st),gt.__version=ht.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function tn(T,v,V){if(v.image.length!==6)return;const st=Xt(T,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);const ht=n.get(j);if(j.version!==ht.__version||st===!0){e.activeTexture(i.TEXTURE0+V);const gt=Zt.getPrimaries(Zt.workingColorSpace),$=v.colorSpace===li?null:Zt.getPrimaries(v.colorSpace),K=v.colorSpace===li||gt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ut=v.isCompressedTexture||v.image[0].isCompressedTexture,L=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let vt=0;vt<6;vt++)!ut&&!L?Q[vt]=M(v.image[vt],!0,s.maxCubemapSize):Q[vt]=L?v.image[vt].image:v.image[vt],Q[vt]=Nt(v,Q[vt]);const Z=Q[0],ft=r.convert(v.format,v.colorSpace),lt=r.convert(v.type);let dt=E(v.internalFormat,ft,lt,v.normalized,v.colorSpace);const Ct=v.isVideoTexture!==!0,Gt=ht.__version===void 0||st===!0,ot=j.dataReady;let Pt=b(v,Z);$t(i.TEXTURE_CUBE_MAP,v);let kt;if(v.isDepthTexture){if(dt=_(v.format===di,v.type),Gt)if(Ct)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,dt,Z.width,Z.height);else for(let vt=0;vt<6;vt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,dt,Z.width,Z.height,0,ft,lt,null)}else if(ut){Ct&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,dt,Z.width,Z.height);for(let vt=0;vt<6;vt++){kt=Q[vt].mipmaps;for(let ie=0;ie<kt.length;ie++){const Oe=kt[ie];v.format!==Tn?ft!==null?Ct?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ie,0,0,Oe.width,Oe.height,ft,Oe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ie,dt,Oe.width,Oe.height,0,Oe.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ie,0,0,Oe.width,Oe.height,ft,lt,Oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ie,dt,Oe.width,Oe.height,0,ft,lt,Oe.data)}}}else{if(kt=v.mipmaps,Ct&&Gt){kt.length>0&&Pt++;const vt=Ft(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,dt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(L){Ct?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Q[vt].width,Q[vt].height,ft,lt,Q[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,dt,Q[vt].width,Q[vt].height,0,ft,lt,Q[vt].data);for(let ie=0;ie<kt.length;ie++){const Qn=kt[ie].image[vt].image;Ct?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ie+1,0,0,Qn.width,Qn.height,ft,lt,Qn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ie+1,dt,Qn.width,Qn.height,0,ft,lt,Qn.data)}}else{Ct?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ft,lt,Q[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,dt,ft,lt,Q[vt]);for(let ie=0;ie<kt.length;ie++){const Oe=kt[ie];Ct?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ie+1,0,0,ft,lt,Oe.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ie+1,dt,ft,lt,Oe.image[vt])}}}w(v)&&v.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ht.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function pe(T,v,V,st,j,ht){const gt=r.convert(V.format,V.colorSpace),$=r.convert(V.type),K=E(V.internalFormat,gt,$,V.normalized,V.colorSpace),ut=n.get(v),L=n.get(V);if(L.__renderTarget=v,!ut.__hasExternalTextures){const Q=Math.max(1,v.width>>ht),Z=Math.max(1,v.height>>ht);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,ht,K,Q,Z,v.depth,0,gt,$,null):e.texImage2D(j,ht,K,Q,Z,0,gt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),xt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,j,L.__webglTexture,0,fe(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,j,L.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pn(T,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const st=v.depthTexture,j=st&&st.isDepthTexture?st.type:null,ht=_(v.stencilBuffer,j),gt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(v),ht,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(v),ht,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ht,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,T)}else{const st=v.textures;for(let j=0;j<st.length;j++){const ht=st[j],gt=r.convert(ht.format,ht.colorSpace),$=r.convert(ht.type),K=E(ht.internalFormat,gt,$,ht.normalized,ht.colorSpace);xt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(v),K,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(v),K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(T,v,V){const st=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(v.depthTexture);j.__renderTarget=v;const ht=st?v.depthTexture.image[0]:v.depthTexture.image;(!j.__webglTexture||ht.width!==v.width||ht.height!==v.height)&&(ht.width=v.width,ht.height=v.height,v.depthTexture.needsUpdate=!0),st?mt(v.depthTexture,0):k(v.depthTexture,0);const gt=j.__webglTexture,$=fe(v),K=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ut=v.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===fi)xt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,K,gt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ut,K,gt,0);else if(v.depthTexture.format===di)xt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,K,gt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ut,K,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function hn(T){const v=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const st=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),st){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,st.removeEventListener("dispose",j)};st.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=st}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(V)for(let st=0;st<6;st++)Ue(v.__webglFramebuffer[st],T,st);else T.texture.mipmaps.length>0?Ue(v.__webglFramebuffer[0],T,0):Ue(v.__webglFramebuffer,T,0);else if(V){v.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[st]),v.__webglDepthbuffer[st]===void 0)v.__webglDepthbuffer[st]=i.createRenderbuffer(),Pn(v.__webglDepthbuffer[st],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ht)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Pn(v.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dn(T,v,V){const st=n.get(T);v!==void 0&&pe(st.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&hn(T)}function un(T){const v=T.texture,V=n.get(T),st=n.get(v);T.addEventListener("dispose",N),U(T);const j=T.textures,ht=T.isWebGLCubeRenderTarget===!0,gt=j.length>1;if(gt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=v.version,o.memory.textures++),ht){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let K=0;K<v.mipmaps.length;K++)V.__webglFramebuffer[$][K]=i.createFramebuffer()}else V.__webglFramebuffer[$]=i.createFramebuffer()}else{if(v.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)V.__webglFramebuffer[$]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(gt)for(let $=0,K=j.length;$<K;$++){const ut=n.get(j[$]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&xt(T)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<j.length;$++){const K=j[$];V.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[$]);const ut=r.convert(K.format,K.colorSpace),L=r.convert(K.type),Q=E(K.internalFormat,ut,L,K.normalized,K.colorSpace,T.isXRRenderTarget===!0),Z=fe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,Q,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,V.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Pn(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),$t(i.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)pe(V.__webglFramebuffer[$][K],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,K);else pe(V.__webglFramebuffer[$],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);w(v)?y(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let $=0,K=j.length;$<K;$++){const ut=j[$],L=n.get(ut);let Q=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),$t(Q,ut),pe(V.__webglFramebuffer,T,ut,i.COLOR_ATTACHMENT0+$,Q,0),w(ut)&&y(Q)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,st.__webglTexture),$t($,v),v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)pe(V.__webglFramebuffer[K],T,v,i.COLOR_ATTACHMENT0,$,K);else pe(V.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,$,0);w(v)?y($):v.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&hn(T)}function O(T){const v=T.textures;for(let V=0,st=v.length;V<st;V++){const j=v[V];if(w(j)&&j.mipmapsAutoUpdate===!0){const ht=A(T),gt=n.get(j).__webglTexture;e.bindTexture(ht,gt),y(ht),e.unbindTexture()}}}const fn=[];function ue(T){if(T.samples>0){if(xt(T)===!1){const v=T.textures,V=T.width,st=T.height;let j=i.COLOR_BUFFER_BIT;const ht=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(T),$=v.length>1;if($)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);const L=n.get(v[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,V,st,0,0,V,st,j,i.NEAREST),l===!0&&(fn.length=0,fn.push(i.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&fn.push(ht),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);const L=n.get(v[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,L,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function fe(T){return Math.min(s.maxSamples,T.samples)}function xt(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ce(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Nt(T,v){const V=T.colorSpace,st=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==qr&&V!==li&&(Zt.getTransfer(V)===se?(st!==Tn||j!==ln)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",V)),v}function Ft(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=It,this.resetTextureUnits=J,this.getTextureUnits=et,this.setTextureUnits=St,this.setTexture2D=k,this.setTexture2DArray=at,this.setTexture3D=At,this.setTextureCube=mt,this.rebindTextures=dn,this.setupRenderTarget=un,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=hn,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=xt,this.dispose=H}function v_(i,t){function e(n,s=li){let r;const o=Zt.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sh)return i.BYTE;if(n===yh)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===Ja)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===Eh)return i.ALPHA;if(n===Th)return i.RGB;if(n===Tn)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===el)return i.RED_INTEGER;if(n===Li)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===Or||n===Fr||n===Br||n===zr)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===la||n===ca||n===ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===da||n===ua||n===fa||n===pa||n===ma||n===Xr||n===ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===da||n===ua)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pa)return r.COMPRESSED_R11_EAC;if(n===ma)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xr)return r.COMPRESSED_RG11_EAC;if(n===ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_a||n===xa||n===va||n===Ma||n===Sa||n===ya||n===ba||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===va)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Da||n===Ia)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===La)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Na||n===Ua||n===Yr||n===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Wh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new mi({vertexShader:M_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b_ extends gi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",p=new y_,m={},M=e.getContextAttributes();let w=null,y=null;const A=[],E=[],_=new ct;let b=null,U=null;const R=new _n;R.viewport=new ve;const D=new _n;D.viewport=new ve;const N=[R,D],F=new Nf;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let k=A[B];return k===void 0&&(k=new wo,A[B]=k),k.getTargetRaySpace()},this.getControllerGrip=function(B){let k=A[B];return k===void 0&&(k=new wo,A[B]=k),k.getGripSpace()},this.getHand=function(B){let k=A[B];return k===void 0&&(k=new wo,A[B]=k),k.getHandSpace()};function q(B){const k=E.indexOf(B.inputSource);if(k===-1)return;const at=A[k];at!==void 0&&(at.update(B.inputSource,B.frame,c||o),at.dispatchEvent({type:B.type,data:B.inputSource}))}function z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",nt);for(let B=0;B<A.length;B++){const k=E[B];k!==null&&(E[B]=null,A[B].disconnect(k))}P=null,H=null,p.reset();for(const B in m)delete m[B];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,y=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),U!==null){const B=U.camera;B.fov=U.fov,B.zoom=U.zoom,B.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",z),s.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,At=null,mt=null;M.depth&&(mt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=M.stencil?di:fi,At=M.stencil?hs:On);const Lt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Un(u.textureWidth,u.textureHeight,{format:Tn,type:ln,depthTexture:new ds(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const at={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Un(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(B){for(let k=0;k<B.removed.length;k++){const at=B.removed[k],At=E.indexOf(at);At>=0&&(E[At]=null,A[At].disconnect(at))}for(let k=0;k<B.added.length;k++){const at=B.added[k];let At=E.indexOf(at);if(At===-1){for(let Lt=0;Lt<A.length;Lt++)if(Lt>=E.length){E.push(at),At=Lt;break}else if(E[Lt]===null){E[Lt]=at,At=Lt;break}if(At===-1)break}const mt=A[At];mt&&mt.connect(at)}}function X(B,k){k===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(k.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let k=B.near,at=B.far;p.texture!==null&&(p.depthNear>0&&(k=p.depthNear),p.depthFar>0&&(at=p.depthFar)),F.near=D.near=R.near=k,F.far=D.far=R.far=at,(P!==F.near||H!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,H=F.far),F.layers.mask=B.layers.mask|6,R.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;const At=B.parent,mt=F.cameras;X(F,At);for(let Lt=0;Lt<mt.length;Lt++)X(mt[Lt],At);F.projectionMatrix.copy(R.projectionMatrix),F.projectionMatrixInverse.copy(R.projectionMatrixInverse),U===null&&B.isPerspectiveCamera&&(U={camera:B,fov:B.fov,zoom:B.zoom}),J(B,F,At)};function J(B,k,at){at===null?B.matrix.copy(k.matrixWorld):(B.matrix.copy(at.matrixWorld),B.matrix.invert(),B.matrix.multiply(k.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(k.projectionMatrix),B.projectionMatrixInverse.copy(k.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ba*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(B){return m[B]};let et=null;function St(B,k){if(h=k.getViewerPose(c||o),g=k,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let At=!1;at.length!==F.cameras.length&&(F.cameras.length=0,At=!0);for(let Dt=0;Dt<at.length;Dt++){const $t=at[Dt];let Xt=null;if(f!==null)Xt=f.getViewport($t);else{const Wt=d.getViewSubImage(u,$t);Xt=Wt.viewport,Dt===0&&(t.setRenderTargetTextures(y,Wt.colorTexture,Wt.depthStencilTexture),t.setRenderTarget(y))}let it=N[Dt];it===void 0&&(it=new _n,it.layers.enable(Dt),it.viewport=new ve,N[Dt]=it),it.matrix.fromArray($t.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray($t.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Dt===0&&(F.matrix.copy(it.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),At===!0&&F.cameras.push(it)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Dt=d.getDepthInformation(at[0]);Dt&&Dt.isValid&&Dt.texture&&p.init(Dt,s.renderState)}if(mt&&mt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Dt=0;Dt<at.length;Dt++){const $t=at[Dt].camera;if($t){let Xt=m[$t];Xt||(Xt=new Wh,m[$t]=Xt);const it=d.getCameraImage($t);Xt.sourceTexture=it}}}}for(let at=0;at<A.length;at++){const At=E[at],mt=A[at];At!==null&&mt!==void 0&&mt.update(At,k,c||o)}et&&et(B,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}const It=new rd;It.setAnimationLoop(St),this.setAnimationLoop=function(B){et=B},this.dispose=function(){}}}const w_=new jt,md=new zt;md.set(-1,0,0,0,1,0,0,0,1);function E_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ed(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ze&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ze&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),w=M.envMap,y=M.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(w_.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(md),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ze&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function T_(i,t,e,n){let s={},r={};function o(M,w){const y=w.program;n.uniformBlockBinding(M,y,s[M.id])}function a(M,w){let y=s[M.id];y===void 0&&(g(M),y=l(M),s[M.id]=y,M.addEventListener("dispose",p));const A=w.program;n.updateUBOMapping(M,A);const E=t.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){const w=i.createBuffer(),y=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,y,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(M){const w=s[M.id],y=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,_=y.length;E<_;E++){const b=y[E];if(Array.isArray(b))for(let U=0,R=b.length;U<R;U++)h(b[U],E,U,A);else h(b,E,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,w,y,A){if(u(M,w,y,A)===!0){const E=M.__offset,_=M.value;if(Array.isArray(_)){let b=0;for(let U=0;U<_.length;U++){const R=_[U],D=x(R,!0);d(R,M.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function d(M,w,y){typeof M=="number"||typeof M=="boolean"?w[y]=M:M.isMatrix3?(w[y]=M.elements[0],w[y+1]=M.elements[1],w[y+2]=M.elements[2],w[y+3]=0,w[y+4]=M.elements[3],w[y+5]=M.elements[4],w[y+6]=M.elements[5],w[y+7]=0,w[y+8]=M.elements[6],w[y+9]=M.elements[7],w[y+10]=M.elements[8],w[y+11]=0):ArrayBuffer.isView(M)?w.set(M.subarray(0,w.length-y),y):M.toArray(w,y)}function u(M,w,y,A){const E=M.value,_=w+"_"+y;if(Array.isArray(E)){A[_]===void 0&&(A[_]=[]);const b=A[_];let U=!1;for(let R=0;R<E.length;R++)f(E[R],b,R)===!0&&(U=!0);return U}return f(E,A,_)}function f(M,w,y){if(w[y]===void 0)return typeof M=="number"||typeof M=="boolean"?w[y]=M:ArrayBuffer.isView(M)?w[y]=M.slice():w[y]=M.clone(),!0;{const A=w[y];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return w[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function g(M){const w=M.uniforms;let y=0;const A=16;for(let _=0,b=w.length;_<b;_++){const U=Array.isArray(w[_])?w[_]:[w[_]];for(let R=0,D=U.length;R<D;R++){const N=U[R],F=Array.isArray(N.value)?N.value:[N.value],P=Array.isArray(w[_])||Array.isArray(N.value);let H=y;for(let z=0,nt=F.length;z<nt;z++){const X=F[z],J=x(X,P),et=y%A,St=et%J.boundary,It=et+St;y+=St,It!==0&&A-It<J.storage&&(y+=A-It),z===0&&(H=y),y+=J.storage}const q=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new q((y-H)/Float32Array.BYTES_PER_ELEMENT),N.__offset=H}}const E=y%A;return E>0&&(y+=A-E),M.__size=y,M.__cache={},this}function x(M,w){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",M),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(M){const w=M.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:m}}const A_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dn=null;function R_(){return Dn===null&&(Dn=new ol(A_,16,16,Li,Fn),Dn.name="DFG_LUT",Dn.minFilter=rn,Dn.magFilter=rn,Dn.wrapS=qn,Dn.wrapT=qn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class C_{constructor(t={}){const{canvas:e=hu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ln}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const x=f,p=new Set([il,nl,el]),m=new Set([ln,On,Ws,hs,Qa,ja]),M=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let A=null,E=null;const _=[],b=[];let U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,N=null,F=null,P=null,H=null;this._outputColorSpace=nn;let q=0,z=0,nt=null,X=-1,J=null;const et=new ve,St=new ve;let It=null;const B=new Ot(0);let k=0,at=e.width,At=e.height,mt=1,Lt=null,ce=null;const Dt=new ve(0,0,at,At),$t=new ve(0,0,at,At);let Xt=!1;const it=new Ys,Wt=new al;let he=!1,tn=!1;const pe=new jt,Pn=new C,Ue=new ve,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dn=!1;function un(){return nt===null?mt:1}let O=n;function fn(S,I){return e.getContext(S,I)}let ue,fe,xt,Ce,Nt,Ft,T,v,V,st,j,ht,gt,$,K,ut,L,Q,Z,ft,lt,dt,Ct;try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$a}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),O===null){const I="webgl2";if(O=fn(I,S),O===null)throw fn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(S){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Qt("WebGLRenderer: "+S.message),S}function Gt(){ue=new Dm(O),ue.init(),lt=new v_(O,ue),fe=new Sm(O,ue,t,lt),xt=new __(O,ue),fe.reversedDepthBuffer&&u&&xt.buffers.depth.setReversed(!0),F=O.createFramebuffer(),P=O.createFramebuffer(),H=O.createFramebuffer(),Ce=new Um(O),Nt=new i_,Ft=new x_(O,ue,xt,Nt,fe,lt,Ce),T=new Lm(R),v=new Ff(O),dt=new vm(O,v),V=new Im(O,v,Ce,dt),st=new Fm(O,V,v,dt,Ce),Q=new Om(O,fe,Ft),K=new ym(Nt),j=new n_(R,T,ue,fe,dt,K),ht=new E_(R,Nt),gt=new r_,$=new d_(ue),L=new xm(R,T,xt,st,g,l),ut=new g_(R,st,fe),Ct=new T_(O,Ce,fe,xt),Z=new Mm(O,ue,Ce),ft=new Nm(O,ue,Ce),Ce.programs=j.programs,R.capabilities=fe,R.extensions=ue,R.properties=Nt,R.renderLists=gt,R.shadowMap=ut,R.state=xt,R.info=Ce}x!==ln&&(U=new zm(x,e.width,e.height,a,s,r));const ot=new b_(R,O);this.xr=ot,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=ue.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ue.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(S){S!==void 0&&(mt=S,this.setSize(at,At,!1))},this.getSize=function(S){return S.set(at,At)},this.setSize=function(S,I,Y=!0){if(ot.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}at=S,At=I,e.width=Math.floor(S*mt),e.height=Math.floor(I*mt),Y===!0&&(e.style.width=S+"px",e.style.height=I+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(at*mt,At*mt).floor()},this.setDrawingBufferSize=function(S,I,Y){at=S,At=I,mt=Y,e.width=Math.floor(S*Y),e.height=Math.floor(I*Y),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(x===ln){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(Dt)},this.setViewport=function(S,I,Y,G){S.isVector4?Dt.set(S.x,S.y,S.z,S.w):Dt.set(S,I,Y,G),xt.viewport(et.copy(Dt).multiplyScalar(un()).round())},this.getScissor=function(S){return S.copy($t)},this.setScissor=function(S,I,Y,G){S.isVector4?$t.set(S.x,S.y,S.z,S.w):$t.set(S,I,Y,G),xt.scissor(St.copy($t).multiplyScalar(un()).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(S){xt.setScissorTest(Xt=S)},this.setOpaqueSort=function(S){Lt=S},this.setTransparentSort=function(S){ce=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,Y=!0){let G=0;if(S){let W=!1;if(nt!==null){const _t=nt.texture.format;W=p.has(_t)}if(W){const _t=nt.texture.type,bt=m.has(_t),pt=L.getClearColor(),yt=L.getClearAlpha(),Rt=pt.r,Bt=pt.g,Yt=pt.b;bt?(M[0]=Rt,M[1]=Bt,M[2]=Yt,M[3]=yt,O.clearBufferuiv(O.COLOR,0,M)):(w[0]=Rt,w[1]=Bt,w[2]=Yt,w[3]=yt,O.clearBufferiv(O.COLOR,0,w))}else G|=O.COLOR_BUFFER_BIT}I&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),L.dispose(),gt.dispose(),$.dispose(),Ft.dispose(),Nt.dispose(),T.dispose(),st.dispose(),V.dispose(),dt.dispose(),Ct.dispose(),j.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",wl),ot.removeEventListener("sessionend",El),vi.stop()};function Pt(S){S.preventDefault(),Kr("WebGLRenderer: Context Lost."),D=!0}function kt(){Kr("WebGLRenderer: Context Restored."),D=!1;const S=Ce.autoReset,I=ut.enabled,Y=ut.autoUpdate,G=ut.needsUpdate,W=ut.type;Gt(),Ce.autoReset=S,ut.enabled=I,ut.autoUpdate=Y,ut.needsUpdate=G,ut.type=W}function vt(S){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ie(S){const I=S.target;I.removeEventListener("dispose",ie),Oe(I)}function Oe(S){Qn(S),Nt.remove(S)}function Qn(S){const I=Nt.get(S).programs;I!==void 0&&(I.forEach(function(Y){j.releaseProgram(Y)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,Y,G,W,_t){I===null&&(I=hn);const bt=W.isMesh&&W.matrixWorld.determinantAffine()<0,pt=Cd(S,I,Y,G,W);xt.setMaterial(G,bt);let yt=Y.index,Rt=1;if(G.wireframe===!0){if(yt=V.getWireframeAttribute(Y),yt===void 0)return;Rt=2}const Bt=Y.drawRange,Yt=Y.attributes.position;let wt=Bt.start*Rt,qt=(Bt.start+Bt.count)*Rt;_t!==null&&(wt=Math.max(wt,_t.start*Rt),qt=Math.min(qt,(_t.start+_t.count)*Rt)),yt!==null?(wt=Math.max(wt,0),qt=Math.min(qt,yt.count)):Yt!=null&&(wt=Math.max(wt,0),qt=Math.min(qt,Yt.count));const ye=qt-wt;if(ye<0||ye===1/0)return;dt.setup(W,G,pt,Y,yt);let le,oe=Z;if(yt!==null&&(le=v.get(yt),oe=ft,oe.setIndex(le)),W.isMesh)G.wireframe===!0?(xt.setLineWidth(G.wireframeLinewidth*un()),oe.setMode(O.LINES)):oe.setMode(O.TRIANGLES);else if(W.isLine){let Ve=G.linewidth;Ve===void 0&&(Ve=1),xt.setLineWidth(Ve*un()),W.isLineSegments?oe.setMode(O.LINES):W.isLineLoop?oe.setMode(O.LINE_LOOP):oe.setMode(O.LINE_STRIP)}else W.isPoints?oe.setMode(O.POINTS):W.isSprite&&oe.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))oe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ve=W._multiDrawStarts,Et=W._multiDrawCounts,Ke=W._multiDrawCount,te=yt?v.get(yt).bytesPerElement:1,Mi=Nt.get(G).currentProgram.getUniforms();for(let We=0;We<Ke;We++)Mi.setValue(O,"_gl_DrawID",We),oe.render(Ve[We]/te,Et[We])}else if(W.isInstancedMesh)oe.renderInstances(wt,ye,W.count);else if(Y.isInstancedBufferGeometry){const Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Et=Math.min(Y.instanceCount,Ve);oe.renderInstances(wt,ye,Et)}else oe.render(wt,ye)};function bl(S,I,Y,G){N!==null&&S.isNodeMaterial&&N.setObject(G,S),he===!0&&K.setState(S,Y,!1),S.transparent===!0&&S.side===ae&&S.forceSinglePass===!1?(S.side=Ze,S.needsUpdate=!0,gs(S,I,G),S.side=ui,S.needsUpdate=!0,gs(S,I,G),S.side=ae):gs(S,I,G)}this.compile=function(S,I,Y=null){Y===null&&(Y=S),N!==null&&N.renderStart(S,I,Y),E=$.get(Y),E.init(I),b.push(E),Y.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),S!==Y&&S.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),tn=this.localClippingEnabled,he=K.init(this.clippingPlanes,tn),he===!0&&K.setGlobalState(this.clippingPlanes,I),N!==null&&ut.render(E.state.shadowsArray,Y,I);const G=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const _t=W.material;if(_t)if(Array.isArray(_t))for(let bt=0;bt<_t.length;bt++){const pt=_t[bt];bl(pt,Y,I,W),G.add(pt)}else bl(_t,Y,I,W),G.add(_t)}),E=b.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(S,I,Y=null){const G=this.compile(S,I,Y);return new Promise(W=>{function _t(){if(G.forEach(function(bt){const yt=Nt.get(bt).currentProgram;(yt===void 0||yt.isReady())&&G.delete(bt)}),G.size===0){W(S);return}setTimeout(_t,10)}ue.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let uo=null;function Ad(S){uo&&uo(S)}function wl(){vi.stop()}function El(){vi.start()}const vi=new rd;vi.setAnimationLoop(Ad),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(S){uo=S,ot.setAnimationLoop(S),S===null?vi.stop():vi.start()},ot.addEventListener("sessionstart",wl),ot.addEventListener("sessionend",El),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(S,I);const Y=ot.enabled===!0&&ot.isPresenting===!0,G=U!==null&&(nt===null||Y)&&U.begin(R,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(I),I=ot.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,I,nt),E=$.get(S,b.length),E.init(I),E.state.textureUnits=Ft.getTextureUnits(),b.push(E),pe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Wt.setFromArrayCamera(I):it.setFromProjectionMatrix(pe,An,I.reversedDepth),tn=this.localClippingEnabled,he=K.init(this.clippingPlanes,tn),A=gt.get(S,_.length),A.init(),_.push(A),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){const bt=R.xr.getDepthSensingMesh();bt!==null&&fo(bt,I,-1/0,R.sortObjects)}fo(S,I,0,R.sortObjects),A.finish(),N!==null&&N.updateLights(E.state.lightsArray),R.sortObjects===!0&&A.sort(Lt,ce),dn=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,dn&&L.addToRenderList(A,S),this.info.autoReset===!0&&this.info.reset(),he===!0&&K.beginShadows();const W=E.state.shadowsArray;if(ut.render(W,S,I),he===!0&&K.endShadows(),(G&&U.hasRenderPass())===!1){const bt=A.opaque,pt=A.transmissive;if(E.setupLights(),I.isArrayCamera){const yt=I.cameras;if(pt.length>0)for(let Rt=0,Bt=yt.length;Rt<Bt;Rt++){const Yt=yt[Rt];Al(bt,pt,S,Yt)}dn&&L.render(S);for(let Rt=0,Bt=yt.length;Rt<Bt;Rt++){const Yt=yt[Rt];Tl(A,S,Yt,Yt.viewport)}}else pt.length>0&&Al(bt,pt,S,I),dn&&L.render(S),Tl(A,S,I)}nt!==null&&z===0&&(Ft.updateMultisampleRenderTarget(nt),Ft.updateRenderTargetMipmap(nt)),G&&U.end(R),S.isScene===!0&&S.onAfterRender(R,S,I),dt.resetDefaultState(),X=-1,J=null,b.pop(),b.length>0?(E=b[b.length-1],Ft.setTextureUnits(E.state.textureUnits),he===!0&&K.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,N!==null&&N.renderEnd()};function fo(S,I,Y,G){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){const bt=I.isArrayCamera?Wt:it;if(!S.frustumCulled||S.intersectsFrustum(bt)){G&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pe);const pt=st.update(S),yt=S.material;yt.visible&&A.push(S,pt,yt,Y,Ue.z,null,I)}}else if(S.isMesh||S.isLine||S.isPoints){const bt=I.isArrayCamera?Wt:it;if(!S.frustumCulled||S.intersectsFrustum(bt)){const pt=st.update(S),yt=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ue.copy(pt.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(pe)),Array.isArray(yt)){const Rt=pt.groups;for(let Bt=0,Yt=Rt.length;Bt<Yt;Bt++){const wt=Rt[Bt],qt=yt[wt.materialIndex];qt&&qt.visible&&A.push(S,pt,qt,Y,Ue.z,wt,I)}}else yt.visible&&A.push(S,pt,yt,Y,Ue.z,null,I)}}}const _t=S.children;for(let bt=0,pt=_t.length;bt<pt;bt++)fo(_t[bt],I,Y,G)}function Tl(S,I,Y,G){const{opaque:W,transmissive:_t,transparent:bt}=S;E.setupLightsView(Y),he===!0&&K.setGlobalState(R.clippingPlanes,Y),G&&xt.viewport(et.copy(G)),W.length>0&&tr(W,I,Y),_t.length>0&&tr(_t,I,Y),bt.length>0&&tr(bt,I,Y),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Al(S,I,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const wt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Un(1,1,{generateMipmaps:!0,type:wt?Fn:ln,minFilter:hi,samples:Math.max(4,fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const _t=E.state.transmissionRenderTarget[G.id],bt=G.viewport||et;_t.setSize(bt.z*R.transmissionResolutionScale,bt.w*R.transmissionResolutionScale);const pt=R.getRenderTarget(),yt=R.getActiveCubeFace(),Rt=R.getActiveMipmapLevel();R.setRenderTarget(_t),R.getClearColor(B),k=R.getClearAlpha(),k<1&&R.setClearColor(16777215,.5),R.clear(),dn&&L.render(Y);const Bt=R.toneMapping;R.toneMapping=Zn;const Yt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),he===!0&&K.setGlobalState(R.clippingPlanes,G),tr(S,Y,G),Ft.updateMultisampleRenderTarget(_t),Ft.updateRenderTargetMipmap(_t),ue.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let qt=0,ye=I.length;qt<ye;qt++){const le=I[qt],{object:oe,geometry:Ve,material:Et,group:Ke}=le;if(Et.side===ae&&oe.layers.test(G.layers)){const te=Et.side;Et.side=Ze,Et.needsUpdate=!0,Rl(oe,Y,G,Ve,Et,Ke),Et.side=te,Et.needsUpdate=!0,wt=!0}}wt===!0&&(Ft.updateMultisampleRenderTarget(_t),Ft.updateRenderTargetMipmap(_t))}R.setRenderTarget(pt,yt,Rt),R.setClearColor(B,k),Yt!==void 0&&(G.viewport=Yt),R.toneMapping=Bt}function tr(S,I,Y){const G=I.isScene===!0?I.overrideMaterial:null;for(let W=0,_t=S.length;W<_t;W++){const bt=S[W],{object:pt,geometry:yt,group:Rt}=bt;let Bt=bt.material;Bt.allowOverride===!0&&G!==null&&(Bt=G),pt.layers.test(Y.layers)&&Rl(pt,I,Y,yt,Bt,Rt)}}function Rl(S,I,Y,G,W,_t){N!==null&&W.isNodeMaterial&&N.setObject(S,W),S.onBeforeRender(R,I,Y,G,W,_t),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(R,I,Y,G,S,_t),W.transparent===!0&&W.side===ae&&W.forceSinglePass===!1?(W.side=Ze,W.needsUpdate=!0,R.renderBufferDirect(Y,I,G,W,S,_t),W.side=ui,W.needsUpdate=!0,R.renderBufferDirect(Y,I,G,W,S,_t),W.side=ae):R.renderBufferDirect(Y,I,G,W,S,_t),S.onAfterRender(R,I,Y,G,W,_t)}function Cl(S){let I=0;for(const Y of S)Y.texture!==null&&I++;return I}function gs(S,I,Y){I.isScene!==!0&&(I=hn);const G=Nt.get(S),W=E.state.lights,_t=E.state.shadowsArray,bt=W.state.version,pt=j.getParameters(S,W.state,_t,I,Y,E.state.lightProbeGridArray),yt=j.getProgramCacheKey(pt);let Rt=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,G.fog=I.fog;const Bt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=T.get(S.envMap||G.environment,Bt),G.envMapRotation=G.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Rt===void 0&&(S.addEventListener("dispose",ie),Rt=new Map,G.programs=Rt,G.programVariants=new Map);let Yt=Rt.get(yt);if(Yt!==void 0){if(G.currentProgram===Yt&&G.lightsStateVersion===bt)return Ll(S,pt),Yt}else pt.uniforms=j.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,Y,pt),S.onBeforeCompile(pt,R),Yt=j.acquireProgram(pt,yt),Rt.set(yt,Yt),G.uniforms=pt.uniforms;const wt=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=K.uniform),Ll(S,pt),G.needsLights=Ld(S),G.lightsStateVersion=bt,G.needsLights&&(wt.ambientLightColor.value=W.state.ambient,wt.lightProbe.value=W.state.probe,wt.sunLights.value=W.state.sun,wt.sunLightShadows.value=W.state.sunShadow,wt.directionalLights.value=W.state.directional,wt.directionalLightShadows.value=W.state.directionalShadow,wt.spotLights.value=W.state.spot,wt.spotLightShadows.value=W.state.spotShadow,wt.rectAreaLights.value=W.state.rectArea,wt.ltc_1.value=W.state.rectAreaLTC1,wt.ltc_2.value=W.state.rectAreaLTC2,wt.pointLights.value=W.state.point,wt.pointLightShadows.value=W.state.pointShadow,wt.hemisphereLights.value=W.state.hemi,wt.sunShadowMatrix.value=W.state.sunShadowMatrix,wt.sunShadowCascade.value=W.state.sunShadowCascade,wt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,wt.spotLightMatrix.value=W.state.spotLightMatrix,wt.spotLightMap.value=W.state.spotLightMap,wt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=Cl(E.state.lightProbeGridArray),G.currentProgram=Yt,G.uniformsList=null,Yt}function Rd(S,I,Y,G,W){const _t=Nt.get(S),bt=_t.currentProgram.id+","+G+","+W;let pt=_t.programVariants.get(bt);return pt===void 0?(pt=gs(S,I,Y),_t.programVariants.set(bt,pt)):(_t.currentProgram=pt,_t.uniformsList=null,_t.outputColorSpace=G,_t.toneMapping=W),pt}function Pl(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Hr.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Ll(S,I){const Y=Nt.get(S);Y.outputColorSpace=I.outputColorSpace,Y.batching=I.batching,Y.batchingColor=I.batchingColor,Y.instancing=I.instancing,Y.instancingColor=I.instancingColor,Y.instancingMorph=I.instancingMorph,Y.skinning=I.skinning,Y.morphTargets=I.morphTargets,Y.morphNormals=I.morphNormals,Y.morphColors=I.morphColors,Y.morphTargetsCount=I.morphTargetsCount,Y.numClippingPlanes=I.numClippingPlanes,Y.numIntersection=I.numClipIntersection,Y.vertexAlphas=I.vertexAlphas,Y.vertexTangents=I.vertexTangents,Y.toneMapping=I.toneMapping}function Cd(S,I,Y,G,W){I.isScene!==!0&&(I=hn),Ft.resetTextureUnits();const _t=I.fog,bt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,pt=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zt.workingColorSpace,yt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Rt=T.get(G.envMap||bt,yt),Bt=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Yt=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),wt=!!Y.morphAttributes.position,qt=!!Y.morphAttributes.normal,ye=!!Y.morphAttributes.color;let le=Zn;G.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(le=R.toneMapping);const oe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ve=oe!==void 0?oe.length:0,Et=Nt.get(G),Ke=E.state.lights;if(he===!0&&(tn===!0||S!==J)){const me=S===J&&G.id===X;K.setState(G,S,me)}let te=!1,Mi=!1;G.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==Ke.state.version||W.isBatchedMesh&&Et.batching===!1||!W.isBatchedMesh&&Et.batching===!0||W.isBatchedMesh&&Et.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Et.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Et.instancing===!1||!W.isInstancedMesh&&Et.instancing===!0||W.isSkinnedMesh&&Et.skinning===!1||!W.isSkinnedMesh&&Et.skinning===!0||W.isInstancedMesh&&Et.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Et.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Et.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Et.instancingMorph===!1&&W.morphTexture!==null||Et.envMap!==Rt||G.fog===!0&&Et.fog!==_t||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==K.numPlanes||Et.numIntersection!==K.numIntersection)||Et.vertexAlphas!==Bt||Et.vertexTangents!==Yt||Et.morphTargets!==wt||Et.morphNormals!==qt||Et.morphColors!==ye||Et.morphTargetsCount!==Ve||Et.numLightProbeGrids!==Cl(E.state.lightProbeGridArray)?te=!0:(Et.outputColorSpace!==pt||Et.toneMapping!==le)&&(Mi=!0):(te=!0,Et.__version=G.version);let We=Et.currentProgram;(te===!0||Mi===!0)&&(We=Mi===!0?Rd(G,I,W,pt,le):gs(G,I,W),N&&G.isNodeMaterial&&N.onUpdateProgram(G,We,Et));let er=!1,jn=!1,Si=!1;const Kt=We.getUniforms(),ke=Et.uniforms;if(xt.useProgram(We.program)&&(er=!0,jn=!0,Si=!0),G.id!==X&&(X=G.id,jn=!0),er||J!==S){xt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Kt.setValue(O,"projectionMatrix",S.projectionMatrix),Kt.setValue(O,"viewMatrix",S.matrixWorldInverse);const Fe=Kt.map.cameraPosition;Fe!==void 0&&Fe.setValue(O,Pn.setFromMatrixPosition(S.matrixWorld)),fe.logarithmicDepthBuffer&&Kt.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Kt.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,jn=!0,Si=!0)}if(Et.needsLights&&(Ke.state.sunShadowMap.length>0&&Kt.setValue(O,"sunShadowMap",Ke.state.sunShadowMap,Ft),Ke.state.directionalShadowMap.length>0&&Kt.setValue(O,"directionalShadowMap",Ke.state.directionalShadowMap,Ft),Ke.state.spotShadowMap.length>0&&Kt.setValue(O,"spotShadowMap",Ke.state.spotShadowMap,Ft),Ke.state.pointShadowMap.length>0&&Kt.setValue(O,"pointShadowMap",Ke.state.pointShadowMap,Ft)),W.isSkinnedMesh){Kt.setOptional(O,W,"bindMatrix"),Kt.setOptional(O,W,"bindMatrixInverse");const me=W.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),Kt.setValue(O,"boneTexture",me.boneTexture,Ft))}W.isBatchedMesh&&(Kt.setOptional(O,W,"batchingTexture"),Kt.setValue(O,"batchingTexture",W._matricesTexture,Ft),Kt.setOptional(O,W,"batchingIdTexture"),Kt.setValue(O,"batchingIdTexture",W._indirectTexture,Ft),Kt.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&Kt.setValue(O,"batchingColorTexture",W._colorsTexture,Ft));const Sn=Y.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Q.update(W,Y,We),(jn||Et.receiveShadow!==W.receiveShadow)&&(Et.receiveShadow=W.receiveShadow,Kt.setValue(O,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&I.environment!==null&&(ke.envMapIntensity.value=I.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=R_()),jn){if(Kt.setValue(O,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&Pd(ke,Si),_t&&G.fog===!0&&ht.refreshFogUniforms(ke,_t),ht.refreshMaterialUniforms(ke,G,mt,At,E.state.transmissionRenderTarget[S.id]),Et.needsLights&&Et.numLightProbeGrids>0){const me=y;let Fe=0;for(const zn of E.state.lightProbeGridArray)zn.texture!==null&&(me.textures[Fe]=zn.texture,me.min[Fe]=zn.boundingBox.min,me.max[Fe]=zn.boundingBox.max,me.resolution[Fe]=zn.resolution,Fe++);for(const zn in me)me[zn].length=Fe;ke.probesSH.value=me.textures,ke.probesMin.value=me.min,ke.probesMax.value=me.max,ke.probesResolution.value=me.resolution}Hr.upload(O,Pl(Et),ke,Ft)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Hr.upload(O,Pl(Et),ke,Ft),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Kt.setValue(O,"center",W.center),Kt.setValue(O,"modelViewMatrix",W.modelViewMatrix),Kt.setValue(O,"normalMatrix",W.normalMatrix),Kt.setValue(O,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const me=G.uniformsGroups;for(let Fe=0,zn=me.length;Fe<zn;Fe++){const Il=me[Fe];Ct.update(Il,We),Ct.bind(Il,We)}}return We}function Pd(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.sunLights.needsUpdate=I,S.sunLightShadows.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Ld(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,I,Y){const G=Nt.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Nt.get(S.texture).__webglTexture=I,Nt.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const Y=Nt.get(S);Y.__webglFramebuffer=I,Y.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,Y=0){nt=S,q=I,z=Y;let G=null,W=!1,_t=!1;if(S){const pt=Nt.get(S);if(pt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(O.FRAMEBUFFER,pt.__webglFramebuffer),et.copy(S.viewport),St.copy(S.scissor),It=S.scissorTest,xt.viewport(et),xt.scissor(St),xt.setScissorTest(It),X=-1;return}else if(pt.__webglFramebuffer===void 0)Ft.setupRenderTarget(S);else if(pt.__hasExternalTextures)Ft.rebindTextures(S,Nt.get(S.texture).__webglTexture,Nt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Bt=S.depthTexture;if(pt.__boundDepthTexture!==Bt){if(Bt!==null&&Nt.has(Bt)&&(S.width!==Bt.image.width||S.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(S)}}const yt=S.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(_t=!0);const Rt=Nt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Rt[I])?G=Rt[I][Y]:G=Rt[I],W=!0):S.samples>0&&Ft.useMultisampledRTT(S)===!1?G=Nt.get(S).__webglMultisampledFramebuffer:Array.isArray(Rt)?G=Rt[Y]:G=Rt,et.copy(S.viewport),St.copy(S.scissor),It=S.scissorTest}else et.copy(Dt).multiplyScalar(mt).floor(),St.copy($t).multiplyScalar(mt).floor(),It=Xt;if(Y!==0&&(G=F),xt.bindFramebuffer(O.FRAMEBUFFER,G)&&xt.drawBuffers(S,G),xt.viewport(et),xt.scissor(St),xt.setScissorTest(It),W){const pt=Nt.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,Y)}else if(_t){const pt=I;for(let yt=0;yt<S.textures.length;yt++){const Rt=Nt.get(S.textures[yt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+yt,Rt.__webglTexture,Y,pt)}}else if(S!==null&&Y!==0){const pt=Nt.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pt.__webglTexture,Y)}X=-1};function Dl(S){const I=Nt.get(S);return(I.__readFormat!==S.format||I.__readType!==S.type)&&(I.__readFormat=S.format,I.__readType=S.type,I.__formatReadable=fe.textureFormatReadable(S.format),I.__typeReadable=fe.textureTypeReadable(S.type)),I}this.readRenderTargetPixels=function(S,I,Y,G,W,_t,bt,pt=0){if(!(S&&S.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(yt=yt[bt],Array.isArray(yt)&&(yt=yt[0])),yt){xt.bindFramebuffer(O.FRAMEBUFFER,yt);try{const Rt=S.textures[pt],Bt=Rt.format,Yt=Rt.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pt);const wt=Dl(Rt);if(wt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-G&&Y>=0&&Y<=S.height-W&&O.readPixels(I,Y,G,W,lt.convert(Bt),lt.convert(Yt),_t)}finally{const Rt=nt!==null?Nt.get(nt).__webglFramebuffer:null;xt.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(S,I,Y,G,W,_t,bt,pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(yt=yt[bt],Array.isArray(yt)&&(yt=yt[0])),yt)if(I>=0&&I<=S.width-G&&Y>=0&&Y<=S.height-W){xt.bindFramebuffer(O.FRAMEBUFFER,yt);const Rt=S.textures[pt],Bt=Rt.format,Yt=Rt.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pt);const wt=Dl(Rt);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,qt),O.bufferData(O.PIXEL_PACK_BUFFER,_t.byteLength,O.STREAM_READ),O.readPixels(I,Y,G,W,lt.convert(Bt),lt.convert(Yt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const ye=nt!==null?Nt.get(nt).__webglFramebuffer:null;xt.bindFramebuffer(O.FRAMEBUFFER,ye);const le=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await du(O,le,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,qt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_t),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(qt),O.deleteSync(le),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,Y=0){const G=Math.pow(2,-Y),W=Math.floor(S.image.width*G),_t=Math.floor(S.image.height*G),bt=I!==null?I.x:0,pt=I!==null?I.y:0;Ft.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,bt,pt,W,_t),xt.unbindTexture()},this.copyTextureToTexture=function(S,I,Y=null,G=null,W=0,_t=0){let bt,pt,yt,Rt,Bt,Yt,wt,qt,ye;const le=S.isCompressedTexture?S.mipmaps[_t]:S.image;if(Y!==null)bt=Y.max.x-Y.min.x,pt=Y.max.y-Y.min.y,yt=Y.isBox3?Y.max.z-Y.min.z:1,Rt=Y.min.x,Bt=Y.min.y,Yt=Y.isBox3?Y.min.z:0;else{const Kt=Math.pow(2,-W);bt=Math.floor(le.width*Kt),pt=Math.floor(le.height*Kt),S.isDataArrayTexture?yt=le.depth:S.isData3DTexture?yt=Math.floor(le.depth*Kt):yt=1,Rt=0,Bt=0,Yt=0}G!==null?(wt=G.x,qt=G.y,ye=G.z):(wt=0,qt=0,ye=0);const oe=lt.convert(I.format),Ve=lt.convert(I.type);let Et;I.isData3DTexture?(Ft.setTexture3D(I,0),Et=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ft.setTexture2DArray(I,0),Et=O.TEXTURE_2D_ARRAY):(Ft.setTexture2D(I,0),Et=O.TEXTURE_2D),xt.activeTexture(O.TEXTURE0),xt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),xt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),xt.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);const Ke=xt.getParameter(O.UNPACK_ROW_LENGTH),te=xt.getParameter(O.UNPACK_IMAGE_HEIGHT),Mi=xt.getParameter(O.UNPACK_SKIP_PIXELS),We=xt.getParameter(O.UNPACK_SKIP_ROWS),er=xt.getParameter(O.UNPACK_SKIP_IMAGES);xt.pixelStorei(O.UNPACK_ROW_LENGTH,le.width),xt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le.height),xt.pixelStorei(O.UNPACK_SKIP_PIXELS,Rt),xt.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),xt.pixelStorei(O.UNPACK_SKIP_IMAGES,Yt);const jn=S.isDataArrayTexture||S.isData3DTexture,Si=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const Kt=Nt.get(S),ke=Nt.get(I),Sn=Nt.get(Kt.__renderTarget),me=Nt.get(ke.__renderTarget);xt.bindFramebuffer(O.READ_FRAMEBUFFER,Sn.__webglFramebuffer),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Fe=0;Fe<yt;Fe++)jn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.get(S).__webglTexture,W,Yt+Fe),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.get(I).__webglTexture,_t,ye+Fe)),O.blitFramebuffer(Rt,Bt,Rt+bt,Bt+pt,wt,qt,wt+bt,qt+pt,O.DEPTH_BUFFER_BIT,O.NEAREST);xt.bindFramebuffer(O.READ_FRAMEBUFFER,null),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||Nt.has(S)){const Kt=Nt.get(S),ke=Nt.get(I);xt.bindFramebuffer(O.READ_FRAMEBUFFER,P),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let Sn=0;Sn<yt;Sn++)jn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kt.__webglTexture,W,Yt+Sn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Kt.__webglTexture,W),Si?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,_t,ye+Sn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ke.__webglTexture,_t),W!==0?O.blitFramebuffer(Rt,Bt,Rt+bt,Bt+pt,wt,qt,wt+bt,qt+pt,O.COLOR_BUFFER_BIT,O.NEAREST):Si?O.copyTexSubImage3D(Et,_t,wt,qt,ye+Sn,Rt,Bt,bt,pt):O.copyTexSubImage2D(Et,_t,wt,qt,Rt,Bt,bt,pt);xt.bindFramebuffer(O.READ_FRAMEBUFFER,null),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Si?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(Et,_t,wt,qt,ye,bt,pt,yt,oe,Ve,le.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(Et,_t,wt,qt,ye,bt,pt,yt,oe,le.data):O.texSubImage3D(Et,_t,wt,qt,ye,bt,pt,yt,oe,Ve,le):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_t,wt,qt,bt,pt,oe,Ve,le.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_t,wt,qt,le.width,le.height,oe,le.data):O.texSubImage2D(O.TEXTURE_2D,_t,wt,qt,bt,pt,oe,Ve,le);xt.pixelStorei(O.UNPACK_ROW_LENGTH,Ke),xt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,te),xt.pixelStorei(O.UNPACK_SKIP_PIXELS,Mi),xt.pixelStorei(O.UNPACK_SKIP_ROWS,We),xt.pixelStorei(O.UNPACK_SKIP_IMAGES,er),_t===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&O.generateMipmap(Et),xt.unbindTexture()},this.initRenderTarget=function(S){Nt.get(S).__webglFramebuffer===void 0&&Ft.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ft.setTextureCube(S,0):S.isData3DTexture?Ft.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ft.setTexture2DArray(S,0):Ft.setTexture2D(S,0),xt.unbindTexture()},this.resetState=function(){q=0,z=0,nt=null,xt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const xn={scene:"seaCliff",vehicle:"typeC",time:"dusk",weather:"clear"},P_=["scene","vehicle","time","weather"];function L_(){return{scene:xn.scene,vehicle:xn.vehicle,time:xn.time,weather:xn.weather,wind:{x:1,z:.25,strength:1},wetness:0,snow:0,dust:0,clothSag:0,glow:1,exposure:1,fogDensity:0,interiorWarmth:.8,elapsed:0}}class D_{state={...xn};listeners=new Set;get(){return this.state}patch(t){const e=[];for(const s of P_){const r=t[s];r!==void 0&&r!==this.state[s]&&(Object.assign(this.state,{[s]:r}),e.push(s))}if(e.length===0)return e;const n={...this.state};for(const s of this.listeners)s(n,e);return e}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}}const qo=new D_;class I_{tweens=[];to(t,e,n,s){const r=this.tweens.findIndex(o=>o.apply===s);r>=0&&this.tweens.splice(r,1),this.tweens.push({from:t,to:e,apply:s,t:0,dur:Math.max(.01,n)}),s(t)}update(t){for(let e=this.tweens.length-1;e>=0;e--){const n=this.tweens[e];n.t=Math.min(1,n.t+t/n.dur);const s=n.t<.5?2*n.t*n.t:1-Math.pow(-2*n.t+2,2)/2;n.apply(n.from+(n.to-n.from)*s),n.t>=1&&this.tweens.splice(e,1)}}clear(){this.tweens.length=0}}const Zc=new I_;function N_(i,t,e=200,n=300){return new Promise(s=>{const r=document.createElement("div");r.className="scene-veil",r.style.cssText=["position:absolute","inset:0","z-index:60","pointer-events:none","background:#dfe7ef","opacity:0","transition:opacity 200ms ease"].join(";"),i.appendChild(r),requestAnimationFrame(()=>{r.style.opacity="0.92",window.setTimeout(()=>{t(),r.style.opacity="0",window.setTimeout(()=>{r.remove(),s()},n)},e)})})}class U_{current={...xn};busy=!1;pending=!1;host;constructor(t){this.host=t,qo.subscribe(()=>this.sync())}select(t,e){qo.patch({[t]:e})}get state(){return this.current}get switching(){return this.busy}sync(){if(this.busy){this.pending=!0;return}const t=qo.get();(t.scene!==this.current.scene||t.vehicle!==this.current.vehicle)&&(this.busy=!0,this.host.veilHost.style.pointerEvents="none",N_(this.host.veilHost,()=>{this.host.rebuildAll(t.scene,t.vehicle),this.current.scene=t.scene,this.current.vehicle=t.vehicle}).then(()=>{this.busy=!1,this.host.onComboChange(this.current),this.pending&&(this.pending=!1,this.sync())})),t.time!==this.current.time&&(this.host.applyTime(t.time),this.current.time=t.time),t.weather!==this.current.weather&&(this.host.applyWeather(t.weather),this.current.weather=t.weather),this.host.onComboChange(t)}}const no=new Map;function ai(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function O_(i){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d");if(!e)throw new Error("Canvas 2D context unavailable");return{c:t,ctx:e}}function qe(i,t,e){i.fillStyle=e,i.fillRect(0,0,t,t)}function Xn(i,t,e,n,s,r=1,o=3){const a=ai(s);for(let l=0;l<n;l++){i.fillStyle=e[Math.floor(a()*e.length)];const c=r+a()*(o-r);i.fillRect(a()*t,a()*t,c,c*(.6+a()*.8))}}function Pe(i,t,e,n={}){const s=no.get(i);if(s)return s;const{c:r,ctx:o}=O_(t);e(o,t);const a=new Vu(r);n.srgb!==!1&&(a.colorSpace=nn),a.wrapS=a.wrapT=Wr;const l=n.repeat??1;return a.repeat.set(l,l),a.anisotropy=4,a.needsUpdate=!0,no.set(i,a),a}function F_(i=4){const t=`ramp-${i}`,e=no.get(t);if(e)return e;const n=[.35,.58,.8,1,1],s=new Uint8Array(i*4);for(let o=0;o<i;o++){const a=Math.round(255*n[Math.min(o,n.length-1)]);s[o*4]=a,s[o*4+1]=a,s[o*4+2]=a,s[o*4+3]=255}const r=new ol(s,i,1,Tn);return r.minFilter=De,r.magFilter=De,r.generateMipmaps=!1,r.needsUpdate=!0,no.set(t,r),r}function $c(i,t,e,n,s){const r=ai(s);i.strokeStyle=e;for(let o=0;o<n;o++){i.globalAlpha=.15+r()*.3,i.lineWidth=.6+r()*2.2,i.beginPath();const a=r()*t;i.moveTo(a,0),i.bezierCurveTo(a+(r()-.5)*12,t*.33,a+(r()-.5)*12,t*.66,a,t),i.stroke()}i.globalAlpha=1}const Tt={grass:()=>Pe("grass",256,(i,t)=>{qe(i,t,"#7fa869"),Xn(i,t,["#8fba75","#6d995c","#a3c98a","#5f8b52"],1400,17,1,4),$c(i,t,"#d8e8b4",90,23)},{repeat:7}),forestFloor:()=>Pe("forest-floor",256,(i,t)=>{qe(i,t,"#5d7f56"),Xn(i,t,["#6f9464","#4b6b48","#87a473","#3f5c3e"],1200,31,1,4),$c(i,t,"#b9cf97",70,37)},{repeat:7}),gravel:()=>Pe("gravel",256,(i,t)=>{qe(i,t,"#a49d8c");const e=ai(41);for(let n=0;n<900;n++)i.fillStyle=["#b8b0a0","#8e897c","#c7bfae","#7d796e"][Math.floor(e()*4)],i.beginPath(),i.ellipse(e()*t,e()*t,1+e()*3.4,.8+e()*2.2,e()*6.28,0,6.28),i.fill()},{repeat:6}),asphalt:()=>Pe("asphalt",256,(i,t)=>{qe(i,t,"#59616b"),Xn(i,t,["#6a727c","#4c535c","#78818b","#454b54"],1800,53,.6,1.8)},{repeat:5}),concrete:()=>Pe("concrete",256,(i,t)=>{qe(i,t,"#a9a79e"),Xn(i,t,["#b8b6ad","#97958d","#c2c0b7"],700,59,.8,2.4);const e=ai(61);i.strokeStyle="rgba(90,88,82,0.32)",i.lineWidth=.8;for(let n=0;n<12;n++){i.beginPath();let s=e()*t,r=e()*t;i.moveTo(s,r);for(let o=0;o<4;o++)s+=(e()-.5)*40,r+=(e()-.5)*40,i.lineTo(s,r);i.stroke()}},{repeat:4}),wood:()=>Pe("wood",256,(i,t)=>{qe(i,t,"#b98a5c");const e=ai(67);for(let n=0;n<26;n++){i.strokeStyle=`rgba(${90+e()*40},${60+e()*30},${35+e()*20},${.18+e()*.28})`,i.lineWidth=.7+e()*2.4;const s=e()*t;i.beginPath(),i.moveTo(0,s),i.bezierCurveTo(t*.3,s+(e()-.5)*14,t*.7,s+(e()-.5)*14,t,s),i.stroke()}},{repeat:2}),rust:()=>Pe("rust",256,(i,t)=>{qe(i,t,"#9a6b4f");const e=ai(71);for(let n=0;n<260;n++)i.fillStyle=["#7d5138","#b57f55","#6a4636","#c08b5f"][Math.floor(e()*4)],i.globalAlpha=.25+e()*.5,i.beginPath(),i.ellipse(e()*t,e()*t,2+e()*18,2+e()*12,e()*6.28,0,6.28),i.fill();i.globalAlpha=1},{repeat:2}),corrugated:()=>Pe("corrugated",256,(i,t)=>{qe(i,t,"#8c9298");for(let e=0;e<t;e+=16){const n=i.createLinearGradient(e,0,e+16,0);n.addColorStop(0,"#6e757c"),n.addColorStop(.45,"#aeb5ba"),n.addColorStop(1,"#717a80"),i.fillStyle=n,i.fillRect(e,0,16,t)}Xn(i,t,["#8a6144","#a37a52"],120,73,1,3)},{repeat:2}),sand:()=>Pe("sand",256,(i,t)=>{qe(i,t,"#c2a276"),Xn(i,t,["#d0b187","#ad8c62","#d9bd95"],1400,79,.6,2)},{repeat:6}),snow:()=>Pe("snow",256,(i,t)=>{qe(i,t,"#eef3f8"),Xn(i,t,["#ffffff","#dce6f0","#f7fbff"],700,83,1,3)},{repeat:5}),water:()=>Pe("water",256,(i,t)=>{const e=i.createLinearGradient(0,0,0,t);e.addColorStop(0,"#4f79a8"),e.addColorStop(.5,"#6a94bd"),e.addColorStop(1,"#3f6a99"),i.fillStyle=e,i.fillRect(0,0,t,t);const n=ai(89);for(let s=0;s<90;s++){i.strokeStyle=`rgba(220,238,255,${.08+n()*.22})`,i.lineWidth=.7+n()*1.6;const r=n()*t,o=n()*t,a=10+n()*60;i.beginPath(),i.moveTo(o,r),i.quadraticCurveTo(o+a*.5,r-3,o+a,r),i.stroke()}},{repeat:3}),cloth:()=>Pe("cloth",128,(i,t)=>{qe(i,t,"#e8d9b8"),i.strokeStyle="rgba(170,145,110,0.35)",i.lineWidth=1;for(let e=0;e<t;e+=8)i.beginPath(),i.moveTo(e,0),i.lineTo(e,t),i.stroke(),i.beginPath(),i.moveTo(0,e),i.lineTo(t,e),i.stroke()},{repeat:2}),starfield:()=>Pe("stars",512,(i,t)=>{const e=i.createLinearGradient(0,0,0,t);e.addColorStop(0,"#101a35"),e.addColorStop(.6,"#22335c"),e.addColorStop(1,"#3b4b74"),i.fillStyle=e,i.fillRect(0,0,t,t);const n=ai(97);for(let s=0;s<420;s++){const r=.25+n()*.75,o=.4+n()*1.5;i.fillStyle=`rgba(255,252,235,${r})`,i.beginPath(),i.arc(n()*t,n()*t,o,0,6.28),i.fill()}}),glow:()=>Pe("glow",128,(i,t)=>{const e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,250,225,0.95)"),e.addColorStop(.22,"rgba(255,232,175,0.55)"),e.addColorStop(.6,"rgba(255,214,150,0.16)"),e.addColorStop(1,"rgba(255,210,150,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),parkingLines:()=>Pe("parking-lines",512,(i,t)=>{qe(i,t,"#5b636d"),Xn(i,t,["#676f79","#4e555e","#757d87"],2400,101,.5,1.5),i.strokeStyle="rgba(240,240,225,0.86)",i.lineWidth=5;for(let e=1;e<5;e++){const n=e/5*t;i.beginPath(),i.moveTo(n,t*.12),i.lineTo(n,t*.88),i.stroke()}i.beginPath(),i.moveTo(t*.04,t*.12),i.lineTo(t*.96,t*.12),i.stroke()}),highway:()=>Pe("highway",256,(i,t)=>{qe(i,t,"#4c545e"),Xn(i,t,["#5a626c","#434a53"],900,103,.5,1.4),i.fillStyle="rgba(245,238,205,0.75)";for(let e=0;e<t;e+=40)i.fillRect(e,t*.48,22,3)},{repeat:6}),glass:()=>Pe("glass",128,(i,t)=>{qe(i,t,"#a9c9d8");const e=i.createLinearGradient(0,0,t,t);e.addColorStop(0,"rgba(255,255,255,0.55)"),e.addColorStop(.35,"rgba(255,255,255,0.05)"),e.addColorStop(.55,"rgba(255,255,255,0.32)"),e.addColorStop(1,"rgba(190,220,235,0.05)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),sign:(i,t="#fff4d8",e="#3b4a5a")=>Pe(`sign-${i}-${t}-${e}`,256,(n,s)=>{qe(n,s,t),n.strokeStyle=e,n.lineWidth=6,n.strokeRect(10,10,s-20,s-20),n.fillStyle=e,n.font="bold 40px sans-serif",n.textAlign="center",n.textBaseline="middle";const r=i.split(`
`);r.forEach((o,a)=>n.fillText(o,s/2,s/2+(a-(r.length-1)/2)*48))}),sticker:()=>Pe("sticker",128,(i,t)=>{qe(i,t,"#f3c96b"),i.fillStyle="#3e6e8e",i.beginPath(),i.arc(t/2,t/2,42,0,6.28),i.fill(),i.fillStyle="#fff3cf",i.beginPath(),i.arc(t/2,t/2,27,0,6.28),i.fill(),i.fillStyle="#e07a5f",i.font="bold 30px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("GO",t/2,t/2)})},Rs=new C;function mn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Rs.copy(t),Rs[n]=0,Rs.normalize();const c=.5*o/(o+a),h=1-Rs.angleTo(i)/l;return Math.sign(Rs[e])===1?h*c:a/(o+a)+c+c*(1-h)}class gl extends Ui{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new C,c=new C,h=new C(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new C,p=.5/o;for(let m=0,M=0;m<d.length;m+=3,M+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*r,d[m+1]=h.y*Math.sign(l.y)+c.y*r,d[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/g)){case 0:x.set(1,0,0),f[M+0]=mn(x,c,"z","y",r,n),f[M+1]=1-mn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),f[M+0]=1-mn(x,c,"z","y",r,n),f[M+1]=1-mn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),f[M+0]=1-mn(x,c,"x","z",r,t),f[M+1]=mn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[M+0]=1-mn(x,c,"x","z",r,t),f[M+1]=1-mn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[M+0]=1-mn(x,c,"x","y",r,t),f[M+1]=1-mn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),f[M+0]=mn(x,c,"x","y",r,t),f[M+1]=1-mn(x,c,"y","x",r,e);break}}static fromJSON(t){return new gl(t.width,t.height,t.depth,t.segments,t.radius)}}const Kc=new Map;function oi(i,t){let e=Kc.get(i);return e||(e=t(),Kc.set(i,e)),e}const tt={box:(i,t,e)=>oi(`b|${i}|${t}|${e}`,()=>new Ui(i,t,e)),rounded:(i,t,e,n=.08)=>oi(`r|${i}|${t}|${e}|${n}`,()=>new gl(i,t,e,2,n)),cyl:(i,t,e,n=12,s=!1)=>oi(`c|${i}|${t}|${e}|${n}|${s}`,()=>new oo(i,t,e,n,1,s)),sphere:(i,t=12)=>oi(`s|${i}|${t}`,()=>new ao(i,t,Math.max(6,Math.floor(t*.7)))),cone:(i,t,e=10)=>oi(`k|${i}|${t}|${e}`,()=>new cl(i,t,e)),torus:(i,t,e=14)=>oi(`t|${i}|${t}|${e}`,()=>new pl(i,t,6,e)),plane:(i,t)=>oi(`p|${i}|${t}`,()=>new Kn(i,t))};function B_(i,t=12){const e=`l|${t}|${i.map(n=>n.join(",")).join(";")}`;return oi(e,()=>new ul(i.map(([n,s])=>new ct(n,s)),t))}function rt(i,t,e=0,n=0,s=0){const r=new ne(i,t);return r.position.set(e,n,s),i.boundingSphere||i.computeBoundingSphere(),r.castShadow=(i.boundingSphere?.radius??1)>=.14,r.receiveShadow=!0,r}function z_(i,t=0){i.updateMatrixWorld(!0);const e=new Jn().setFromObject(i);Number.isFinite(e.min.y)&&(i.position.y+=t-e.min.y)}const ls={uWetness:{value:0},uSnow:{value:0},uDust:{value:0}},Jc=new Map;function k_(i){i.onBeforeCompile=t=>{t.uniforms.uWetness=ls.uWetness,t.uniforms.uSnow=ls.uSnow,t.uniforms.uDust=ls.uDust,t.fragmentShader=t.fragmentShader.replace("void main() {",`uniform float uWetness;
uniform float uSnow;
uniform float uDust;
void main() {`).replace("#include <dithering_fragment>",`
        vec3 wetCol = gl_FragColor.rgb * vec3(0.78, 0.86, 0.98);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, wetCol, uWetness * 0.72);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(1.0, 1.02, 1.08) + vec3(0.010, 0.014, 0.024), uSnow * 0.30);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(0.88, 0.84, 0.76) + vec3(0.018, 0.014, 0.006), uDust * 0.60);
        #include <dithering_fragment>`)}}function Pi(i,t={}){const e=t.ramp??4,n=[String(i),e,String(t.emissive??""),t.emissiveIntensity??0,t.map?.uuid??"",t.transparent?1:0,t.opacity??1,t.side??0].join("|"),s=Jc.get(n);if(s)return s;const r=new Tf({color:i,gradientMap:F_(e),emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,map:t.map??null,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??ui});return k_(r),Jc.set(n,r),r}const Qc=new Map;function Ge(i=.24,t=12376294){const e=`${i}|${t}`;let n=Qc.get(e);return n||(n=new Ae({color:t,transparent:!0,opacity:i,depthWrite:!1,side:ae,map:Tt.glass()}),n.polygonOffset=!0,n.polygonOffsetFactor=-1,Qc.set(e,n)),n}function re(i,t=1){return new Ae({color:i,transparent:t<1,opacity:t,side:ae,toneMapped:!1})}function de(i,t=1.2,e=.75){const n=new Qr({map:Tt.glow(),color:i,transparent:!0,opacity:e,depthWrite:!1,blending:Gs,toneMapped:!1}),s=new za(n);return s.scale.set(t,t,1),s.userData.dynamic=!0,s.userData.noBounds=!0,s}const Ks=[];function He(i,t,e,n={}){const s=new Kn(i,t,10,6);n.vertical||s.rotateX(-Math.PI/2);const r=Pi(e,{map:Tt.cloth(),side:ae}),o=new ne(s,r);o.castShadow=!0,o.receiveShadow=!0,o.userData.dynamic=!0,o.userData.noOutline=!0,o.userData.noMerge=!0,o.name=`cloth-${n.key??"plain"}`;const a=s.getAttribute("position"),l=new Float32Array(a.array);return Ks.push({mesh:o,base:l,w:i,d:t,axis:n.vertical?"z":"y",amplitude:Math.min(.16,n.amplitude??.06),speed:n.speed??1,phase:Ks.length*.83}),o}function G_(i,t){const e=t.wind.strength,n=t.wind.x,s=t.wind.z;for(const r of Ks){const o=r.mesh.geometry,a=o.getAttribute("position"),l=t.elapsed*r.speed;for(let c=0;c<a.count;c++){const h=r.base[c*3],d=r.base[c*3+1],u=r.base[c*3+2],f=h/Math.max(.001,r.w),g=u/Math.max(.001,r.d),x=Math.sin(l*1.35+f*3.2+r.phase)*.6+Math.sin(l*.7+g*2.4+r.phase*1.7)*.4,p=r.amplitude*(.45+e*.55),m=Math.max(0,1-f*f*2-g*g*2),M=t.clothSag*.14*m,w=x*p-M;r.axis==="y"?a.setXYZ(c,h+n*w*.25,d+w,u+s*w*.25):a.setXYZ(c,h,d-M,u+w)}a.needsUpdate=!0,o.computeVertexNormals()}}function H_(){for(const i of Ks)i.mesh.geometry.dispose();Ks.length=0}function Te(i,t,e,n="instances"){const s=new zu(i,t,Math.max(1,e.length)),r=new Se;return e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.rotY??0,0),r.scale.set((o.scaleX??1)*(o.scale??1),(o.scaleY??1)*(o.scale??1),(o.scaleZ??1)*(o.scale??1)),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!0,s.receiveShadow=!0,s.name=n,s.count=e.length,s}function je(i,t,e,n,s,r=1,o=0){let a=r>>>0;const l=()=>(a=a*1664525+1013904223>>>0,a/4294967296),c=[];for(let h=0;h<i;h++)c.push({x:t+l()*(e-t),y:o*l(),z:n+l()*(s-n),rotY:l()*Math.PI*2,scale:.72+l()*.55});return c}const V_={key:"highwaySA",top:6318194,topTexture:"asphalt",side:8094604,strata:5660264,rim:9278878,ink:2831686};let Ti=null;function ze(i,t,e,n){t.layout.place(n,e),i.add(n)}function jc(i){return i.userData.noBounds=!0,i.userData.noOutline=!0,i.userData.dynamic=!0,i}const W_={id:"highwaySA",label:"高速路服务区",icon:"service",palette:V_,build(i){const t=i.lib,e=new Me;e.name="highwaySA-scene";const n=re(16773308,.9);n.transparent=!0,n.depthWrite=!1;const s=de(16767124,2.2,0),r=s.material,o={traffic:[],vendingStripMat:n,signGlowMat:r,dawnStoreBoard:t.group("dawn-store-board"),deliveryCart:t.group("delivery-cart"),treeSways:[],storeLightLevel:0,signLevel:0,vendingLevel:0,trafficLevel:0,dustLevel:0,dawnStore:0,eveningTraffic:0,weatherWet:0,weatherFog:0,trafficHx:0,trafficHalf:7};{const a=t.group("gas-canopy");a.add(t.box(3.2,.28,2.1,15265004,0,3.5,0)),a.add(t.box(3.3,.12,2.2,12866122,0,3.66,0)),a.add(t.box(3.3,.05,2.22,4156310,0,3.52,0));for(const l of[-1.4,1.4])for(const c of[-.85,.85])a.add(t.pole(.07,3.5,12173508,l,0,c));for(const l of[-.8,.8]){const c=t.gasPump();c.position.set(l,0,0),a.add(c)}for(const l of[-.9,.9]){const c=rt(tt.box(3,.06,.05),re(16773832),0,3.4,l);a.add(c)}for(let l=0;l<5;l++){const c=He(.2,.26,l%2?15254108:14181978,{amplitude:.08,speed:2,vertical:!0,key:"pennant"});c.position.set(-1+l*.5,3.05,1),a.add(c)}ze(e,i,"gasCanopy",a)}{const a=t.group("charger");a.add(t.box(.5,.12,.4,7173240,0,0,0)),a.add(t.box(.36,1.35,.28,14870758,0,.12,0));const l=rt(tt.box(.24,.3,.02),re(8378048),0,1.08,.15);a.add(l),a.add(t.box(.26,.05,.02,3752778,0,.86,.15)),a.add(t.cyl(.05,.05,.1,7319162,0,.6,.15,8));const c=new Rn([new C(.18,.9,0),new C(.34,.6,.1),new C(.3,.28,.18),new C(.22,.2,.2)]);a.add(new ne(new Mn(c,14,.02,5,!1),t.mat(4147019))),a.add(t.box(.08,.16,.08,4871258,.2,.14,.2)),ze(e,i,"charger",a)}{const a=t.group("vending-prop"),l=t.vending(.9,1.95,.64);a.add(l);const c=rt(tt.box(.66,.07,.02),n,0,1.78,.35);a.add(c),a.add(t.box(.3,.16,.04,3884880,0,.34,.35)),ze(e,i,"vending",a),i.decor.bind("vendingLight",h=>{o.vendingLevel=h})}{const a=t.group("flagpole-prop");a.add(t.cyl(.18,.22,.12,10134184,0,0,0,10)),a.add(t.flag(2.9,14711391));const l=t.flag(2.9,7314357);l.position.set(.28,0,.1),l.scale.setScalar(.86),a.add(l),ze(e,i,"flagpole",a)}{const a=t.group("bench-bins"),l=t.bench(1.25,11043675);l.position.set(-.35,0,-.1),a.add(l);const c=[[.55,5211832],[.82,6265443],[1.09,12872274]];for(const[h,d]of c)a.add(t.cyl(.13,.14,.5,d,h,0,.05,10)),a.add(t.cyl(.15,.15,.05,4147019,h,.5,.05,10)),a.add(t.box(.1,.12,.02,15789280,h,.3,.19));ze(e,i,"benchBins",a)}{const a=t.group("wash-basin");a.add(t.sink()),a.add(t.box(.7,.06,.5,11838860,0,.7,0)),a.add(t.box(.4,.5,.02,12376294,0,1.15,-.24)),a.add(t.cyl(.02,.02,.18,10135723,0,.72,-.12,8)),ze(e,i,"washBasin",a)}{const a=t.group("walkway");a.add(t.box(3,.14,1.3,14081240,0,2.25,0)),a.add(t.box(3.1,.06,1.4,9414573,0,2.33,0));for(const l of[-1.35,1.35])for(const c of[-.55,.55])a.add(t.pole(.05,2.2,10134182,l,0,c));a.add(t.plane(2.9,1.2,12172726,.02,Tt.concrete()));for(const l of[-.9,.9]){const c=rt(tt.box(.9,.04,.04),re(16773316),l,2.18,.5);a.add(c)}ze(e,i,"walkway",a)}{const a=t.group("planter");a.add(t.box(1.6,.28,.7,10133141,0,0,0)),a.add(t.plane(1.45,.56,7035458,.29));for(const l of[-.5,0,.5]){const c=t.shrub(.22,l<0?7314011:8563818);c.position.set(l,.28,0),a.add(c)}a.add(Te(tt.cone(.035,.24,5),t.mat(10142330),je(12,-.65,.65,-.22,.22,13,0),"planter-grass")),ze(e,i,"planter",a)}{const a=t.group("store-prop");a.add(t.store(3,2.6,1.8,"服务区"));const l=rt(tt.box(.66,.3,.06),t.mat(16774360,Tt.sign("OPEN")),0,2.15,.98);l.visible=!1,a.add(l),o.dawnStoreBoard=l;const c=o.deliveryCart;c.add(t.box(.5,.06,.36,11569759,0,.34,0));for(const d of[-.2,.2])for(const u of[-.14,.14]){const f=t.cyl(.06,.06,.04,4147019,d,.06,u,8);f.rotation.x=Math.PI/2,c.add(f)}c.add(t.box(.26,.24,.26,14203002,-.1,.49,0)),c.position.set(1.05,0,1.15),c.visible=!1,a.add(c),ze(e,i,"store",a);const h=i.layout.byId("store");jc(s),s.position.set(h?.x??0,2.1,(h?.z??0)+1.1),e.add(s),i.decor.bind("signLight",d=>{o.signLevel=d}),i.decor.bind("storeLight",d=>{o.storeLightLevel=d}),i.decor.registerSpawn("dawnStore",d=>{o.dawnStore=d?1:0,o.dawnStoreBoard.visible=d,o.deliveryCart.visible=d})}{const a=t.group("dining-window");a.add(t.box(2,2.1,.16,14209730,0,0,0));const l=rt(tt.box(1.7,1.5,.04),Ge(.34,12376294),0,1.2,.1);a.add(l);const c=re(16766874,.35);c.depthWrite=!1;const h=rt(tt.box(1.6,1.4,.02),c,0,1.2,.02);a.add(h);for(const d of[-.5,.5])a.add(t.box(.05,1.5,.06,9082011,d,1.2,.13));a.add(t.box(1.8,.05,.06,9082011,0,1.2,.13));for(const d of[-.6,.3])a.add(t.box(.3,.06,.26,9071176,d,.8,-.02)),a.add(t.box(.06,.4,.06,7304570,d,.55,-.02));ze(e,i,"diningWindow",a)}{const a=t.group("road-sign");for(const c of[-.9,.9])a.add(t.pole(.06,2.9,9081494,c,0,0));a.add(t.box(2,.08,.08,9081494,0,2.9,0));const l=rt(tt.box(1.7,.9,.08),t.mat(4160090,Tt.sign(`EXIT
出口 →`)),0,2.25,.06);a.add(l),a.add(t.sign(`服务区
500m`,.6,.44,7173240,1.5)),ze(e,i,"roadSign",a)}{const a=t.group("street-trees"),l=je(4,-1.3,1.3,-.3,.3,17,0),c=[],h=[],d=[];for(const g of l){const x=g.scale??1,p=3.2*x,m=p*.62;c.push({x:g.x,y:m/2,z:g.z,scaleX:x,scaleY:m,scaleZ:x}),h.push({x:g.x,y:p*.86,z:g.z,scale:p*.26,rotY:g.rotY??0}),d.push({x:g.x+p*.14,y:p*.91,z:g.z+p*.08,scale:p*.19})}a.add(Te(tt.cyl(.11,.15,1,8),t.mat(8020807),c,"street-trunks"));const u=Te(tt.sphere(1,10),t.mat(7183198),h,"street-crowns-a"),f=Te(tt.sphere(1,10),t.mat(8695404),d,"street-crowns-b");a.add(u,f),o.treeSways.push({obj:u,base:0,phase:.4}),o.treeSways.push({obj:f,base:0,phase:1.7}),ze(e,i,"streetTrees",a)}{const a=t.group("parking-lines");a.add(t.plane(3,1.4,5989229,.014,Tt.parkingLines())),ze(e,i,"parkingLines",a)}{const a=t.group("guardrail");for(let l=0;l<5;l++)a.add(t.pole(.05,.85,10134182,-.9+l*.45,0,0));for(const l of[.42,.7])a.add(t.box(2,.1,.06,12173508,0,l,0));ze(e,i,"guardrail",a)}ze(e,i,"lampPost",t.lamp(3.4,7173240,16769448,"campLamp"));{const a=t.group("sign-board");a.add(t.pole(.05,1.5,9081494,0,0,0)),a.add(t.box(.9,1,.12,3752778,0,1.8,0));const l=rt(tt.box(.8,.9,.02),t.mat(16774360,Tt.sign(`P
服务区`)),0,1.8,.07);a.add(l);const c=de(16767124,1.1,0);c.position.set(0,1.8,.16),a.add(c);const h=c.material;i.decor.bind("signLight",d=>{h.opacity=d*.7}),ze(e,i,"signBoard",a)}{const a=t.group("highway");a.add(t.plane(15.2,1,5989229,.02,Tt.highway()));for(const f of[-1,1])a.add(t.box(15.2,.04,.05,14209720,0,.03,f*.46));ze(e,i,"highway",a);const l=i.layout.byId("highway"),c=l?.x??0,h=l?.z??8.5,d=(l?.w??15)*.46,u=d*2;o.trafficHx=c,o.trafficHalf=d;for(let f=0;f<26;f++){const g=f%2===0,x=new Ae({color:g?16774096:16738906,transparent:!0,opacity:0,side:ae,depthWrite:!1,blending:Gs}),p=rt(tt.plane(.26,.055),x,c-d+f/26*u,.08,h+(g?.2:-.2));p.rotation.x=-Math.PI/2,jc(p),e.add(p),o.traffic.push({mesh:p,mat:x,baseX:c-d,z:h,speed:g?1.5:-1.2,phase:f*.37})}i.decor.bind("trafficLight",f=>{o.trafficLevel=f}),i.decor.bind("dustMote",f=>{o.dustLevel=f})}{const a=t.group("roadside");a.add(t.plane(15.5,1,9077621,.014,Tt.gravel()));const l=Te(tt.box(.06,.22,.06),t.mat(11054244),Array.from({length:16},(c,h)=>({x:-7.2+h*.96,y:.11,z:.3})),"roadside-posts");a.add(l),ze(e,i,"roadside",a)}return i.decor.registerSpawn("eveningTraffic",a=>{o.eveningTraffic=a?1:0}),Ti=o,e},onTimeChange(i,t,e){i==="dawn"?(e.decor.spawn("dawnStore"),e.decor.despawn("eveningTraffic")):i==="dusk"||i==="night"?(e.decor.despawn("dawnStore"),e.decor.spawn("eveningTraffic")):(e.decor.despawn("dawnStore"),e.decor.despawn("eveningTraffic"))},onWeatherChange(i,t){Ti&&(Ti.weatherWet=i==="rain"?1:0,Ti.weatherFog=i==="fog"?1:0)},update(i,t,e){if(!Ti)return;const n=Ti,s=e.wind.strength,r=n.trafficHx,o=n.trafficHalf,a=o*2,l=1-n.weatherFog*.35;for(const c of n.traffic){const h=((t*c.speed*.1*l+c.phase)%1+1)%1;c.mesh.position.x=r-o+h*a;const d=n.trafficLevel*.7+n.eveningTraffic*.3+n.dawnStore*.1;c.mat.opacity=d*(.6+.4*Math.sin(t*3+c.phase))*(1+n.weatherWet*.45)}n.signGlowMat.opacity=(n.signLevel*.7+n.dawnStore*.3)*(.72+.28*Math.sin(t*2.1)),n.vendingStripMat.opacity=n.vendingLevel*(.86+.14*Math.sin(t*1.6));for(const c of n.treeSways)c.obj.rotation.z=c.base+Math.sin(t*.8+c.phase)*.022*(.5+s*.5);n.deliveryCart.visible&&(n.deliveryCart.rotation.y=Math.sin(t*.6)*.03)},dispose(){Ti=null}},X_=Object.freeze(Object.defineProperty({__proto__:null,default:W_},Symbol.toStringTag,{value:"Module"})),Y_={key:"pineForest",top:6060622,topTexture:"forestFloor",side:7035974,strata:5260852,rim:8613711,ink:2766377};let ri=null;function _e(i,t,e,n){t.layout.place(n,e),i.add(n)}function Cs(i){return i.userData.noBounds=!0,i.userData.noOutline=!0,i.userData.dynamic=!0,i}const q_={id:"pineForest",label:"山间松林营地",icon:"forest",palette:Y_,build(i){const t=i.lib,e=new Me;e.name="pineForest-scene";const n={sways:[],dapples:[],streamTex:Tt.water().clone(),leaves:[],squirrel:t.group("squirrel"),squirrelTimer:7,squirrelActive:!1,hammock:t.group("hammock-prop"),flames:[],sparks:[],mist:[],mistMat:new Ae({map:Tt.glow(),color:15134954,transparent:!0,opacity:0,depthWrite:!1,side:ae}),fireLevel:0,emberLevel:0,dustLevel:0,mistBoost:0,dappleBoost:0,golden:0,weatherWet:0,weatherFog:0};n.streamTex.needsUpdate=!0,n.streamTex.repeat.set(6,1);const s=(r,o,a)=>{const l=t.group("pine-stand"),c=je(r,-.1,.1,-.75,.75,o,0),h=[],d=[],u=[];for(const x of c){const p=x.scale??1,m=p*a*.42;h.push({x:x.x,y:m/2,z:x.z,scaleX:p,scaleY:m,scaleZ:p});for(let M=0;M<4;M++){const w=M/4,y=(1-w*.62)*a*.13*p,A=a*.34*p,E=a*.3*p+w*a*.19*p,_={x:x.x,y:E+A/2,z:x.z,scaleX:y,scaleY:A,scaleZ:y,rotY:(x.rotY??0)+M*.5};(M%2?u:d).push(_)}}l.add(Te(tt.cyl(.13,.18,1,7),t.mat(7032633),h,"pine-trunks"));const f=Te(tt.cone(1,1,8),t.mat(3958343),d,"pine-canopy-dark"),g=Te(tt.cone(1,1,8),t.mat(5406553),u,"pine-canopy-light");return l.add(f,g),n.sways.push({obj:f,base:0,phase:o*.8,amp:.02}),n.sways.push({obj:g,base:0,phase:o*.8+1.3,amp:.02}),l};{const r=n.hammock;for(const a of[-.92,.92]){const l=t.pole(.09,1.7,7032633,a,0,0),c=t.cone(.34,.7,4550476,a,1.35,0);r.add(l,c)}const o=He(1.7,.62,14535072,{amplitude:.09,key:"hammock"});o.position.y=.92,r.add(o);for(const a of[-1,1]){const l=new Rn([new C(a*.92,1.6,0),new C(a*.78,1.24,.06),new C(a*.78,.98,.28)]);r.add(new ne(new Mn(l,12,.014,4,!1),t.mat(14207396)))}_e(e,i,"hammock",r)}{const r=t.group("campfire");for(let h=0;h<8;h++){const d=h/8*Math.PI*2,u=t.rock(.13,9211782);u.position.set(Math.cos(d)*.34,0,Math.sin(d)*.34),r.add(u)}for(let h=0;h<3;h++){const d=t.cyl(.055,.055,.46,8017208,0,.1+h*.05,0,7);d.rotation.z=Math.PI/2,d.rotation.y=h*1.05,r.add(d)}for(let h=0;h<3;h++){const d=re(h===0?16765034:16747068,.92),u=rt(tt.cone(.16-h*.03,.42-h*.08,6),d,(h-1)*.07,.2,0);u.userData.dynamic=!0,u.userData.noOutline=!0,r.add(u),n.flames.push({mesh:u,mat:d,phase:h*1.7})}const o=de(16751180,.75,0);o.position.set(0,.42,0),r.add(o),_e(e,i,"campfire",r);const a=i.layout.byId("campfire"),l=a?.x??0,c=a?.z??0;for(let h=0;h<6;h++){const d=de(16757852,.14,0),u=d.material;Cs(d),d.position.set(l+(h-3)*.06,.4,c+h%2*.05),e.add(d),n.sparks.push({sprite:d,mat:u,x:l+(h-3)*.06,z:c,phase:h*.63})}i.decor.bind("fire",h=>{n.fireLevel=h}),i.decor.bind("ember",h=>{n.emberLevel=h})}{const r=t.group("log-seats");for(let o=0;o<5;o++){const a=-.5+o/4*Math.PI*1.15,l=t.cyl(.14,.14,.52,8215612,Math.cos(a)*.62,.14,Math.sin(a)*.62,8);l.rotation.z=Math.PI/2,l.rotation.y=-a;const c=t.cyl(.14,.14,.02,11569759,Math.cos(a)*.62,.14,Math.sin(a)*.62,8);c.rotation.z=Math.PI/2,c.position.x+=Math.sin(a)*.26,r.add(l,c)}_e(e,i,"logSeats",r)}{const r=t.group("deck"),o=Te(tt.box(.19,.09,1.7),t.mat(11569759,Tt.wood()),Array.from({length:10},(a,l)=>({x:-.86+l*.19,y:.045,z:0})),"deck-boards");r.add(o);for(const a of[-1,1])r.add(t.box(1.95,.1,.07,9071173,0,0,a*.87));_e(e,i,"deck",r)}{const r=t.group("firewood");for(let o=0;o<3;o++)for(let a=0;a<4-o;a++){const l=t.cyl(.07,.07,.62,9069120,-.28+a*.18+o*.09,.09+o*.15,0,7);l.rotation.x=Math.PI/2,r.add(l)}for(const o of[-.42,.42])r.add(t.pole(.045,.58,6243890,o,0,0));_e(e,i,"firewood",r)}{const r=t.group("laundry");for(const l of[-.78,.78])r.add(t.pole(.04,1.55,9073752,l,0,0));const o=new Rn([new C(-.78,1.45,0),new C(0,1.34,0),new C(.78,1.45,0)]);r.add(new ne(new Mn(o,16,.012,4,!1),t.mat(14207396)));const a=[[-.42,15261124],[.05,11125448],[.5,14267530]];for(const[l,c]of a){const h=He(.34,.5,c,{amplitude:.09,speed:1.7,vertical:!0,key:"laundry"});h.position.set(l,1.08,0),r.add(h)}_e(e,i,"laundry",r)}{const r=t.group("water-bucket");r.add(t.cyl(.17,.19,.42,9071173,0,0,0,12));for(const h of[.06,.36])r.add(t.cyl(.185,.185,.035,6249038,0,h,0,12));const o=new Rn([new C(-.17,.4,0),new C(0,.62,0),new C(.17,.4,0)]);r.add(new ne(new Mn(o,12,.014,4,!1),t.mat(7304570)));const a=t.group("dipper"),l=t.sphere(.12,13084788,0,0,0);l.scale.y=.55,a.add(l);const c=t.cyl(.018,.018,.3,11110495,.18,.02,0,6);c.rotation.z=.5,a.add(c),a.position.set(.28,.06,.14),r.add(a),_e(e,i,"waterBucket",r)}_e(e,i,"woodSteps",t.stairs(1.25,1.2,3,10123858));{const r=t.group("trail-sign");r.add(t.sign(`山涧
营地`,.92,.62,8018492,1.35));const o=[[.5,1.15,9071432],[-.5,1,9071432]];for(const[a,l,c]of o){const h=t.box(.5,.14,.06,c,.12,l,a*.2);r.add(h);const d=t.cone(.1,.16,c,.4,l-.01,a*.2);d.rotation.z=-Math.PI/2,r.add(d)}_e(e,i,"trailSign",r)}{const r=t.group("undergrowth"),o=Te(tt.cone(.05,.42,5),t.mat(7314019),je(16,-.6,.6,-.4,.4,12,0),"fronds");r.add(o);for(const a of je(6,-.55,.55,-.35,.35,19,0)){const l=t.sphere(.14*(a.scale??1),6193737,a.x,0,a.z);l.scale.y=.35,r.add(l)}for(const[a,l]of[[-.3,.15],[.18,-.2],[.4,.25]]){r.add(t.cyl(.03,.035,.16,15787727,a,0,l,7));const c=t.sphere(.1,12933700,a,.16,l);c.scale.y=.55,r.add(c);for(const[h,d]of[[.03,.02],[-.03,-.02]]){const u=t.sphere(.02,15985366,a+h,.22,l+d);r.add(u)}}_e(e,i,"undergrowth",r)}{const r=t.group("stream"),o=new Ae({map:n.streamTex,transparent:!0,opacity:.92,side:ae,depthWrite:!1}),a=rt(tt.plane(9.4,1.9),o,0,.02,0);a.rotation.x=-Math.PI/2,a.userData.noOutline=!0,r.add(a);for(const f of je(9,-4.3,4.3,-.85,.85,23,0)){if(Math.abs(f.z)<.55)continue;const g=t.rock(.16*(f.scale??1),9277574);g.position.set(f.x,0,f.z),r.add(g)}const l=Te(tt.cone(.035,.5,5),t.mat(9087082),je(18,-4.4,4.4,.6,.95,29,0),"reeds");r.add(l),_e(e,i,"stream",r);const c=i.layout.byId("stream"),h=c?.x??0,d=c?.z??0,u=(c?.w??8)*.45;for(let f=0;f<7;f++){const g=rt(tt.plane(.16,.09),new Ae({color:f%2?14262874:12153919,side:ae}),h-u+f/7*u*2,.06,d+(f%3-1)*.3);g.rotation.x=-Math.PI/2,Cs(g),e.add(g),n.leaves.push({mesh:g,baseX:g.position.x,baseZ:g.position.z,phase:f*.9})}}{const r=t.group("footbridge");for(let o=0;o<9;o++){const a=o/8,l=.18+Math.sin(a*Math.PI)*.12;r.add(t.box(.16,.07,.9,10517586,-.72+o*.18,l,0,Tt.wood()))}for(const o of[-.8,.8]){for(const l of[-.42,.42])r.add(t.pole(.035,.55,8018492,o,.2,l));const a=new Rn([new C(o,.7,-.42),new C(o,.78,0),new C(o,.7,.42)]);r.add(new ne(new Mn(a,12,.02,4,!1),t.mat(9071173)))}_e(e,i,"footbridge",r)}{const r=t.group("birdhouse");r.add(t.pole(.11,1.05,7032633,0,0,0));const o=t.box(.32,.3,.3,13215863,0,1.02,0);r.add(o);const a=t.cone(.26,.2,9068354,0,1.3,0);a.rotation.y=Math.PI/4,r.add(a);const l=t.cyl(.065,.065,.02,3813158,0,1.05,.16,10);l.rotation.x=Math.PI/2,r.add(l),r.add(t.pole(.012,.12,7032633,0,.98,.2)),_e(e,i,"birdhouse",r)}{const r=t.group("bear-box");for(const a of[-.26,.26])r.add(t.box(.07,.18,.5,7173232,a,0,0));r.add(t.box(.72,.48,.52,8226944,0,.18,0)),r.add(t.box(.76,.06,.56,6055264,0,.66,0));for(const a of[-.3,.3])r.add(t.box(.05,.5,.56,5857629,a,.18,0));const o=t.box(.1,.14,.04,13214282,0,.4,.28);r.add(o);for(const a of[-.28,.28])for(const l of[.24,.6])r.add(t.sphere(.02,4212555,a,l,.27));_e(e,i,"bearBox",r)}{const r=t.group("fern-patch");r.add(Te(tt.cone(.055,.46,5),t.mat(6788698),je(26,-1,1,-.55,.55,31,0),"ferns")),r.add(Te(tt.cone(.04,.32,5),t.mat(8824938),je(18,-1,1,-.55,.55,37,0),"ferns2"));for(const o of je(8,-.95,.95,-.5,.5,41,0)){const a=t.sphere(.18*(o.scale??1),5208645,o.x,0,o.z);a.scale.y=.3,r.add(a)}_e(e,i,"fernPatch",r)}{const r=t.group("stone-lantern");r.add(t.cyl(.2,.24,.12,9408906,0,0,0,8)),r.add(t.cyl(.08,.1,.4,10132628,0,.12,0,8)),r.add(t.cyl(.2,.18,.06,9408906,0,.52,0,8)),r.add(t.box(.3,.26,.3,10987679,0,.58,0));const o=rt(tt.box(.2,.16,.02),re(16767392),0,.68,.16);r.add(o);const a=de(16765850,.6,0);a.position.set(0,.68,.2),r.add(a);const l=o.material,c=a.material;i.decor.bind("campLamp",d=>{l.opacity=.25+d*.75,c.opacity=d*.7});const h=t.cone(.28,.18,8553854,0,.84,0);h.rotation.y=Math.PI/4,r.add(h),r.add(t.sphere(.06,10132628,0,1.02,0)),_e(e,i,"stoneLantern",r)}_e(e,i,"pineLeft",s(3,11,5.2)),_e(e,i,"pineRight",s(3,23,5.4)),_e(e,i,"pineCornerL",s(3,31,4.6)),_e(e,i,"pineCornerR",s(3,43,4.8));{const r=t.group("mountains"),o=[[-.1,2.5,8228998],[.5,3,7308667],[1.1,2.2,6453872]];for(let a=0;a<o.length;a++){const[l,c,h]=o[a];for(let d=0;d<6;d++){const u=rt(tt.cone(1.15+d%3*.35,c*(.6+d%3*.2),4),t.mat(h),-6.4+d*2.6,0,l);u.rotation.y=Math.PI/4,r.add(u)}}for(let a=0;a<4;a++){const l=rt(tt.plane(3.2,.42),new Ae({color:15397610,transparent:!0,opacity:.32,side:ae,depthWrite:!1}),-5+a*3.4,1.7+a%2*.5,.4);l.userData.noOutline=!0,r.add(l)}_e(e,i,"mountains",r)}{const r=t.group("forest-floor");r.add(t.plane(15.5,1,5337162,.014,Tt.forestFloor())),r.add(Te(tt.cone(.04,.28,5),t.mat(7314011),je(30,-7.4,7.4,-.4,.4,53,0),"floor-grass")),_e(e,i,"forestFloor",r)}{const o=i.layout.byId("deck")?.z??6.3;for(let a=0;a<7;a++){const l=de(16773836,.9+a%3*.25,0),c=l.material;Cs(l),l.position.set(-4.4+a*1.45,.06,o+(a%2?.5:-.5)),e.add(l),n.dapples.push({sprite:l,mat:c,baseX:l.position.x,baseZ:l.position.z,phase:a*1.1})}i.decor.bind("dustMote",a=>{n.dustLevel=a})}for(let r=0;r<3;r++){const o=rt(tt.plane(15,3.2),n.mistMat,0,1.4+r*.5,-6+r*1.6);Cs(o),e.add(o),n.mist.push({mesh:o,baseX:0,phase:r*1.7})}{const r=n.squirrel,o=t.sphere(.11,11102268,0,.1,0);o.scale.set(1.3,.9,.9),r.add(o),r.add(t.sphere(.07,12089928,-.14,.2,0));const a=t.sphere(.13,9065008,.18,.2,0);a.scale.set(.7,1.5,.7),r.add(a);for(const l of[-1,1])r.add(t.cone(.035,.08,11102268,-.13,.3,l*.04));Cs(r),r.visible=!1,r.position.set(-9,2.4,-4),e.add(r)}return i.decor.registerSpawn("dawnMist",r=>{n.mistBoost=r?1:0}),i.decor.registerSpawn("dawnDapples",r=>{n.dappleBoost=r?1:0}),i.decor.registerSpawn("goldenHour",r=>{n.golden=r?1:0;for(const o of n.dapples)o.mat.color.setHex(r?16764792:16773836)}),ri=n,e},onTimeChange(i,t,e){i==="dawn"?(e.decor.spawn("dawnMist"),e.decor.spawn("dawnDapples"),e.decor.despawn("goldenHour")):i==="dusk"?(e.decor.despawn("dawnMist"),e.decor.despawn("dawnDapples"),e.decor.spawn("goldenHour")):(e.decor.despawn("dawnMist"),e.decor.despawn("dawnDapples"),e.decor.despawn("goldenHour"))},onWeatherChange(i,t){ri&&(ri.weatherWet=i==="rain"?1:0,ri.weatherFog=i==="fog"?1:0,ri.streamTex.repeat.set(i==="rain"?8:6,1))},update(i,t,e){if(!ri)return;const n=ri,s=e.wind.strength;for(const o of n.sways)o.obj.rotation.z=o.base+Math.sin(t*.7+o.phase)*o.amp*(.5+s*.5);n.hammock.rotation.z=Math.sin(t*.7)*.018*(.5+s*.5),n.streamTex.offset.x+=i*(.05+s*.02+n.weatherWet*.04);for(const o of n.leaves)o.mesh.position.x=o.baseX+(t*.24+o.phase)%2.4-.6,o.mesh.position.z=o.baseZ+Math.sin(t*.8+o.phase)*.12,o.mesh.rotation.z=Math.sin(t+o.phase)*.3;for(const o of n.dapples){o.sprite.position.x=o.baseX+Math.sin(t*.5+o.phase)*(.18+n.dappleBoost*.16),o.sprite.position.z=o.baseZ+Math.cos(t*.42+o.phase)*.16;const a=.6+.4*Math.sin(t*(1.4+n.dappleBoost*3.2)+o.phase);o.mat.opacity=(.1+n.dappleBoost*.22+n.dustLevel*.05)*a*(.5+e.glow*.5)}for(const o of n.flames)o.mesh.scale.y=.82+Math.sin(t*6+o.phase)*.18,o.mat.opacity=n.fireLevel*(.7+.3*Math.sin(t*8+o.phase)),o.mesh.rotation.z=Math.sin(t*3+o.phase)*.06;for(const o of n.sparks){const a=(t*.55+o.phase)%1;o.sprite.position.y=.4+a*1.1,o.sprite.position.x=o.x+Math.sin(t*2+o.phase)*.08,o.mat.opacity=n.emberLevel*(1-a)*.9,o.sprite.scale.setScalar(.1+a*.06)}const r=n.mistBoost*.16+n.weatherFog*.12;n.mistMat.opacity=r;for(const o of n.mist)o.mesh.position.x=o.baseX+Math.sin(t*.08+o.phase)*1.6;n.squirrelTimer-=i,!n.squirrelActive&&n.squirrelTimer<=0&&(n.squirrelActive=!0,n.squirrel.visible=!0,n.squirrel.position.set(-9,2.3+Math.sin(t)*.3,-4),n.squirrelTimer=13),n.squirrelActive&&(n.squirrel.position.x+=i*3,n.squirrel.position.y+=Math.sin(t*9)*i*.25,n.squirrel.position.x>9&&(n.squirrelActive=!1,n.squirrel.visible=!1))},dispose(){ri=null}},Z_=Object.freeze(Object.defineProperty({__proto__:null,default:q_},Symbol.toStringTag,{value:"Module"})),$_={key:"seaCliff",top:8366185,topTexture:"grass",side:9273192,strata:7694936,rim:10521705,ink:2831686};let gn=null;function xe(i,t,e,n){t.layout.place(n,e),i.add(n)}const K_={id:"seaCliff",label:"海崖营地",icon:"cliff",palette:$_,build(i){const t=i.lib,e=new Me;e.name="seaCliff-scene";{const n=t.group("awning-prop");n.add(t.awning(3,1.8));const s=t.stringLights(2.9,9);s.position.y=.02,n.add(s),xe(e,i,"awning",n)}{const n=t.group("table-prop");n.add(t.table(1.05,.64));const s=t.group("breakfast-set");s.add(t.cyl(.11,.11,.035,16117986,-.22,.78,0)),s.add(t.cyl(.075,.075,.11,13870186,.14,.78,.06)),s.add(t.box(.22,.018,.16,13213548,0,.78,-.14)),n.add(s),xe(e,i,"table",n),i.decor.bind("breakfastSet",r=>{s.visible=r>.04,s.scale.setScalar(.75+r*.25)})}{const n=t.group("chairs"),s=t.chair(11043933);s.position.set(-.28,0,.1);const r=t.chair(10254933);r.position.set(.3,0,-.06),r.rotation.y=-.5,n.add(s,r),xe(e,i,"chairs",n)}{const n=t.group("grill-prop");n.add(t.grill());const s=rt(tt.box(.44,.02,.32),re(16747084),0,.605,0);n.add(s);const r=de(16752988,.7,0);r.position.set(0,.72,0),n.add(r);const o=s.material,a=r.material;i.decor.bind("fire",l=>{o.opacity=l,o.transparent=!0,a.opacity=l*.7}),xe(e,i,"grill",n)}xe(e,i,"campLamp",t.lamp(1.15,5069670,16766346,"campLamp"));{const n=t.group("picnic");n.add(t.plane(1.25,.9,14271642,.02,Tt.cloth()));const s=He(.26,.2,16183780,{amplitude:.07,speed:2.4,key:"napkin"});s.position.set(.28,.045,.16),n.add(s),xe(e,i,"picnicMat",n)}xe(e,i,"groundMat",t.plane(1.35,.95,7309958,.018,Tt.cloth()));{const n=t.group("utility");n.add(t.box(.24,.95,.22,8358798)),n.add(t.box(.3,.08,.28,5595752,0,.95,0)),n.add(t.cyl(.035,.035,.28,14207375,-.1,.7,.13,8));const s=new Rn([new C(.12,.16,0),new C(.4,.07,.2),new C(.65,.06,.05),new C(.8,.04,-.22)]);n.add(new ne(new Mn(s,18,.026,5,!1),t.mat(4148048))),xe(e,i,"utilityPost",n)}xe(e,i,"bicycle",t.bicycle(4951720));{const n=t.group("boardwalk"),s=Te(tt.box(.16,.075,1),t.mat(11569759,Tt.wood()),Array.from({length:9},(r,o)=>({x:-.85+o*.21,y:.04,z:0})),"boards");n.add(s),xe(e,i,"boardwalk",n)}xe(e,i,"railing",t.fence(3.6,1.02,11045475,"wood")),xe(e,i,"bench",t.bench(1.55,11042646)),xe(e,i,"signpost",t.sign(`海岬
小海湾`,1.05,.66,9071432,1.35)),xe(e,i,"stoneSteps",t.stairs(1.2,1.25,4,10197648));{const n=t.group("reefs"),s=je(7,-.9,.9,-.45,.45,12,0);for(const r of s){const o=t.rock(.22+((r.scale??1)-.7)*.35,9277320);o.position.set(r.x,0,r.z),o.rotation.y=r.rotY??0,n.add(o)}xe(e,i,"reefCluster",n)}{const n=t.group("sea-grass"),s=Te(tt.cone(.045,.42,5),t.mat(7314019),je(24,-.8,.8,-.5,.5,19,0),"grass-tufts");n.add(s),xe(e,i,"seaGrass",n)}{const n=t.group("cliff-edge");n.add(t.box(2.9,.26,.9,8231528,0,0,0)),n.add(t.box(2.9,.14,.16,9141859,0,0,.46));const s=Te(tt.cone(.04,.3,5),t.mat(9220467),je(18,-1.35,1.35,-.35,.35,23,.24),"edge-grass");n.add(s),xe(e,i,"cliffEdge",n)}xe(e,i,"coastLight",t.lamp(1.35,5794418,16767392,"campLamp"));{const n=t.group("rope-posts");for(const r of[-.55,.55])n.add(t.pole(.055,.9,10127981,r,0,0));const s=new Rn([new C(-.55,.78,0),new C(0,.66,0),new C(.55,.78,0)]);n.add(new ne(new Mn(s,14,.014,4,!1),t.mat(14207396))),xe(e,i,"ropePost",n)}{const n=t.group("lighthouse-prop");n.add(t.lighthouse(2.9)),xe(e,i,"lighthouse",n);const s=new Ae({color:16771504,transparent:!0,opacity:0,side:ae,depthWrite:!1}),r=rt(tt.cone(1.15,5,12),s,0,3.4,0);r.rotation.z=Math.PI/2,r.userData.noBounds=!0,r.userData.dynamic=!0,r.name="lighthouse-beam",e.add(r),i.decor.bind("lighthouse",o=>{s.opacity=o*.2,r.visible=o>.04}),gn={...gn??{},beam:r,beamMat:s}}{const n=t.group("breakwater");for(let s=0;s<6;s++){const r=t.box(.42,.42+s%3*.12,.6,10132371,-1.1+s*.44,0,0);n.add(r)}xe(e,i,"breakwater",n)}{const n=t.sailboat();n.visible=!1,xe(e,i,"sailboat",n),i.decor.registerSpawn("morningBoat",s=>{n.visible=s}),gn={...gn,sailboat:n}}{const n=Tt.water().clone();n.needsUpdate=!0,n.repeat.set(4,1);const s=new Ae({map:n,transparent:!0,opacity:.94,side:ae}),r=rt(tt.plane(17.4,1.05),s,0,.022,0);r.rotation.x=-Math.PI/2,r.userData.noBounds=!0,r.userData.dynamic=!0,r.position.set(0,.022,-8.5),e.add(r);const o=rt(tt.plane(17.4,.9),s,0,.02,8.5);o.rotation.x=-Math.PI/2,o.userData.noBounds=!0,o.userData.dynamic=!0,e.add(o),gn={...gn,waterTex:n}}{const n=t.group("sea-bird");for(const s of[-1,1]){const r=rt(tt.plane(.34,.1),t.mat(15921898),s*.17,0,0);r.rotation.x=-Math.PI/2,r.rotation.z=s*.25,r.userData.noBounds=!0,n.add(r)}n.position.set(-9,4.6,-5),n.visible=!1,n.userData.noBounds=!0,n.userData.dynamic=!0,e.add(n),gn={...gn,bird:n,birdTimer:6,birdActive:!1}}return e},onTimeChange(i,t,e){i==="dawn"?e.decor.spawn("morningBoat"):e.decor.despawn("morningBoat")},onWeatherChange(i,t){gn&&gn.waterTex.repeat.set(i==="rain"?6:4,1)},update(i,t,e){if(!gn)return;const n=gn;n.waterTex.offset.x+=i*(.018+e.wind.strength*.012),n.beam&&n.beam.visible&&(n.beam.rotation.y+=i*.22),n.birdTimer-=i,!n.birdActive&&n.birdTimer<=0&&(n.birdActive=!0,n.bird.visible=!0,n.bird.position.set(-9,4.4+Math.sin(t)*.4,-5),n.birdTimer=14),n.birdActive&&(n.bird.position.x+=i*2.6,n.bird.position.y+=Math.sin(t*3)*i*.12,n.bird.position.x>9&&(n.birdActive=!1,n.bird.visible=!1))}},J_=Object.freeze(Object.defineProperty({__proto__:null,default:K_},Symbol.toStringTag,{value:"Module"})),Q_={key:"wasteland",top:11049858,topTexture:"gravel",side:9076072,strata:7037010,rim:10259309,ink:3879726};let Ai=null;function we(i,t,e,n){t.layout.place(n,e),i.add(n)}function ji(i){return i.userData.noBounds=!0,i.userData.noOutline=!0,i.userData.dynamic=!0,i}const j_={id:"wasteland",label:"末日避难所营地",icon:"wasteland",palette:Q_,build(i){const t=i.lib,e=new Me;e.name="wasteland-scene";const n=new Ae({color:16773312,transparent:!0,opacity:0,side:ae,depthWrite:!1}),s=de(16734792,.4,0),r=s.material,o={searchPivot:t.group("searchlight-pivot"),searchBeamMat:n,warnPivot:t.group("warning-pivot"),warnMat:r,radar:t.group("radar-prop"),steam:[],sparks:[],flames:[],motes:[],searchLevel:0,warnLevel:0,steamLevel:0,smokeLevel:0,emberLevel:0,fireLevel:0,dustLevel:0,patrolBoost:0,alarmBoost:0,weatherFog:0,weatherWet:0};{const a=t.group("bunker-prop");a.add(t.bunker(2.4,2,1.8));const l=rt(tt.torus(.24,.045,12),t.mat(4870485),0,1,.98);a.add(l);for(let c=0;c<4;c++){const h=t.box(.44,.04,.04,6055016,0,1,.99);h.rotation.z=c/4*Math.PI,a.add(h)}a.add(t.cyl(.07,.07,.08,9081494,0,1,1.02,10));for(const c of[-.75,.75])for(let h=0;h<3;h++){const d=t.rounded(.34,.14,.22,12166012,c,h*.13,.9);a.add(d)}a.add(t.cyl(.06,.06,.6,8160393,.9,2,-.6,8)),a.add(t.cyl(.09,.09,.08,6055016,.9,2.6,-.6,8)),we(e,i,"bunker",a)}{const a=t.group("sandbags"),l=[];for(let c=0;c<3;c++)for(let h=0;h<5-c;h++)l.push({x:-.5+h*.26+c*.13,y:.075+c*.14,z:c%2*.04,rotY:h%2*.12});a.add(Te(tt.rounded(.3,.15,.24,.05),t.mat(12429184),l,"sandbag-stack")),we(e,i,"sandbags",a)}{const a=t.group("barrel-grill-prop");a.add(t.barrelGrill());for(let u=0;u<3;u++){const f=re(u===0?16764522:16744250,.92),g=rt(tt.cone(.12-u*.02,.34-u*.06,6),f,(u-1)*.06,.5,0);g.userData.dynamic=!0,g.userData.noOutline=!0,a.add(g),o.flames.push({mesh:g,mat:f,phase:u*1.5})}const l=de(16749128,.55,0);l.position.set(0,.66,0),a.add(l),we(e,i,"barrelGrill",a);const c=i.layout.byId("barrelGrill"),h=c?.x??0,d=c?.z??0;for(let u=0;u<6;u++){const f=de(16755540,.13,0),g=f.material;ji(f),f.position.set(h+(u-3)*.05,.6,d),e.add(f),o.sparks.push({sprite:f,mat:g,x:f.position.x,z:d,phase:u*.61})}i.decor.bind("fire",u=>{o.fireLevel=u}),i.decor.bind("ember",u=>{o.emberLevel=u}),i.decor.bind("smoke",u=>{o.smokeLevel=u})}{const a=t.group("clothesline");for(const h of[-.82,.82])a.add(t.pole(.04,1.7,9080722,h,0,0)),a.add(t.box(.12,.06,.12,7173240,h,0,0));const l=new Rn([new C(-.82,1.6,0),new C(0,1.48,0),new C(.82,1.6,0)]);a.add(new ne(new Mn(l,16,.012,4,!1),t.mat(12172462)));const c=[[-.45,.42,7044998],[.02,.5,10126947],[.48,.38,6254433]];for(const[h,d,u]of c){const f=He(d,.56,u,{amplitude:.1,speed:1.6,vertical:!0,key:"workwear"});f.position.set(h,1.2,0),a.add(f)}we(e,i,"clothesline",a)}{const a=t.group("water-purifier");for(const c of[-.3,.3])a.add(t.box(.06,.9,.06,8160393,c,0,0));a.add(t.box(.78,.06,.5,9081494,0,.9,0)),a.add(t.cyl(.2,.2,.5,12174530,-.16,.96,0,12));for(const c of[-.16,.16])a.add(t.cyl(.07,.07,.36,9418926,c,.96,.3,10));const l=new Rn([new C(-.16,1.46,0),new C(-.16,1.6,0),new C(.16,1.6,0),new C(.16,1.32,0)]);a.add(new ne(new Mn(l,16,.022,5,!1),t.mat(10134182))),a.add(t.cyl(.03,.03,.14,12174530,.16,1.2,.3,8)),a.add(t.cyl(.12,.12,.28,10123858,.16,0,.3,10)),we(e,i,"waterPurifier",a)}{const a=t.group("generator");a.add(t.box(.9,.62,.56,9080702,0,.08,0)),a.add(t.box(.94,.06,.6,7173222,0,.7,0));const l=Te(tt.box(.03,.4,.5),t.mat(6252384),Array.from({length:9},(f,g)=>({x:-.38+g*.095,y:.36,z:0})),"gen-fins");a.add(l),a.add(t.cyl(.05,.05,.42,8160393,.3,.7,-.16,8)),a.add(t.cyl(.075,.075,.06,6252384,.3,1.12,-.16,8));const c=rt(tt.sphere(.04),re(9426592),-.3,.55,.29);a.add(c),a.add(t.box(.24,.2,.02,3752778,0,.5,.29)),we(e,i,"generator",a);const h=i.layout.byId("generator"),d=(h?.x??0)+.3,u=(h?.z??0)-.16;for(let f=0;f<6;f++){const g=de(15002854,.22,0),x=g.material;ji(g),g.position.set(d,1.15,u),e.add(g),o.steam.push({sprite:g,mat:x,x:d,z:u,phase:f*.55})}i.decor.bind("steam",f=>{o.steamLevel=f})}{const a=t.group("solar-panels");for(let l=0;l<3;l++){const c=t.panel(1.1,.78);c.position.x=-.85+l*.85,a.add(c)}a.add(t.box(2.7,.05,.08,7173240,0,.06,0)),we(e,i,"solarPanels",a)}{const a=t.group("oil-drums"),l=[[-.3,0,-.1],[.28,0,.05],[0,0,.32]];for(const[h,d,u]of l){const f=t.drum(.22,.68,10512964);f.position.set(h,d,u),a.add(f)}const c=rt(tt.plane(.3,.2),t.mat(15784330,Tt.sign("!")),-.3,.42,.13);a.add(c),we(e,i,"oilDrums",a)}{const a=t.group("warning-sign");a.add(t.sign(`止步
小心`,.72,.56,9071432,1.15));const l=t.cone(.28,.32,15254108,0,.95,.05);a.add(l),a.add(t.box(.05,.16,.02,5916208,0,.98,.2)),a.add(t.sphere(.03,5916208,0,.88,.2)),we(e,i,"warningSign",a)}{const a=t.group("watchtower-prop");a.add(t.tower(4.2));const l=t.ladder(2.6);l.rotation.x=-.18,l.position.set(0,0,.62),a.add(l);const c=t.fence(1.2,.5,8160393,"metal");c.position.y=4.2,a.add(c),we(e,i,"watchtower",a);const h=i.layout.byId("watchtower"),d=h?.x??0,u=h?.z??0,f=rt(tt.cone(1.4,6,14),n,2,-2.2,0);f.rotation.z=-.55,f.userData.noBounds=!0,f.userData.noOutline=!0,f.userData.dynamic=!0,o.searchPivot.add(f),ji(o.searchPivot),o.searchPivot.position.set(d,4.3,u),e.add(o.searchPivot),ji(s),s.position.set(.62,0,0),o.warnPivot.add(s),ji(o.warnPivot),o.warnPivot.position.set(d,4.7,u),e.add(o.warnPivot);for(let g=0;g<10;g++){const x=rt(tt.plane(.05,.05),new Ae({color:16772544,transparent:!0,opacity:0,side:ae,depthWrite:!1}),d+1.2+g%3*.3,.6+g%5*.5,u+Math.sin(g)*.5);ji(x),e.add(x),o.motes.push({mesh:x,x:x.position.x,y:x.position.y,z:x.position.z,phase:g*.8})}i.decor.bind("searchLight",g=>{o.searchLevel=g}),i.decor.bind("warningLight",g=>{o.warnLevel=g}),i.decor.bind("dustMote",g=>{o.dustLevel=g})}o.radar.add(t.radar()),we(e,i,"radar",o.radar);{const a=t.group("containers"),l=t.container(2,1.5,1.1,10120015);l.position.set(-.55,0,0);const c=t.container(1.8,1.4,1.1,8161923);c.position.set(.75,1.5,-.05),a.add(l,c);for(const[h,d]of[[-.55,.75],[.75,2.2]])a.add(t.box(.34,.2,.02,15260072,h,d,.57));we(e,i,"containers",a)}{const a=t.group("wreck");a.add(t.box(1.7,.42,.86,10121296,0,.32,0,Tt.rust())),a.add(t.box(.86,.36,.78,9069128,-.1,.72,0,Tt.rust()));for(const l of[-1,1])a.add(t.box(.7,.22,.02,4609116,-.1,.78,l*.4));for(const l of[-.56,.56])for(const c of[-.5,.5]){const h=t.wheel(.2,.12);h.position.set(l,0,c),a.add(h)}a.add(t.box(.5,.08,.7,7166532,.9,.4,0)),we(e,i,"wreck",a)}{const a=t.group("tires"),l=[[-.22,0,0],[.22,0,0],[0,.38,0],[0,.76,0]];for(const[c,h,d]of l){const u=t.tire(.28,.16);u.position.set(c,h,d),a.add(u)}we(e,i,"tires",a)}{const a=t.group("corrugated-fence");for(let l=0;l<6;l++){const c=1.7+l%3*.22;a.add(t.box(.62,c,.06,9212568,-1.55+l*.62,0,0,Tt.corrugated())),a.add(t.pole(.05,c+.08,7173240,-1.87+l*.62,0,.04))}a.add(t.box(3.8,.06,.08,8160393,0,1.95,0)),we(e,i,"corrugatedFence",a)}{const a=t.group("wire-fence");for(let l=0;l<5;l++)a.add(t.pole(.035,1.5,9081494,-1.4+l*.7,0,0));for(let l=0;l<5;l++)a.add(t.box(2.9,.014,.014,11055282,0,.28+l*.28,0));for(let l=0;l<8;l++){const c=t.box(.02,.42,.02,10134180,-1.3+l*.36,1.5,0);c.rotation.z=(l%2?1:-1)*.7,a.add(c)}we(e,i,"wireFence",a)}{const a=t.group("barrel-stack"),l=[[-.24,0,-.1],[.24,0,-.1],[0,0,.24],[0,.72,-.1]];for(const[c,h,d]of l){const u=t.drum(.24,.72,9069128);u.position.set(c,h,d),a.add(u)}we(e,i,"barrelStack",a)}{const a=t.group("supply-crate"),l=t.crate(.7,.5,.6);l.position.set(-.2,0,0);const c=t.crate(.56,.42,.5,7305827);c.position.set(.3,.5,.05),a.add(l,c),a.add(t.box(.3,.06,.02,15260072,-.2,.28,.31)),we(e,i,"supplyCrate",a)}{const a=t.group("ruined-skyline"),l=[1.6,2.4,1.9,2.8,1.5,2.2,1.7,2.6];for(let c=0;c<l.length;c++){const h=t.box(.7,l[c],.5,c%2?9147033:8160396,-6.3+c*1.8,0,-.2);a.add(h);for(let d=0;d<3;d++)a.add(t.box(.1,.14,.02,12174020,-6.3+c*1.8-.2+d*.2,.5+d*.5,.06))}for(const[c,h]of[[-2.5,2.4],[2.6,2.2]])a.add(t.box(h,.18,.6,10133660,c,2.3,.5)),a.add(t.box(h,.05,.08,8226176,c,2.44,.78));for(const c of[-3.2,-1.8,2,3.2])a.add(t.cyl(.12,.16,2.2,9409936,c,0,.5,8));we(e,i,"ruinedSkyline",a)}{const a=t.group("waste-ground");a.add(t.plane(15.5,1,11048047,.014,Tt.sand()));const l=Te(tt.cone(.05,.12,5),t.mat(10127984),je(24,-7.4,7.4,-.4,.4,61,0),"pebbles");a.add(l),we(e,i,"wasteGround",a)}return i.decor.registerSpawn("dawnPatrol",a=>{o.patrolBoost=a?1:0}),i.decor.registerSpawn("eveningAlarm",a=>{o.alarmBoost=a?1:0}),Ai=o,e},onTimeChange(i,t,e){i==="dawn"?(e.decor.spawn("dawnPatrol"),e.decor.despawn("eveningAlarm")):i==="dusk"||i==="night"?(e.decor.despawn("dawnPatrol"),e.decor.spawn("eveningAlarm")):(e.decor.despawn("dawnPatrol"),e.decor.despawn("eveningAlarm"))},onWeatherChange(i,t){Ai&&(Ai.weatherFog=i==="fog"?1:0,Ai.weatherWet=i==="rain"?1:0)},update(i,t,e){if(!Ai)return;const n=Ai,s=e.wind.strength;n.searchPivot.rotation.y+=i*(.16+n.patrolBoost*.5+n.alarmBoost*.12),n.searchBeamMat.opacity=(n.searchLevel*.18+n.alarmBoost*.05)*(.72+.28*Math.sin(t*.8)),n.searchPivot.visible=n.searchBeamMat.opacity>.005,n.warnPivot.rotation.y+=i*2,n.warnMat.opacity=n.warnLevel*(.45+.55*Math.abs(Math.sin(t*4.5))),n.radar.rotation.y+=i*.35;const r=n.steamLevel*.5+n.weatherFog*.3+n.smokeLevel*.1;for(const a of n.steam){const l=(t*.4+a.phase)%1;a.sprite.position.y=1.15+l*1.2,a.sprite.position.x=a.x+Math.sin(t*.8+a.phase)*(.1+l*.3)+s*.1*l,a.mat.opacity=r*(1-l)*.55,a.sprite.scale.setScalar(.18+l*.5)}for(const a of n.sparks){const l=(t*.6+a.phase)%1;a.sprite.position.y=.6+l*1,a.sprite.position.x=a.x+Math.sin(t*2+a.phase)*.07,a.mat.opacity=n.emberLevel*(1-l)*.9*(1-n.weatherWet*.5),a.sprite.scale.setScalar(.09+l*.05)}for(const a of n.flames)a.mesh.scale.y=.8+Math.sin(t*6+a.phase)*.2,a.mat.opacity=(n.fireLevel*.7+.15)*(.7+.3*Math.sin(t*8+a.phase)),a.mesh.rotation.z=Math.sin(t*3+a.phase)*.05;const o=n.dustLevel*.5+n.weatherFog*.35;for(const a of n.motes)a.mesh.position.y=a.y+Math.sin(t*.5+a.phase)*.35,a.mesh.position.x=a.x+Math.sin(t*.3+a.phase)*.12,a.mesh.material.opacity=o*(.4+.4*Math.sin(t*1.2+a.phase))},dispose(){Ai=null}},t1=Object.freeze(Object.defineProperty({__proto__:null,default:j_},Symbol.toStringTag,{value:"Module"})),ss=[];function cn(i,t,e={}){const n={key:i,apply:t,phase:e.phase??ss.length*1.37%6.28,speed:e.speed??1.2};return ss.push(n),()=>{const s=ss.indexOf(n);s>=0&&ss.splice(s,1)}}function e1(i,t){for(const e of ss){const n=t(e.key),s=.5+.5*Math.sin(i*e.speed+e.phase);e.apply(n*(.74+s*.26))}}function n1(){ss.length=0}let Ri=null;const i1={id:"overland",label:"越野皮卡+车顶帐篷",icon:"overland",build(i){const t=i.lib,e=new Me;e.name="vehicle-overland";const n=5595226,s=3094073,r=14257226,o=11569756,a=2830387,l=2304043;e.add(t.box(6.8,.22,1.9,a,0,.7,0)),e.add(t.box(1.1,.08,1.92,s,-2.9,.62,0)),e.add(t.box(.8,.16,.8,s,2.45,.54,0));for(const k of[-3.42,3.42])e.add(t.box(.14,.22,2.2,s,k,.72,0));for(const k of[-2.75,2.45])for(const at of[-1.05,1.05]){const At=t.wheel(.46,.26);At.position.set(k,0,at),e.add(At);for(let mt=0;mt<8;mt++){const Lt=mt/8*Math.PI*2,ce=k+.46*.9*Math.cos(Lt),Dt=.46+.46*.9*Math.sin(Lt);e.add(t.box(.1,.1,.28,l,ce,Dt-.05,at))}}e.add(t.rounded(1,.53,2.1,n,-2.9,.92,0,.08)),e.add(t.box(.04,.3,1.6,s,-3.43,1.05,0));for(const k of[-.85,.85])e.add(t.box(.04,.14,.24,16771512,-3.43,1.18,k));e.add(t.box(.6,.03,.5,r,-2.9,1.45,0)),e.add(t.box(2.2,.08,2.1,o,-1.3,.92,0,Tt.wood())),e.add(t.box(2.2,.5,.09,n,-1.3,1,-1.1)),e.add(t.box(2.2,.5,.09,n,-1.3,1,1.1)),e.add(t.box(2.2,.78,.09,n,-1.3,1.5,-1.05)),e.add(t.box(2.2,.06,.09,n,-1.3,2.28,1.05)),e.add(t.rounded(2.3,.2,2.26,n,-1.3,2.34,0,.08)),e.add(t.box(.09,.5,2.1,n,-2.4,1,0));const c=rt(tt.plane(1.8,.72),Ge(.22),-2.46,1.9,0);c.rotation.y=-Math.PI/2,e.add(c);for(const k of[-1,1])e.add(t.box(.09,.78,.1,n,-2.4,1.5,k));e.add(t.box(.09,.06,2.1,n,-2.4,2.28,0)),e.add(t.box(.09,.5,2.1,n,-.2,1,0));const h=rt(tt.plane(1.7,.66),Ge(.22),-.14,1.92,0);h.rotation.y=Math.PI/2,e.add(h);for(const k of[-1,1])e.add(t.box(.09,.78,.1,n,-.2,1.5,k));e.add(t.box(.09,.06,2.1,n,-.2,2.28,0));for(const k of[-1.85,-.75]){const at=t.window(.85,.78,s);at.position.set(k,1.5,1.12),e.add(at)}e.add(t.box(.1,.78,.1,n,-1.3,1.5,1.07));for(const k of[-2.36,-.24])e.add(t.box(.09,.78,.1,n,k,1.5,1.07));e.add(t.box(.5,.2,.02,r,-1.3,1.62,-1)),e.add(t.box(3.6,.08,2.1,o,1.6,.92,0,Tt.wood()));for(const k of[-1.1,1.1])e.add(t.box(3.6,.55,.09,n,1.6,1,k));e.add(t.box(.09,.55,2.1,n,3.4,1,0));const d=t.group("cockpit"),u=re(7324888),f=re(8376544);d.add(t.box(.4,.26,1.8,s,-2.18,1,0)),d.add(t.box(.55,.24,.05,l,-1.96,1.2,.58));const g=rt(tt.plane(.48,.18),u,-1.96,1.32,.61);d.add(g),d.add(t.box(.44,.36,.05,l,-1.96,1.16,-.04));const x=rt(tt.plane(.38,.3),f,-1.96,1.34,-.01);d.add(x);const p=rt(tt.torus(.14,.028,12),t.mat(l),-1.92,1.34,.52);p.rotation.y=Math.PI/2,d.add(p);for(const k of[-.46,.46])d.add(t.box(.36,.14,.44,7041384,-1.55,1,k)),d.add(t.box(.36,.42,.1,7041384,-1.35,1.14,k));e.add(d);const m=t.group("rear-rest");m.add(t.box(1.1,.12,.8,4871248,-.8,1,0));const M=He(.5,.7,8035182,{amplitude:.03,key:"overlandSleepingBag"});M.position.set(-1.075,1.12,0),m.add(M),m.add(t.box(.24,.08,.36,14207392,-1.15,1.12,0)),m.add(t.box(.5,.01,.44,15260864,-.55,1.12,.1));for(let k=0;k<3;k++)m.add(t.box(.4,.012,.012,10206607,-.55,1.13,-.02+k*.12));m.add(t.box(.07,.2,.05,s,-.42,1,.8)),m.add(t.pole(.01,.12,l,-.42,1.2,.8)),m.add(t.box(.04,.06,.02,r,-.42,1.08,.83)),m.add(t.box(.52,.36,.02,3817800,-.65,1.55,-.93));for(let k=1;k<4;k++)m.add(t.box(.5,.012,.012,7041384,-.65,1.55+(k-2)*.1,-.91));for(let k=1;k<3;k++)m.add(t.box(.012,.34,.012,7041384,-.65+(k-1.5)*.24,1.55,-.91));e.add(m);const w=t.drum(.24,.62,11561535);w.position.set(.85,1,-.52),e.add(w),e.add(t.rounded(.72,.55,.55,7317688,1.75,1,-.5,.06)),e.add(t.cyl(.05,.05,.1,s,1.75,1.55,-.5,8));const y=t.crate(.7,.46,.52,11567184);y.position.set(2.75,1,-.48),e.add(y),e.add(t.box(.9,.05,.55,o,.8,1.3,1.55));for(const k of[.45,1.15])e.add(t.box(.04,.3,.04,s,k,1,1.78));const A=t.tire(.3,.16);A.position.set(2.6,.86,.55),e.add(A);const E=t.group("bed-rack");for(const k of[.3,3.2])for(const at of[-1,1])E.add(t.box(.07,1.11,.07,s,k,1.55,at));for(const k of[-1,1])E.add(t.box(2.9,.06,.07,s,1.75,2.6,k));for(const k of[.4,1.75,3.1])E.add(t.box(.06,.06,2,s,k,2.6,0));e.add(E);const _=t.group("roof-tent");_.add(t.box(2.6,.08,2,7174770,1.75,2.66,0)),_.add(t.box(2.6,1.31,.05,14272932,1.75,2.74,-1)),_.add(t.box(.05,1.31,2,14272932,.45,2.74,0)),_.add(t.box(.05,1.31,2,14272932,3.05,2.74,0));for(const k of[.85,2.55]){const at=He(1,1.2,14272932,{vertical:!0,amplitude:.05,key:"overlandTentCurtain"});at.position.set(k,3.4,1.02),_.add(at)}_.add(t.rounded(2.7,.1,2.1,n,1.75,4.05,0,.06)),_.add(t.box(2.2,.14,1.6,15261128,1.75,2.74,0)),_.add(t.box(.4,.09,.5,15986402,1,2.88,0));const b=t.cyl(.12,.12,.5,10206607,2.4,2.88,0,10);b.rotation.z=Math.PI/2,_.add(b);const U=de(16766874,.45,0);U.position.set(1.75,3.3,-.55),_.add(U),e.add(_);const R=t.stringLights(2.4,9,"stringLight");R.position.set(1.75,1,1.12),e.add(R);const D=t.ladder(3.4);D.position.set(1.7,0,3.1),D.rotation.x=-.63,e.add(D);const N=t.group("side-shade");for(const k of[2.3,3.35])N.add(t.pole(.035,2.5,9081496,k,0,2.7));N.add(t.box(1.1,.04,.04,s,2.83,2.48,2.7));const F=He(1.1,1,14667950,{vertical:!0,amplitude:.05,key:"overlandShade"});F.position.set(2.83,1.95,2.7),N.add(F),e.add(N);const P=t.ladder(1.5);P.position.set(3.25,1,1.25),e.add(P);const H=re(16773312),q=t.group("spotlight");q.add(t.box(.24,.16,.2,s,0,0,0));const z=rt(tt.sphere(.08),H,0,.08,.11);q.add(z);const nt=de(16770728,.9,0);nt.position.set(0,.1,.14),q.add(nt);const X=rt(tt.cone(.55,2.2,12),new Ae({color:16770728,transparent:!0,opacity:.1,side:ae,depthWrite:!1}),0,0,1.3);X.rotation.x=-Math.PI/2,X.userData.noBounds=!0,X.userData.dynamic=!0,X.userData.noOutline=!0,X.name="spot-beam",q.add(X),q.position.set(-2.1,2.54,.6),e.add(q);for(const k of[-2.1,-.7])e.add(t.box(.7,.06,.24,s,k,.62,1.3));for(const[k,at]of[[-1.85,1.2],[-.75,1.2]])e.add(rt(tt.plane(.3,.3),t.mat(16777215,Tt.sticker()),k,at,1.155));e.add(t.pole(.012,.7,l,-2.2,2.54,-.9)),e.add(t.box(.16,.12,.16,r,3.5,.78,0));const J=re(16770744,.85);e.add(rt(tt.box(1.9,.035,.08),J,-1.3,2.26,.4));const et=de(16766874,.5,0);et.position.set(-.5,1.7,.6),e.add(et);const St=new Js(16765850,0,9,2);St.position.set(-1.3,1.9,.4),e.add(St);const It=et.material;cn("interiorWarmth",k=>{It.opacity=k*.9},{speed:1});const B=U.material;return cn("interiorWarmth",k=>{B.opacity=k*.8},{speed:.9}),i.decor.bind("interiorWarmth",k=>{St.intensity=k*1.9,J.opacity=.12+k*.8,u.color.setRGB(.42+k*.06,.72+k*.05,.86),f.color.setRGB(.48+k*.06,.78+k*.04,.88),H.color.setRGB(.9+k*.1,.86+k*.08,.7+k*.1)}),Ri={cabinLight:St,stripMat:J,dashMat:u,centerMat:f,spotLensMat:H,nightLamp:et,spotlight:q,tentStringLights:R},e},onTimeChange(i,t){if(!Ri)return;const e=i==="dusk"||i==="night";Ri.cabinLight.color.set(e?16765082:16771528)},update(i,t,e){if(!Ri)return;const n=.55+Math.sin(t*1.1)*.06+e.interiorWarmth*.12;Ri.nightLamp.scale.setScalar(n),Ri.spotlight.rotation.y=Math.sin(t*.35)*.22,Ri.tentStringLights.rotation.z=Math.sin(t*.7)*.012}},s1=Object.freeze(Object.defineProperty({__proto__:null,default:i1},Symbol.toStringTag,{value:"Module"}));let Ps=null;const r1={id:"trailer",label:"拖挂房车+皮卡",icon:"trailer",build(i){const t=i.lib,e=new Me;e.name="vehicle-trailer";const n=15987177,s=4877184,r=12688237,o=t.group("pickup");o.add(t.box(2.35,.2,2.1,5134430,-4.5,.4,0));for(const R of[-5.25,-3.75])for(const D of[-1.06,1.06]){const N=t.wheel(.4,.22);N.position.set(R,0,D),o.add(N)}o.add(t.box(1.28,1.2,2.06,s,-4.98,.6,0)),o.add(t.box(1.3,.12,2.1,8230824,-4.98,1.8,0));const a=rt(tt.plane(1.1,.82),Ge(.22),-5.63,1.42,0);a.rotation.y=-Math.PI/2,o.add(a);for(const R of[-1.05,1.05]){const D=rt(tt.plane(1.06,.68),Ge(.2),-4.98,1.42,R);o.add(D)}o.add(t.box(1.05,.52,2.06,s,-3.72,.6,0)),o.add(t.box(1.05,.06,2.06,4020331,-3.72,1.12,0)),o.add(t.crate(.46,.34,.44,11110495).translateX(-3.95).translateY(1.18).translateZ(-.5));const l=t.drum(.16,.42,10120015);l.position.set(-3.55,1.18,.48),o.add(l);for(let R=0;R<4;R++){const D=t.cyl(.045,.045,.42,9070146,-3.4,1.18+R%2*.09,-.28+Math.floor(R/2)*.16,6);D.rotation.z=Math.PI/2,o.add(D)}o.add(t.box(.34,.28,1.7,4213842,-5.3,1,0));const c=re(8374492),h=rt(tt.plane(.3,.22),c,-5.28,1.4,.3);h.rotation.y=-Math.PI/2,o.add(h);const d=t.box(.62,.16,.72,8227442,-4.62,1.02,-.5);o.add(d),e.add(o),e.add(t.box(.5,.1,.16,7305856,-3.15,.48,0)),e.add(t.sphere(.1,9082008,-3,.44,0));const u=t.group("caravan");u.add(t.box(8.4,.2,2.5,5858154,1.3,.4,0));for(const R of[.2,3.9])for(const D of[-1.26,1.26]){const N=t.wheel(.42,.2);N.position.set(R,0,D),u.add(N)}u.add(t.box(8.2,.12,2.36,r,1.3,.73,0,Tt.wood())),u.add(t.box(8.2,1.92,.09,n,1.3,.85,-1.18)),u.add(t.box(.1,1.92,2.36,n,5.4,.85,0)),u.add(t.box(.1,1.6,2.36,n,-2.8,.85,0));const f=t.box(.7,1.6,2.2,n,-2.45,.85,0);f.rotation.z=-.22,u.add(f),u.add(t.box(8.2,.12,2.36,n,1.3,2.77,0)),u.add(t.box(8.2,.42,.09,n,1.3,.85,1.18)),u.add(t.box(8.2,.22,.09,n,1.3,2.67,1.18));for(const R of[-2.8,-.6,1.6,3.8,5.4])u.add(t.box(.08,1.4,.1,n,R,1.27,1.18));for(const[R,D]of[[-1.7,2.1],[.5,2.1],[2.7,2.1],[4.6,1.4]]){const N=t.window(D,1.3,6977664);N.position.set(R,1.32,1.24),u.add(N)}for(const R of[-2.2,4.6])u.add(t.pole(.05,.44,8029320,R,0,.9));for(const R of[-.45,.45]){const D=t.cyl(.14,.14,.44,10135716,-2.35,.6,R,10);u.add(D)}const g=t.wheel(.3,.15);g.position.set(-2.5,.8,0),g.rotation.y=Math.PI/2,u.add(g);{const R=t.group("caravan-awning");for(const N of[.4,3.6])R.add(t.pole(.032,2.45,9082008,N,0,3.35));const D=He(3.5,2.15,15260088,{amplitude:.055,key:"trailerAwning"});D.position.set(2,2.62,2.3),R.add(D),u.add(R)}u.add(t.box(.9,.08,.32,10134182,2,.38,1.6)),e.add(u);const x=t.group("caravan-interior"),p=t.bed(1.9,1.6,15261128);p.position.set(4.35,.85,-.2),x.add(p);for(const R of[-.8,.4]){const D=rt(new ro(.18,12),re(12376294),4.35,1.9,R);D.rotation.y=Math.PI/2,x.add(D)}const m=t.sink();m.position.set(0,.85,-.86),x.add(m);const M=t.stove();M.position.set(.75,.85,-.86),x.add(M);for(const R of[-.3,.5,1.3]){const D=t.cabinet(.7,.38,.3,r);D.position.set(R,2.26,-.94),x.add(D)}const w=t.sofa(.9,12886395);w.position.set(2.1,.85,.86),x.add(w);const y=t.sofa(.9,12886395);y.position.set(2.1,.85,-.24),y.rotation.y=Math.PI,x.add(y);const A=t.table(.78,.5,12159580);A.position.set(2.1,.85,.31),x.add(A),x.add(t.box(.06,1.6,1.2,14213342,-1.5,.85,-.4));const E=t.sink();E.position.set(-1.9,.85,-.7),E.scale.setScalar(.6),x.add(E);const _=de(16766874,.6,0);_.position.set(4.9,1.4,-.2),x.add(_),cn("interiorWarmth",R=>{_.material.opacity=R*.9},{speed:1});const b=rt(tt.box(6.4,.035,.1),re(16770744),1.3,2.68,.86);x.add(b),e.add(x);const U=new Js(16765850,0,10,2);return U.position.set(1.4,2.2,.5),e.add(U),i.decor.bind("interiorWarmth",R=>{U.intensity=R*1.9,c.color.setRGB(.42+R*.05,.72,.86)}),Ps={cabinLight:U,nightLamp:_,screenMat:c},e},onTimeChange(i,t){Ps&&Ps.cabinLight.color.set(i==="dusk"||i==="night"?16765082:16771528)},update(i,t,e){Ps&&Ps.nightLamp.scale.setScalar(.55+Math.sin(t*1.1)*.05+e.interiorWarmth*.12)}},o1=Object.freeze(Object.defineProperty({__proto__:null,default:r1},Symbol.toStringTag,{value:"Module"}));let ts=null;const a1={id:"typeA",label:"A型大巴房车",icon:"rv-a",build(i){const t=i.lib,e=new Me;e.name="vehicle-typeA";const n=15854813,s=14998726,r=13216127,o=6253942,a=9081496,l=.82;e.add(t.box(9.2,.18,2.5,5858154,0,.38,0));for(const it of[-3.45,2.55,3.6])for(const Wt of[-1.1,1.1]){const he=t.wheel(.4,.22);he.position.set(it,0,Wt),e.add(he)}e.add(t.box(9.3,.14,2.56,r,0,.56,0));for(const it of[-3.4,-1.6,1.6,3.4])e.add(t.box(.95,.3,.05,13880247,it,.52,1.27)),e.add(t.box(.14,.04,.06,7109508,it,.65,1.3)),e.add(t.box(.95,.3,.05,13880247,it,.52,-1.27));e.add(t.box(9.1,.08,.03,8362672,0,1.02,1.26)),e.add(t.box(9.1,.05,.03,14203274,0,1.14,1.26)),e.add(t.box(9.1,.08,.03,8362672,0,1.02,-1.26)),e.add(t.box(9.1,.12,2.44,12159580,0,.7,0,Tt.wood())),e.add(t.box(9.1,.12,2.44,n,0,2.92,0)),e.add(t.rounded(9.3,.1,2.6,s,0,3.02,0,.04)),e.add(t.box(.12,2.1,2.44,n,4.54,.82,0));for(const it of[-.95,.95])e.add(t.box(.06,.16,.24,13654602,4.62,1.02,it));e.add(t.box(.12,.53,2.44,n,-4.54,.82,0)),e.add(t.box(.12,.2,2.44,n,-4.54,2.72,0));const c=rt(tt.plane(2.24,1.32),Ge(.22),-4.62,2.04,0);c.rotation.y=-Math.PI/2,e.add(c);for(const it of[-1.14,0,1.14])e.add(t.box(.06,1.34,.06,o,-4.6,1.37,it));e.add(t.box(.05,.03,.86,4871516,-4.64,1.42,.48)),e.add(t.box(.05,.03,.86,4871516,-4.64,1.42,-.48)),e.add(t.box(.16,.24,2.5,6779770,-4.68,.55,0)),e.add(t.box(.05,.22,1.2,4871516,-4.72,.8,0));for(const it of[-.86,.86])e.add(t.box(.06,.18,.34,16771512,-4.71,1.02,it)),e.add(t.box(.1,.1,.1,5989997,-4.28,2.3,it*1.55)),e.add(t.box(.05,.05,.22,5989997,-4.34,2.3,it*1.35));e.add(t.box(9.1,.46,.1,n,0,.82,1.22)),e.add(t.box(9.1,.24,.1,n,0,2.68,1.22));for(const it of[-4.55,-3.05,-.55,.65,1.65,2.75,4.55])e.add(t.box(.09,1.4,.11,n,it,1.28,1.22));for(const[it,Wt]of[[-3.8,1.34],[.05,1.04],[2.2,.94],[3.65,1.64]]){const he=t.window(Wt,1.38,o);he.position.set(it,1.28,1.27),e.add(he)}const h=t.group("entry-door");h.add(t.box(.92,1.06,.05,15130056,1.15,.82,1.27));const d=t.window(.74,.66,o);d.position.set(1.15,1.9,1.3),h.add(d),h.add(t.box(.94,.06,.06,r,1.15,1.86,1.3)),h.add(t.box(.92,.12,.05,n,1.15,2.56,1.27)),h.add(t.box(.1,.04,.06,7109508,1.52,1.5,1.31)),e.add(h),e.add(t.box(9.1,.46,.1,n,0,.82,-1.22)),e.add(t.box(9.1,.24,.1,n,0,2.68,-1.22));for(const it of[-4.55,-2.3,0,2.3,4.55])e.add(t.box(.09,1.4,.11,n,it,1.28,-1.22));for(const it of[-3.42,-1.15,1.15,3.42]){const Wt=t.window(2.1,1.38,o);Wt.rotation.y=Math.PI,Wt.position.set(it,1.28,-1.27),e.add(Wt)}const u=t.group("cockpit");u.add(t.box(.5,.42,2,5989998,-4.25,l,0)),u.add(t.box(.82,.36,.06,3028541,-4.02,1.24,.5));const f=re(7981276),g=rt(tt.plane(.72,.3),f,-4.02,1.42,.54);u.add(g);for(const it of[-.52,.52])u.add(t.box(.44,.3,.46,10194813,-3.62,l,it)),u.add(t.box(.44,.58,.1,10194813,-3.38,1.12,it));const x=rt(tt.torus(.15,.028,12),t.mat(4147792),-3.96,1.4,-.52);x.rotation.y=Math.PI/2,u.add(x),e.add(u);const p=t.group("interior"),m=t.sofa(1.9,12094060);m.position.set(-1.8,l,-.8),p.add(m);const M=t.sofa(1.9,12886395);M.position.set(-1.8,l,.8),M.rotation.y=Math.PI,p.add(M);const w=t.sofa(.9,12094060);w.position.set(-2.65,l,0),w.rotation.y=Math.PI/2,p.add(w),p.add(t.box(.9,.05,.62,11566926,-1.8,1.2,0,Tt.wood())),p.add(t.cyl(.07,.07,.38,8022610,-1.8,l,0,8));const y=t.fridge(1.6);y.position.set(-.35,l,-.86),p.add(y);const A=t.sink();A.position.set(.35,l,-.86),p.add(A);const E=t.stove();E.position.set(1.05,l,-.86),p.add(E),p.add(t.box(.52,.52,.44,5528672,1.75,l,-.86)),p.add(rt(tt.plane(.4,.3),Ge(.3,10465462),1.75,1.08,-.63));for(const it of[1.6,1.9])p.add(t.cyl(.035,.035,.03,13225424,it,1.4,-.62,8));p.add(t.box(.56,.24,.52,13081452,-.35,2.42,-.86));for(const it of[.35,1.05,1.75]){const Wt=t.cabinet(.62,.42,.3,13081452);Wt.position.set(it,2.24,-.86),p.add(Wt)}p.add(t.box(1.7,.66,.62,11566926,.05,l,.55,Tt.wood())),p.add(t.box(1.78,.06,.7,15260088,.05,1.48,.55)),p.add(t.cyl(.09,.09,.1,15130832,-.35,1.54,.55,10)),p.add(t.sphere(.1,14257258,.35,1.54,.55)),p.add(t.box(1,1.3,.07,14472900,2.2,l,-.2)),p.add(t.box(.85,1.2,.06,15001572,2.2,l,-.75)),p.add(rt(tt.plane(.62,1),Ge(.28,14215406),2.2,1.34,-.1)),p.add(t.cyl(.02,.02,.9,a,2.2,l,-.1,8)),p.add(t.cyl(.06,.06,.04,12107972,2.2,1.7,-.1,10));const _=t.sink();_.scale.setScalar(.72),_.position.set(1.9,l,.55),p.add(_),p.add(rt(tt.plane(.34,.4),Ge(.22,14478064),1.9,1.72,-.7)),p.add(t.box(.08,1.3,2.1,13216127,2.78,l,0,Tt.wood()));const b=t.bed(1.6,1.7,15261128);b.position.set(3.62,l,-.05),p.add(b),p.add(t.box(.1,.6,1.8,11566926,4.46,l,-.05)),p.add(t.box(.34,.34,.34,11566926,2.98,l,.98));const U=de(16766874,.6,0);U.position.set(2.98,1.32,.98),p.add(U);const R=U.material;cn("interiorWarmth",it=>{R.opacity=it*.9},{speed:1});const D=re(16769192);p.add(rt(tt.box(8.3,.035,.1),D,0,2.8,.66)),p.add(rt(tt.box(2.2,.03,.08),D,-1.8,2.54,1.7)),e.add(p);const N=t.group("slide-out"),F=-1.8;N.add(t.box(2.5,.1,.94,12159580,F,.72,1.69,Tt.wood())),N.add(t.box(2.5,.46,.09,n,F,.82,2.12)),N.add(t.box(2.5,.2,.09,n,F,2.48,2.12));for(const it of[-3.05,-.55])N.add(t.box(.09,1.76,.9,n,it,.82,1.67));N.add(t.box(2.5,.1,.9,n,F,2.58,1.67));const P=t.window(2.24,1.2,o);P.position.set(F,1.28,2.17),N.add(P);const H=t.sofa(.9,12094060);H.position.set(F,l,1.7),N.add(H),N.add(t.box(.06,.44,.44,3028541,-3,1.63,1.7));const q=rt(tt.plane(.44,.34),f,-2.98,1.85,1.7);q.rotation.y=Math.PI/2,N.add(q);const z=t.group("bookshelf");z.add(t.box(.55,1,.2,11110495,0,0,0,Tt.wood()));for(let it=0;it<3;it++)for(let Wt=0;Wt<4;Wt++)z.add(t.box(.09,.18,.14,[14257258,8366280,14730362,10206607][Wt],-.18+Wt*.12,.08+it*.3,.12));z.position.set(-.9,l,1.7),N.add(z),e.add(N);const nt=t.group("canopy");for(const it of[-.8,2.4])nt.add(t.pole(.038,2.86,a,it,0,3.72));const X=He(3.4,2.46,15260088,{amplitude:.05,key:"typeACanopy"});X.position.set(.8,2.84,2.5),nt.add(X);const J=t.stringLights(3,8);J.position.set(.8,0,3.66),nt.add(J),e.add(nt),e.add(t.box(1.05,.1,.7,a,1.15,.4,1.62)),e.add(t.box(.9,.09,.44,10134182,1.15,.22,1.95)),e.add(t.rounded(1.2,.3,.92,15001574,-1.6,3.04,0,.06));for(let it=-2;it<=2;it++)e.add(t.box(.03,.02,.8,10134182,-1.6+it*.2,3.34,0));const et=rt(tt.torus(.26,.02,14),t.mat(9081496),-1.6,3.35,0);et.rotation.x=-Math.PI/2,e.add(et),e.add(t.cyl(.05,.05,.24,a,2.2,3.04,0,8));const St=rt(tt.sphere(.44,12),t.mat(14212312),2.2,3.38,0);St.scale.set(1,.22,.62),St.rotation.x=-.42,e.add(St),e.add(t.cyl(.02,.02,.22,a,2.2,3.34,.22,6)),e.add(t.sphere(.05,15262936,2.2,3.52,.32));const It=rt(tt.plane(1,.7),Ge(.25),.2,3.06,0);It.rotation.x=-Math.PI/2,e.add(It);for(const it of[-.38,.38])e.add(t.box(1.1,.03,.04,a,.2,3.04,it));for(const it of[-.36,.76])e.add(t.box(.04,.03,.8,a,it,3.04,0));const B=t.group("bike-rack");B.add(t.box(.1,.1,1.4,5200480,4.62,.52,0));for(const it of[-.6,.6])B.add(t.box(.08,.4,.08,5200480,4.62,.12,it));e.add(B);const k=t.bicycle(4951720);k.rotation.y=Math.PI/2,k.scale.setScalar(.85),k.position.set(4.72,.62,0),e.add(k);const at=re(16769184);at.transparent=!0,e.add(rt(tt.box(.7,.14,.04),at,1.15,2.72,1.28));const At=de(16767124,.9,0);At.position.set(1.15,2.79,1.34),e.add(At);const mt=At.material;cn("signLight",it=>{at.opacity=.35+it*.65,mt.opacity=it*.8},{speed:.8});const Lt=de(16768160,.7,0);Lt.position.set(1.15,.52,1.9),e.add(Lt);const ce=[];for(const it of[-.86,.86]){const Wt=de(16771512,.55,0);Wt.position.set(-4.74,1.02,it),e.add(Wt),ce.push(Wt.material)}const Dt=Lt.material;cn("flashlight",it=>{Dt.opacity=it*.7;for(const Wt of ce)Wt.opacity=it*.6},{speed:1.4});const $t=new Js(16765850,0,10,2);$t.position.set(.2,2.35,.55),e.add($t);const Xt={cabinLight:$t,screenMat:f,stripMat:D,nightLamp:U,root:e,warmth:.8,stripBase:new Ot(1,.86,.64),screenBase:new Ot(.46,.76,.86)};return ts=Xt,i.decor.bind("interiorWarmth",it=>{Xt.warmth=it,Xt.cabinLight.intensity=it*2.1,Xt.stripBase.setRGB(.35+it*.65,.28+it*.58,.18+it*.46),Xt.screenBase.setRGB(.2+it*.26,.42+it*.34,.52+it*.34),Xt.stripMat.color.copy(Xt.stripBase),Xt.screenMat.color.copy(Xt.screenBase)}),e},onTimeChange(i,t){if(!ts)return;const e=i==="dusk"||i==="night";ts.cabinLight.color.set(e?16763274:16771528),ts.nightLamp.material.color.set(e?16763274:16771528)},update(i,t,e){if(!ts)return;const n=ts,s=e.glow??1,r=e.wind?.strength??1,o=(.97+Math.sin(t*1.4)*.03)*(.75+s*.25);n.stripMat.color.copy(n.stripBase).multiplyScalar(o);const a=.98+Math.sin(t*2.6)*.02;n.screenMat.color.copy(n.screenBase).multiplyScalar(a);const l=.55+Math.sin(t*1.1)*.06+n.warmth*.12;n.nightLamp.scale.setScalar(l),n.root.scale.y=1+Math.sin(t*.55)*.0011*r}},l1=Object.freeze(Object.defineProperty({__proto__:null,default:a1},Symbol.toStringTag,{value:"Module"}));let Ls=null;const c1={id:"typeC",label:"C型房车",icon:"rv-c",build(i){const t=i.lib,e=new Me;e.name="vehicle-typeC";const n=15854813,s=14203274;e.add(t.box(8,.2,2.46,5858154,0,.4,0));for(const F of[-2.85,2.45])for(const P of[-1.24,1.24]){const H=t.wheel(.42,.22);H.position.set(F,0,P),e.add(H)}e.add(t.box(7.9,.12,2.52,s,0,.6,0)),e.add(t.box(7.3,.12,2.28,13216127,0,.72,0,Tt.wood())),e.add(t.box(7.3,1.76,.09,n,0,.84,-1.14)),e.add(t.box(.1,1.76,2.28,n,-3.65,.84,0)),e.add(t.box(.1,1.76,2.28,n,3.65,.84,0)),e.add(t.box(7.3,.1,2.28,n,0,2.51,0)),e.add(t.box(7.3,.48,.09,n,0,.84,1.14)),e.add(t.box(7.3,.26,.09,n,0,2.35,1.14));for(const F of[-3.65,-1.55,.55,2.65,3.65])e.add(t.box(.09,1.03,.1,n,F,1.32,1.14));for(const[F,P]of[[-2.6,2],[-.5,2],[1.6,2],[3.15,.9]]){const H=t.window(P,.94,7109508);H.position.set(F,1.36,1.2),e.add(H)}const r=t.group("cab");r.add(t.box(1.28,1.34,2.3,n,-3.98,.72,0)),r.add(t.box(1.34,.16,2.36,n,-3.98,2.06,0));const o=rt(tt.plane(1.02,.78),Ge(.22),-4.66,1.42,0);o.rotation.y=-Math.PI/2,r.add(o);for(const F of[-1.17,1.17]){const P=rt(tt.plane(.92,.66),Ge(.2),-4.02,1.46,F);r.add(P)}r.add(t.box(.14,.22,2.34,6779770,-4.66,.62,0));for(const F of[-.86,.86])r.add(t.box(.06,.16,.3,16771512,-4.66,1.02,F)),r.add(t.box(.1,.1,.1,5989997,-3.78,1.92,F*1.35));e.add(r);const a=t.group("cockpit");a.add(t.box(.62,.42,1.9,5989998,-3.7,.84,0));const l=re(7981276),c=rt(tt.plane(.44,.28),l,-3.66,1.36,.34);c.rotation.y=-Math.PI/2,a.add(c);for(const F of[-.62,.62]){a.add(t.box(.5,.3,.48,10194813,-3.9,.84,F)),a.add(t.box(.48,.64,.12,10194813,-3.62,1.14,F));const P=rt(tt.torus(.16,.028,12),t.mat(4147792),-3.52,1.43,F);P.rotation.y=Math.PI/2,a.add(P)}e.add(a);const h=t.group("interior");h.add(t.table(.92,.52,12159580).translateX(-1.75).translateZ(.62));const d=t.sofa(.8,12886395);d.position.set(-1.75,.84,.1),h.add(d);const u=t.sofa(.8,12886395);u.position.set(-1.75,.84,1.02),u.rotation.y=Math.PI,h.add(u);const f=t.sink();f.position.set(-.3,.84,-.86),h.add(f);const g=t.stove();g.position.set(.42,.84,-.86),h.add(g);const x=t.fridge(1.28);x.position.set(-1.02,.84,-.86),h.add(x);for(const F of[-.95,.05,.95]){const P=t.cabinet(.72,.36,.3,13081452);P.position.set(F,1.98,-.94),h.add(P)}const p=t.bed(1.72,1.02,15261128);p.position.set(2.55,.84,-.42),h.add(p);const m=de(16766874,.62,0);m.position.set(3.34,1.32,-.42),h.add(m);const M=m.material;cn("interiorWarmth",F=>{M.opacity=F*.9},{speed:1});const w=rt(tt.box(5.6,.035,.1),re(16770744),.2,2.36,.72);h.add(w),e.add(h);const y=t.group("pop-top");y.add(t.box(3.6,.1,2.2,n,.3,3.14,0));for(const F of[-1.5,2.1])for(const P of[-1.02,1.02])y.add(t.box(.07,.56,.07,12167304,F,2.58,P));for(const F of[-.85,1.55]){const P=He(1.1,.54,15128244,{vertical:!0,amplitude:.045,key:"popTopCurtain"});P.position.set(F,2.84,1.1),y.add(P)}y.add(t.box(3.6,.1,.1,s,.3,2.58,1.08)),e.add(y);const A=t.group("slide-out");A.add(t.box(2.5,.12,1.02,13216127,1.35,.72,1.25,Tt.wood())),A.add(t.box(2.5,1.42,.09,n,1.35,.84,1.26)),A.add(t.box(.09,1.42,1.02,n,.1,.84,1.76)),A.add(t.box(.09,1.42,1.02,n,2.6,.84,1.76)),A.add(t.box(2.5,.1,1.02,n,1.35,2.26,1.76));const E=t.window(2.16,.92,7109508);E.position.set(1.35,1.32,2.28),A.add(E);const _=t.sofa(1.3,12094060);_.position.set(1.3,.84,1.72),A.add(_);const b=t.group("bookshelf");b.add(t.box(.72,1.08,.24,11110495,0,0,0,Tt.wood()));for(let F=0;F<3;F++)for(let P=0;P<5;P++)b.add(t.box(.09,.2,.16,[14257258,8366280,14730362,10206607][P%4],-.27+P*.13,.1+F*.32,.14));b.position.set(2.18,.84,1.62),A.add(b),e.add(A);const U=t.group("canopy");for(const F of[.2,2.55])U.add(t.pole(.035,2.3,9081496,F,0,3.62));const R=He(2.6,2.42,15260088,{amplitude:.055,key:"canopyCloth"});R.position.set(1.38,2.48,2.41),U.add(R),e.add(U),e.add(t.box(1.05,.09,.36,9278616,1.35,.4,1.62)),e.add(t.box(.62,1.1,.05,14735298,-.1,.84,1.22)),e.add(t.box(.1,.05,.06,7109508,.14,1.52,1.27));for(const F of[-2.4,3])e.add(t.box(.72,.34,.05,13880247,F,.66,1.22));e.add(t.pole(.018,.62,7305856,-2.9,2.6,-.6));const D=t.wheel(.34,.16);D.position.set(3.72,1.05,0),D.rotation.y=Math.PI/2,e.add(D);const N=new Js(16765850,0,9,2);return N.position.set(.2,2.05,.55),e.add(N),i.decor.bind("interiorWarmth",F=>{N.intensity=F*1.85,l.color.setRGB(.42+F*.05,.72+F*.04,.86)}),Ls={cabinLight:N,screenMat:l,nightLamp:m},e},onTimeChange(i,t){if(!Ls)return;const e=i==="dusk"||i==="night";Ls.cabinLight.color.set(e?16765082:16771528)},update(i,t,e){if(!Ls)return;const n=.55+Math.sin(t*1.1)*.06+e.interiorWarmth*.12;Ls.nightLamp.scale.setScalar(n)}},h1=Object.freeze(Object.defineProperty({__proto__:null,default:c1},Symbol.toStringTag,{value:"Module"}));let es=null;const d1={id:"van",label:"B型露营面包车",icon:"van",build(i){const t=i.lib,e=new Me;e.name="vehicle-van";const n=15786690,s=6266523,r=14203274,o=13216127,a=5858154,l=3948872;e.add(t.box(6,.18,2,a,0,.42,0)),e.add(t.box(6,.12,2.1,s,0,.6,0));for(const B of[-2.15,2.15])for(const k of[-1.02,1.02]){const at=t.wheel(.36,.2);at.position.set(B,0,k),e.add(at),e.add(t.rounded(.86,.24,.16,n,B,.52,k*1.06,.07))}e.add(t.box(5.9,.1,2.1,o,0,.74,0,Tt.wood())),e.add(t.box(5.9,.4,.09,n,0,.84,-1.05)),e.add(t.box(5.9,.4,.09,n,0,.84,1.05)),e.add(t.box(.09,.4,2.1,n,2.95,.84,0)),e.add(t.box(5.9,.74,.09,s,0,1.24,-1.05)),e.add(t.box(5.9,.1,.09,s,0,1.98,1.05)),e.add(t.rounded(6.1,.2,2.26,s,0,2.08,0,.1));for(const[B,k]of[[-2.1,1.2],[-.3,1.95],[1.85,1.7]]){const at=t.window(k,.74,4615018);at.position.set(B,1.24,1.12),e.add(at)}for(const B of[-2.86,-1.4,.84,2.86])e.add(t.box(.08,.74,.1,s,B,1.24,1.07));const c=t.group("front-nose");c.add(t.rounded(.34,1.2,2.1,n,-2.95,.84,0,.14));const h=rt(tt.plane(1.7,.66),Ge(.22),-3.13,1.62,0);h.rotation.y=-Math.PI/2,c.add(h),c.add(t.box(.12,.18,2.14,r,-3.14,.62,0));for(const B of[-.78,.78])c.add(t.sphere(.1,16771512,-3.15,.98,B)),c.add(t.box(.1,.1,.1,l,-2.86,1.98,B*1.3));e.add(c);const d=t.group("cockpit");d.position.x=.16,d.add(t.box(.42,.3,1.8,5989998,-2.68,.84,0));const u=t.screen(.34,.2,7981276);u.position.set(-2.6,1.14,.55),d.add(u);const f=rt(tt.torus(.13,.026,12),t.mat(4147792),-2.44,1.26,.52);f.rotation.y=Math.PI/2,d.add(f);for(const B of[-.48,.48])d.add(t.box(.42,.16,.46,10194813,-2.16,.84,B)),d.add(t.box(.42,.44,.1,10194813,-1.94,1,B));e.add(d);const g=t.group("dinette"),x=t.sofa(.9,12886395);x.position.set(-1.15,.84,.55),x.rotation.y=Math.PI/2,g.add(x);const p=t.sofa(.9,12886395);p.position.set(.55,.84,.55),p.rotation.y=-Math.PI/2,g.add(p);const m=t.table(.9,.58);m.position.set(-.3,.84,.55),g.add(m),g.add(t.box(.84,.09,.52,15261128,-1.15,.84,-.42)),g.add(t.box(.5,.05,.4,14264444,-1.15,.93,-.42)),g.add(t.box(.28,.08,.38,15986402,-1.42,.93,-.42)),g.add(t.box(.06,.1,.4,r,-.3,1.1,-.98)),e.add(g);const M=re(9425120),w=t.group("laptop");w.add(t.box(.32,.02,.22,10133668,0,0,0));const y=t.box(.32,.2,.02,10133668,0,.01,-.11);y.rotation.x=-.32,w.add(y);const A=rt(tt.plane(.27,.16),M,0,.11,-.098);A.rotation.x=-.32,w.add(A),w.position.set(-.42,1.62,.55),e.add(w);const E=t.cone(.08,.11,16117984,1.48,1.54,-.55);e.add(E);const _=t.bottle(.06,.16,9418948);_.position.set(1.72,1.54,-.55),e.add(_),e.add(t.cyl(.045,.04,.07,15261128,1.84,1.54,-.55,10));for(const[B,k,at,At,mt]of[[.02,1.62,.7,14257258,.3],[-.05,1.62,.36,8366280,-.2],[.62,1.12,.55,14730362,.12]]){const Lt=t.box(.17,.03,.23,At,B,k,at);Lt.rotation.y=mt,e.add(Lt)}const b=t.fridge(.95);b.position.set(2.45,.84,-.7),e.add(b);const U=t.sink();U.position.set(1.65,.84,-.7),e.add(U);const R=t.group("single-burner");R.add(t.box(.5,.62,.44,11117462,0,0,0)),R.add(t.box(.44,.03,.38,4146504,0,.62,0)),R.add(t.cyl(.11,.11,.02,6317930,0,.65,0,12)),R.position.set(1,.84,-.7),e.add(R);for(const B of[1.05,1.75,2.45]){const k=t.cabinet(.55,.32,.26,13081452);k.position.set(B,1.7,-.82),e.add(k)}const D=t.stringLights(2.4,8,"stringLight");D.position.set(.2,-.35,.9),e.add(D);const N=re(16770744,.85);e.add(rt(tt.box(4.6,.035,.08),N,0,2,.55));const F=He(.8,.85,13208170,{vertical:!0,amplitude:.04,key:"vanTapestry"});F.position.set(.3,1.55,-.98),F.rotation.y=Math.PI,e.add(F),e.add(t.cyl(.09,.11,.12,11567184,2.7,.84,.6,10));const P=t.sphere(.12,7314271,2.7,.96,.6);P.scale.set(1,.85,1),e.add(P);const H=de(16766874,.55,0);H.position.set(2.55,1.55,.35),e.add(H);const q=t.group("pop-top");q.add(t.box(2.4,.06,2.06,o,1.1,2.28,0,Tt.wood()));for(const B of[-.05,2.25])for(const k of[-.98,.98])q.add(t.box(.06,.52,.06,r,B,2.34,k));q.add(t.box(2.3,.52,.05,15128244,1.1,2.34,-1.01)),q.add(t.box(.05,.52,2,15128244,-.02,2.34,0)),q.add(t.box(.05,.52,2,15128244,2.22,2.34,0));for(const B of[.55,1.65]){const k=He(.9,.5,15128244,{vertical:!0,amplitude:.05,key:"vanPopCurtain"});k.position.set(B,2.6,1.03),q.add(k)}q.add(t.rounded(2.5,.1,2.14,s,1.1,2.86,0,.05)),q.add(t.box(1.8,.12,1.4,15261128,1.1,2.34,0)),q.add(t.box(.4,.09,.5,15986402,.45,2.46,0)),q.add(t.box(.16,.03,.22,8366280,1.75,2.46,-.35)),e.add(q);const z=t.group("roof-rack");for(const B of[-2.7,-.7])for(const k of[-.98,.98])z.add(t.box(.05,.16,.05,l,B,2.28,k));for(const B of[-.98,.98])z.add(t.box(2.1,.04,.05,l,-1.7,2.44,B));for(const B of[-2.4,-1.7,-1])z.add(t.box(.04,.04,2,l,B,2.44,0));z.add(t.rounded(1.9,.09,.4,n,-1.7,2.48,.1,.05)),z.add(t.cone(.07,.12,r,-1.7,2.57,.1));for(const B of[-2.2,-1.2])z.add(t.box(.05,.02,.46,9067068,B,2.57,.1));e.add(z);const nt=t.group("canopy");for(const B of[-.55,2.25])nt.add(t.pole(.035,2.44,9081496,B,0,3.55));const X=He(3,2.42,15260088,{amplitude:.055,key:"vanAwning"});X.position.set(.85,2.44,2.37),nt.add(X),e.add(nt);const J=t.group("tailgate"),et=t.box(.7,.06,2.02,s,2.85,2.42,0);et.rotation.z=.34,J.add(et),J.add(t.box(.1,.18,2,r,2.95,2.28,0));for(const B of[-.55,.55]){const k=rt(tt.plane(.62,.7),Ge(.18,15918792),3,1.62,B);k.rotation.y=Math.PI/2,J.add(k)}e.add(J);for(const[B,k,at]of[[2.35,1.05,.4],[-2.45,1.02,.3],[.9,1,.26]])e.add(rt(tt.plane(at,at),t.mat(16777215,Tt.sticker()),B,k,1.105));e.add(t.box(2.2,.03,.03,r,0,1.22,1.11)),e.add(t.box(.12,.04,.04,l,-.9,1.14,1.12));for(const B of[-2.3,1.4])e.add(t.box(.6,.26,.03,13880247,B,.9,1.11));e.add(t.cyl(.05,.05,.03,l,2.6,1.02,-1.1,10));const St=new Js(16765850,0,8,2);St.position.set(.1,1.9,.45),e.add(St);const It=H.material;return cn("interiorWarmth",B=>{It.opacity=B*.9},{speed:1}),i.decor.bind("interiorWarmth",B=>{St.intensity=B*1.8,N.opacity=.12+B*.8,M.color.setRGB(.45+B*.08,.72+B*.05,.86)}),es={cabinLight:St,stripMat:N,laptopMat:M,nightLamp:H,stringLights:D},e},onTimeChange(i,t){if(!es)return;const e=i==="dusk"||i==="night";es.cabinLight.color.set(e?16765082:16771528)},update(i,t,e){if(!es)return;const n=.55+Math.sin(t*1.1)*.06+e.interiorWarmth*.12;es.nightLamp.scale.setScalar(n),es.stringLights.rotation.z=Math.sin(t*.7)*.012}},u1=Object.freeze(Object.defineProperty({__proto__:null,default:d1},Symbol.toStringTag,{value:"Module"})),js={dawn:{campLamp:.2,stringLight:.1,ember:.35,breakfastSet:1,smoke:.25,steam:.2,signLight:.5,searchLight:.35,warningLight:0,lighthouse:.2,dewHighlight:1,interiorWarmth:.2,vendingLight:.35,trafficLight:.3,storeLight:.55,flashlight:.3,fire:.2,dustMote:.25,awningCloth:1,flagCloth:1,cloudShadow:.1},daytime:{campLamp:0,stringLight:0,ember:0,breakfastSet:0,smoke:1,steam:1,signLight:0,searchLight:0,warningLight:0,lighthouse:0,dewHighlight:0,interiorWarmth:0,vendingLight:.45,trafficLight:.2,storeLight:.15,flashlight:0,fire:0,dustMote:.15,awningCloth:1,flagCloth:1,cloudShadow:.35},dusk:{campLamp:.8,stringLight:1,ember:.75,breakfastSet:0,smoke:.5,steam:.6,signLight:.6,searchLight:.65,warningLight:.6,lighthouse:.85,dewHighlight:0,interiorWarmth:.8,vendingLight:.85,trafficLight:.75,storeLight:.8,flashlight:.75,fire:.85,dustMote:.45,awningCloth:1,flagCloth:1,cloudShadow:.25},night:{campLamp:1,stringLight:1,ember:1,breakfastSet:0,smoke:.3,steam:.45,signLight:1,searchLight:1,warningLight:1,lighthouse:1,dewHighlight:0,interiorWarmth:1,vendingLight:1,trafficLight:1,storeLight:1,flashlight:1,fire:1,dustMote:.85,awningCloth:1,flagCloth:1,cloudShadow:0}},f1=Object.freeze(Object.defineProperty({__proto__:null,DECOR_MATRIX:js},Symbol.toStringTag,{value:"Module"})),p1={id:"dawn",label:"清晨",icon:"dawn",decor:js.dawn,light:{sunColor:16767400,sunIntensity:.88,sunPosition:[-17,9,11],hemiSky:13624050,hemiGround:7174770,hemiIntensity:.62,ambientColor:14214896,ambientIntensity:.34,exposure:.98,fogDensity:.006,fogColor:14082792,sky:{top:8365769,mid:15911328,bottom:11059154,star:.12,cloud:.3,cloudTint:16773340,sunColor:16769968,sunHeight:.22,sunGlow:.5},glow:.75,interiorWarmth:.25}},m1=Object.freeze(Object.defineProperty({__proto__:null,default:p1},Symbol.toStringTag,{value:"Module"})),g1={id:"daytime",label:"白天",icon:"day",decor:js.daytime,light:{sunColor:16774365,sunIntensity:1.35,sunPosition:[-6,27,9],hemiSky:12574962,hemiGround:8028264,hemiIntensity:.72,ambientColor:16777215,ambientIntensity:.38,exposure:1.06,fogDensity:6e-4,fogColor:14477808,sky:{top:7317724,mid:12574962,bottom:14412530,star:0,cloud:.35,cloudTint:16777215,sunColor:16774872,sunHeight:.85,sunGlow:.7},glow:.55,interiorWarmth:.05}},_1=Object.freeze(Object.defineProperty({__proto__:null,default:g1},Symbol.toStringTag,{value:"Module"})),x1={id:"dusk",label:"黄昏",icon:"dusk",decor:js.dusk,light:{sunColor:16756842,sunIntensity:.98,sunPosition:[-19,7,7],hemiSky:8950472,hemiGround:5919856,hemiIntensity:.55,ambientColor:10135240,ambientIntensity:.32,exposure:1,fogDensity:.0022,fogColor:11836072,sky:{top:3886214,mid:15241820,bottom:6975400,star:.06,cloud:.45,cloudTint:16762778,sunColor:16757865,sunHeight:.17,sunGlow:1},glow:1,interiorWarmth:.85}},v1=Object.freeze(Object.defineProperty({__proto__:null,default:x1},Symbol.toStringTag,{value:"Module"})),M1={id:"night",label:"夜间",icon:"night",decor:js.night,light:{sunColor:10467048,sunIntensity:.3,sunPosition:[11,21,-13],hemiSky:2833256,hemiGround:1845056,hemiIntensity:.34,ambientColor:4017274,ambientIntensity:.22,exposure:.82,fogDensity:.0035,fogColor:2832988,sky:{top:924216,mid:2503774,bottom:3951218,star:1,cloud:.25,cloudTint:8030637,sunColor:14674175,sunHeight:.66,sunGlow:.35},glow:1.35,interiorWarmth:1}},S1=Object.freeze(Object.defineProperty({__proto__:null,default:M1},Symbol.toStringTag,{value:"Module"})),ms={clear:{intensity:1,ambientDelta:0,fogDensity:8e-4,glow:1,exposure:1,windScale:1,wetness:0,snow:0,dust:0,clothSag:0,cloud:.05,saturation:1},cloudy:{intensity:.8,ambientDelta:.06,fogDensity:.0018,glow:1.05,exposure:.96,windScale:1.3,wetness:0,snow:0,dust:0,clothSag:0,cloud:.72,saturation:.95},rain:{intensity:.65,ambientDelta:.1,fogDensity:.0032,glow:1.2,exposure:.88,windScale:1.5,wetness:1,snow:0,dust:0,clothSag:1,cloud:.8,saturation:.88},fog:{intensity:.7,ambientDelta:.08,fogDensity:.016,glow:1.6,exposure:.9,windScale:.6,wetness:.2,snow:0,dust:0,clothSag:0,cloud:.55,saturation:.85},snow:{intensity:.75,ambientDelta:.14,fogDensity:.004,glow:1.15,exposure:.98,windScale:.8,wetness:0,snow:1,dust:0,clothSag:.3,cloud:.5,saturation:.9}},gd={clear:{rain:0,snow:0,cloud:.05,mist:0},cloudy:{rain:0,snow:0,cloud:.75,mist:0},rain:{rain:1,snow:0,cloud:.6,mist:.15},fog:{rain:0,snow:0,cloud:.35,mist:1},snow:{rain:0,snow:1,cloud:.4,mist:.2}},y1=Object.freeze(Object.defineProperty({__proto__:null,PARTICLE_DENSITY:gd,WEATHER_MODIFIERS:ms},Symbol.toStringTag,{value:"Module"})),b1={id:"clear",label:"晴朗",icon:"clear",light:ms.clear},w1=Object.freeze(Object.defineProperty({__proto__:null,default:b1},Symbol.toStringTag,{value:"Module"})),E1={id:"cloudy",label:"多云",icon:"cloudy",light:ms.cloudy},T1=Object.freeze(Object.defineProperty({__proto__:null,default:E1},Symbol.toStringTag,{value:"Module"})),A1={id:"fog",label:"浓雾",icon:"fog",light:ms.fog},R1=Object.freeze(Object.defineProperty({__proto__:null,default:A1},Symbol.toStringTag,{value:"Module"})),C1={id:"rain",label:"小雨",icon:"rain",light:ms.rain},P1=Object.freeze(Object.defineProperty({__proto__:null,default:C1},Symbol.toStringTag,{value:"Module"})),L1={id:"snow",label:"降雪",icon:"snow",light:ms.snow},D1=Object.freeze(Object.defineProperty({__proto__:null,default:L1},Symbol.toStringTag,{value:"Module"})),_l=new Map;function I1(i){_l.set(i.id,i)}function Ya(i){const t=_l.get(i);if(!t)throw new Error(`未注册的场景模块: ${i}`);return t}function _d(){return[..._l.values()]}function N1(){return _d().map(i=>({id:i.id,label:i.label,icon:i.icon}))}const xl=new Map;function U1(i){xl.set(i.id,i)}function qa(i){const t=xl.get(i);if(!t)throw new Error(`未注册的车型模块: ${i}`);return t}function xd(){return[...xl.values()]}function O1(){return xd().map(i=>({id:i.id,label:i.label,icon:i.icon}))}const vl=new Map;function F1(i){vl.set(i.id,i)}function Vr(i){const t=vl.get(i);if(!t)throw new Error(`未注册的时间预设: ${i}`);return t}function vd(){return[...vl.values()]}function B1(){return vd().map(i=>({id:i.id,label:i.label,icon:i.icon}))}const Ml=new Map;function z1(i){Ml.set(i.id,i)}function Za(i){const t=Ml.get(i);if(!t)throw new Error(`未注册的天气模块: ${i}`);return t}function Md(){return[...Ml.values()]}function k1(){return Md().map(i=>({id:i.id,label:i.label,icon:i.icon}))}function G1(){const i=Object.assign({"../scenes/highwaySA/index.ts":X_,"../scenes/pineForest/index.ts":Z_,"../scenes/seaCliff/index.ts":J_,"../scenes/wasteland/index.ts":t1});for(const[s,r]of Object.entries(i))s.includes("_template")||r.default&&I1(r.default);const t=Object.assign({"../vehicles/overland/index.ts":s1,"../vehicles/trailer/index.ts":o1,"../vehicles/typeA/index.ts":l1,"../vehicles/typeC/index.ts":h1,"../vehicles/van/index.ts":u1});for(const[s,r]of Object.entries(t))s.includes("_template")||r.default&&U1(r.default);const e=Object.assign({"../times/dawn.ts":m1,"../times/daytime.ts":_1,"../times/decorStates.ts":f1,"../times/dusk.ts":v1,"../times/night.ts":S1});for(const[,s]of Object.entries(e))s.default&&F1(s.default);const n=Object.assign({"../weathers/clear.ts":w1,"../weathers/cloudy.ts":T1,"../weathers/fog.ts":R1,"../weathers/modifiers.ts":y1,"../weathers/rain.ts":P1,"../weathers/snow.ts":D1});for(const[,s]of Object.entries(n))s.default&&z1(s.default)}function H1(){return`场景 ${_d().length} / 车型 ${xd().length} / 时间 ${vd().length} / 天气 ${Md().length}`}class V1{renderer;scene;camera;root;fpsFrames=0;fpsAcc=0;fps=60;constructor(t){this.renderer=new C_({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=nn,this.renderer.toneMapping=Ka,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=hh,this.renderer.setClearColor(10335439,1),this.scene=new Cu,this.camera=new _n(38,1,.1,300),this.camera.position.set(19.5,14.5,23.5),this.camera.lookAt(0,1.7,0),this.root=new Me,this.root.name="content-root",this.scene.add(this.root),this.resize()}resize(){const t=this.renderer.domElement.parentElement,e=t?.clientWidth||window.innerWidth,n=t?.clientHeight||window.innerHeight;e<=0||n<=0||(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n,!1))}render(t){this.renderer.render(this.scene,this.camera),this.fpsFrames++,this.fpsAcc+=t,this.fpsAcc>=.5&&(this.fps=this.fpsFrames/this.fpsAcc,this.fpsFrames=0,this.fpsAcc=0)}get stats(){const t=this.renderer.info;return{fps:Math.round(this.fps),calls:t.render.calls,triangles:t.render.triangles,geometries:t.memory.geometries,textures:t.memory.textures}}dispose(){this.renderer.dispose()}}const th={type:"change"},Sl={type:"start"},Sd={type:"end"},Nr=new so,eh=new Yn,W1=Math.cos(70*mu.DEG2RAD),Le=new C,en=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zo=1e-6;class X1 extends Uf{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new pi,this._lastTargetPosition=new C,this._quat=new pi().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ec,this._sphericalDelta=new Ec,this._scale=1,this._panOffset=new C,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new C,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=q1.bind(this),this._onPointerDown=Y1.bind(this),this._onPointerUp=Z1.bind(this),this._onContextMenu=ex.bind(this),this._onMouseWheel=J1.bind(this),this._onKeyDown=Q1.bind(this),this._onTouchStart=j1.bind(this),this._onTouchMove=tx.bind(this),this._onMouseDown=$1.bind(this),this._onMouseMove=K1.bind(this),this._interceptControlDown=nx.bind(this),this._interceptControlUp=ix.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ee.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(th),this.update(),this.state=ee.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),s<-Math.PI?s+=en:s>Math.PI&&(s-=en),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Le.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Nr.origin.copy(this.object.position),Nr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nr.direction))<W1?this.object.lookAt(this.target):(eh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nr.intersectPlane(eh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zo||this._lastTargetPosition.distanceToSquared(this.target)>Zo?(this.dispatchEvent(th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Le.copy(s).sub(this.target);let r=Le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Y1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function q1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Z1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sd),this.state=ee.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case rs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case rs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Sl)}function K1(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function J1(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(Sl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Sd))}function Q1(i){this.enabled!==!1&&this._handleKeyDown(i)}function j1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ci.ROTATE:if(this.enableRotate===!1){this.state=ee.NONE;break}this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case ci.PAN:if(this.enablePan===!1){this.state=ee.NONE;break}this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Sl)}function tx(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function ex(i){this.enabled!==!1&&i.preventDefault()}function nx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ix(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class sx{controls;constructor(t,e){const n=new X1(t,e);n.target.set(0,1.7,0),n.enableDamping=!0,n.dampingFactor=.065,n.enablePan=!1,n.rotateSpeed=.72,n.zoomSpeed=.85,n.minDistance=13,n.maxDistance=56,n.minPolarAngle=.16,n.maxPolarAngle=Math.PI/2-.055,n.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_ROTATE},n.update(),this.controls=n}update(){this.controls.update()}}const rx=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ox=`
uniform vec3 uTop;
uniform vec3 uMid;
uniform vec3 uBottom;
varying vec3 vDir;
void main() {
  float h = vDir.y;
  vec3 c = h >= 0.0
    ? mix(uMid, uTop, pow(clamp(h, 0.0, 1.0), 0.62))
    : mix(uMid, uBottom, pow(clamp(-h, 0.0, 1.0), 0.45));
  gl_FragColor = vec4(c, 1.0);
}`;class ax{group=new Me;uniforms={uTop:{value:new Ot(4878245)},uMid:{value:new Ot(14723448)},uBottom:{value:new Ot(6979496)}};stars;starMat;clouds=[];cloudMats=[];sun;sunMat;disc;discMat;elapsed=0;constructor(){this.group.name="sky";const t=new ne(new ao(135,32,20),new mi({uniforms:this.uniforms,vertexShader:rx,fragmentShader:ox,side:Ze,depthWrite:!1,fog:!1}));t.renderOrder=-1e3,t.frustumCulled=!1,this.group.add(t);const e=[];let n=20261110;const s=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let o=0;o<420;o++){const a=s()*Math.PI*2,l=.06+s()*.9,c=Math.sqrt(1-l*l);e.push(Math.cos(a)*c*118,l*118,Math.sin(a)*c*118)}const r=new Re;r.setAttribute("position",new Jt(e,3)),this.starMat=new ll({color:16774876,size:1.05,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),this.stars=new Gh(r,this.starMat),this.stars.renderOrder=-999,this.stars.frustumCulled=!1,this.group.add(this.stars);for(let o=0;o<9;o++){const a=new Qr({map:Tt.glow(),color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),l=new za(a),c=22+s()*26;l.scale.set(c,c*.24,1);const h=o/9*Math.PI*2+s()*.5;l.position.set(Math.cos(h)*96,18+s()*36,Math.sin(h)*96),l.userData.baseX=l.position.x,l.userData.speed=.35+s()*.5,l.renderOrder=-998,this.clouds.push(l),this.cloudMats.push(a),this.group.add(l)}this.sunMat=new Qr({map:Tt.glow(),color:16767136,transparent:!0,opacity:.6,depthWrite:!1,blending:Gs,fog:!1}),this.sun=new za(this.sunMat),this.sun.scale.set(26,26,1),this.sun.renderOrder=-997,this.group.add(this.sun),this.discMat=new Ae({color:16771e3,fog:!1,toneMapped:!1}),this.disc=new ne(new ro(2.6,24),this.discMat),this.disc.renderOrder=-996,this.group.add(this.disc)}apply(t){this.uniforms.uTop.value.set(t.top),this.uniforms.uMid.value.set(t.mid),this.uniforms.uBottom.value.set(t.bottom),this.starMat.opacity=Math.max(0,Math.min(1,t.star)),this.sunMat.color.set(t.sunColor),this.sunMat.opacity=.22+t.sunGlow*.55,this.discMat.color.set(t.sunColor);const e=t.sunHeight*62-6,n=-78,s=-46;this.sun.position.set(n,e,s),this.disc.position.set(n*.92,e,s*.92),this.disc.lookAt(0,e,0);const r=new Ot(t.cloudTint);for(let o=0;o<this.cloudMats.length;o++)this.cloudMats[o].color.copy(r),this.cloudMats[o].opacity=t.cloud*(.16+o%3*.05)}update(t,e){this.elapsed+=t;const n=e?.elapsed??this.elapsed,s=e?.wind?.strength??1;for(const r of this.clouds){const o=r.userData.baseX,a=r.userData.speed;r.position.x=o+Math.sin(n*.035*a*s)*12}this.starMat.opacity*=1+Math.sin(n*.7)*.002}}const Ee=(i,t,e)=>i+(t-i)*e,Nn=(i,t,e)=>new Ot(i).lerp(new Ot(t),e),lx=(i,t,e)=>[Ee(i[0],t[0],e),Ee(i[1],t[1],e),Ee(i[2],t[2],e)];function cx(i,t,e){return{top:Nn(i.top,t.top,e),mid:Nn(i.mid,t.mid,e),bottom:Nn(i.bottom,t.bottom,e),star:Ee(i.star,t.star,e),cloud:Ee(i.cloud,t.cloud,e),cloudTint:Nn(i.cloudTint,t.cloudTint,e),sunColor:Nn(i.sunColor,t.sunColor,e),sunHeight:Ee(i.sunHeight,t.sunHeight,e),sunGlow:Ee(i.sunGlow,t.sunGlow,e)}}function hx(i,t,e){return{sunColor:Nn(i.sunColor,t.sunColor,e),sunIntensity:Ee(i.sunIntensity,t.sunIntensity,e),sunPosition:lx(i.sunPosition,t.sunPosition,e),hemiSky:Nn(i.hemiSky,t.hemiSky,e),hemiGround:Nn(i.hemiGround,t.hemiGround,e),hemiIntensity:Ee(i.hemiIntensity,t.hemiIntensity,e),ambientColor:Nn(i.ambientColor,t.ambientColor,e),ambientIntensity:Ee(i.ambientIntensity,t.ambientIntensity,e),exposure:Ee(i.exposure,t.exposure,e),fogDensity:Ee(i.fogDensity,t.fogDensity,e),fogColor:Nn(i.fogColor,t.fogColor,e),sky:cx(i.sky,t.sky,e),glow:Ee(i.glow,t.glow,e),interiorWarmth:Ee(i.interiorWarmth,t.interiorWarmth,e),windScale:Ee(i.windScale,t.windScale,e),wetness:Ee(i.wetness,t.wetness,e),snow:Ee(i.snow,t.snow,e),dust:Ee(i.dust,t.dust,e),clothSag:Ee(i.clothSag,t.clothSag,e),saturation:Ee(i.saturation,t.saturation,e)}}function dx(i,t){return{...i,sunIntensity:i.sunIntensity*t.intensity,ambientIntensity:Math.max(.05,i.ambientIntensity+t.ambientDelta),fogDensity:Math.max(i.fogDensity,t.fogDensity),glow:i.glow*t.glow,exposure:i.exposure*t.exposure,sky:{...i.sky,cloud:Math.max(i.sky.cloud,t.cloud)},windScale:t.windScale,wetness:t.wetness,snow:t.snow,dust:t.dust,clothSag:t.clothSag,saturation:t.saturation}}function ux(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}class fx{sun;hemi;ambient;skyApply;fog;renderer;from;to;current;t=1;duration=1.6;constructor(t,e,n){this.renderer=e,this.skyApply=n,this.sun=new Df(16767400,1.1),this.sun.position.set(-14,18,12),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.camera.left=-15,this.sun.shadow.camera.right=15,this.sun.shadow.camera.top=15,this.sun.shadow.camera.bottom=-15,this.sun.shadow.camera.near=.5,this.sun.shadow.camera.far=70,this.sun.shadow.bias=-7e-4,this.sun.shadow.normalBias=.022,t.add(this.sun),t.add(this.sun.target),this.hemi=new Cf(12375792,7039580,.55),t.add(this.hemi),this.ambient=new If(16777215,.28),t.add(this.ambient),this.fog=new rl(11057356,1e-4),t.fog=this.fog}set(t,e=!1){!this.current||e?(this.from=t,this.to=t,this.current=t,this.t=1,this.apply(t)):(this.from=this.current,this.to=t,this.t=0,this.duration=1.6)}update(t){return this.t<1&&(this.t=Math.min(1,this.t+t/this.duration),this.current=hx(this.from,this.to,ux(this.t)),this.apply(this.current)),this.current}get spec(){return this.current}get transitioning(){return this.t<1}apply(t){this.sun.color.set(t.sunColor),this.sun.intensity=t.sunIntensity,this.sun.position.set(...t.sunPosition),this.hemi.color.set(t.hemiSky),this.hemi.groundColor.set(t.hemiGround),this.hemi.intensity=t.hemiIntensity,this.ambient.color.set(t.ambientColor),this.ambient.intensity=t.ambientIntensity,this.renderer.toneMappingExposure=t.exposure,this.fog.color.set(t.fogColor),this.fog.density=Math.max(1e-5,t.fogDensity),this.skyApply(t.sky)}}const sn=Object.freeze({size:20,half:10,inner:9.15,groundY:0,thickness:1.15,rim:.42}),is=Object.freeze({minX:-6.5,maxX:6.5,minZ:-2.7,maxZ:4.5}),yd=Object.freeze({front:{minX:-5.7,maxX:5.7,minZ:4.9,maxZ:7.7,cols:6,rows:2},back:{minX:-8.9,maxX:8.9,minZ:-7.8,maxZ:-3.1,cols:8,rows:2},left:{minX:-9,maxX:-6.9,minZ:-2.5,maxZ:4.3,cols:2,rows:6},right:{minX:6.9,maxX:9,minZ:-2.5,maxZ:4.3,cols:2,rows:6},far:{minX:-9,maxX:9,minZ:7.9,maxZ:9.05,cols:8,rows:1},backFar:{minX:-9,maxX:9,minZ:-9.05,maxZ:-7.9,cols:8,rows:1}}),bd=Object.freeze({typeC:{halfLength:4.9,halfWidth:1.35,height:3.4,deployZ:4.1,deployMinusZ:1.6},typeA:{halfLength:5,halfWidth:1.55,height:3.65,deployZ:4.2,deployMinusZ:1.75},trailer:{halfLength:5.8,halfWidth:1.45,height:3.35,deployZ:4.05,deployMinusZ:1.65},van:{halfLength:3.25,halfWidth:1.25,height:2.95,deployZ:3.95,deployMinusZ:1.45},overland:{halfLength:4.1,halfWidth:1.35,height:4.25,deployZ:4.15,deployMinusZ:1.55}}),wd=Object.freeze({seaCliff:[{id:"awning",zone:"front",cell:[0,0],span:[2,1],h:2.7,kind:"fabric",label:"遮阳天幕"},{id:"table",zone:"front",cell:[2,0],h:.78,kind:"wood",label:"折叠桌"},{id:"chairs",zone:"front",cell:[3,0],h:.86,kind:"wood",label:"折叠椅"},{id:"grill",zone:"front",cell:[4,0],h:.72,kind:"metal",label:"烧烤炉"},{id:"campLamp",zone:"front",cell:[5,0],h:1.3,kind:"light",label:"小营地灯"},{id:"picnicMat",zone:"front",cell:[0,1],h:.06,kind:"fabric",label:"野餐垫"},{id:"groundMat",zone:"front",cell:[1,1],h:.05,kind:"fabric",label:"防水地垫"},{id:"utilityPost",zone:"front",cell:[2,1],h:1.1,kind:"metal",label:"水电桩与管线"},{id:"bicycle",zone:"front",cell:[3,1],h:1.05,kind:"metal",label:"折叠自行车"},{id:"boardwalk",zone:"front",cell:[4,1],span:[2,1],h:.14,kind:"wood",label:"木栈道"},{id:"railing",zone:"back",cell:[0,0],span:[3,1],h:1.05,kind:"wood",label:"崖边护栏"},{id:"bench",zone:"back",cell:[3,0],h:.92,kind:"wood",label:"观景长椅"},{id:"signpost",zone:"back",cell:[4,0],h:1.85,kind:"wood",label:"路牌"},{id:"stoneSteps",zone:"back",cell:[5,0],span:[2,1],h:.55,kind:"stone",label:"通往小海湾的石阶"},{id:"reefCluster",zone:"back",cell:[0,1],span:[2,1],h:1.15,kind:"stone",label:"礁石"},{id:"seaGrass",zone:"back",cell:[2,1],h:.55,kind:"plant",label:"海草"},{id:"cliffEdge",zone:"back",cell:[3,1],span:[3,1],h:.4,kind:"stone",label:"崖沿草坡"},{id:"coastLight",zone:"right",cell:[0,0],h:1.45,kind:"light",label:"海岸营地灯"},{id:"ropePost",zone:"left",cell:[0,0],h:.95,kind:"wood",label:"栈道缆桩"},{id:"lighthouse",zone:"far",cell:[0,0],span:[2,1],h:3.6,kind:"stone",label:"防波堤灯塔"},{id:"breakwater",zone:"far",cell:[2,0],span:[3,1],h:.85,kind:"stone",label:"防波堤"},{id:"sailboat",zone:"far",cell:[6,0],h:1.6,kind:"wood",label:"远处小帆船"},{id:"seaBackdrop",zone:"backFar",cell:[0,0],span:[8,1],h:.02,kind:"water",label:"海面"}],pineForest:[{id:"hammock",zone:"front",cell:[0,0],span:[2,1],h:1.75,kind:"fabric",label:"两树间吊床"},{id:"campfire",zone:"front",cell:[2,0],h:.55,kind:"fire",label:"篝火堆"},{id:"logSeats",zone:"front",cell:[3,0],h:.48,kind:"wood",label:"环形原木凳"},{id:"deck",zone:"front",cell:[4,0],span:[2,1],h:.16,kind:"wood",label:"木质营位平台"},{id:"firewood",zone:"front",cell:[0,1],h:.72,kind:"wood",label:"垒起的柴堆"},{id:"laundry",zone:"front",cell:[1,1],h:1.6,kind:"fabric",label:"晾晒的毛巾"},{id:"waterBucket",zone:"front",cell:[2,1],h:.48,kind:"metal",label:"打水桶与水瓢"},{id:"woodSteps",zone:"front",cell:[3,1],h:.3,kind:"wood",label:"林间木阶步道"},{id:"trailSign",zone:"front",cell:[4,1],h:1.8,kind:"wood",label:"指路木牌"},{id:"undergrowth",zone:"front",cell:[5,1],h:.55,kind:"plant",label:"苔藓蕨类与蘑菇"},{id:"stream",zone:"back",cell:[0,0],span:[5,1],h:.05,kind:"water",label:"山涧小溪"},{id:"footbridge",zone:"back",cell:[5,0],span:[2,1],h:.62,kind:"wood",label:"跨溪小木桥"},{id:"birdhouse",zone:"back",cell:[0,1],h:1.3,kind:"wood",label:"树干鸟屋"},{id:"bearBox",zone:"back",cell:[1,1],h:.9,kind:"metal",label:"防熊食物储藏箱"},{id:"fernPatch",zone:"back",cell:[2,1],span:[2,1],h:.48,kind:"plant",label:"蕨类苔藓"},{id:"stoneLantern",zone:"back",cell:[5,1],h:.85,kind:"stone",label:"溪边石灯"},{id:"pineLeft",zone:"left",cell:[0,0],span:[2,3],h:5.2,kind:"tree",label:"左侧层叠松林"},{id:"pineRight",zone:"right",cell:[0,0],span:[2,3],h:5.4,kind:"tree",label:"右侧层叠松林"},{id:"pineCornerL",zone:"left",cell:[0,3],span:[2,3],h:4.6,kind:"tree",label:"左后松林"},{id:"pineCornerR",zone:"right",cell:[0,3],span:[2,3],h:4.8,kind:"tree",label:"右后松林"},{id:"mountains",zone:"far",cell:[0,0],span:[8,1],h:3.2,kind:"stone",label:"远处层叠山脊与云带"},{id:"forestFloor",zone:"backFar",cell:[0,0],span:[8,1],h:.05,kind:"plant",label:"林缘地被"}],wasteland:[{id:"bunker",zone:"front",cell:[0,0],span:[2,1],h:2.4,kind:"concrete",label:"混凝土掩体与防爆门"},{id:"sandbags",zone:"front",cell:[2,0],h:.85,kind:"sand",label:"沙袋工事"},{id:"barrelGrill",zone:"front",cell:[3,0],h:1.05,kind:"metal",label:"油桶改造烧烤架"},{id:"clothesline",zone:"front",cell:[4,0],span:[2,1],h:1.75,kind:"fabric",label:"晾衣绳与工装"},{id:"waterPurifier",zone:"front",cell:[0,1],h:1.35,kind:"metal",label:"净水装置"},{id:"generator",zone:"front",cell:[1,1],h:1.1,kind:"metal",label:"冒蒸汽的发电机"},{id:"solarPanels",zone:"front",cell:[2,1],span:[2,1],h:1.25,kind:"metal",label:"太阳能板阵列"},{id:"oilDrums",zone:"front",cell:[4,1],h:.95,kind:"metal",label:"油桶"},{id:"warningSign",zone:"front",cell:[5,1],h:1.55,kind:"metal",label:"手写警示牌"},{id:"watchtower",zone:"back",cell:[0,0],span:[2,1],h:4.6,kind:"metal",label:"铁架瞭望塔与探照灯"},{id:"radar",zone:"back",cell:[2,0],h:2.9,kind:"metal",label:"旋转雷达天线"},{id:"containers",zone:"back",cell:[3,0],span:[2,1],h:2.3,kind:"metal",label:"锈蚀集装箱"},{id:"wreck",zone:"back",cell:[5,0],span:[2,1],h:1.3,kind:"metal",label:"废旧汽车残骸"},{id:"tires",zone:"back",cell:[0,1],h:.8,kind:"metal",label:"轮胎堆"},{id:"corrugatedFence",zone:"back",cell:[1,1],span:[4,1],h:2.05,kind:"metal",label:"波纹铁皮围墙"},{id:"wireFence",zone:"back",cell:[5,1],span:[3,1],h:1.55,kind:"metal",label:"缠绕铁丝网"},{id:"barrelStack",zone:"left",cell:[0,0],h:1.1,kind:"metal",label:"左侧油桶堆"},{id:"supplyCrate",zone:"right",cell:[0,0],h:.95,kind:"metal",label:"补给箱"},{id:"ruinedSkyline",zone:"far",cell:[0,0],span:[8,1],h:3.4,kind:"concrete",label:"断裂高架桥与荒废城市剪影"},{id:"wasteGround",zone:"backFar",cell:[0,0],span:[8,1],h:.05,kind:"sand",label:"废土地表"}],highwaySA:[{id:"gasCanopy",zone:"front",cell:[0,0],span:[3,1],h:3.9,kind:"concrete",label:"加油站雨棚与加油机"},{id:"charger",zone:"front",cell:[3,0],h:1.55,kind:"metal",label:"电动车充电桩"},{id:"vending",zone:"front",cell:[4,0],h:2.05,kind:"light",label:"自动售货机（货道可见）"},{id:"flagpole",zone:"front",cell:[5,0],h:3.1,kind:"fabric",label:"旗杆与小旗"},{id:"benchBins",zone:"front",cell:[0,1],h:.95,kind:"metal",label:"长椅与分类垃圾桶"},{id:"washBasin",zone:"front",cell:[1,1],h:1.05,kind:"concrete",label:"洗手池"},{id:"walkway",zone:"front",cell:[2,1],span:[3,1],h:2.35,kind:"concrete",label:"遮阳连廊与公共步道"},{id:"planter",zone:"front",cell:[5,1],h:.62,kind:"plant",label:"绿化带"},{id:"store",zone:"back",cell:[0,0],span:[3,1],h:3.35,kind:"concrete",label:"便利店与发光招牌"},{id:"diningWindow",zone:"back",cell:[3,0],span:[2,1],h:2.3,kind:"light",label:"餐饮区大玻璃窗"},{id:"roadSign",zone:"back",cell:[5,0],span:[2,1],h:3.05,kind:"metal",label:"高速路牌与出口指示牌"},{id:"streetTrees",zone:"back",cell:[0,1],span:[3,1],h:3.2,kind:"tree",label:"行道树"},{id:"parkingLines",zone:"back",cell:[3,1],span:[3,1],h:.02,kind:"decal",label:"车位划线"},{id:"guardrail",zone:"back",cell:[6,1],span:[2,1],h:.85,kind:"metal",label:"公路护栏"},{id:"lampPost",zone:"left",cell:[0,0],h:3.6,kind:"light",label:"步道灯杆"},{id:"signBoard",zone:"right",cell:[0,0],h:2.4,kind:"light",label:"服务区指示灯箱"},{id:"highway",zone:"far",cell:[0,0],span:[8,1],h:.12,kind:"decal",label:"公路主线车流灯光"},{id:"roadside",zone:"backFar",cell:[0,0],span:[8,1],h:.05,kind:"decal",label:"路侧远景"}]}),px=Object.freeze({seaCliff:["awning","table","chairs","grill","campLamp","picnicMat","groundMat","utilityPost","bicycle","boardwalk","railing","bench","signpost","stoneSteps","reefCluster","seaGrass","lighthouse","breakwater","sailboat"],pineForest:["hammock","campfire","logSeats","deck","woodSteps","footbridge","trailSign","birdhouse","bearBox","undergrowth","firewood","laundry","waterBucket","stream","mountains","pineLeft","pineRight"],wasteland:["bunker","watchtower","sandbags","containers","corrugatedFence","wireFence","wreck","tires","oilDrums","warningSign","waterPurifier","generator","solarPanels","radar","barrelGrill","clothesline","ruinedSkyline"],highwaySA:["gasCanopy","store","vending","charger","diningWindow","walkway","streetTrees","highway","roadSign","benchBins","washBasin","flagpole","guardrail","planter","parkingLines"]}),nh=.86;function mx(i){const t=yd[i.zone];if(!t)throw new Error(`unknown zone: ${i.zone}`);const e=i.span?i.span[0]:1,n=i.span?i.span[1]:1,s=(t.maxX-t.minX)/t.cols,r=(t.maxZ-t.minZ)/t.rows,o=t.minX+i.cell[0]*s,a=t.minZ+i.cell[1]*r,l=s*e,c=r*n,h=l*nh,d=c*nh,u=o+l/2,f=a+c/2;return{...i,x:u,z:f,w:h,d,h:i.h||.5,box:{minX:u-h/2,maxX:u+h/2,minZ:f-d/2,maxZ:f+d/2},slot:{minX:o,maxX:o+l,minZ:a,maxZ:a+c}}}function Ed(i){const t=wd[i];if(!t)throw new Error(`unknown scene: ${i}`);return t.map(mx)}function ih(i,t){return i.minX<t.maxX-1e-6&&i.maxX>t.minX+1e-6&&i.minZ<t.maxZ-1e-6&&i.maxZ>t.minZ+1e-6}function gx(){const i=[],t={minX:-sn.inner,maxX:sn.inner,minZ:-sn.inner,maxZ:sn.inner};for(const[e,n]of Object.entries(bd)){const s={minX:-n.halfLength,maxX:n.halfLength,minZ:-n.halfWidth,maxZ:n.deployZ};(s.minX<is.minX||s.maxX>is.maxX||s.minZ<is.minZ||s.maxZ>is.maxZ)&&i.push(`[vehicle:${e}] 车型占位超出 KEEP_OUT 禁放区`),n.height>6&&i.push(`[vehicle:${e}] 车高 ${n.height} 超出取景上限`)}for(const e of Object.keys(wd)){const n=Ed(e),s=new Set(n.map(r=>r.id));for(const r of px[e]||[])s.has(r)||i.push(`[${e}] 缺少提示词点名元素: ${r}`);for(const r of n){const o=`[${e}/${r.id}]`;(r.box.minX<t.minX||r.box.maxX>t.maxX||r.box.minZ<t.minZ||r.box.maxZ>t.maxZ)&&i.push(`${o} 越出底座内界 (±${sn.inner})`),ih(r.box,is)&&i.push(`${o} 侵入中央营位禁放区（会与车辆穿模）`);const a=yd[r.zone];(r.slot.minX<a.minX-1e-6||r.slot.maxX>a.maxX+1e-6||r.slot.minZ<a.minZ-1e-6||r.slot.maxZ>a.maxZ+1e-6)&&i.push(`${o} cell+span 越出所属分区 ${r.zone}`),r.h>6&&i.push(`${o} 高度 ${r.h} 超出取景上限`)}for(let r=0;r<n.length;r++)for(let o=r+1;o<n.length;o++){const a=n[r],l=n[o];a.h<=.06||l.h<=.06||ih(a.box,l.box)&&i.push(`[${e}] 实体重叠（穿模）: ${a.id} × ${l.id}`)}}return i}const sh={grass:Tt.grass,forestFloor:Tt.forestFloor,gravel:Tt.gravel,asphalt:Tt.asphalt,concrete:Tt.concrete,sand:Tt.sand,parkingLines:Tt.parkingLines};class _x{group=new Me;topMat;sideMat;strataMat;rimMats=[];applied=null;constructor(){this.group.name="base-plate",this.build()}build(){const t=sn.size,e=sn.thickness;this.topMat=Pi(8366185,{map:Tt.grass()}),this.sideMat=Pi(10128242),this.strataMat=Pi(7826008);const n=rt(tt.box(t,e*.32,t),[this.sideMat,this.sideMat,this.topMat,this.strataMat,this.sideMat,this.sideMat],0,-e*.16,0);n.name="base-top",n.receiveShadow=!0,n.castShadow=!1,n.userData.noOutline=!0,this.group.add(n);const s=rt(tt.box(t*.992,e*.68,t*.992),this.strataMat,0,-e*.32-e*.34,0);s.name="base-strata",s.receiveShadow=!0,s.castShadow=!1,s.userData.noOutline=!0,this.group.add(s);const r=rt(tt.box(t*1.012,.14,t*1.012),Pi(4867904),0,-e-.07,0);r.name="base-plinth",r.castShadow=!1,r.userData.noOutline=!0,this.group.add(r);const o=sn.rim,a=t-o;for(let l=0;l<4;l++){const c=Pi(9272418);this.rimMats.push(c);const h=l<2,d=rt(h?tt.rounded(t,.11,o,.04):tt.rounded(o,.11,a,.04),c,h?0:(l===2?-1:1)*(t-o)/2,.055,h?(l===0?-1:1)*(t-o)/2:0);d.name=`base-rim-${l}`,d.castShadow=!1,d.userData.noOutline=!0,this.group.add(d)}}apply(t){if(this.applied?.key!==t.key){this.applied=t,this.topMat.color.set(t.top),this.topMat.map=t.topTexture&&sh[t.topTexture]?sh[t.topTexture]():null,this.topMat.needsUpdate=!0,this.sideMat.color.set(t.side),this.strataMat.color.set(t.strata);for(const e of this.rimMats)e.color.set(t.rim)}}get ink(){return this.applied?.ink??2897222}}class xx{entries=[];elapsed=0;add(t,e=0){const n={fn:t,interval:e>0?1/e:0,acc:0};return this.entries.push(n),()=>{const s=this.entries.indexOf(n);s>=0&&this.entries.splice(s,1)}}update(t){const e=Math.min(t,.05);this.elapsed+=e;for(const n of this.entries)n.interval===0?n.fn(e,this.elapsed):(n.acc+=e,n.acc>=n.interval&&(n.fn(n.acc,this.elapsed),n.acc=0))}get time(){return this.elapsed}clear(){this.entries.length=0}}class vx{el;visible=!1;acc=0;constructor(t){this.el=document.createElement("div"),this.el.className="debug-panel",this.el.style.cssText=["position:absolute","left:12px","top:12px","z-index:80","padding:10px 13px","border-radius:10px","font:11px/1.6 ui-monospace,Consolas,monospace","color:#dce8f5","background:rgba(18,26,38,0.82)","border:1px solid rgba(160,190,220,0.25)","backdrop-filter:blur(8px)","white-space:pre","pointer-events:none","display:none","max-width:340px","max-height:60vh","overflow:hidden"].join(";"),t.appendChild(this.el),this.visible=new URLSearchParams(location.search).has("debug"),this.el.style.display=this.visible?"block":"none"}toggle(){this.visible=!this.visible,this.el.style.display=this.visible?"block":"none"}get isVisible(){return this.visible}update(t,e){if(!this.visible||(this.acc+=t,this.acc<.25))return;this.acc=0;const n=[`组合  ${e.combo}`,`帧率  ${e.fps} fps   DrawCall ${e.calls}   三角面 ${e.triangles}`,`资源  geo ${e.geometries}   tex ${e.textures}`,`模块  ${e.moduleCount}`,`静态布局校验  ${e.staticIssues===0?"通过 (0)":`问题 ${e.staticIssues}`}`,`运行时穿模    ${e.runtimeIssues.length===0?"通过 (0)":`冲突 ${e.runtimeIssues.length}`}`];e.runtimeIssues.length>0&&n.push("",...e.runtimeIssues.slice(0,6).map(s=>` ! ${s}`)),this.el.textContent=n.join(`
`),this.el.style.borderColor=e.runtimeIssues.length>0?"rgba(240,120,110,0.75)":"rgba(160,190,220,0.25)"}}const rh=new Map;function Mx(i=2897222){const t=String(i);let e=rh.get(t);return e||(e=new Ae({color:i,side:Ze,toneMapped:!1}),rh.set(t,e)),e}function Sx(i,t=.035,e=2897222){if(i.userData.noOutline||i.userData.isOutline||Array.isArray(i.material)||i.material.transparent)return null;const n=i.geometry,s=n.getAttribute("position"),r=n.getAttribute("normal");if(!s||!r)return null;const o=n.clone(),a=o.getAttribute("position"),l=o.getAttribute("normal");if(a===l)return null;for(let h=0;h<a.count;h++)a.setXYZ(h,a.getX(h)+l.getX(h)*t,a.getY(h)+l.getY(h)*t,a.getZ(h)+l.getZ(h)*t);a.needsUpdate=!0;const c=new ne(o,Mx(e));return c.name="__outline",c.userData.isOutline=!0,c.userData.noMerge=!0,c.castShadow=!1,c.receiveShadow=!1,c.renderOrder=-1,i.add(c),c}function oh(i,t={}){const e=[];i.traverse(s=>{s instanceof ne&&(s.isInstancedMesh||s.userData.noBounds||s.userData.isOutline||s.userData.noOutline||s.material instanceof Ae||Array.isArray(s.material)||s.material.transparent||t.minSize&&(s.geometry.computeBoundingSphere(),(s.geometry.boundingSphere?.radius??0)<t.minSize)||e.push(s))});let n=0;for(const s of e)Sx(s,t.thickness??.035,t.color)&&n++;return n}function $o(i,t){return i.minX<t.maxX-.02&&i.maxX>t.minX+.02&&i.minZ<t.maxZ-.02&&i.maxZ>t.minZ+.02}function yl(i){i.updateMatrixWorld(!0);const t=new Jn,e=new C,n=new jt,s=new jt;return i.traverse(r=>{if(r.userData.noBounds||r.userData.isOutline||!(r instanceof ne)||!r.geometry)return;const o=r.geometry.getAttribute("position");if(!o)return;const a=r;if(a.isInstancedMesh){for(let l=0;l<a.count;l++){a.getMatrixAt(l,n),s.multiplyMatrices(r.matrixWorld,n);for(let c=0;c<o.count;c++)e.set(o.getX(c),o.getY(c),o.getZ(c)).applyMatrix4(s),t.expandByPoint(e)}return}for(let l=0;l<o.count;l++)e.set(o.getX(l),o.getY(l),o.getZ(l)).applyMatrix4(r.matrixWorld),t.expandByPoint(e)}),t}function ah(i){const t=yl(i);return{minX:t.min.x,maxX:t.max.x,minZ:t.min.z,maxZ:t.max.z,minY:t.min.y,maxY:t.max.y}}class yx{sceneId="";current=[];runtime=[];vehicleBox=null;vehicleId="";load(t){this.sceneId=t,this.current=Ed(t),this.runtime=[]}get specs(){return this.current}byId(t){return this.current.find(e=>e.id===t)}place(t,e,n={}){const s=this.byId(e);if(!s)return console.warn(`[layout] 未登记的物件 id: ${e}（请加入 layouts.js 的 SCENE_LAYOUTS.${this.sceneId}）`),t;t.position.set(s.x,sn.groundY,s.z),t.userData.layoutId=e;const r=s.h<=.06;if(t.userData.layoutDecal=r,n.fit!==!1){const a=yl(t),l=a.max.x-a.min.x,c=a.max.z-a.min.z;if(l>0&&c>0){const h=Math.min(1,s.w/l,s.d/c);h<1&&t.scale.multiplyScalar(h)}}n.alignGround!==!1&&z_(t,sn.groundY);const o=ah(t);return this.runtime.push({id:e,box:{minX:o.minX,maxX:o.maxX,minZ:o.minZ,maxZ:o.maxZ},height:o.maxY-o.minY,decal:r}),t}setVehicleBox(t,e){this.vehicleBox=ah(t),this.vehicleId=e}staticCheck(){return gx()}checkRuntime(){const t=[],e={minX:-sn.inner,maxX:sn.inner,minZ:-sn.inner,maxZ:sn.inner};for(const n of this.runtime)(n.box.minX<e.minX-.05||n.box.maxX>e.maxX+.05||n.box.minZ<e.minZ-.05||n.box.maxZ>e.maxZ+.05)&&t.push(`[${n.id}] 真实包围盒越出底座内界`),$o(n.box,is)&&t.push(`[${n.id}] 真实包围盒侵入中央营位（与车辆穿模）`),this.vehicleBox&&$o(n.box,this.vehicleBox)&&t.push(`[${n.id}] 与车辆 ${this.vehicleId} 包围盒重叠（穿模）`);for(let n=0;n<this.runtime.length;n++)for(let s=n+1;s<this.runtime.length;s++){const r=this.runtime[n],o=this.runtime[s];r.decal||o.decal||$o(r.box,o.box)&&t.push(`场景实体互相穿模: ${r.id} × ${o.id}`)}if(this.vehicleBox){const n=this.vehicleBox,s=bd[this.vehicleId];s&&((n.minX<-s.halfLength-.25||n.maxX>s.halfLength+.25)&&t.push(`车辆 ${this.vehicleId} 车身长度超出登记占位`),n.maxZ>s.deployZ+.25&&t.push(`车辆 ${this.vehicleId} 展开机构超出登记占位`),n.maxY>s.height+.35&&t.push(`车辆 ${this.vehicleId} 高度超出登记占位`))}return t}summary(){return{scene:this.sceneId||"-",objects:this.runtime.length,vehicle:this.vehicleId||"-",runtimeIssues:this.checkRuntime().length,staticIssues:this.staticCheck().length}}}const Ds=new yx;class bx{ink=2897222;mat(t,e){return Pi(t,e?{map:e}:{})}box(t,e,n,s,r=0,o=0,a=0,l){return rt(tt.box(t,e,n),this.mat(s,l),r,o+e/2,a)}rounded(t,e,n,s,r=0,o=0,a=0,l=.06){return rt(tt.rounded(t,e,n,l),this.mat(s),r,o+e/2,a)}cyl(t,e,n,s,r=0,o=0,a=0,l=12){return rt(tt.cyl(t,e,n,l),this.mat(s),r,o+n/2,a)}sphere(t,e,n=0,s=0,r=0){return rt(tt.sphere(t),this.mat(e),n,s+t,r)}cone(t,e,n,s=0,r=0,o=0){return rt(tt.cone(t,e),this.mat(n),s,r+e/2,o)}plane(t,e,n,s=.012,r){const o=rt(tt.plane(t,e),this.mat(n,r),0,s,0);return o.rotation.x=-Math.PI/2,o.castShadow=!1,o.userData.noOutline=!0,o}group(t="prop"){const e=new Me;return e.name=t,e}pole(t,e,n,s=0,r=0,o=0){return this.cyl(t,t,e,n,s,r,o,8)}sign(t,e=1.15,n=.72,s=9071432,r=1.1){const o=this.group("sign");o.add(this.pole(.055,r,s,0,0,0));const a=rt(tt.box(e,n,.07),this.mat(16774360,Tt.sign(t)),0,r+n/2,.045);return o.add(a),o.add(this.box(e+.08,.05,.1,7165501,0,r-.02,.045)),o}lamp(t=1.2,e=5069670,n=16766346,s="campLamp"){const r=this.group("lamp");r.add(this.pole(.045,t,e)),r.add(this.cyl(.16,.1,.22,e,0,t,0));const o=rt(tt.sphere(.095),re(16771512),0,t+.12,0);r.add(o);const a=de(n,.95,0);a.position.set(0,t+.12,0),r.add(a);const l=o.material,c=a.material;return cn(s,h=>{l.color.setRGB(1,.88+h*.1,.66+h*.2),c.opacity=h*.85,a.scale.setScalar(.7+h*.5)},{speed:1.1}),r}stringLights(t=3.4,e=9,n="stringLight"){const s=this.group("string-lights"),r=[];for(let l=0;l<=24;l++){const c=l/24;r.push(new C(-t/2+c*t,2.35-Math.sin(c*Math.PI)*.32,0))}const o=new Rn(r);s.add(new ne(new Mn(o,32,.012,4,!1),this.mat(4867648)));const a=this.group("bulbs");for(let l=1;l<e;l++){const c=o.getPoint(l/e),h=rt(tt.sphere(.055),re(16767372),c.x,c.y-.05,c.z);a.add(h);const d=de(16764794,.36,0);d.position.copy(h.position),a.add(d);const u=h.material,f=d.material;cn(n,g=>{u.opacity=.4+g*.6,f.opacity=g*.7},{speed:1.8,phase:l*.7}),u.transparent=!0}return s.add(a),s}table(t=1.1,e=.68,n=12159580){const s=this.group("table");s.add(this.box(t,.06,e,n,0,.72,0,Tt.wood()));for(const r of[-1,1])for(const o of[-1,1])s.add(this.box(.05,.7,.05,7304570,r*(t/2-.09),0,o*(e/2-.08)));return s}chair(t=10254933){const e=this.group("chair");e.add(this.box(.42,.05,.42,t,0,.42,0)),e.add(this.box(.42,.44,.05,t,0,.46,-.19));for(const n of[-1,1])for(const s of[-1,1])e.add(this.box(.035,.42,.035,7304570,n*.17,0,s*.17));return e}bench(t=1.5,e=11042646){const n=this.group("bench");n.add(this.box(t,.07,.42,e,0,.45,0,Tt.wood())),n.add(this.box(t,.4,.06,e,0,.5,-.2));for(const s of[-1,1])n.add(this.box(.08,.45,.36,6251882,s*(t/2-.13),0,0));return n}crate(t=.6,e=.5,n=.6,s=11110495){const r=this.group("crate");r.add(this.box(t,e,n,s,0,0,0,Tt.wood()));for(const o of[.06,e-.08])r.add(this.box(t+.02,.035,n+.02,8217154,0,o,0));return r}drum(t=.26,e=.76,n=10120015){const s=this.group("drum");s.add(this.cyl(t,t,e,n,0,0,0,14));for(const r of[.1,e*.5,e-.12])s.add(this.cyl(t+.012,t+.012,.045,6117970,0,r,0,14));return s}tire(t=.34,e=.18){const n=this.group("tire"),s=rt(tt.torus(t,e,12),this.mat(3816768),0,t,0);return s.rotation.x=Math.PI/2,n.add(s),n.add(this.cyl(t*.55,t*.55,e*.5,7830398,0,t-e*.25,0,10)),n}rock(t=.4,e=9277320){const n=this.group("rock"),s=rt(tt.sphere(t,7),this.mat(e),0,t*.55,0);return s.scale.set(1,.62,.85),s.rotation.y=t*3.1,n.add(s),n}pineTree(t=4.2,e=4156236){const n=this.group("pine");n.add(this.cyl(.13,.18,t*.42,7032633,0,0,0,7));for(let s=0;s<4;s++){const r=s/4,o=(1-r*.62)*t*.26,a=t*.34,l=t*.3+r*t*.19,c=this.cone(o,a,s%2?e:5012054,0,l,0);c.userData.dynamic=!0,n.add(c)}return n}streetTree(t=3.1,e=7183198){const n=this.group("street-tree");n.add(this.cyl(.11,.15,t*.62,8020807,0,0,0,8));const s=this.sphere(t*.26,e,0,t*.6,0);return s.scale.set(1.12,.95,1.05),n.add(s),n.add(this.sphere(t*.19,8366696,t*.14,t*.72,t*.08)),n}shrub(t=.3,e=6261337){const n=this.group("shrub");for(let s=0;s<3;s++){const r=this.sphere(t*(.6+s*.13),e,(s-1)*t*.65,0,s%2*t*.4);r.scale.y=.72,n.add(r)}return n}fence(t,e=.95,n=11045475,s="wood"){const r=this.group("fence"),o=Math.max(2,Math.round(t/.85));for(let a=0;a<=o;a++){const l=-t/2+a/o*t;r.add(this.box(s==="wood"?.09:.06,e,.09,n,l,0,0))}for(const a of[e*.32,e*.72])r.add(this.box(t,.06,.055,n,0,a,0));return r}awning(t=3.2,e=1.9,n=15260088,s="awningCloth"){const r=this.group("awning");for(const a of[-1,1])for(const l of[-1,1])r.add(this.pole(.045,2.35,8028034,a*(t/2-.1),0,l*(e/2-.1)));const o=He(t,e,n,{amplitude:.055,key:s});return o.position.y=2.32,r.add(o),r}flag(t=3,e=14711391){const n=this.group("flag");n.add(this.pole(.04,t,10134184));const s=He(.72,.44,e,{amplitude:.09,speed:2.1,vertical:!0,key:"flagCloth"});return s.position.set(.36,t-.4,0),n.add(s),n}panel(t=1.25,e=.8){const n=this.group("solar-panel");n.add(this.pole(.05,.7,7173241));const s=this.box(t,.05,e,2902635,0,.7,0);s.rotation.x=-.42,n.add(s);for(let r=-2;r<=2;r++){const o=this.box(.012,.055,e*.94,8366280,r*t/5,.7,0);o.rotation.x=-.42,n.add(o)}return n}stairs(t=1.3,e=1.5,n=4,s=10197648){const r=this.group("stairs");for(let o=0;o<n;o++){const a=(o+1)*.13;r.add(this.box(t,a,e/n,s,0,0,-e/2+(o+.5)*e/n))}return r}bicycle(t=4951720){const e=this.group("bicycle");for(const s of[-.42,.42]){const r=rt(tt.torus(.26,.035,12),this.mat(3948613),s,.26,0);e.add(r),e.add(this.cyl(.012,.012,.9,9278617,s,.26,0,6))}const n=this.box(.72,.045,.045,t,0,.62,0);return e.add(n),e.add(this.box(.2,.05,.16,3948613,.06,.82,0)),e.add(this.cyl(.012,.012,.42,9278617,-.38,.62,0,6)),e}grill(){const t=this.group("grill");for(const e of[-1,1])for(const n of[-1,1])t.add(this.box(.04,.42,.04,5527902,e*.26,0,n*.2));return t.add(this.box(.62,.16,.48,4869714,0,.42,0)),t.add(this.box(.56,.02,.42,9202250,0,.58,0)),t}barrelGrill(){const t=this.group("barrel-grill"),e=this.cyl(.34,.34,.78,9068868,0,.28,0,14);e.rotation.z=Math.PI/2,t.add(e);for(const n of[-.3,.3])t.add(this.box(.05,.3,.5,6053729,n,0,0));return t.add(this.box(.62,.02,.4,4080197,0,.62,0)),t}vending(t=.86,e=1.9,n=.62){const s=this.group("vending");s.add(this.box(t,e,n,14177103,0,0,0)),s.add(this.box(t*.78,e*.58,.03,10475240,-.05,e*.34,n/2+.01));for(let o=0;o<4;o++)for(let a=0;a<4;a++)s.add(this.box(.12,.16,.035,[15913594,9422312,15437436,12179098][(o+a)%4],-t*.3+a*.17,e*.38+o*.22,n/2+.035));const r=rt(tt.box(t*.7,.09,.02),re(16773312),0,e*.9,n/2+.02);return s.add(r),s.add(this.box(t*.35,.26,.05,3884880,t*.22,e*.2,n/2+.02)),s}gasPump(){const t=this.group("gas-pump");return t.add(this.box(.72,.18,.55,9411234,0,0,0)),t.add(this.box(.5,1.25,.38,15264748,0,.18,0)),t.add(this.box(.34,.3,.03,3622735,0,1,.2)),t.add(this.box(.06,.42,.06,4870487,.3,.7,0)),t}store(t=3.2,e=2.7,n=2,s="道の駅"){const r=this.group("store");r.add(this.box(t,e,n,15328211,0,0,0)),r.add(this.box(t+.2,.16,n+.2,8161940,0,e,0));const o=rt(tt.box(t*.72,e*.52,.04),Ge(.32),0,e*.3,n/2+.02);r.add(o);for(let h=-1;h<=1;h++)r.add(this.box(.05,e*.52,.06,9082011,h*t*.24,e*.3,n/2+.04));const a=rt(tt.box(t*.78,.46,.08),this.mat(16774360,Tt.sign(s)),0,e*.78,n/2+.05);r.add(a);const l=de(16767124,2.4,0);l.position.set(0,e*.78,n/2+.2),r.add(l);const c=l.material;return cn("signLight",h=>{c.opacity=h*.8},{speed:.7}),r}container(t=2.2,e=1.9,n=1.2,s=10120015){const r=this.group("container");r.add(this.box(t,e,n,s,0,0,0,Tt.rust()));for(let o=-t/2+.16;o<t/2;o+=.22)r.add(this.box(.05,e*.94,.03,8148542,o,.03,n/2+.01));return r}bunker(t=2.4,e=2,n=1.8){const s=this.group("bunker");return s.add(this.box(t,e,n,10986650,0,0,0,Tt.concrete())),s.add(this.box(t*.42,e*.72,.12,6251880,0,0,n/2+.06)),s.add(this.box(t*.5,.1,.16,4212555,0,e*.78,n/2+.06)),s}tower(t=4.2){const e=this.group("tower");for(const r of[-1,1])for(const o of[-1,1])e.add(this.box(.07,t,.07,7173242,r*.5,0,o*.5));for(let r=1;r<=3;r++)e.add(this.box(1.12,.05,1.12,8094344,0,r/4*t,0));e.add(this.box(1.25,.1,1.25,9146773,0,t,0));const n=this.cyl(.2,.26,.32,14209718,0,t+.1,0,10);e.add(n);const s=de(16773312,1.8,0);return s.position.set(0,t+.3,0),e.add(s),cn("searchLight",r=>{s.material.opacity=r*.9},{}),e}radar(){const t=this.group("radar");t.add(this.pole(.07,2,8160393));const e=rt(tt.sphere(.62,12),this.mat(12173506),0,2.45,0);e.scale.set(1,.24,.62),e.rotation.x=-.4,t.add(e);const n=rt(tt.sphere(.06),re(16747122),.4,2.1,0);return t.add(n),cn("warningLight",s=>{n.material.opacity=.3+s*.7},{speed:3}),t}lighthouse(t=3.4){const e=this.group("lighthouse");e.add(this.cyl(.34,.48,t,15131350,0,0,0,12)),e.add(this.cyl(.35,.35,.24,12083026,0,t*.42,0,12)),e.add(this.cyl(.42,.42,.44,15985362,0,t,0,12)),e.add(this.cone(.52,.4,12083026,0,t+.44,0));const n=rt(tt.cone(1.5,5.5,12),new Ae({color:16771504,transparent:!0,opacity:.16,side:ae,depthWrite:!1}),0,t+.3,0);return n.rotation.z=Math.PI/2,n.userData.dynamic=!0,n.name="lighthouse-beam",e.add(n),e}sailboat(){const t=this.group("sailboat"),e=this.box(1.1,.22,.42,15854816,0,.05,0);t.add(e),t.add(this.pole(.025,1.3,9073752,0,.24,0));const n=new Kh;n.moveTo(0,0),n.lineTo(.52,.08),n.lineTo(0,1.15),n.lineTo(0,0);const s=rt(new fl(n),this.mat(16775398),.02,.3,0);return s.material.side=ae,t.add(s),t}wheel(t=.42,e=.22){const n=this.group("wheel"),s=rt(tt.cyl(t,t,e,16),this.mat(3487804),0,t,0);s.rotation.x=Math.PI/2,n.add(s);const r=rt(tt.cyl(t*.48,t*.48,e+.02,12),this.mat(11054512),0,t,0);return r.rotation.x=Math.PI/2,n.add(r),n}window(t=1.1,e=.72,n=5923947){const s=this.group("window");s.add(this.box(t+.08,.055,.05,n,0,e,0)),s.add(this.box(t+.08,.055,.05,n,0,0,0));for(const o of[-1,1])s.add(this.box(.055,e,.05,n,o*t/2,0,0));const r=rt(tt.plane(t,e),Ge(.2),0,e/2,.026);return r.userData.noOutline=!0,s.add(r),s}cabinet(t=.9,e=.42,n=.34,s=13081452){const r=this.group("cabinet");return r.add(this.box(t,e,n,s,0,0,0,Tt.wood())),r.add(this.box(t*.96,.03,.02,7165501,0,e*.5,n/2+.01)),r}bed(t=1.5,e=.9,n=15261128){const s=this.group("bed");return s.add(this.box(t,.28,e,11110495,0,0,0)),s.add(this.box(t*.96,.14,e*.94,n,0,.28,0)),s.add(this.box(t*.42,.1,e*.5,15986402,-t*.24,.42,0)),s}sofa(t=1.3,e=12159594){const n=this.group("sofa");return n.add(this.box(t,.28,.6,e,0,0,0)),n.add(this.box(t,.42,.16,e,0,.28,-.24)),n}sink(){const t=this.group("sink");return t.add(this.box(.62,.66,.46,11838860,0,0,0)),t.add(this.box(.5,.04,.36,10135723,0,.66,0)),t.add(this.box(.06,.28,.06,9081494,-.16,.7,-.12)),t}stove(){const t=this.group("stove");t.add(this.box(.6,.64,.44,11117462,0,0,0)),t.add(this.box(.52,.03,.38,4146504,0,.64,0));for(const e of[-1,1])for(const n of[-1,1])t.add(this.cyl(.07,.07,.02,6317930,e*.13,.66,n*.1,10));return t}fridge(t=1.3){const e=this.group("fridge");return e.add(this.box(.56,t,.52,14278105,0,0,0)),e.add(this.box(.5,.03,.02,9344922,0,t*.58,.27)),e.add(this.box(.03,.24,.04,9344922,.2,t*.72,.28)),e}screen(t=.5,e=.32,n=7324888){const s=this.group("screen");return s.add(this.box(t,e,.04,3028541,0,0,0)),s.add(rt(tt.plane(t*.9,e*.84),re(n),0,e/2,.024)),s}ladder(t=2.2){const e=this.group("ladder");for(const n of[-1,1])e.add(this.box(.045,t,.045,9147031,n*.22,0,0));for(let n=1;n<7;n++)e.add(this.box(.46,.035,.045,10199718,0,n/7*t,0));return e}roofTent(t=2.1,e=1.5,n=1.1){const s=this.group("roof-tent");s.add(this.box(t,.1,e,7174770,0,0,0));const r=this.box(t*.94,n*.82,e*.9,14667950,0,.1,0,Tt.cloth());s.add(r),s.add(this.box(t*.98,.08,e*.96,12167304,0,.1+n*.82,0));const o=rt(tt.plane(t*.5,n*.6),Ge(.3,15918020),0,.1+n*.4,e*.45+.01);return o.userData.noOutline=!0,s.add(o),s}bottle(t=.1,e=.3,n=9418948){const s=B_([[0,0],[t,0],[t,e*.72],[t*.45,e*.85],[t*.45,e]],10);return rt(s,this.mat(n),0,0,0)}}class wx{values=new Map;handlers=new Map;spawns=new Map;tweens=[];get(t){return this.values.get(t)??0}bind(t,e){let n=this.handlers.get(t);return n||(n=new Set,this.handlers.set(t,n)),n.add(e),e(this.get(t)),()=>n.delete(e)}setFlag(t,e,n=1.4){const s=this.get(t);if(Math.abs(s-e)<.001)return;if(n<=0){this.values.set(t,e),this.notify(t,e);return}const r=this.tweens.findIndex(o=>o.key===t);r>=0&&this.tweens.splice(r,1),this.tweens.push({key:t,from:s,to:e,t:0,dur:n})}setAll(t,e=1.4){const n=new Set([...this.values.keys(),...Object.keys(t)]);for(const s of n)this.setFlag(s,t[s]??0,e)}setLightGroup(t,e){this.setFlag(t,e)}registerSpawn(t,e){this.spawns.set(t,e)}spawn(t){this.spawns.get(t)?.(!0)}despawn(t){this.spawns.get(t)?.(!1)}update(t){for(let e=this.tweens.length-1;e>=0;e--){const n=this.tweens[e];n.t=Math.min(1,n.t+t/n.dur);const s=n.t<.5?2*n.t*n.t:1-Math.pow(-2*n.t+2,2)/2,r=n.from+(n.to-n.from)*s;this.values.set(n.key,r),this.notify(n.key,r),n.t>=1&&this.tweens.splice(e,1)}}reset(){this.tweens.length=0,this.values.clear(),this.handlers.clear(),this.spawns.clear()}notify(t,e){const n=this.handlers.get(t);if(n)for(const s of n)s(e)}}class Ex{x=1;z=.25;strength=1;target=1;t=0;setScale(t,e=!1){this.target=t,e&&(this.strength=t,this.t=0)}update(t){this.t+=t,Math.abs(this.target-this.strength)>.002&&(this.strength+=(this.target-this.strength)*Math.min(1,t*1.6)),this.x=.92+Math.sin(this.t*.31)*.16,this.z=.22+Math.cos(this.t*.23)*.12}get value(){return{x:this.x,z:this.z,strength:this.strength}}}const Ko=new Ex;function Tx(i){ls.uWetness.value=i.wetness,ls.uSnow.value=i.snow,ls.uDust.value=i.dust}class Ax{group=new Me;caps=[];material;amount=0;constructor(){this.group.name="snow-caps",this.material=new Ae({color:16054524,transparent:!0,opacity:0,depthWrite:!1,side:ae,polygonOffset:!0,polygonOffsetFactor:-2})}addFor(t,e){const n=yl(t);if(n.isEmpty())return;const s=n.max.x-n.min.x,r=n.max.z-n.min.z,o=n.max.y-n.min.y;if(!Number.isFinite(s)||s<.12||r<.12||o<.08)return;const a=new ne(new Kn(s*.93,r*.93),this.material);a.rotation.x=-Math.PI/2,a.position.set((n.min.x+n.max.x)/2,n.max.y+.018,(n.min.z+n.max.z)/2),a.name=`snow-${e}`,a.visible=!1,a.castShadow=!1,a.userData.noOutline=!0,a.renderOrder=3,this.caps.push(a),this.group.add(a)}setAmount(t){this.amount=t,this.material.opacity=Math.min(.94,t*.94);for(const e of this.caps)e.visible=t>.035}get value(){return this.amount}clear(){for(const t of this.caps)t.geometry.dispose();this.caps.length=0,this.group.clear(),this.setAmount(0)}}const Is=new Ax,Jo=420,Qo=380;function Rx(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}class Cx{group=new Me;rain;rainMat;rainPos;rainAttr;rainSeed=[];snow;snowMat;snowPos;snowAttr;snowPhase=[];cloudShadows=[];cloudMat;mist=[];mistMat;target={rain:0,snow:0,cloud:0,mist:0};current={rain:0,snow:0,cloud:0,mist:0};constructor(){this.group.name="weather-particles";const t=Rx(20261110);this.rainPos=new Float32Array(Jo*6);for(let s=0;s<Jo;s++){const r=(t()-.5)*21,o=t()*14,a=(t()-.5)*21,l=s*6;this.rainPos[l]=r,this.rainPos[l+1]=o,this.rainPos[l+2]=a,this.rainPos[l+3]=r+.055,this.rainPos[l+4]=o-.36,this.rainPos[l+5]=a,this.rainSeed.push(.8+t()*.5)}const e=new Re;this.rainAttr=new Cn(this.rainPos,3),this.rainAttr.setUsage(Fl),e.setAttribute("position",this.rainAttr),this.rainMat=new kh({color:13032686,transparent:!0,opacity:0,depthWrite:!1}),this.rain=new Hu(e,this.rainMat),this.rain.frustumCulled=!1,this.rain.visible=!1,this.group.add(this.rain),this.snowPos=new Float32Array(Qo*3);for(let s=0;s<Qo;s++)this.snowPos[s*3]=(t()-.5)*21,this.snowPos[s*3+1]=t()*14,this.snowPos[s*3+2]=(t()-.5)*21,this.snowPhase.push(t()*6.28);const n=new Re;this.snowAttr=new Cn(this.snowPos,3),this.snowAttr.setUsage(Fl),n.setAttribute("position",this.snowAttr),this.snowMat=new ll({color:16777215,size:.23,map:Tt.glow(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),this.snow=new Gh(n,this.snowMat),this.snow.frustumCulled=!1,this.snow.visible=!1,this.group.add(this.snow),this.cloudMat=new Ae({map:Tt.glow(),color:3951200,transparent:!0,opacity:0,depthWrite:!1,side:ae});for(let s=0;s<3;s++){const r=new ne(new Kn(11+s*3,7+s*2),this.cloudMat);r.rotation.x=-Math.PI/2,r.position.set(-6+s*6,.035+s*.002,-3+s*3),r.userData.baseX=r.position.x,r.userData.speed=.12+s*.05,r.renderOrder=2,r.visible=!1,this.cloudShadows.push(r),this.group.add(r)}this.mistMat=new Ae({map:Tt.glow(),color:14674160,transparent:!0,opacity:0,depthWrite:!1,side:ae});for(let s=0;s<3;s++){const r=new ne(new Kn(24,9),this.mistMat);r.position.set(0,2.6+s*1.5,-7+s*2.5),r.userData.baseX=r.position.x,r.visible=!1,this.mist.push(r),this.group.add(r)}}set(t,e){this.target[t]=Math.max(0,Math.min(1,e))}immediate(){this.current={...this.target}}update(t,e){const n=Math.min(1,t*1.8);for(const l of["rain","snow","cloud","mist"])this.current[l]+=(this.target[l]-this.current[l])*n;const s=this.current.rain;if(this.rain.visible=s>.01,this.rainMat.opacity=s*.55,this.rain.visible){const l=9.5*(.8+e.wind.strength*.35);for(let c=0;c<Jo;c++){const h=c*6,d=l*t*this.rainSeed[c];let u=this.rainPos[h+1]-d;u<0&&(u=12+c%7*.5),this.rainPos[h+1]=u,this.rainPos[h+4]=u-.36,this.rainPos[h]+=e.wind.x*t*.35,this.rainPos[h+3]=this.rainPos[h]+.055,this.rainPos[h]>11&&(this.rainPos[h]=-11,this.rainPos[h+3]=-10.945)}this.rainAttr.needsUpdate=!0}const r=this.current.snow;if(this.snow.visible=r>.01,this.snowMat.opacity=r*.9,this.snow.visible){for(let l=0;l<Qo;l++){const c=l*3;let h=this.snowPos[c+1]-t*(.85+l%5*.13);h<.02&&(h=12+l%9*.4),this.snowPos[c+1]=h,this.snowPos[c]+=Math.sin(e.elapsed*.6+this.snowPhase[l])*t*.16+e.wind.x*t*.06}this.snowAttr.needsUpdate=!0}const o=this.current.cloud;this.cloudMat.opacity=o*.16;for(const l of this.cloudShadows)l.visible=o>.02,l.position.x=l.userData.baseX+Math.sin(e.elapsed*l.userData.speed)*2.4;const a=this.current.mist;this.mistMat.opacity=a*.28;for(const l of this.mist)l.visible=a>.02,l.position.x=l.userData.baseX+Math.sin(e.elapsed*.08)*1.2}}const Ci=new Cx,lh={cliff:'<path d="M3 17l5-7 4 4 3-3 6 6"/><path d="M2 20h20"/><circle cx="17" cy="6" r="2"/>',forest:'<path d="M12 3l5 7h-3l4 6H6l4-6H7z"/><path d="M12 16v5"/>',wasteland:'<path d="M3 18h18"/><path d="M6 18V9l4-3 4 3v9"/><path d="M16 18v-5h4v5"/><path d="M9 12h2"/>',service:'<path d="M4 20V7h9v13"/><path d="M13 11h6l2 4v5"/><path d="M4 11h9"/><path d="M7 15h3"/>',"rv-c":'<path d="M3 16V9h11l4 3h3v4"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M3 12h18"/>',"rv-a":'<rect x="2" y="6" width="20" height="11" rx="1.5"/><path d="M4 10h16M4 13h9"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/>',trailer:'<path d="M2 15V9h7v6"/><path d="M10 11h9l3 3v2H10z"/><circle cx="5" cy="17" r="1.6"/><circle cx="16" cy="17" r="1.6"/><path d="M9 12h1"/>',van:'<path d="M3 16V8a2 2 0 0 1 2-2h9l5 4v6"/><path d="M5 10h5M14 10h4"/><circle cx="7" cy="17" r="1.7"/><circle cx="17" cy="17" r="1.7"/>',overland:'<path d="M3 16V9h4l2-3h6l2 3h4v7"/><path d="M6 6h12"/><path d="M9 6V4h6v2"/><circle cx="7" cy="17" r="1.8"/><circle cx="17" cy="17" r="1.8"/>',dawn:'<path d="M2 17h20"/><path d="M12 4v3M5 7l2 2M19 7l-2 2"/><path d="M6 17a6 6 0 0 1 12 0"/>',day:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',dusk:'<path d="M2 17h20"/><path d="M6 17a6 6 0 0 1 12 0"/><path d="M9 6h6M12 3v3"/>',night:'<path d="M20 15.5A8 8 0 0 1 8.5 4a8 8 0 1 0 11.5 11.5z"/><path d="M17 4v2M15 3l1 2"/>',clear:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>',cloudy:'<path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7z"/><circle cx="9" cy="7" r="2"/>',rain:'<path d="M7 15h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 8a3.5 3.5 0 0 0 1 7z"/><path d="M8 18l-1 3M13 18l-1 3M18 18l-1 3"/>',fog:'<path d="M3 8h18M5 12h14M3 16h18M7 20h10"/>',snow:'<path d="M12 3v18M4 7l16 10M20 7L4 17"/><path d="M9 5l3-2 3 2M9 19l3 2 3-2"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M3 3l18 18"/><path d="M10 5.2A10 10 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-3 3.6M6 6.5C3.5 8.3 2 12 2 12s4 7 10 7a10 10 0 0 0 3-.5"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',default:'<circle cx="12" cy="12" r="8"/>'};function Td(i,t=17){const e=lh[i]??lh.default;return`<svg viewBox="0 0 24 24" width="${t}" height="${t}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`}class Px{el;buttons=new Map;constructor(t,e){this.el=document.createElement("div"),this.el.className="camp-panel",this.el.setAttribute("role","group"),this.el.setAttribute("aria-label","场景组合控制");const n=document.createElement("div");n.className="camp-heading",n.innerHTML="<strong>微缩营地巡游</strong><span>Mini Camp</span>",this.el.appendChild(n);const s=[{dim:"scene",title:"场景 SCENE",items:N1()},{dim:"vehicle",title:"车型 VEHICLE",items:O1()},{dim:"time",title:"时间 TIME",items:B1(),wide:!0},{dim:"weather",title:"天气 WEATHER",items:k1(),wide:!0}];for(const r of s){const o=document.createElement("div");o.className="camp-group";const a=document.createElement("div");a.className="camp-group-title",a.textContent=r.title,o.appendChild(a);const l=document.createElement("div");l.className=r.wide?"camp-segment wide":"camp-segment";for(const c of r.items){const h=document.createElement("button");h.className="camp-btn",h.type="button",h.dataset.dim=r.dim,h.dataset.id=c.id,h.title=c.label,h.innerHTML=`${Td(c.icon)}<span>${c.label}</span>`,h.addEventListener("click",()=>e(r.dim,c.id)),l.appendChild(h),this.buttons.set(`${r.dim}:${c.id}`,h)}o.appendChild(l),this.el.appendChild(o)}t.appendChild(this.el)}setActive(t){for(const[e,n]of this.buttons){const[s,r]=e.split(":");n.classList.toggle("active",t[s]===r)}}setVisible(t){this.el.classList.toggle("is-hidden",!t)}setBusy(t){for(const e of this.buttons.values())e.disabled=t}}class Lx{el;value;constructor(t){this.el=document.createElement("div"),this.el.className="camp-title";const e=document.createElement("small");e.textContent="Now Viewing",this.value=document.createElement("div"),this.el.append(e,this.value),t.appendChild(this.el)}set(t){this.value.textContent=[Ya(t.scene).label,qa(t.vehicle).label,Vr(t.time).label,Za(t.weather).label].join(" · ")}setVisible(t){this.el.classList.toggle("is-hidden",!t)}}class Dx{el;visible=!0;onChange;constructor(t,e){this.onChange=e,this.el=document.createElement("button"),this.el.className="camp-toggle",this.el.type="button",this.el.title="隐藏 / 呼出界面 (H)",this.el.setAttribute("aria-label","隐藏或呼出界面"),this.render(),this.el.addEventListener("click",()=>this.toggle()),t.appendChild(this.el)}toggle(){this.visible=!this.visible,this.render(),this.onChange(this.visible)}get isVisible(){return this.visible}render(){this.el.innerHTML=Td(this.visible?"eye":"eye-off",19),this.el.classList.toggle("is-hidden",!this.visible)}}function ch(i){i.traverse(t=>{t instanceof ne&&(t.userData.isOutline||t.userData.merged)&&t.geometry.dispose()}),i.removeFromParent()}class Ix{core;rig;sky;lighting;base;lib=new bx;decor=new wx;ticker=new xx;sceneGroup=null;vehicleGroup=null;sceneModule=null;vehicleModule=null;currentScene=xn.scene;currentVehicle=xn.vehicle;currentTime=xn.time;currentWeather=xn.weather;env=L_();panel;title;toggle;debug;switcher;veilHost;last=performance.now();staticIssues=[];runtimeIssues=[];constructor(t,e){G1(),this.staticIssues=Ds.staticCheck(),this.staticIssues.length>0&&console.warn("[layout] 静态布局 / 穿模校验发现问题：",this.staticIssues),this.core=new V1(t),this.rig=new sx(this.core.camera,t),this.sky=new ax,this.core.scene.add(this.sky.group),this.lighting=new fx(this.core.scene,this.core.renderer,r=>this.sky.apply(r)),this.base=new _x,this.core.root.add(this.base.group),this.core.scene.add(Ci.group),this.core.root.add(Is.group),this.veilHost=e,this.panel=new Px(e,(r,o)=>this.switcher.select(r,o)),this.title=new Lx(e),this.toggle=new Dx(e,r=>{this.panel.setVisible(r),this.title.setVisible(r)}),this.debug=new vx(e);const n=document.createElement("div");n.className="camp-hint",n.textContent="拖拽旋转 · 滚轮 / 双指缩放 · H 隐藏界面 · D 调试",e.appendChild(n);const s={veilHost:e,rebuildAll:(r,o)=>this.rebuildAll(r,o),applyTime:(r,o)=>this.applyTime(r,o),applyWeather:(r,o)=>this.applyWeather(r,o),onComboChange:r=>this.onComboChange(r)};this.switcher=new U_(s),this.rebuildAll(this.currentScene,this.currentVehicle),this.applyTime(this.currentTime,!0),this.applyWeather(this.currentWeather,!0),this.title.set(xn),this.panel.setActive(xn),window.addEventListener("resize",()=>this.core.resize()),window.addEventListener("keydown",r=>{(r.key==="h"||r.key==="H")&&this.toggle.toggle(),(r.key==="d"||r.key==="D")&&this.debug.toggle()}),requestAnimationFrame(this.loop)}makeContext(){return{root:this.core.root,lib:this.lib,decor:this.decor,layout:Ds,ticker:this.ticker,env:this.env}}rebuildAll(t,e){this.sceneGroup&&(this.sceneModule?.dispose?.(),ch(this.sceneGroup)),this.vehicleGroup&&(this.vehicleModule?.dispose?.(),ch(this.vehicleGroup)),H_(),n1(),this.decor.reset(),Is.clear(),Zc.clear(),Ds.load(t);const n=Ya(t);this.base.apply(n.palette);const s=this.makeContext();this.sceneGroup=n.build(s)??new Me,this.sceneGroup.name=`scene-${t}`,this.core.root.add(this.sceneGroup),oh(this.sceneGroup,{thickness:.028,color:n.palette.ink,minSize:.2});const r=qa(e);this.vehicleGroup=r.build(s)??new Me,this.vehicleGroup.name=`vehicle-${e}`,this.core.root.add(this.vehicleGroup),oh(this.vehicleGroup,{thickness:.03,color:n.palette.ink,minSize:.16}),Ds.setVehicleBox(this.vehicleGroup,e);for(const o of this.sceneGroup.children)o.userData.layoutId&&!o.userData.layoutDecal&&Is.addFor(o,String(o.userData.layoutId));Is.addFor(this.vehicleGroup,`vehicle-${e}`),this.sceneModule=n,this.vehicleModule=r,this.currentScene=t,this.currentVehicle=e,this.applyTime(this.currentTime,!0),this.applyWeather(this.currentWeather,!0),this.runtimeIssues=Ds.checkRuntime(),this.runtimeIssues.length>0&&console.warn("[layout] 运行时穿模校验发现问题：",this.runtimeIssues)}applyTime(t,e=!1){const n=this.currentTime;this.currentTime=t;const s=Vr(t);this.decor.setAll(s.decor,e?0:1.4),this.updateLight(e);const r=this.makeContext();this.sceneModule?.onTimeChange?.(t,n,r),this.vehicleModule?.onTimeChange?.(t,r)}applyWeather(t,e=!1){this.currentWeather=t;const n=gd[t];Ci.set("rain",n.rain),Ci.set("snow",n.snow),Ci.set("cloud",n.cloud),Ci.set("mist",n.mist),e&&Ci.immediate(),this.updateLight(e),this.sceneModule?.onWeatherChange?.(t,this.makeContext())}updateLight(t){const e=Vr(this.currentTime).light,n=Za(this.currentWeather).light,s=dx(e,n);this.lighting.set(s,t),Ko.setScale(s.windScale,t)}onComboChange(t){this.title.set(t),this.panel.setActive(t)}loop=t=>{const e=Math.min(.05,(t-this.last)/1e3||.016);this.last=t,this.ticker.update(e),this.decor.update(e),Ko.update(e),Zc.update(e);const n=this.lighting.update(e);this.env={...this.env,scene:this.currentScene,vehicle:this.currentVehicle,time:this.currentTime,weather:this.currentWeather,wind:Ko.value,wetness:n.wetness,snow:n.snow,dust:n.dust,clothSag:n.clothSag,glow:n.glow,exposure:n.exposure,fogDensity:n.fogDensity,interiorWarmth:n.interiorWarmth,elapsed:this.ticker.time},Tx(n),G_(e,this.env),e1(this.ticker.time,r=>this.decor.get(r)),Ci.update(e,this.env),Is.setAmount(n.snow),this.sky.update(e,this.env),this.sceneModule?.update?.(e,this.ticker.time,this.env),this.vehicleModule?.update?.(e,this.ticker.time,this.env),this.rig.update(),this.core.render(e);const s=this.core.stats;this.debug.update(e,{combo:`${Ya(this.currentScene).label} · ${qa(this.currentVehicle).label} · ${Vr(this.currentTime).label} · ${Za(this.currentWeather).label}`,fps:s.fps,calls:s.calls,triangles:s.triangles,geometries:s.geometries,textures:s.textures,staticIssues:this.staticIssues.length,runtimeIssues:this.runtimeIssues,moduleCount:H1()}),requestAnimationFrame(this.loop)}}function Nx(){const i=document.getElementById("scene-canvas"),t=document.getElementById("ui-root");if(!i||!t)throw new Error("缺少 #scene-canvas 或 #ui-root 容器");new Ix(i,t)}try{Nx()}catch(i){const t=document.createElement("div");t.className="boot-error",t.textContent=`启动失败：
${i instanceof Error?i.stack??i.message:String(i)}`,document.body.appendChild(t),console.error(i)}
