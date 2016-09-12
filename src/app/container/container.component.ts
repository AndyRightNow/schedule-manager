import {
  Component,
	Input
} from '@angular/core';

@Component({
  selector: 'sm-container',
  templateUrl: './container.component.html',
	styleUrls: ['./container.component.css']
})
export class ContainerComponent {
	//----------------------------
	// Width and height ratios relative
	// to the viewport
	//----------------------------
	@Input() widthRatio: number;
	@Input() heightRatio: number;
	@Input() center: Boolean;

  constructor() {  }
}