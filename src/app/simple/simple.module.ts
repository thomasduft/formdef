import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormdefModule, FormdefRegistry } from './../formdef/index';

import { SimpleSlot } from './models';
import { SimpleComponent } from './simple.component';

@NgModule({
  imports: [
    CommonModule,
    FormdefModule,
    RouterModule.forChild([
      { path: 'simple', component: SimpleComponent }
    ])
  ],
  declarations: [
    SimpleComponent
  ]
})
export class SimpleModule {
  public constructor(
    private _slotRegistry: FormdefRegistry
  ) {
    this._slotRegistry.register(new SimpleSlot());
  }
}
