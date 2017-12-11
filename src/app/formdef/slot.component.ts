import {
  Component,
  Input
} from '@angular/core';
import {
  FormGroup
} from '@angular/forms';

import { Slot } from './models';

@Component({
  selector: 'tw-slot',
  templateUrl: './slot.component.html'
})
export class SlotComponent {
  @Input()
  public slot: Slot;

  @Input()
  public parentForm: FormGroup;
}
