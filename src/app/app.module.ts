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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'orderdetails', component: OrderDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    NavbarComponent,
    AdminComponent,
    OrderDetailsComponent
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
