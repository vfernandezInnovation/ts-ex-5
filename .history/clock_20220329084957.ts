export class Clock {
  constructor(hour: unknown, minute?: unknown) {
    debugger
    console.log(hour as number)
    console.log(minute)
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
