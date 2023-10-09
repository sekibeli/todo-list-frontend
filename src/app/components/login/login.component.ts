
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  username: string = '';
  password: string = '';


  constructor(private authService: AuthService, private router: Router){}


  async login() {
    try {
      let resp: any = await this.authService.loginWithUsernameAndPasswort(this.username, this.password)
      console.log(resp);
      localStorage.setItem('token', resp.token);
      //  localStorage.setItem('token', resp.token);
      this.router.navigateByUrl('/home');
      console.log(resp);
    } catch (e) {
      alert('Anmeldung fehlgeschlagen - Passwort oder Username falsch');
      console.log('Feher:', e);
    }
  }

  
}
