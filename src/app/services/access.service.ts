import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  user$: Observable<User>;

  constructor(
    private auth: AngularFireAuth,
    private fs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.fs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
   }

   async createAccount(user: User) {
     try {
      await this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
      const cred = await this.addDetails(user);
      return this.updateUserData(cred);

     } catch (err) {
       return this.handleError(err);
     }

   }

   private async addDetails(user: User){
    const currentUser = this.auth.auth.currentUser;
    try{
      await currentUser.updateProfile({
        displayName: user.name
      });
      return currentUser;
    } catch(err) {
      return this.handleError(err);
    }
  }

  private updateUserData(user){
    const ref: AngularFirestoreDocument<User> = this.fs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      name: user.displayName
    };

    return ref.set(data, {merge: true});
  }

   private handleError(err: any) {
     throw err.code;
   }

   async login(user){
     try{
       return await this.auth.auth.signInWithEmailAndPassword(user.email, user.password);
     } catch(err){
       console.log(err);
     }

   }

   async forgetPassword(email: string) {
    try {
     return await this.auth.auth.sendPasswordResetEmail(email);
    } catch (err) {
     return this.handleError(err);
    }
   }
}
