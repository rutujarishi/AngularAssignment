import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Component1Component} from './component1/component1.component';
import {DeleteComponent} from './delete/delete.component';
import {ComponentComponent} from './component/component.component';
import {AllrepoComponent} from './allrepo/allrepo.component';
import {ChatComponent} from './chat/chat/chat.component';


const routes: Routes = [
  {path : '', component : ChatComponent},
  {path : 'create', component : Component1Component},
  {path : 'delete', component : DeleteComponent},
  {path : 'getAllRepos', component : AllrepoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
