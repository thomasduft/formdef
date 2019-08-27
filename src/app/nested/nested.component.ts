import { Component } from '@angular/core';

import { NestedSlot } from './models';

@Component({
  selector: 'tw-nested',
  template: `
  <div class="row">
    <div class="col-lg-6">
      <tw-formdef
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
export class NestedComponent {
  public key = NestedSlot.KEY;

  public submittedViewModel = {};

  public viewModel = {
    surname: 'Thomas',
    lastname: 'Duft',
    isDefault: true,
    gender: 'm',
    year: 1980,
    address: {
      street: 'Some street',
      zip: '12345'
    },
    phones: [
      { type: 'p', number: '0123456' },
      { type: 'o', number: '987654' }
    ]
  };

  public submitted(viewModel: any): void {
    this.submittedViewModel = viewModel;
  }
}
