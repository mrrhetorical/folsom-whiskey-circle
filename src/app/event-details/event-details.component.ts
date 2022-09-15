import { Component, OnInit } from '@angular/core';
import { ClubEventServiceService } from '../club-event-service.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private clubEventService:ClubEventServiceService) { }

  ngOnInit(): void {

  }

}
