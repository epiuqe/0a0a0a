import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    0A0A0ASharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        0A0A0ASharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        0A0A0ASharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class 0A0A0ASharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
