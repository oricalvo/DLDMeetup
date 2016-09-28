import { Component, Input } from '@angular/core';
import {Contact} from "./contact.service";

@Component({
    selector: 'contact-list',
    template: require("./contactList.component.html!text"),
    styles: [require("./contactList.component.css!text")],
})
export class ContactListComponent {
    @Input() contacts: Contact[];

    constructor() {
    }
}
