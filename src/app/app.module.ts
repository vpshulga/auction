import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApplicationComponent} from './components/application/application.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProductItemComponent} from './components/product-item/product-item.component';
import {SearchComponent} from './components/search/search.component';
import {StarsComponent} from './components/stars/stars.component';
import {ProductService} from './services/product.service';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products/:prodTitle', component: ProductDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [ApplicationComponent]
})
export class AppModule {
}
