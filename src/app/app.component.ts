import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'almado-vtr-racing';
  current_year = new Date().getFullYear();

  displayMenu() {
    let checkbox = <HTMLInputElement>document.getElementById("check");
    let menu = document.getElementById("menu");
    let navBar = document.getElementById("navBar");

    if (checkbox.checked) {
      menu!.classList.add("menuOuvert");
      navBar!.classList.add("navBar");
    } else {
      menu!.classList.remove("menuOuvert");
      navBar!.classList.remove("navBar");
    }
  }

}
