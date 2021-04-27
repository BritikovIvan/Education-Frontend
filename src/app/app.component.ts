import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService, private titleService: Title) {
    this.titleService.setTitle("Education");
  }

  ngOnInit() {
    
   }
}
