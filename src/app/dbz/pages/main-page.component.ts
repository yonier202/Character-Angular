import { Component, OnInit } from '@angular/core';
// import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainComponent {
  constructor( private dbzService: DbzService){
  }

  get character(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string){
    this.dbzService.deleteCharacterByid(id);
  }

  onNewCharacter( character: Character):void {
    this.dbzService.onNewCharacterService(character)
  }

}
