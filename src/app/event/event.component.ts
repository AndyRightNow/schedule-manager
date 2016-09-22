import {
  Component,
	Input,
	OnInit,
	DoCheck,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { smEvent } from './../../../public/classes/smEvent';
import { Utils } from './../../../public/classes/utils';
import { DataService } from './../../../public/services/data.service';
import { MenuService } from './../../../public/services/menu.service';

@Component({
  selector: 'sm-event',
  templateUrl: './event.component.html',
	styleUrls: ['./event.component.css'],
  animations: [
    trigger('inAndOutAnime', [
			state('void', style({
				opacity: 0
			})),
      state('in', style({
				opacity: 1
      })),
      transition('in => void', [
        animate('100ms ease-in-out')
      ]),
      transition('void => in', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class EventComponent implements OnInit, DoCheck {
	@Input() event: smEvent;

	// Visual presentation of priority
	private priorityArray: boolean[] = new Array(5).fill(false);

	/*
	 * Add padding zeros to time units(hour, minute or second)
	 *
	 * @return {string} formatted time
	 * @param {number | string} time: Input time
	 */
	private formatTime(time: number | string): string {
		return time == "" ? "00" : time.toString().split('').map((val, index, arr) => {
			return index == 0 && arr.length == 1 ? "0" + val : val;
		}).join('');
	}

	/*
	 * Change priority based on highlighted circles that users select
	 *
	 */	
	private changePriority(i: number) {
		this.priorityArray = this.priorityArray.map((val, index) => index > i ? false : true);
		this.event.priority = i + 1;
	}

	/*
	 * Delete this event
	 *
	 */	
	private deleteEvent() {
		if (!event) return;
		this.dataService.delete(this.event.id);
	}

	/*
	 * Constructor
	 *
	 * @param {DataService} dataService: The DataService single instance
	 */		
	constructor(private dataService: DataService,
							private menuService: MenuService) { }

	ngOnInit() { 
		// Initialize priority view based on data
		this.changePriority(this.event.priority - 1);
	 }

	ngDoCheck() {
		//-------------------------------------------------
		// Normalize and clamp users input time
		//-------------------------------------------------
		this.event.startTime.hour = isNaN(this.event.startTime.hour) ? 0 : Utils.clamp(this.event.startTime.hour, 0, 23);
		this.event.startTime.minute = isNaN(this.event.startTime.minute) ? 0 : Utils.clamp(this.event.startTime.minute, 0, 59);
		this.event.startTime.second = isNaN(this.event.startTime.second) ? 0 : Utils.clamp(this.event.startTime.second, 0, 59);
		this.event.endTime.hour = isNaN(this.event.endTime.hour) ? 0 : Utils.clamp(this.event.endTime.hour, 0, 23);
		this.event.endTime.minute = isNaN(this.event.endTime.minute) ? 0 : Utils.clamp(this.event.endTime.minute, 0, 59);
		this.event.endTime.second = isNaN(this.event.endTime.second) ? 0 : Utils.clamp(this.event.endTime.second, 0, 59);
	}

	/*
	 * Check whether the keys to exit editing are down
	 */
	private isExitEditingKeysDown(event: any) {
		// Enter or Escape
		return event ? event.keyCode == 13 || event.keyCode == 27 : false;
	}
}