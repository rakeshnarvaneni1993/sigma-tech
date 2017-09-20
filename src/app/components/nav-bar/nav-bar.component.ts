import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

logo = false;
  constructor() { }
  ngOnInit() {
    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset > 60) {
        this.logo = true;
      } else {
        this.logo = false;
      }
    });
  }
openNav() {
  $("#mySidenav").css('width', '250px');
  $("#main").css('marginLeft', '250px');


}
closeNav() {
  $("#mySidenav").css('width', '0');
  $("#main").css('marginLeft', '0');
}
}
