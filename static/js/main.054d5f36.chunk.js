(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){e.exports=n(146)},146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(57),o=n.n(c),u=n(14),l=n(15),i=n(45),s=Object(a.createContext)({isAuthenticate:null,user:null,loginWithEmailAndPassword:function(){return Promise.resolve(null)},logOut:function(){return Promise.resolve(null)},signUpEp:function(){return Promise.resolve(null)}}),m=function(){return Object(a.useContext)(s)},d=function(e){var t=e.firebaseApp,n=e.children,c=Object(a.useState)(null),o=Object(l.a)(c,2),u=o[0],m=o[1],d=Object(a.useState)(Object(i.c)(t)),p=Object(l.a)(d,1)[0],f=Object(a.useState)(null),b=Object(l.a)(f,2),E=b[0],v=b[1];return Object(a.useEffect)(function(){p.setPersistence(i.a),p.onAuthStateChanged(function(e){e?(m(!0),v(e)):(m(!1),v(null))})},[p]),r.a.createElement(s.Provider,{value:{isAuthenticate:u,user:E,loginWithEmailAndPassword:function(e,t){return Object(i.d)(p,e,t).then(function(e){return e}).catch(function(e){throw e})},logOut:function(){return Object(i.e)(p).then(function(e){return e}).catch(function(e){throw e})},signUpEp:function(e,t){return Object(i.b)(p,e,t).then(function(e){return e}).catch(function(e){throw e})}}},n)},p=n(209),f=n(123),b=n.n(f),E=n(210),v=n(203),h=n(122),j=n.n(h),O=n(193),g=n(196),x=n(171),w=function(e){var t=e.error,n=e.setError;return r.a.createElement(x.a,{sx:{width:"100%",mt:4},spacing:2,justifyContent:"center",alignItems:"center"},r.a.createElement(g.a,{variant:"filled",severity:"error",sx:{width:{xs:"100%",sm:"100%",md:"800px"}},onClose:function(){n("")}},"Something went wrong! ",t))},y=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(u.h)(),i=m().isAuthenticate,s=m().logOut,d=i?r.a.createElement(v.a,{item:!0,xs:1},r.a.createElement(O.a,{title:"Logout"},r.a.createElement(j.a,{sx:{fontSize:40,color:"#4caf50"},onClick:function(){s().then(function(){o("/login")}).catch(function(e){c(e.message)})}}))):"",f=""!==n?r.a.createElement(w,{error:n,setError:c}):"";return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{container:!0,spacing:0,direction:{xs:"row",lg:"row"},alignItems:"center",justifyContent:"center"},r.a.createElement(v.a,{item:!0,xs:10,onClick:function(){return o("/")}},r.a.createElement(p.a,{component:"div"},r.a.createElement(v.a,{container:!0,spacing:0,direction:"row",justifyContent:"center",alignItems:"center"},r.a.createElement(v.a,{item:!0},r.a.createElement(b.a,{sx:{fontSize:70,color:"#4caf50"}})),r.a.createElement(v.a,{item:!0},r.a.createElement(E.a,{variant:"h4",component:"div",color:"#1b5e20"},r.a.createElement("b",null,"TODO APP")))))),d),f)},S=n(194),C=Object(S.a)({root:{height:"100%",overflow:"hidden",width:"100%",padding:"10px"},container:{marginBottom:"60px",marginTop:"60px"}}),k=function(){var e=C();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.container},r.a.createElement(y,null)),r.a.createElement(u.b,null))},P=n(46),A=n(23),D=n(2),W=n.n(D),I=n(5),B=n(124),V=n(41),T=n(127),F=function(){var e=Object(I.a)(W.a.mark(function e(){var t,n,a;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(i.c)(),n=Object(V.f)(),a=[],e.prev=3,e.next=6,Object(V.e)(Object(V.b)(n,"users","".concat(t.currentUser.uid,"/todos")));case 6:e.sent.forEach(function(e){a.push(Object(P.a)({id:e.id},e.data()))}),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",Promise.reject(e.t0));case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}},e,null,[[3,10]])}));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(I.a)(W.a.mark(function e(t){var n,a,r;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(V.f)(),a=Object(i.c)(),e.prev=2,e.next=5,Object(V.a)(Object(V.b)(n,"users","".concat(a.currentUser.uid,"/todos")),t);case 5:return r=e.sent,e.abrupt("return",r.id);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(I.a)(W.a.mark(function e(t,n){var a,r,c;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.c)(),r=Object(V.f)(),e.prev=2,c=Object(V.d)(r,"users","".concat(a.currentUser.uid,"/todos"),t),e.next=6,Object(V.g)(c,n);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(I.a)(W.a.mark(function e(t){var n,a;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(i.c)(),a=Object(V.f)(),e.prev=2,e.next=5,Object(V.c)(Object(V.d)(a,"users","".concat(n.currentUser.uid,"/todos"),t));case 5:e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(2),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}},e,null,[[2,7]])}));return function(t){return e.apply(this,arguments)}}(),M=n(198),H=n(126),K=n.n(H),L=n(213),J=n(200),N=n(218),Y=(n(143),n(208)),G=n(195),Z=n(217),q=n(211),Q=n(204),X=n(214),$=function(e){var t=e.value,n=e.setValue,c=e.submit,o=e.button,u=Object(a.useState)(""),i=Object(l.a)(u,2),s=i[0],m=i[1],d=Object(a.useState)(!1),p=Object(l.a)(d,2),f=p[0],b=p[1],E=function(e){""===t?(b(!0),m("Todo can not be empty")):(c(e),b(!1),m("")),e.preventDefault()};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:E},r.a.createElement(q.a,{fullWidth:!0,error:f,variant:"standard"},r.a.createElement(v.a,{container:!0,spacing:2,sx:{flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"",sm:"center"}}},r.a.createElement(v.a,{item:!0,xs:12,sm:9},r.a.createElement(G.a,{value:t,onChange:function(e){n(e.target.value),e.preventDefault()},id:"input-textarea",placeholder:"Add new todo",variant:"standard",color:"success",focused:!0,fullWidth:!0,inputProps:{autoFocus:!0},multiline:!0,maxRows:8,onKeyDown:function(e){13===e.which&&(E(e),e.preventDefault())}}),r.a.createElement(X.a,null,s)),r.a.createElement(v.a,{item:!0,xs:12,sm:3},r.a.createElement(Q.a,{variant:"contained",color:"success",fullWidth:!0,type:"submit"},o))))))},_=n(205),ee=n(215),te=n(216),ne=n(125),ae=n.n(ne),re=n(192),ce=n(147),oe=n(206),ue=r.a.forwardRef(function(e,t){return r.a.createElement(re.a,Object.assign({direction:"up",ref:t},e))}),le=Object(ce.a)({palette:{primary:{main:"#4caf50",contrastText:"#fff"}}}),ie=function(e){var t=e.component,n=e.open,a=e.setOpen,c=function(){return a(!1)};return r.a.createElement("div",null,r.a.createElement(_.a,{fullScreen:!0,open:n,onClose:c,TransitionComponent:ue},r.a.createElement(oe.a,{theme:le},r.a.createElement(ee.a,{sx:{position:"relative"}},r.a.createElement(te.a,null,r.a.createElement(E.a,{sx:{ml:2,flex:1},variant:"h6",component:"div"},"Edit todo"),r.a.createElement(Y.a,{edge:"end",color:"inherit",onClick:c,"aria-label":"close"},r.a.createElement(ae.a,null))))),r.a.createElement(p.a,{sx:{margin:"20px"}},t)))},se=n(201),me=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=r.a.useState(!1),u=Object(l.a)(o,2),i=u[0],s=u[1],m=Object(a.useState)(""),d=Object(l.a)(m,2),p=d[0],f=d[1],b=Object(a.useState)(""),E=Object(l.a)(b,2),v=E[0],h=E[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),x=O[0],y=O[1],S=Object(a.useState)(""),C=Object(l.a)(S,2),k=C[0],D=C[1],B=Object(a.useState)(""),V=Object(l.a)(B,2),T=V[0],H=V[1],q=Object(a.useState)(""),Q=Object(l.a)(q,2),X=Q[0],_=Q[1];Object(a.useEffect)(function(){Object(I.a)(W.a.mark(function e(){var t;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}},e)}))()},[]);var ee=r.a.createElement(g.a,{severity:"success",variant:"outlined",sx:{mt:10}},r.a.createElement(Z.a,null,"All Clear"),"Look's like everything's organized in the right place. ",r.a.createElement("strong",null,'Press "Add" to add a new task'));Object(a.useEffect)(function(){0===n.length?D(ee):D("")},[n]);var te=function(){var e=Object(I.a)(W.a.mark(function e(t){var n,a;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Date.now(),a={description:p,active:!0,created:n},e.next=4,R(a).then(function(e){_("Todo created. Hooray!"),c(function(t){return[].concat(Object(A.a)(t),[Object(P.a)({},a,{id:e})])})}).catch(function(e){H(e.message)});case 4:f(""),t.preventDefault();case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ne=""!==T?r.a.createElement(w,{error:T,setError:H}):"";return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{component:r.a.createElement($,{value:x,setValue:y,submit:function(e){!function(e){U(v.id,Object(P.a)({},n.filter(function(e){return e.id===v.id}),{description:x})).then(function(){_("Todo Edited. Hooray!"),c(function(e){return Object(A.a)(e.map(function(e){return e.id===v.id?Object(P.a)({},e,{description:x}):e}))})}).catch(function(e){H(e.message)}),h(""),y(""),s(!1),e.preventDefault()}(e)},button:"Save"}),open:i,setOpen:s}),r.a.createElement($,{value:p,setValue:f,submit:te,button:"Add"}),ne,k,r.a.createElement(L.a,{sx:{width:"100%"}},n.map(function(e){return r.a.createElement(J.a,{key:e.id,secondaryAction:r.a.createElement(Y.a,{edge:"end",onClick:function(){var t;h(t=e),y(t.description),s(!0)}},r.a.createElement(K.a,{color:"success"})),sx:{overflow:"hidden"}},r.a.createElement(N.a,null,r.a.createElement(M.a,{edge:"start",color:"success",sx:{"& .MuiSvgIcon-root":{fontSize:30}},onClick:function(){!function(e){c(function(t){return Object(A.a)(t.map(function(t){return t.id===e.id?Object(P.a)({},e,{active:!1}):t}))}),z(e.id).then(function(){_("Todo set as Done and Deleted. Hooray!")}).catch(function(e){H(e.message)});setTimeout(function(){c(function(t){return Object(A.a)(t.filter(function(t){return t.id!==e.id}))})},2e3)}(e)}})),r.a.createElement(G.a,{value:e.description,variant:"standard",color:"success",focused:!0,fullWidth:!0,multiline:!0,maxRows:5,InputProps:{disableUnderline:!0},style:{textDecoration:!1===e.active?"line-through":"none"}}))})),r.a.createElement(se.a,{severity:"success",open:""!==X,autoHideDuration:6e3},r.a.createElement(g.a,{onClose:function(){_("")},severity:"success",sx:{width:"100%"}},X)))},de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,null))},pe=function(e){var t=e.value,n=e.setValue,a=e.label,c=e.errorMessage,o=void 0===c?null:c,u=!!o,l=a.includes("password")?"password":"text";return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{id:t,label:a,value:t,onChange:function(e){n(e.target.value),e.preventDefault()},type:l,fullWidth:!0,error:u,helperText:o}))},fe=n(219),be=function(){var e=Object(u.h)(),t=m().loginWithEmailAndPassword,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],i=c[1],s=Object(a.useState)(""),d=Object(l.a)(s,2),f=d[0],b=d[1],v=Object(a.useState)(""),h=Object(l.a)(v,2),j=h[0],O=h[1],g=""!==j?r.a.createElement(w,{error:j,setError:O}):"";return r.a.createElement(r.a.Fragment,null,g,r.a.createElement(p.a,{sx:{display:"flex",justifyContent:"center"}},r.a.createElement(p.a,{component:"form",onSubmit:function(n){t(o,f).then(function(t){e("/")}).catch(function(e){O(e.message)}),n.preventDefault()},sx:{border:1,borderRadius:5,borderColor:"#2e7d32",maxWidth:{xs:"600px",sm:"600px",md:"600px"},minWidth:{xs:"300px",sm:"500px",md:"600px"}},mt:6,p:3,spacing:2,noValidate:!0,autoComplete:"on"},r.a.createElement(E.a,{variant:"h4",gutterBottom:!0,component:"div",color:"#1b5e20",align:"center"},"Login"),r.a.createElement(x.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:2},r.a.createElement(pe,{value:o,setValue:i,label:"email"}),r.a.createElement(pe,{value:f,setValue:b,label:"password"}),r.a.createElement(fe.a,{sx:{maxWidth:{xs:"600px",sm:"600px",md:"400px"}}},r.a.createElement(Q.a,{variant:"contained",color:"success",type:"submit",fullWidth:!0},"Submit"))))),r.a.createElement(E.a,{mt:2,variant:"subtitle1",gutterBottom:!0,component:"div",color:"#1b5e20",align:"center"},"Don't have an account yet?"),r.a.createElement(E.a,{mt:1,variant:"subtitle1",gutterBottom:!0,component:"div",align:"center"},r.a.createElement(Q.a,{color:"success",onClick:function(){return e("/signup")}},r.a.createElement("b",null,"Create new account"))))},Ee=function(){var e=Object(u.h)(),t=m().signUpEp,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],i=c[1],s=Object(a.useState)(""),d=Object(l.a)(s,2),f=d[0],b=d[1],v=Object(a.useState)(""),h=Object(l.a)(v,2),j=h[0],O=h[1],g=Object(a.useState)(""),y=Object(l.a)(g,2),S=y[0],C=y[1],k=Object(a.useState)({email:null,password:null,passwordRep:null}),A=Object(l.a)(k,2),D=A[0],W=A[1],I=""!==S?r.a.createElement(w,{error:S,setError:C}):"";return r.a.createElement(r.a.Fragment,null,I,r.a.createElement(p.a,{sx:{display:"flex",justifyContent:"center"}},r.a.createElement(p.a,{component:"form",onSubmit:function(n){""===o&&W(function(e){return Object(P.a)({},e,{email:"field can't be empty"})}),""===f&&W(function(e){return Object(P.a)({},e,{password:"field can't be empty"})}),j!==f&&W(function(e){return Object(P.a)({},e,{passwordRep:"Please make sure your passwords match."})}),t(o,f).then(function(){e("/")}).catch(function(e){C(e.message)}),n.preventDefault()},sx:{border:1,borderRadius:5,borderColor:"#2e7d32",maxWidth:{xs:"600px",sm:"600px",md:"600px"},minWidth:{xs:"300px",sm:"500px",md:"600px"}},mt:6,p:3,spacing:2,noValidate:!0,autoComplete:"on"},r.a.createElement(E.a,{variant:"h4",gutterBottom:!0,component:"div",color:"#1b5e20",align:"center"},"Register"),r.a.createElement(x.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:2},r.a.createElement(pe,{value:o,setValue:i,label:"email",errorMessage:D.email}),r.a.createElement(pe,{value:f,setValue:b,label:"password",errorMessage:D.password}),r.a.createElement(pe,{value:j,setValue:O,label:"Confirm password",errorMessage:D.passwordRep}),r.a.createElement(fe.a,{sx:{maxWidth:{xs:"600px",sm:"600px",md:"400px"}}},r.a.createElement(Q.a,{variant:"contained",color:"success",type:"submit",fullWidth:!0},"Submit"))))),r.a.createElement(E.a,{mt:2,variant:"subtitle1",gutterBottom:!0,component:"div",color:"#1b5e20",align:"center"},"Already have an account?"),r.a.createElement(E.a,{mt:1,variant:"subtitle1",gutterBottom:!0,component:"div",align:"center"},r.a.createElement(Q.a,{color:"success",onClick:function(){return e("/login")}},r.a.createElement("b",null,"Login"))))},ve=n(220),he=function(e){var t=e.children,n=m().isAuthenticate;return null===n?r.a.createElement(p.a,{sx:{display:"flex",justifyContent:"center",backgroundColor:"white"}},r.a.createElement(ve.a,{color:"success",size:150})):!0===n?t:r.a.createElement(u.a,{to:"/login"})},je=function(){var e=m().isAuthenticate;return r.a.createElement(u.e,null,r.a.createElement(u.c,{path:"/",element:r.a.createElement(k,null)},r.a.createElement(u.c,{path:"login",element:r.a.createElement(be,null)}),r.a.createElement(u.c,{path:"/",element:r.a.createElement(he,null," ",r.a.createElement(de,null)," ")}),r.a.createElement(u.c,{path:"signup",element:e?r.a.createElement(u.a,{to:"/"}):r.a.createElement(Ee,null)}),r.a.createElement(u.c,{path:"*",element:r.a.createElement(E.a,{variant:"h4",gutterBottom:!0,component:"div",align:"center",mt:1,color:"#1b5e20"},"Page not found")})))},Oe=n(53),ge=function(){return r.a.createElement("div",{style:{height:"100vh",display:"flex"}},r.a.createElement(Oe.a,null,r.a.createElement(je,null)))},xe=function(){var e=Object(B.a)({apiKey:"AIzaSyBZ0ipYBtm6YgrdKGuxK3t5IFJE93PxDBM",authDomain:"todolist-9e0fe.firebaseapp.com",projectId:"todolist-9e0fe",storageBucket:"todolist-9e0fe.appspot.com",messagingSenderId:"146029757670",appId:"1:146029757670:web:07dcb6d4e599c385a3a727"});return Object(i.c)(e),Object(V.f)(e),Object(T.a)(e),e}();o.a.render(r.a.createElement(d,{firebaseApp:xe},r.a.createElement(ge,null)),document.getElementById("root"))}},[[104,2,1]]]);
//# sourceMappingURL=main.054d5f36.chunk.js.map