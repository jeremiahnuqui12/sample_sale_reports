import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneDigitComponent } from './phone-digit/phone-digit.component';
import { SalesDataComponent } from './sales-data/sales-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddSalesPersonComponent } from './sales-data/add-sales-person/add-sales-person.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddSalesItemComponent } from './sales-data/add-sales-item/add-sales-item.component';
import { AddSalesTransactionComponent } from './sales-data/add-sales-transaction/add-sales-transaction.component';
@NgModule({
  declarations: [
    AppComponent,
    PhoneDigitComponent,
    SalesDataComponent,
    AddSalesPersonComponent,
    AddSalesItemComponent,
    AddSalesTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
