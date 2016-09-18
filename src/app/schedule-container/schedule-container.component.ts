import {
  Component,
	Input,
	OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { smEvent } from './../../../public/classes/smEvent';
import { DataService } from './../../../public/services/data.service';

@Component({
  selector: 'sm-schedule-container',
  templateUrl: './schedule-container.component.html',
	styleUrls: ['./schedule-container.component.css'],
  animations: [
    trigger('inAndOutAnime', [
			state('void', style({
        transform: 'translateY(30px)',
				opacity: 0
			})),
      state('in', style({
        transform: 'translateY(0px)',
				opacity: 1
      })),
      transition('in => void', [
        animate('300ms ease-in-out')
      ]),
      transition('void => in', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ScheduleContainerComponent implements OnInit {
	private events: smEvent[];

  constructor(private dataService: DataService) {
		this.events = dataService.getData();
	 }

	ngOnInit() {
	}
}