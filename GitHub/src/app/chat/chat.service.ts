import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
// import {ApiAiClient} from 'api-ai-javascript';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { ReturnStatement } from '@angular/compiler';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly token = environment.dialogflow.GitBot;
  readonly client = new ApiAiClient({accessToken: this.token});
  public speech;
  speechSource = new BehaviorSubject('');
  currentSpeech = this.speechSource.asObservable();
  router: Router;

  constructor() {
  }

  talk(text: string) {
    return this.client.textRequest(text)
      .then
      (data => {
        this.speech = data.result.fulfillment.speech;
        console.log(this.speech);
        // this.speechSource.next(this.speech);
        return this.speech;
      });
  }
}
