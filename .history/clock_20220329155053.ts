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
    hour = Math.floor((minute / 60) % 24);
    this.hour = hour >= 24 ? (hour = amToPm(hour)) : hour;
    this.minute = minute % 60;
  }
  public toString(): unknown {
    return buildClock(this.hour, this.minute);
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
