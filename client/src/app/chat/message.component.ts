import {Component, Input} from '@angular/core';

//services
import {UserService} from '../shared/services/user.service';
import {Message} from '../shared/services/messenger.service';

@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent{

    @Input() message: Message;

    styles: any;

    constructor(
        private userService: UserService
    ){

    }

    ngOnInit(){
        this.styles = {
            'background-color': this.message.user.color
        };
    }

    isOtherUser(): boolean{
        return this.userService.getUser().id === this.message.user.id;
    }

}