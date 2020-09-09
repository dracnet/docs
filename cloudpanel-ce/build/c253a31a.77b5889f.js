(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=(r(0),r(173));r(174);const i={id:"file-manager",title:"File Manager",sidebar_label:"File Manager"},o={id:"file-manager",title:"File Manager",description:"CloudPanel doesn't provide a File Manager because there are plenty of good tools for all operating systems.",source:"@site/docs/frontend-area-file-manager.md",permalink:"/docs/cloudpanel-ce/file-manager",editUrl:"https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce/docs/frontend-area-file-manager.md",sidebar_label:"File Manager",sidebar:"sidebar",previous:{title:"E-Mail",permalink:"/docs/cloudpanel-ce/email"},next:{title:"Security",permalink:"/docs/cloudpanel-ce/security"}},l=[{value:"macOS",id:"macos",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Linux",id:"linux",children:[]}],c={rightToc:l};function p({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CloudPanel")," doesn't provide a ",Object(a.b)("strong",{parentName:"p"},"File Manager")," because there are plenty of good tools for all operating systems."),Object(a.b)("p",null,"With the following tools, you can upload and manage files via ",Object(a.b)("strong",{parentName:"p"},"FTP")," or encrypted via ",Object(a.b)("strong",{parentName:"p"},"SFTP"),"."),Object(a.b)("p",null,"Our recommendation is to use ",Object(a.b)("strong",{parentName:"p"},"Filezilla")," as it's ",Object(a.b)("strong",{parentName:"p"},"free"),", ",Object(a.b)("strong",{parentName:"p"},"easy to use"),", and is under active development."),Object(a.b)("h2",{id:"macos"},"macOS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://filezilla-project.org/"}),"Filezilla")," (",Object(a.b)("strong",{parentName:"li"},"Free"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://panic.com/transmit/"}),"Transmit")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://cyberduck.io/"}),"Cyberduck"))),Object(a.b)("h2",{id:"windows"},"Windows"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://winscp.net/"}),"WinSCP")," (",Object(a.b)("strong",{parentName:"li"},"Free"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://filezilla-project.org/download.php?platform=win64"}),"Filezilla")," (",Object(a.b)("strong",{parentName:"li"},"Free"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://cyberduck.io/"}),"Cyberduck"))),Object(a.b)("h2",{id:"linux"},"Linux"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://filezilla-project.org/download.php?platform=linux64"}),"Filezilla")," (",Object(a.b)("strong",{parentName:"li"},"Free"),")")))}p.isMDXComponent=!0},172:function(e,t,r){"use strict";var n=r(0),a=r(35);t.a=function(){return Object(n.useContext)(a.a)}},173:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,f=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return r?a.a.createElement(f,l({ref:t},p,{components:r})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},174:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(172);function a(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}}}]);