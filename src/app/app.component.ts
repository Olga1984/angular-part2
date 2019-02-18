import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string;
  isMynewsavailable: boolean;

  hadleSourcename(event: string) {
    this.name = event;
    //console.log(this.name);
  }

  hadleMyNews(event: boolean) {
    this.isMynewsavailable = event;
    //console.log(this.isMynewsavailable);
  }
}
