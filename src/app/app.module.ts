import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UIRouterModule } from '@uirouter/angular';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { NestComponent } from './nest/nest.component';

const STATES = [
  { name: 'hello', url: '/hello', component: HelloComponent },
  { name: 'world', url: '/world', component: WorldComponent },
  { name: 'world.nest', url: '/nest', component: NestComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WorldComponent,
    NestComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states: STATES }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
