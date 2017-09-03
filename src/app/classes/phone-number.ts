export class PhoneNumber {
    Country: string;
    Area: string;
    Prefix: string;
    Line: string;
    // format phone numbers as E.164
    get e164() {
      const num = this.Country + this.Area + this.Prefix + this.Line;
      return '+${num}';
    }
}
