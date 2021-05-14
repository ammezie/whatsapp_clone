import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { CometChat } from "@cometchat-pro/chat";

if (environment.production) {
  enableProdMode();
}

const appID = "33172a66e955908";
const region = "us";
const appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(region)
    .build();
CometChat.init(appID, appSetting).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now call login function.
      platformBrowserDynamic()
          .bootstrapModule(AppModule)
          .catch((err) => console.error(err));
    },
    (error) => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
);