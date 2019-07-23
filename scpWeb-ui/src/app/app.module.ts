import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
  MatRippleModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatTabsModule,
  MatTableModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule
} from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent, DialogDataExampleDialog } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SpotlightComponent } from './pages/spotlight/spotlight.component';
import { ContactusComponent } from './pages/contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SpotlightComponent,
    ContactusComponent,
    DialogDataExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    // Material UI Import
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatRippleModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataExampleDialog]
})
export class AppModule { }
