import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Transactions } from '../classes/transactions';




@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  
  private  baseUrl = "http://localhost:3000";

  private d1;
  private d2;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  

  constructor(private http: HttpClient, private router :Router) { }

  saveUserDetails(user : User) : Observable<any>
  {
      let url = this.baseUrl+'users';
      return this.http.post(url,user);
  }


   fetchUsers() : Observable<any> {
     return this.http
      .get(this.baseUrl+'users')
      .pipe(
        map(responseData => {
          console.log(responseData);
          const Users = [];
          for (const key in responseData) {

            //console.log(key+"keyvalue")
            if (responseData.hasOwnProperty(key)) {


              Users.push({ ...responseData[key], id: key });
            }
          }
          return Users;
        })
      
      )

      
  }
  update( id,user): Observable<User> {
    


    return this.http.put<User>(this.baseUrl+"/users/"+`${id}` , user, this.httpOptions);
    
  }

getByEmaiid(email){

return this.http.get<User>(this.baseUrl+"/users?emailId="+email,this.httpOptions)
/* .pipe(
 map(responseData => {
   console.log(responseData);
   const Users = [];
   for (const key in responseData) {

     //console.log(key+"keyvalue")
     if (responseData.hasOwnProperty(key)) {


       Users.push({ ...responseData[key]});
     }
   }
   return Users;
 })) */
}



/* 
transaction(s,r) {
  
  const data:any[]=[];
  const data1:any[]=[];

this.getByEmaiid(s).subscribe(responseData=>{

  return 
  
});
let b=this.getByEmaiid(r).subscribe(res=>{


  data1.push(res[0])
  
  });


console.log(data)
console.log(data1)


} */


saveTransactionsDetails(trans : Transactions) : Observable<any>
  {
      let url = "http://localhost:4000/transactions";
      return this.http.post(url,trans);
  }

  getTrans(){
    let url = "http://localhost:4000/transactions";

      return this.http.get(url)
        .pipe(
         map(responseData => {
           //console.log(responseData);
           const transactions = [];
           for (const key in responseData) {
 
             console.log(responseData[key].date+"keyvalue")
             if (responseData.hasOwnProperty(key)) {
 
 
              transactions.push({ ...responseData[key], id: key });
             }
           }
           return transactions;
         })
       
       ) 
  }



  getBydate(sd:Date,ed:Date){

/* console.log(sd)
console.log(ed+typeof(ed)) */

let  p=new Date();
//console.log(p)
    let url = "http://localhost:4000/transactions";

    return this.http
     .get(url)
     .pipe(
       map(responseData => {
         //console.log(responseData);
         const transactions = [];
         for (const key in responseData) {
         // console.log(responseData[key].date)
           let a=responseData[key].date;
           //console.log(a)
           let k=new Date(a);
        /*    console.log(k);
           console.log(k.getDate()); 
           console.log(k>sd)
           console.log(k<=ed)
           console.log(k>sd&&k<ed) */
         
           if (k>=sd&&k<=ed) {
            transactions.push({ ...responseData[key], id: key });
           } 
         }
         console.log(transactions)
         return transactions;
       })
     
     )



  }






















  getTransactionsById(userId:number){
    let url = "http://localhost:4000/transactions";


return this.http.get(url+"?userId="+userId) .pipe(
  map(responseData => {
    console.log(responseData);
    const transactions = [];
    for (const key in responseData) {

      //console.log(key+"keyvalue")
      if (responseData.hasOwnProperty(key)) {


       transactions.push({ ...responseData[key], id: key });
      }
    }
    return transactions;
  })

);


  }


}
