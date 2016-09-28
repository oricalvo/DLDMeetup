"use strict";
var core_1 = require('@angular/core');
var ContactService = (function () {
    function ContactService() {
        this.contacts = null;
        this.contactAdded = new core_1.EventEmitter();
    }
    ContactService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.contacts) {
                _this.contacts = [
                    { id: 1, name: "Ori" },
                    { id: 2, name: "Roni" },
                ];
            }
            resolve(_this.contacts);
        });
    };
    ContactService.prototype.add = function (contact) {
        var newContacts = this.contacts.concat(contact);
        this.contacts = newContacts;
        this.contactAdded.emit();
    };
    ContactService.prototype.update = function (id, attrs) {
        var index = this.contacts.findIndex(function (c) { return c.id == id; });
        if (index == -1) {
            return;
        }
        var newContact = Object.assign({}, this.contacts[index], attrs);
        var newContacts = this.contacts.concat([]);
        newContacts[index] = newContact;
        this.contacts = newContacts;
        this.contactAdded.emit();
    };
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map