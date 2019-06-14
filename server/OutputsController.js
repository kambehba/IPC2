var bodyParser = require('body-parser');
var firebase = require('firebase');
var output = {id:"",status:""};
var outputs = [];

module.exports = function(app){

   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    var lastId = undefined;


   


    app.get("/api/outputs",(req,res)=>{
        
        var database = firebase.database();

        firebase.database().ref('/internet-control/outputs').once('value').then(function(snapshot) {
            outputs = snapshot.val();});
            res.send(outputs); 


            // firebase.database.list('/internet-control/outputs').subscribe(x=>{
            //     var j = x;
            //     console.log(j);
            //     res.send(j); 

            // })
              
    });

    app.get('/api/outputs2/',function(req,res)
    {
         console.log("*rrrrfffffffffrrrrrr");
        // var database = firebase.database();
       
        // firebase.database().ref('/internet-control/outputs').once('value').then(function(snapshot) {
        // outputs = snapshot.val();});
        // res.send(outputs);
        
    });


     //http POST & UPDATE
     app.post('/api/outputs/',function(req,res)
     {
          //UPDATE

          console.log(req.body.id);
         if(req.body.id || req.body.id==0)
         {
            console.log('********');
            console.log(req.body.id);
             var ref = firebase.database().ref('/internet-control/outputs/' + req.body.id);
             ref.update({status:req.body.status});
         }//End of UPDATE
 
         //CREATE
         else
         {
            //  var newTask = Tasks({description:req.body.description,status:req.body.status});
            //  //newTask.save(function(err){if(err)throw err; res.send('success');});
 
            //  newTask.save(function(err,result){
            //      if(err){
            //          return res.status(500).json({
            //              title:'An Error occured',
            //              error:err
            //          });
            //      }
            //      res.status(201).json({
            //          message:'saved task',
            //          obj:result
            //      });
            //  });
         }//End of CREATE
         
     });//End of POST
    
    
    

}