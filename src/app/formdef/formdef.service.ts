import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

import { Editor, Slot, SINGLE_SLOT, ARRAY_SLOT } from './models';
import { SlotRegistry } from './slotRegistry.service';

@Injectable()
export class FormdefService {
  public constructor(
    private _slotRegistry: SlotRegistry,
    private _fb: FormBuilder
  ) { }

  public toGroup(key: string, viewModel: any): FormGroup {
    const slot = this.getSlot(key);

    const fg = this.toGroupRecursive(slot, viewModel);

    return fg;
  }

  public getSlot(key: string): Slot {
    return this._slotRegistry.get(key);
  }

  private toGroupRecursive(slot: Slot, viewModel: any): FormGroup {
    const fg = this._fb.group({});

    if (slot.type === SINGLE_SLOT) {
      slot.editors.forEach((e: Editor) => {
        e.value = viewModel[e.name];
        fg.addControl(e.name, new FormControl(e.value)); // validators?
      });
    }

    if (slot.type === ARRAY_SLOT) {
      const children = [];
      slot.children.forEach((s: Slot) => {
        children.push(this.toGroupRecursive(s, viewModel[s.key]));
      });

      fg.addControl(slot.key, new FormArray(children));

      return fg;
    }

    if (slot.children && slot.children.length > 0) {
      slot.children.forEach((child: Slot) => {
        fg.addControl(child.key, this.toGroupRecursive(child, viewModel[child.key]));
      });
    }

    return fg;
  }
}
