import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserRole} from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user!: User | undefined;

  userRole = UserRole;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
      this.user = this.authService.getUser();
  }

  logout(): void {
    this.authService.logout();
  }

}
