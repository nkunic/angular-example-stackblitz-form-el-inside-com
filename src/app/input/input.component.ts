import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() formGroup!: FormGroup;
  @Input() inputFormControlName!: any;
  @Input() inputId!: string;
  @Input() inputName!: string;
  @Input() inputType!: string;
  @Input() inputPlaceholder!: string;
}
