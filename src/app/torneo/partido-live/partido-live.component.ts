import { Component, OnInit, Input } from '@angular/core';

import { GamesStore } from '../../stores/games.store';

@Component({
  selector: 'app-partido-live',
  templateUrl: './partido-live.component.html',
  styleUrls: ['./partido-live.component.scss']
})

export class PartidoLiveComponent implements OnInit {
  @Input() id: number;
  game: any;
  players: any[];

  constructor(private gamesStore: GamesStore) {
  	const path = "./assets/images/faces/";

  	this.players = [
  		{name: 'Michael Cors', country: 'Estados Unidos', img: path+'1.jpg'},
  		{name: 'Javier Merchán', country: 'Venezuela', img: path+'2.jpg'},
  		{name: 'Juan Rodríguez', country: 'Panamá', img: path+'3.jpg'},
  		{name: 'Anastasia Ochoa', country: 'España', img: path+'4.jpg'}
  	];
  }

  ngOnInit() {
    this.showGame();
  }

  showGame() {
    this.gamesStore.show(this.id).subscribe(
      (data) => {
        console.log("== GAME DATA ==", data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}