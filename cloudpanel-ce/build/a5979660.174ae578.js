(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=(n(0),n(173)),a=n(174);const i={id:"admin-settings",title:"Settings",sidebar_label:"Settings"},c={id:"admin-settings",title:"Settings",description:"Settings",source:"@site/docs/admin-area-settings.md",permalink:"/docs/cloudpanel-ce/admin-settings",editUrl:"https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce/docs/admin-area-settings.md",sidebar_label:"Settings",sidebar:"sidebar",previous:{title:"Action Log",permalink:"/docs/cloudpanel-ce/admin-action-log"},next:{title:"CloudPanel CLI Commands",permalink:"/docs/cloudpanel-ce/cloudpanel-cli-commands"}},s=[{value:"Settings",id:"settings",children:[{value:"Proftpd Settings",id:"proftpd-settings",children:[]}]}],p={rightToc:s};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"settings"},"Settings"),Object(o.b)("h3",{id:"proftpd-settings"},"Proftpd Settings"),Object(o.b)("p",null,"For connecting via ",Object(o.b)("strong",{parentName:"p"},"FTP")," you need to enter the ",Object(o.b)("strong",{parentName:"p"},"Server IP")," in the field ",Object(o.b)("strong",{parentName:"p"},"MasqueradeAddress"),"."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"MasqueradeAddress")," causes the server to display the network information for the specified IP address or DNS hostname to the client,\non the assumption that the IP address or DNS host is acting as a NAT gateway or port forwarder for the server."),Object(o.b)("img",{class:"border",src:Object(a.a)("img/v1/admin/settings/proftpd_settings.png")}))}u.isMDXComponent=!0},172:function(e,t,n){"use strict";var r=n(0),o=n(35);t.a=function(){return Object(r.useContext)(o.a)}},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,b=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return n?o.a.createElement(b,c({ref:t},p,{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(172);function o(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);