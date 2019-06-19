import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tw-file-upload',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true
    }
  ],
  template: `<input type="file" (change)="onFileChange($event.target.files)" />`
})
export class FileUploadComponent implements ControlValueAccessor {
  private value: File;

  public onChange = (_: any) => { };
  public onTouched = () => { };

  public onFileChange(files: FileList): void {
    if (files[0]) {
      this.value = files[0];
      this.onChange(this.value);
    }
  }

  // ControlValueAccessr interface
  writeValue(value: any) { }
  registerOnChange(fn: (_: any) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
}
