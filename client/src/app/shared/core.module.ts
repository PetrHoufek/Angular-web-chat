import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

//services
import {MessengerService} from './services/messenger.service';
import {UserService} from './services/user.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        MessengerService,
        UserService
    ],
    exports: [
        CommonModule,
        FormsModule
    ]
})
export class CoreModule{

}