import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'splash-screen',
    },
    {
        path: 'splash-screen',
        loadComponent: () =>
            import('./pages/splash-screen/splash-screen.component').then(
                (m) => m.SplashScreenComponent,
            ),
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'bill',
        loadComponent: () =>
            import('./pages/bills/bills.component').then(
                (m) => m.BillsComponent,
            ),
    },
    {
        path: 'location',
        loadComponent: () =>
            import('./pages/location/location.component').then(
                (m) => m.LocationComponent,
            ),
    },
    {
        path: 'main-composition',
        loadComponent: () =>
            import('./pages/main-composition/main-composition.component').then(
                (m) => m.MainCompositionComponent,
            ),
    },
    {
        path: 'menu-composition',
        loadComponent: () =>
            import('./pages/menu-composition/menu-composition.component').then(
                (m) => m.MenuCompositionComponent,
            ),
    },
    {
        path: 'order-summary',
        loadComponent: () =>
            import('./pages/order-summary/order-summary.component').then(
                (m) => m.OrderSummaryComponent,
            ),
    },
    {
        path: 'payment',
        loadComponent: () =>
            import('./pages/payment/payment.component').then(
                (m) => m.PaymentComponent,
            ),
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
