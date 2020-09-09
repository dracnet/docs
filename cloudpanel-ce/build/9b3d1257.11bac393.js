(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=(n(0),n(173)),o=n(174);const c={id:"technology-stack",title:"Technology Stack",sidebar_label:"Technology Stack"},i={id:"technology-stack",title:"Technology Stack",description:"The technology stack of CloudPanel consists of modern and lightweight components for maximum performance for PHP applications.",source:"@site/docs/cloudpanel-ce-technology-stack.md",permalink:"/docs/cloudpanel-ce/technology-stack",editUrl:"https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce/docs/cloudpanel-ce-technology-stack.md",sidebar_label:"Technology Stack",sidebar:"sidebar",previous:{title:"Requirements",permalink:"/docs/cloudpanel-ce/requirements"},next:{title:"Changelog",permalink:"/docs/cloudpanel-ce/changelog"}},l=[{value:"Components",id:"components",children:[]}],p={rightToc:l};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The technology stack of CloudPanel consists of modern and lightweight components for maximum performance for PHP applications."),Object(a.b)("h2",{id:"components"},"Components"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://wiki.debian.org/DebianBuster"}),"Debian 10")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://nginx.org"}),"NGINX 1.18")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.percona.com/software/mysql-database/percona-server"}),"MySQL 5.7 (Percona)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.php.net"}),"PHP"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"7.1"),Object(a.b)("li",{parentName:"ul"},"7.2"),Object(a.b)("li",{parentName:"ul"},"7.3"),Object(a.b)("li",{parentName:"ul"},"7.4"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.io"}),"Redis 5")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.proftpd.org"}),"ProFTPD 1.3")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org"}),"Node.js 14")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://yarnpkg.com"}),"Yarn 1.22"))),Object(a.b)("img",{class:"border",alt:"CloudPanel Technology Stack",src:Object(o.a)("img/v1/technology_stack.png")}))}u.isMDXComponent=!0},172:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(f,i({ref:t},p,{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(172);function a(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);