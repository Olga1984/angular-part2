import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaintitlevalueService {

  public updatedTitleValue: EventEmitter<string> = new EventEmitter();
  public isMyNewsAvailable: EventEmitter<boolean> = new EventEmitter();
  constructor() { }


  reportTitle(title: string) {
    this.updatedTitleValue.emit(title);
  }

  myChannelTitleShow(isMyNewsAvailable: boolean) {
    this.isMyNewsAvailable.emit(isMyNewsAvailable);
  }
}
