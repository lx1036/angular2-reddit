import { Component, OnInit } from '@angular/core';
import { User } from './signup.interface';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  user: User = {
    name: 'Angular',
    account: {
      email: '',
      confirm: ''
    }
  };
  
  constructor() { }

  ngOnInit() {
  }
  
  onSubmit({value, valid}: {value: User, valid: boolean}) {
    console.log(value, valid);
  }

}
