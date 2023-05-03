import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: new FormControl(
        {
          value: '',
          disabled: false,
        },
        Validators.required
      ),
      email: new FormControl(
        {
          value: '',
          disabled: false,
        },
        [ 
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*") 
        ]
      ),
      age: new FormControl(
        {
          value: '',
          disabled: false,
        },
        [
          Validators.maxLength(3),
          Validators.required
        ]
      ),
    });
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      return;
    }
    console.log(this.myForm);
    console.log(this.myForm.value);
  }
}
