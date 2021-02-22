import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { DisplayComponent } from './components/display/display.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [

    {path :'add-item',component:AddItemComponent},
    {path :'display-item' , component:DisplayComponent},
    {path :'edit-item',component:EditComponent}
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})



export class AppRoutingModule { }
export const routingComponents=[AddItemComponent,EditComponent,DisplayComponent]