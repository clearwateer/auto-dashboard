import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { 
  MatTableModule, 
  MatDialogModule, 
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  MatCardModule,
  MatTabsModule,
  MatSidenavModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule, 
    MatDialogModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
