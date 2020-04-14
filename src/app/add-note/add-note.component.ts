import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {Todo} from '../services/todo';
import { NbDialogRef, NbToastrService, NbComponentStatus, NbIconConfig } from '@nebular/theme';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  isTouch: boolean;
  width = false;
  todoForm: FormGroup;
  errMessage: string;
  @Input() todo: Todo;
  // item: Item;
  constructor(private fb: FormBuilder, private dialog: NbDialogRef<AddNoteComponent>,
              private note: NotesService, private toast: NbToastrService) { }

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
        this.itemList.at(i).get('check').setValue(list[i].check);
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
    this.errMessage = '';
    this.isTouch = false;
    const data = this.todoForm.value;
    let finalData: Todo = {
      title: data.title,
      itemList: data.items,
    };
    if (!this.todo) {
      this.note.createNotes(finalData).then(() => {
        this.showToast('Notes created successfully', 'info', 'Notes Created', true);
        this.todoForm.reset();
      }).catch(err => {
        this.showToast('Unable to save at the moment. Please try again later', 'danger', 'Server Error');
      });
    } else {
      finalData = {
        title: data.title,
        itemList: data.items,
        docId: this.todo.docId
      };
      this.note.updateNotes(finalData).then(() => {
        this.showToast('Notes updated successfully', 'info', 'Notes Saved', true);
        this.todoForm.reset();
      }).catch(err => {
        this.showToast('Unable to save at the moment. Please try again later', 'danger', 'Server Error');

      });
    }
    this.dialog.close();
  }

  deleteNote() {
    this.note.deleteNotes(this.todo.docId).then(() => {
      this.showToast('Notes deleted successfully', 'success', 'Notes Deleted');
    }).catch(err => {
      this.showToast('Unable to delete, Please try again later', 'danger', 'Server Error');
    });
    this.dialog.close();

  }

  showToast(message: string, status: NbComponentStatus, title: string, icon?: boolean) {
    if (icon) {
      this.toast.show(message, title, {status, duration: 3000, preventDuplicates: true, icon: 'checkmark-circle-outline'});
    } else {
      this.toast.show(message, title, {status, duration: 3000, preventDuplicates: true});
    }
  }

}
