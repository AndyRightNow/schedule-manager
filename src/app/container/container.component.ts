import {
  Component,
	Input,
	OnInit
} from '@angular/core';

@Component({
  selector: 'sm-container',
  templateUrl: './container.component.html',
	styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
	//----------------------------
	// Width and height ratios relative
	// to the viewport
	//----------------------------
	@Input() widthRatio: number;
	@Input() heightRatio: number;

	//---------------------------------
	// Upper and lower bounds of
	// width and height ratios
	//---------------------------------
	private ratioLower: number = 0.4;
	private ratioUpper: number = 0.95;

  constructor() { }

	ngOnInit() {
		//---------------------------------
		// Set default values
		//---------------------------------
		this.widthRatio = this.widthRatio || 0.8;
		this.heightRatio = this.heightRatio || 0.8;
	}
}