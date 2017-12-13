import {
  Component,
  Input
} from '@angular/core';
import {
  FormGroup,
  FormArray,
  AbstractControl
} from '@angular/forms';

import { Editor, Slot } from './models';

@Component({
  selector: 'tw-arrayslot',
  template: `
  <table class="table table-sm" [formGroup]="parentForm">
    <tbody [formArrayName]="rows">
      <tr *ngFor="let row of rows.controls; let idx = index">
        <td *ngFor="let editor of slot.editors">
          <tw-editor
            [hideLabel]="true"
            [editor]="editor"
            [parentForm]="lookUpControl(idx, editor)">
          </tw-editor>
        </td>
      </tr>
    </tbody>
  </table>
  <ng-container *ngIf="slot.editors && slot.editors.length > 0">
  `
})
export class ArraySlotComponent {
  @Input()
  public slot: Slot;

  @Input()
  public parentForm: FormGroup;

  public get rows(): FormArray {
    return this.parentForm.get(this.slot.key) as FormArray;
  }

  public getFormGroupAt(idx: number): FormGroup {
    return this.parentForm.get(idx.toString()) as FormGroup;
  }

  public lookUpControl(idx: number, editor: Editor): AbstractControl {
    const row = this.rows.at(idx);
    if (row) {
      const ctrl = row.get(editor.name);
      return ctrl;
    }

    throw new Error(`Cannot find control in ${this.slot.key} with index ${idx} and name ${editor.name}!`);
  }
}
