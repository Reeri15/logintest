import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "404", component: NotfoundComponent},
    {path: "**", redirectTo: "/404", pathMatch: "full"}
];
