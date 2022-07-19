// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:jimu/dijit/templates/EditorColorPalette.html":'\x3cdiv class\x3d"dijitInline dijitColorPalette" role\x3d"grid"\x3e\r\n  \x3ctable data-dojo-attach-point\x3d"paletteTableNode" class\x3d"dijitPaletteTable" cellSpacing\x3d"0" cellPadding\x3d"0"\r\n         role\x3d"presentation"\x3e\r\n    \x3ctbody data-dojo-attach-point\x3d"gridNode"\x3e\x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e'}});
define("require dojo/text!./templates/EditorColorPalette.html dijit/_Widget dijit/_TemplatedMixin dijit/_PaletteMixin dijit/hccss dojo/i18n dojo/_base/Color dojo/_base/declare dojo/dom-construct dojo/string dojo/i18n!dojo/nls/colors dojo/colors".split(" "),function(g,k,l,m,n,p,q,h,d,r,t){var f=d("dijit.ColorPalette",[l,m,n],{palette:"7x10",_palettes:{"7x10":["white seashell cornsilk lemonchiffon lightyellow palegreen paleturquoise lightcyan lavender plum".split(" "),"lightgray pink bisque moccasin khaki lightgreen lightseagreen lightskyblue cornflowerblue violet".split(" "),
"silver lightcoral sandybrown orange palegoldenrod chartreuse mediumturquoise skyblue mediumslateblue orchid".split(" "),"gray red orangered darkorange yellow limegreen darkseagreen royalblue slateblue mediumorchid".split(" "),"dimgray crimson chocolate coral gold forestgreen seagreen blue blueviolet darkorchid".split(" "),"darkslategray firebrick saddlebrown sienna olive green darkcyan mediumblue darkslateblue darkmagenta".split(" "),"rgb(0,0,1) darkred maroon brown darkolivegreen darkgreen midnightblue navy indigo purple".split(" ")]},
templateString:k,baseClass:"dijitColorPalette",_dyeFactory:function(b,a,e,c){return new this._dyeClass(b,a,e,c)},buildRendering:function(){this.inherited(arguments);this._dyeClass=d(f._Color,{palette:this.palette});this._preparePalette(this._palettes[this.palette],q.getLocalization("dojo","colors",this.lang))}});f._Color=d("dijit._Color",h,{template:"\x3cspan class\x3d'dijitInline dijitPaletteImg'\x3e\x3cimg src\x3d'${blankGif}' alt\x3d'${alt}' title\x3d'${title}' class\x3d'dijitColorPaletteSwatch'style\x3d'background-color: ${color}'/\x3e\x3c/span\x3e",
hcTemplate:"\x3cspan class\x3d'dijitInline dijitPaletteImg' style\x3d'position: relative; overflow: hidden; height: 12px; width: 14px;'\x3e\x3cimg src\x3d'${image}' alt\x3d'${alt}' title\x3d'${title}'style\x3d'position: absolute; left: ${left}px; top: ${top}px; ${size}'/\x3e\x3c/span\x3e",_imagePaths:{"7x10":g.toUrl("./themes/a11y/colors7x10.png"),"3x4":g.toUrl("./themes/a11y/colors3x4.png")},constructor:function(b,a,e,c){this._row=a;this._col=e;c?(this._title=c,this.setColor(h.named[b])):"rgb(0,0,1)"===
b&&(this._title="black",this.setColor([0,0,1]))},getValue:function(){return this.toHex()},fillCell:function(b,a){a=t.substitute(p("highcontrast")?this.hcTemplate:this.template,{color:this.toHex(),blankGif:a,alt:this._title,title:this._title,image:this._imagePaths[this.palette].toString(),left:-20*this._col-5,top:-20*this._row-5,size:"7x10"===this.palette?"height: 145px; width: 206px":"height: 64px; width: 86px"});r.place(a,b)}});return f});