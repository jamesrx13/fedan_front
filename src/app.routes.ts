import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { FormsComponent } from './app/pages/forms/forms.component';

export const appRoutes: Routes = [
    // Public routes
    { path: '', component: Landing },
    { path: 'login', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: 'forms', component: FormsComponent },
    // Private routes (Dashboard)
    {
        path: 'dashboard',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    // Erros
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
