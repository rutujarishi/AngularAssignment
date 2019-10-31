import {Component, OnInit} from '@angular/core';
import {ChatService} from '../chat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public text;
  public speech;

  constructor(private service: ChatService, private router: Router) {
  }

  ngOnInit() {
  }

  async userData() {
    this.speech = await this.service.talk(this.text);
    console.log('new speech' + this.speech);
    if (this.speech === 'ComponentCalled') {
      this.router.navigateByUrl('/create');
    }
    if (this.speech === 'DeleteComponent') {
      this.router.navigateByUrl('/delete');
    }
    if (this.speech === 'RepoCalled') {
      this.router.navigateByUrl('/getAllRepos');
    }

  }
}
