import { Component, OnInit } from '@angular/core';

import { BaseSlotComponent, Slot } from './models';

@Component({
  selector: 'tw-slot',
  template: `
  <ng-container *ngIf="slot.editors && slot.editors.length > 0">
    <fieldset>
      <legend (click)="toggle()">{{ slot.title }}</legend>
      <ng-container *ngIf="!collapsed">
        <tw-editor
          *ngFor="let editor of slot.editors"
          [editor]="editor"
          [form]="form">
        </tw-editor>
      </ng-container>
    </fieldset>
  </ng-container>
  <ng-container *ngIf="slot.children && slot.children.length > 0">
    <ng-container *ngFor="let child of slot.children; trackBy: trackBySlotKey">
      <tw-slothost
        [slot]="child"
        [form]="form.get(child.key)">
      </tw-slothost>
    </ng-container>
  </ng-container>`
})
export class SlotComponent extends BaseSlotComponent implements OnInit {
  public collapsed = false;

  public ngOnInit(): void {
    if (this.slot.collapsed) {
      this.collapsed = this.slot.collapsed;
    }
  }

  public toggle(): void {
    this.collapsed = !this.collapsed;
  }

  public trackBySlotKey(_index: any, item: Slot) {
    if (!item) { return null; }

    return item.key;
  }
}
