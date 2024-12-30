import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePickerInputComponent } from './components/date-picker-input/date-picker-input.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePickerInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular15App';
}
