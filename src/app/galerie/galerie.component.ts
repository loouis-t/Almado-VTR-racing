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
    path: "combi_devant_ds3.jpeg",
    desc: "Karting de muret",
    date: "25 octobre 2020"
  },
  { 
    path: "circuit_karting.jpeg",
    desc: "Karting de muret",
    date: "25 octobre 2020"
  },
  { 
    path: "devant_karting.jpeg",
    desc: "Karting de muret", 
    date: "25 octobre 2020"
  },
  { 
    path: "dans_karting.jpeg",
    desc: "Karting de muret", 
    date: "25 octobre 2020"
  },
  { 
    path: "nom_sur_lmp3.png",
    desc: "Essais LMP3 (jour 1)", 
    date: "19 novembre 2020"
  },
  { 
    path: "volant_lmp3.png",
    desc: "Essais LMP3 (jour 2)", 
    date: "21 novembre 2020"
  },
  { 
    path: "lmp3.jpeg",
    desc: "Essais LMP3 (jour 1)", 
    date: "19 novembre 2020"
  },
  { 
    path: "devant_lmp3.jpeg",
    desc: "Essais LMP3 (jour 1)", 
    date: "19 novembre 2020" 
  },
  { 
    path: "devant_f4_lmp3.jpeg",
    desc: "Essais LMP3 (jour 1)",
    date: "19 novembre 2020"
  },
  { 
    path: "maxime_casque.png",
    desc: "Essais LMP3 (jour 2)", 
    date: "21 novembre 2020" 
  },
  { 
    path: "dans_simulateur.jpeg",
    desc: "Essai TGT II, partenariat avec Thrustmaster", 
    date: "19 juin 2021"
  },
  { 
    path: "setup_simulateur.jpeg",
    desc: "Setup: Thrustmaster TGT II, NLR F-GT, ...",
    date: "21 juin 2021" 
  },
  { 
    path: "victoire_fnac.jpeg",
    desc: "Victoire Fnac Thronos Challenge", 
    date: "31 juillet 2021"
  },
  { 
    path: "maxime_lemans.jpeg",
    desc: "Le Mans Virtual : 3ème relais", 
    date: "15-16 janvier 2022"
  },
  { 
    path: "Maxime-LMV-2022.jpeg",
    desc: "Le Mans Virtual : équipe PRiMA-Duqueine", 
    date: "15-16 janvier 2022"
  }
]