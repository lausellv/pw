import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  onButtonClick() {
    console.log(this.includeLetters, this.includeLetters, this.includeSymbols);
    this.password = 'Your Password is ...';
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
onChangeUseNumbers() {
  this.includeNumbers = !this.includeNumbers;
}

onChangeUseSymbols() {
  this.includeSymbols = !this.includeSymbols;
}

}
