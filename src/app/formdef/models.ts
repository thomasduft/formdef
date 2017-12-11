export const TEXT_EDITOR = 'text';
export const PASSWORD_EDITOR = 'password';
export const RADIO_EDITOR = 'radio';
export const CHECKBOX_EDITOR = 'checkbox';
export const DATE_EDITOR = 'date';
export const NUMBER_EDITOR = 'number';
export const RANGE_EDITOR = 'range';
export const TIME_EDITOR = 'time';
export const SELECT_EDITOR = 'select';

export interface Editor {
  type: string;
  name: string;
  label: string;
  value?: any;
}

export const SINGLE_SLOT = 'single';
export const ARRAY_SLOT = 'array';

export interface Slot {
  key: string;
  type: string;
  editors: Array<Editor>;
  children: Array<Slot>;
}
