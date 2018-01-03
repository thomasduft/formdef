import {
  SINGLE_SLOT,
  ARRAY_SLOT,
  Editor,
  Slot,
  TEXT_EDITOR,
  CHECKBOX_EDITOR,
  SELECT_EDITOR,
  NUMBER_EDITOR,
  DATE_EDITOR
} from './../formdef/index';

export class SimpleSlot implements Slot {
  public static KEY = 'simpleslot';

  public key = SimpleSlot.KEY;
  public type = SINGLE_SLOT;
  public title = 'Simple';
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
      {
        type: DATE_EDITOR,
        name: 'birthday',
        label: 'Birthday',
        required: true
      },
    ];
    this.children = [ ];
  }
}
