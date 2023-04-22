import {Component, Input} from '@angular/core';
import {ExportService} from "./export.service";
import {WidgetBase} from "./widget-base";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent extends WidgetBase{

  override export() {
    super.export();

  }
}
