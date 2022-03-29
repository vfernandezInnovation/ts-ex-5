import { debug } from "console";

export class Clock {
  hour: number;
  minute?: number;
  constructor(hour: number, minute?: number) {
    if (minute == null) minute = 0;
    while (Math.sign(minute) == -1){ minute = 60 - Math.abs(minute); hour--;}
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
    this.minute = this.minute as number + this.hour * 60 + minutes;
    this.hour = Math.floor((this.minute / 60) % 60);
    this.hour = isTooManyHours(this.hour);
    this.minute = this.minute % 60;
    return new Clock(this.hour, this.minute);
  }
  public minus(minutes: number): Clock {
    this.minute = this.minute as number - minutes;
    while (Math.sign(this.minute) == -1) {this.minute = 60 - Math.abs(this.minute);this.hour--;}
    if (Math.sign(this.hour) == -1) while (Math.sign(this.hour) == -1) this.hour = 24 - Math.abs(this.hour);
    return new Clock(this.hour, this.minute);
  }
  public equals(other: Clock): boolean {
    other.minute = other.minute as number + other.hour * 60;
    other.hour = Math.floor((other.minute / 60) % 60);
    other.hour = isTooManyHours(other.hour);
    other.minute = other.minute % 60;
    if (isHEqualH(this.hour, other.hour) && isMEqualM(this.minute as number, other.minute)) {
      return true;
    } else {
      return false;
    }
  }
}

function isTooManyHours(hour: number): number {
  ((hour >= 24) ? hour = amToPm(hour) :  hour);
  return hour;
}
function isHEqualH(hour: number, h: number): boolean {
  if (hour == h) {
    return true;
  } else {
    return false;
  }
}
function isMEqualM(minute: number, m: number): boolean {
  if (minute == m) {
    return true;
  } else {
    return false;
  }
}

function creoHoraNegativa(h: number): number {
  while (Math.sign(h) == -1) h = 24 - Math.abs(h);
  return h;
}
function creoMinutoNegativa(m: number): number {
  while (Math.sign(m) == -1) m = 60 - Math.abs(m);
  return m;
}
function amToPm(h: number): number {
  h = ((h + 11) % 12) + 1;

  if (h == 12) {
    h = 0;
  }
  return h;
}
function anadoCeros(n: string): string {
  return (n = "0" + n);
}

function buildClock(hora: number, minute?: number): string {
  let h: string = "" + hora;
  if (h.length == 1) {
    h = anadoCeros(h);
  }
  if (minute != null) {
    let m: string = "" + minute;
    if (m.length == 1) {
      m = anadoCeros(m);
    }
    return h + ":" + m;
  } else {
    return h + ":00";
  }
}
