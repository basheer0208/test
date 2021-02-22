import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  public item;
  data:number;
  constructor() { }
  
  setdata(i){
    this.data=i;
  }
  getdata(){
    return this.data;
  }

  
  adduser(data){
    let users=[];
    if(sessionStorage.getItem('users')){
    users=JSON.parse(sessionStorage.getItem('users'));
    users=[data, ...users];
    
    }else{
      users=[data];
    }
    sessionStorage.setItem('users',JSON.stringify(users));
  
}
  
  getuser(){
    this.item=JSON.parse(sessionStorage.getItem('users'));
    console.log("basheer",this.item)
    return this.item;
  }
  getUserByIndex(index:number){
    return JSON.parse(sessionStorage.getItem('users[index]'));
  }
  edituser(edit,i){
    this.item=JSON.parse(sessionStorage.getItem('users'));
    this.item[i]=edit
    
    sessionStorage.removeItem('users')
    sessionStorage.setItem('users',JSON.stringify(this.item));
  }
  deleteuser(data){
    
    
    sessionStorage.setItem('users',JSON.stringify(data));
  }
  sort(data){
    sessionStorage.setItem('users',JSON.stringify(data))
  }
 
  }

