import { Component } from '@angular/core';
import { Rodzaj, Przysieczyn } from './interfejs_przysieczyn';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  przysieczyn: Przysieczyn[] = [
    {
      miejsce: 'Kaplica',
      adres: 'Przysieczyn koło lasu',
      dane: 'msza święta w niedziele o 9:30',
      typ: Rodzaj.religja,
    },
    {
      miejsce: 'Doworzec PKP',
      adres: 'Przysieczyn 3',
      dane: 'kierunek: Poznań, Wągrowiec, Gołańcz',
      typ: Rodzaj.transport,
    },
    {
      miejsce: 'Stajnia Goodwill',
      adres: 'Przysieczyn 62',
      dane: 'odwarte od wtorku do niedzieli od 10 do 20 ',
      typ: Rodzaj.sport,
    },
  ];
}
