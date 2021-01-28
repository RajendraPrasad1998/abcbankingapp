import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Address } from '../classes/Address';
import { Transactions } from '../classes/transactions';
import { User } from '../classes/User';
import {UserServiceService} from '../services/user-service.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService :UserServiceService ) { }

  ngOnInit(): void {
  }

  private user= new User();
  


  form = new FormGroup({
    fullName : new FormControl('' , Validators.required),
    email : new FormControl('' , Validators.required),
    password : new FormControl('' , Validators.required),
    confirmPassword : new FormControl('' , Validators.required),
});


userForm(userInformation){

  let pass = this.Password.value;
  let confirmPass = this.ConfirmPassword.value;

  if(pass == confirmPass)
     {

      this.user.emailId=this.Email.value,
      this.user.name=this.FullName.value,
      this.user.password=this.Password.value
      console.log(this.user)
      this.userService.saveUserDetails(this.user).subscribe(result=>{

          this.form.reset();
          this.fetchUsers();
          console.log(result);


      });


    }
     else
     {
        alert("Password and confirm password not match.");
     }


}


use:any[]=null;



fetchUsers(){

   
  console.log(this.use+"first");

  this.use=[];
 // console.log(this.use+"next to empty");

//  console.log("-----------@@@&&&&&&&&&7777@@------------")
  this.userService.fetchUsers().subscribe( result=>{
for(var res of result){

//  console.log("-----------@@@@@@------------")
//console.log(res)
this.use.push(res)
  
}

  });
}

get FullName(){
  return this.form.get('fullName');
}

get Email(){
    return this.form.get('email');
}

get Password(){
    return this.form.get('password');
}

get ConfirmPassword(){
    return this.form.get('confirmPassword');
}

a =new Address();


updateUser(){
this.user.name="sk";
this.user.emailId="tanguduvenkata.sai@hcl.com"
this.a.country="india";
this.a.pincode="532001"
this.a.state="andhraPradesh";
this.user.address=this.a;

this.userService.update(1,this.user).subscribe(res=>{

console.log(JSON.stringify(res)+"updated");

})

}
email;
email1;
email2;
ammount;

getByEmail(email){

  const data:any[]=[];
  const data1:any[]=[];

  return this.userService.getByEmaiid(email).subscribe(res=>{

console.log(JSON.stringify(res))
  })
}





trasactionlist=[];




transac(email1,email2,ammount){
  let u=new User();
  let p= new User();
  console.log(ammount)


this.userService.getByEmaiid(email1).subscribe(res=>{
      u=res[0]
      console.log(u.address.balance)
      if(u.address.balance>ammount&&ammount>0){
    
  u.address.balance=u.address.balance-ammount
      console.log(u.address.balance)
  this.userService.update(u.id,u).subscribe()
        console.log(u)

        this.userService.getByEmaiid(email2).subscribe(res=>{
          p=res[0]
       console.log(p.emailId)
     p.address.balance=p.address.balance+ammount
       console.log( p.address.balance)
     this.userService.update(p.id,p).subscribe()

     this.userService.getTrans().subscribe( result=>{console.log(result.length)

        /* result.forEach((t)=>{
            this.trasactionlist.push(t);

        })

        console.log("***********************************")
        console.log(this.trasactionlist)
        console.log("***********************************") */


     let trans=new Transactions();
     trans.ammount=ammount;
     trans.balance=u.address.balance;
     trans.date=new Date();
     trans.userId=u.id;
     trans.toMailId=p.emailId;
     trans.toName=p.name;

     trans.id=result.length+1;
     trans.tId=result.length+1;
     
          this.userService.saveTransactionsDetails(trans).subscribe(res=>{
              console.log(JSON.stringify(res));

          });

        });
      });
   
       
   console.log("sucessfull transaction")
   //alert("sucessfull transaction")


 }else{

  alert("please check the data")
 }


});


}



fetchTrans(){

   
  console.log(this.use+"first");

  this.use=[];
 // console.log(this.use+"next to empty");

//  console.log("-----------@@@&&&&&&&&&7777@@------------")
  this.userService.getTrans().subscribe( result=>{
for(var res of result){

//  console.log("-----------@@@@@@------------")
//console.log(res)
this.use.push(res)


  
}
return this.use.length;

  });
  console.log(this.use.length+"lastttttttyyyyyyyyyyyt");

}

}
