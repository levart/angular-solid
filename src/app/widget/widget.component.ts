import {Component, Input} from '@angular/core';
import {ExportService} from "./export.service";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {

  constructor(
    private exporter: ExportService
  ) {
  }

  export() {
    this.exporter.export()
  }
}
