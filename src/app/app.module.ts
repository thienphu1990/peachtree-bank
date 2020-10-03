import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TransferManageComponent } from './main/transfer-manage/transfer-manage.component';
import { TransactionHistoryComponent } from './main/transaction-history/transaction-history.component';
import { BlockHeaderComponent } from './control/block-header/block-header.component';
import { TransactionItemComponent } from './main/transaction-history/transaction-item/transaction-item.component';
import { SortButtonComponent } from './control/sort-button/sort-button.component';
import { InputSearchComponent } from './control/input-search/input-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TransferManageComponent,
    TransactionHistoryComponent,
    BlockHeaderComponent,
    TransactionItemComponent,
    SortButtonComponent,
    InputSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
