import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

//components
import { AppComponent } from './app.component';

//modules
import {CoreModule} from './shared/core.module';
import {ChatModule} from './chat/chat.module';
import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    ChatModule,
    LoginModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
