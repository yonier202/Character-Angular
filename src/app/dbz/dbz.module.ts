import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    MainComponent

  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class DbzModule { }
