import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partidos-lista',
  templateUrl: './partidos-lista.component.html',
  styleUrls: ['./partidos-lista.component.scss']
})

export class PartidosListaComponent implements OnInit {
  games: any[];
  activeIndex: number;

  constructor() {
  	this.games = [0, 1];
  	this.activeIndex = 1;
  }

  ngOnInit() {
  }

}
