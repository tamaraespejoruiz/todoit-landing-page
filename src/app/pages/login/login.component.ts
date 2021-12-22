import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {

  hide = true;
  formulario = new FormGroup ({
    email: new FormControl('', Validators.email), 
    contraseña : new FormControl('') 
  })
  onSubmit() {
    console.warn(this.formulario.value);
  }
}
