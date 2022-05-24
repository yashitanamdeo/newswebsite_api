import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';

// for google authentication
import { ReactiveFormsModule } from '@angular/forms';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    EntertainmentnewsComponent,
    HealthnewsComponent,
    SciencenewsComponent,
    SportsnewsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule,
  ],
  providers: [
    NewsapiservicesService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '774241408642-8tc4pbb7clg6ecb7kj5qkupi02ss2j6e.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
