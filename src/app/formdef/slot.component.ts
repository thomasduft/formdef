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
  template: `
  <h3>{{ slot.title }}</h3>
  <ng-container *ngIf="slot.editors && slot.editors.length > 0">
    <tw-editor *ngFor="let editor of slot.editors" 
               [editor]="editor" 
               [parentForm]="parentForm">
    </tw-editor>
  </ng-container>
  <ng-container *ngIf="slot.children && slot.children.length > 0">
    <div *ngFor="let child of slot.children">
      <ng-container *ngIf="child.type === 'single'">
        <tw-slot [slot]="child" [parentForm]="parentForm.get(child.key)">
        </tw-slot>
      </ng-container>
      <ng-container *ngIf="child.type === 'array'">
        <tw-arrayslot [slot]="child" [parentForm]="parentForm">
        </tw-arrayslot>
      </ng-container>
    </div>
  </ng-container>
  `
})
export class SlotComponent {
  @Input()
  public slot: Slot;

  @Input()
  public parentForm: FormGroup;
}
