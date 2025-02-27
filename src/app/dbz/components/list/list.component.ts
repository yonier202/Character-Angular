import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public deleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public CharacterList: Character[] = [{
    id: uuid(),
    name: 'Trunk',
    power: 10
  }];

  OnDeleteCharacter(id: string):void {
    if (!id) return;
    this.deleteCharacter.emit(id);
  }
}
