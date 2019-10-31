import {Component, OnInit} from '@angular/core';
import {CreaterepoService} from '../createrepo.service';
import {DeleterepoService} from '../deleterepo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private Service: DeleterepoService, private  router: Router) {
  }

  public reponame;


  ngOnInit() {

  }

  delete() {
    try {
      this.Service.deleteRepo(this.reponame).subscribe(data1 => {
          console.log('data1');
          console.log(data1);
          window.alert('deleted');
          this.router.navigateByUrl('/getAllRepos');
        },
        error => {
          alert('This Repository doesnot exist');
        });
    } catch (error) {
      window.alert('Already deleted');

    }
  }

}
