import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';
import { StudentComponent } from './student/student.component';
import { GamingComponent } from './gaming/gaming.component';
import { WorkstationComponent } from './workstation/workstation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatFormFieldModule,MatIconModule,SignUpComponent,RouterModule,CustomerViewComponent,AdminViewComponent,LoginComponent, HomeComponent,OfficeComponent,StudentComponent,GamingComponent,WorkstationComponent,DashboardComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecommerce';
}
