import { debug } from "console";

export class Clock {
  hour: number;
  minute?: number;
  constructor(hour: number, minute?: number) {
    if (minute == null) minute = 0;
    while (Math.sign(minute) == -1) {
      minute = 60 - Math.abs(minute);
      hour--;
    }
    while (Math.sign(hour) == -1) hour = 24 - Math.abs(hour);
    minute = minute + hour * 60;
    hour = Math.floor((minute / 60) % 60);
    this.hour = isTooManyHours(hour);
    this.minute = minute % 60;
  }
  public toString(): unknown {
    return buildClock(this.hour, this.minute);
  }
  public plus(minutes: number): Clock {
    let reloj:Clock = new Clock(this.hour, this.minute as number+minutes as number)
    return new Clock(reloj.hour, reloj.minute);
  }
  public minus(minutes: number): Clock {
    let reloj:Clock = new Clock(this.hour, this.minute as number-minutes as number)
    return new Clock(reloj.hour, reloj.minute);
  }
  public equals(other: Clock): boolean {
    debugger;
    other.minute = (other.minute as number) + other.hour * 60;
    other.hour = Math.floor((other.minute / 60) % 60);
    other.hour = isTooManyHours(other.hour);
    other.minute = other.minute % 60;
    if (this.hour == other.hour && (this.minute as number) == other.minute) {
      return true;
    } else {
      return false;
    }
  }
}
function isTooManyHours(hour: number): number {
  hour >= 24 ? (hour = amToPm(hour)) : hour;
  return hour;
}
function amToPm(h: number): number {
  h = ((h + 11) % 12) + 1;
  if (h == 12) h = 0;
  return h;
}
function buildClock(hora: number, minute?: number): string {
  let h: string = "" + hora;
  if (h.length == 1) h = "0" + h;
  if (minute != null) {
    let m: string = "" + minute;
    if (m.length == 1) m = "0" + m;
    return h + ":" + m;
  } else {
    return h + ":00";
  }
}
