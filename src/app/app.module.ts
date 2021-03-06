import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilterComponent } from './filter/filter.component';
import { MapPipe } from './pipes/map.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductFormReactiveComponent } from './product-form-reactive/product-form-reactive.component';
import { DataService } from './services/data.service';
import { ImojeInputDirective } from './imoje-input.directive';
import { ImgDirective } from './img.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFormComponent,
    ProductListComponent,
    HeaderComponent,
    NotFoundComponent,
    FilterComponent,
    MapPipe,
    FilterPipe,
    ProductFormReactiveComponent,
    ImojeInputDirective,
    ImgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService, NgModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
