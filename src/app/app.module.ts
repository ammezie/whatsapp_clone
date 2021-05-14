import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/layouts/default/default.component';
import { BlankComponent } from './components/layouts/blank/blank.component';
import { SideNavComponent } from './components/partials/side-nav/side-nav.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { StartComponent } from './components/pages/start/start.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CometChatUserListWithMessages } from 'src/cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/angular-chat-ui-kit/src/components/Users/CometChat-user-list-with-messages/cometchat-user-list-with-messages.module';
import { CometChatUI } from 'src/cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/angular-chat-ui-kit/src/components/CometChatUI/CometChat-Ui/cometchat-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    BlankComponent,
    SideNavComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CometChatUserListWithMessages,
    CometChatUI
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
