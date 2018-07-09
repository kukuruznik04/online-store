import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SecurityModule } from './modules/security/security.module';
import { HomeModule } from './modules/home/home.module';
import { LandingNavbarComponent } from './components/landing-navbar/landing-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingNavbarComponent
  ],
  imports: [
    BrowserModule,
    SecurityModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
