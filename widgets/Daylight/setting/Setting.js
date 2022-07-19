// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Daylight/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Daylight/setting/Setting.html":'\x3cdiv\x3e\r\n  \x3clabel\x3e\r\n    ${nls.defaultTimeZone}\r\n    \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"zoneSelect" class\x3d"zone-select" style\x3d"width:50px; "\x3e\x3c/select\x3e\r\n  \x3c/label\x3e\r\n\x3c/div\x3e\r\n',"url:widgets/Daylight/setting/css/style.css":".jimu-widget-daylight-setting .zone-select{width: 50px; margin-left: 10px;}",
"*now":function(c){c(['dojo/i18n!*preload*widgets/Daylight/setting/nls/Setting*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])}}});
define(["dojo/_base/declare","dijit/_WidgetsInTemplateMixin","jimu/BaseWidgetSetting","dijit/form/Select"],function(c,f,g){return c([g,f],{baseClass:"jimu-widget-daylight-setting",startup:function(){this.inherited(arguments);this._initZoneSelect()},_initZoneSelect:function(){var d=this.sceneView.environment.lighting.positionTimezoneInfo;d=this.config.defaultTimeZone||d.hours;var e=[],a="";a=null;for(var b=-12;12>=b;b++)a="GMT",0>b?a+=" ":0===b?a+=" ":0<b&&(a+="+"),a+=b,a={value:b+"",label:a},e.push(a);
this.zoneSelect.addOption(e);this.zoneSelect.set("value",d+"")},getConfig:function(){this.config.defaultTimeZone=this.zoneSelect.get("value");return this.config}})});