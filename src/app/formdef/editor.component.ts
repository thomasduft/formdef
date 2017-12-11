import {
  Component,
  Input
} from '@angular/core';
import {
  FormGroup
} from '@angular/forms';

import { Editor } from './models';

@Component({
  selector: 'tw-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent {
  @Input()
  public editor: Editor;

  @Input()
  public parentForm: FormGroup;
}
