(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(1),r=(a(0),a(173)),o=a(174);const c={id:"application-presta-shop-1.7",title:"PrestaShop 1.7",sidebar_label:"PrestaShop 1.7"},i={id:"application-presta-shop-1.7",title:"PrestaShop 1.7",description:"On this page, we explain step by step how to setup PrestaShop 1.7 with CloudPanel.",source:"@site/docs/application-presta-shop-1.7.md",permalink:"/docs/cloudpanel-ce/application-presta-shop-1.7",editUrl:"https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce/docs/application-presta-shop-1.7.md",sidebar_label:"PrestaShop 1.7",sidebar:"sidebar",previous:{title:"ownCloud 10",permalink:"/docs/cloudpanel-ce/application-owncloud-10"},next:{title:"Shopware 6",permalink:"/docs/cloudpanel-ce/application-shopware-6"}},p=[{value:"Installation",id:"installation",children:[{value:"Preparation",id:"preparation",children:[]},{value:"Installation",id:"installation-1",children:[]}]}],s={rightToc:p};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"On this page, we explain step by step how to setup ",Object(r.b)("strong",{parentName:"p"},"PrestaShop 1.7")," with ",Object(r.b)("strong",{parentName:"p"},"CloudPanel"),"."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"In the following example we will setup ",Object(r.b)("strong",{parentName:"p"},"PrestaShop 1.7")," under the domain ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"www.domain.com")),"."),Object(r.b)("h3",{id:"preparation"},"Preparation"),Object(r.b)("p",null,"Before we can start with the installation of ",Object(r.b)("strong",{parentName:"p"},"PrestaShop 1.7"),", we need to create an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"users#adding-a-user"}),"SSH User"),", a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"databases#adding-a-database"}),"Database")," ",Object(r.b)("br",null),"\nand a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"domains#adding-a-domain"}),"Domain"),"."),Object(r.b)("p",null,"When you ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"domains#adding-a-domain"}),"Add the Domain"),", make sure to select the ",Object(r.b)("strong",{parentName:"p"},"PrestaShop 1.7 Vhost Template")," and the right ",Object(r.b)("strong",{parentName:"p"},"PHP Version"),"."),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/presta-shop-1.7/new_domain.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("h3",{id:"installation-1"},"Installation"),Object(r.b)("p",null,"To install ",Object(r.b)("strong",{parentName:"p"},"PrestaShop 1.7")," do the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"users#ssh-login"}),"Login via SSH")," to the server e.g. with ",Object(r.b)("strong",{parentName:"li"},"john-ssh")," and go to the users ",Object(r.b)("strong",{parentName:"li"},"tmp")," directory:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cd ~/tmp\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Download and extract the latest ",Object(r.b)("strong",{parentName:"li"},"PrestaShop 1.7")," version.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"curl -sL https://github.com/PrestaShop/PrestaShop/archive/1.7.6.7.tar.gz | tar xfz -\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Latest Version")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You find the latest version on github: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/PrestaShop/PrestaShop/releases"}),"https://github.com/PrestaShop/PrestaShop/releases")))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Move files to the ",Object(r.b)("strong",{parentName:"li"},"htdocs")," directory of the domain:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cp -R PrestaShop-1.7.6.7/* /home/cloudpanel/htdocs/www.domain.com/\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Install via ",Object(r.b)("strong",{parentName:"li"},"composer"),":")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cd /home/cloudpanel/htdocs/www.domain.com/\nphp7.2 /usr/local/bin/composer install\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Reset permissions.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cd /home/cloudpanel/htdocs/\nclpctl system:permissions:reset www.domain.com 775\n")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Clean up the ",Object(r.b)("strong",{parentName:"li"},"tmp")," directory.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"rm -rf ~/tmp/*\n")),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Open your domain in the browser and go through the ",Object(r.b)("strong",{parentName:"li"},"Installation Wizard"),".")),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/presta-shop-1.7/installer.png")}),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"Done! ",Object(r.b)("strong",{parentName:"li"},"PrestaShop")," is now installed.")),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/presta-shop-1.7/frontend.png")}))}l.isMDXComponent=!0},172:function(e,t,a){"use strict";var n=a(0),r=a(35);t.a=function(){return Object(n.useContext)(r.a)}},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(a),m=n,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return a?r.a.createElement(u,i({ref:t},s,{components:a})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(172);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}}}]);