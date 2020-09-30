import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TransferManageComponent } from './main/transfer-manage/transfer-manage.component';
import { TransactionHistoryComponent } from './main/transaction-history/transaction-history.component';
import { BlockHeaderComponent } from './control/block-header/block-header.component';
import { InputControlComponent } from './control/input-control/input-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TransferManageComponent,
    TransactionHistoryComponent,
    BlockHeaderComponent,
    InputControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
