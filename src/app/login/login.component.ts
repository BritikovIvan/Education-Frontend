import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userUrl = 'api/user';

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group( {
      email: '',
      password: ''
    } )
  }

  submit(): void {
    this.http.post(this.userUrl, this.form.value)
      .subscribe(() => this.router.navigate(['/'])); //authService.login().subscribe()
  }

}
