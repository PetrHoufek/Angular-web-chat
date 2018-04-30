import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';

//services
import {User} from './user.service';

export class Message{
    constructor(
        public user: User,
        public message: string
    ){

    }
}

export class MessengerService{

    url: string = 'http://localhost:3000';
    socket: SocketIOClient.Socket;

    //ngOnInit works only with components/directives
    constructor(){
        this.init();
    }

    init(){
        this.socket = io(this.url);
    }

    send(user: User, message: string){
        this.socket.emit('newMessage', new Message(user, message));
    }

    receive(): Observable<any>{
        return new Observable((observer) => {
            this.socket.on('newMessage', (message) => {
                observer.next(message);
            });
        });
    }

}