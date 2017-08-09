import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
openNav() {
    console.log('Heyyy')
  $("#mySidenav").css('width', '250px');
  $("#main").css('marginLeft', '250px');


}
closeNav() {
  $("#mySidenav").css('width', '0');
  $("#main").css('marginLeft', '0');
}
}
