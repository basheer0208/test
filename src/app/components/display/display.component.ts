import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Entities } from 'src/app/datastructure/items';


import {ProductService} from '../../services/product.service';



  
  

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 public data;
 entities:Entities;
 
  displayedColumns: string[] = [ 'Itemname','Color','Inventory','Cost','City','State','Zipcode'];
  sortedData: any;
  

  
  
  constructor(
    private productService :ProductService,
    private router:Router
  ) { 
    this.data= this.productService.getuser()
    this.sortedData=this.data.slice()
    
  }
  
  sortData(sort :Sort){
    const item = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = item;
      return;
  }
  this.sortedData = item.sort((a, b) => {       
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'Itemname': return compare(a.Itemname, b.Itemname, isAsc);
      case 'Color': return compare(a.Color, b.Color, isAsc);
      case 'Inventory': return compare(a.Inventory, b.Inventory, isAsc);
      case 'City': return compare(a.City, b.City, isAsc);
      case 'State': return compare(a.State, b.State, isAsc);
      case 'Zipcode': return compare(a.Zipcode,b.Zipcode,isAsc);
      default: return 0;
    }
  });

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}

public applyFilter=(filterValue :string)=> {
  
  this.data.filter = filterValue.trim().toLocaleLowerCase();
}



  deleteitem(item){
   let x= confirm('Do you want to delete the data?')
   if(x){
   this.data.splice(item,1);
   
   console.log('$$$$$$',this.data);
    this.productService.deleteuser(this.data);
    
   }
   else{
     console.warn("user refused to delete")
   }
  }
  edititem(i:number){
      
    this.productService.setdata(i);


  }
 
  

  ngOnInit(): void {
  }
   
  
  
}
