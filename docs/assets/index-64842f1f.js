import{r as k,j as r}from"./index-189c03b4.js";import{u as W,C as Z,O as X}from"./OrbitControls-33771011.js";import{aw as Y,ax as E,V as o}from"./three.module-e72dd0cd.js";import{P as H}from"./PerspectiveCamera-160139c4.js";import"./extends-4c19d496.js";const N="magicCube-gFRZ3",S={magicCube:N},_=()=>{const y=k.useRef(null),v=k.useRef(null),w=k.useRef(null),C=k.useRef(!1);let l=null,u=null;new Y;let P=!1;const j=(s,a)=>{const e=document.createElement("canvas"),t=e.getContext("2d");return e.width=a,e.height=a,t?(t.fillStyle="rgba(0, 0, 0, 1)",t.fillRect(0,0,a,a),t.rect(10,10,a-20,a-20),t.lineJoin="round",t.lineWidth=10,t.strokeStyle=s,t.stroke(),t.fillStyle=s,t.fill()):alert("你的浏览器不支持canvas"),e},A=s=>{y.current.enabled=!1,u=s.intersections[0],s.normal,l=u.point},R=s=>{if(u=s.intersections[0],u&&l&&!P){console.log(u);const a=u.point,e=a.x-l.x>1||a.x-l.x<-1||a.y-l.y>1||a.y-l.y<-1||a.z-l.z>1||a.z-l.z<-1;if(!a.equals(l)&&e){C.current=!0,P=!0;const t=u.normal,c=a.sub(l);console.log(t);const i=U(c,t),g=z(u,i);requestAnimationFrame(()=>B(g,i))}}},F=s=>{console.log("stop:",s),P=!1,u=null,l=null,C.current=!1,y.current.enabled=!0},U=(s,a)=>{let e;const t=new o(1,0,0),c=new o(-1,0,0),i=new o(0,1,0),g=new o(0,-1,0),h=new o(0,0,1),x=new o(0,0,-1),p=s.angleTo(t),q=s.angleTo(c),d=s.angleTo(i),b=s.angleTo(g),n=s.angleTo(h),f=s.angleTo(x);switch(Math.min(p,q,d,b,n,f)){case p:e=0,a.equals(i)?e=e+.1:a.equals(g)?e=e+.2:a.equals(h)?e=e+.3:e=e+.4;break;case q:e=1,a.equals(i)?e=e+.1:a.equals(g)?e=e+.2:a.equals(h)?e=e+.3:e=e+.4;break;case d:e=2,a.equals(h)?e=e+.1:a.equals(x)?e=e+.2:a.equals(t)?e=e+.3:e=e+.4;break;case b:e=3,a.equals(h)?e=e+.1:a.equals(x)?e=e+.2:a.equals(t)?e=e+.3:e=e+.4;break;case n:e=4,a.equals(i)?e=e+.1:a.equals(g)?e=e+.2:a.equals(t)?e=e+.3:e=e+.4;break;case f:e=5,a.equals(i)?e=e+.1:a.equals(g)?e=e+.2:a.equals(t)?e=e+.3:e=e+.4;break}return e},z=(s,a)=>{const e=s.object.position;let t=[];return w.current.children.map(c=>{switch(a){case 2.1:case 2.2:case 3.1:case 3.2:case 4.1:case 4.2:case 5.1:case 5.2:e.x===c.position.x&&t.push(c);break;case .3:case .4:case 1.3:case 1.4:case 4.3:case 4.4:case 5.3:case 5.4:e.y===c.position.y&&t.push(c);break;case .1:case .2:case 1.1:case 1.2:case 2.3:case 2.4:case 3.3:case 3.4:e.z===c.position.z&&t.push(c);break}}),t},B=(s,a)=>{let e;switch(a){case 2.2:case 3.1:case 4.1:case 5.2:e=new o(1,0,0);for(let t=0;t<s.length;t++)m(s[t],e,Math.PI/2);break;case 2.1:case 3.2:case 4.2:case 5.1:e=new o(1,0,0);for(let t=0;t<s.length;t++)m(s[t],e,-Math.PI/2);break;case .4:case 1.3:case 4.3:case 5.4:e=new o(0,1,0);for(let t=0;t<s.length;t++)m(s[t],e,Math.PI/2);break;case 1.4:case .3:case 4.4:case 5.3:e=new o(0,1,0);for(let t=0;t<s.length;t++)m(s[t],e,-Math.PI/2);break;case .1:case 1.2:case 2.4:case 3.3:e=new o(0,0,1);for(let t=0;t<s.length;t++)m(s[t],e,Math.PI/2);break;case .2:case 1.1:case 2.3:case 3.4:e=new o(0,0,1);for(let t=0;t<s.length;t++)m(s[t],e,-Math.PI/2);break}console.log(e)},m=(s,a,e)=>{a.x>0?s.rotateX(e):a.y>0?s.rotateY(e):a.z>0&&s.rotateZ(e)},D=k.forwardRef((s,a)=>{const e=s.num||3,t=s.len||2,c=s.x||0,i=s.y||0,g=s.z||0,h=s.colors||["#f00","#0f0","#00f","#ff0","#0ff","#f0f"],x=c-e/2*t,p=i+e/2*t,q=g+e/2*t;W(n=>{w.current.children,w.current.matrixWorldNeedsUpdate||(w.current.matrixWorldNeedsUpdate=!0)});const d=[],b=[];for(let n=0;n<h.length;n++){const f=new E(j(h[n],200));b.push(r.jsx("meshLambertMaterial",{attach:"material-"+n,map:f},n))}for(let n=0;n<e;n++)for(let f=0;f<e*e;f++){const M=x+t/2+f%e*t,I=p-t/2-Math.floor(f/e)*t,T=q-t/2-n*t;d.push(r.jsxs("mesh",{position:[M,I,T],children:[r.jsx("boxGeometry",{args:[2,2,2]}),b]},n+"_"+f))}return r.jsx("group",{matrixWorldNeedsUpdate:!0,onPointerDown:s.onPointerDown,onPointerMove:s.onPointerMove,onPointerUp:s.onPointerUp,ref:a,children:d})});return r.jsx("div",{id:S.magicCube,children:r.jsxs(Z,{style:{width:window.innerWidth,height:window.innerHeight},children:[r.jsx(H,{ref:v,fov:45,near:1,far:1e3,position:[0,0,600],up:[0,1,0],aspect:window.innerWidth/window.innerHeight}),r.jsx(X,{ref:y,camera:v.current,target:[0,0,0],minDistance:10,maxDistance:25}),r.jsx("color",{attach:"background",args:["#000"]}),r.jsx("axesHelper",{args:[100]}),r.jsx("ambientLight",{intensity:1,args:["#fff"]}),r.jsx(D,{onPointerDown:A,onPointerMove:R,onPointerUp:F,ref:w})]})})};export{_ as default};
