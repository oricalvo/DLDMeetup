"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(appStore) {
        var _this = this;
        this.appStore = appStore;
        appStore.subscribe(function () {
            _this.contacts = appStore.getState().contacts;
        });
        appStore.dispatch({
            type: "LOAD_CONTACTS",
        });
    }
    AppComponent.prototype.add = function () {
        var contact = { id: -1, name: "Beni" };
        this.appStore.dispatch({
            type: "ADD_CONTACT",
            contact: contact,
        });
    };
    AppComponent.prototype.update = function () {
        this.appStore.dispatch({
            type: "UPDATE_CONTACT",
            id: 1,
            attrs: { name: "XXX" },
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: require("./app.component.html!text"),
            styles: [require("./app.component.css!text")],
        }),
        __param(0, core_1.Inject("appStore")), 
        __metadata('design:paramtypes', [Object])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map