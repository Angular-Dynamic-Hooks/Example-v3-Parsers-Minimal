import { Injectable } from '@angular/core';
import { HookParser, HookValue, HookComponentData, HookBindings, ParseOptions } from 'ngx-dynamic-hooks';
import { ExampleComponent } from './example.component';

@Injectable({ 
  providedIn: 'root' 
})
export class ExampleParser implements HookParser {

  findHookElements(contentElement: any): any[] {
    // Return the elements to load the component into
    return Array.from(contentElement.querySelectorAll('some-element'));
  }

  loadComponent(): HookComponentData {
    // Return the component class
    return { component: ExampleComponent };
  }

  getBindings(): HookBindings {
    // Return inputs/outputs to set
    return {
      inputs: {
        message: 'Hello there!'
      }
    }
  }
}