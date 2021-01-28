import { Component, OnInit } from '@angular/core';
import { Transactions } from '../classes/transactions';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.css']
})
export class ShowTransactionComponent implements OnInit {

  constructor(private userService :UserServiceService ) { }

  ngOnInit(): void {
    this.getTransactions();
  }
  //transacti=new Transactions();
  trasactionlist:any=null;
  items=["emailId","userId","balance","date"];
  selectedItem='';
  userId='';

sd=''
ed=''
  
getBydate(sd,ed){

  console.log(sd)
  var std=new Date(sd);
  var etd=new Date(ed);

  this.trasactionlist=[];

  this.userService.getBydate(std,etd).subscribe(res=>{
        console.log(res);
        res.forEach(t=>{ this.trasactionlist.push(t);});

  })
      
        
       


}




  getlist(userId){
    console.log("--------------------"+userId)

    this.trasactionlist=[];
      this.userService.getTransactionsById(userId).subscribe(res=>{
          res.forEach(t=>{ this.trasactionlist.push(t);});
        

      });
  }


  



  selected(){


  }
 

getTransactions(){
this.trasactionlist=[];
this.userService.getTrans().subscribe(res=>{

res.forEach((t,index)=>{

  this.trasactionlist.push(t);
  console.log(JSON.stringify(this.trasactionlist))

});
});



}




}