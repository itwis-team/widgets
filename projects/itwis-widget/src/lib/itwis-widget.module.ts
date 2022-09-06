import { NgModule } from '@angular/core';
import { ItwisWidgetComponent } from './itwis-widget.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { CopyWrapperComponent } from './copy-wrapper/copy-wrapper.component';
import { ItwisDemosComponent } from './itwis-demos/itwis-demos.component';



@NgModule({
  declarations: [
    ItwisWidgetComponent,
    CopyWrapperComponent,
    ItwisDemosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    ItwisWidgetComponent,
    CopyWrapperComponent,
    ItwisDemosComponent
  ]
})
export class ItwisWidgetModule { }
