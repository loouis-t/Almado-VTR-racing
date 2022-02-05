import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
      var currentPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var maxPosition = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ); // max scroll position (cross-plateform)

      var avancementScroll = (currentPosition/maxPosition);

      var tailleSection = maxPosition/4 ;

      if(currentPosition>0 && currentPosition<tailleSection+100) {
        this.document.getElementById("s-1")!.style.opacity = String(Math.max(1-3*avancementScroll, 0.1));
        this.document.getElementById("s-s-1")!.style.opacity = String(Math.min(3*(avancementScroll), 1));
        this.document.getElementById("s-s-2")!.style.opacity = String(Math.max(Math.min(3*(avancementScroll-.25), 0.7), 0.1));
      }else if(currentPosition>tailleSection+200 && currentPosition<(2*(tailleSection)+200)) {
        this.document.getElementById("s-s-1")!.style.opacity = String(Math.max(.8-avancementScroll, 0.1));
        this.document.getElementById("s-s-2")!.style.opacity = String(Math.min(3*(avancementScroll-.25), 1));
      } else if (currentPosition>(2*tailleSection-100) && currentPosition<(3*(tailleSection))) {
        this.document.getElementById("s-s-2")!.style.opacity = String(Math.max(.8-avancementScroll, 0.1));
        this.document.getElementById("s-3")!.style.opacity = String((Math.min(10*(avancementScroll-.5)+.2, 1)));
        console.log(this.document.getElementById("s-3")?.style.opacity);
      }
    });
  }
}

