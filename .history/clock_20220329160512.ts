import { debug } from "console";
export class Clock {
  hour: number;
  minute?: number;
  constructor(hour: number, minute:number = 0) {
    while (Math.sign(minute as number) == -1) {
      minute = 60 - Math.abs(minute as number);
      hour--;
    }
    while (Math.sign(hour) == -1) hour = 24 - Math.abs(hour);
    minute = minute as number + hour * 60;
    this.hour = Math.floor((minute / 60) % 24);
    this.minute = minute % 60;
  }
  public toString(): unknown {
    return buildClock(this.hour) + ":"+buildClock(this.minute as number);
  }
  public plus(minutes: number): Clock {
    let reloj:Clock = new Clock(this.hour, this.minute as number+minutes)
    return new Clock(reloj.hour, reloj.minute);
  }
  public minus(minutes: number): Clock {
    let reloj:Clock = new Clock(this.hour, this.minute as number-minutes)
    return new Clock(reloj.hour, reloj.minute);
  }
  public equals(other: Clock): boolean {
    let reloj:Clock = new Clock(other.hour, other.minute)
    if (this.hour == reloj.hour && (this.minute as number) == reloj.minute) {
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
