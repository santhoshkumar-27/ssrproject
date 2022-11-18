import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssrproject';
  clickHandler() {
    console.log('this is click')
    localStorage.setItem('key for ssr', '3214564464 asdfa4sf564ad56f465da4f')
  }
}
