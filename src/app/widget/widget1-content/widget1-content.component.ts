import { Component } from '@angular/core';
import {Reloadable, WidgetContent} from "../wedget.intrafece";

@Component({
  selector: 'app-widget1-content',
  templateUrl: './widget1-content.component.html',
  styleUrls: ['../widget.component.scss']
})
export class Widget1ContentComponent implements WidgetContent, Reloadable{
  loading: boolean = false;
  title: string = 'Widget 1';

  reload(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
