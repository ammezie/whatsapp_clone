import { Component, OnInit } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.users()
  }

  users() {
    let users = new CometChat.UsersRequestBuilder().setLimit(30).build();
    console.log(users);
    
  }

}
