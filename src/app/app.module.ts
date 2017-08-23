import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MainDetailComponent } from './components/main-detail/main-detail.component';
import { IndustryComponent } from './components/industry/industry.component';
import { SectorComponent } from './components/sector/sector.component';
import { LoginComponent } from './components/login/login.component';
import { IndustryDetailComponent } from './components/industry-detail/industry-detail.component';
import { SectorDetailComponent } from './components/sector-detail/sector-detail.component';

const configErrMsg = `You have not configured and imported the Firebase SDK.
Make sure you go through the codelab setup instructions.`;

const bucketErrMsg = `Your Firebase Storage bucket has not been enabled. Sorry
about that. This is actually a Firebase bug that occurs rarely. Please go and
re-generate the Firebase initialization snippet (step 4 of the codelab) and make
sure the storageBucket attribute is not empty. You may also need to visit the
Storage tab and paste the name of your bucket which is displayed there.`;


if (!environment.firebase) {
  if (!environment.firebase.apiKey) {
    window.alert(configErrMsg);
  } else if (environment.firebase.storageBucket === '') {
    window.alert(bucketErrMsg);
  }
}

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent ,children: [
    { path: '', component: MainDetailComponent, outlet: 'main-detail'},
    { path: 'industry', component: IndustryComponent, outlet: 'main-detail' },
    { path: 'industry-detail/:id', component: IndustryDetailComponent, outlet: 'main-detail' },
    { path: 'sector', component: SectorComponent, outlet: 'main-detail' },
    { path: 'sector-detail/:id', component: SectorDetailComponent, outlet: 'main-detail' }
  ]},
  { path: '**', redirectTo: 'not-found' }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MainDetailComponent,
    IndustryComponent,
    SectorComponent,
    IndustryDetailComponent,
    SectorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'stockthai'),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
