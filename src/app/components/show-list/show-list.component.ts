import { Component, OnInit } from '@angular/core';
import { show } from '../../model/show';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  shows: show[ ] = [ ];
  constructor() {
    this.shows.push(new show(1, 'Paw Patrol'));
   }

  ngOnInit() {
  }

}