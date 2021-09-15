import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { ProjektComponent } from './projekte/projekt/projekt.component';
import { LebenslaufComponent } from './lebenslauf/lebenslauf.component';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
const routes:Routes = [
  {path: 'projekt/:id', component:ProjektComponent},
  { path: 'projekte',component: ProjekteComponent},
  {path : 'login' ,component:LoginComponent},
  {path : 'lebenslauf',component:LebenslaufComponent},

  { path: '**' ,component:ProjekteComponent}
]
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ProjekteComponent,
    ProjektComponent,
    LebenslaufComponent,

    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    MatChipsModule,
    MatCardModule,
    MatTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
