import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskmgr';
  darkTheme: boolean = false;

  constructor(
    private oc: OverlayContainer
  ) { }

  switchTheme(event) {
    this.darkTheme = event.checked;
    this.oc.getContainerElement().classList.add(this.darkTheme ? 'myapp-dark-theme' : null);
  }
}
