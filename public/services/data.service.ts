/*
 * Provide in-memory data control
 */

import { smEvent } from './../classes/smEvent';
import { Utils } from './../classes/utils';

export class DataService {
  // The data in memory
  private data: smEvent[] = [];

  constructor() { }

  /*
   * Update all ids of elements from a position on
   *
   * @param {number} start: Starting index
   */
  private assignIds(start: number) {
    for (let i = start; i < this.data.length; i++)
        this.data[i].id = i;
  }

  /*
   * Return a reference of the data array
   *
   */
  public getData(): smEvent[] {
    return this.data;
  }

  /*
   * Add an event to the back of the data array
   *
   * @param {smEvent} event: The event to add to the data array
   */
  public add(event: smEvent) {
    this.data.push(event);
    event.id = this.data.length - 1;
  }

  /*
   * Delete an event(events) at(from) a certain position
   *
   * @param {number} pos: The start position of the event(s) to delete
   * @param {number} deleteCount: The number of elements to delete
   */
  public delete(pos: number, deleteCount: number = 1) {
    this.data.splice(pos, deleteCount);
    this.assignIds(pos);
  }

  /*
   * Insert an event at a certain position
   *
   * @param {number} pos: The position to insert at
   * @param {smEvent} event: The event to insert
   */  
  public insert(pos: number, event: smEvent) {
    this.data.splice(pos, 0, event);
    this.assignIds(pos);
  }

  /*
   * Sort all events in the order of priorities first and start time second
   *
   */  
  public sort() {
    this.data.sort((a, b) => {
      return a.priority == b.priority ?
        Utils.getTime(a.startTime.hour, a.startTime.minute, a.startTime.second) -
        Utils.getTime(b.startTime.hour, b.startTime.minute, b.startTime.second) : b.priority - a.priority;
    });
  }
}