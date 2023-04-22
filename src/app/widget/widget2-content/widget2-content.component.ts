import { Component } from '@angular/core';
import {WidgetContent} from "../wedget.intrafece";

@Component({
  selector: 'app-widget2-content',
  templateUrl: './widget2-content.component.html',
  styleUrls: ['../widget.component.scss']
})
export class Widget2ContentComponent implements WidgetContent{
  title: string = 'Widget 2';
}
