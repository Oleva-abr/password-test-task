import { Component } from '@angular/core';


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

  calculateStrength() {
    if (this.password.length === 0) {
      this.passwordStrengthColor = 'gray';
      this.passwordStrengthColor2 = 'gray';
      this.passwordStrengthColor3 = 'gray';
    } else if (this.password.length < 8) {
      this.passwordStrengthColor = 'red';
      this.passwordStrengthColor2 = 'red';
      this.passwordStrengthColor3 = 'red';
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.password);

      if ((hasLetters && hasDigits && !hasSymbols) || (hasLetters && !hasDigits && hasSymbols) || (!hasLetters && hasDigits && hasSymbols)) {
        this.passwordStrengthColor = 'green';
        this.passwordStrengthColor2 = 'green';
        this.passwordStrengthColor3 = 'green';
      } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        this.passwordStrengthColor = 'yellow';
        this.passwordStrengthColor2 = 'yellow';
        this.passwordStrengthColor3 = 'gray';
      } else {
        this.passwordStrengthColor = 'red';
        this.passwordStrengthColor2 = 'gray';
        this.passwordStrengthColor3 = 'gray';
      }
    }
  }
}
