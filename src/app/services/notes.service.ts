import { Injectable } from '@angular/core';
import { AccessService } from './access.service';
import { Todo } from './todo';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private access: AccessService, private fs: AngularFirestore, private auth: AngularFireAuth ) {
      
  }

   createNotes(data: Todo) {
     const userId = this.getUser();
     const id = this.fs.createId();
     const ref: AngularFirestoreDocument<Todo> = this.fs.doc(`users/${userId}/notes/${id}`);
     const val = {
      docId: id,
      title: data.title,
      itemList: data.itemList
    };
     return ref.set(val);
   }

   getNote() {
     const userId = this.getUser();
     try {
      const data = this.fs.collection(`users/${userId}/notes`).valueChanges();
      return data;
     } catch (err) {
       return err;
     }
   }

   updateNotes(data: Todo) {
     const userId = this.getUser();
     const ref: AngularFirestoreDocument<Todo> = this.fs.doc(`users/${userId}/notes/${data.docId}`);
     return ref.set(data, {merge: true});
   }

   deleteNotes(docId: string) {
    const userId = this.getUser();
    const ref: AngularFirestoreDocument<Todo> = this.fs.doc(`users/${userId}/notes/${docId}`);
    return ref.delete();
   }

   getUser(){
    const user = this.auth.auth.currentUser;
    return user.uid;
   }
}
