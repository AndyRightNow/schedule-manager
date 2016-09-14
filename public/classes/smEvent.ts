export class smEvent {
  title: string = "";
  description: string = "";
  startTime: Object;
  endTime: Object;
  isSelected: boolean = false;
  type: string = "";
  priority: number = 0;

  constructor() {
    this.startTime = {
      hour: 0,
      minute: 0,
      second: 0
    };
    this.endTime = {
      hour: 0,
      minute: 0,
      second: 0
    }
  }
}