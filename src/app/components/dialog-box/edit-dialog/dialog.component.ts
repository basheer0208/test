import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  public index;
  

  constructor(public dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
  private productService: ProductService,
  private router:Router)
  { 
    this.index=this.productService.getdata();
  }
  onsave(){
    this.productService.edituser(this.data,this.index)
    this.dialogRef.close();
    this.router.navigateByUrl('/display-item');
  }
  oncancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
