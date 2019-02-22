import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  // public updatedTitleValue: EventEmitter<string> = new EventEmitter();
  // public isMyNewsAvailable: EventEmitter<boolean> = new EventEmitter();
  // public isCreatePage: EventEmitter<boolean> = new EventEmitter();
  // public isEditPage: EventEmitter<boolean> = new EventEmitter();

  public updatedTitleValue: string = EventEmitter<string> = new EventEmitter();
constructor(){ }


reportTitle(title: string){
    this.updatedTitleValue.emit(title);
  }
  //
  // myChannelTitleShow(isMyNewsAvailable: boolean) {
  //   this.isMyNewsAvailable.emit(isMyNewsAvailable);
  // }

}
