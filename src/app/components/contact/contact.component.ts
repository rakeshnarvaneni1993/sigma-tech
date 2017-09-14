import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lat: number = 40.493610;
  lng: number = -74.447638;

  lat1 = 17.407231;
  lng1 = 78.556836;

  lat2 = 32.913210;
  lng2 = -96.890058;
  constructor() { }

  ngOnInit() {}

save2(e) {
    console.log(e);
}
}
