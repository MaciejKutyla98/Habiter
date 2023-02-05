import { NgModule } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  exports: [
    ToolbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }