// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Compass/_build-generate_module":function(){define(["dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Compass/css/style.css":".jimu-widget-compass{width: 32px; height: 32px; opacity: 0.8;}.jimu-widget-compass:hover{opacity: 1;}.jimu-widget-compass .esri-compass.esri-widget-button{width: 30px; height: 30px; border: none; box-shadow: 0 0 1px #000;}.jimu-widget-compass .esri-compass-container{border-radius: 50%; background-color: rgba(255,255,255,0.8); box-shadow: none; border: none;}.jimu-widget-compass .esri-compass-container:hover{background-color: #fff;}.jimu-widget-compass .esri-compass-icon{width: 24px; height: 24px; color: rgba(0, 0, 0, 0.8); margin-left: auto; margin-right: auto; position: relative; top: 3px;}.jimu-widget-compass .esri-compass {border: 1px solid rgba(0, 0, 0, 0.3); border-radius: 50%;}",
"*now":function(a){a(['dojo/i18n!*preload*widgets/Compass/nls/Widget*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])}}});
define(["dojo/_base/declare","jimu/BaseWidget","esri/widgets/Compass","esri/widgets/Compass/CompassViewModel"],function(a,b,c,d){return a([b],{name:"Compass",baseClass:"jimu-widget-compass",templateString:"\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d'compassDiv'\x3e\x3c/div\x3e\x3c/div\x3e",postCreate:function(){this.inherited(arguments);this.compass=new c({container:this.compassDiv,viewModel:new d({view:this.sceneView})})},destroy:function(){this.compass&&this.compass.destroy();this.inherited(arguments)}})});