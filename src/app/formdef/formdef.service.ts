import { Injectable } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormControl,
  UntypedFormArray
} from '@angular/forms';

import {
  FormdefValidator,
  Editor,
  Slot,
  SINGLE_SLOT,
  ARRAY_SLOT
} from './models';
import { FormdefRegistry } from './formdefRegistry.service';

@Injectable()
export class FormdefService {
  public constructor(
    private fb: UntypedFormBuilder,
    private slotRegistry: FormdefRegistry
  ) { }

  public toGroup(key: string, viewModel: any): UntypedFormGroup {
    const slot = this.getSlot(key);

    const fg = this.toGroupRecursive(slot, viewModel);

    return <UntypedFormGroup>fg;
  }

  public getSlot(key: string): Slot {
    return this.slotRegistry.get(key);
  }

  private toGroupRecursive(slot: Slot, viewModel: any): UntypedFormGroup | UntypedFormArray {
    const fg = this.fb.group({});

    const isArray = Array.isArray(viewModel);

    if (!isArray) {
      slot.editors.forEach((e: Editor) => {
        fg.addControl(e.key, new UntypedFormControl(
          viewModel[e.key],
          FormdefValidator.getValidators(e)
        ));
      });
    } else {
      const fa = this.fb.array([]);

      for (let i = 0; i < viewModel.length; i++) {
        const row = this.fb.group({});

        slot.editors.forEach((e: Editor) => {
          row.addControl(e.key, new UntypedFormControl(
            viewModel[i][e.key],
            FormdefValidator.getValidators(e)
          ));
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
