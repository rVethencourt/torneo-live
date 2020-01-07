import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partido-live',
  templateUrl: './partido-live.component.html',
  styleUrls: ['./partido-live.component.scss']
})

export class PartidoLiveComponent implements OnInit {
  players: any[];

  constructor() {
  	const path = "./assets/images/faces/";
  	this.players = [
  		{name: 'Michael Cors', country: 'Estados Unidos', img: path+'1.jpg'},
  		{name: 'Javier Merchán', country: 'Venezuela', img: path+'2.jpg'},
  		{name: 'Juan Rodríguez', country: 'Panamá', img: path+'3.jpg'},
  		{name: 'Anastasia Ochoa', country: 'España', img: path+'4.jpg'}
  	];
  }

  ngOnInit() {
  }

}