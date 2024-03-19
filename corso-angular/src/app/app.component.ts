import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'corso-angular';
  persone = [
    {nome: "Luca", cognome: "Rossi", isOnline: true},
    {nome: "Marco", cognome: "Verdi", isOnline: false},
    {nome: "Anna", cognome: "Neri", isOnline: false},
    {nome: "Leonardo", cognome: "Qwerty", isOnline: true},
    {nome: "Pino", cognome: "Pane", isOnline: false},
  ]

  color = 'green'

  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value
  }

  onClick(event: Event) {
  }
}
