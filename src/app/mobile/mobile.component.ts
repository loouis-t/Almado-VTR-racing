import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})

export class MobileComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  
  displayMenu() {
    let checkbox = <HTMLInputElement>document.getElementById("check");
    let menu = document.getElementById("menu");

    if (checkbox.checked) {
        menu!.classList.add("menuOuvert");
    } else {
      menu!.classList.remove("menuOuvert");
    }
  }

  current_year = (new Date()).getFullYear();
}
