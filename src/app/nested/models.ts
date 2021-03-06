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
        type: SINGLE_SLOT,
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
        ],
        collapsed: true,
        children: []
      },
      {
        key: 'phones',
        type: ARRAY_SLOT,
        title: 'Phones',
        editors: [
          {
            type: SELECT_EDITOR,
            key: 'type',
            label: 'Type',
            required: true,
            options: [
              { key: 'p', value: 'private' },
              { key: 'o', value: 'office' }
            ]
          },
          {
            type: TEXT_EDITOR,
            key: 'number',
            label: 'Number',
            required: true,
            maxLength: 10
          }
        ],
        children: []
      }
    ];
  }
}
