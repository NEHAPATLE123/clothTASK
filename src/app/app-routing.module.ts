import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shaered/components/dashboard/dashboard.component';
import { ProductsComponent } from './shaered/components/products/products.component';
import { SingleproductComponent } from './shaered/components/singleproduct/singleproduct.component';
import { CreateproductComponent } from './shaered/components/createproduct/createproduct.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'products', component:ProductsComponent},
  {path:'products/:id', component:SingleproductComponent},
  {path:'products/:id/edit', component:CreateproductComponent},
  {path:'create', component: CreateproductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
