import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductFormReactiveComponent } from './product-form-reactive/product-form-reactive.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductListComponent },
  { path: 'add', component: ProductFormReactiveComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
