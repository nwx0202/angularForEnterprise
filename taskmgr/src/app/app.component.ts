import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskmgr';
  darkTheme: boolean = false;

  switchTheme(event) {
    console.log(event.checked);
    this.darkTheme = event.checked;
  }
}
