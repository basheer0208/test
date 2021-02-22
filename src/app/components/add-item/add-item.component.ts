import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import {ProductService} from '../../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../dialog-box/add-dialog/add-dialog.component';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  

  additem = this.fb.group({
    Itemname: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z].*[\\s.]*$'),
      ],
    ],
    Color: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z].*[\\s.]*$'),
      ],

    ],

    Inventory: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z].*[\\s.]*$'),
      ],
    ],
    Cost: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
        Validators.pattern('[0-9]+'),
      ],
    ],
  
    City: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z].*[\\s.]*$'),
      ],
    ],
    State: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z].*[\\s.]*$'),
      ],
    ],
    Zipcode: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('^\\d{5}[0-9]+'),
      ],
    ],
    

  });

  constructor(
    private productService:ProductService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }


  openDialog(newdata): void {
    if(this.additem.valid){
    const dialogRef = this.dialog.open(AddDialogComponent, {
      
      width: '250px',data:newdata,
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
  // addtocart(data){
  //   if(this.additem.valid){
  //   this.productService.setdata(data);
  //   window.alert('Your product has been added to the cart!');
  //   this.additem.reset();
  //   this.productService.adduser(data)
  //   console.log(data) 
  //   }
    
    
  // }
  
  ngOnInit(): void {
  }

}
