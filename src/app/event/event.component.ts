import {
  Component,
	Input,
	OnInit
} from '@angular/core';
import { smEvent } from './../../../public/classes/smEvent';

@Component({
  selector: 'sm-event',
  templateUrl: './event.component.html',
	styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
	@Input() event: smEvent;
	private isTitleEditing: boolean = true;
	private isDescEditing: boolean = true;
	private isStartTimeEditing: boolean = true;
	private isEndTimeEditing: boolean = true;

	constructor() { 
		this.event = new smEvent();

	}

	ngOnInit() {
	}
}