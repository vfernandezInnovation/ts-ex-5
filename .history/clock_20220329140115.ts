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
    this.minute = (this.minute as number) + this.hour * 60 + minutes;
    this.hour = Math.floor((this.minute / 60) % 60);
    this.hour = isTooManyHours(this.hour);
    this.minute = this.minute % 60;
    return new Clock(this.hour, this.minute);
  }
  public minus(minutes: number): Clock {
    this.minute = (this.minute as number) - minutes;
    while (Math.sign(this.minute) == -1) {
      this.minute = 60 - Math.abs(this.minute);
      this.hour--;
    }
    if (Math.sign(this.hour) == -1)
      while (Math.sign(this.hour) == -1) this.hour = 24 - Math.abs(this.hour);
    return new Clock(this.hour, this.minute);
  }
  public equals(other: Clock): boolean {
    let h = other.hour;
    let m = other.minute;
    let sumaHoras = 0;
    if (this.minute == null) this.minute = 0;
    if (m == null) m = 0;

    if (m >= 60) {
      sumaHoras = Math.floor(m / 60);
      m = Math.floor(m % 60);
    }
    h = isTooManyHours(h);

    if (this.hour == other.hour && (this.minute as number) == other.minute){
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
