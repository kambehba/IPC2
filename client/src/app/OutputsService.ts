import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Output} from './Output';
import {Observable} from "rxjs/observable";
import {Subject} from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';



@Injectable()
export class OutputsService {

    outputs : Observable<Output[]>;

    LOCAL_URL : string;
    DEPLOYED_URL : string;

    public output1Status : Subject<string>;
   // output1Status = new Subject<string>();

 //private outputs:Output[]; 
  //private output:Output;
  private qq =[];
  constructor(private http: HttpClient) 
  { 
    this.output1Status = new Subject<string>();
    //this.output = new Output('','OFF')  

    this.LOCAL_URL = 'http://localhost:3000';
    this.DEPLOYED_URL = 'https://ipc2-server.herokuapp.com';

  }

  getOutputs(){
      //this.outputs = this.http.get<Output[]>('http://localhost:3000/api/outputs');
      this.outputs = this.http.get<Output[]>( this.DEPLOYED_URL + '/api/outputs');
  }

  getOutPut(output: Output)
  {
    
    const body = JSON.stringify(output);
    var prams = body;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        
      })};
      
    // this.http.get<Output>('http://localhost:3000/api/output/'+ output.Id).subscribe(data=>{
    //   this.output1Status.next(data.status);
    //   console.log('mmmmm'+data.status);
    // });

    this.http.get<Output>(this.DEPLOYED_URL +'/api/output/'+ output.Id).subscribe(data=>{
      this.output1Status.next(data.status);
     
    });
  }

  updateOutput(output: Output): Observable<Output>{
   
    const body = JSON.stringify(output);
    var prams = body;
   
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          
        })};

        //return this.http.post<Output>('http://localhost:3000/api/outputs',prams,httpOptions);
        return this.http.post<Output>(this.DEPLOYED_URL +'/api/outputs',prams,httpOptions);

        
        //       .map(this.extractData)
        //       .catch(this.handleErrorObservable);

    //const body = JSON.stringify({var1:'test1',var2:'test2'});
    //var prams = 'json=' + body;
   
   // this.http.get('http://localhost:3000/api/outputs')
   //      .map((response:Response)=>response.json());
  
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });


    // return this.http.post('https://ipc-webserver.herokuapp.com/api/outputs',prams,httpOptions)
    // .map(this.extractData)
    // .catch(this.handleErrorObservable);

  }



  updateOutput2(output: Output){
   
    const body = JSON.stringify(output);
    var prams = body;
  
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          
        })};
       
        // this.http.post<Output>('http://localhost:3000/api/outputs',prams,httpOptions).subscribe(response=>{
        //   this.getOutPut(output);

        // });

        this.http.post<Output>(this.DEPLOYED_URL +'/api/outputs',prams,httpOptions).subscribe(response=>{
          this.getOutPut(output);

        });
      
      }



//    getOutput():Observable<Output[]> {
//        // return this.http.get('http://localhost:3000/api/outputs')
//            // .map((response:Response)=>response.json());

//              return this.http.get('https://ipc-webserver.herokuapp.com/api/outputs')
//             .map((response:Response)=>response.json());
//    }

   
   
   
//    updateOutput(output:Output): Observable<Output>{
//       const body = JSON.stringify(output);
//       var prams = body;
     
//       let headers = new Headers({ 'Content-Type': 'application/json' });
//       let options = new http.RequestOptions({ headers: headers });


//      //return this.http.put('http://localhost:3000/api/outputs',body,options)
      
//      return this.http.post('http://localhost:3000/api/outputs',prams,options)
//       .map(this.extractData)
//       .catch(this.handleErrorObservable);

//     //    return this.http.post('https://ipc-webserver.herokuapp.com/api/outputs',prams,options)
//     //    .map(this.extractData)
//     //    .catch(this.handleErrorObservable);

     
// // this.http.post('http://localhost:3000/api/outputs',body);

 
    
     
//    }

//     private handleError(error:any){
//       console.log("EEEEEEEEEEEEEEEEEEEEEEEE");
//      console.log(error);
//      return Observable.throw(error);
//    }

//    private extractData(res: Response) {
// 	    let body = res.json();
//         return body.data || {};
//     }
//     private handleErrorObservable (error: Response | any) {
// 		console.error(error.message || error);
// 		return Observable.throw(error.message || error);
//     }



}
