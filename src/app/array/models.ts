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

export class ArraySlot implements Slot {
  public static KEY = 'arrayslot';

  public key = ArraySlot.KEY;
  public type = SINGLE_SLOT;
  public title = '';
  public editors: Editor[];
  public children: Slot[];

  public constructor() {
    this.editors = [
    ];
    this.children = [
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
          },
          {
            type: TEXT_EDITOR,
            name: 'description',
            label: 'Description',
            size: 200
          }
        ],
        children: []
      }
    ];
  }
}
