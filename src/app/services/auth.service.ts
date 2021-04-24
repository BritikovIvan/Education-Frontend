import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { InMemoryDataService } from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;

  login(userName: string, password: string): Observable<any> {
    // this.http.post(this.userUrl, this.form.value)
    //   .subscribe(() => {
    //     console.log(userName);
    //     console.log(password);
    //     this.isUserLoggedIn = userName == 'admin' && password == 'admin';
    //     localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 
    //   });

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
    );
  }

  logout(): void {
   this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
  }

  constructor(private inMemoryService: InMemoryDataService) { }
}
