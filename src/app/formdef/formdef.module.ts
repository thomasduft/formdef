import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormdefService } from './formdef.service';
import { FormdefRegistry } from './formdefRegistry.service';

import { ArraySlotComponent } from './arraySlot.component';
import { DateValueAccessor } from './dateValueAccessor';
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
    SlotComponent,
    ArraySlotComponent,
    DateValueAccessor
  ],
  exports: [
    FormdefComponent
  ],
  providers: [
    FormdefService,
    FormdefRegistry
  ]
})
export class FormdefModule { }
