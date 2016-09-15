import {
  Component,
  AfterViewInit,
  Input
} from '@angular/core';
import {
  BackgroundService
} from './../../public/services/background.service';

// CSS
import './../../public/css/styles.css';
import './../../public/css/normalize.css';

@Component({
  selector: 'sm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  private canvasWidth: number;
  private canvasHeight: number;
  private canvasId: string;

  /*
   * Constructor
   *  
   * @param {BackgroundService} _backgroundService: Service to generate the background
   */
  constructor(private backgroundService: BackgroundService) {
    // Set size of the background to fit the window
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    // Init canvas id
    this.canvasId = 'background';
  }

  /*
   * AfterViewInit Lifecycle Hook Function 
   *  
   */
  ngAfterViewInit() {
    //------------------------------
    // Init the background service with
    // default parameters
    //------------------------------
    this.backgroundService.init({
      canvasId: this.canvasId,
      mode: 'Polygonal',
      density: {
        x: 0.7,
        y: 0.6
      },
      baseColors: ['#4183d7', '#26A65B', '#663399'],
      isMixed: false
    });
    // Generate the background
    this.backgroundService.generate();
  }

  /*
   * onResize function called every time the window gets resized
   * 
   * @param {any} event: The event
   */
  onResize(event: any) {
    this.backgroundService.generate();
  }
}