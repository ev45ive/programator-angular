import { Component, OnInit } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import "firebase/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  post = {
    title: "",
    body: ""
  };

  login() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.signOut();
  }

  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    // this.items = firestore.collection('posts').valueChanges();

    this.itemsCollection = firestore.collection<any>("posts");

    // this.items = this.itemsCollection.valueChanges();
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(snapshots =>
        snapshots.map(snapshot => {
          return {
            id: snapshot.payload.doc.id,
            ref: snapshot.payload.doc.ref,
            data: snapshot.payload.doc.data()
          };
        })
      )
    );

    // this.itemsCollection.snapshotChanges().subscribe(console.log)
  }

  addItem() {
    this.itemsCollection.add(this.post);
    this.post = {
      title: "",
      body: ""
    };
  }

  removeItem(ref) {
    // this.firestore.doc("posts/" + id);
    this.firestore.doc(ref).delete();
  }

  selected: any;
  comments: Observable<any[]>;
  commentsCol: AngularFirestoreCollection<any>;

  selectpost(postId) {
    this.selected = this.firestore.doc("posts/" + postId);
    this.commentsCol = this.selected.collection("/comments");
    this.comments = this.commentsCol.valueChanges();
  }

  ngOnInit() {}
}
