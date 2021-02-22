import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface products {
  Itemname: string;
  Color:string;
  Inventory:string;
  Cost:number;
  City:string;
  State:string;
  Zipcode:number;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public data;
  public index;
  public data1;
  
  editform = this.fb.group({
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
        Validators.pattern('[a-zA-Z]+'),
      ],

    ],

    Inventory: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z]+'),
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
        Validators.pattern('[a-zA-Z]+'),
      ],
    ],
    State: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z]+'),
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
    private productService :ProductService,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.index=this.productService.getdata();
    this.data=this.productService.getuser();
    this.data1=this.data[this.index];
    console.log("****************",this.data1)
    
   

   }
   openDialog(modifieddata): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',data:modifieddata,
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
   
     
   edititem(modifieddata){
     if(this.editform.valid){
        let x= confirm("Do you want to change the data")
        if(x){
          this.productService.edituser(modifieddata,this.index);
        }
     }
     
   }

  ngOnInit(): void {
  }

}
