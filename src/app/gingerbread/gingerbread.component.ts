import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gingerbread',
  templateUrl: './gingerbread.component.html',
  styleUrls: ['./gingerbread.component.css']
})
export class GingerbreadComponent implements OnInit {
  public mascard =[{"img":'assets/images/v1_65.png',"user": "Мария Иванова","type":"за надежность","name":"Ивана Серова","coment":"Спасибо за быструю подготовку документов!","date":"25.03.2021"},{"img":'assets/images/tany.jpg',"user": "Татьяна Бородина","type":"за помощь","name":"Тимофея Карклина","coment":"Спасибо за подготовку проекта!","date":"21.03.2020"}];
  public list1 = 18;
  public list2 = 30;
  public inputt ='';
  public comment ='';
  public a1;
  constructor() { }

  ngOnInit() {
  }
  mypresent(pipl,what,coment){
    console.log(pipl);
    console.log(what);
    console.log(coment);
    this.list1=this.list1+1;
    this.list2=this.list2-1;
    this.mascard = [{"img":'assets/images/avatar.jpg',"user": "Владимир Жуков","type":what,"name":pipl,"coment":coment,"date":"26.03.2021"}].concat(this.mascard);
  }
}
