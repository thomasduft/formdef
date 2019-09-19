import { Component } from '@angular/core';
import { BaseSlotComponent } from '../formdef';

@Component({
  selector: 'tw-custom-slot',
  template: `
  <h5>{{ slot.title }}</h5>
  <p>
    This is a custom slot that displays the available data you
    could do stuff with within the component as json string.
  </p>
  <h6>Slot value</h6>
  <pre>{{ slot | json}}</pre>
  <h6>Form value</h6>
  <pre>{{ form.value | json }}</pre>
  `
})
export class CustomSlotComponent extends BaseSlotComponent {
}
