import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
 public data;
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,@Inject(MAT_DIALOG_DATA) public index: any,
  private productService: ProductService,
  private router:Router) {
    this.data=this.productService.getuser();
   }

  onDelete()
  {
    this.dialogRef.close();
    this.data.splice(this.index,1);
    this.productService.deleteuser(this.data);
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);

  }
  onCancel(){
    this.dialogRef.close();
    console.log("User refused to delete")
  }
  ngOnInit(): void {
  }

}
