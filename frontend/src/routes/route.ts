import { WelcomePageComponent } from '../app/components/welcome-page/welcome-page.component';
import { Routes } from '@angular/router';

/**
 * Routes to direct to welcome page
 * Redirect to welcome page 
 */
export const routes: Routes = [
    { path: 'welcome', component: WelcomePageComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full'}
  ];