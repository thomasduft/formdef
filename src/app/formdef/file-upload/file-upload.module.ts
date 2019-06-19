import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileUploadComponent } from './file-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FileUploadComponent
  ],
  exports: [
    FileUploadComponent
  ]
})
export class FileUploadModule { }
