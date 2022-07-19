// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
require({cache:{
'jimu/dijit/ColorPickerPopup':function(){
///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/_base/lang',
    'dojo/_base/html',
    'dojo/on',
    'dojo/_base/Color',
    'dijit/TooltipDialog',
    'dijit/popup',
    'jimu/dijit/ColorPalette',
    'jimu/utils'
  ],
  function(declare, _WidgetBase, _TemplatedMixin, lang, html, on, Color, TooltipDialog,
    dojoPopup, ColorPalette, jimuUtils) {
    return declare([_WidgetBase, _TemplatedMixin], {
      baseClass: 'jimu-color-pickerPopup',
      declaredClass: 'jimu.dijit.ColorPickerPopup',
      templateString: '<div class="jimu-color-picker"></div>',
      _isTooltipDialogOpened: false,
      color: null, //dojo.Color or hex string

      showLabel: false,
      around: null,

      _ENABLE: true,
      //events:
      //change
      recordUID: "",

      postCreate: function() {
        this.inherited(arguments);
        this._createTooltipDialog(this.domNode);
        this._hideTooltipDialog();
      },

      destroy: function() {
        dojoPopup.close(this.tooltipDialog);
        this.picker.destroy();
        this.tooltipDialog.destroy();
        this.inherited(arguments);
      },

      enable: function (){
        this._ENABLE = true;
        html.removeClass(this.domNode, "disable");
      },
      disable: function() {
        this._ENABLE = false;
        html.addClass(this.domNode, "disable");
      },

      isPartOfPopup: function(target) {
        var node = this.tooltipDialog.domNode;
        var isInternal = target === node || html.isDescendant(target, node);
        return isInternal;
      },

      hideTooltipDialog: function() {
        this._hideTooltipDialog();
      },

      showTooltipDialog: function() {
        this._showTooltipDialog();
      },

      initUI: function(){
        this.picker.initUI();
      },

      isOpen: function () {
        return this._isTooltipDialogOpened;
      },

      _showTooltipDialog: function() {
        dojoPopup.open({
          parent: this.getParent(),
          popup: this.tooltipDialog,
          around: this.around ? this.around : this.domNode,//position
          orient: this.orient
        });

        this._isTooltipDialogOpened = true;
      },

      _hideTooltipDialog: function() {
        dojoPopup.hide(this.tooltipDialog);
        this._isTooltipDialogOpened = false;
      },

      _createTooltipDialog: function() {
        var ttdContent = html.create("div");
        this.tooltipDialog = new TooltipDialog({
          content: ttdContent
        });
        html.addClass(this.tooltipDialog.domNode, 'jimu-color-picker-popup-dialog');

        var picker = new ColorPalette({
          appearance: {
            showTransparent: false,
            showColorPalette: true,
            showCoustom: true,
            showColorPickerOK: true,//ok btn
            showColorPickerApply: true,//apply btn
            showCoustomRecord: true,
            closeDialogWhenChange: true//TODO
          },
          recordUID: this.recordUID,
          onChange: lang.hitch(this, function(color) {
            if (color) {
              var newColor = new Color(color);
              this.setColor(newColor);
              this.onChange(newColor);//emit change event
            }
          })
        });
        picker.placeAt(ttdContent);
        picker.startup();

        this.own(on(picker, 'close', lang.hitch(this, function () {
          this._hideTooltipDialog();
        })));
        this.own(on(picker, 'change-style', lang.hitch(this, function () {
          this._hideTooltipDialog();
          this._showTooltipDialog();//re-open to re-posction
        })));

        this.own(on(this.domNode, 'click', lang.hitch(this, function(event) {
          event.stopPropagation();
          event.preventDefault();

          if (this._isTooltipDialogOpened) {
            this._hideTooltipDialog();
          } else {
            if (false !== this._ENABLE) {
              this._showTooltipDialog();
            }
          }
        })));
        this.own(on(document, 'click', lang.hitch(this, function(event) {
          var target = event.srcElement || event.target;
          if (!this.isPartOfPopup(target)) {
            this._hideTooltipDialog();
          }
        })));

        this.picker = picker;
      },

      setColor: function(newColor) {
        if (!(newColor instanceof Color)) {
          return;
        }

        //init label
        if (this.color === null && true === this.showLabel) {
          this._changeLabel(newColor);
        }

        var newHex = newColor.toHex();
        this.color = newColor;
        html.setStyle(this.domNode, 'backgroundColor', newHex);
        if (this.picker) {
          this.picker.refreshRecords();
          this.picker.setColor(newHex, false, true);
        }

        if (this.showLabel) {
          this._changeLabel(this.color);
        }
      },

      getColor: function() {
        return this.color;
      },

      _changeLabel: function(newColor) {
        html.empty(this.domNode);
        html.create('span', {
          innerHTML: newColor.toHex(),
          className: "color-label",
          style: {
            color: jimuUtils.invertColor(newColor.toHex())
          }
        }, this.domNode);
      },

      onChange: function(newColor) {
        /*jshint unused: false*/
        if (newColor && this.showLabel) {
          this._changeLabel(newColor);
        }
      },
      changeColor: function() {
        if (this.picker) {
          this.picker.changeColor();
        }
        if (this.showLabel) {
          this._changeLabel(this.color);
        }
      },
      setTitle: function(str) {
        this.domNode.title = str;
      },
      getTooltipDialog: function() {
        return this.tooltipDialog || null;
      }
    });
  });
},
'themes/DashboardTheme/widgets/Header/setting/SharedThemeChooserPopup':function(){
///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(['dojo/Evented',
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/_base/lang',
  'dojo/_base/html',
  'dojo/on',
  'dijit/TooltipDialog',
  'dojo/text!./SharedThemeChooserPopup.html',
  'dijit/popup'
],
  function (Evented, declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
    lang, html, on, TooltipDialog, template, dojoPopup) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
      declaredClass: 'shared-theme-chooser-popup',
      templateString: template,

      _DISAPPEAR_TIMER: null,//hover display
      _isTooltipDialogOpened: false,
      placeAt: null,
      isPortalSupported: null,
      ACTION: null,

      postMixInProperties: function () {
        this.inherited(arguments);
        this.nls = lang.mixin(this.nls, builderNls);

        this.ACTION = {
          ORG: "org",
          SHARED: "shared",
          CUSTOM: "custom"
        };
      },

      postCreate: function () {
        this.inherited(arguments);

        this._createTooltipDialog();

        if (!this.isPortalSupported) {
          html.addClass(this.orgItem, 'no-support');
        }
        //Buttons
        this.own(on(this.orgItem, 'click', lang.hitch(this, function (event) {
          event.stopPropagation();
          event.preventDefault();
          if (this.isPortalSupported) {
            this.orgClickHanlder(event);
          }
        })));
        this.own(on(this.sharedItem, 'click', lang.hitch(this, function (event) {
          event.stopPropagation();
          event.preventDefault();
          this.sharedClickHanlder(event);
        })));
        this.own(on(this.customItem, 'click', lang.hitch(this, function (event) {
          event.stopPropagation();
          event.preventDefault();
          this.customClickHanlder(event);
        })));

        this._hideTooltipDialog();
      },

      destroy: function () {
        dojoPopup.close(this.tooltipDialog);
        this.tooltipDialog.destroy();
        this.inherited(arguments);
      },

      hideTooltipDialog: function () {
        this._hideTooltipDialog();
      },
      showTooltipDialog: function () {
        this._showTooltipDialog();
      },
      getTooltipDialog: function () {
        if (this.tooltipDialog && this.tooltipDialog.domNode) {
          return this.tooltipDialog;
        } else {
          return null;
        }
      },
      _showTooltipDialog: function () {
        if (true === this._isTooltipDialogOpened) {
          return;
        }

        dojoPopup.open({
          parent: this.placeAt || this.getParent(),
          popup: this.tooltipDialog,
          around: this.around
        });
        this._isTooltipDialogOpened = true;

        this.emit("showPopup");
      },
      _hideTooltipDialog: function () {
        dojoPopup.close(this.tooltipDialog);
        this._isTooltipDialogOpened = false;
      },
      _createTooltipDialog: function () {
        this.tooltipDialog = new TooltipDialog({
          content: this.domNode
        });

        html.addClass(this.tooltipDialog.domNode, "shared-theme-chooser-popup-container");
        //mouse hover on this.popup
        var tooltipDialog = this.getTooltipDialog();
        this.own(on(tooltipDialog.domNode, 'mouseover', lang.hitch(this, function (event) {
          this.showPopup(event);
        })));
        this.own(on(tooltipDialog.domNode, 'mouseleave', lang.hitch(this, function (event) {
          this.hidePopup(event);
        })));
      },

      orgClickHanlder: function (event) {
        this.emit("btnClick", this.ACTION.ORG, event);
      },
      sharedClickHanlder: function (event) {
        this.emit("btnClick", this.ACTION.SHARED, event);
      },
      customClickHanlder: function (event) {
        this.emit("btnClick", this.ACTION.CUSTOM, event);
      },
      setChecked: function (btn) {
        html.removeClass(this.orgCheck, "check");
        html.removeClass(this.sharedCheck, "check");
        html.removeClass(this.customCheck, "check");

        if (btn === this.ACTION.ORG && this.isPortalSupported) {
          html.addClass(this.orgCheck, "check");
        }
        if (btn === this.ACTION.SHARED) {
          html.addClass(this.sharedCheck, "check");
        }
        if (btn === this.ACTION.CUSTOM) {
          html.addClass(this.customCheck, "check");
        }
      },

      showPopup: function (event) {
        if (event) {
          event.stopPropagation();
          event.preventDefault();
        }

        this._clearDisappearTimer();
        if (this._isTooltipDialogOpened === false) {
          this.showTooltipDialog();
          this._isTooltipDialogOpened = true;
        }
      },
      hidePopup: function (event) {
        if (event) {
          event.stopPropagation();
          event.preventDefault();
        }
        //this._setDisappearTimer();
        this.hideTooltipDialog();
        this._isTooltipDialogOpened = false;
      },
      _clearDisappearTimer: function () {
        if (this._miniModeTimer) {
          clearTimeout(this._miniModeTimer);
        }
      }
    });
  });
},
'themes/DashboardTheme/widgets/Header/setting/_build-generate_module':function(){
define(["dojo/text!./Setting.html",
"dojo/text!./css/style.css",
"dojo/i18n!./nls/strings"], function(){});
},
'url:themes/DashboardTheme/widgets/Header/setting/SharedThemeChooserPopup.html':"<div class=\"shared-theme-chooser-popup\">\r\n  <div class=\"btns-container\">\r\n    <div class=\"btn-itmes\" data-dojo-attach-point=\"orgItem\">\r\n      <div class=\"btns jimu-float-leading\" data-dojo-attach-point=\"org\">${nls.sharedTheme}</div>\r\n      <div class=\"jimu-float-trailing disabled\" data-dojo-attach-point=\"orgCheck\"></div>\r\n    </div>\r\n    <div class=\"btn-itmes\" data-dojo-attach-point=\"sharedItem\">\r\n      <div class=\"btns jimu-float-leading\" data-dojo-attach-point=\"shared\">${nls.themeColor}</div>\r\n      <div class=\"jimu-float-trailing \" data-dojo-attach-point=\"sharedCheck\"></div>\r\n    </div>\r\n    <div class=\"btn-itmes\" data-dojo-attach-point=\"customItem\">\r\n      <div class=\"btns jimu-float-leading\" data-dojo-attach-point=\"custom\">${nls.custom}</div>\r\n      <div class=\"jimu-float-trailing \" data-dojo-attach-point=\"customCheck\"></div>\r\n    </div>\r\n  </div>\r\n</div>",
'url:themes/DashboardTheme/widgets/Header/setting/Setting.html':"<div style=\"width:100%;\">\r\n  <div class=\"title\">\r\n    ${nls.setStyle}\r\n  </div>\r\n  <div class=\"jimu-color-btn\" data-dojo-attach-point=\"colorPicker\"></div>\r\n</div>",
'url:themes/DashboardTheme/widgets/Header/setting/css/style.css':".dashboard-header-setting {display: flex; align-items: center;}.dashboard-header-setting .jimu-color-btn {margin: 0 20px; width: 100px; height: 36px; border: 1px solid lightgray; display: flex; align-items: center; justify-content: center; cursor: pointer;}.dashboard-header-setting .jimu-color-btn:hover {border: 2px solid #24B5CC;}",
'*now':function(r){r(['dojo/i18n!*preload*themes/DashboardTheme/widgets/Header/setting/nls/Setting*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]']);}
}});
///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
    'dojo/_base/declare',
    'dojo/on',
    'dojo/_base/array',
    'dojo/_base/lang',
    'dojo/_base/html',
    'dojo/_base/Color',
    'dijit/_WidgetsInTemplateMixin',
    'jimu/BaseWidgetSetting',
    'jimu/utils',
    'jimu/portalUtils',
    'jimu/dijit/ColorPickerPopup',
    './SharedThemeChooserPopup',
  ],
  function(
    declare, on, array, lang, html, Color, _WidgetsInTemplateMixin,  BaseWidgetSetting, jimuUtils, portalUtils, ColorPickerPopup, SharedThemeChooserPopup) {
    /*jscs: disable maximumLineLength*/
    return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {
      //these two properties is defined in the BaseWidget
      baseClass: 'dashboard-header-setting',
      darkColor: '#444444',
      lightColor: '#EEEEEE',

      startup: function () {
        this.inherited(arguments);

        this._createTooltipDialog();

        if (this.config.mode) {
          if (this.config.mode === 'org') {
            this.popup.setChecked(this.popup.ACTION.ORG);
            // get org shared color dynamically
            this._getOrgColor().then(lang.hitch(this, function(color) {
              this._changeLabel(new Color(color));
            }));
          } else if (this.config.mode === 'custom') {
            this.popup.setChecked(this.popup.ACTION.CUSTOM);
            // static custom color
            this._changeLabel(new Color(this.config.color));
          } else {
            this.popup.setChecked(this.popup.ACTION.SHARED);
            // get theme color dynamically
            var color = this._getThemeColor();
            this._changeLabel(new Color(color));
          }
          this.colorPickerPopup.setColor(new Color(this.config.color));
        } else {
          var mainBackgroundColor = lang.getObject('theme.customStyles.mainBackgroundColor', false, this.appConfig);
          if (mainBackgroundColor) {
            // use custom style
            this._getOrgColor().then(lang.hitch(this, function(color) {
              if (color === mainBackgroundColor) {
                this.popup.setChecked(this.popup.ACTION.ORG);
                this._getOrgColor().then(lang.hitch(this, function(color) {
                  this._changeLabel(new Color(color));
                }));
              } else {
                this.popup.setChecked(this.popup.ACTION.CUSTOM);
                this._changeLabel(new Color(mainBackgroundColor));
              }
            }));
          } else {
            // use theme style
            this.popup.setChecked(this.popup.ACTION.SHARED);
            var color = this._getThemeColor();
            this._changeLabel(new Color(color));
          }
        }
        //hover display
        this.own(on(this.domNode, 'mouseenter', lang.hitch(this, function (/*event*/) {
          if (!this.colorPickerPopup.isOpen()) {
            this.popup.showPopup();//disable hover when colorPickerPopup opened
          }
        })));
        this.own(on(this.domNode, 'mouseleave', lang.hitch(this, function (/*event*/) {
          if (!this.colorPickerPopup.isOpen()) {
            this.popup.hidePopup();
          }
        })));
      },

      _createTooltipDialog: function () {
        var sharedTheme = lang.getObject('theme.sharedTheme', false, this.appConfig);
        this.popup = new SharedThemeChooserPopup({
          placeAt: this.getParent(),
          nls: this.nls,
          around: this.colorPicker,
          isPortalSupported: sharedTheme && sharedTheme.isPortalSupport
        });
        this.own(on(this.popup, 'btnClick', lang.hitch(this, function (btn, event) {
          if (btn === this.popup.ACTION.ORG) {
            this.showOrgThemeColor();
          } else if (btn === this.popup.ACTION.SHARED) {
            this.showSharedThemeColor();
          } else if (btn === this.popup.ACTION.CUSTOM) {
            this.showCustomColor(event);
          }
        })));

        this.colorPickerPopup = new ColorPickerPopup({
          showColorPickerOK: true,
          showLabel: false,
          recordUID: this.recordUID,
          around: this.domNode
        });
        this.colorPickerPopup.placeAt(this.getParent());
        this.colorPickerPopup.startup();

        this.own(on(this.colorPickerPopup, 'change', lang.hitch(this, function (color) {
          this.config.color = color;
          this.config.mode = 'custom';
          this._changeLabel(color);
          this.popup.setChecked(this.popup.ACTION.CUSTOM);
          this.popup.hideTooltipDialog();
        })));
      },

      _changeLabel: function (newColor) {
        html.empty(this.colorPicker);
        this.colorPicker.style.background = newColor.toHex();
        html.create('span', {
          innerHTML: jimuUtils.sanitizeHTML(newColor.toHex()),
          className: "color-label",
          style: {
            color: jimuUtils.invertColor(newColor.toHex())
          }
        }, this.colorPicker);
      },

      _getOrgColor: function() {
        var portal = portalUtils.getPortal(this.appConfig.portalUrl);
        return portal.loadSelfInfo().then(lang.hitch(this, function (selfInfo) {
          if (selfInfo && selfInfo.portalProperties && selfInfo.portalProperties.sharedTheme &&
            selfInfo.portalProperties.sharedTheme.header) {
            return selfInfo.portalProperties.sharedTheme.header.background;
          }
        }), lang.hitch(this, function (err) {
          console.error(err);
        }));
      },

      _getThemeColor: function() {
        var styles = lang.getObject('theme.styles', false, this.appConfig);
        if (styles[0] !== 'light') {
          return this.darkColor;
        }
        return this.lightColor;
      },

      showOrgThemeColor: function() {
        this.config.mode = 'org';
        html.empty(this.colorPicker);
        this.colorPicker.style.background = 'transparent';
        this.popup.setChecked(this.popup.ACTION.ORG);
        this.popup.hideTooltipDialog();

        this._getOrgColor().then(lang.hitch(this, function(color) {
          this._changeLabel(new Color(color));
        }));
      },

      showSharedThemeColor: function () {
        this.config.mode = 'theme';
        html.empty(this.colorPicker);
        this.colorPicker.style.background = 'transparent';
        this.popup.setChecked(this.popup.ACTION.SHARED);
        this.popup.hideTooltipDialog();

        var color = this._getThemeColor();
        this._changeLabel(new Color(color));
      },

      showCustomColor: function (event) {
        this.config.mode = 'custom';
        if (event) {
          event.stopPropagation();
          event.preventDefault();
        }

        //close own popup
        this.popup.hidePopup();

        this.colorPickerPopup.showTooltipDialog();
        this.colorPickerPopup.initUI();
      },

      destroy: function () {
        if (this.colorPickerPopup) {
          this.colorPickerPopup.picker.destroy();
        }
        if (this.popup) {
          this.popup.destroy();
        }
        this.inherited(arguments);
      },

      setConfig: function(config) {
        this.config = config || {};
      },

      getConfig: function() {
        return this.config;
      }
    });
  });