import{r as d,j as e,a6 as s,a5 as u,ab as l,a7 as n,ai as x,ap as c,aq as o,I as g,au as j,av as v}from"./index-DSV_WlI-.js";const b=()=>{const[t,p]=d.useState({name:"",email:"",password:""}),[i,m]=d.useState(!1),r=a=>{p({...t,[a.target.name]:a.target.value})},h=a=>{a.preventDefault(),console.log(t)};return e.jsxs(e.Fragment,{children:[e.jsx(s,{align:"center",variant:"h4",children:"Sign Up"}),e.jsx(s,{mt:1.5,align:"center",variant:"body2",children:"Let's Join us! create account with,"}),e.jsxs(u,{mt:3,spacing:1.75,width:1,children:[e.jsx(l,{variant:"contained",color:"secondary",fullWidth:!0,startIcon:e.jsx(n,{icon:"logos:google-icon"}),sx:{bgcolor:"info.main","&:hover":{bgcolor:"info.main"}},children:"Google"}),e.jsx(l,{variant:"contained",color:"secondary",fullWidth:!0,startIcon:e.jsx(n,{icon:"logos:apple",sx:{mb:.5}}),sx:{bgcolor:"info.main","&:hover":{bgcolor:"info.main"}},children:"Apple"})]}),e.jsx(x,{sx:{my:4},children:"or Signup with"}),e.jsxs(u,{component:"form",mt:3,onSubmit:h,direction:"column",gap:2,children:[e.jsx(c,{id:"name",name:"name",type:"text",value:t.name,onChange:r,variant:"filled",placeholder:"Your Name",autoComplete:"name",fullWidth:!0,autoFocus:!0,required:!0,InputProps:{startAdornment:e.jsx(o,{position:"start",children:e.jsx(n,{icon:"ic:outline-account-circle"})})}}),e.jsx(c,{id:"email",name:"email",type:"email",value:t.email,onChange:r,variant:"filled",placeholder:"Your Email",autoComplete:"email",fullWidth:!0,required:!0,InputProps:{startAdornment:e.jsx(o,{position:"start",children:e.jsx(n,{icon:"ic:baseline-alternate-email"})})}}),e.jsx(c,{id:"password",name:"password",type:i?"text":"password",value:t.password,onChange:r,variant:"filled",placeholder:"Your Password",autoComplete:"current-password",fullWidth:!0,required:!0,InputProps:{startAdornment:e.jsx(o,{position:"start",children:e.jsx(n,{icon:"ic:outline-lock"})}),endAdornment:e.jsx(o,{position:"end",sx:{opacity:t.password?1:0,pointerEvents:t.password?"auto":"none"},children:e.jsx(g,{"aria-label":"toggle password visibility",onClick:()=>m(!i),sx:{border:"none",bgcolor:"transparent !important"},edge:"end",children:e.jsx(n,{icon:i?"ic:outline-visibility":"ic:outline-visibility-off",color:"neutral.light"})})})}}),e.jsx(l,{type:"submit",variant:"contained",size:"medium",fullWidth:!0,sx:{mt:1.5},children:"Sign Up"})]}),e.jsxs(s,{mt:5,variant:"body2",color:"text.secondary",align:"center",letterSpacing:.25,children:["Already have an account? ",e.jsx(j,{href:v.signin,children:"Signin"})]})]})};export{b as default};
