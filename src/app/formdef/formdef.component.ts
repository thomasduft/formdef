import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  HostBinding
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Slot } from './models';
import { FormdefService } from './formdef.service';

@Component({
  selector: 'tw-formdef',
  template: `
  <form [formGroup]="form"
        (ngSubmit)="onSubmit()">
    <tw-slothost
             [slot]="slot"
             [form]="form">
    </tw-slothost>
    <div class="button__bar">
      <button *ngIf="showSave"
              type="submit"
              class="btn btn-primary"
              [disabled]="!form.valid"
              i18n>{{ getSaveLabel }}</button>
      <button *ngIf="showCancel"
              type="button"
              class="btn-secondary"
              (click)="onReset()"
              i18n>Cancel</button>
      <button *ngIf="showDelete"
              type="button"
              class="btn-secondary"
              (click)="onDelete()"
              i18n>Delete</button>
    </div>
  </form>`,
  providers: [
    FormdefService
  ]
})
export class FormdefComponent implements OnInit {
  @Input()
  public key: string;

  @Input()
  public viewModel: any;

  @Input()
  public showSave = true;

  @Input()
  public saveTitle: string;

  public get getSaveLabel(): string {
    return this.saveTitle ? this.saveTitle : 'Save';
  }

  @Input()
  public showCancel = false;

  @Input()
  public showDelete = false;

  @Output()
  public submitted: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public resetted: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public deleted: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class')
  public class = 'form';

  public form: FormGroup = new FormGroup({});
  public slot: Slot;

  public get formValue(): any {
    return this.form.value;
  }

  public get formIsValid(): boolean {
    return this.form.valid;
  }

  public constructor(
    private _formdefService: FormdefService
  ) { }

  public ngOnInit(): void {
    console.log('current viewmodel', this.viewModel);

    this.form = this._formdefService.toGroup(this.key, this.viewModel);
    this.slot = this._formdefService.getSlot(this.key);
  }

  public onSubmit(): void {
    this.submitted.next(this.form.value);
  }

  public onReset(): void {
    this.resetted.next(this.form.value);
  }

  public onDelete(): void {
    this.deleted.next(this.form.value);
  }
}
