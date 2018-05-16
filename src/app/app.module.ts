import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import {CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    CanvasWhiteboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
