(this["webpackJsonpincred-assignment"]=this["webpackJsonpincred-assignment"]||[]).push([[0],{42:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(24),n=a.n(c),r=(a(42),a(15)),i=a(6),o=a(8),l=a(21),u=(a(43),a(56),{apiKey:"AIzaSyBUWqqtnBkpBppls55tvMhv6K4AguxucjY",authDomain:"incred-assignment.firebaseapp.com",projectId:"incred-assignment",storageBucket:"incred-assignment.appspot.com",messagingSenderId:"826537459932",appId:"1:826537459932:web:206bc2d3e2763b5c3f3419"});l.a.initializeApp(u);var j=l.a.auth(),d=(l.a.firestore(),new l.a.auth.FacebookAuthProvider),b=new l.a.auth.GoogleAuthProvider,m=function(e){return l.a.auth().signInWithPopup(e).then((function(e){return e.user})).catch((function(e){return e}))},h=a(34),p=a.n(h),x=a(2),O=function(e){var t=e.user,a=Object(i.f)();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(o.b,{to:"/"}),Object(x.jsx)("div",{className:"navbar_style",children:t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.b,{to:"/home",exact:!0,activeClassName:"active_navbar",children:" Home "}),Object(x.jsxs)(o.b,{to:"/cart",exact:!0,activeClassName:"active_navbar",children:[" ",Object(x.jsx)(p.a,{})," "]}),Object(x.jsx)("button",{className:"style1",onClick:function(){j.signOut(),a.push("/login")},children:" Logout "})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.b,{to:"/",exact:!0,activeClassName:"active_navbar",children:" Signup "}),Object(x.jsx)(o.b,{to:"/login",exact:!0,activeClassName:"active_navbar",children:" Login "})]})})]})},f=a(17),g=a.n(f),v=a(22),N=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),l=Object(r.a)(n,2),u=l[0],h=l[1],p=Object(i.f)(),O=function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a,u),e.prev=2,e.next=5,j.createUserWithEmailAndPassword(a,u);case 5:e.sent,p.push("/dashboard"),a&&u&&({id:(new Date).getTime().toString(),email:a,password:u},c(""),h("")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert("Please fill every field correctly and password must be atleast 6 characters long");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:a=e.sent,p.push("/dashboard"),console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"form_div",children:[Object(x.jsxs)("form",{action:"",className:"jerry",onSubmit:O,children:[Object(x.jsxs)("div",{className:"second",children:[Object(x.jsx)("h1",{className:"data1",children:" REGISTER "}),Object(x.jsx)("hr",{className:"line_div"})]}),Object(x.jsx)("input",{className:"summer",name:"email",id:"email",autocomplete:"off",value:a,onChange:function(e){return c(e.target.value)},placeholder:"E-Mail",type:"text"}),Object(x.jsx)("input",{autoComplete:"off",name:"password",id:"password",value:u,onChange:function(e){return h(e.target.value)},placeholder:"Password",className:"summer",type:"Password"}),Object(x.jsx)("div",{className:"tommy",children:Object(x.jsx)("button",{className:"stylee1",children:" Submit"})}),Object(x.jsx)(o.b,{to:"/login",className:"stylee2",role:"button",children:" Existing User? Click here to Login! "})]}),Object(x.jsx)("h1",{className:"data2",children:" OR"}),Object(x.jsxs)("div",{className:"social_div",children:[Object(x.jsx)("h1",{className:"data4",children:" Sign in with "}),Object(x.jsx)("hr",{className:"line_div2"}),Object(x.jsx)("button",{onClick:function(){return f(d)},className:"social_btn",children:" Facebook "}),Object(x.jsx)("button",{onClick:function(){return f(b)},className:"social_btn1",children:" Google "})]})]})})},w=(a(53),function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),l=Object(r.a)(n,2),u=l[0],h=l[1],p=Object(i.f)(),O=function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a,u),e.prev=2,e.next=5,j.signInWithEmailAndPassword(a,u);case 5:e.sent,p.push("/dashboard"),a&&u&&({id:(new Date).getTime().toString(),email:a,password:u},c(""),h("")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert("Please fill every field correctly and password must be atleast 6 characters long");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:a=e.sent,p.push("/dashboard"),console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"form_div",children:[Object(x.jsxs)("form",{action:"",className:"jerry",onSubmit:O,children:[Object(x.jsxs)("div",{className:"second",children:[Object(x.jsx)("h1",{className:"data1",children:" LOGIN "}),Object(x.jsx)("hr",{className:"line_div"})]}),Object(x.jsx)("input",{className:"summer",name:"email",id:"email",autocomplete:"off",value:a,onChange:function(e){return c(e.target.value)},placeholder:"E-Mail",type:"email"}),Object(x.jsx)("input",{autoComplete:"off",name:"password",id:"password",value:u,onChange:function(e){return h(e.target.value)},placeholder:"Password",className:"summer",type:"Password"}),Object(x.jsx)("div",{className:"tommy",children:Object(x.jsx)("button",{className:"stylee1",children:" Submit"})}),Object(x.jsx)(o.b,{to:"/",className:"stylee2",role:"button",children:" Don't have an account? Register here "})]}),Object(x.jsx)("h1",{className:"data2",children:" OR"}),Object(x.jsxs)("div",{className:"social_div",children:[Object(x.jsx)("h1",{className:"data4",children:" Sign in with "}),Object(x.jsx)("hr",{className:"line_div2"}),Object(x.jsx)("button",{onClick:function(){return f(d)},className:"social_btn",children:" Facebook "}),Object(x.jsx)("button",{onClick:function(){return f(b)},className:"social_btn1",children:" Google "})]})]})})}),_=function(){var e=Object(i.f)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"dash_div",children:[Object(x.jsx)("h3",{className:"text1",children:" Welcome to the Website  "}),Object(x.jsx)("button",{className:"dash_btn ",onClick:function(){e.push("/home")},children:" Get Started "})]})})},y=[{imgsrc:"https://1.bp.blogspot.com/-2t8a2XOF8_4/XXOfJnxblSI/AAAAAAAAAYc/KctDWXUcxL8TGbWZoceVdEIppudrVF9FgCLcBGAs/s1600/B612_20190110_183153_628%257E2.jpg",name:"Maggi",rs:"25 \u20b9"},{imgsrc:"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",name:"Pizza",rs:"200 \u20b9"},{imgsrc:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"Burger",rs:"100 \u20b9"},{imgsrc:"https://media.newstracklive.com/uploads/entertainment-news/bollywood-news/Jun/04/big_thumb/litti2_5ed8bed88bdb0.JPG",name:"Litti",rs:"12 \u20b9"},{imgsrc:"https://content3.jdmagicbox.com/comp/haldwani/j7/9999p5946.5946.171002053113.u4j7/catalogue/madrasi-masala-dosa-painth-parao-haldwani-restaurants-1y8t0kb5qq.jpg",name:"Dosa",rs:"50 \u20b9"},{imgsrc:"https://www.axisbank.com/images/default-source/progress-with-us_new/idli.jpg",name:"Idli",rs:"8 \u20b9"},{imgsrc:"https://st2.depositphotos.com/5653638/11520/i/950/depositphotos_115208152-stock-photo-indian-thali-indian-food-thali.jpg",name:"Thali",rs:"150 \u20b9"},{imgsrc:"https://myhubsdotorg.files.wordpress.com/2016/05/013.jpg?w=768&h=494",name:"Ice-Cream",rs:"80 \u20b9"}],k=a(35),C=a.n(k),S=a(36),A=a.n(S),F=function(e){var t=Object(s.useState)(),a=Object(r.a)(t,2),c=(a[0],a[1],Object(s.useState)(0)),n=Object(r.a)(c,2),o=n[0],l=n[1],u=Object(i.f)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"cards",children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("img",{src:e.imgsrc,alt:"",className:"card_img"}),Object(x.jsxs)("div",{className:"card_info",children:[Object(x.jsxs)("h2",{className:"card_title",children:[" ",e.name," "]}),Object(x.jsxs)("span",{className:"ruppee",children:[" ",e.rs]}),Object(x.jsxs)("div",{className:"quantity",children:[Object(x.jsxs)("button",{className:"btn_quan",onClick:function(){o<5?l(o+1):alert("you can only order 5 plates in each menu")},children:[" ",Object(x.jsx)(C.a,{})," "]}),Object(x.jsxs)("h1",{className:"count_div",children:["  ",o]}),Object(x.jsxs)("button",{className:"btn_quan",onClick:function(){o>0?l(o-1):(l(0),alert("Negative Quantity not possible"))},children:["  ",Object(x.jsx)(A.a,{})," "]})]}),Object(x.jsx)("button",{className:"card_btn",onClick:function(){u.push("/cart")},children:" Order Now"})]})]})})})},I=function(){return Object(x.jsx)("div",{className:"menu_div",children:y.map((function(e){return Object(x.jsx)(F,{imgsrc:e.imgsrc,name:e.name,rs:e.rs})}))})},P=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{children:Object(x.jsx)("h1",{className:"cart_text",children:" In Progress "})})})},B=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){j.onAuthStateChanged((function(e){c(e||null)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{user:a}),Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{exact:!0,path:"/",user:a,component:N}),Object(x.jsx)(i.a,{exact:!0,path:"/login",user:a,component:w}),Object(x.jsx)(i.a,{exact:!0,path:"/dashboard",user:a,component:_}),Object(x.jsx)(i.a,{exact:!0,path:"/home",user:a,component:I}),Object(x.jsx)(i.a,{exact:!0,path:"/cart",user:a,component:P})]})]})};n.a.render(Object(x.jsx)(o.a,{children:Object(x.jsx)(B,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.92c2f6e1.chunk.js.map