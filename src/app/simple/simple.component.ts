import { Component } from '@angular/core';

import { SimpleSlot } from './models';

@Component({
  selector: 'tw-simple',
  templateUrl: './simple.component.html'
})
export class SimpleComponent {
  public key = SimpleSlot.KEY;

  public submittedViewModel = {};

  public viewModel = {
    surname: 'Thomas',
    lastname: 'Duft',
    isDefault: true,
    gender: 'm',
    year: 1980,
    birthday: '2018-01-21T00:00:00.000Z'
  };

  public submitted(viewModel: any): void {
    this.submittedViewModel = viewModel;
  }
}
