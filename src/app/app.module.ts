import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { Widget1ContentComponent } from './widget/widget1-content/widget1-content.component';
import { Widget2ContentComponent } from './widget/widget2-content/widget2-content.component';
import { WidgetBaseDirective } from './widget/widget-base';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    Widget1ContentComponent,
    Widget2ContentComponent,
    WidgetBaseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
