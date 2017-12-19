import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormdefModule, FormdefRegistry } from './../formdef/index';

import { ArrayComponent } from './array.component';

import { ArraySlot } from './models';

@NgModule({
  imports: [
    CommonModule,
    FormdefModule,
    RouterModule.forChild([
      { path: 'array', component: ArrayComponent }
    ])
  ],
  declarations: [
    ArrayComponent
  ]
})
export class ArrayModule {
  public constructor(
    private _slotRegistry: FormdefRegistry
  ) {
    this._slotRegistry.register(new ArraySlot());
  }
}
