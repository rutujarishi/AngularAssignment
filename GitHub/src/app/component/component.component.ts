import {Component, OnInit} from '@angular/core';
import {stringify} from '@angular/compiler/src/util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  text: string
  str: string

  constructor(private  router: Router) {
  }

  ngOnInit() {
  }

}

