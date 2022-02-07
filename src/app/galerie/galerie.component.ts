import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent implements OnInit {
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
}

export const images = [
  { 
    path: "devant_karting.jpeg",
    id: 0, 
    desc: "Karting de muret", 
    date: "25 octobre 2020"
  },
  { 
    path: "maxime_casque.png",
    id: 1, 
    desc: "Essais LMP3 (jour 2)", 
    date: "21 novembre 2020" 
  },
  { 
    path: "circuit_karting.jpeg",
    id: 2,
    desc: "Karting de muret",
    date: "25 octobre 2020"
  },
  { 
    path: "lmp3.jpeg", 
    id: 3,
    desc: "Essais LMP3 (jour 1)", 
    date: "19 novembre 2020"
  },
  { 
    path: "dans_karting.jpeg", id: 4, desc: "Karting de muret", date: "25 octobre 2020"
  },
  { 
    path: "devant_f4_lmp3.jpeg", 
    id: 5, 
    desc: "Essais LMP3 (jour 1)",
    date: "19 novembre 2020"
  },
  { 
    path: "combi_devant_ds3.jpeg",
    id: 6, 
    desc: "Karting de muret",
    date: "25 octobre 2020"
  },
  { 
    path: "nom_sur_lmp3.png",
    id: 7, 
    desc: "Essais LMP3 (jour 1)", 
    date: "19 novembre 2020"
  },
  { 
    path: "dans_simulateur.jpeg",
    id: 8, 
    desc: "Essai TGT II, partenariat avec Thrustmaster", 
    date: "19 juin 2021"
  },
  { 
    path: "devant_lmp3.jpeg", 
    id: 9, 
    desc: "Essais LMP3 (jour 1)", 
    date: "19 novembre 2020" 
  },
  { 
    path: "setup_simulateur.jpeg", 
    id: 10, 
    desc: "Setup: Thrustmaster TGT II, NLR F-GT, ...",
    date: "21 juin 2021" 
  },
  { 
    path: "volant_lmp3.png", 
    id: 11, 
    desc: "Essais LMP3 (jour 2)", 
    date: "21 novembre 2020"
  },
  { 
    path: "victoire_fnac.jpeg",
    id: 12, 
    desc: "Victoire Fnac Thronos Challenge", 
    date: "31 juillet 2021"
  },
  { 
    path: "maxime_lemans.jpg",
    id: 13, 
    desc: "Le Mans Virtual : 3ème relais", 
    date: "15-16 janvier 2022"
  },
  { 
    path: "le_mans_virtual.webp",
    id: 14, 
    desc: "Le Mans Virtual : P12 avec le Duqueine Team", 
    date: "15-16 janvier 2022"
  }
]