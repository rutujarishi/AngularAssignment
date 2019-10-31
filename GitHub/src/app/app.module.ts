import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { RepoService } from './repos.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentComponent } from './component/component.component';
import {ChatModule} from './chat/chat.module';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import {CreaterepoService} from './createrepo.service';
import {DeleterepoService} from './deleterepo.service';
import { AllrepoComponent } from './allrepo/allrepo.component';
import {ChatService} from './chat/chat.service';
import {ChatComponent} from './chat/chat/chat.component';
import { DatabaseComponent } from './database/database.component';
import { DatabaseService } from './database.service';

// @ts-ignore
// import { DatabaseComponent } from './database/database.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    Component1Component,
    DeleteComponent,
    AllrepoComponent,
    DatabaseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ChatModule
  ],
  providers: [RepoService, CreaterepoService, DeleterepoService, ChatService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
