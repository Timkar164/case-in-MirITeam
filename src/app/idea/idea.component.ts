import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  public inputt='';
  public com='';
  public ideas =[{"img":'assets/images/tim.jpg',"user": "Карклин Тимофей","name":"создать единый регламент одежды РОСАТОМ","coment":" Цель: улучшить качество одежды, выдаваемой сотрудникам. 1. Зимняя обувь фирмы “Панда” в зимнее время совсем не теплая. Ноги в -30 замерзают даже с шерстяным носком...","date":"23.03.2021","imgs":['assets/images/nik.jpg','assets/images/tany.jpg'],"rez":['assets/images/v1_65.png']}];
  constructor() { }

  ngOnInit() {
  }
 add(name,coment){
   this.ideas = [{"img":'assets/images/avatar.jpg',"user": "Владимир Жуков","name":name,"coment":coment,"date":"26.03.2021","imgs":[],"rez":[]}].concat(this.ideas);
 }
 addrez(item){
    console.log(item);
    item.rez.push('assets/images/avatar.jpg');
 }
 addpod(item){
    item.imgs.push('assets/images/avatar.jpg');
 }
}
