import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ContactListComponent} from "./contactList.component";
import {ContactService} from "./contact.service";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, ContactListComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ ContactService ],
})
export class AppModule {
    constructor() {
    }
}