import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  public updatedTitleValue: EventEmitter<string> = new EventEmitter();
  constructor() {}
}
