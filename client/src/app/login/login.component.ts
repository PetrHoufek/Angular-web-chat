import {Component, ViewChild, ElementRef} from '@angular/core';

//services
import {UserService, User} from '../shared/services//user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent{

    @ViewChild('inputRef') input:ElementRef;
    username: string;

    constructor(
        private userService: UserService
    ){

    }
    
    ngAfterViewInit() {
          this.input.nativeElement.focus();
    }

    login(){
        this.userService.createUser(this.username);
    }

}