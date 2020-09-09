(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(1),r=(a(0),a(173)),o=a(174);const l={id:"application-joomla-3.9",title:"Joomla 3.9",sidebar_label:"Joomla 3.9"},c={id:"application-joomla-3.9",title:"Joomla 3.9",description:"On this page, we explain step by step how to setup Joomla 3.9 with CloudPanel.",source:"@site/docs/application-joomla-3.9.md",permalink:"/docs/cloudpanel-ce/application-joomla-3.9",editUrl:"https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce/docs/application-joomla-3.9.md",sidebar_label:"Joomla 3.9",sidebar:"sidebar",previous:{title:"FuelPHP 1.8",permalink:"/docs/cloudpanel-ce/application-fuel-php-1.8"},next:{title:"Laminas",permalink:"/docs/cloudpanel-ce/application-laminas"}},i=[{value:"Installation",id:"installation",children:[{value:"Preparation",id:"preparation",children:[]},{value:"Installation",id:"installation-1",children:[]}]}],p={rightToc:i};function b({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"On this page, we explain step by step how to setup ",Object(r.b)("strong",{parentName:"p"},"Joomla 3.9")," with ",Object(r.b)("strong",{parentName:"p"},"CloudPanel"),"."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"In the following example we will setup ",Object(r.b)("strong",{parentName:"p"},"Joomla 3.9")," under the domain ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"www.domain.com")),"."),Object(r.b)("h3",{id:"preparation"},"Preparation"),Object(r.b)("p",null,"Before we can start with the installation of ",Object(r.b)("strong",{parentName:"p"},"Joomla 3.9"),", we need to create an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"users#adding-a-user"}),"SSH User"),", a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"databases#adding-a-database"}),"Database")," ",Object(r.b)("br",null),"\nand a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"domains#adding-a-domain"}),"Domain"),"."),Object(r.b)("p",null,"When you ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"domains#adding-a-domain"}),"Add the Domain"),", make sure to select the ",Object(r.b)("strong",{parentName:"p"},"Joomla 3.9 Vhost Template")," and the right ",Object(r.b)("strong",{parentName:"p"},"PHP Version"),"."),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/joomla-3.9/new_domain.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("h3",{id:"installation-1"},"Installation"),Object(r.b)("p",null,"To install ",Object(r.b)("strong",{parentName:"p"},"Joomla 3.9")," do the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"users#ssh-login"}),"Login via SSH")," to the server e.g. with ",Object(r.b)("strong",{parentName:"li"},"john-ssh")," and go to the users ",Object(r.b)("strong",{parentName:"li"},"tmp")," directory:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cd ~/tmp\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Download and extract the latest ",Object(r.b)("strong",{parentName:"li"},"Joomla 3.9")," version.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"mkdir ~/tmp/joomla-3.9 && curl -sL https://downloads.joomla.org/cms/joomla3/3-9-20/Joomla_3-9-20-Stable-Full_Package.tar.gz | tar xfz - -C ~/tmp/joomla-3.9/\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Move files to the ",Object(r.b)("strong",{parentName:"li"},"htdocs")," directory of the domain:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cp -R joomla-3.9/* /home/cloudpanel/htdocs/www.domain.com/\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Reset permissions.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cd /home/cloudpanel/htdocs/\nclpctl system:permissions:reset www.domain.com 775\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Clean up the ",Object(r.b)("strong",{parentName:"li"},"tmp")," directory.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"rm -rf ~/tmp/*\n")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Open your domain in the browser and go through the ",Object(r.b)("strong",{parentName:"li"},"installation wizard"),".")),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/joomla-3.9/installation_wizard.png")}),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Done! ",Object(r.b)("strong",{parentName:"li"},"Joomla 3.9")," is now installed. ")),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/joomla-3.9/joomla_admin.png")}))}b.isMDXComponent=!0},172:function(e,t,a){"use strict";var n=a(0),r=a(35);t.a=function(){return Object(n.useContext)(r.a)}},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,d=s["".concat(l,".").concat(u)]||s[u]||m[u]||o;return a?r.a.createElement(d,c({ref:t},p,{components:a})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(172);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}}}]);