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
	private isTitleEditing: boolean = true;
	private isDescEditing: boolean = true;
	private isStartTimeEditing: boolean = true;
	private isEndTimeEditing: boolean = true;
	private priorityArray: boolean[] = new Array(5).fill(false);

	private formatTime(time: number): string {
		return time.toString().split('').map((val, index, arr) => {
			return index == 0 && arr.length == 1 ? "0" + val : val;
		}).join('');
	}

	changePriority(i: number) {
		this.priorityArray = this.priorityArray.map((val, index) => index > i ? false : true);
		this.event.priority = i + 1;
	}

	constructor() { 
		this.event = new smEvent();
	}

	ngOnInit() {
	}

	ngDoCheck() {
	}
}