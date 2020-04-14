import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbButtonModule, NbLayoutModule,
  NbSidebarModule,
  NbIconModule,
  NbInputModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbListModule,
  NbFormFieldModule,
  NbTooltipModule,
  NbUserModule,
  NbToastrModule

} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbButtonModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbIconModule,
    NbInputModule,
    NbCardModule,
    NbCheckboxModule,
    NbDialogModule.forChild(),
    MatGridListModule,
    NbListModule,
    NbFormFieldModule,
    NbTooltipModule,
    NbUserModule,
    NbToastrModule.forRoot(),

  ],
  exports: [
    NbThemeModule,
    NbButtonModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbIconModule,
    NbInputModule,
    NbCardModule,
    NbCheckboxModule,
    NbDialogModule,
    MatGridListModule,
    NbListModule,
    NbFormFieldModule,
    NbTooltipModule,
    NbUserModule,
    NbToastrModule
  ]
})
export class NebularModule { }
