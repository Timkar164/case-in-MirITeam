import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalendar',
  templateUrl: './kalendar.component.html',
  styleUrls: ['./kalendar.component.css']
})
export class KalendarComponent implements OnInit {
  public type =0;
  public events=[{'type':1,'text':'Съезд...'},{'type':1,'text':'Субботник'},{'type':1,'text':'Собрание'},{'type':1,'text':'Съезд...'},{'type':2,'text':'Открытие...'},{'type':2,'text':'Сдать...'},{'type':2,'text':'Отправить...'},{'type':3,'text':'Доделать...'},{'type':3,'text':'Созвониться...'},{'type':3,'text':'Отправить...'},{'type':3,'text':'Найти...'},{'type':4,'text':'15:27 вст..'},{'type':5,'text':'Сочи...'},{'type':1,'text':'Москва...'}];
  constructor() { }

  ngOnInit() {
  }

  getevent(item){
    if((item.type=== this.type)||(this.type===0))
    {

      return item.text
    }
  }

}
