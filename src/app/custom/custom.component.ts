import { Component } from '@angular/core';
import { CustomSlot } from './models';

@Component({
  selector: 'tw-custom',
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
  </div>
  `
})
export class CustomComponent {
  public key = CustomSlot.KEY;

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
    avatar: null
  };

  public submitted(viewModel: any): void {
    this.submittedViewModel = viewModel;
  }
}
