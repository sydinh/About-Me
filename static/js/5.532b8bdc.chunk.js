(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{33:function(e,t,a){"use strict";var n=a(6),r=a(7),c=a(9),i=a(8),s=a(10),l=a(0),o=a.n(l);t.a=function(e){return function(t){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(s.a)(a,t),Object(r.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}]),a}(o.a.Component)}},34:function(e,t,a){e.exports=a.p+"static/media/portrait.eb197767.jpg"},35:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("h1",{className:"page__title"},r.a.Children.toArray(t))}},36:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("h2",{className:"page__subtitle"},r.a.Children.toArray(t))}},37:function(e,t,a){"use strict";var n=a(6),r=a(7),c=a(9),i=a(8),s=a(10),l=a(0),o=a.n(l),m=a(12),u=a.n(m),v=function(e){var t=e.onClick,a=e.close,n=u()({"menu-btn":!0,close:a});return o.a.createElement("div",{className:n,onClick:t},o.a.createElement("div",{className:"menu-btn__item"}),o.a.createElement("div",{className:"menu-btn__item"}),o.a.createElement("div",{className:"menu-btn__item"}))},p=a(60),f=a(34),d=a.n(f),h=a(5),b=function(e){var t=e.active,a=u()({menu:!0,active:t}),n={className:"menu__nav-link",activeClassName:"active"};return o.a.createElement("section",{className:a},o.a.createElement("div",{className:"menu__brand"},o.a.createElement("img",{src:d.a,alt:"My portrait",className:"menu__brand-img"})),o.a.createElement("ul",{className:"menu__nav"},o.a.createElement("li",{className:"menu__nav-item"},o.a.createElement(p.a,Object.assign({exact:!0,to:h.c},n),"Home")),o.a.createElement("li",{className:"menu__nav-item"},o.a.createElement(p.a,Object.assign({to:h.a},n),"About Me")),o.a.createElement("li",{className:"menu__nav-item"},o.a.createElement(p.a,Object.assign({to:h.d},n),"My Work")),o.a.createElement("li",{className:"menu__nav-item"},o.a.createElement(p.a,Object.assign({to:h.b},n),"How To Reach Me"))))};t.a=function(e){return function(t){function a(){var e;return Object(n.a)(this,a),(e=Object(c.a)(this,Object(i.a)(a).call(this))).handleMenuBtnClick=function(){e.setState(function(e){return{isSidenavActive:!e.isSidenavActive}})},e.state={isSidenavActive:!1},e}return Object(s.a)(a,t),Object(r.a)(a,[{key:"componentDidMount",value:function(){document.body.classList.remove("menu-active")}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{onClick:this.handleMenuBtnClick,close:this.state.isSidenavActive}),o.a.createElement(b,{active:this.state.isSidenavActive}),o.a.createElement(e,this.props))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.isSidenavActive?document.body.classList.add("menu-active"):document.body.classList.remove("menu-active"),null}}]),a}(o.a.Component)}},39:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=function(){return r.a.createElement("footer",{role:"contentinfo",className:"footer"},"Copyright \xa9 2019")};t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.Children.toArray(t),r.a.createElement(c,null))}},42:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),r=a.n(n);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i=r.a.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}),s=function(e){return r.a.createElement("svg",c({"aria-hidden":"true","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",viewBox:"0 0 496 512"},e),i)};a.p},58:function(e,t,a){e.exports=a.p+"static/media/project.5a100b46.jpg"},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),i=a(40),s=a(33),l=a(37),o=a(39),m=a(13),u=a(35),v=a(36),p=a(58),f=a.n(p);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var h=r.a.createElement("path",{fill:"currentColor",d:"M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"}),b=function(e){return r.a.createElement("svg",d({"aria-hidden":"true","data-prefix":"fas","data-icon":"eye",className:"svg-inline--fa fa-eye fa-w-18",role:"img",viewBox:"0 0 576 512"},e),h)},E=(a.p,a(42)),_=function(e){var t=e.live,a=e.source,n={target:"_blank",rel:"noopener noreferrer"};return r.a.createElement("div",{className:"project"},r.a.createElement("a",Object.assign({href:t,className:"project__img-container"},n),r.a.createElement("img",{src:f.a,alt:"Project screenshot",className:"project__img"})),r.a.createElement("a",Object.assign({href:t,className:"project__btn project__btn-light"},n),r.a.createElement(b,{className:"project__btn-icon"}),"Project"),r.a.createElement("a",Object.assign({href:a,className:"project__btn project__btn-dark"},n),r.a.createElement(E.a,{className:"project__btn-icon"}),"Github"))},g=[{id:0,live:"http://shop-management.surge.sh/",source:"https://github.com/hahuutin/shop-management"},{id:1,live:"https://frontend-styleguide.firebaseapp.com/",source:"https://github.com/sydinh/frontend-styleguide"},{id:2,live:"https://my-first-pwa-90f03.firebaseapp.com/",source:"https://github.com/sydinh/my-first-pwa"}],j=function(){return r.a.createElement("div",{className:"work__list"},g.map(function(e){return r.a.createElement("div",{key:e.id,className:"work__item"},r.a.createElement(_,{live:e.live,source:e.source}))}))};t.default=Object(i.a)(s.a,l.a)(function(){return r.a.createElement(o.a,null,r.a.createElement(c.Helmet,null,r.a.createElement("title",null,"View My Work")),r.a.createElement(m.a,{hasFooter:!0,page:"work"},r.a.createElement(u.a,null,"My ",r.a.createElement("span",{className:"text-brand"},"Work")),r.a.createElement(v.a,null,"Check out some of my projects..."),r.a.createElement(j,null)))})}}]);
//# sourceMappingURL=5.532b8bdc.chunk.js.map