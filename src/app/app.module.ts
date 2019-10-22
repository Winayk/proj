import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventBinding1Component } from './event-binding1/event-binding1.component';
import {RouterModule, Routes} from '@angular/router';
import { EmiterComponent } from './emiter/emiter.component';
import { DirifswitchforComponent } from './dirifswitchfor/dirifswitchfor.component';

const routes: Routes = [
  { path: 'event1', component: EventBinding1Component },
  { path: 'emit', component: EmiterComponent },
  
]

@NgModule({
  declarations: [
    AppComponent,
    EventBinding1Component,
    EmiterComponent,
    DirifswitchforComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
