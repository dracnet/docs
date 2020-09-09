(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(1),r=(a(0),a(173)),c=a(174);const o={id:"cloud-features-aws",title:"Amazon Web Services",sidebar_label:"Amazon Web Services"},b={id:"cloud-features-aws",title:"Amazon Web Services",description:"AWS Access Keys",source:"@site/docs/frontend-area-cloud-features-aws.md",permalink:"/docs/cloudpanel-ce/cloud-features-aws",editUrl:"https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce/docs/frontend-area-cloud-features-aws.md",sidebar_label:"Amazon Web Services",sidebar:"sidebar",previous:{title:"Services",permalink:"/docs/cloudpanel-ce/services"},next:{title:"Digital Ocean",permalink:"/docs/cloudpanel-ce/cloud-features-digital-ocean"}},s=[{value:"AWS Access Keys",id:"aws-access-keys",children:[{value:"Create Access Keys",id:"create-access-keys",children:[]},{value:"Enter Access Keys",id:"enter-access-keys",children:[]}]},{value:"Instance",id:"instance",children:[]},{value:"Security Groups",id:"security-groups",children:[{value:"Adding a Rule",id:"adding-a-rule",children:[]},{value:"Deleting a Rule",id:"deleting-a-rule",children:[]}]},{value:"Route 53",id:"route-53",children:[{value:"New Hosted Zone",id:"new-hosted-zone",children:[]},{value:"Import Hosted Zone",id:"import-hosted-zone",children:[]},{value:"Adding a DNS Record",id:"adding-a-dns-record",children:[]},{value:"Deleting a DNS Record",id:"deleting-a-dns-record",children:[]}]},{value:"Amazon Machine Images (AMI)",id:"amazon-machine-images-ami",children:[{value:"Automatic Backups",id:"automatic-backups",children:[]},{value:"Manual Backups",id:"manual-backups",children:[]}]}],i={rightToc:s};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"aws-access-keys"},"AWS Access Keys"),Object(r.b)("h3",{id:"create-access-keys"},"Create Access Keys"),Object(r.b)("p",null,"To enable all ",Object(r.b)("strong",{parentName:"p"},"cloud functionalities"),", your need to enter ",Object(r.b)("strong",{parentName:"p"},"AWS Access Keys")," that ",Object(r.b)("strong",{parentName:"p"},"CloudPanel")," can communicate with ",Object(r.b)("strong",{parentName:"p"},"Amazon Web Services"),"."),Object(r.b)("p",null,"To create ",Object(r.b)("strong",{parentName:"p"},"AWS Access Keys")," do the following steps:"),Object(r.b)("p",null,"1) Login into the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.aws.amazon.com/ec2/"}),"AWS Management Console"),". ",Object(r.b)("br",null)),Object(r.b)("p",null,"2) Click on ",Object(r.b)("strong",{parentName:"p"},"Services")," and go to the service ",Object(r.b)("strong",{parentName:"p"},"IAM"),"."),Object(r.b)("p",null,"3) In the left menu, click on ",Object(r.b)("strong",{parentName:"p"},"Users")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Add user"),"."),Object(r.b)("p",null,"Enter a ",Object(r.b)("strong",{parentName:"p"},"User name")," and select ",Object(r.b)("strong",{parentName:"p"},"Programmatic access")," as ",Object(r.b)("strong",{parentName:"p"},"Access type")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Next: Permissions")),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/add_user_1.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"4) Click on the button ",Object(r.b)("strong",{parentName:"p"},"Attach existing policies directly")," and select the ",Object(r.b)("strong",{parentName:"p"},"AdministratorAccess")," policy and click\non the button ",Object(r.b)("strong",{parentName:"p"},"Next: Tags"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/add_user_2.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Permissions")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Experienced ",Object(r.b)("strong",{parentName:"p"},"AWS")," users should create ",Object(r.b)("strong",{parentName:"p"},"AWS Access Keys")," with more fine granulated permissions."))),Object(r.b)("p",null,"5) Skip the ",Object(r.b)("strong",{parentName:"p"},"Add tags (optional)")," step by clicking on the button ",Object(r.b)("strong",{parentName:"p"},"Next: Review")),Object(r.b)("p",null,"6) Click on the button ",Object(r.b)("strong",{parentName:"p"},"Create user")," to create the ",Object(r.b)("strong",{parentName:"p"},"AWS Access Keys"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/add_user_3.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"Copy the ",Object(r.b)("strong",{parentName:"p"},"Access key ID")," and ",Object(r.b)("strong",{parentName:"p"},"Secret access key"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/add_user_4.png")}),Object(r.b)("h3",{id:"enter-access-keys"},"Enter Access Keys"),Object(r.b)("p",null,"To enter the ",Object(r.b)("strong",{parentName:"p"},"AWS Access Keys")," do the following:"),Object(r.b)("p",null,"1) Login into your ",Object(r.b)("strong",{parentName:"p"},"CloudPanel")," as ",Object(r.b)("strong",{parentName:"p"},"Admin")," and go to the ",Object(r.b)("strong",{parentName:"p"},"Admin Adrea"),"."),Object(r.b)("p",null,"2) Click on the left menu on the ",Object(r.b)("strong",{parentName:"p"},"AWS")," settings."),Object(r.b)("p",null,"Enter the ",Object(r.b)("strong",{parentName:"p"},"AWS Access Key")," and ",Object(r.b)("strong",{parentName:"p"},"AWS Secret Access Key")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Save"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/enter_access_keys.png")}),Object(r.b)("h2",{id:"instance"},"Instance"),Object(r.b)("p",null,"In this ",Object(r.b)("strong",{parentName:"p"},"Instance")," area, you find information about your ",Object(r.b)("strong",{parentName:"p"},"Instance")," like ",Object(r.b)("strong",{parentName:"p"},"Instance Name"),", ",Object(r.b)("strong",{parentName:"p"},"Instance ID"),",\n",Object(r.b)("strong",{parentName:"p"},"Instance Type"),", ",Object(r.b)("strong",{parentName:"p"},"Region")," and, ",Object(r.b)("strong",{parentName:"p"},"IPv4 Public IP"),". "),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/instance.png")}),Object(r.b)("h2",{id:"security-groups"},"Security Groups"),Object(r.b)("p",null,"In this ",Object(r.b)("strong",{parentName:"p"},"Security Groups")," area, you see all assigned ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html"}),"Security Groups")," of your ",Object(r.b)("strong",{parentName:"p"},"Instance"),".",Object(r.b)("br",null),"\nWith a click on a ",Object(r.b)("strong",{parentName:"p"},"Security Group"),", you can edit rules like adding IPs for SSH or other services."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/security_groups.png")}),Object(r.b)("h3",{id:"adding-a-rule"},"Adding a Rule"),Object(r.b)("p",null,"To ",Object(r.b)("strong",{parentName:"p"},"Add a Rule")," click on the ",Object(r.b)("strong",{parentName:"p"},"Security Group")," and then on the button ",Object(r.b)("strong",{parentName:"p"},"Add Rule")," top right."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/add_security_group_rules.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"Select a ",Object(r.b)("strong",{parentName:"p"},"Rule Type")," from a list and select the ",Object(r.b)("strong",{parentName:"p"},"Source"),", which should have access to the service."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/add_security_group_rule.png")}),Object(r.b)("h3",{id:"deleting-a-rule"},"Deleting a Rule"),Object(r.b)("p",null,"On the ",Object(r.b)("strong",{parentName:"p"},"Security Group")," overview site you can delete a rule by clicking on the button ",Object(r.b)("strong",{parentName:"p"},"Delete"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/add_security_group_rules.png")}),Object(r.b)("h2",{id:"route-53"},"Route 53"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/route53/"}),"Amazon Route 53")," is a highly available and scalable cloud Domain Name System (DNS) web service. ",Object(r.b)("br",null),"\nIt is designed to give developers and businesses a reliable and cost-effective way to route end users to Internet applications\nby translating names like www.example.com into the numeric IP addresses like 8.8.8.8 that computers use to connect to each other."),Object(r.b)("p",null,"In this ",Object(r.b)("strong",{parentName:"p"},"Route 53")," area, you can import ",Object(r.b)("strong",{parentName:"p"},"Hosted Zones")," from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/route53/"}),"Amazon Route 53")," or create new zones to manage."),Object(r.b)("h3",{id:"new-hosted-zone"},"New Hosted Zone"),Object(r.b)("p",null,"To create a ",Object(r.b)("strong",{parentName:"p"},"New Hosted Zone"),", click on the button top right on ",Object(r.b)("strong",{parentName:"p"},"New Hosted Zone"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/new_route53_hosted_zone.png")})," ",Object(r.b)("br",null)," ",Object(r.b)("br",null),Object(r.b)("p",null,"Enter the ",Object(r.b)("strong",{parentName:"p"},"Domain Name")," and click on ",Object(r.b)("strong",{parentName:"p"},"Add Hosted Zone")," to create a new ",Object(r.b)("strong",{parentName:"p"},"Hosted Zone")," in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/route53/"}),"Amazon Route 53"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/new_route53_hosted_zone_domain.png")}),Object(r.b)("h3",{id:"import-hosted-zone"},"Import Hosted Zone"),Object(r.b)("p",null,"If you already have an existing ",Object(r.b)("strong",{parentName:"p"},"Hosted Zone")," in your ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/route53/"}),"Amazon Route 53"),", and if you want to manage the DNS records via\n",Object(r.b)("strong",{parentName:"p"},"CloudPanel"),", you can import the ",Object(r.b)("strong",{parentName:"p"},"Hosted Zone"),"."),Object(r.b)("p",null,"To import an existing ",Object(r.b)("strong",{parentName:"p"},"Hosted Zone"),", click on the button top right on ",Object(r.b)("strong",{parentName:"p"},"Import Hosted Zone"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/import_hosted_zone.png")})," ",Object(r.b)("br",null)," ",Object(r.b)("br",null),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Hosted Zone ID")," of a ",Object(r.b)("strong",{parentName:"p"},"Domain Name")," can be found in the ",Object(r.b)("strong",{parentName:"p"},"AWS Management Console")," -> ",Object(r.b)("strong",{parentName:"p"},"Services")," -> ",Object(r.b)("strong",{parentName:"p"},"Route 53"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/aws_route53_hosted_zone_id.png")}),Object(r.b)("h3",{id:"adding-a-dns-record"},"Adding a DNS Record"),Object(r.b)("p",null,"To add a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html"}),"DNS Record"),", click on your ",Object(r.b)("strong",{parentName:"p"},"Hosted Zone")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Add Record")," top right."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/add_dns_record_hosted_zone.png")})," ",Object(r.b)("br",null)," ",Object(r.b)("br",null),Object(r.b)("p",null,"Select the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html"}),"Type"),", enter the ",Object(r.b)("strong",{parentName:"p"},"Name"),", ",Object(r.b)("strong",{parentName:"p"},"Value"),",\nand select the ",Object(r.b)("strong",{parentName:"p"},"TTL")," before clicking on the button ",Object(r.b)("strong",{parentName:"p"},"Add Record"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/add_dns_record.png")}),Object(r.b)("h3",{id:"deleting-a-dns-record"},"Deleting a DNS Record"),Object(r.b)("p",null,"To delete a ",Object(r.b)("strong",{parentName:"p"},"DNS Record"),", click on your ",Object(r.b)("strong",{parentName:"p"},"Hosted Zone")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Delete"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/delete_dns_record.png")}),Object(r.b)("h2",{id:"amazon-machine-images-ami"},"Amazon Machine Images (AMI)"),Object(r.b)("p",null,"An ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html"}),"Amazon Machine Image (AMI)")," is a special type of virtual appliance that is\nused to create a virtual machine within the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/ec2/"}),"Amazon Elastic Compute Cloud (EC2)"),"."),Object(r.b)("h3",{id:"automatic-backups"},"Automatic Backups"),Object(r.b)("p",null,"We use ",Object(r.b)("strong",{parentName:"p"},"AMIs")," to backup the entire ",Object(r.b)("strong",{parentName:"p"},"Instance"),", including all disks. All ",Object(r.b)("strong",{parentName:"p"},"AMIs")," are done incrementally, which means the first image\nis a full backup, and all further ",Object(r.b)("strong",{parentName:"p"},"AMIs")," contain the data differences."),Object(r.b)("p",null,"To enable ",Object(r.b)("strong",{parentName:"p"},"Automatic Backups")," do the following:"),Object(r.b)("p",null,"1) Login into your ",Object(r.b)("strong",{parentName:"p"},"CloudPanel")," as ",Object(r.b)("strong",{parentName:"p"},"Admin")," and go to the ",Object(r.b)("strong",{parentName:"p"},"Admin Adrea"),"."),Object(r.b)("p",null,"2) Click on the left menu on the ",Object(r.b)("strong",{parentName:"p"},"AWS")," settings."),Object(r.b)("p",null,"Set ",Object(r.b)("strong",{parentName:"p"},"Automatic Backups")," to ",Object(r.b)("strong",{parentName:"p"},"Yes")," and select the ",Object(r.b)("strong",{parentName:"p"},"Backup Frequency")," and ",Object(r.b)("strong",{parentName:"p"},"Backup Retention Period"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/enable_automatic_backups.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"With the following configuration, two ",Object(r.b)("strong",{parentName:"p"},"Backups (AMIs)")," will be created per day and held for seven days, 14 ",Object(r.b)("strong",{parentName:"p"},"AMIs")," in total."),Object(r.b)("h3",{id:"manual-backups"},"Manual Backups"),Object(r.b)("p",null,"Often you want to do a backup before releasing a new version of your application, and you want to retain the manually created backup\nfor some time."),Object(r.b)("p",null,"To create a ",Object(r.b)("strong",{parentName:"p"},"Backup"),", click on the tab ",Object(r.b)("strong",{parentName:"p"},"Backup (AMIs)")," and then on the button ",Object(r.b)("strong",{parentName:"p"},"Create Backup")," top right."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/create_manual_backup_1.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"Enter the ",Object(r.b)("strong",{parentName:"p"},"Name")," of your ",Object(r.b)("strong",{parentName:"p"},"Backup (AMI)")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Create Backup"),".  ",Object(r.b)("br",null),"\nAWS will immediately start creating an ",Object(r.b)("strong",{parentName:"p"},"AMI")," of your ",Object(r.b)("strong",{parentName:"p"},"Instance"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/aws/create_manual_backup_2.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"AMI Retention")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Manually created ",Object(r.b)("strong",{parentName:"p"},"AMIs")," will not be deleted automatically; they need to be ",Object(r.b)("strong",{parentName:"p"},"deleted")," manually as well."))))}l.isMDXComponent=!0},172:function(e,t,a){"use strict";var n=a(0),r=a(35);t.a=function(){return Object(n.useContext)(r.a)}},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return a?r.a.createElement(m,b({ref:t},i,{components:a})):r.a.createElement(m,b({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var i=2;i<c;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(172);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}}}]);