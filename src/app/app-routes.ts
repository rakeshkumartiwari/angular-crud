import { Routes } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

export const appRoute: Routes = [
    { path: 'list', component: ListEmployeesComponent },
    { path: 'create', component: CreateEmployeeComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' }

];
