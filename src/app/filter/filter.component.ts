import { Component, Input, OnInit } from '@angular/core';
import { News} from '../news';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  //@Input() articlestobefiltered: News[];
  char: string;
  constructor() { }

  ngOnInit() {
  }

}
