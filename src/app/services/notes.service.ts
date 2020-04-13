import { Injectable } from '@angular/core';
import { AccessService } from './access.service';
import { Todo } from './todo';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  userId: string;
  constructor(private access: AccessService, private fs: AngularFirestore, private auth: AngularFireAuth ) {
      const user = this.auth.auth.currentUser;
      this.userId = user.uid;
  }

   createNotes(data: Todo) {
     const id = this.fs.createId();
     const ref: AngularFirestoreDocument<Todo> = this.fs.doc(`users/${this.userId}/notes/${id}`);
     const val = {
      docId: id,
      title: data.title,
      itemList: data.itemList
    };
     return ref.set(val);
   }

   getNote() {
     const data = this.fs.collection(`users/${this.userId}/notes`).valueChanges();
     return data;
   }

   updateNotes(data: Todo) {
     const ref: AngularFirestoreDocument<Todo> = this.fs.doc(`users/${this.userId}/notes/${data.docId}`);
     return ref.set(data, {merge: true});
   }

   deleteNotes(docId: string) {
    const ref: AngularFirestoreDocument<Todo> = this.fs.doc(`users/${this.userId}/notes/${docId}`);
    return ref.delete();
   }
}
