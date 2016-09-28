import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ContactListComponent} from "./contactList.component";
import {ContactService} from "./contact.service";
import {appStore} from "./appStore.service";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, ContactListComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ ContactService, {provide: "appStore", useValue: appStore} ],
})
export class AppModule {
    constructor() {
    }
}