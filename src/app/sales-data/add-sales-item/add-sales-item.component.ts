import { Component } from '@angular/core';
import { Items, SalesPerson, item_container } from '../interface/sales-records.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sales-item',
  templateUrl: './add-sales-item.component.html',
  styleUrls: ['./add-sales-item.component.scss']
})
export class AddSalesItemComponent {
  itemForm = new FormGroup({
    name: new FormControl<string|null>(null, [Validators.required]),
    price: new FormControl<number|null>(null, [Validators.required])
  })
  item_list = item_container;

  constructor(public dialogRef: MatDialogRef<AddSalesItemComponent>) {}
  createItem() {
    console.log(this.itemForm.getRawValue(), this.itemForm.valid);
    if (this.itemForm.valid) {
      const { name, price } = this.itemForm.value;
      if (name && price && !isNaN(price)) {
        const last_item_id = this.item_list[this.item_list.length-1].id + 1
        this.item_list.push({
          id: last_item_id,
          name: name,
          price:price,
          status:true,
        })  
      }
    }
  }
  updateSalesPerson(item_id: number) {
    const new_item_name = prompt("Enter new name:");
    let new_item_price:any = prompt("Enter new price:");
    new_item_price = new_item_price as unknown as number;
    if (new_item_name && new_item_price && !isNaN(new_item_price)) {
      this.item_list.map((x:Items)=>{
        if (x.id == item_id) {
          x.name = new_item_name;
          x.price = new_item_price
        }
        return x;
      })
    }
  }
  deleteSalesPerson(item_id: number) {
    this.item_list = this.item_list.filter((x:Items)=>x.id != item_id)
  }
  closeModal() {
    this.dialogRef.close(true)
  }
}
