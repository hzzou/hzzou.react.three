import{r as h,j as a}from"./index-189c03b4.js";import{a as e,C as l,O as x}from"./OrbitControls-33771011.js";import{an as s,m as t}from"./three.module-e72dd0cd.js";import{P as u}from"./PerspectiveCamera-160139c4.js";import"./extends-4c19d496.js";const c="house-68vFg",g={house:c},S=()=>{const r=h.useRef(),o=e(t,"/textures/houseImg/top.png"),n=e(t,"/textures/houseImg/bottom.png"),i=e(t,"/textures/houseImg/left.png"),m=e(t,"/textures/houseImg/right.png"),p=e(t,"/textures/houseImg/front.png"),d=e(t,"/textures/houseImg/back.png");return e(t,"/textures/houseImg/quan.png"),a.jsx("div",{id:g.house,children:a.jsxs(l,{children:[a.jsx("color",{attach:"background",args:["#dedede"]}),a.jsx(u,{fov:6,aspect:window.innerWidth/window.innerHeight,near:.1,far:10,position:[0,0,0]}),a.jsx(x,{minPolarAngle:Math.PI/2,maxPolarAngle:Math.PI/2,minDistance:.1,maxDistance:5}),a.jsx("ambientLight",{intensity:1,args:["#dedede"]}),a.jsxs("mesh",{scale:[2,2,2],position:[0,0,0],children:[a.jsx("boxGeometry",{ref:r,args:[5,5,5]}),a.jsx("meshStandardMaterial",{side:s,toneMapped:!1,map:i,attach:"material-1"}),a.jsx("meshStandardMaterial",{side:s,toneMapped:!1,map:m,attach:"material-0"}),a.jsx("meshStandardMaterial",{side:s,toneMapped:!1,map:o,attach:"material-2"}),a.jsx("meshStandardMaterial",{side:s,toneMapped:!1,map:n,attach:"material-3"}),a.jsx("meshStandardMaterial",{side:s,toneMapped:!1,map:p,attach:"material-5"}),a.jsx("meshStandardMaterial",{side:s,toneMapped:!1,map:d,attach:"material-4"})]})]})})};export{S as default};
