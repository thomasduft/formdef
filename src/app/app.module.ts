import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SimpleModule } from './simple/simple.module';
import { NestedModule } from './nested/nested.module';
import { ArrayModule } from './array/array.module';
import { CustomModule } from './custom/custom.module';

import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [
    BrowserModule,
    SimpleModule,
    NestedModule,
    ArrayModule,
    CustomModule,
    RouterModule.forRoot([
    { path: '', redirectTo: 'simple', pathMatch: 'full' },
    { path: 'simple', component: SimpleComponent }
], {})
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
