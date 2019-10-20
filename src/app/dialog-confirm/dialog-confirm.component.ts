import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent  {


  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
