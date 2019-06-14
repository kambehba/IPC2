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
     
  private output : Output;
  public output1 = false;
  public output2 = false;

  constructor(private outputsService:OutputsService)
  {
    this.output = new Output();
  }
      
      

  OnClick1()
  {

    this.output.Id = 1;
    this.output.status = "ON";
    this.outputsService.updateOutput(this.output).subscribe(
    error=>alert(error),
    () => {console.log('FINISHED')}); 

    
  }

  dothis()
  {

  }

  OffClick1()
  {
    this.output.Id = 1;
    this.output.status = "OFF";
    this.outputsService.updateOutput(this.output).subscribe(
    error=>alert(error),
    () => this.output1 = false); 
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
