import {
  Component,
  Input
} from '@angular/core';
import {
  UntypedFormGroup,
  AbstractControl
} from '@angular/forms';

import { Editor } from './models';

@Component({
  selector: 'tw-editor',
  template: `
  <div [ngSwitch]="editor.type"
       [formGroup]="form"
       [ngClass]="{ 'has-danger': control(editor.key).invalid,
                    'form-group': editor.type !== 'checkbox',
                    'checkbox': editor.type === 'checkbox' }">
    <label class="form-control-label"
           *ngIf="(!hideLabel && editor.type !== 'checkbox' && editor.type !== 'hidden')"
           [attr.for]="editor.key">
      {{ editor.label }}
    </label>

   <input *ngSwitchCase="'hidden'"
          type="hidden"
          class="form-control"
          [formControlName]="editor.key" />

   <input *ngSwitchCase="'number'"
          type="number"
          class="form-control"
          pattern="[0-9.,]*"
          inputmode="numeric"
          [formControlName]="editor.key" />

   <input *ngSwitchCase="'password'"
          type="password"
          class="form-control"
          [formControlName]="editor.key" />

    <tw-file-upload *ngSwitchCase="'file'"
          class="form-control"
          [formControlName]="editor.key" >
    </tw-file-upload>

   <label *ngSwitchCase="'checkbox'">
     <input type="checkbox"
            [formControlName]="editor.key">
     {{ editor.label }}
   </label>

   <select *ngSwitchCase="'select'"
           class="form-control"
           [formControlName]="editor.key">
     <option *ngIf="!editor.required" [value]=""></option>
     <option *ngFor="let opt of editor.options" [ngValue]="opt.key">
       {{ opt.value }}
     </option>
   </select>

   <input *ngSwitchCase="'date'"
          type="date"
          class="form-control"
          [formControlName]="editor.key"
          twUseValueAsDate />

    <textarea *ngSwitchCase="'textarea'"
              class="form-control"
              [formControlName]="editor.key">
    </textarea>

   <input *ngSwitchDefault
          type="text"
          class="form-control"
          [formControlName]="editor.key" />

      <div *ngIf="control(editor.key).invalid" class="alert alert-danger">
        <div *ngIf="control(editor.key).hasError('required')" i18n>
          {{ editor.label }} required.
        </div>
        <div *ngIf="control(editor.key).hasError('min')" i18n>
          {{ editor.label }} must not be lower than {{ editor.min }}.
        </div>
        <div *ngIf="control(editor.key).hasError('max')" i18n>
          {{ editor.label }} must not be greater than {{ editor.max }}.
        </div>
        <div *ngIf="control(editor.key).hasError('minlength')" i18n>
          {{ editor.label }} must be at least {{ editor.minLength }} characters in length.
        </div>
        <div *ngIf="control(editor.key).hasError('maxlength')" i18n>
          {{ editor.label }} must not be longer than {{ editor.maxLength }} characters.
        </div>
      </div>
  </div>`
})
export class EditorComponent {
  @Input()
  public hideLabel = false;

  @Input()
  public editor: Editor;

  @Input()
  public form: UntypedFormGroup;

  public control(name: string): AbstractControl {
    return this.form.get(name);
  }
}
