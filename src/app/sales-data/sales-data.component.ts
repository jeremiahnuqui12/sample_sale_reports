import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSalesPersonComponent } from './add-sales-person/add-sales-person.component';
import { ItemSalesTransaction, Items, SalesPerson, item_container, sales_person_container, sales_transaction_container } from './interface/sales-records.interface';
import { AddSalesItemComponent } from './add-sales-item/add-sales-item.component';
import { AddSalesTransactionComponent } from './add-sales-transaction/add-sales-transaction.component';


@Component({
  selector: 'app-sales-data',
  templateUrl: './sales-data.component.html',
  styleUrls: ['./sales-data.component.scss']
})
export class SalesDataComponent implements OnInit {
  sales_person = sales_person_container;
  sales_records = sales_transaction_container;
  item_list = item_container;

  sales_report:any = [];
  sales_report_header:string[] = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.generateReport()
  }
  generateReport() {
    this.sales_report_header = [];
    this.sales_report = [];
    this.sales_report_header.push("Sales Person");
    this.item_list.map((item:Items)=>{
      if (item.status) {
        this.sales_report_header.push(item.name)
      }
    });
    this.sales_person.map((person:SalesPerson)=>{
      let data = [];
      data.push(person.name)
      this.item_list.map((item:Items)=>{
        let getItemSales = this.sales_records.filter((records:ItemSalesTransaction)=>records.item_id==item.id&&records.sales_person_id==person.id)
        let getTotalPrice = getItemSales.length ? getItemSales.length*item.price : 0;
        data.push(getTotalPrice)
      })
      this.sales_report.push(data)
    })
  }
  createTransactionRecord() {
    let dialogRef = this.dialog.open(AddSalesTransactionComponent, {
      height: '350px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((res)=>{
      console.log("close dialog sales_records>>>", this.sales_records);
      this.generateReport()
    })
  }
  createSalesPerson() {
    let dialogRef = this.dialog.open(AddSalesPersonComponent, {
      height: '500px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((res)=>{
      console.log("close dialog sales_persons>>>", this.sales_person);
      this.generateReport()
    })
  }
  createItem() {
    let dialogRef = this.dialog.open(AddSalesItemComponent, {
      height: '600px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((res)=>{
      console.log("close dialog item_list>>>", this.item_list);
      this.generateReport()
    })
  }
}
