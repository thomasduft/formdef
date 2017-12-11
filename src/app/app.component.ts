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
    select: true,
    address: {
      street: 'Some street',
      zip: '12345'
    }
  };
}
