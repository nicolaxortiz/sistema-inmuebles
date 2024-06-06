import { Component } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: UserService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password)
      .subscribe(
        () => {
          this.router.navigate(['/create']); // Redirigir a la página de dashboard después del inicio de sesión exitoso
        },
        error => {
          this.errorMessage = error.error.msg; // Mostrar mensaje de error en caso de credenciales incorrectas u otro error
        }
      );
  }
}
