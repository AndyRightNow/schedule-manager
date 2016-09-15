import {
  Component,
	Input,
	OnInit
} from '@angular/core';

import { smEvent } from './../../../public/classes/smEvent';
import { DataService } from './../../../public/services/data.service';

@Component({
  selector: 'sm-schedule-container',
  templateUrl: './schedule-container.component.html',
	styleUrls: ['./schedule-container.component.css']
})
export class ScheduleContainerComponent implements OnInit {
	private events: smEvent[];
	
  constructor(private dataService: DataService) { 
		this.events = dataService.getData();
	 }

	ngOnInit() {
	}
}