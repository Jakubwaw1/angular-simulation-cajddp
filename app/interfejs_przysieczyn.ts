export interface Przysieczyn {
  miejsce: string;
  adres: string;
  dane: string;
  typ: Rodzaj;
}
export enum Rodzaj {
  religja,
  transport,
  sport,
}
