import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {getVersion, getBuildDate} from "@crestron/ch5-webxpanel"; 
import WebXPanel, {WebXPanelConfigParams, isActive, WebXPanelEvents} from "@crestron/ch5-webxpanel"; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { NumLockComponent } from './num-lock/num-lock.component';
import { ClockTimedComponent } from './clock-timed/clock-timed.component';
import { RoomListComponent } from './room-list/room-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

const configuration: Partial<WebXPanelConfigParams> = { 
  // host: '', // defaults to window.location.host
   ipId: '0x03' // string representing a hex value. Might contain "0x" or not. Defaults to "0x03"
  // roomId: 'virtual_control_room_id', // defaults to empty string
}; 

console.log(`WebXPanel version: ${getVersion()}`); 
console.log(`WebXPanel build date: ${getBuildDate()}`); 


const webXPanelFactory = () => () => {
   if (isActive) { 
     WebXPanel.initialize(configuration); 
   } 
} 

WebXPanel.addEventListener(WebXPanelEvents.LICENSE_WS, (detail : any) => { 
 const { 
   resourceAvailable, 
   controlSystemSupportsLicense, 
   licenseApplied, 
   licenseHasExpiry, 
   licenseDaysRemaining, 
   trialPeriod, 
   trialPeriodDaysRemaining, 
 } = detail; 
 console.log(detail);
 
 // other callback code 
}); 

WebXPanel.addEventListener(WebXPanelEvents.CONNECT_CIP, (detail :any) => { 
   const {url, ipId, roomId} = detail; 
   console.log(`Connected to ${url}, ${parseInt(ipId, 16)}, ${roomId}`); 
 }); 

@NgModule({
  declarations: [
    AppComponent,
    NumLockComponent,
    ClockTimedComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: './' },
    { provide: APP_INITIALIZER, useFactory: webXPanelFactory, multi: true },

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
