import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public mainuser: any;
  public user: any;
  public card: boolean;
  public text: any;
  public t: boolean;
  public cart= ['<img src="assets/media/4.jpg" width="150px"> <p>Санузел</p> <br> Время уборки: <br>11:15-11:30; 17:45-16:00' , '<img src="assets/media/3.jpg" width="150px"> <p>Кириенко Сергей</p> <br> <br> Должность: Генеральный директор <br><br> Телефон: 8(831) 189-89-89 <br> Почта: zverev@rosatom.ru <br>', '<img src="assets/media/1.jpg" width="150px"> \n' +
  '<p>Конференц зал</p> <br><br> Внутренний телефон: 11 <br><br> Вместимость: 15 чел. <br><br> Оборудование: Видеопроектор, экран,<br> видеоконферецсвязь', '<img src="assets/media/2.jpg" width="150"> <p>Сарбаев Руслан</p> <br> Должность: Бухгалтер <br> Телефон: 8(831) 152-89-95 <br> Почта: sarbaevr@rosatom.ru'];
  constructor(private service: AppService) { }

  ngOnInit() {
    this.t= false;
    this.card=true;

    this.user = window.localStorage.getItem('userinfo');
    this.mainuser = JSON.parse(this.user);
    this.service.set_map_metrik(this.mainuser.id).subscribe(value => {
      console.log(value);
    });


  }
  myprint(txt){
    this.text=this.cart[txt];
    this.t=!this.t;
  }

  editcard(){
    this.card=!this.card;
  }
}
