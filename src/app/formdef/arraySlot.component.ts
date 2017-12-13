import {
  Component,
  Input
} from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  AbstractControl
} from '@angular/forms';

import { Editor, Slot } from './models';
import { FormdefService } from './formdef.service';

@Component({
  selector: 'tw-arrayslot',
  template: `
  <h3>{{ slot.title }}</h3>
  <button class="btn btn-secondary" role="button" (click)="add($event)">+</button>
  <table class="table table-sm" [formGroup]="parentForm">
    <tbody>
      <tr *ngFor="let row of rows.controls; let idx = index">
        <td *ngFor="let editor of slot.editors">
          <tw-editor
            [hideLabel]="true"
            [editor]="editor"
            [parentForm]="rows.at(idx)">
          </tw-editor>
        </td>
        <td>
          <a class="btn btn-secondary" href="#" role="button" (click)="remove(idx)">-</a>
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

  public constructor(
    private _service: FormdefService
  ) { }

  public add(event: Event): void {
    event.preventDefault();

    const row = this._service.createRow(this.slot, this.rows.at(0) as FormGroup);
    this.rows.push(row);
  }

  public remove(idx: number): void {
    this.rows.removeAt(idx);
  }
}
