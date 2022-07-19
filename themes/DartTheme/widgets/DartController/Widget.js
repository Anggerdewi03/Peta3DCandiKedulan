// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/DartTheme/widgets/DartController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/DartTheme/widgets/DartController/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"dart-controller-title" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"dart-controller-pages" data-dojo-attach-point\x3d"pagesNode"\x3e\r\n    \x3cul class\x3d"navigation" data-dojo-attach-point\x3d"pageListNode"\x3e\x3c/ul\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"dart-controller-box"\x3e\r\n    \x3cdiv class\x3d"dart-controller-tools" data-dojo-attach-point\x3d"toolsNode"\x3e\r\n      \x3cdiv class\x3d"dart-controller-nav" data-dojo-attach-point\x3d"navNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"dart-controller-home dart-bgcolor jimu-main-background" id\x3d"homeNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"homeNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"dart-controller-locate dart-bgcolor jimu-main-background" id\x3d"locateNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"locateNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"dart-controller-navigate dart-bgcolor jimu-main-background" data-dojo-attach-point\x3d"navigateDiv"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"navigateNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"dart-controller-search" id\x3d"searchNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"searchNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"dart-controller-collapse" data-dojo-attach-point\x3d"collapseNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"dart-controller-bar"\x3e\r\n      \x3cdiv class\x3d"dart-controller-bar-inner" data-dojo-attach-point\x3d"barNode"\x3e\r\n        \x3cdiv class\x3d"dart-controller-container" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"dart-controller-toggle" data-dojo-attach-point\x3d"toggleNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/DartTheme/widgets/DartController/css/style.css":".dart-controller {position: absolute; width: 100%; height: 100px !important; white-space: nowrap; -webkit-transition: height 0.5s; -moz-transition: height 0.5s; -o-transition: height 0.5s; transition: height 0.5s; z-index: 100 !important;}.shadow {-moz-box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3); -webkit-box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3); box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3); -ms-filter: \"progid:DXImageTransform.Microsoft.Shadow(Strength\x3d10, Direction\x3d135, Color\x3d'#000000')\";}.dart-controller-minimized {height: 58px !important;}.dart-controller-title {position: relative; margin: 12px 10px 0px 10px; height: 30px; color: #fff; font-size: 28px; line-height: 30px; font-weight: normal; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: helveticaneueultralight; display: block; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}.dart-controller-minimized .dart-controller-title {height: 0px; margin: 0px 10px 0px 10px;}.dart-controller-box {position: relative; padding: 0px 10px 0px 10px; height: 58px; display: inline-block; width: 100%;}.dart-controller-tools {position: relative; float: left; margin: 12px 5px 12px 0; padding: 0px; width: auto; max-width: 500px; height: 34px; display: inline-block; white-space: nowrap; clear: none; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}.jimu-rtl .dart-controller-tools {position: relative; float: right; margin: 12px 0 12px 5px; padding: 0px; width: auto; max-width: 500px; height: 34px; display: inline-block; white-space: nowrap; clear: none; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}.dart-controller-tools-anim {overflow: hidden;}.dart-controller-tools-collapsed {max-width: 0px; overflow: hidden;}.jimu-rtl .dart-controller-tools-collapsed {max-width: 0px; overflow: hidden;}.dart-controller-nav {float: left; width: 56px; height: 24px; margin: 5px 8px 5px 0px; display: none;}.jimu-rtl .dart-controller-nav {float: right; width: 56px; height: 24px; margin: 5px 0 5px 8px; display: none;}.jimu-widget-zoomslider {width: 56px !important; height: 24px !important; background-color: transparent !important; font-size: 10px; line-height: 24px;}.esri-zoom {top: 0px; left: 0px; width: 52px; height: 24px; -webkit-box-shadow: none; box-shadow: none; -webkit-flex-flow: row nowrap; -ms-flex-flow: row nowrap; flex-flow: row nowrap;}.dart-controller .jimu-widget-zoom .esri-zoom .esri-widget {position: relative; left: 0; top: 0; width: 24px; height: 24px; line-height: 24px; font-family: verdana, helvetica; border: none !important; background-color: transparent; color: transparent; user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; border-radius: 12px !important; -webkit-border-radius: 12px !important; -moz-border-radius: 12px !important; -o-border-radius: 12px !important; float: left !important; margin-right: 4px; font-size: 12px;}.dart-controller .jimu-widget-zoom .esri-zoom .esri-widget {color: white; opacity: 1 !important; background-color: rgba(0, 0, 0, 0.2);}.dart-controller .jimu-widget-zoom .esri-zoom .esri-widget:hover {background-color: rgba(0, 0, 0, 0.5);}.dart-controller-home {float: left; width: 24px; height: 24px; margin: 5px 8px 5px 0px; display: none;}.jimu-rtl .dart-controller-home {float: right; width: 24px; height: 24px; margin: 5px 0 5px 8px; display: none;}.dart-controller .jimu-widget-home,.dart-controller .jimu-widget-home .operate-node{padding: 0px; width: 24px; height: 24px; border: 0; opacity: 1 !important;}.dart-controller .jimu-widget-home{background: transparent !important;}.dart-controller .jimu-widget-home .operate-node{line-height: 24px; border-radius: 12px; background-color: rgba(0,0,0,0.2); font-size: 12px; color: white;}.dart-controller .jimu-widget-home .operate-node:hover{background-color: rgba(0,0,0,0.5);}.dart-controller-locate {float: left; width: 24px; height: 24px; margin: 5px 8px 5px 0px; display: none;}.jimu-rtl .dart-controller-locate {float: right; width: 24px; height: 24px; margin: 5px 0 5px 8px; display: none;}.dart-controller .jimu-widget-mylocation,.dart-controller .jimu-widget-mylocation .place-holder,.dart-controller .LocateButton .zoomLocateButton,.dart-controller .LocateButton .zoomLocateButton:active,.dart-controller .LocateButton .zoomLocateButton:hover {padding: 0px; width: 24px; height: 24px; border: 0; background: transparent; opacity: 1 !important; border-radius: 50%;}.dart-controller .jimu-widget-mylocation .place-holder{line-height: 24px; border-radius: 12px; background-color: rgba(0,0,0,0.2); color: white;}.dart-controller .jimu-widget-mylocation .place-holder:hover{background-color: rgba(0,0,0,0.5);}.dart-controller .jimu-widget-mylocation .nohttps:hover{background-color: rgba(0,0,0,0.2) !important;}.dart-controller-navigate {float: left; width: 24px; height: 24px; margin: 5px 8px 5px 0px; display: none;}.jimu-rtl .dart-controller-navigate {float: right; margin: 5px 0 5px 8px;}.dart-controller .jimu-widget-navigate,.dart-controller .jimu-widget-navigate .control-mode{padding: 0; width: 24px; height: 24px; border: 0; background: transparent; opacity: 1 !important;}.dart-controller .jimu-widget-navigate .control-mode{line-height: 24px; border-radius: 12px; background-color: rgba(0,0,0,0.2); color: white;}.dart-controller .jimu-widget-navigate .control-mode:hover{background-color: rgba(0,0,0,0.5);}.dart-controller .jimu-widget-zoom{border: 0;}.dart-controller .jimu-widget-zoom .esri-zoom-in{border-bottom: 0 !important;}.dart-controller-search {float: left; width: auto; height: 32px; background-color: rgba(0,0,0,0.25); display: none;}.jimu-rtl .dart-controller-search {float: right; width: auto;}.dart-controller .esri-search {-webkit-box-shadow: none !important; -moz-box-shadow: none !important; box-shadow: none !important; background-color: transparent;}.dart-controller .esri-search .esri-widget-button {color: #ffffff; background-color: transparent;}.dart-controller .esri-search .esri-widget-button:hover,.dart-controller .esri-search .esri-widget-button:active {color: #ffffff; background-color: rgba(0, 0, 0, 0.3);}.dart-controller .esri-search .esri-menu {position: absolute; top: 0 !important; transform: translateY(-100%);}.dart-controller-collapse {float: left; height: 58px; width: 10px; margin: 0px 5px 0px 0px; clear: none; cursor: pointer; background-image: url('images/collapse.png'); background-repeat: no-repeat; background-position: center center;}.jimu-rtl .dart-controller-collapse {float: right; height: 58px; width: 10px; margin: 0px 0 0px 5px; clear: none; cursor: pointer; background-image: url('images/collapse.png'); background-repeat: no-repeat; background-position: center center;}.dart-controller-minimized .dart-controller-collapse {display: none;}.dart-controller-bar {position: relative; height: 58px; overflow: hidden; clear: none;}.dart-controller-minimized .dart-controller-bar {display: none;}.dart-controller-bar-inner {position: relative; left: 0px; right: 0px; margin-top: 2px; height: 108px; overflow-x: auto;}.dart-controller-container {position: relative; height: 54px; width: auto; overflow: visible; -webkit-transition: all 1s; -moz-transition: all 1s; -o-transition: all 1s; transition: all 1s;}.icon-node {float: left; width: 44px; height: 44px; margin: 5px; cursor: pointer;}.jimu-rtl .icon-node {float: right; width: 44px; height: 44px; margin: 5px; cursor: pointer;}.icon-node-active,.icon-node:hover {background-color: rgba(0, 0, 0, 0.25); border-radius: 22px;}.icon-node img {margin: 10px; width: 24px; height: 24px;}.dart-controller-pages {position: absolute; top: 17px; height: 20px; left: auto; right: 10px; width: 0px; overflow: hidden;}.jimu-rtl .dart-controller-pages {position: absolute; top: 17px; height: 20px; left: 10px; right: auto; width: 0px; overflow: hidden;}.dart-controller-minimized .dart-controller-pages {display: none;}.dart-controller .navigation {list-style-type: none; text-align: center; width: 100%; height: 17px; margin: auto; padding: 0px; display: block; cursor: pointer;}.dart-controller .navigation li {width: 20px; height: 20px; display: inline-block; background: url(images/dot.png);}.dart-controller .navigation li:hover {background: url(images/doton.png);}.dart-controller .navigation li.active {background: url(images/doton.png);}.dart-controller-toggle {position: absolute; left: 50%; top: 0px; margin-left: -15px; width: 30px; height: 12px; background-image: url('images/toggle.png'); background-repeat: no-repeat; background-position: center center; cursor: pointer;}@media only screen and (max-width: 500px) {.dart-controller-box {padding: 0px 3px 0px 3px;} .dart-controller-nav {display: none !important;} .dart-controller-title {font-size: 24px;} .jimu-widget-coordinate {display: none !important;}}@media only screen and (max-width: 320px) {.dart-controller-home {display: none !important;}}",
"*now":function(r){r(['dojo/i18n!*preload*themes/DartTheme/widgets/DartController/nls/Widget*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/html dojo/aspect dojo/query dojo/on dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style jimu/BaseWidget jimu/PoolControllerMixin jimu/utils".split(" "),function(r,t,d,n,w,u,m,p,f,k,q,h,x,y,v){return r([x,y],{baseClass:"dart-controller dart-bgcolor jimu-main-background shadow",height:54,minimized:!1,collapsed:!1,iconCount:0,wPos:{bottom:78,right:0},panelCount:0,openedId:"",openedIds:[],postCreate:function(){this.inherited(arguments);
this.titleNode.innerHTML=v.sanitizeHTML(this.appConfig.title?this.appConfig.title:"");m(this.toggleNode,"click",d.hitch(this,this._toggleController));m(this.collapseNode,"click",d.hitch(this,this._collapseController));this.own(m(this.widgetManager,"widget-created",d.hitch(this,this._onWidgetCreation)));m(window,"resize",d.hitch(this,this._resizeWindow))},startup:function(){this.inherited(arguments);this._createIconNodes()},onAction:function(a,b){"highLight"===a&&b&&(b=u('div[settingid\x3d"'+b.widgetId+
'"]',this.domNode)[0],this._highLight(b));"removeHighLight"===a&&this._removeHighLight()},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=null);this.inherited(arguments)},onAppConfigChanged:function(a,b,c){switch(b){case "attributeChange":this._onAttributeChange(a,c)}},getOpenedIds:function(){this.inherited(arguments);var a=[];this.openedId&&""!==this.openedId&&a.push(this.openedId);t.forEach(this.openedIds,function(b){a.push(b)});return a},setOpenedIds:function(a){for(var b=
0,c=0;c<a.length;c++)b+=600,setTimeout(d.hitch(this,this._switchNodeToOpen),b,a[c])},_onWidgetCreation:function(a){"Search"===a.name&&this._resizeWindow()},_resizeWindow:function(){this.resizeTimer&&(clearTimeout(this.resizeTimer),this.resizeTimer=null);this.resizeTimer=setTimeout(d.hitch(this,this._resizeController),600)},_resizeController:function(){if(!this.minimized)try{var a=q.getContentBox(this.domNode),b=q.getContentBox(this.toolsNode),c=this.height*Math.floor((a.w-b.w-35)/this.height);h.set(this.barNode,
"width",c+"px");h.set(this.pagesNode,"width",c+"px");this._createPages();f.remove(this.toolsNode,"dart-controller-tools-anim")}catch(g){console.log(g)}},_toggleController:function(){this.minimized?this._maximizeController():this._minimizeController()},_maximizeController:function(){this.minimized=!1;f.remove(this.domNode,"dart-controller-minimized");this.openedId&&!1===this._getIconNodeById(this.openedId).config.inPanel&&this._switchNodeToClose(this.openedId);setTimeout(d.hitch(this,this._resizeController),
600)},_minimizeController:function(){this.minimized=!0;f.add(this.domNode,"dart-controller-minimized");this.collapsed&&this._expand()},_collapseController:function(){this.collapsed?this._expand():this._collapse()},_collapse:function(){this.collapsed=!0;f.add(this.toolsNode,"dart-controller-tools-anim");f.add(this.toolsNode,"dart-controller-tools-collapsed");setTimeout(d.hitch(this,this._resizeController),600)},_expand:function(){this.collapsed=!1;f.add(this.toolsNode,"dart-controller-tools-anim");
f.remove(this.toolsNode,"dart-controller-tools-collapsed");setTimeout(d.hitch(this,this._resizeController),600)},_highLight:function(a){this.hlDiv&&this._removeHighLight();if(a){var b=q.getMarginBox(a);this.hlDiv=k.create("div",{style:{position:"absolute",left:b.l+"px",top:b.t+"px",width:b.w+"px",height:b.h+"px"},"class":"icon-highlight"},a,"before")}},_removeHighLight:function(){this.hlDiv&&(k.destroy(this.hlDiv),this.hlDiv=null)},_onAttributeChange:function(a,b){void 0!==b.title&&b.title!==this.appConfig.title&&
(this.titleNode.innerHTML=v.sanitizeHTML(b.title?b.title:""))},_createIconNodes:function(){n.empty(this.containerNode);this.openedIds=[];var a,b=this.getAllConfigs(),c=!0,g;for(a=this.iconCount=0;a<b.length;a++){var e=b[a];var l=e.name;"ZoomSlider"===l||"Home"===l||"MyLocation"===l||"Navigate"===l?this._createChildWidget(e):"Search"===l&&c?(c=!1,this._createChildWidget(e)):(this.iconCount+=1,l=this._createIconNode(e),e.openAtStart&&(g=l))}n.setStyle(this.containerNode,{width:this.iconCount*this.height+
"px"});g&&!this.openAtStartWidget&&(this._onIconClick(g),this.openAtStartWidget=g.config.name)},_createPages:function(){var a=q.getContentBox(this.barNode).w;if(0<a){a=Math.ceil(this.iconCount*this.height/a);var b=this.pageListNode;b.innerHTML="";if(1<a){for(var c=0;c<a;c++){var g=k.create("li",{id:"page"+c},b);this.own(m(g,"click",d.hitch(this,this._setPage,c)))}if(!this.page||this.page>=a)this.page=0;this._setPage(this.page)}else h.set(this.containerNode,"left","0px")}},_setPage:function(a){var b=
q.getContentBox(this.barNode).w;f.remove("page"+this.page,"active");this.page=a;f.add("page"+this.page,"active");var c="left";window.isRTL&&(c="right");h.set(this.containerNode,c,-(a*b)+"px")},_createChildWidget:function(a){this.widgetManager.loadWidget(a).then(d.hitch(this,function(b){switch(a.name){case "ZoomSlider":k.place(b.domNode,this.navNode);p.set(this.navNode,"settingId",a.id);h.set(this.navNode,"display","block");break;case "Home":k.place(b.domNode,this.homeNode);p.set(this.homeNode,"settingId",
a.id);h.set("homeNode","display","block");break;case "MyLocation":k.place(b.domNode,this.locateNode);p.set(this.locateNode,"settingId",a.id);h.set("locateNode","display","block");break;case "Search":k.place(b.domNode,this.searchNode);p.set(this.searchNode,"settingId",a.id);h.set("searchNode","display","block");break;case "Navigate":k.place(b.domNode,this.navigateNode),p.set(this.navigateNode,"settingId",a.id),h.set(this.navigateDiv,"display","block")}this.widgetManager.openWidget(b)}))},_createIconNode:function(a){var b=
a.icon;var c=n.create("div",{"class":"icon-node",title:a.label,settingId:a.id},this.containerNode);n.create("img",{src:b},c);c.config=a;m(c,"click",d.hitch(this,this._onIconClick,c));return c},_onIconClick:function(a){a=a.config.id;-1!==this.openedIds.indexOf(a)?this._switchNodeToClose(a):this._switchNodeToOpen(a)},_switchNodeToOpen:function(a){if(a=this._getIconNodeById(a))if(a.config.widgets&&1<a.config.widgets.length){var b=0;t.forEach(a.config.widgets,d.hitch(this,function(c){setTimeout(d.hitch(this,
this._showIconContent),b,c);b+=600}))}else this._showIconContent(a.config),a.config.inPanel&&f.add(a,"icon-node-active")},_switchNodeToClose:function(a){var b=this._getIconNodeById(a);if(b)if(!1===b.config.inPanel)this.openedId="",this.widgetManager.closeWidget(a);else{var c=this.openedIds.indexOf(a);-1!==c&&this.openedIds.splice(c,1);this._updatePanelCount(-1);f.remove(b,"icon-node-active");this.panelManager.closePanel(a+"_panel")}},_getIconNodeById:function(a){a=u('.icon-node[settingId\x3d"'+a+
'"]',this.domNode);if(0!==a.length)return a[0]},_showIconContent:function(a){if(!1===a.inPanel){var b=a.name;this.widgetManager.loadWidget(a).then(d.hitch(this,function(e){this.openedId=a.id;n.setStyle(e.domNode,"zIndex",0);"OverviewMap"!==b&&e.setPosition(this.wPos,this.sceneView.map.id);this.widgetManager.openWidget(e);h.set(e.domNode,"display",null);this._minimizeController()}))}else{var c=this.panelManager.getPanelById(a.id+"_panel"),g=this._getNextPosition();c&&(g=c.position);a.panel.position=
g;this.openedIds.push(a.id);this.panelManager.showPanel(a).then(d.hitch(this,function(e){w.after(e,"onClose",d.hitch(this,function(){this._switchNodeToClose(a.id)}))}))}},_getNextPosition:function(){this._updatePanelCount(1);var a=10*(this.panelCount-1)+10;return{top:a,left:a,width:330,height:450,relativeTo:"map"}},_updatePanelCount:function(a){this.panelCount+=a;0>this.panelCount&&(this.panelCount=0)}})});