import { debug } from "console";

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
      return(buildClock(this.hour, this.minute))
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
function anadoCeros(n:string):string {
 return n ="0"+n;
}

function buildClock(hora:number, minute?:number): string{
    let h:string = ""+hora;
    if(h.length == 1){
     h = anadoCeros(h);
    }
    if(minute != null){
      let m:string = ""+minute;
      if(m.length == 1){
        m = anadoCeros(m);
       }
      return h+":"+m;
    }else{
      return h+":00";
    }
  }