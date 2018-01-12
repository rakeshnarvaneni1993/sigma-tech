import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  isJobsListOpen = false;
  constructor() { }

  ngOnInit() {
  }

  openListOfJobs() {
    this.isJobsListOpen = !this.isJobsListOpen
  }

}
