import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../model/user';
import { Discipline } from '../model/discipline';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
      {id: 1, fullname: 'John', email: 'some@gmail.com', password: '1111', role: 'Professor'},
      {id: 1, fullname: 'Jane', email: 'some1@gmail.com', password: '2222', role: 'Teacher'}
    ]
    const materials = [
      {id: 1, name: 'ProgrammingLab', type: 'Laboratory work', creationDate: '2020-11-30', reviewFinishDate: '2021-01-04', discipline: {
        id: 1, name: 'Programming', abbreviation: 'OAIP', description: 'string', author: 'SomeAuthor'
      }, 
      author: 'Some Author', reviewer: 'Some Reviewer', description: 'string2', reviewStatus: 'Draft'}
    ]
    const disciplines = [
      {id: 1, name: 'Programming', abbreviation: 'OAIP', description: 'string', author: 'SomeAuthor'},
      {id: 2, name: 'System of control', abbreviation: 'SVSU', description: 'string2', author: 'AnotherAuthor'}
    ]
    const authResponse = 
      {user: {id: 1, fullname: 'John', email: 'some@gmail.com', password: '1111', role: 'Professor'}, token: 'someToken'}
  
    return {};
  }

  constructor() { }
}
