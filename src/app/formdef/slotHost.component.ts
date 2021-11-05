import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ComponentRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {
  FormGroup
} from '@angular/forms';

import { Slot, SINGLE_SLOT, BaseSlotComponent } from './models';
import { SlotComponentRegistry } from './slotComponentRegistry.service';

@Component({
  selector: 'tw-slothost',
  template: `<ng-template #slotContent></ng-template>`
})
export class SlotHostComponent implements OnInit, OnDestroy {
  private componentRef: ComponentRef<BaseSlotComponent>;

  @Input()
  public slot: Slot;

  @Input()
  public form: FormGroup;

  @ViewChild('slotContent', { read: ViewContainerRef, static: true })
  protected slotContent: ViewContainerRef;

  public constructor(
    private registry: SlotComponentRegistry
  ) { }

  public ngOnInit(): void {
    if (this.slot) {
      const slotType = this.slot.type ? this.slot.type : SINGLE_SLOT;
      const context = this.registry.get(slotType);

      if (context) {
        this.componentRef = this.slotContent
          .createComponent<BaseSlotComponent>(context.component);

        // @Input bindings
        this.componentRef.instance.slot = this.slot;
        this.componentRef.instance.form = this.form;
      }
    }
  }

  public ngOnDestroy(): void {
    if (this.componentRef) {
      delete this.componentRef.instance.slot;
      delete this.componentRef.instance.form;

      this.componentRef.destroy();
    }
  }
}
