import { Component, OnInit } from '@angular/core';
import { GalerieComponent } from '../galerie/galerie.component';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
  images = images;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface image {
  path: string;
  id: number;
  desc: string;
  date: string;
  link: string;
}

export const images = [
  { 
    path: "volant_lmp3.png", 
    id: 11, 
    desc: "Essais LMP3 (jour 2)", 
    date: "21 novembre 2020",
    link: "/actu"
  },
  { 
    path: "victoire_fnac.jpeg",
    id: 12, 
    desc: "Victoire Fnac Thronos Challenge", 
    date: "31 juillet 2021",
    link: "/actu"
  },
  { 
    path: "maxime_lemans.jpeg",
    id: 13, 
    desc: "Le Mans Virtual : 3ème relais", 
    date: "15-16 janvier 2022",
    link: "/actu"
  },
  { 
    path: "le_mans_virtual.webp",
    id: 14, 
    desc: "Le Mans Virtual : P12 avec le Duqueine Team", 
    date: "15-16 janvier 2022",
    link: "/actu"
  }
]