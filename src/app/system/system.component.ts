import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  public userId;
  constructor(private router: Router) { }

  ngOnInit() {
    this.userId = window.localStorage.getItem('user');
    console.log(this.userId);
    this.userId='true';
    if (this.userId!='true'){
      this.router.navigate(['/auth']);
    }
  }

}
