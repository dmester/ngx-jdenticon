import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxJdenticonModule, JDENTICON_CONFIG } from 'ngx-jdenticon';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    NgxJdenticonModule,
    FormsModule,
  ],
  providers: [
    {
      // Custom identicon style
      // https://jdenticon.com/icon-designer.html?config=222222ff014132321e363f52
      provide: JDENTICON_CONFIG,
      useValue: {
        lightness: {
            color: [0.31, 0.54],
            grayscale: [0.63, 0.82],
        },
        saturation: {
            color: 0.50,
            grayscale: 0.50,
        },
        backColor: '#222',
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
