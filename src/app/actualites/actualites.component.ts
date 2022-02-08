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

  // ouvrir page dans un nouvel onglet seulement s'il y a vraiment un lien 
  ifLink(element: string) {
    if (element != "/actu") {
      return "_blank";
    } else {
      return "_self";
    }
  }

  linkOrNot(element: string) {
    if (element != "/actu") {
      return "news news-with-link";
    } else {
      return "news";
    }
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
    link: "//www.youtube.com/watch?v=Qj-lne9wpUU"
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
    link: "//youtu.be/P5kqD2Vha-I?t=32055"
  },
  { 
    path: "le_mans_virtual.webp",
    id: 14, 
    desc: "Le Mans Virtual : P12 avec le Duqueine Team", 
    date: "15-16 janvier 2022",
    link: "/actu"
  }
]