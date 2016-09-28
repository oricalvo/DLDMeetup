import { Component, Input } from '@angular/core';
import {Contact} from "./contact.service";

@Component({
    selector: 'contact-list',
    template: require("./contactList.component.html!text"),
    styles: [require("./contactList.component.css!text")],
})
export class ContactListComponent {
    @Input() contacts: Contact[];

    private contactsVM: ContactVM[];

    constructor() {
    }

    ngOnChanges() {
        console.log("ContactListComponent.ngOnChanges");

        if(!this.contacts) {
            this.contactsVM = [];
            return;
        }

        this.contactsVM = this.contacts.map(c => ({
            id: c.id,
            name: c.name,
            selected: true,
        }));
    }
}

interface ContactVM {
    id: number;
    name: string;
    selected: boolean;
}

