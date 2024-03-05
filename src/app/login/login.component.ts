import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyuserlistService } from '../myuserlist.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule, MatToolbarModule, 
    MatButtonModule,MatInputModule,
    MatFormFieldModule,
    ],
  providers: [HttpClientModule, HttpClient, MyuserlistService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  usersdata: any = ""
  submitted = false

  userform: FormGroup = new FormGroup(
    {

      username: new FormControl(''),

      password: new FormControl('')
    }
  )

  constructor(public myclient: MyuserlistService, public fb: FormBuilder, private router:Router) {

  }

  get f(): { [key: string]: AbstractControl } {
    return this.userform.controls
  }
  ngOnInit(): void {

    this.userform = this.fb.group(
      {

        username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)],],
        password: ['', [Validators.required, Validators.minLength(6)],]

      }
    )

    this.getData()


  }

  OnSubmit() {
    this.submitted = true
    if (this.userform.invalid) {
      return
    }
    else {
        // let user = this.userform.value;
        // this.myclient.checkData(user).subscribe(result => {})

      const enteredUsername = this.userform.value.username;
      const enteredPassword = this.userform.value.password;

      // Find the user in the usersdata array based on the entered username
      const user = this.usersdata.find((userdata_single: any) => userdata_single.username === enteredUsername);
      console.log("before if conndition")
      if  (typeof user !== 'undefined' && user.username ===enteredUsername && user.password === enteredPassword ) {
        // Authentication successful
        // console.log('Login successful');
        // You can perform additional actions like redirecting to another page
        console.log("inside if conndition")
        if(user.isadmin===false)
        {
          this.router.navigate(['/CustomerView']);
        }
        else{
          
          this.router.navigate(['/AdminView']);
        }
        
        console.log("exiting if conndition")
      } 
      else{
        // Authentication failed
        // console.log('Invalid username or password');
        // GO TO SignUP

          console.log("inside else")
          this.router.navigate(['/SignUp'])
        
      }

    }

  }

  getData() {
    this.myclient.getData().subscribe(result => { this.usersdata = result 
      this.usersdata=this.usersdata.userlist_data})
      console.log(this.usersdata)
  }

  OnReset() {
    this.userform.reset()
    this.submitted = false
  }

  navigateToSignUp()
  {
    this.router.navigate(['/SignUp'])
  }



}
