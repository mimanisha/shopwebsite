import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookshopComponent } from './pages/bookshop/bookshop.component';
import { MedicalshopComponent } from './pages/medicalshop/medicalshop.component';
import { ElectronicshopComponent } from './pages/electronicshop/electronicshop.component';
import { SaimurtishopComponent } from './pages/saimurtishop/saimurtishop.component';
import { ClothshopComponent } from './pages/clothshop/clothshop.component';
import { CharityComponent } from './common/charity/charity.component';
import { GlosarryshopComponent } from './pages/glosarryshop/glosarryshop.component';
import { FurnictureshopComponent } from './pages/furnictureshop/furnictureshop.component';
import { JewelaryshopComponent } from './pages/jewelaryshop/jewelaryshop.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:CharityComponent},
  {path:'medicalshops',component:MedicalshopComponent},
  {path:'bookshop',component:BookshopComponent},
  {path:'electronicshop',component:ElectronicshopComponent},
  {path:'saimurtishop',component:SaimurtishopComponent},
  {path:'clothesshop',component:ClothshopComponent},
  {path:'furnitureshop',component:FurnictureshopComponent},
  {path:'jewellaryshop',component:JewelaryshopComponent},
  {path:'glosarryshop',component:GlosarryshopComponent},
  {path:'**',redirectTo:'dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
