import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MsAdalAngular6Module, AuthenticationGuard} from 'microsoft-adal-angular6';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';


export function getAdalConfig() {
  return {
      tenant: '23b1af9d-4459-465e-86c7-96a64dab5568',
      clientId: '49498562-1153-4cbe-a3ca-bcd4898006ed',
      redirectUri: window.location.origin,
      endpoints: { 
        "https://localhost/Api/": "xxx-bae6-4760-b434-xxx",
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage',
    };
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserInfoComponent
  ],
  imports: [
    MsAdalAngular6Module . forRoot ( getAdalConfig ) ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
