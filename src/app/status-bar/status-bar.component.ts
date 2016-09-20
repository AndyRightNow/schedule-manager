import {
  Component,
	Input,
	OnInit
} from '@angular/core';

import { smEvent } from './../../../public/classes/smEvent';
import { DataService } from './../../../public/services/data.service';

@Component({
  selector: 'sm-status-bar',
  templateUrl: './status-bar.component.html',
	styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  constructor(private dataService: DataService ) { }

	ngOnInit() { }
}