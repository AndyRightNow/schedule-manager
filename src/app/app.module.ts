import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BackgroundService } from './../../public/services/background.service';
import { FormsModule } from '@angular/forms';
import { ClampPipe } from './../../public/pipes/clamp.pipe';
import { ContainerComponent } from './container/container.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { EventComponent } from './event/event.component';
import { ScheduleContainerComponent } from './schedule-container/schedule-container.component';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
import { FaComponent } from 'angular2-fontawesome/components';
import { DataService } from './../../public/services/data.service';
import { MenuService } from './../../public/services/menu.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [
    AppComponent,
    ContainerComponent,
    MenuBarComponent,
    ScheduleContainerComponent,
    ClampPipe,
    FaComponent,
    EventComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    BackgroundService, 
    MdIconRegistry,
    DataService,
    MenuService
  ]
})

export class AppModule { }
