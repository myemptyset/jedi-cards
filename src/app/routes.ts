import { Routes } from '@angular/router';

export const routesAnna: Routes = [
    {path: '', loadChildren: './about/about.module#AboutModule'},
    {path: 'error', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'signin', loadChildren: './signin/signin.module#SigninModule'},
    {path: 'decks', loadChildren: './decks/decks.module#DecksModule'},
    { path: 'deck', loadChildren: './deck-detail/deck-detail.module#DeckDetailModule' },
    {path: '**', redirectTo: 'error', pathMatch: 'full'}
];

// aixo es diu lazy loading, carreguem el modul en comptes del component sencer per no baixarnos tot el codi al accedir a barra
