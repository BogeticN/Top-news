(this["webpackJsonptop-news"]=this["webpackJsonptop-news"]||[]).push([[0],{56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(26),s=c.n(r),i=c(5),o=c(4),l=c(2),j=c(14),b=c.n(j),h=function(e,t){return b.a.get("https://newsapi.org/v2/top-headlines?country=".concat(e,"&category=").concat(t,"&apiKey=").concat("9aed8e60722c40b082b0250370de4d58"))},u=c(0),d=function(e){var t=e.title,c=e.description,n=e.content,a=e.image,r=e.classThumbnail;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:r||"single-thumbnail",style:{border:"1px solid black"},children:[Object(u.jsx)("p",{className:"top-text",children:t}),Object(u.jsx)("img",{src:a||"https://via.placeholder.com/400x260",alt:"TopNewsImg"}),c?Object(u.jsxs)("p",{className:"bottom-text",children:[c.substring(0,100),"..."]}):null,Object(u.jsx)(o.b,{to:{pathname:"/article",state:{title:t,content:n,image:a}},children:"More"})]})})},m=function(e){var t=e.country,c=e.category,a=Object(n.useState)([]),r=Object(i.a)(a,2),s=r[0],l=r[1],j=Object(n.useState)(0),b=Object(i.a)(j,2),m=b[0],O=b[1],x=Object(n.useState)(!1),g=Object(i.a)(x,2),p=g[0],f=g[1];Object(n.useEffect)((function(){var e=!0;return h(t,c).then((function(t){e&&l(t.data.articles)})),function(){return e=!1}}),[c,t]);var v=s.slice(0);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(o.b,{to:{pathname:"/allnewsfromcategory",state:{category:c,singleCategory:s,country:t}},children:Object(u.jsx)("h2",{children:c.charAt(0).toUpperCase()+c.slice(1)})}),Object(u.jsx)("div",{className:"form-check form-switch",children:Object(u.jsx)("input",{onChange:function(){return f((function(e){return!e}))},className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault"})}),p?Object(u.jsxs)("div",{className:"slide-show",children:[Object(u.jsx)("i",{className:"fa fa-angle-left fa-4x",onClick:function(){O(0==m?v.length-1:(m-1)%v.length)}}),v.slice(m,m+4).map((function(e){return Object(u.jsx)(d,{classThumbnail:"slide-thumbnail",title:e.title,content:e.content,image:e.urlToImage},e.title)})),Object(u.jsx)("i",{className:"fa fa-angle-right fa-4x",onClick:function(){return O((m+4)%v.length)}})]}):null]})})},O=function(e){var t=e.country;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{children:["Top news by categories from ",t.toUpperCase(),":"]}),Object(u.jsxs)("div",{className:"categories",children:[Object(u.jsx)(m,{country:t,category:"business"}),Object(u.jsx)(m,{country:t,category:"sport"}),Object(u.jsx)(m,{country:t,category:"entertainment"}),Object(u.jsx)(m,{country:t,category:"health"}),Object(u.jsx)(m,{country:t,category:"general"}),Object(u.jsx)(m,{country:t,category:"science"}),Object(u.jsx)(m,{country:t,category:"technology"})]})]})},x=function(e){var t=e.country,c=Object(n.useState)([]),a=Object(i.a)(c,2),r=a[0],s=a[1];Object(n.useEffect)((function(){var e=!0;return function(e){return b.a.get("https://newsapi.org/v2/top-headlines?country=".concat(e,"&apiKey=").concat("9aed8e60722c40b082b0250370de4d58"))}(t).then((function(t){e&&s(t.data.articles)})),function(){return e=!1}}),[t]);return Object(u.jsxs)(u.Fragment,{children:["gb"===t?Object(u.jsx)("h1",{children:"Top news from Great Britain"}):Object(u.jsx)("h1",{children:"Top news from United States"}),Object(u.jsx)("div",{className:"grid-thumbnails",children:r.map((function(e){return Object(u.jsx)(d,{content:e.content,title:e.title,description:e.description,image:e.urlToImage?e.urlToImage:"https://via.placeholder.com/400x260"},e.title)}))})]})},g=function(e){var t=e.location.state,c=t.title,n=t.content,a=t.image;return Object(u.jsx)("div",{className:"article-container",children:Object(u.jsxs)("div",{className:"article-content",children:[Object(u.jsx)("h2",{children:c}),Object(u.jsx)("img",{src:a||"https://via.placeholder.com/400x260",alt:"TopNewsImage"}),Object(u.jsx)("p",{children:n}),Object(u.jsx)(o.b,{to:"/",children:"Back to list"})]})})},p=function(e){var t=e.theme,c=e.setTheme,a=e.setCountry,r=Object(n.useState)(!1),s=Object(i.a)(r,2),l=s[0],j=s[1];return Object(u.jsxs)("header",{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)("button",{onClick:function(){return j(!l)},className:!1===l?"hamburger hamburger--spin":"hamburger hamburger--spin is-active",type:"button",children:Object(u.jsx)("span",{className:"hamburger-box",children:Object(u.jsx)("span",{className:"hamburger-inner"})})}),l?Object(u.jsxs)("div",{className:"nav-links",style:{visibility:"visible",left:"0vh"},children:[Object(u.jsx)(o.b,{onClick:function(){return j(!1)},to:"/",children:"Top News"}),Object(u.jsx)(o.b,{onClick:function(){return j(!1)},to:"/categories",children:"Categories"}),Object(u.jsx)(o.b,{onClick:function(){return j(!1)},to:"/search",children:"Search"})]}):Object(u.jsxs)("div",{className:"nav-links",children:[Object(u.jsx)(o.b,{onClick:function(){return j(!1)},to:"/",children:"Top News"}),Object(u.jsx)(o.b,{onClick:function(){return j(!1)},to:"/categories",children:"Categories"}),Object(u.jsx)(o.b,{onClick:function(){return j(!1)},to:"/search",children:"Search"})]})]}),Object(u.jsxs)("div",{className:"country-buttons",children:["-dark"===t?Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"white",className:"bi bi-moon",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"})}):Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-sun",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"})}),Object(u.jsx)("div",{className:"form-check form-switch ",children:Object(u.jsx)("input",{onClick:function(){c(t?"":"-dark")},className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault"})}),Object(u.jsx)("button",{onClick:function(){return a("gb")},children:"GB"}),Object(u.jsx)("button",{onClick:function(){return a("us")},children:"US"})]})]})},f=function(e){var t=e.country,c=Object(n.useState)(""),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(n.useState)([]),l=Object(i.a)(o,2),j=l[0],b=l[1],m=["business","sport","entertainment","health","general","science","technology"];return Object(n.useEffect)((function(){for(var e=!0,c=0;c<m.length;c++)return e&&h(t,m[c]).then((function(e){b(e.data.articles)})),function(){return e=!1}}),[t]),Object(u.jsxs)("div",{className:"search-container",children:["gb"===t?Object(u.jsx)("h1",{children:"Search top news from Great Britain by term:"}):Object(u.jsx)("h1",{children:"Search top news from United States by term:"}),Object(u.jsx)("input",{className:"search-input",type:"text",placeholder:"Search...",onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("div",{className:"grid-thumbnails",children:""===r?null:j.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())})).map((function(e){return Object(u.jsx)(d,{title:e.title,description:e.description,content:e.content,image:e.urlToImage},e.title)}))})]})},v=function(e){var t=e.location.state,c=t.category,n=t.singleCategory,a=t.country;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{className:"category-title",children:["Top ",c," news from ",a.toUpperCase()," "]}),Object(u.jsx)("div",{className:"grid-thumbnails",children:n.map((function(e){return Object(u.jsx)(d,{content:e.content,title:e.title,description:e.description,image:e.urlToImage},e.title)}))})]})},y=(c(56),function(){var e=Object(n.useState)("us"),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),j=s[0],b=s[1];return Object(u.jsx)("div",{className:"app".concat(j),children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(p,{setCountry:a,theme:j,setTheme:b}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",children:Object(u.jsx)(x,{country:c})}),Object(u.jsx)(l.a,{path:"/categories",children:Object(u.jsx)(O,{country:c})}),Object(u.jsx)(l.a,{path:"/search",children:Object(u.jsx)(f,{country:c})}),Object(u.jsx)(l.a,{path:"/article",component:g}),Object(u.jsx)(l.a,{path:"/allnewsfromcategory",country:c,component:v})]})]})})});s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.41ec6441.chunk.js.map