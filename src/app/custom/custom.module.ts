import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  FormdefModule,
  FormdefRegistry,
  SlotComponentRegistry,
  SlotComponentMetaData
} from './../formdef/index';

import { CustomSlot } from './models';
import { CustomComponent } from './custom.component';
import { CustomSlotComponent } from './custom-slot.component';

@NgModule({
  imports: [
    CommonModule,
    FormdefModule,
    RouterModule.forChild([
      { path: 'custom', component: CustomComponent }
    ])
  ],
  declarations: [
    CustomComponent,
    CustomSlotComponent
  ],
  entryComponents: [
    CustomSlotComponent
  ]
})
export class CustomModule {
  public constructor(
    private _slotRegistry: FormdefRegistry,
    private _slotComponentRegistry: SlotComponentRegistry
  ) {
    this._slotRegistry.register(new CustomSlot());

    this._slotComponentRegistry.register(new SlotComponentMetaData(
      CustomSlot.KEY,
      CustomSlotComponent
    ));
  }
}
