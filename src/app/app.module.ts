import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HideAfterDirective } from './hide-after.directive';
import { IfLoadedDirective } from './if-loaded.directive';

@NgModule({
  declarations: [
    AppComponent,
    HideAfterDirective,
    IfLoadedDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
