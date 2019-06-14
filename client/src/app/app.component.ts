import { Component } from '@angular/core';
import {OutputsService} from './OutputsService';
import {Output} from './Output';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KAM Internet Power Control';
     //hhh
    private output : Output;
     constructor(private outputsService:OutputsService)
      {
       // var dd = this.ts.getOutput();
       // console.log("*************"+dd);

       this.output = new Output();


      }
      public output1 = false;
      public output2 = false;

      

      OnClick1()
      {
        console.log("FINIssssssssssSHED")
        this.output1 = true;
        this.output.Id = 1;
        this.output.Status = "ON";
        this.output.name = "**sdfs";
        this.outputsService.updateOutput(this.output).subscribe(
          error=>alert(error),
          () => console.log("FINISHED")
        );; 
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
