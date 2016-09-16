type Time = { hour: number, minute: number, second: number };

export class smEvent {
  title: string = "";
  description: string = "";
  startTime: Time;
  endTime: Time;
  priority: number = 0;
  id: number = 0;

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