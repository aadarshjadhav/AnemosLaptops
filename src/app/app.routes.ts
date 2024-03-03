import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GamingComponent } from './gaming/gaming.component';
import { OfficeComponent } from './office/office.component';
import { WorkstationComponent } from './workstation/workstation.component';
import { StudentComponent } from './student/student.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

    {path:'SignUp',component:SignUpComponent},
    {path:'CustomerView',component:CustomerViewComponent},
    {path:'AdminView',component:AdminViewComponent},
    {path:'Login',component:LoginComponent},
    {path:'Home',component:HomeComponent},
    {path:'Gaming', component:GamingComponent},
    {path:'Office',component:OfficeComponent},
    {path:'Workstation',component:WorkstationComponent},
    {path:'Student',component:StudentComponent},
    {path:'Dashboard',component:DashboardComponent},
    {path:'',redirectTo:'Home',pathMatch:'full'}
    
];
