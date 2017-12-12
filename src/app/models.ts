import {
  SINGLE_SLOT,
  Editor,
  Slot,
  TEXT_EDITOR,
  CHECKBOX_EDITOR,
  SELECT_EDITOR,
  NUMBER_EDITOR
} from './formdef/index';

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
        label: 'Surname',
        required: true
      },
      {
        type: TEXT_EDITOR,
        name: 'lastname',
        label: 'Last name',
        size: 20
      },
      {
        type: CHECKBOX_EDITOR,
        name: 'isDefault',
        label: 'Use as default'
      },
      {
        type: SELECT_EDITOR,
        name: 'gender',
        label: 'Gender',
        required: false,
        options: [
          { key: 'm', value: 'male' },
          { key: 'f', value: 'female' }
        ]
      },
      {
        type: NUMBER_EDITOR,
        name: 'year',
        label: 'Year',
        required: true,
        valueMin: 1900,
        valueMax: 2100
      },
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
