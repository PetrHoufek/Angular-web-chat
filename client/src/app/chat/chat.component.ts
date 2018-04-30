import {Component} from '@angular/core';

//services
import {MessengerService, Message} from '../shared/services/messenger.service';
import {UserService, User} from '../shared/services//user.service';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent{

    myMessage: string;
    messages: Message[] = [];
  
    constructor(
      private messengerService: MessengerService,
      private userService: UserService
    ){
  
    }
  
    ngOnInit(){
      this.messengerService.receive().subscribe((message: Message) => {
        this.messages.push(message);
      })
    }
  
    send(){
      if(this.myMessage && this.myMessage.trim() !== ''){
        this.messengerService.send(this.userService.getUser(), this.myMessage);
      }
      this.myMessage = '';
    }
  
    scroll(e: any){
      //todo
      //e.scrollIntoView();
    }

}