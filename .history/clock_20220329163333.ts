import { debug } from "console";
export class Clock {
  minute: number;
  constructor(hour: number, minute:number = 0) {
    while (Math.sign(minute) == -1) {
      minute = 60 - Math.abs(minute);
      hour--;
    }
    while (Math.sign(hour) == -1) hour = 24 - Math.abs(hour);
    this.minute = minute + hour * 60;
  }
  public toString(): string {
    return buildClock(Math.floor((this.minute/ 60) % 24)) + ":"+buildClock(this.minute % 60);
  }
  public plus(minutes: number): Clock {
    let reloj:Clock = new Clock(Math.floor((this.minute / 60) % 24), this.minute  % 60+minutes)
    return new Clock(Math.floor((reloj.minute / 60) % 24), reloj.minute % 60);
  }
  public minus(minutes: number): Clock {
    let reloj:Clock = new Clock(Math.floor((this.minute / 60) % 24), this.minute % 60-minutes)
    return new Clock(Math.floor((reloj.minute / 60) % 24), reloj.minute  % 60);
  }
  public equals(other: Clock): boolean {
    let reloj:Clock = new Clock(Math.floor((other.minute / 60) % 24), other.minute % 60)
    return (Math.floor((this.minute / 60) % 24) == Math.floor((reloj.minute / 60) % 24) && (this.minute  % 60) == reloj.minute  % 60) 
  }
}
function buildClock(number: number): string {
  let n: string = "" + number;
  if (n.length == 1) n = "0" + n;
  return n;
}
