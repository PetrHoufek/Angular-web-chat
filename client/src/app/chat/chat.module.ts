import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ChatComponent, MessageComponent} from './index';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ChatComponent,
        MessageComponent
    ],
    exports: [
        ChatComponent
    ]
})
export class ChatModule{

}