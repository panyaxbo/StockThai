import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
      this.myStyle = {
          'position': 'fixed',
          'width': '100%',
          'height': '100%',
          'background-color': '#a99ec3',
          'z-index': -1,
          'top': 0,
          'left': 0,
          'right': 0,
          'bottom': 0,
      };

  this.myParams = {
          particles: {
              number: {
                  value: 80,
              },
              color: {
                  value: '#ffffff'
              },
              shape: {
                  type: 'circle',
              },
      },
      retina_detect: true
  };
  }
}
