"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[81262],{84021:function(e,o,n){n.r(o),n.d(o,{_frontmatter:function(){return m},default:function(){return s}});var t=n(87462),a=n(45987),d=(n(35776),n(3905)),r=n(91515);const l=["components"],m={},i={_frontmatter:m},p=r.Z;function s(e){let{components:o}=e,n=(0,a.Z)(e,l);return(0,d.mdx)(p,(0,t.Z)({},i,n,{components:o,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"module-overview"},"Module overview"),(0,d.mdx)("p",null,"A ",(0,d.mdx)("em",{parentName:"p"},"module")," is a logical group -- that is, a directory containing blocks, controllers, helpers, models -- that are related to a specific business feature. In keeping with Adobe's commitment to optimal modularity, a module encapsulates one feature and has minimal dependencies on other modules."),(0,d.mdx)("p",null,"Modules and themes are the units of customization in Commerce. Modules provide business features, with supporting logic,  while themes strongly influence user experience and storefront appearance. Both components have a life cycle that allows them to be installed, deleted, and disabled. From the perspective of both merchants and extension developers, modules are the central unit of Adobe Commerce and Magento Open Source framework (Commerce framework) organization."),(0,d.mdx)("p",null,"The Commerce framework provides a set of core logic: PHP code, libraries, and the basic functions that are inherited by the modules and other components."),(0,d.mdx)("h2",{id:"purpose-of-a-module"},"Purpose of a module"),(0,d.mdx)("p",null,"The purpose of a module is to provide specific product features by implementing new functionality or extending the functionality of other modules. Each module is designed to function independently, so the inclusion or exclusion of a particular module does not typically affect the functionality of other modules."),(0,d.mdx)("h2",{id:"module-components"},"Module components"),(0,d.mdx)("p",null,"A module is a directory that contains the PHP and XML files (blocks, controllers, helpers, models) that are related to a specific business feature, such as Shipping. Specifically, a module is composed of the following software components:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/frontend-core/guide/themes/"},"Themes")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"libraries.md"},"Libraries")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/frontend-core/guide/translations/#language-packages"},"Language packs"))),(0,d.mdx)("h2",{id:"module-locations"},"Module locations"),(0,d.mdx)("p",null,"Modules typically live in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"vendor")," directory of an Adobe Commerce or Magento Open Source installation, in a directory with the following PSR-0 compliant format: ",(0,d.mdx)("inlineCode",{parentName:"p"},"vendor/<vendor>/<type>-<module-name>"),", where ",(0,d.mdx)("inlineCode",{parentName:"p"},"<type>")," can be one of the following values:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},(0,d.mdx)("inlineCode",{parentName:"strong"},"module"))," - for modules (",(0,d.mdx)("inlineCode",{parentName:"li"},"module-customer-import-export"),")"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},(0,d.mdx)("inlineCode",{parentName:"strong"},"theme"))," - for frontend and admin themes (",(0,d.mdx)("inlineCode",{parentName:"li"},"theme-frontend-luma")," or ",(0,d.mdx)("inlineCode",{parentName:"li"},"theme-adminhtml-backend"),")"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},(0,d.mdx)("inlineCode",{parentName:"strong"},"language"))," - for language packs (",(0,d.mdx)("inlineCode",{parentName:"li"},"language-de_de"),")")),(0,d.mdx)("p",null,"For example, the Customer Import/Export module can be found at ",(0,d.mdx)("inlineCode",{parentName:"p"},"vendor/magento/module-customer-import-export"),"."),(0,d.mdx)("p",null,"If you are creating a new module for distribution, create the ",(0,d.mdx)("inlineCode",{parentName:"p"},"app/code/<vendor>/<type>-<module-name>")," directory and the required directories within it."),(0,d.mdx)("p",null,"Inside this folder, you will find all the code related to this module, including the ",(0,d.mdx)("inlineCode",{parentName:"p"},"etc/module.xml")," file, which contains the name and version of the module, as well as any dependencies."),(0,d.mdx)("h3",{id:"module-location-conventions"},"Module location conventions"),(0,d.mdx)("p",null,"The following table shows the ",(0,d.mdx)("em",{parentName:"p"},"recommended")," location within the file system for specific components."),(0,d.mdx)("p",null,"(A module must include a ",(0,d.mdx)("inlineCode",{parentName:"p"},"registration.php")," file in its root folder.)"),(0,d.mdx)("p",null,"We refer to a component's root directory as the top-level directory in which you develop component code. Typically, this directory is located in one of the following directories relative to your Adobe Commerce or Magento Open Source root directory:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Entity"),(0,d.mdx)("th",{parentName:"tr",align:null},"Location"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Code base of your custom module"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/app/code/<Vendor>/<Module>"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Custom theme files (storefront)"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/app/design/frontend/<Vendor>/<theme>"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Custom theme files (modules)"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"<Module>/<theme>"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"If you want to use a library"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"/lib/<Vendor_Library>"))))),(0,d.mdx)("h2",{id:"working-with-modules"},"Working with modules"),(0,d.mdx)("p",null,"Developers, administrators, and anyone building an Adobe Commerce or Magento Open Source website will want to review all relevant topics surrounding their particular goals and use cases."),(0,d.mdx)("p",null,"See ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/"},"PHP Developer Guide")," for specific instructions on extending modules."),(0,d.mdx)("p",null,"See ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/"},"Frontend Developer Guide")," for information on implementing themes and other components."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-modules-overview-md-c5803e3b56ea43ab9d18.js.map