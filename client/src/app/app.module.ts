import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UploadService } from './upload/upload.service';
import { UploadComponent } from './upload/upload.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    SharedModule,RouterModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
