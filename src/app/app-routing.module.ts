import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReceptaiListComponent} from "./receptai-list/receptai-list.component";
import {PlanComponent} from "./plan/plan.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AddReceptasComponent} from "./add-receptas/add-receptas.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'receptai-list', component: ReceptaiListComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'upload', component: AddReceptasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
