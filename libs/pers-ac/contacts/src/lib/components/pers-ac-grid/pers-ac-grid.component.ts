import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MtAction } from '@mt/pers-ac/core';
import { Contact } from '@mt/interfaces';

@Component({
  selector: 'mt-pers-ac-grid',
  templateUrl: './pers-ac-grid.component.html',
  styleUrls: ['./pers-ac-grid.component.scss']
})
export class PersAcGridComponent {
  displayedColumns: string[] = [
    'title',
    'watchedOn',
    'genre',
    'rating',
    'action'
  ];
  @Input() dataSource: Contact[];
  @Output() action: EventEmitter<MtAction> = new EventEmitter();

  public doAction(type, payload): void {
    this.action.emit({ type, payload });
  }
}
