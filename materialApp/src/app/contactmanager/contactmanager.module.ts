import { UserService } from './services/user.service';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
    children: [
      { path: 'contactmanager/:id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    UserService
  ],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent, NotesComponent]
})

export class ContactmanagerModule { }
