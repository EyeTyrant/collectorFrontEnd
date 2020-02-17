import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InputComponent } from "./input/input.component";
import { DisplayComponent } from "./display/display.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    DisplayComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
