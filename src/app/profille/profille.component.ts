import { Component, OnInit } from '@angular/core';

import { first } from "rxjs/operators";
import { randomStatus } from "../helpers";
@Component({
  selector: 'app-profille',
  templateUrl: './profille.component.html',
  styleUrls: ['./profille.component.css']
})

export class ProfilleComponent implements OnInit {
  tab = 'activity';
  activity:any;
  contacts:any;
  ngOnInit(): void {

    this.activity=this.getActivity();
    this.contacts=this.getContacts();
    console.log(this.contacts);
  }





  getStatus() {
    const status = randomStatus();
    console.log(status);
    return status;
  }


  getActivity() {
    const text = [
      "Добавила новый курс в раздел Учебная комната",
      "Вышла на новый уровень ",
      "Просит добавить в друзья",
      "Успешно предложила идею и получила 50 пряников",
      "Успешно прошла курс Управление коллективом",
      "Успешно прошла курс Таймменеджмент",
      "Обновила данные профиля"
    ];
    const data = Array(8)
      .fill(0)
      .map((_, i) => {
        return {
          subtitle: [

          ][Math.floor(Math.random() * 8)],
          title: [
            "Иван Петров",
            "Анастасия решетова",
            "Иван Рудской",
            "Мария петрова",
            "Александра Саломина",
            "Даниил Ромашкин",
            "Анна Райская",
            "Владимир Сепанов"
          ][Math.floor(Math.random() * 8)],
          avatar: `assets/images/face${Math.floor(Math.random() * 4) +
          1}.jpg`,
          body: text[Math.floor(Math.random() * 7)],
          id: i
        };
      });

    return data;
  }


  getContacts() {
    const data = Array(12)
      .fill(0)
      .map((_, i) => {
        return {
          status: [
            "онлайн",
            "не онлайн",
            "онлайн",
            "онлайн",
            "онлайн",
            "не онлайн",
            "не онлайн",
            "онлайн"
          ][Math.floor(Math.random() * 8)],
          name: [
            "Иван Петров",
            "Анастасия решетова",
            "Иван Рудской",
            "Мария петрова",
            "Александра Саломина",
            "Даниил Ромашкин",
            "Анна Райская",
            "Владимир Сепанов"
          ][Math.floor(Math.random() * 8)],
          avatar: `assets/images/face${Math.floor(Math.random() * 7) +
          1}.jpg`,
          id: i
        };
      });

    return data;
  }


}
