import { debug } from "console";
export class Clock {
 // hour: number;
  minute?: number;
  constructor(hour: number, minute:number = 0) {
    while (Math.sign(minute as number) == -1) {
      minute = 60 - Math.abs(minute as number);
      hour--;
    }
    while (Math.sign(hour) == -1) hour = 24 - Math.abs(hour);
    this.minute = minute as number + hour * 60;
    //this.hour = Math.floor((minute / 60) % 24);
    //this.minute = minute % 60;
  }
  public toString(): string {
    return buildClock(Math.floor((this.minute as number/ 60) % 24)) + ":"+buildClock(this.minute as number% 60);
  }
  public plus(minutes: number): Clock {
    let reloj:Clock = new Clock(Math.floor((this.minute as number/ 60) % 24), this.minute as number % 60+minutes)
    return new Clock(Math.floor((reloj.minute as number/ 60) % 24), reloj.minute as number% 60);
  }
  public minus(minutes: number): Clock {
    let reloj:Clock = new Clock(Math.floor((this.minute as number/ 60) % 24), this.minute as number % 60-minutes)
    return new Clock(Math.floor((reloj.minute as number/ 60) % 24), reloj.minute as number % 60);
  }
  public equals(other: Clock): boolean {
    let reloj:Clock = new Clock(Math.floor((other.minute as number/ 60) % 24), other.minute)
    if (Math.floor((this.minute as number/ 60) % 24) == Math.floor((reloj.minute as number/ 60) % 24) && (this.minute as number % 60) == reloj.minute as number % 60) {
      return true;
    } else {
      return false;
    }
  }
}
function buildClock(number: number): string {
  let n: string = "" + number;
  if (n.length == 1) n = "0" + n;
  return n;
}
