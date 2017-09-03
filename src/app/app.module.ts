import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NvD3Module } from 'ng2-nvd3';
import { ChartsModule } from 'ng2-charts';
import { MomentModule } from 'angular2-moment';
import {TranslateModule} from 'ng2-translate';
import { ParticlesModule } from 'angular-particle';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { MainComponent } from './components/main/main.component';
import { MainDetailComponent } from './components/main-detail/main-detail.component';
import { IndustryComponent } from './components/industry/industry.component';
import { SectorComponent } from './components/sector/sector.component';
import { LoginComponent } from './components/login/login.component';
import { IndustryDetailComponent } from './components/industry-detail/industry-detail.component';
import { SectorDetailComponent } from './components/sector-detail/sector-detail.component';
import { StockComponent } from './components/stock/stock.component';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component';
import { NewsComponent } from './components/news/news.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ApiComponent } from './components/api/api.component';
import { EconomicComponent } from './components/economic/economic.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { PhoneLoginComponent } from './components/phone-login/phone-login.component';

import { IndustryService } from './services/industry/industry.service';
import { SectorService } from './services/sector/sector.service';
import { StockService } from './services/stock/stock.service';
import { NewsService } from './services/news/news.service';
import { CurrencyService } from './services/currency/currency.service';
import { EconomicService } from './services/economic/economic.service';
import { ApiService } from './services/api/api.service';
import { UserService } from './services/user/user.service';
import { MessagingService } from './services/messaging/messaging.service';
import { WindowService } from './services/window/window.service';
import { AuthGuard } from './guards/auth.guard';
import * as firebase from 'firebase';
const configErrMsg = `You have not configured and imported the Firebase SDK.
Make sure you go through the codelab setup instructions.`;

const bucketErrMsg = `Your Firebase Storage bucket has not been enabled. Sorry
about that. This is actually a Firebase bug that occurs rarely. Please go and
re-generate the Firebase initialization snippet (step 4 of the codelab) and make
sure the storageBucket attribute is not empty. You may also need to visit the
Storage tab and paste the name of your bucket which is displayed there.`;
// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';

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
  {path: 'signup', component: SignupComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'phone-login', component: PhoneLoginComponent},
  {path: 'main', component: MainComponent, children: [
    { path: '', component: MainDetailComponent, outlet: 'main-detail'},
    { path: 'industry', component: IndustryComponent, outlet: 'main-detail' },
    { path: 'industry-detail/:id', component: IndustryDetailComponent, outlet: 'main-detail' },
    { path: 'sector', component: SectorComponent, outlet: 'main-detail' },
    { path: 'sector-detail/:id', component: SectorDetailComponent, outlet: 'main-detail' },
    { path: 'stock', component: StockComponent, outlet: 'main-detail' },
    { path: 'stock-detail/:id', component: StockDetailComponent, outlet: 'main-detail' },
    { path: 'news', component: NewsComponent, outlet: 'main-detail' },
    { path: 'currency', component: CurrencyComponent, outlet: 'main-detail' },
    { path: 'economic', component: EconomicComponent, outlet: 'main-detail' },
    { path: 'api', component: ApiComponent, canActivate: [AuthGuard], outlet: 'main-detail' }
  ]},
  {path: '**', redirectTo: 'not-found' }
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
    SectorDetailComponent,
    StockComponent,
    StockDetailComponent,
    NewsComponent,
    CurrencyComponent,
    ApiComponent,
    EconomicComponent,
    ForgetPasswordComponent,
    SignupComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule,
    NvD3Module,
    FormsModule,
    HttpModule,
    MomentModule,
    ChartsModule,
    ParticlesModule,
    TranslateModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [IndustryService, SectorService, StockService, NewsService, CurrencyService,
    EconomicService, ApiService, UserService, MessagingService, WindowService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
