"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[70095],{87104:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return r},default:function(){return p}});var o=t(87462),i=t(45987),a=(t(35776),t(3905)),s=t(91515);const m=["components"],r={},l={_frontmatter:r},d=s.Z;function p(e){let{components:n}=e,t=(0,i.Z)(e,m);return(0,a.mdx)(d,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"magento_persistent-module"},"Magento_Persistent module"),(0,a.mdx)("p",null,'This module enables setting a long-term cookie containing internal id (random hash - to exclude brute\nforce) of persistent session for customer. Persistent session data is kept in DB - so it\'s not deleted in some days and is kept for\nas much time as we need. DB session keeps customerId + some data from real customer session that we want to sync (e.g.\nnum items in shopping cart). For registered customer this info is synced to persistent session if choose "Remember me"\ncheckbox during first login.'),(0,a.mdx)("h2",{id:"installation"},"Installation"),(0,a.mdx)("p",null,"Before installing this module, note that the Magento_Persistent is dependent on the following modules:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_Checkout")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_PageCache"))),(0,a.mdx)("p",null,"The Magento_Persistent module creates the ",(0,a.mdx)("inlineCode",{parentName:"p"},"persistent_session")," table in the database."),(0,a.mdx)("p",null,"This module modifies the following tables in the database:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"quote")," - adds column ",(0,a.mdx)("inlineCode",{parentName:"li"},"is_persistent"))),(0,a.mdx)("p",null,"All database schema changes made by this module are rolled back when the module gets disabled and setup:upgrade command is run."),(0,a.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/manage-modules.html"},"Enable or disable modules"),"."),(0,a.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,a.mdx)("p",null,"Extension developers can interact with the Magento_Persistent module. For more information about the Magento extension mechanism, see ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plug-ins"),"."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_Persistent module."),(0,a.mdx)("p",null,"A lot of functionality in the module is on JavaScript, use ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/javascript/mixins/"},"mixins")," to extend it."),(0,a.mdx)("h3",{id:"events"},"Events"),(0,a.mdx)("p",null,"The module dispatches the following events:"),(0,a.mdx)("h4",{id:"controller"},"Controller"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"persistent_session_expired")," event in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Persistent\\Controller\\Index\\UnsetCookie::execute")," method")),(0,a.mdx)("h4",{id:"observer"},"Observer"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"persistent_session_expired")," event in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Persistent\\Observer\\CheckExpirePersistentQuoteObserver::execute")," method")),(0,a.mdx)("p",null,"For information about an event in Magento 2, see ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/events-and-observers/#events"},"Events and observers"),"."),(0,a.mdx)("h3",{id:"layouts"},"Layouts"),(0,a.mdx)("p",null,"For more information about a layout in Magento 2, see the ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/layouts/"},"Layout documentation"),"."),(0,a.mdx)("h2",{id:"additional-information"},"Additional information"),(0,a.mdx)("p",null,"More information can get at articles:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://docs.magento.com/user-guide/configuration/customers/persistent-shopping-cart.html"},"Persistent Shopping Cart")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-admin/stores-sales/point-of-purchase/cart/cart-persistent.html"},"Persistent Cart"))),(0,a.mdx)("h3",{id:"cron-options"},"Cron options"),(0,a.mdx)("p",null,"Cron group configuration can be set at ",(0,a.mdx)("inlineCode",{parentName:"p"},"etc/crontab.xml"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"persistent_clear_expired")," - clear expired persistent sessions")),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/configure-cron-jobs.html"},"Learn how to configure and run cron in Magento."),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-beta-module-persistent-md-70f769d9d4de9d2b7fa3.js.map