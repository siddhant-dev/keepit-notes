import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbButtonModule, NbLayoutModule,
  NbSidebarModule,
  NbIconModule,
  NbInputModule,
  NbCardModule,
  NbCheckboxModule,

} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
// import { NbButtonModule }  from '@nebular/theme/components/button'



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
    NbCheckboxModule

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
    NbCheckboxModule
  ]
})
export class NebularModule { }