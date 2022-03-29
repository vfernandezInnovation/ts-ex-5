import { debug } from "console";

export class Clock {
  hour: number;
  minute?: number;
  constructor(hour: number, minute?: number) {
    if (minute == null) minute = 0;
    debugger
    while (Math.sign(minute) == -1) minute = 60 - Math.abs(minute);hour--;
    while (Math.sign(hour) == -1) hour = 24 - Math.abs(hour);
    hour = Math.floor( hour % 24)
    minute = minute + hour * 60;
    hour = Math.floor((minute / 60) % 60);
    this.hour = isTooManyHours(hour);
    this.minute = minute % 60;
  }

  public toString(): unknown {
    return buildClock(this.hour, this.minute);
  }

  public plus(minutes: number): Clock {
    let h: number = this.hour;
    let m: number = 0;
    let sumaHoras: number = 0;
    if (this.minute != null) {
      m = this.minute;
    }
    m = m + minutes;
    if (m >= 60) {
      sumaHoras = Math.floor(m / 60);
      m = Math.floor(m % 60);
    }
    h = h + sumaHoras;
    h = isTooManyHours(h);
    return new Clock(h, m);
  }

  public minus(minutes: number): Clock {
    let h: number = this.hour;
    let m: number = 0;
    if (this.minute != null) {
      m = this.minute;
    }
    m = m - minutes;
    while (Math.sign(m) == -1) {
      m = 60 - Math.abs(m);
      h--;
    }
    if (Math.sign(h) == -1) while (Math.sign(h) == -1) h = 24 - Math.abs(h);
    return new Clock(h, m);
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

    if (isHEqualH(this.hour, h) && isMEqualM(this.minute, m)) {
      return true;
    } else {
      return false;
    }
  }
}

function isTooManyHours(hour: number): number {
  if (hour >= 24) {
    return amToPm(hour);
  } else {
    return hour;
  }
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
