import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { BackgroundService } from './../../public/services/background.service';
import { FormsModule } from '@angular/forms';
import { ClampPipe } from './../shared/pipes/clamp.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent, ContainerComponent, ClampPipe
  ],
  bootstrap: [ AppComponent ],
  providers: [BackgroundService]
})

export class AppModule { }
