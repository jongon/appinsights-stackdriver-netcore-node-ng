import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './auth/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Fabrikam Residences';

  get user(): User { return this.auth.getAuthenticatedUser(); }

  constructor(private auth: AuthService) { }
}
