import { Component, OnInit } from '@angular/core';

import { AuthService } from '../servicios/auth.service';
import { LoginStore } from '../stores/login.store';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.scss']
})

export class TorneoComponent implements OnInit {
  torneo: any;
  partido: any;
  sponsors: string[];

  constructor(private _authService: AuthService, private _loginStore: LoginStore) {
    
  }

  ngOnInit() {
    this.login();
    this.getTorneo();
    this.getPartido();
    this.getSponsors();
  }

  login() {
    const user = {
      "email": "jrodriguez@labequis.com",
      "password": "12345678"
    };

    this._loginStore.login(user).subscribe(
      (data) => {
        this._authService.setToken(data.token);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getTorneo() {
    this.torneo = {
      nombre: 'Torneo Panamá Sports Club',
      lugar: 'PSC Vía Israel',
      fecha: '23 al 27 Diciembre'
    }
  }

  getPartido() {
    const player_1 = {
      name: "Leon Larregui",
      country: "Mexico"
    };
    const player_2 = {
      name: "Yair Rodriguez",
      country: "Mexico"
    };
    const player_3 = {
      name: "Anastasia Carballo",
      country: "Venezuela"
    };
    const player_4 = {
      name: "Roy Smith",
      country: "Estados Unidos"
    };

    this.partido = {
      team_1: {
        player_1: player_1,
        player_2: player_2,
      },
      team_2: {
        player_1: player_3,
        player2: player_4
      }
    };
  }

  getSponsors() {
    this.sponsors = [
      "./assets/images/apple-logo.png",
      "./assets/images/head-logo.png",
      "./assets/images/nike-logo.jpg",
      "./assets/images/cocacola-logo.png"
    ];
  }

}
