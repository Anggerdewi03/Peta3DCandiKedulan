// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/dnd/move dijit/_TemplatedMixin jimu/BaseWidgetPanel jimu/utils dojox/layout/ResizeHandle dojo/touch".split(" "),function(h,e,b,f,k,l,m,n,p){return h([m,l],{baseClass:"jimu-panel jimu-on-screen-widget-panel",_positionInfoBox:null,_originalBox:null,widgetIcon:null,_resizeOnOpen:!0,templateString:'\x3cdiv data-dojo-attach-point\x3d"boxNode"\x3e\x3cdiv class\x3d"jimu-panel-title jimu-main-background" data-dojo-attach-point\x3d"titleNode"\x3e\x3cdiv class\x3d"title-label jimu-vcenter-text jimu-float-leading jimu-leading-padding1"data-dojo-attach-point\x3d"titleLabelNode"\x3e${label}\x3c/div\x3e\x3cdiv class\x3d"close-btn jimu-vcenter jimu-float-trailing" data-dojo-attach-point\x3d"closeNode"data-dojo-attach-event\x3d"onclick:_onCloseBtnClicked,press:_onCloseBtnClicked"\x3e\x3c/div\x3e\x3cdiv class\x3d"max-btn jimu-vcenter jimu-float-trailing" data-dojo-attach-point\x3d"maxNode"data-dojo-attach-event\x3d"onclick:_onMaxBtnClicked"\x3e\x3c/div\x3e\x3cdiv class\x3d"foldable-btn jimu-vcenter jimu-float-trailing" data-dojo-attach-point\x3d"foldableNode"data-dojo-attach-event\x3d"onclick:_onFoldableBtnClicked"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"jimu-panel-content" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\x3c/div\x3e',
postCreate:function(){this._originalBox={w:400,h:410}},startup:function(){this.inherited(arguments);this._normalizePositionObj(this.position);this._makeOriginalBox();this.makePositionInfoBox();this.makeMoveable(this._positionInfoBox.w,.25*this._positionInfoBox.w)},_onMaxBtnClicked:function(a){a.stopPropagation();this._getPositionInfo().isRunInMobile&&("maximized"===this.windowState?this.panelManager.normalizePanel(this):this.panelManager.maximizePanel(this),this._setMobilePosition())},_onFoldableBtnClicked:function(a){a.stopPropagation();
this._getPositionInfo().isRunInMobile&&("minimized"===this.windowState?(b.removeClass(this.foldableNode,"fold-up"),b.addClass(this.foldableNode,"fold-down"),this.panelManager.normalizePanel(this)):(b.removeClass(this.foldableNode,"fold-down"),b.addClass(this.foldableNode,"fold-up"),this.panelManager.minimizePanel(this)),this._setMobilePosition())},_onCloseBtnClicked:function(a){this.panelManager.closePanel(this);a.stopPropagation()},_normalizePositionObj:function(a){var d=this._getLayoutBox();a.left=
isFinite(a.left)?a.left:d.w-a.right;a.top=isFinite(a.top)?a.top:d.h-a.bottom;delete a.right;delete a.bottom;this.position=e.mixin(e.clone(this.position),a)},makePositionInfoBox:function(){this._positionInfoBox={w:this.position.width||400,h:this.position.height||410,l:this.position.left||0,t:this.position.top||0}},_makeOriginalBox:function(){this._originalBox={w:this.position.width||400,h:this.position.height||410,l:this.position.left||0,t:this.position.top||0}},makeResizable:function(){this.disableResizable();
this.resizeHandle=(new p({targetId:this,minWidth:this._originalBox.w,minHeight:this._originalBox.h,activeResize:!1})).placeAt(this.domNode);this.resizeHandle.startup()},disableResizable:function(){this.resizeHandle&&(this.resizeHandle.destroy(),this.resizeHandle=null)},makeMoveable:function(a,d){this.disableMoveable();var c=b.getMarginBox(jimuConfig.layoutId);c.l=c.l-a+d;c.w+=2*(a-d);this.moveable=new k.boxConstrainedMoveable(this.domNode,{box:c,handle:this.titleNode,within:!0});this.own(f(this.moveable,
"Moving",e.hitch(this,this.onMoving)));this.own(f(this.moveable,"MoveStop",e.hitch(this,this.onMoveStop)))},disableMoveable:function(){this.moveable&&(this.moveable.destroy(),this.moveable=null)},createHandleNode:function(){return this.titleNode},onOpen:function(){this._resizeOnOpen&&(this.resize(),this._resizeOnOpen=!1);this.inherited(arguments)},_switchToMobileUI:function(){b.removeClass(this.titleNode,"title-normal");b.addClass(this.titleNode,"title-full");b.setStyle(this.foldableNode,"display",
"block");b.setStyle(this.maxNode,"display","block");"normal"===this.windowState?(b.removeClass(this.foldableNode,"fold-up"),b.addClass(this.foldableNode,"fold-down")):(b.removeClass(this.foldableNode,"fold-down"),b.addClass(this.foldableNode,"fold-up"))},_switchToDesktopUI:function(){b.removeClass(this.titleNode,"title-full");b.addClass(this.titleNode,"title-normal");b.setStyle(this.foldableNode,"display","none");b.setStyle(this.maxNode,"display","none")},resize:function(a){var d=this._getPositionInfo(),
c={left:d.position.left,top:d.position.top,width:this._positionInfoBox.w,height:this._positionInfoBox.h};a&&(a.t=this.domNode.offsetTop,c.left=isFinite(a.l)?a.l:c.left,c.top=isFinite(a.t)?a.t:c.top,c.width=isFinite(a.w)?a.w:c.width,c.height=isFinite(a.h)?a.h:c.height,this._normalizePositionObj(e.clone(c)),this.makePositionInfoBox(),c.width=this._positionInfoBox.w,c.height=this._positionInfoBox.h);d.position=c;this._onResponsible(d);this.inherited(arguments)},_onResponsible:function(a){a.isRunInMobile?
(this._setMobilePosition(),this.disableMoveable(),this.disableResizable(),this._switchToMobileUI()):(this._setDesktopPosition(a.position),this.makeResizable(),this.makeMoveable(this._positionInfoBox.w,.25*this._positionInfoBox.w),this._switchToDesktopUI())},setPosition:function(a){this._normalizePositionObj(a);this.makePositionInfoBox();a=this._getPositionInfo();this._onResponsible(a)},destroy:function(){this.widgetIcon=null;this.inherited(arguments)},_getLayoutBox:function(){var a=jimuConfig.layoutId;
a="map"===this.position.relativeTo?jimuConfig.mapId:jimuConfig.layoutId;return b.getMarginBox(a)},_getPositionInfo:function(){var a={isRunInMobile:!1,position:{left:0,top:5}},d=this._getLayoutBox(),c=this._positionInfoBox.l;if(window.appInfo.isRunInMobile)return a.isRunInMobile=!0,a;a.position.left=window.isRTL?d.w-c:c;c=this._positionInfoBox.t;var g=d.h-c;c>=g?c>=this._positionInfoBox.h&&(a.position.top=this._positionInfoBox.t-this._positionInfoBox.h-40-3):g>=this._positionInfoBox.h&&(a.position.top=
this._positionInfoBox.t+40+3);!a.isRunInMobile&&a.position.left+this._positionInfoBox.w>d.w&&(a.position.left-=this._positionInfoBox.w);return a},_setMobilePosition:function(){b.place(this.domNode,jimuConfig.layoutId);var a=this.panelManager.getPositionOnMobile(this);this.position.zIndex&&(a.zIndex=this.position.zIndex);var d=n.getPositionStyle(a);e.mixin(d,a.borderRadiusStyle);b.setStyle(this.domNode,d)},_setDesktopPosition:function(a){b.place(this.domNode,jimuConfig.mapId);b.setStyle(this.domNode,
{left:a.left+"px",right:"auto",top:a.top+"px",width:(a.width||this.position.width||this._originalBox.w)+"px",height:(a.height||this.position.height||this._originalBox.h)+"px"})},onMoving:function(a){b.setStyle(a.node,"opacity",.9)},onMoveStop:function(a){b.setStyle(a.node,"opacity",1);a=b.getMarginBox(a.node);this._normalizePositionObj(e.clone({left:a.l,top:a.t,width:a.w,height:a.h}));this.makePositionInfoBox()}})});