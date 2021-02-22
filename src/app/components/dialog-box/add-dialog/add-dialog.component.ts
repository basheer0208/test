import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
  private productService: ProductService,
  private router:Router) { }

  onsave(){
    this.productService.adduser(this.data);
    this.dialogRef.close();
    this.router.navigateByUrl('/display-item');
  }
  oncancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
