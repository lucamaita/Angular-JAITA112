import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit{

  isDisabled = true
  immagine = ''
  immagine1 = 'https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg'
  immagine2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  constructor() {
    console.log("costruttore");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
}
