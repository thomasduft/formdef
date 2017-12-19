import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl
} from '@angular/forms';

import { 
  FormdefValidator,
  Editor, 
  Slot, 
  SINGLE_SLOT, 
  ARRAY_SLOT } from './models';
import { FormdefRegistry } from './formdefRegistry.service';

@Injectable()
export class FormdefService {
  public constructor(
    private _slotRegistry: FormdefRegistry,
    private _fb: FormBuilder
  ) { }

  public toGroup(key: string, viewModel: any): FormGroup {
    const slot = this.getSlot(key);

    const fg = this.toGroupRecursive(slot, viewModel);

    return <FormGroup>fg;
  }

  public getSlot(key: string): Slot {
    return this._slotRegistry.get(key);
  }

  private toGroupRecursive(slot: Slot, viewModel: any): FormGroup | FormArray {
    const fg = this._fb.group({});
    let fa: FormArray;

    if (slot.type === SINGLE_SLOT) {
      slot.editors.forEach((e: Editor) => {
        e.value = viewModel[e.name];
        fg.addControl(e.name, new FormControl(e.value, FormdefValidator.getValidators(e)));
      });
    }

    if (slot.type === ARRAY_SLOT
      && Array.isArray(viewModel)) {

      fa = this._fb.array([]);

      for (let i = 0; i < viewModel.length; i++) {
        const vm = viewModel[i];
        const row = this._fb.group({});

        slot.editors.forEach((e: Editor) => {
          const value = vm[e.name];
          row.addControl(e.name, new FormControl(value, FormdefValidator.getValidators(e)));
        });

        fa.push(row);
      }

      return fa;
    }

    if (slot.children && slot.children.length > 0) {
      slot.children.forEach((child: Slot) => {
        fg.addControl(child.key, this.toGroupRecursive(child, viewModel[child.key]));
      });
    }

    return fg;
  }
}
