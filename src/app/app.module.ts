import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { BackgroundService } from './../../public/services/background.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, ContainerComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [BackgroundService]
})

export class AppModule { }
