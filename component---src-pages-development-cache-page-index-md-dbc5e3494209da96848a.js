"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[26667],{10198:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return s},default:function(){return u}});var t=n(87462),o=n(45987),r=(n(35776),n(3905)),c=n(91515);const i=["components"],s={},l=(m="InlineAlert",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var m;const d={_frontmatter:s},p=c.Z;function u(e){let{components:a}=e,n=(0,o.Z)(e,i);return(0,r.mdx)(p,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"page-caching"},"Page caching"),(0,r.mdx)("p",null,"Caching is one of the most effective ways to improve website performance. Generally speaking, there are two methods of caching content:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Client-side (browser)"),(0,r.mdx)("li",{parentName:"ul"},"Server-side")),(0,r.mdx)("p",null,"Retrieving stored (cached) content from a previous request for the same client instead of requesting files from your server every time someone visits your site is a more efficient use of network bandwidth."),(0,r.mdx)("p",null,"The Adobe Commerce and Magento Open Source page cache library contains a simple PHP reverse proxy that enables full page caching out of the box. A reverse proxy acts as an intermediary between visitors and your application and can reduce the load on your server."),(0,r.mdx)("p",null,"We recommend using ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/varnish/config-varnish.html"},"Varnish"),", but you can use Magento's default caching mechanism instead, which stores cache files in any of the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"File system (You don't need to do anything to use file-based caching.)"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../partial/database-caching.md"},"Database")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cache/redis/redis-pg-cache.html"},"Redis"))),(0,r.mdx)("h2",{id:"cacheable-and-uncacheable-pages"},"Cacheable and uncacheable pages"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Cacheable")," and ",(0,r.mdx)("em",{parentName:"p"},"uncacheable")," are terms we use to indicate whether or not a page should be cached at all. (By default, all pages are cacheable.) If any block in a layout is designated as uncacheable, the entire page is uncacheable."),(0,r.mdx)("p",null,"To create an uncacheable page, mark any block on that page as uncacheable in the layout using ",(0,r.mdx)("inlineCode",{parentName:"p"},'cacheable="false"'),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<block class="Magento\\Customer\\Block\\Form\\Edit" name="customer_edit" template="Magento_Customer::form/edit.phtml" cacheable="false">\n    <container name="form.additional.info" as="form_additional_info"/>\n</block>\n')),(0,r.mdx)("p",null,"Examples of uncacheable pages include the compare products, cart, checkout pages, and so on."),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Paypal/view/frontend/layout/paypal_payflow_returnurl.xml"},"Example")),(0,r.mdx)(l,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Do not configure content pages (i.e., catalog, product, and CMS pages) to be uncacheable. Doing so has an adverse affect on performance."),(0,r.mdx)("h2",{id:"public-and-private-content"},"Public and private content"),(0,r.mdx)("p",null,'Reverse proxies serve "public" or shared content to more than one user. However, most Adobe Commerce and Magento Open Source websites generate dynamic and personalized "private" content that should only be served to one user, which presents unique caching challenges. To address these challenges, the application can distinguish between two types of content:'),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("a",{parentName:"strong",href:"public-content.md"},"Public"))," - Public content is stored server side in your reverse proxy cache storage (e.g., file system, database, Redis, or Varnish) and is available to multiple customers. Examples of public content include header, footer, and category listing.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("a",{parentName:"strong",href:"private-content.md"},"Private"))," - Private content is stored client side (e.g., browser) and is specific to an individual customer. Examples of private content include wishlist, shopping cart, customer name, and address. You should limit stored private content to a small portion of the page's total content."))),(0,r.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Only HTTP ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3"},"GET")," and ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4"},"HEAD")," requests are cacheable. For more information about caching, see ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html"},"RFC-2616 section 13"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-cache-page-index-md-dbc5e3494209da96848a.js.map