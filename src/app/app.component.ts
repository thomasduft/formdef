import {
  Component
} from '@angular/core';

import { ContactSlot } from './models';

@Component({
  selector: 'tw-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public key = ContactSlot.KEY;

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
    // phones: [
    //   { type: 'private', number: '0123456' },
    //   { type: 'office', number: '987654' }
    // ]
  };
}
