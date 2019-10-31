import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import {FormsModule} from '@angular/forms';
import {ChatService} from './chat.service';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports: [ChatComponent],
  providers : [ChatService]
})
export class ChatModule { }
