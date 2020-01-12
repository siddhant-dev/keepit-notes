import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
// import { checkServerIdentity } from 'tls';
// import type { Item } from './services/todo';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  isTouch: boolean;
  todoForm: FormGroup;
  // item: Item;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      title: [],
      items: this.fb.array([this.initItems()]),
    });
  }

  initItems(): FormGroup {
    return this.fb.group({
      item: [],
      check: [false]
    });
  }

  show(){
    this.isTouch = true;
  }

  cancel(){
    this.isTouch = false;
    this.todoForm.reset();
  }

  get itemList(){
    return this.todoForm.get('items') as FormArray;
  }


  addItemList (){
    this.itemList.push(this.initItems());
  }

  removeItemList(index){
    this.itemList.removeAt(index);
  }

  save(){
    const data: Todo = this.todoForm.value;
    console.log(data);
    // this.todoForm.setValue({title: 'Sid', items:[ {item: 'hi', check: false} , {item: 'no', check:true}]})
  }

}
