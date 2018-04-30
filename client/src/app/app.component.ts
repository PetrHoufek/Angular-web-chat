import { Component } from '@angular/core';

//services
import {UserService} from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(
    private userService: UserService
  ){

  }

}
