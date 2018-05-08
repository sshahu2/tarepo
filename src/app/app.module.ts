import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";//for no animations
import "hammerjs";


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';

import {MatRadioModule} from '@angular/material/radio';
import { HotelComponent } from './components/hotel/hotel.component';
import { HoteldoneComponent } from './components/hoteldone/hoteldone.component';
import {  SnackbarComponent } from './components/snackbar/snackbar.component';
import {  TooltipComponent } from './components/tooltip/tooltip.component';

import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
const appRoutes:Routes =[
  {path:'',component:HomeComponent},
   {path:'Menubar',component:MenubarComponent},
    {path:'Sidebar',component:SidebarComponent},
       {path:'Hotel',component:HotelComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelComponent,
    HoteldoneComponent,
     SnackbarComponent,
     TooltipComponent,
     NavbarComponent,
     MenubarComponent,
     SidebarComponent 
     
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    
     MatDialogModule,
    MatRadioModule,
     MatTooltipModule ,
     MatSnackBarModule ,
   MatInputModule,
    MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
     HoteldoneComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
