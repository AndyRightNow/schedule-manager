import {
  Component,
	Input,
	OnInit
} from '@angular/core';

import { smEvent } from './../../../public/classes/smEvent';
import { DataService } from './../../../public/services/data.service';
import { MenuService } from './../../../public/services/menu.service';

@Component({
  selector: 'sm-menu-bar',
  templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

	/*
	 * Add an event to the DataService in-memory storage
	 *
	 */
	private addEvent() {
		this.dataService.add(new smEvent());
	}

  constructor(private dataService: DataService,
							private menuService: MenuService ) { }

	ngOnInit() { }
}