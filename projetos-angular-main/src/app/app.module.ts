import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Button} from './components/button.component'
import { MenuComponent } from './components/menu.component';
import {HelloComponent} from './components/hello.component'
import {EntryDataComponent} from './components/entry-data.component'

@NgModule({
  declarations: [
    AppComponent,Button,MenuComponent,HelloComponent,EntryDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
