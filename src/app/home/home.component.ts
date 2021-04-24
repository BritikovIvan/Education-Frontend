import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private userUrl = 'api/user';

  message = ""

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.userUrl, {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = 'Hi, ${res.name}';
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = "You are not logged in";
        Emitters.authEmitter.emit(false);
      }
    )
  }

}
