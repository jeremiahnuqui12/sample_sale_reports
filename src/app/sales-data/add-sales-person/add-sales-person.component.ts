import { Component } from '@angular/core';
import { SalesPerson, sales_person_container } from '../interface/sales-records.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sales-person',
  templateUrl: './add-sales-person.component.html',
  styleUrls: ['./add-sales-person.component.scss']
})
export class AddSalesPersonComponent {
  salesPersonForm = new FormGroup({
    name: new FormControl<string|null>(null, [Validators.required])
  })
  sales_person = sales_person_container;

  constructor(public dialogRef: MatDialogRef<AddSalesPersonComponent>) {}
  createSalesPerson() {
    console.log(this.salesPersonForm.getRawValue(), this.salesPersonForm.valid);
    if (this.salesPersonForm.valid) {
      const new_person_name = this.salesPersonForm.value.name;
      console.log("new_person_name>>>", new_person_name);
      if (new_person_name && !this.sales_person.filter((x:SalesPerson)=>x.name.toLowerCase()==new_person_name.toLowerCase()).length) {
        const last_person_id = this.sales_person[this.sales_person.length-1].id + 1
        this.sales_person.push({
          id: last_person_id,
          name: new_person_name,
          status:true,
        })  
      }
    }
  }
  updateSalesPerson(person_id: number) {
    const new_person_name = prompt("Enter new name:");
    if (new_person_name) {
      this.sales_person.map((x:SalesPerson)=>{
        if (x.id==person_id) {
          x.name = new_person_name; 
        }
        return x;
      })
    }
  }
  deleteSalesPerson(person_id: number) {
    this.sales_person = this.sales_person.filter((x:SalesPerson)=>x.id!=person_id)
  }
  closeModal() {
    this.dialogRef.close(true)
  }
}
