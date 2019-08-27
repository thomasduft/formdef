import { Component } from '@angular/core';

import { ArraySlot } from './models';

@Component({
  selector: 'tw-array',
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
export class ArrayComponent {
  public key = ArraySlot.KEY;

  public submittedViewModel = {};

  public viewModel = {
    phones: [
      { type: 'p', number: '0123456', description: '' },
      { type: 'o', number: '987654',  description: 'Only during usual work hours' }
    ]
  };

  public submitted(viewModel: any): void {
    this.submittedViewModel = viewModel;
  }
}
