import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomesComponent } from './homes/homes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule} from '@angular/material/dialog';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
