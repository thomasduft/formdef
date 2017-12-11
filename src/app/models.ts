import { SINGLE_SLOT, Editor, Slot, TEXT_EDITOR, CHECKBOX_EDITOR } from './formdef/index';

export class ContactSlot implements Slot {
  public static KEY = 'contactslot';

  public key = ContactSlot.KEY;
  public type = SINGLE_SLOT;
  public editors: Editor[];
  public children: Slot[];

  public constructor() {
    this.editors = [
      {
        type: TEXT_EDITOR,
        name: 'surname',
        label: 'Surname'
      },
      {
        type: TEXT_EDITOR,
        name: 'lastname',
        label: 'Last name'
      },
      {
        type: CHECKBOX_EDITOR,
        name: 'select',
        label: 'Use as default'
      }
    ];
    this.children = [
      {
        key: 'address',
        type: SINGLE_SLOT,
        editors: [
          {
            type: TEXT_EDITOR,
            name: 'street',
            label: 'Street'
          },
          {
            type: TEXT_EDITOR,
            name: 'zip',
            label: 'Zip'
          }
        ],
        children: []
      }
    ];
  }
}
