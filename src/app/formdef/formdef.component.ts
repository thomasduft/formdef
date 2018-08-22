import { Observable } from 'rxjs';

import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Slot } from './models';
import { FormdefService } from './formdef.service';

@Component({
  selector: 'tw-formdef',
  template: `
  <form [formGroup]="form"
        (ngSubmit)="onSubmit()"
        class="needs-validation"
        novalidate >
    <tw-slot *ngIf="slot"
             [slot]="slot"
             [parentForm]="form">
    </tw-slot>
    <div class="btn-group" role="group">
      <button *ngIf="showSave"
              type="submit"
              class="btn btn-primary"
              [disabled]="!form.valid"
              i18n>Save</button>
      <button *ngIf="showCancel"
              type="button"
              class="btn btn-secondary"
              (click)="onReset()"
              i18n>Cancel</button>
      <button *ngIf="showDelete"
              type="button"
              class="btn btn-secondary"
              (click)="onDelete()"
              i18n>Delete</button>
    </div>
  </form>`,
  providers: [
    FormdefService
  ]
})
export class FormdefComponent implements OnInit {
  private _viewModel: any;

  @Input()
  public key: string;

  @Input()
  public set viewModel(v: any) {
    if (v) {
      this._viewModel = v;
      this.ngOnInit();
    }
  }
  public get viewModel() {
    return this._viewModel;
  }

  @Input()
  public showSave = true;

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
    if (!this.viewModel) { return; }

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
