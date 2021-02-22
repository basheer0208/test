import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddItemComponent } from './components/add-item/add-item.component';
import {MaterialModule} from './material/material.module';
import { ProductService } from './services/product.service';
import { DisplayComponent } from './components/display/display.component';
import { EditComponent } from './components/edit/edit.component';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog-box/edit-dialog/dialog.component';
import { DeleteDialogComponent } from './components/dialog-box/delete-dialog/delete-dialog.component';

@NgModule({ 
  declarations: [
    AppComponent,
    AddItemComponent,
    DisplayComponent,
    EditComponent,
    routingComponents,
    DialogComponent,
    DeleteDialogComponent,
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
    
    
  ],
  
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
