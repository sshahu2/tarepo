import { Component, OnInit,Inject } from '@angular/core';
//import { MatDialogRef } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-hoteldone',
  templateUrl: './hoteldone.component.html',
  styleUrls: ['./hoteldone.component.css']
})
export class HoteldoneComponent  {
hotelname:any;
  constructor(
    public dialogRef: MatDialogRef<HoteldoneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
   onCloseConfirm() {
    this.dialogRef.close(this.hotelname);
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }

}



