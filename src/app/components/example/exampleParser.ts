import { Injectable } from '@angular/core';
import { HookParser, HookValue, HookComponentData, HookBindings, ParseOptions } from 'ngx-dynamic-hooks';
import { ExampleComponent } from './example.component';

@Injectable({ 
  providedIn: 'root' 
})
export class ExampleParser implements HookParser {

  findHookElements(contentElement: any, context: any, options: ParseOptions): any[] {
    // Return all <app-example> elements
    return Array.from(contentElement.querySelectorAll('app-example'));
  }

  loadComponent(hookId: number, hookValue: HookValue, context: any, childNodes: any[], options: ParseOptions): HookComponentData {
    // Return the component class
    return { component: ExampleComponent };
  }

  getBindings(hookId: number, hookValue: HookValue, context: any, options: ParseOptions): HookBindings {
    // Return inputs/outputs to set
    return {
      inputs: {
        message: 'Hello there!'
      }
    }
  }
}