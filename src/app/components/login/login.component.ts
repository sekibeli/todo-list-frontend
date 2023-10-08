
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  username: string = '';
  password: string = '';


  constructor(private authService: AuthService){}


  async login() {
    try {
      let resp = await this.authService.loginWithUsernameAndPasswort(this.username, this.password)
        // redirect
        console.log(resp);
    } catch (e) {
      console.log('Feher:', e);
    }
  }

  
}
