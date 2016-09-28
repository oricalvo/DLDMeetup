import { Component } from '@angular/core';
import {ContactService, Contact} from "./contact.service";

@Component({
    selector: 'my-app',
    template: require("./app.component.html!text"),
    styles: [require("./app.component.css!text")],
})
export class AppComponent {
    contacts: Contact[];

    constructor(private contactService: ContactService) {
        contactService.getAll().then(contacts => {
            this.contacts = contacts;
        });

        contactService.contactAdded.subscribe(()=> {
            this.contacts = this.contactService.contacts;
        });
    }

    add() {
        const contact = {id:-1, name: "Beni"};
        this.contactService.add(contact);
    }

    update() {
        this.contactService.update(1, {name: "XXX"});
    }
}
