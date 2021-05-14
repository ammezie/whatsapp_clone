import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {CometChat} from "@cometchat-pro/chat";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData : any = {}; user : any = {};
  constructor(
    private service: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  register() {

    this.service
    .register(this.registerData)
    .subscribe((response : any) => {

      this.user = response.data;
      this.getUser();
      localStorage.setItem('accessToken', response.data.accessToken);

      const uid = response.data.username.replace(/\s/g, '');
      this.registerComet();

    })
  }

   registerComet() {
      let user = JSON.parse(localStorage.getItem('user'));
      let name = user.username;
      let uid = name.replace(/\s/g, '')
      let data = {uid, name};

      this.service.registerCometChat(data)
          .subscribe(() => {
              this.cometLogin(uid);
          })
    }

    getUser() {
        localStorage.setItem('user', JSON.stringify(this.user));
    }

    cometLogin(uid) {
        const authKey = "6b5febba19a5805e4056a57d2054ba743a86b475";

        CometChat.login(uid, authKey).then(
            (user) => {
                console.log("Login Successful:", { user });
                this.router.navigate(["/"]);
            },
            (error) => {
                console.log("Login failed with exception:", { error });
            }
        );
    }
}
