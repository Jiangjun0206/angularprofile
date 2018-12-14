import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseDirective } from 'ng2-bootstrap';
@NgModule({
    declarations:[
        LayoutsComponent,
        NavbarComponent,
        //directive
        CollapseDirective  
    ],
    imports:
    [
        RouterModule,
        CommonModule
    ],
    exports:[
        LayoutsComponent,
        NavbarComponent
    ]
})

export class LayoutsModule{

}