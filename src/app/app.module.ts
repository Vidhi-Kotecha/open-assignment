import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EligibilityCalculatorComponent } from './components/eligibility-calculator/eligibility-calculator.component';
import { RangeComponent } from './components/range/range.component';
import { AboutComponent } from './components/about/about.component';
import { CardComponent } from './components/card/card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatSliderModule } from '@angular/material/slider'
import { MatSelectModule } from '@angular/material/select'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import { ScrollSpyModule } from 'ngx-scrollspy';

@NgModule({
  declarations: [
    AppComponent,
    EligibilityCalculatorComponent,
    RangeComponent,
    AboutComponent,
    CardComponent,
    NavBarComponent,
    CustomBtnComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    ScrollSpyModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSliderModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
