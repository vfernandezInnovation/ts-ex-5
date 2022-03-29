export class Clock {
  constructor(hour: number, minute?: number) {
    if(hour != null && minute == null){
      if(hour <= 9){

      }
    }
    console.log(hour as number);
    console.log(minute);
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
function buildClock(hora:number, minute?:number) {
    let h:string = ""+hora;
    if(minute != null){
      let m:string = ""+minute;
    }
  }