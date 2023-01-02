import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {

  constructor() { }

  genders = ['Male', 'Female']

  // nested form
  signupform = new FormGroup({
    userdata : new FormGroup({
      username : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.email]),
    }),
    gender : new FormControl(''),
    hobbies : new FormArray([])
  })

  ngOnInit(): void {
  }

  signup(){
    console.log(this.signupform.value);
  }
  addHobby(){
    const control = new FormControl('', Validators.required);
    (<FormArray>this.signupform.get('hobbies')).push(control)
  }

  getControls() {
    return (this.signupform.get('hobbies') as FormArray).controls;
  }

  // get controls(){
  //   return (<FormArray>this.signupform.get('hobbies')).controls;
  // }

}
