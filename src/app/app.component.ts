import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder, } from '@angular/forms';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Declare a form
  form!: FormGroup;

  constructor(
    // import the form builder
    private formBuilder: FormBuilder,
    public utilsService: UtilsService,
  ) {
    // build the form
    this.buildForm();
  }

  // declare getters for each field
  get fullNameField() {
    return this.form?.get('fullName');
  }

  // get state of a field if was touched or modified
  get fullNameFieldDirty() {
    return this.fullNameField?.dirty || this.fullNameField?.touched;
  }

  get emailField() {
    return this.form?.get('email');
  }

  get emailFieldDirty() {
    return this.emailField?.dirty || this.emailField?.touched;
  }

  get phoneField() {
    return this.form?.get('phone');
  }

  get phoneFieldDirty() {
    return this.phoneField?.dirty || this.phoneField?.touched;
  }

  get ageField() {
    return this.form?.get('age');
  }

  get ageFieldDirty() {
    return this.ageField?.dirty || this.ageField?.touched;
  }

  // create the form
  private buildForm() {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      age: [18, [Validators.min(18), Validators.max(100)]],
    });
  }

  saveUser(event: any) {
    console.log(this.form.value);
  }

}
