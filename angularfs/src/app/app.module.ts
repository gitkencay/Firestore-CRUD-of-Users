import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';



import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './service/users.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
