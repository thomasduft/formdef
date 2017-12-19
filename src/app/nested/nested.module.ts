import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormdefModule, FormdefRegistry } from './../formdef/index';

import { NestedComponent } from './nested.component';

import { NestedSlot } from './models';

@NgModule({
  imports: [
    CommonModule,
    FormdefModule,
    RouterModule.forChild([
      { path: 'nested', component: NestedComponent }
    ])
  ],
  declarations: [
    NestedComponent
  ]
})
export class NestedModule {
  public constructor(
    private _slotRegistry: FormdefRegistry
  ) {
    this._slotRegistry.register(new NestedSlot());
  }
}
