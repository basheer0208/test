import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Entities } from 'src/app/datastructure/items';


import {ProductService} from '../../services/product.service';
import { DeleteDialogComponent } from '../dialog-box/delete-dialog/delete-dialog.component';



  
  

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
    private router:Router,
    public dialog: MatDialog
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
      case 'Cost': return compare(a.Cost,b.Cost,isAsc);
      case 'City': return compare(a.City, b.City, isAsc);
      case 'State': return compare(a.State, b.State, isAsc);
      case 'Zipcode': return compare(a.Zipcode,b.Zipcode,isAsc);
      default: return 0;
    }
    
  });

  this.productService.sort(this.sortedData)
function compare(a: number | string | any, b: number | string | any, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}

public applyFilter=(value :string)=> {
  
  this.sortedData=this.data.filter(function(item) {
         return item.Itemname.toLowerCase().includes(value.toLowerCase()) || 
             item.Color.toLowerCase().includes(value.toLowerCase()) ||
             item.Inventory.toLowerCase().includes(value.toLowerCase()) ||
             item.Cost.toLowerCase().includes(value.toLowerCase()) ||
             item.City.toLowerCase().includes(value.toLowerCase()) ||
             item.State.toLowerCase().includes(value.toLowerCase()) ||
             item.Zipcode.toLowerCase().includes(value.toLowerCase());
     
    });
    

}

  opendeleteitem(item){
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
        
      width: '250px',data:item,
      
    });
    dialogRef.afterClosed().subscribe(result => {
      
      console.log('The dialog was closed');
      
    });
  }  



  // deleteitem(item){
  //  let x= confirm('Do you want to delete the data?')
  //  if(x){
  //  this.data.splice(item,1);
   
  //  console.log('$$$$$$',this.data);
  //   this.productService.deleteuser(this.data);
    
  //  }
  //  else{
  //    console.warn("user refused to delete")
  //  }
  // }

  edititem(i:number){
      
    this.productService.setdata(i);


  }
 
  

  ngOnInit(): void {
  }
   
  
  
}
