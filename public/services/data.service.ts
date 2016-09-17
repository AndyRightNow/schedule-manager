/*
 * Provide in-memory data control
 */

import { smEvent } from './../classes/smEvent';
import { Utils } from './../classes/utils';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  // The data in memory
  private data: smEvent[] = [];

  // The undo stack
  private undoStack: smEvent[] = [];

  // The undo stack limit
  private static UNDO_STACK_LIMIT: number = 100;

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
    this.pushStack(this.data[pos]);
    this.data.splice(pos, deleteCount);
    this.assignIds(pos);
  }

  /*
   * Clear all data
   *
   */
  public clear() {
    this.pushStack.apply(this, this.data);
    this.data.splice(0, this.data.length);
  }

  /*
   * Insert (an) event(s) at a certain position
   *
   * @param {number} pos: The position to insert at
   * @param {smEvent} event: The event to insert
   */  
  public insert(pos: number, event: smEvent | smEvent[] | any) {
    Array.prototype.splice.apply(this.data, [pos, 0].concat(Array.from(arguments).slice(1)));
    this.assignIds(pos);
  }

  /*
   * Sort all events in the order of priorities first and start time second
   *
   */  
  public sort() {
    this.data = this.data.sort((a, b) => {
      return a.priority == b.priority ?
        Utils.getTime(a.startTime.hour, a.startTime.minute, a.startTime.second) -
        Utils.getTime(b.startTime.hour, b.startTime.minute, b.startTime.second) : b.priority - a.priority;
    });
    this.assignIds(0);
  }

  /*
   * Push (an) event(s) to the undo stack
   *
   * @param {smEvent} event: The event to push
   */
  public pushStack(event: smEvent | smEvent[]) {
    Array.prototype.push.apply(this.undoStack, Array.from(arguments));

    //------------------------------
    // Clear all elements before
    // if the size of undo stack 
    // exceeds the limit 
    //------------------------------
    if (this.undoStack.length > DataService.UNDO_STACK_LIMIT) {
      this.undoStack.splice(0, this.undoStack.length - DataService.UNDO_STACK_LIMIT);
    }
  }

  /*
   * Pop an event from the undo stack
   *
   */
  public popStack(): smEvent | smEvent[] | any {
    return this.undoStack.pop();
  }

  /*
   * Check if the undo stack is empty
   *
   */
  public isStackEmpty(): boolean {
    return this.undoStack.length == 0;
  }

  /*
   * Undo deleting an event
   *
   * @param {smEvent} event: The event to push
   */
  public undo() {
    if (!this.isStackEmpty()) {
      let e = this.popStack();
      this.insert.apply(this, [e.id || this.data.length].concat(e));
      this.assignIds(0);
    }
  }
}