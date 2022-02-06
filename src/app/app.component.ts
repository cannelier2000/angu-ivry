import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
  strValue = "";

  log = [];

  genericEvent(event: any, name: string) {
    this.trace(name + ':' + event.constructor.name);
    console.log(event.constructor.name);
  }

  trace(str: string) {
    this.log.push(str);
    if (this.log.length > 10) {
      console.log("shift");
      this.log.shift();
    }      
  }
}
