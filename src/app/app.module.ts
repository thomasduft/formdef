import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormdefModule } from './formdef/formdef.module';
import { FormdefRegistry } from './formdef/index';

import { AppComponent } from './app.component';

import { ContactSlot } from './models';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormdefModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor(
    private _slotRegistry: FormdefRegistry
  ) {
    this._slotRegistry.register(new ContactSlot());
  }
 }
