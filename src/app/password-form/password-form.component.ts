import { Component } from '@angular/core';
import { PasswordStrengthService } from '../services/password-strength.service';


@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],

})
export class PasswordFormComponent {
  password: string = '';
  passwordStrengthColor: string = 'gray';
  passwordStrengthColor2: string = 'gray';
  passwordStrengthColor3: string = 'gray';

  constructor(private passwordStrengthService: PasswordStrengthService) { }

  calculateStrength() {
    const strength = this.passwordStrengthService.calculateStrength(this.password);
    this.passwordStrengthColor = strength;
    this.passwordStrengthColor2 = strength;
    this.passwordStrengthColor3 = strength;
  }
}
