import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceptaiComponent } from './receptai/receptai.component';
import { ReceptaiListComponent } from './receptai-list/receptai-list.component';
import { PlanComponent } from './plan/plan.component';
import { LoginComponent } from './login/login.component';
import {ReceptaiService} from "./service/receptai-service";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./service/auth-service";
import {StorageService} from "./service/storage-service";
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { AddReceptasComponent } from './add-receptas/add-receptas.component';
import {ProduktasService} from "./service/produktas-service";

@NgModule({
  declarations: [
    AppComponent,
    ReceptaiComponent,
    ReceptaiListComponent,
    PlanComponent,
    LoginComponent,
    RegisterComponent,
    AddReceptasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ReceptaiService,
    StorageService,
    AuthService,
    ProduktasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
