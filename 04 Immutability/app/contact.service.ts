import { EventEmitter } from '@angular/core';

export class ContactService {
    contacts: Contact[];

    public contactAdded: EventEmitter<void>;

    constructor() {
        this.contacts = null;
        this.contactAdded = new EventEmitter<void>();
    }

    getAll(): Promise<Contact[]> {
        return new Promise((resolve, reject)=> {
            if(!this.contacts) {
                this.contacts = [
                    {id:1, name: "Ori"},
                    {id:2, name: "Roni"},
                ];
            }

            resolve(this.contacts);
        });
    }

    add(contact: Contact) {
        const newContacts = this.contacts.concat(contact);
        this.contacts = newContacts;

        this.contactAdded.emit();
    }

    update(id: number, attrs: any) {
        const index = this.contacts.findIndex(c=>c.id==id);
        if(index==-1) {
            return;
        }

        const newContact = Object.assign({}, this.contacts[index], attrs);
        const newContacts = this.contacts.concat([]);
        newContacts[index] = newContact;

        this.contacts = newContacts;

        this.contactAdded.emit();
    }
}

export interface Contact {
    id: number;
    name: string;
}
