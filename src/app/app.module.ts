import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BackgroundService } from './../../public/services/background.service';
import { FormsModule } from '@angular/forms';
import { ClampPipe } from './../../public/pipes/clamp.pipe';
import { ContainerComponent } from './container/container.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ScheduleContainerComponent } from './schedule-container/schedule-container.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ContainerComponent,
    MenuBarComponent,
    ScheduleContainerComponent,
    ClampPipe,
  ],
  bootstrap: [ AppComponent ],
  providers: [BackgroundService]
})

export class AppModule { }
