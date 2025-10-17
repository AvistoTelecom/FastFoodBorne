import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withComponentInputBinding()),
        provideLottieOptions({
            player: () => player,
        }),
    ],
};
