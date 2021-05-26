import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public textt: any;
  public chats:any;
  public user:any;
  public mainuser:any;
  public inputt="";
  public val:any;
  public maindialog:any;
  public mainperson:any;
  public messages = [{"type": false, "img": "assets/images/v1_921.png","time":"7:30am","text":"Я ваш личный помошник, обращайтесь. Напишите мне 'что ты умеешь?'", 'sender':200,'receiver':1}];
  constructor(private servise:AppService) { }

  ngOnInit() {
    this.maindialog=this.messages;
    this.mainperson={"name":'Личный помошник Ботя','img':'assets/images/v1_921.png','id':200};
    this.user = window.localStorage.getItem('userinfo');
    this.mainuser = JSON.parse(this.user);

    setTimeout(()=>{                           //<<<---using ()=> syntax

      this.botsend('вас вызывают к шефу');
    }, 30000);
    this.servise.get_mes(this.mainuser.id).subscribe(value => {

      this.chats=value;
      this.chats=this.chats.items;

    })
  }
  botsend(txt){
    if(this.mainperson.id==200) {
      this.maindialog.push({"type": false, "img": "assets/images/v1_921.png", "time": "8:35am", "text": txt, 'sender': 200, 'receiver': this.mainuser.id});
    }
  }

  sendmes(txt){


    this.send_sql(txt);
    if(this.mainperson.id===200){
    this.servise.bot(txt).subscribe(value => {
      this.val = value;

      this.botsend(this.val.bot);
    });}

  }
  changedialog(user){
    this.mainperson=user;
    this.maindialog=[];
    this.servise.get_dialog(this.mainuser.id,user.id).subscribe(value => {
      this.maindialog=value;
      this.maindialog=this.maindialog.items;

    })
  }
  go_to_bot(user){
    this.mainperson=user;
    this.maindialog=this.messages;

  }
  send_sql(mes){
    this.servise.set_message(mes,this.mainuser.id,this.mainperson.id).subscribe(value => {

      this.textt=value;
      this.maindialog.push({"type": true, "img": this.mainuser.img,"time":"8:35am","text": this.textt.text,'receiver':this.mainperson.id, 'sender':this.mainuser.id});
    })
  }
}
