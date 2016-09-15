export class Utils {
  public static clamp(val: number, low: number, high: number): number {
    return val < low ? low : val > high ? high : val;
  }

  public static getTime(hour: number, min: number, sec: number): number {
    return hour * 3600 + min * 60 + sec;
  }
}