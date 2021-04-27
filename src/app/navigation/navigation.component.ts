import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user!: User | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  getUser(): void {
      this.user = this.authService.getUser();
  }

  logout(): void {
  }

  login(): void {
  }

}
