import {
  Component,
	Input,
	OnInit
} from '@angular/core';

import { smEvent } from './../../../public/classes/smEvent';
import { DataService } from './../../../public/services/data.service';

@Component({
  selector: 'sm-menu-bar',
  templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

	private addEvent() {
		this.dataService.add(new smEvent());
	}

  constructor(private dataService: DataService ) { }

	ngOnInit() {
	}
}