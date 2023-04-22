import {Directive, Input} from '@angular/core';
import {ExportService} from "./export.service";

@Directive()
export class WidgetBase {
  @Input() title?: string;

  constructor(
    private exporter: ExportService
  ) {
  }

  export(): void {
    this.exporter.export()
  }
}
