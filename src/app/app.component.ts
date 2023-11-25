import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhoneDigitComponent } from './phone-digit/phone-digit.component';
import { SalesDataComponent } from './sales-data/sales-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exam';
  constructor(public dialog: MatDialog) {
    
  }
  showPhoneDigitExam() {
    let dialogRef = this.dialog.open(PhoneDigitComponent, {
      height: '600px',
      width: '900px',
    });
  }
  showSalesTransactionExam() {
    let dialogRef = this.dialog.open(SalesDataComponent , {
      height: '600px',
      width: '900px',
    });
  }
}
