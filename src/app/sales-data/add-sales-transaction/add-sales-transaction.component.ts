import { Component } from '@angular/core';
import { ItemSalesTransaction, item_container, sales_person_container, sales_transaction_container } from '../interface/sales-records.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sales-transaction',
  templateUrl: './add-sales-transaction.component.html',
  styleUrls: ['./add-sales-transaction.component.scss']
})
export class AddSalesTransactionComponent {
  salesTransactionForm = new FormGroup({
    sales_person_id: new FormControl(null),
    item_id: new FormControl(null),
  })
  sales_records = sales_transaction_container;
  sales_person = sales_person_container;
  item_list = item_container;



  constructor(public dialogRef: MatDialogRef<AddSalesTransactionComponent>) {}

  createTransaction(){
    console.log("createTransaction>>>>", this.salesTransactionForm.value);
    if (!this.salesTransactionForm.valid) {
      return;
    }
    const { sales_person_id, item_id } = this.salesTransactionForm.value;
    if (sales_person_id && item_id && !isNaN(sales_person_id) && !isNaN(item_id)) {
      const last_transaction_id = this.sales_person[this.sales_person.length-1].id + 1
      this.sales_records.push({
        id: last_transaction_id,
        sales_person_id:+sales_person_id,
        item_id:+item_id
      })
      this.dialogRef.close(true)
    }
    console.log("this.sales_records>>>", this.sales_records);
  }
  closeModal() {
    this.dialogRef.close(true)
  }
}
