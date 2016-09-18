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
	// Width and height of the container
	//----------------------------
	@Input() width: number;
	@Input() height: number;

  constructor() { }

	ngOnInit() {
	}
}