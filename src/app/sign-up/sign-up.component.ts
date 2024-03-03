import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
// import { MyuserlistService } from '../myuserlist.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyuserlistService } from '../myuserlist.service';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule, MatToolbarModule,MatButtonModule,HttpClientModule],
  providers:[HttpClient,MyuserlistService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  userform:FormGroup=new FormGroup(
    {
      fullname:new FormControl(''),
      username:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      acceptTerms:new FormControl(false)
    }
  )
  submitted=false
  constructor(public myclient:MyuserlistService,public fb:FormBuilder){
    
  }

  get f():{[key:string]:AbstractControl}{
    return this.userform.controls
  }
  ngOnInit(): void {
    
      this.userform=this.fb.group(
        {
          fullname:['',Validators.required],
          username:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)],],
          email:['',[Validators.required,Validators.email],],
          password:['',[Validators.required,Validators.minLength(6)],],
          acceptTerms:[false,Validators.requiredTrue]
        }
      )

  }

  OnSubmit()
  {    
    this.submitted=true
       if(this.userform.invalid)
       {
        return
       }
       else{
        let user = this.userform.value;
        this.myclient.saveData(user).subscribe(result => {})
       }
  }
  
  OnReset()
  {
    this.userform.reset()
    this.submitted=false
  }

}
