# ngx-jdenticon

Angular 2+ directives that can be used to generate identicons using [Jdenticon](https://github.com/dmester/jdenticon).

![Sample identicons](https://jdenticon.com/hosted/github-samples.png)

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dmester/ngx-jdenticon/Build/master?style=flat-square)](https://github.com/dmester/ngx-jdenticon/actions)
[![Downloads](https://img.shields.io/npm/dt/ngx-jdenticon.svg?style=flat-square)](https://www.npmjs.com/package/ngx-jdenticon)
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/dmester/ngx-jdenticon/blob/master/LICENSE)

🚀 [Sample app at StackBlitz](https://stackblitz.com/edit/ngx-jdenticon-sample)

## Install

Add a dependency to [ngx-jdenticon](https://www.npmjs.com/package/ngx-jdenticon) NPM package.

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

## Customize look

If you don't like the default colors, use the [icon designer](https://jdenticon.com/icon-designer.html) to customize the look of identicons generated by ngx-jdenticon.

Icon style configurations are applied by adding a provider for the `JDENTICON_CONFIG` injection token.

```ts
import { NgxJdenticonModule, JDENTICON_CONFIG } from "ngx-jdenticon";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        NgxJdenticonModule,
    ],
    providers: [
        { 
            // Custom identicon style
            // https://jdenticon.com/icon-designer.html?config=222222ff014132321e363f52
            provide: JDENTICON_CONFIG,
            useValue: {
                lightness: {
                    color: [0.31, 0.54],
                    grayscale: [0.63, 0.82]
                },
                saturation: {
                    color: 0.50,
                    grayscale: 0.50
                },
                backColor: "#222",
            },
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

🚀 [Run on StackBlitz](https://stackblitz.com/edit/ngx-jdenticon-custom-design?file=src%2Fapp%2Fapp.module.ts)

## See also

[Jdenticon homepage](https://jdenticon.com)