import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { fieldComponent } from './field/field.component';
import { subjectsComponent } from './subjects/subjects.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    fieldComponent,
    subjectsComponent,
    UsersComponent,
    UserComponent,
    NameEditorComponent,
    ProfileEditorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
