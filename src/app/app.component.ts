import { Component } from '@angular/core';
import { DynamicHooksComponent } from 'ngx-dynamic-hooks';
import { ExampleParser } from './components/example/exampleParser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  content = 'Load a component here: <app-example></app-example>';
  parsers = [ExampleParser];
}