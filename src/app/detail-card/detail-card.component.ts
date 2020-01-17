import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddNoteComponent } from '../add-note/add-note.component';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],
})
export class DetailCardComponent implements OnInit {

  @Input() item: Todo;
  title: string;
  itemList: TodoItem[];

  constructor( private dialog: NbDialogService) { }

  ngOnInit() {
    this.title = this.item.title;
    this.itemList = this.item.itemList;
    console.log(this.title , this.itemList);
  }

  open(id) {
    this.dialog.open(AddNoteComponent , {hasBackdrop:true})
  }

}
