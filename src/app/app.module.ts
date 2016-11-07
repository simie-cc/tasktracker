import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PersonService } from './person.service';

import { AppComponent } from './app.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
