import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  public inputt:any;
  public com='';
  public mascard:any;
  public list1 = 18;
  public list2 = 30;
  public anon = false;
  public comment ='';
  public a1;
  public user:any;
  public mainuser:any;
  public ideas:any;
  constructor(private servise:AppService) { }

  ngOnInit() {
    this.user = window.localStorage.getItem('userinfo');
    this.mainuser = JSON.parse(this.user);
    this.servise.get_idea().subscribe(value => {

      this.ideas=value;
      this.ideas=this.ideas.items;




    })


  }
 add(name,coment){
    console.log(this.anon);
    if (this.anon==false){
          this.ideas = [{"img":this.mainuser.img,"maker": this.mainuser.name,"name":name,"coment":coment,"date":"27.05.2021","imgs":[],"rez":[]}].concat(this.ideas);
          this.servise.set_idea(this.mainuser.id,name,coment).subscribe(value => {
            console.log(value)
          })
    }
    else {
      this.ideas = [{"img":'assets/nonperson.png',"maker": 'Неопознанный Сотрудник',"name":name,"coment":coment,"date":"27.05.2021","imgs":[],"rez":[]}].concat(this.ideas);
      this.servise.set_idea(201,name,coment).subscribe(value => {
        console.log(value)
      })
    }
 }
 addrez(item){
    console.log(item);
    item.rez.push('assets/images/avatar.jpg');
 }
 addpod(item){
    item.imgs.push('assets/images/avatar.jpg');
 }
}
