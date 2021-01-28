import { Address } from "./Address";

export class User {
	id:number;
    emailId : string;
	name : string;
	password : string ;
	address: Address;


	get EmailId(){
		return this.EmailId;
	}


}

