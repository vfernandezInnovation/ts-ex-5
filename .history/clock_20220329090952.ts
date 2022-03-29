export class Clock {
   hour:number;
   minute?:number;
  constructor(hour: number, minute?: number) {
    
    this.hour = hour;
    if(minute != null){
      this.minute = minute;
    }
   
  }

  public toString(): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  public plus(minutes: unknown): Clock {
    throw new Error('Remove this statement and implement this function')
  }

  public minus(minutes: unknown): Clock {
    throw new Error('Remove this statement and implement this function')
  }

  public equals(other: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  
}
function anadoCeros(n:string) {
  n ="0"+n;
}

function buildClock(hora:number, minute?:number): string{
    let h:string = ""+hora;
    if(h.length == 0){
      anadoCeros(h);
    }
    if(minute != null){
      let m:string = ""+minute;
      return h+":"+m;
    }else{
      return h+":00";
    }
  }