import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShortenerComponent } from './components/shortener/shortener.component';
import { StartedHeaderComponent } from './components/started-header/started-header.component';
import { StartedFooterComponent } from './components/started-footer/started-footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShortenerComponent,
    StartedHeaderComponent,
    StartedFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ShortenerComponent,
    StartedHeaderComponent,
    StartedFooterComponent
  ]
})
export class SharedModule {}
