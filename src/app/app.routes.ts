import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { isAuthenticatedGuard } from './_guards/is-authenticated.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Login' },
  {
    path: 'notes',
    component: NotesComponent,
    title: 'Notes',
    canActivate: [isAuthenticatedGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
