import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { DigitOnlyDirective } from './shared/digit-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    CompareValidatorDirective,
    DigitOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
