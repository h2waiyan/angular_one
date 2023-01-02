import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') sigupForm! : NgForm;

  username : string = '';

  genders = ['male', 'female'];

  name: string = '';
  mail : string = '';
  defaultsecretques = 'pet';
  secretans = 'U Mya';

  gender = 'male';

  constructor() { }

  ngOnInit(): void {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  submit(){
    console.log("Submitted");
    console.log(this.sigupForm.value);
  }

}
