import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneDigitComponent } from './phone-digit/phone-digit.component';
import { SalesDataComponent } from './sales-data/sales-data.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
