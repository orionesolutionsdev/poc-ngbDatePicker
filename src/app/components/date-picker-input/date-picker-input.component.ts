import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker-input',
  templateUrl: './date-picker-input.component.html',
  styleUrls: ['./date-picker-input.component.scss'],
  standalone: true,
  imports: [FormsModule, NgbDatepickerModule]
})
export class DatePickerInputComponent {
  model!: NgbDateStruct;
  dateInput: string = '';

  onDateInputChange() {
    const currentYear = new Date().getFullYear();
    const dateParts = this.dateInput.split('-');

    if (dateParts.length === 2) {
      // If only month and day are provided, append the current year
      this.dateInput = `${dateParts[0]}-${dateParts[1]}-${currentYear}`;
    }

    // Validate the date format
    const isValidDate = /^\d{2}-\d{2}-\d{4}$/.test(this.dateInput);
    if (isValidDate) {
      const [month, day, year] = this.dateInput.split('-').map(Number);
      this.model = { year, month, day };
    } else {
      // Handle invalid date format
      console.error('Invalid date format');
    }
  }
} 