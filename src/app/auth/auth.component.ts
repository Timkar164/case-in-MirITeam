import { Component, OnInit } from '@angular/core';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public name = 'MirITeam';
  public pas='casein2021';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  avt(name, pas){
    console.log(name);
    console.log(pas);
    if (pas==='casein2021'&& name=='MirITeam'){
      window.localStorage.setItem('user', "true");
      this.router.navigate(['/']);
    }

  }
}
