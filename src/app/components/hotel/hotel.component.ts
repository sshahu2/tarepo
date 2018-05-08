import { Component, OnInit } from '@angular/core';
import {Hotel} from './hotel';
//import { MatDialog } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {HoteldoneComponent} from './../hoteldone/hoteldone.component';
import {MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
    hotel=new Hotel();
    span:any;
    name:any;
    dialogResult = "";
    checkin:any;
    checkout:any;

  constructor(public dialog: MatDialog,public snackBar: MatSnackBar) { }
  ngOnInit() {
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(HoteldoneComponent, {
      width: '250px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     this.name= result;
    });
  }


  
onSubmit(){
console.log(this.hotel.destination);
this.checkin=new Date(this.hotel.check_in);
//this.checkin=this.hotel.check_in;
console.log(this.checkin);
this.checkout=new Date(this.hotel.check_out);

this.hotel.duration=(this.checkout-this.checkin) / (24*3600*1000);
//this.checkout= (this.checkin+this.hotel.duration );
console.log(this.checkout);
}

   openSnackbar() {
    this.snackBar.open("This is the SnackBar message!", "to close!");
  }

  }



