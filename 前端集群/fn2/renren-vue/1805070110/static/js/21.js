webpackJsonp([21],{YbVU:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("oZaA"),i=n("E4LH"),a={data:function(){return{dynamicMenuRoutes:[]}},components:{SubMenu:s.default},computed:{sidebarLayoutSkin:{get:function(){return this.$store.state.common.sidebarLayoutSkin}},sidebarFold:{get:function(){return this.$store.state.common.sidebarFold}},menuList:{get:function(){return this.$store.state.common.menuList},set:function(e){this.$store.commit("common/updateMenuList",e)}},menuActiveName:{get:function(){return this.$store.state.common.menuActiveName},set:function(e){this.$store.commit("common/updateMenuActiveName",e)}},mainTabs:{get:function(){return this.$store.state.common.mainTabs},set:function(e){this.$store.commit("common/updateMainTabs",e)}},mainTabsActiveName:{get:function(){return this.$store.state.common.mainTabsActiveName},set:function(e){this.$store.commit("common/updateMainTabsActiveName",e)}}},watch:{$route:"routeHandle"},created:function(){this.menuList=JSON.parse(sessionStorage.getItem("menuList")||"[]"),this.dynamicMenuRoutes=JSON.parse(sessionStorage.getItem("dynamicMenuRoutes")||"[]"),this.routeHandle(this.$route)},methods:{routeHandle:function(e){if(e.meta.isTab){var t=this.mainTabs.filter(function(t){return t.name===e.name})[0];if(!t){if(e.meta.isDynamic&&!(e=this.dynamicMenuRoutes.filter(function(t){return t.name===e.name})[0]))return console.error("未能找到可用标签页!");t={menuId:e.meta.menuId||e.name,name:e.name,title:e.meta.title,type:Object(i.c)(e.meta.iframeUrl)?"iframe":"module",iframeUrl:e.meta.iframeUrl||""},this.mainTabs=this.mainTabs.concat(t)}this.menuActiveName=t.menuId+"",this.mainTabsActiveName=t.name}}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"site-sidebar",class:"site-sidebar--"+e.sidebarLayoutSkin},[n("div",{staticClass:"site-sidebar__inner"},[n("el-menu",{staticClass:"site-sidebar__menu",attrs:{"default-active":e.menuActiveName||"home",collapse:e.sidebarFold,collapseTransition:!1}},[n("el-menu-item",{attrs:{index:"home"},on:{click:function(t){e.$router.push({name:"home"})}}},[n("icon-svg",{staticClass:"site-sidebar__menu-icon",attrs:{name:"shouye"}}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])],1),e._v(" "),n("el-menu-item",{attrs:{index:"demo-01"},on:{click:function(t){e.$router.push({name:"demo-01"})}}},[n("icon-svg",{staticClass:"site-sidebar__menu-icon",attrs:{name:"mudedi"}}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("demo-01")])],1),e._v(" "),e._l(e.menuList,function(t){return n("sub-menu",{key:t.menuId,attrs:{menu:t,dynamicMenuRoutes:e.dynamicMenuRoutes}})})],2)],1)])},staticRenderFns:[]},o=n("46Yf")(a,m,!1,null,null,null);t.default=o.exports}});