import { Component, AfterViewInit } from '@angular/core';
import './../../public/css/styles.css';
import './../../public/css/normalize.css';
import { BackgroundService } from './../../public/services/background.service';

@Component({
  selector: 'sm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit { 
  private _canvasWidth: number;
  private _canvasHeight: number;
  private _canvasId: string;

  /*
   * Update size of the background to fit the window
   */
  private _updateBackgroundSize() {
    this._canvasWidth = window.innerWidth;
    this._canvasHeight = window.innerHeight;
  }

  /*
   * Constructor
   *  
   * @param {BackgroundService} _backgroundService: Service to generate the background
   */
  constructor(private _backgroundService: BackgroundService) {
    this._updateBackgroundSize();
    // Init canvas id
    this._canvasId = 'background';
  }

  /*
   * AfterViewInit Lifecycle Hook Function 
   *  
   */
  ngAfterViewInit(){
    //------------------------------
    // Init the background service with
    // default parameters
    //------------------------------
    this._backgroundService.init({
      canvasId: this._canvasId,
      mode: 'Polygonal',
      density: {
        x: 0.7, y: 0.6
      },
      baseColors: ['#4183d7', '#26A65B', '#663399'],
      isMixed: false
    });
    // Generate the background
    this._backgroundService.generate();
  }
  
  /*
   * onResize function called every time the window gets resized
   * 
   * @param {any} event: The event
   */
  onResize(event: any) {
    this._backgroundService.generate();
  }
}
