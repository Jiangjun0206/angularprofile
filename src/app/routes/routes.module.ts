import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { routes } from './routes';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { WeddingComponent } from './wedding/wedding.component';
import { SocialComponent } from './social/social.component'; 

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
   ],
    declarations: [
        HomeComponent,
        ProfileComponent,
        ContactComponent,
        WeddingComponent,
        SocialComponent
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {
    
}
