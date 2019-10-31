import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreaterepoService } from '../createrepo.service';
import { ReposService } from '../repos.service';
import { DatabaseService } from '../database.service';
import { Database } from '../database';

// @ts-ignore
@Component({
  selector: 'app-allrepo',
  templateUrl: './allrepo.component.html',
  styleUrls: ['./allrepo.component.css']
})
export class AllrepoComponent implements OnInit {
  AllRepos = [];
  data: Database;
  data1: Database[];

  constructor(private Service: ReposService, private dataservice: DatabaseService) {

  }



  ngOnInit() {
    // tslint:disable-next-line:forin
    //  this.data = new Database();
    this.Service.getAllRepo().subscribe((data: any) => {
      this.AllRepos = data;
      console.log(this.AllRepos);

    });
    this.dataservice.findAll().subscribe(data => {
      this.AllRepos = data;
      console.log("all repos");
      console.log(data);
      this.postAll();
    });
  }


  private postAll() {
    for (let i = 0; i < this.AllRepos.length; i++) {
      const repo = this.AllRepos[i];
      console.log(repo);
      this.dataservice.save(repo.name, repo.created_at).subscribe(
        (user) => {
          console.log(user);
        }


      );
    }
  }
}




