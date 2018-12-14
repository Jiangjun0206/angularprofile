import { LayoutsComponent } from '../layouts/layouts.component';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { WeddingComponent } from './wedding/wedding.component';
import { SocialComponent } from './social/social.component';

export const routes: Routes = [
    { path: '',
      component: LayoutsComponent,
      children: [
          { path: '', redirectTo:'profile',pathMatch: 'full' },
          { path: 'home', component: HomeComponent},
          { path: 'contact', component: ContactComponent},
          { path: 'social', component: SocialComponent},
          { path: 'profile', component: WeddingComponent}     
      ]
    }
];