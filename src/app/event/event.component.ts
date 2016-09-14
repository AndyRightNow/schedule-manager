import {
  Component,
	Input,
	OnInit,
	DoCheck
} from '@angular/core';
import { smEvent } from './../../../public/classes/smEvent';

@Component({
  selector: 'sm-event',
  templateUrl: './event.component.html',
	styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, DoCheck {
	@Input() event: smEvent;
	@Input() startHour: number = 0;
	@Input() startMin: number = 0;
	@Input() startSec: number = 0;
	@Input() endHour: number = 0;
	@Input() endMin: number = 0;
	@Input() endSec: number = 0;
	private isTitleEditing: boolean = true;
	private isDescEditing: boolean = true;
	private isStartTimeEditing: boolean = true;
	private isEndTimeEditing: boolean = true;

	constructor() { 
		this.event = new smEvent();

	}

	ngOnInit() {
	}

	ngDoCheck() {
		this.event.startTime = this.startHour * 3600 + this.startMin * 60 + this.startSec * 1; 
		this.event.endTime = this.endHour * 3600 + this.endMin * 60 + this.endSec * 1;
	}
}