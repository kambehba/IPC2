import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KAM Internet Power Control';
     //hhh

      construr()
      {

      }
      public output1 = false;
      public output2 = false;

      

      OnClick1()
      {
        this.output1 = true;
      }

      OffClick1()
      {
        this.output1 = false;
      }

      OnClick2()
      {
        this.output2 = true;
      }

      OffClick2()
      {
        this.output2 = false;
      }





}
