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
var core_1 = require('@angular/core');
var contact_service_1 = require("./contact.service");
var AppComponent = (function () {
    function AppComponent(contactService) {
        var _this = this;
        this.contactService = contactService;
        contactService.getAll().then(function (contacts) {
            _this.contacts = contacts;
        });
    }
    AppComponent.prototype.add = function () {
        var contact = { id: -1, name: "Beni" };
        this.contactService.add(contact);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: require("./app.component.html!text"),
            styles: [require("./app.component.css!text")],
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map