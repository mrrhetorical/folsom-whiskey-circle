import { Injectable } from '@angular/core';
import { ClubEvent } from './club-event';

@Injectable({
  providedIn: 'root'
})
export class ClubEventServiceService {

  readonly events:ClubEvent[] = [];

  constructor() {
    //TOOD: load events from db
  }

  getEvent(eventid:number):ClubEvent {
    return this.events[eventid];
  }
}
