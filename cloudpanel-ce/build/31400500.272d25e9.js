(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=(n(0),n(173)),o=n(174);const c={id:"application-nextcloud-19",title:"Nextcloud 19",sidebar_label:"Nextcloud 19"},i={id:"application-nextcloud-19",title:"Nextcloud 19",description:"On this page, we explain step by step how to setup Nextcloud 19 with CloudPanel.",source:"@site/docs/application-nextcloud-19.md",permalink:"/docs/cloudpanel-ce/application-nextcloud-19",editUrl:"https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce/docs/application-nextcloud-19.md",sidebar_label:"Nextcloud 19",sidebar:"sidebar",previous:{title:"Neos 5",permalink:"/docs/cloudpanel-ce/application-neos-5"},next:{title:"OroCommerce 4.1",permalink:"/docs/cloudpanel-ce/application-oro-commerce-4.1"}},l=[{value:"Installation",id:"installation",children:[{value:"Preparation",id:"preparation",children:[]},{value:"Installation",id:"installation-1",children:[]}]}],b={rightToc:l};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"On this page, we explain step by step how to setup ",Object(r.b)("strong",{parentName:"p"},"Nextcloud 19")," with ",Object(r.b)("strong",{parentName:"p"},"CloudPanel"),"."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"In the following example we will setup ",Object(r.b)("strong",{parentName:"p"},"Nextcloud 19")," under the domain ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"www.domain.com")),"."),Object(r.b)("h3",{id:"preparation"},"Preparation"),Object(r.b)("p",null,"Before we can start with the installation of ",Object(r.b)("strong",{parentName:"p"},"Nextcloud 19"),", we need to create an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"users#adding-a-user"}),"SSH User"),", a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"databases#adding-a-database"}),"Database")," ",Object(r.b)("br",null),"\nand a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"domains#adding-a-domain"}),"Domain"),"."),Object(r.b)("p",null,"When you ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"domains#adding-a-domain"}),"Add the Domain"),", make sure to select the ",Object(r.b)("strong",{parentName:"p"},"Nextcloud 19 Vhost Template")," and the right ",Object(r.b)("strong",{parentName:"p"},"PHP Version"),"."),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/nextcloud-19/new_domain.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("h3",{id:"installation-1"},"Installation"),Object(r.b)("p",null,"To install ",Object(r.b)("strong",{parentName:"p"},"Nextcloud 19")," do the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"users#ssh-login"}),"Login via SSH")," to the server e.g. with ",Object(r.b)("strong",{parentName:"li"},"john-ssh")," and go to the users ",Object(r.b)("strong",{parentName:"li"},"tmp")," directory:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cd ~/tmp\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Download and extract the latest ",Object(r.b)("strong",{parentName:"li"},"Nextcloud 19")," version.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"curl -sLo nextcloud-19.zip https://download.nextcloud.com/server/releases/nextcloud-19.0.1.zip && unzip nextcloud-19.zip -d nextcloud-19\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Latest Version")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You find the latest version on github: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nextcloud/server/releases"}),"https://github.com/nextcloud/server/releases")))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Move files to the ",Object(r.b)("strong",{parentName:"li"},"htdocs")," directory of the domain:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cp -R nextcloud-19/nextcloud/* /home/cloudpanel/htdocs/www.domain.com/\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Reset permissions.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cd /home/cloudpanel/htdocs/\nclpctl system:permissions:reset www.domain.com 775\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Clean up the ",Object(r.b)("strong",{parentName:"li"},"tmp")," directory.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"rm -rf ~/tmp/*\n")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Open your domain in the browser and enter your ",Object(r.b)("strong",{parentName:"li"},"admin account")," and ",Object(r.b)("strong",{parentName:"li"},"database credentials"),".")),Object(r.b)("p",null,"Click on the button ",Object(r.b)("strong",{parentName:"p"},"Finish setup")," to install ",Object(r.b)("strong",{parentName:"p"},"Nextcloud 19"),"."),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/nextcloud-19/setup.png")}),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Done! ",Object(r.b)("strong",{parentName:"li"},"Nextcloud 19")," is now installed.")),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/applications/nextcloud-19/nextcloud.png")}))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";var a=n(0),r=n(35);t.a=function(){return Object(a.useContext)(r.a)}},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return n?r.a.createElement(m,i({ref:t},b,{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(172);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);