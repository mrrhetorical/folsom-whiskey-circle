import { Injectable } from '@angular/core';
import { ClubEvent } from './club-event';
import { ClubEventServiceService } from './club-event-service.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

  constructor(private clubEventService:ClubEventServiceService) { }

  //Register a user for an event
  registerForEvent(eventId:number, user:User):boolean {

    let clubEvent:ClubEvent = this.clubEventService.getEvent(eventId);
    let emails:string[] = clubEvent.getSignedUpEmails();

    for (let i = 0; i < emails.length; i++) {
      if (user.getEmail() === emails[i]) {
        //Already registered.
        return false;
      }
    }

    clubEvent.getSignedUpEmails().push(user.getEmail());

    return true;
  }
}
