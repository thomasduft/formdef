import {
  SINGLE_SLOT,
  ARRAY_SLOT,
  Editor,
  Slot,
  TEXT_EDITOR,
  CHECKBOX_EDITOR,
  SELECT_EDITOR,
  NUMBER_EDITOR
} from './../formdef/index';

export class NestedSlot implements Slot {
  public static KEY = 'nested';

  public key = NestedSlot.KEY;
  public type = SINGLE_SLOT;
  public title = 'Nested';
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
        required: true,
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
        title: 'Address',
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
      },
      {
        key: 'phones',
        type: ARRAY_SLOT,
        title: 'Phones',
        editors: [
          {
            type: SELECT_EDITOR,
            name: 'type',
            label: 'Type',
            required: true,
            options: [
              { key: 'p', value: 'private' },
              { key: 'o', value: 'office' }
            ]
          },
          {
            type: TEXT_EDITOR,
            name: 'number',
            label: 'Number',
            required: true,
            size: 10
          }
        ],
        children: []
      }
    ];
  }
}
