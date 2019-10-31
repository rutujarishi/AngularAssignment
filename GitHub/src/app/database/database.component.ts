import { Component, OnInit } from '@angular/core';
import { Database } from '../database';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  data: Database[];
 
  constructor(private dataService: DatabaseService) {
  }
 
  ngOnInit() {
   
  }
}
