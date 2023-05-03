import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() formGroup!: FormGroup;
  @Input() inputFormControlName!: any;

  @Input() inputId: string | undefined;
  @Input() inputName: string = '';

  @Input() inputType: 'text' | 'number' | undefined;

  inputValue: string | undefined;



  @Input() inputPlaceholder: string | undefined;

}
