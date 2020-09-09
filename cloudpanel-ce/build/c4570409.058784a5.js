(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(1),r=(a(0),a(173)),o=a(174);const c={id:"application-laravel-8",title:"Laravel 8",sidebar_label:"Laravel 8"},l={id:"application-laravel-8",title:"Laravel 8",description:"On this page, we explain step by step how to setup Laravel 8 with CloudPanel.",source:"@site/docs/application-laravel-8.md",permalink:"/docs/cloudpanel-ce/application-laravel-8",editUrl:"https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce/docs/application-laravel-8.md",sidebar_label:"Laravel 8",sidebar:"sidebar",previous:{title:"Laravel 7",permalink:"/docs/cloudpanel-ce/application-laravel-7"},next:{title:"Magento 1",permalink:"/docs/cloudpanel-ce/application-magento-1"}},i=[{value:"Installation",id:"installation",children:[{value:"Preparation",id:"preparation",children:[]},{value:"Installation",id:"installation-1",children:[]}]}],p={rightToc:i};function b({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"On this page, we explain step by step how to setup ",Object(r.b)("strong",{parentName:"p"},"Laravel 8")," with ",Object(r.b)("strong",{parentName:"p"},"CloudPanel"),"."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"In the following example we will setup ",Object(r.b)("strong",{parentName:"p"},"Laravel 8")," under the domain ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"www.domain.com")),"."),Object(r.b)("h3",{id:"preparation"},"Preparation"),Object(r.b)("p",null,"Before we can start with the installation of ",Object(r.b)("strong",{parentName:"p"},"Laravel 8"),", we need to create an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"users#adding-a-user"}),"SSH User"),", a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"databases#adding-a-database"}),"Database")," ",Object(r.b)("br",null),"\nand a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"domains#adding-a-domain"}),"Domain"),"."),Object(r.b)("p",null,"When you ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"domains#adding-a-domain"}),"Add the Domain"),", make sure to select the ",Object(r.b)("strong",{parentName:"p"},"Laravel 8 Vhost Template")," and the right ",Object(r.b)("strong",{parentName:"p"},"PHP Version"),"."),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/laravel-8/new_domain.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Document Root")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Make sure to point the ",Object(r.b)("strong",{parentName:"p"},"Document Root")," to the ",Object(r.b)("strong",{parentName:"p"},"public")," directory."))),Object(r.b)("h3",{id:"installation-1"},"Installation"),Object(r.b)("p",null,"To install ",Object(r.b)("strong",{parentName:"p"},"Laravel 8")," do the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"users#ssh-login"}),"Login via SSH")," to the server e.g. with ",Object(r.b)("strong",{parentName:"li"},"john-ssh")," and go ",Object(r.b)("strong",{parentName:"li"},"htdocs")," directory:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cd /home/cloudpanel/htdocs/\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Delete the project directory which has been created by ",Object(r.b)("strong",{parentName:"li"},"CloudPanel"),":")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"rm -rf /home/cloudpanel/htdocs/www.domain.com\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Install via ",Object(r.b)("strong",{parentName:"li"},"composer"),":")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"php7.4 /usr/local/bin/composer create-project --prefer-dist laravel/laravel:^8 www.domain.com\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Reset permissions.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cd /home/cloudpanel/htdocs/\nclpctl system:permissions:reset www.domain.com 775\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Done! You can now open your domain in your browser to see the welcome page.")),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/laravel-8/welcome_to_laravel.png")}))}b.isMDXComponent=!0},172:function(e,t,a){"use strict";var n=a(0),r=a(35);t.a=function(){return Object(n.useContext)(r.a)}},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,u=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return a?r.a.createElement(u,l({ref:t},p,{components:a})):r.a.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(172);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}}}]);