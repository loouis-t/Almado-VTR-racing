import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class Accueil implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    window.addEventListener('scroll', function() {
      var currentPosition = Math.max(window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0);
      const maxPosition = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ); // max scroll position (cross-plateform)

      var perCent_currentScroll = (currentPosition/maxPosition)*100; // emplacement scroll actuel sur page (%)
      var tailleSection = maxPosition/4; // 4: hauteur du site (4 fois 100vh)
      var facteurOpacity = (currentPosition%tailleSection)/tailleSection;

      if(currentPosition>0 && currentPosition<tailleSection) 
      {
        this.document.getElementById("s-1")!.style.opacity = String(Math.max(1-facteurOpacity, 0.2));
        this.document.getElementById("s-s-1")!.style.opacity = String(Math.min(facteurOpacity, 1));
      }
      else if(currentPosition>tailleSection && currentPosition<2*tailleSection) 
      {
        this.document.getElementById("s-s-1")!.style.opacity = String(Math.max(1-facteurOpacity, 0.2));
        this.document.getElementById("s-s-2")!.style.opacity = String(Math.min(facteurOpacity, 1));
        console.log(tailleSection);
      }
      else if(currentPosition>2*tailleSection && currentPosition<3*tailleSection)
      {
        this.document.getElementById("s-s-2")!.style.opacity = String(Math.max(1-facteurOpacity, 0.2));
        this.document.getElementById("s-3")!.style.opacity = String(Math.min(facteurOpacity, 1));
      }
    });
  }
}

