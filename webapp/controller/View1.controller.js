sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("DemoProject3DemoProject3.controller.View1", {
     onInit: function(){
     	var oform = this.getView().byId("idSimpleForm");
     	oform.bindElement("Model>/ProductSet('HT-1010')");
     }
	});
});