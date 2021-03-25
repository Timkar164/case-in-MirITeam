import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studyroom',
  templateUrl: './studyroom.component.html',
  styleUrls: ['./studyroom.component.css']
})
export class StudyroomComponent implements OnInit {
  public two =[1,2];
  constructor() { }

  ngOnInit() {
  }

}
