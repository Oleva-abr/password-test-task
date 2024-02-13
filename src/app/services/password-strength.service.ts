import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  calculateStrength(password: string): string {
    if (password.trim().length === 0) {
      return 'gray';
    } else if (password.trim().length < 8) {
      return 'red';
    } else {
      const trimmedPassword = password.trim();
      const hasLetters = /[a-zA-Z]/.test(trimmedPassword);
      const hasNumbers = /[0-9]/.test(trimmedPassword);
      const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(trimmedPassword);

      if ((hasLetters && hasNumbers && hasSymbols)) {
        return 'green';
      } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
        return 'yellow';
      } else {
        return 'red';
      }
    }
  }
}
