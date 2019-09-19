import {
  SINGLE_SLOT,
  Editor,
  Slot,
  TEXT_EDITOR,
  CHECKBOX_EDITOR,
  SELECT_EDITOR,
  NUMBER_EDITOR,
  DATE_EDITOR,
  FILE_EDITOR
} from './../formdef/index';

export class CustomSlot implements Slot {
  public static KEY = 'customslot';

  public key = CustomSlot.KEY;
  public type = SINGLE_SLOT;
  public title = 'Custom slot';
  public editors: Editor[];
  public children: Slot[];

  public constructor() {
    this.editors = [
      {
        type: TEXT_EDITOR,
        key: 'surname',
        label: 'Surname',
        required: true
      },
      {
        type: TEXT_EDITOR,
        key: 'lastname',
        label: 'Last name',
        maxLength: 20
      },
      {
        type: CHECKBOX_EDITOR,
        key: 'isDefault',
        label: 'Use as default'
      },
      {
        type: SELECT_EDITOR,
        key: 'gender',
        label: 'Gender',
        required: true,
        options: [
          { key: 'm', value: 'male' },
          { key: 'f', value: 'female' }
        ]
      },
      {
        type: NUMBER_EDITOR,
        key: 'year',
        label: 'Year',
        required: true,
        min: 1900,
        max: 2100
      },
    ];
    this.children = [
      {
        key: 'address',
        type: CustomSlot.KEY,
        title: 'Address',
        editors: [
          {
            type: TEXT_EDITOR,
            key: 'street',
            label: 'Street'
          },
          {
            type: TEXT_EDITOR,
            key: 'zip',
            label: 'Zip'
          }
        ]
      }
    ];
  }
}
