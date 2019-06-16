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
  private output1Status: string;

  constructor(private outputsService:OutputsService)
  {
    this.output = new Output();
  }

  ngOnInit(){
     this.outputsService.output1Status.subscribe(ss=>{
      alert("ss ==" + ss);
      if(ss == 'ON') this.output1 = true;
      else this.output1 = false;
      
     });
    // alert("ssfes");
    // this.outputsService.output1Status.subscribe(this.dothis);
  }
      
      dothis(ss:string)
      {
        alert("ss ==" + ss);
        if(ss == 'ON') this.output1 = true;
        else this.output1 = false;
      //  this.output1Status = ss;
      }

  OnClick1()
  {
    
    this.output.Id = 1;
    this.output.status = "ON";
    
    this.outputsService.updateOutput2(this.output);

    
  }

 

  OffClick1()
  {
    this.output.Id = 1;
    this.output.status = "OFF";
    this.outputsService.updateOutput2(this.output);
    // this.outputsService.updateOutput(this.output).subscribe(
    // error=>alert(error),
    // () => this.output1 = false); 
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
