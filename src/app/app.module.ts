import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    	{
    		path: '',
    		component: IndexComponent
    	},
    	{
    		path: 'register',
    		component: RegisterComponent
    	},
    	{
    		path: 'login',
    		component: LoginComponent
    	}
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
