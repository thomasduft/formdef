import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

import { ArraySlot } from './models';

@Component({
  selector: 'tw-array',
  template: `
  <div class="row">
    <div class="col-lg-6">
      <tw-formdef *ngIf="viewModel"
        [key]="key"
        [viewModel]="viewModel"
        (submitted)="submitted($event)">
      </tw-formdef>
    </div>
    <div class="col-lg-6">
      <pre>{{ submittedViewModel | json }}</pre>
    </div>
  </div>`
})
export class ArrayComponent implements OnInit {
  public key = ArraySlot.KEY;

  public submittedViewModel = {};

  public viewModel: any;

  public ngOnInit(): void {
    of({
      phones: [
        { type: 'p', number: '0123456', description: '' },
        { type: 'o', number: '987654', description: 'Only during usual work hours' }
      ]
    })
      .pipe(delay(5000))
      .subscribe((data: any) => {
        delete this.viewModel;
        this.viewModel = data;
      });
  }

  public submitted(viewModel: any): void {
    this.submittedViewModel = viewModel;
  }
}
