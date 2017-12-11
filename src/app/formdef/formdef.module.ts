import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormdefService } from './formdef.service';
import { SlotRegistry } from './slotRegistry.service';

import { SlotComponent } from './slot.component';
import { EditorComponent } from './editor.component';
import { FormdefComponent } from './formdef.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditorComponent,
    FormdefComponent,
    SlotComponent
  ],
  exports: [
    FormdefComponent
  ],
  providers: [
    FormdefService,
    SlotRegistry
  ]
})
export class FormdefModule { }
