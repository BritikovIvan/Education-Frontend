import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from '../model/user';
import { UserRole} from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user?: User | undefined;

  userRole = UserRole;

  navStart: Observable<NavigationStart>;

  constructor(private authService: AuthService, private router: Router) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
   }

  ngOnInit(): void {
    this.navStart.subscribe(evt => this.getUser());
  }

  getUser(): void {
      this.user = this.authService.getUser();
  }

  logout(): void {
    this.authService.logout();
    this.user = undefined;
    this.router.navigate(['/']);
  }

}
