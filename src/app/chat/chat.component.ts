import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public inputt="";
  public usermas = [{"img":'assets/images/tany.jpg', "name":"Татьяна Бородина","time":"8:35am","text":"Вы доделали отчет?"},{"img":'assets/images/tim.jpg', "name":"Тимофей Карклин","time":"9:35am","text":"Я скинул документы на почту шефу"},{"img":'assets/images/nik.jpg', "name":"Никита Мараханов","time":"9:40am","text":"Восколько начнем проект?"},{"img":'assets/images/aleks.jpg', "name":"Александр Серышев","time":"10:35am","text":"что вы имелли ввиду?"}];
  public messages = [{"type": false, "img": "assets/images/v1_921.png","time":"7:30am","text":"Я ваш личный помошник, обращайтесь. Напишите мне 'что ты умеешь?'"}];
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{                           //<<<---using ()=> syntax
      console.log(1);
      this.botsend('вас вызывают к шефу');
    }, 30000);
  }
  botsend(txt){

    this.messages.push({"type": false, "img": "assets/images/v1_921.png","time":"8:35am","text": txt});

  }
  bot(comand){
         if (comand==='задачи на день'){
           this.botsend('Обсуждение проекта Х 9:00-11:30  \n' +
             'Экскурсия по новому отделу 14:00-14:45\n' +
             'Тренинг по защите проектов 15:00-16:30')
         }

    if (comand==='заказать справку'){
      this.botsend(" > выберите тип справки: - о трудоустройстве, - о заработной плате");
    }

    if (comand==='задачи на день'){
      this.botsend('Обсуждение проекта Х 9:00-11:30  \n' +
        'Экскурсия по новому отделу 14:00-14:45\n' +
        'Тренинг по защите проектов 15:00-16:30')
    }
    if (comand==='о трудоустройстве' ){
      this.botsend(">Спасибо за заявку! Вам будет прислано уведомление о готовности")
    }
    if (comand==='о заработной плате' ){
      this.botsend(">Спасибо за заявку! Вам будет прислано уведомление о готовности")
    }
    if (comand==='что ты умеешь?' ){
      this.botsend("-задачи на день, -заказать справку, -вид справки, -данные, к кому обратиться, -отпуск, -страховка, -работа")
    }

  }
  sendmes(txt){
    console.log(txt);
    this.messages.push({"type": true, "img": "assets/images/avatar.jpg","time":"8:35am","text": txt});

    this.bot(txt);
  }
}
