import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public validationMessages = {

    full_name: [
      { type: 'required', message: 'The full name is required' },
      { type: 'minlength', message: 'The full name must be more than 10 characters' },
      { type: 'pattern', message: 'The full name format is invalid' }
    ],

    email: [
      { type: 'required', message: 'The email is required' },
      { type: 'email', message: 'The email format is invalid' }
    ],

    phone: [
      { type: 'required', message: 'The phone is required' },
    ],

    age: [
      { type: 'min', message: 'The age must be more than 17' },
      { type: 'max', message: 'The age must be minor or equal than 100' },
    ],

  }

  constructor() { }
}
