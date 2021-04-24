import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user';
import { Discipline } from '../models/discipline';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    // const users = [
    //   {id: 1, fullname: 'John', email: 'some@gmail.com', password: '1111', role: 'Professor'},
    //   {id: 1, fullname: 'Jane', email: 'some1@gmail.com', password: '2222', role: 'Teacher'}
    // ]
    // return {users};
    const disciplines = [
      {id: 1, name: 'Programming', abbreviation: 'OAIP', description: 'string'},
      {id: 2, name: 'System of control', abbreviation: 'SVSU', description: 'string2'}
    ]
    return {disciplines};
  }

  constructor() { }
}
