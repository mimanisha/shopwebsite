import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './common/cards/cards.component';
import { SliderComponent } from './common/slider/slider.component';
import { FooterComponent } from './common/footer/footer.component';
import { CharityComponent } from './common/charity/charity.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MedicalshopComponent } from './pages/medicalshop/medicalshop.component';
import { SaimurtishopComponent } from './pages/saimurtishop/saimurtishop.component';
import { ClothshopComponent } from './pages/clothshop/clothshop.component';
import { ElectronicshopComponent } from './pages/electronicshop/electronicshop.component';
import { BookshopComponent } from './pages/bookshop/bookshop.component';
import { GlosarryshopComponent } from './pages/glosarryshop/glosarryshop.component';
import { JewelaryshopComponent } from './pages/jewelaryshop/jewelaryshop.component';
import { FurnictureshopComponent } from './pages/furnictureshop/furnictureshop.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SliderComponent,
    FooterComponent,
    CharityComponent,
    NavbarComponent,
    MedicalshopComponent,
    SaimurtishopComponent,
    ClothshopComponent,
    ElectronicshopComponent,
    BookshopComponent,
    GlosarryshopComponent,
    JewelaryshopComponent,
    FurnictureshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
