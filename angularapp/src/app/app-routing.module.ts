import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductComponent } from './product/product.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'update',component:UpdateComponent},
  {path:'product',component:ProductComponent},
{path:'read',component:ReadComponent},
{path:'delete',component:DeleteComponent},
{path:'home',component:HomeComponent},
{path:'',component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
