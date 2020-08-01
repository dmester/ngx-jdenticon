# ngx-jdenticon

Angular 2+ directives that can be used to generate identicons using [Jdenticon](https://github.com/dmester/jdenticon).

![Sample identicons](https://jdenticon.com/hosted/github-samples.png)

[Demo](https://stackblitz.com/edit/ngx-jdenticon-sample)

## Install

Add a dependency to ngx-jdenticon.

```sh
npm install --save ngx-jdenticon jdenticon
```

Let Angular know that you will be using ngx-jdenticon by importing `NgxJdenticonModule` into your `app.module.ts` (or another module).

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxJdenticonModule } from 'ngx-jdenticon'; // <--- Add

import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      NgxJdenticonModule, // <--- Add
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
```

Add an icon to your app. You can choose to decorate either an `<svg>` or `<canvas>` element with the `data-jdenticon-value`
or `data-jdenticon-hash` attribute.

```html
<svg width="100" height="100" data-jdenticon-value="John Doe"></svg>
```

You can also bind a value from your component with the binding syntax:

```html
<svg width="100" height="100" [data-jdenticon-value]="userName"></svg>
```

## See also

[Sample app on StackBlitz](https://stackblitz.com/edit/ngx-jdenticon-sample)