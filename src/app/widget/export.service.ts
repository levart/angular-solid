import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  export() {
    const data = {
      title: 'Angular Solid',
      description: 'Angular Solid is a library that provides Angular components for Solid.',
      url: ''
    };
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
  }
}
