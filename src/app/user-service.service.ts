import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  readonly users:User[] = [];

  constructor() {
    //todo: load users from db
  }
}
