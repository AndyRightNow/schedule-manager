import { DataService } from './data.service';
import { smEvent } from './../classes/smEvent';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  // Flag to indicate if it's in editing mode
  private _isEditMode: boolean = false;

  constructor(private dataService: DataService) { }  

	/*
	 * Add an event to the DataService in-memory storage
	 *
	 */
	private addEvent() {
		this.dataService.add(new smEvent());
	}
  
  /*
   * Toggle editing mode
   */
  public toggleEditMode() {
    this._isEditMode = !this._isEditMode;
  }

  /*
   * Get whether it's in editing mode
   */  
  get isEditModeOn() {
    return this._isEditMode;
  }
}