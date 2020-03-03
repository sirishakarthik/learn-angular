import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceTransferComponent } from './balance-transfer/balance-transfer.component';
import { PersonalModule } from './personal-module/personal.module';
import { KnowledgeModule } from './knowledge-module/knowledge.module';


@NgModule({
  declarations: [
    AppComponent,
    BalanceTransferComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonalModule,
    KnowledgeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
