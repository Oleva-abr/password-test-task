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
    this.updateStrengthColors(strength);
  }

  updateStrengthColors(strength: string) {
    switch (strength) {

      case 'weak':
        this.passwordStrengthColor = 'red';
        this.passwordStrengthColor2 = 'red';
        this.passwordStrengthColor3 = 'red';
        break;
      case 'easy':
        this.passwordStrengthColor = 'red';
        this.passwordStrengthColor2 = 'gray';
        this.passwordStrengthColor3 = 'gray';
        break;
      case 'medium':
        this.passwordStrengthColor = 'yellow';
        this.passwordStrengthColor2 = 'yellow';
        this.passwordStrengthColor3 = 'gray';
        break;
      case 'strong':
        this.passwordStrengthColor = 'green';
        this.passwordStrengthColor2 = 'green';
        this.passwordStrengthColor3 = 'green';
        break;

      default:
        this.passwordStrengthColor = 'gray';
        this.passwordStrengthColor2 = 'gray';
        this.passwordStrengthColor3 = 'gray';
    }
  }
}
