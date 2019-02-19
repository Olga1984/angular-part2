import {Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnChanges {
  // @Input() sourcename: string;
  // @Input() isMynews: boolean;
  sourcenameTitle: string;
  constructor() { }

  ngOnInit() {
      this.sourcenameTitle = 'edit';
  }
  ngOnChanges() {
    // if (this.sourcename && !this.isMynews) {
    //   this.sourcenameTitle = this.sourcename;
    // } else {
    //   this.sourcenameTitle = 'my news';
    // }
  }

}
