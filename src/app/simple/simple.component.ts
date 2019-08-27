import { Component } from '@angular/core';

import { SimpleSlot } from './models';

@Component({
  selector: 'tw-simple',
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
export class SimpleComponent {
  public key = SimpleSlot.KEY;

  public submittedViewModel = {};

  public viewModel = {
    surname: 'Thomas',
    lastname: 'Duft',
    isDefault: true,
    gender: 'm',
    year: 1980,
    birthday: '2018-01-21T00:00:00.000Z',
    avatar: null
  };

  public submitted(viewModel: any): void {
    this.submittedViewModel = viewModel;

    this.downloadFile(viewModel);
  }

  private downloadFile(viewModel: any) {
    if (!viewModel.avatar) { return; }

    const blob = new Blob([viewModel.avatar], { type: viewModel.avatar.type });
    console.log(blob);
    const url = window.URL.createObjectURL(blob);
    window.location.assign(url);
  }
}
