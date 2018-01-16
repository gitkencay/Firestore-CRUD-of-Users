import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

import { Users } from "../models/Users";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<Users>
  Users: Observable<Users[]>;

  constructor(public afs: AngularFirestore) { 
    this.Users = this.afs.collection('Users').valueChanges();
  }

  getUsers(){
    return this.Users;
     }

}
