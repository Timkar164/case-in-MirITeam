import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import { BrowserModule} from '@angular/platform-browser';
import {CardComponent} from './card/card.component';
import {ChatComponent} from './chat/chat.component';
import {GingerbreadComponent} from './gingerbread/gingerbread.component';
import {NewbiepageComponent} from './newbiepage/newbiepage.component';
import {StudyroomComponent} from './studyroom/studyroom.component';
import {SystemComponent} from './system/system.component';
import {IdeaComponent} from './idea/idea.component';

import {TodoComponent} from './todo/todo.component';
import { MycompanyComponent} from './mycompany/mycompany.component';
import { DocumentComponent} from './document/document.component';
import {ProfilleComponent} from './profille/profille.component';
import {KalendarComponent} from './kalendar/kalendar.component';

import {KontaktsComponent} from './kontakts/kontakts.component';

const sysroutes: Routes = [
  {path: '' , component: NewbiepageComponent},
  {path: 'chat',  component: ChatComponent},
  {path: 'study', component: StudyroomComponent},
  {path: 'map', component: CardComponent},
  {path: 'board' , component: GingerbreadComponent},
  {path: 'idea' , component: IdeaComponent},

  {path: 'todo' , component: TodoComponent},
  {path: 'company' , component: MycompanyComponent},
  {path: 'doc' , component: DocumentComponent},
  {path: 'user' , component: ProfilleComponent},
  {path: 'kalendar' , component: KalendarComponent},

  {path:'contacts', component: KontaktsComponent}


];
const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', component: SystemComponent, children: sysroutes}
];
@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
