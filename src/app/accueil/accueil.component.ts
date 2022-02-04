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

  public imgOpacity="";

  ngOnInit(): void {}

  ngAfterViewInit() {
    window.addEventListener('scroll', function() {
      var currentPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var maxPosition = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ); // max scroll position (cross-plateform)

      var avancementScroll = (currentPosition/maxPosition);

      var tailleSection = maxPosition/3 ;

      if(currentPosition>0 && currentPosition<tailleSection+100) {
        this.document.getElementById("s-1")!.style.opacity = String(Math.max(1-3*avancementScroll, 0.1));
        this.document.getElementById("s-s-1")!.style.opacity = String(Math.min(3*(avancementScroll-.10), 0.8));
      }else if(currentPosition>tailleSection+100 && currentPosition<(2*(tailleSection+50))) {
        this.document.getElementById("s-s-1")!.style.opacity = String(Math.max(.8-(avancementScroll-.10), 0.1));
        this.document.getElementById("s-s-2")!.style.opacity = String(Math.min(3*(avancementScroll-.35), 0.70));
      }

    })
  }
}
