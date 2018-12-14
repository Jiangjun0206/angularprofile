import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  constructor(private injector: Injector) { }
  router: Router;

  ngOnInit() {
    this.router = this.injector.get(Router);
    this.router.events.subscribe((val) => {
      var url = window.location.toString();
      if (url.indexOf('home') > 0 )
      $('.wrapper.main').css("background-image", this.getBackgroundImage('main-background.jpg'));
      //else if (url.indexOf('profile') > 0)
        //do something
      //else if (url.indexOf('social') > 0)
        //this.page = 'social';
      else if (url.indexOf('wedding') > 0)
        $('header').css("background-image", this.getBackgroundImage('wedding-background.jpg'));
      else
        $('.wrapper.main').css("background-image", this.getBackgroundImage('main-background.jpg'));
    });
  }
  getBackgroundImage(image: string){
    if(window.screen.width > 768)
      return "url('../../../assets/images/" + image + "')";
    else 
      return "url('../../../assets/images/responsive-" + image + "')";

  }

}
