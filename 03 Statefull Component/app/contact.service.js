"use strict";
var ContactService = (function () {
    function ContactService() {
        this.contacts = null;
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
        this.contacts.push(contact);
    };
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map