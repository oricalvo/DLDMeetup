import { Component,Inject } from '@angular/core';
import {ContactService, Contact} from "./contact.service";
import {Store} from "redux";
import {AppState} from "./appStore.service";

@Component({
    selector: 'my-app',
    template: require("./app.component.html!text"),
    styles: [require("./app.component.css!text")],
})
export class AppComponent {
    contacts: Contact[];

    constructor(@Inject("appStore") private appStore: Store<AppState>) {
        appStore.subscribe(() => {
            this.contacts = appStore.getState().contacts;
        });

        appStore.dispatch({
            type: "LOAD_CONTACTS",
        });
    }

    add() {
        const contact = {id:-1, name: "Beni"};
        this.appStore.dispatch({
            type: "ADD_CONTACT",
            contact: contact,
        });
    }

    update() {
        this.appStore.dispatch({
            type: "UPDATE_CONTACT",
            id: 1,
            attrs: {name: "XXX"},
        });
    }
}
