import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TollbarTitleComponent } from './components/toolbar-title/toolbar-title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarMenuComponent } from './components/toolbar-menu/toolbar-menu.component';

@NgModule({
  declarations: [
    TollbarTitleComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    TollbarTitleComponent,
    FlexLayoutModule
  ]
})
export class SharedModule { }
