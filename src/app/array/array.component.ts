import { Component } from '@angular/core';

import { ArraySlot } from './models';

@Component({
  selector: 'tw-array',
  templateUrl: './array.component.html'
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
