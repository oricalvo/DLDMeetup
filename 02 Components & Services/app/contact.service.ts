export class ContactService {
    contacts: Contact[];

    constructor() {
        this.contacts = null;
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
        this.contacts.push(contact);
    }
}

export interface Contact {
    id: number;
    name: string;
}

