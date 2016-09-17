type Time = { hour: number, minute: number, second: number };

export class smEvent {
	//--------------------------------
	// Flags to toggle input boxes
	// editing states
	//--------------------------------
	isTitleEditing: boolean = true;
	isDescEditing: boolean = true;
	isStartTimeEditing: boolean = true;
  isEndTimeEditing: boolean = true;
  
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