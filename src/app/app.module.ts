import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { RouterLink } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import {MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component'
import { AdminComponent } from './admin/admin.component'
import { OrderDetailsComponent } from './orderdetails/orderdetails.component'
import { ReturnStep1Component } from './returnstep1/returnstep1.component'
import { ReturnStep2Component } from './returnstep2/returnstep2.component'
import { ReturnStep3Component } from './returnstep3/returnstep3.component'
import { ConfirmComponent } from './confirm/confirm.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'orderdetails', component: OrderDetailsComponent },
  { path: 'cancelReturn', component: OrderDetailsComponent },
  { path: 'returnstep1', component: ReturnStep1Component },
  { path: 'returnstep2', component: ReturnStep2Component },
  { path: 'returnstep3', component: ReturnStep3Component },
  { path: 'confirm', component: ConfirmComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    NavbarComponent,
    AdminComponent,
    OrderDetailsComponent,
    ReturnStep1Component,
    ReturnStep2Component,
    ReturnStep3Component,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CollapseModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
