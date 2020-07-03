import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { StudentDetailComponent, ActionComponent } from './student-detail/student-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutesService } from './services/routes.service';
import { MaterialElevationDirective } from './material-elevation.directive';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { RestService } from './services/rest.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ListComponent,
    ActionComponent,
    CreateComponent,
    StudentDetailComponent,
    MaterialElevationDirective,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MaterialModule,
    BrowserAnimationsModule, RouterModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,FlexLayoutModule
  ],
  providers: [AuthService, RestService, RoutesService],
  entryComponents: [StudentDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private readonly router: Router,
    private routes: RoutesService
  ) {
    router.events
      .subscribe((event: RouterEvent) => {
        if (event instanceof NavigationEnd) {
          this.routes.setRoute(event.url);
        }
      });
  }
}
