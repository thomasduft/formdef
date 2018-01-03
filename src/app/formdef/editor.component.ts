import {
  Component,
  Input
} from '@angular/core';
import {
  FormGroup,
  AbstractControl
} from '@angular/forms';

import { Editor } from './models';

@Component({
  selector: 'tw-editor',
  template: `
  <div [ngSwitch]="editor.type"
       [formGroup]="parentForm"
       [ngClass]="{ 'has-danger': control(editor.name).invalid,
                    'form-group': editor.type !== 'checkbox',
                    'checkbox': editor.type === 'checkbox' }">

    <label class="form-control-label" 
           *ngIf="!hideLabel && editor.type !== 'checkbox'" 
           [attr.for]="editor.name">
      {{ editor.label }}
    </label>

    <ng-container *ngSwitchCase="'number'">
      <input type="number" 
             class="form-control" 
             [attr.id]="editor.name" 
             [formControlName]="editor.name">
    </ng-container>

    <ng-container *ngSwitchCase="'password'">
      <input type="password" 
             class="form-control" 
             [attr.id]="editor.name" 
             [formControlName]="editor.name">
    </ng-container>

    <ng-container *ngSwitchCase="'checkbox'">
      <label>
        <input type="checkbox" 
               [attr.id]="editor.name" 
               [formControlName]="editor.name">
        {{ editor.label }}
      </label>
    </ng-container>

    <ng-container *ngSwitchCase="'select'">
      <select class="form-control" [formControlName]="editor.name">
        <option *ngIf="!editor.required" [value]=""></option>
        <option *ngFor="let opt of editor.options" [value]="opt.key">
          {{ opt.value }}
        </option>
      </select>
    </ng-container>

    <ng-container *ngSwitchCase="'date'">
      <input type="date" 
             class="form-control" 
             [attr.id]="editor.name" 
             [formControlName]="editor.name"
             twUseValueAsDate>
    </ng-container>

    <ng-container *ngSwitchDefault>
      <input type="text" 
             class="form-control" 
             [attr.id]="editor.name" 
             [formControlName]="editor.name">
    </ng-container>

    <div *ngIf="control(editor.name).invalid" class="alert alert-danger">
      <div *ngIf="control(editor.name).errors.required" i18n>
        {{ editor.label }} required.
      </div>
      <div *ngIf="control(editor.name).errors.maxlength" i18n>
        {{ editor.label }} must not be longer than {{ editor.size }} characters.
      </div>
      <div *ngIf="control(editor.name).errors.min" i18n>
        {{ editor.label }} must not be lower than {{ editor.valueMin }}.
      </div>
      <div *ngIf="control(editor.name).errors.max" i18n>
        {{ editor.label }} must not be greater than {{ editor.valueMax }}.
      </div>
    </div>
  </div>
  `
})
export class EditorComponent {
  @Input()
  public hideLabel = false;

  @Input()
  public editor: Editor;

  @Input()
  public parentForm: FormGroup;

  public control(name: string): AbstractControl {
    return this.parentForm.get(name);
  }
}
