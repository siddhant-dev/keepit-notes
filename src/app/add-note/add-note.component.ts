import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {Todo} from '../services/todo';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  isTouch: boolean;
  width = false;
  todoForm: FormGroup;
  @Input() todo: Todo;
  // item: Item;
  constructor(private fb: FormBuilder, private dialog: NbDialogRef<AddNoteComponent>) { }

  ngOnInit() {
    this.width = false;
    this.todoForm = this.fb.group({
      title: [],
      items: this.fb.array([this.initItems()]),
    });

    if (this.todo) {
      this.width = true;
      this.todoForm.get('title').setValue(this.todo.title);
      this.show();
      // this.addItemList();
      const list = this.todo.itemList;
      for (let i = 0; i < list.length; i++) {
        this.itemList.at(i).get('item').setValue(list[i].item);
        this.itemList.at(i).get('check').setValue(list[i].isCheck);
        this.addItemList();
      }
      this.removeItemList(list.length);
    }
  }

  initItems(): FormGroup {
    return this.fb.group({
      item: [],
      check: [false]
    });
  }

  show() {
    this.isTouch = true;
  }

  cancel() {
    this.isTouch = false;
    this.todoForm.reset();
    this.dialog.close();

  }

  get itemList() {
    return this.todoForm.get('items') as FormArray;
  }


  addItemList() {
    this.itemList.push(this.initItems());
  }

  removeItemList(index) {
    this.itemList.removeAt(index);
  }

  save() {
    const data: Todo = this.todoForm.value;
    console.log(data);
    // this.todoForm.setValue({title: 'Sid', items:[ {item: 'hi', check: false} , {item: 'no', check:true}]})
    this.dialog.close();
  }

}
