(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(1),r=(n(0),n(173)),o=n(174);const c={id:"application-fuel-php-1.8",title:"FuelPHP 1.8",sidebar_label:"FuelPHP 1.8"},l={id:"application-fuel-php-1.8",title:"FuelPHP 1.8",description:"On this page, we explain step by step how to setup FuelPHP 1.8 with CloudPanel.",source:"@site/docs/application-fuel-php-1.8.md",permalink:"/docs/cloudpanel-ce/application-fuel-php-1.8",editUrl:"https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce/docs/application-fuel-php-1.8.md",sidebar_label:"FuelPHP 1.8",sidebar:"sidebar",previous:{title:"Drupal 9",permalink:"/docs/cloudpanel-ce/application-drupal-9"},next:{title:"Joomla 3.9",permalink:"/docs/cloudpanel-ce/application-joomla-3.9"}},i=[{value:"Installation",id:"installation",children:[{value:"Preparation",id:"preparation",children:[]},{value:"Installation",id:"installation-1",children:[]}]}],p={rightToc:i};function b({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"On this page, we explain step by step how to setup ",Object(r.b)("strong",{parentName:"p"},"FuelPHP 1.8")," with ",Object(r.b)("strong",{parentName:"p"},"CloudPanel"),"."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"In the following example we will setup ",Object(r.b)("strong",{parentName:"p"},"FuelPHP 1.8")," under the domain ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"www.domain.com")),"."),Object(r.b)("h3",{id:"preparation"},"Preparation"),Object(r.b)("p",null,"Before we can start with the installation of ",Object(r.b)("strong",{parentName:"p"},"FuelPHP 1.8"),", we need to create an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"users#adding-a-user"}),"SSH User"),", a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"databases#adding-a-database"}),"Database")," ",Object(r.b)("br",null),"\nand a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"domains#adding-a-domain"}),"Domain"),"."),Object(r.b)("p",null,"When you ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"domains#adding-a-domain"}),"Add the Domain"),", make sure to select the ",Object(r.b)("strong",{parentName:"p"},"FuelPHP 1.8 Vhost Template")," and the right ",Object(r.b)("strong",{parentName:"p"},"PHP Version"),"."),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/fuel-php-1.8/new_domain.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("h3",{id:"installation-1"},"Installation"),Object(r.b)("p",null,"To install ",Object(r.b)("strong",{parentName:"p"},"FuelPHP 1.8")," do the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"users#ssh-login"}),"Login via SSH")," to the server e.g. with ",Object(r.b)("strong",{parentName:"li"},"john-ssh")," and go to the users ",Object(r.b)("strong",{parentName:"li"},"tmp")," directory:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cd ~/tmp\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Download and extract the latest ",Object(r.b)("strong",{parentName:"li"},"FuelPHP 1.8")," version.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"curl -sL https://github.com/fuel/fuel/archive/1.8.2.tar.gz | tar xfz -\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Latest Version")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You find the latest version on github: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/fuel/fuel/releases"}),"https://github.com/fuel/fuel/releases")))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Move files to the ",Object(r.b)("strong",{parentName:"li"},"htdocs")," directory of the domain:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cp -R fuel-1.8.2/* /home/cloudpanel/htdocs/www.domain.com/\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Install via ",Object(r.b)("strong",{parentName:"li"},"composer"),":")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cd /home/cloudpanel/htdocs/www.domain.com/\nphp7.2 /usr/local/bin/composer install\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Reset permissions.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cd /home/cloudpanel/htdocs/\nclpctl system:permissions:reset www.domain.com 775\n")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Clean up the ",Object(r.b)("strong",{parentName:"li"},"tmp")," directory.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"rm -rf ~/tmp/*\n")),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Done! ",Object(r.b)("strong",{parentName:"li"},"FuelPHP")," is now installed.")),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/fuel-php-1.8/welcome.png")}))}b.isMDXComponent=!0},172:function(e,t,n){"use strict";var a=n(0),r=n(35);t.a=function(){return Object(a.useContext)(r.a)}},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?r.a.createElement(d,l({ref:t},p,{components:n})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(172);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);