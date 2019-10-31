import { Component, OnInit } from '@angular/core';
import {CreaterepoService} from '../createrepo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private Service: CreaterepoService, private  router : Router) { }
  public repoName;
  public reponame;
  public repoDesc;

  ngOnInit() {
  }

  createRepo() {
    this.Service.createRepo(this.repoName, this.repoDesc).
    subscribe( data => {
      console.log('data');
      console.log(data);
      this.router.navigateByUrl('/getAllRepos');
    });

  }

}
