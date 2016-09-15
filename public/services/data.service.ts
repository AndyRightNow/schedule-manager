import { smEvent } from './../classes/smEvent';
import { Utils } from './../classes/utils';

export class DataService {
  private data: smEvent[];

  constructor() {
    this.data = [];
  }

  private assignIds(start: number) {
    for (let i = start; i < this.data.length; i++)
        this.data[i].id = i;
  }

  public getData(): smEvent[] {
    return this.data;
  }

  public add(event: smEvent) {
    this.data.push(event);
    event.id = this.data.length - 1;
  }

  public delete(pos: number, deleteCount: number = 1) {
    this.data.splice(pos, deleteCount);
    this.assignIds(pos);
  }

  public insert(pos: number, event: smEvent) {
    this.data.splice(pos, 0, event);
    this.assignIds(pos);
  }

  public sort() {
    this.data.sort((a, b) => {
      return a.priority == b.priority ?
        Utils.getTime(a.startTime.hour, a.startTime.minute, a.startTime.second) -
        Utils.getTime(b.startTime.hour, b.startTime.minute, b.startTime.second) : b.priority - a.priority;
    });
  }
}