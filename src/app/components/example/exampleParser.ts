import { Injectable } from '@angular/core';
import { HookParser, HookValue, HookComponentData, HookBindings } from 'ngx-dynamic-hooks';
import { ExampleComponent } from './example.component';

@Injectable({ 
  providedIn: 'root' 
})
export class ExampleParser implements HookParser {

  public findHookElements(contentElement: any, context: any): any[] {
    // Return all <app-example> elements
    return Array.from(contentElement.querySelectorAll('app-example'));
  }

  public loadComponent(hookId: number, hookValue: HookValue, context: any, childNodes: any[]): HookComponentData {
    // Return the component class
    return { component: ExampleComponent };
  }

  public getBindings(hookId: number, hookValue: HookValue, context: any): HookBindings {
    // Return inputs/outputs to set
    return {
      inputs: {
        message: 'Hello there!'
      }
    }
  }
}