import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wedding',
    templateUrl: 'wedding.component.html',
    styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent implements OnInit{

    ngOnInit(){

    }
    getBackgroundImage(image: string){
        if(window.screen.width < 768){
            return "url(../../../assets/images/responsive-"+image+")";
        }
        else return "url(../../../assets/images/"+image+")";

    }
}
