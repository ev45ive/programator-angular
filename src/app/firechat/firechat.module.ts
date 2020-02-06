import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirechatRoutingModule } from './firechat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    FirechatRoutingModule,
    AngularFireAuthModule
  ]
})
export class FirechatModule { }
