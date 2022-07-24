import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AuthModule.forRoot({
          domain: 'dev-agtxkfyd.us.auth0.com',
          clientId: 'dEUVpRtFthLkOZrcSgaKKNkbG82fi4Ce'
        }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
