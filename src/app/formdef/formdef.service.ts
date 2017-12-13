import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  ValidatorFn,
  Validators,
  AbstractControl
} from '@angular/forms';

import { Editor, Slot, SINGLE_SLOT, ARRAY_SLOT } from './models';
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

  public createRow(arraySlot: Slot, template: FormGroup): FormGroup {
    const row = this._fb.group({});

    arraySlot.editors.forEach((e: Editor) => {
      row.addControl(e.name, new FormControl(undefined, this.getValidators(e)));
    });

    return row;
  }

  private toGroupRecursive(slot: Slot, viewModel: any): FormGroup | FormArray {
    const fg = this._fb.group({});
    let fa: FormArray;

    if (slot.type === SINGLE_SLOT) {
      slot.editors.forEach((e: Editor) => {
        e.value = viewModel[e.name];
        fg.addControl(e.name, new FormControl(e.value, this.getValidators(e)));
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
          row.addControl(e.name, new FormControl(value, this.getValidators(e)));
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

  private getValidators(editor: Editor): ValidatorFn {
    const validators: Array<ValidatorFn> = new Array<ValidatorFn>();

    if (editor.required) {
      validators.push(Validators.required);
    }
    if (editor.size) {
      validators.push(Validators.maxLength(editor.size));
    }
    if (editor.valueMin) {
      validators.push(Validators.min(editor.valueMin));
    }
    if (editor.valueMax) {
      validators.push(Validators.max(editor.valueMax));
    }

    return Validators.compose(validators);
  }
}
